const HoaDonRX = require("../../models/HoaDonRX.model");
const Gio = require("../../models/Gio.model");
const LoaiXe = require("../../models/LoaiXe.model");
const CTHoaDon = require("../../models/CTHoaDon.model");
const HoaDon = require("../../models/HoaDon.model");
const PhiShip = require("../../models/phiship.model");


// ========================== GIAO DIỆN AMDIN =============================
// Cập nhật số lượng, giá tiền sản phẩm trong hóa đơn bên phía admin 
exports.update = (req, res) => {

    if (!req.body) {
        res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=errorSP');
    }

    var giaban = req.body.giaban;
    var soluongne =  req.body.soluong;

    // Tạo một ct hóa đơn
    const cthoadon = new CTHoaDon({
        soluong: req.body.soluong,
        giatien: giaban * soluongne,
    });

    CTHoaDon.updateBymahd(
        req.params.mahd,
        req.params.masp,
        cthoadon,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else {

                CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                    if (err)
                        res.redirect('/admin/500')
                    else {
                      
                        var giatien = cthd.map(item => item.giatien);

                        var tongtiensp = 0;

                        for (let i = 0; i < giatien.length; i++) {
                            tongtiensp += giatien[i];
                        }

                        HoaDon.findBymahd(req.params.mahd, (err, datahoadon) => {

                            PhiShip.findBymaps(datahoadon.maps, (err, dataphiship) => {

                           
                            HoaDon.updateBymahdwitdtongtien(
                                req.params.mahd,
                                tongtiensp,
                                tongtiensp + dataphiship.giaphi,
                                (err, data) => {
                                    if (err) {
                                        if (err.kind === "not_found") {
                                            res.redirect('/admin/404');
                                        } else {
                                            res.redirect('/admin/500');
                                        }
                                    } else res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=successSP');
                                }
                            );
                        });
                        });
                    }
                });
            }
        }
    );
};

// Xóa một sản phẩm trong chi tiết hóa đơn
exports.delete = (req, res) => {
    CTHoaDon.countByMaHD(req.params.mahd, (err, slcthd) => {
        if (err)
            res.redirect('/admin/500')
        else {

            var soluongcthd = slcthd[0]['COUNT(*)'];
     
            // số lượng danh sách lớn hơn > 1 thì xóa còn không thì không xóa
            if(soluongcthd >1){
                CTHoaDon.removeHDSP(req.params.mahd , req.params.masp, (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/admin/404');
                        } else {
                            res.redirect('/admin/500');
                        }
                    } else {
            
                        CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                            if (err)
                                res.redirect('/admin/500')
                            else {
                              
                                var giatien = cthd.map(item => item.giatien);
                                var tongtiensp = 0;
                                for (let i = 0; i < giatien.length; i++) {
                                    tongtiensp += giatien[i];
                                }
        
                                HoaDon.updateBymahdwitdtongtien(
                                    req.params.mahd,
                                    tongtiensp,
                                    (err, data) => {
                                        if (err) {
                                            if (err.kind === "not_found") {
                                                res.redirect('/admin/404');
                                            } else {
                                                res.redirect('/admin/500');
                                            }
                                        } else res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=successSP');
                                    }
                                );
            
                            }
                        });
                    }
                });
            }else{
                res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=khongxoaduoc');
            }
        }
    });
};

// ========================== GIAO DIỆN KHÁCH HÀNG =============================
// Hiển thị hóa đơn đặt lịch bên phía khach hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    HoaDonRX.getAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll((err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('dondatlich',  {hoadonrx: data, gio: gio, layout: './master'});
                }
            });
        }
    });

    
};

// Hiển thị hóa đơn lịch sử đặt lịch bên phía khách hàng
exports.findAllKHLS = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    HoaDonRX.getLSAll(makh, (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            Gio.getAll((err, gio) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    res.render('lsdatlich',  {hoadonrx: data, gio: gio, layout: './master'});
                }
            });
        }
    });
};

// Hiển thị chi tiết 1 đơn đặt lịch hẹn
exports.chitietdatlich = (req, res) => {
    res.locals.status = req.query.status;

    HoaDonRX.findBymahdrx(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            Gio.getAll((err, gio) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    LoaiXe.getAll((err, tenlx) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            res.render('ctdatlich', { hoadonrx: data, gio : gio, tenlx: tenlx , layout: './master'});
                            console.log(gio);
                        }
                    });
                }
            });
        }
    });
};




