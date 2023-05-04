const HoaDonRX = require("../../models/HoaDonRX.model");
const Gio = require("../../models/Gio.model");
const LoaiXe = require("../../models/LoaiXe.model");
const CTHoaDon = require("../../models/CTHoaDon.model");
const HoaDon = require("../../models/HoaDon.model");

// Show form create hoadonrx
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('hoadonrx/create');
}

// Create and Save a new hoadonrx
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/hoadonrx/create?status=error')
    }
    
    // Create a hoadonrx
    const hoadonrx = new HoaDonRX({
        tenbv: req.body.tenbv,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save hoadonrx in the database
    HoaDonRX.create(hoadonrx, (err, data) => {
        if (err)
            res.redirect('/hoadonrx/create?status=error')
        else res.redirect('/hoadonrx/create?status=success')
    });
};

// Retrieve all hoadonrx from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenbv = req.query.tenbv;
    HoaDonRX.getAll(tenbv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('hoadonrx/indexdv',  {hoadonrx: data, layout: './master2'});
        }
   
    });
};

// Hiển thị hóa đơn đặt lịch bên phía khach hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tengio = req.query.tengio;
    HoaDonRX.getAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll(tengio,(err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('dondatlich',  {hoadonrx: data, gio: gio, layout: './master'});
                    console.log(gio);
             
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
    const tengio = req.query.tengio;
    HoaDonRX.getLSAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll(tengio,(err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('lsdatlich',  {hoadonrx: data, gio: gio, layout: './master'});
                    console.log(gio);
                }
            });
        }
    });
};

// Hiển thị chi tiết 1 đơn đặt lịch hẹn
exports.chitietdatlich = (req, res) => {
    res.locals.status = req.query.status;
    const tengio = req.query.tendm;
    const tenlx = req.query.tenlx;
    HoaDonRX.findBymahdrx(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {
            Gio.getAll(tengio,(err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    LoaiXe.getAll(tenlx,(err, tenlx) => {
                        if (err)
                            res.redirect('/500')
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

// Cập nhật số lượng, giá tiền sản phẩm trong hóa đơn
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
                        res.redirect('/500')
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
                                        res.redirect('/404');
                                    } else {
                                        res.redirect('/500');
                                    }
                                } else res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=successSP');
                            }
                        );

                    }
                });
            }
        }
    );
};

// xóa chi tiết hóa đơn
exports.delete = (req, res) => {

    CTHoaDon.remove(req.params.mahd , req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {

            CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                if (err)
                    res.redirect('/500')
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
                                    res.redirect('/404');
                                } else {
                                    res.redirect('/500');
                                }
                            } else res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=successSP');
                        }
                    );

                }
            });
           
        }
    });
};



