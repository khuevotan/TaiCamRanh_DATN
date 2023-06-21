const HoaDon = require("../../models/HoaDon.model");
const CTHoaDon = require("../../models/CTHoaDon.model");
const TrangThai = require("../../models/TrangThai.model");
const SanPham = require("../../models/SanPham.model");
const PhiShip = require("../../models/phiship.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị danh sách hóa đơn.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;

    HoaDon.getAllAD((err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    PhiShip.findBymaps(data.maps,(err, phiship) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            res.render('hoadon/indexhd', {
                                hoadon: data,
                                phiship: phiship,
                                trangthai: trangthai,
                                layout: './master3'
                            });
                        }
                    });
                   
                }
            });
        }

    });
};

// Chỉnh sửa thông tin hóa đơn.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    const tensp = req.query.tentt;
    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {

                    CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/500')
                                else {

                                    PhiShip.findBymaps(data.maps,(err, phiship) => {
                                        if (err)
                                            res.redirect('/admin/500')
                                        else {
                                            res.render('hoadon/edithd', {
                                                hoadon: data,
                                                phiship: phiship,
                                                trangthai: trangthai,
                                                cthd: cthd,
                                                sanpham: sanpham,
                                                layout: './master2'
                                            });
                                        }
                                    });
                                    
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

// Cập nhật hóa đơn khi nhấn nút Update.
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    let tienShipNumber = parseFloat(req.body.giaphi.replace(/,/g, ''));
    let tongTienSPNumber = parseFloat(req.body.tongtiensp.replace(/,/g, ''));
    let tongtienhdNUmber = tienShipNumber + tongTienSPNumber;

    // Create a hoadon
    const hoadon = new HoaDon({
        tennguoinhan: req.body.tennguoinhan,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        ptthanhtoan: req.body.ptthanhtoan,
        tongtienhd: tongtienhdNUmber,
        manv: manv,
    });

    const phiship = new PhiShip({
        giaphi: tienShipNumber,
    });

    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            PhiShip.updateBymaps(
                data.maps,
                phiship,
                (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/admin/404');
                        } else {
                            res.redirect('/admin/500');
                        }
                    } else {
    
                        HoaDon.updateBymahd(
                            req.params.mahd,
                            hoadon,
                            (err, data) => {
                                if (err) {
                                    if (err.kind === "not_found") {
                                        res.redirect('/admin/404');
                                    } else {
                                        res.redirect('/admin/500');
                                    }
                                } else res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=success');
                            }
                        );
        
                    }
                }
            );
        
        }
    });
   
};

// Cập nhật hóa đơn khi nhấn nút Update.
exports.updateFast = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    // Create a hoadon
    const hoadonfast = new HoaDon({
        thanhtoan: req.body.thanhtoan,
        matt: req.body.matt,
        manv: manv,
    });

    const phishipfast = new PhiShip({
        mavanchuyen: req.body.mavanchuyen,
        ngaygiaohang: req.body.ngaygiaohang,
    });

    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            PhiShip.updateFastByMaPS(
                data.maps,
                phishipfast,
                (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/admin/404');
                        } else {
                            res.redirect('/admin/500');
                        }
                    } else {
    
                        HoaDon.updateFastByMaHD(
                            req.params.mahd,
                            hoadonfast,
                            (err, data) => {
                                if (err) {
                                    if (err.kind === "not_found") {
                                        res.redirect('/admin/404');
                                    } else {
                                        res.redirect('/admin/500');
                                    }
                                } else {
                                    
                                    // trừ số lượng sản phẩm nếu đơn hàng được đưa cho nhà vận chuyển
                                    if(req.body.matt == 5){

                                        CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                                            if (err)
                                                res.redirect('/admin/500')
                                            else {

                                                console.log("log các san rpahamr");
                                                console.log(cthd);

                                                const maspArray = [];
                                                const slspArray = [];

                                                cthd.forEach((item) => {
                                                    maspArray.push(item.masp);
                                                });

                                                cthd.forEach((item) => {
                                                    slspArray.push(item.soluong);
                                                });         

                                                for (let i = 0; i < maspArray.length; i++) {
                                               
                                                    var masp = maspArray[i];
                                                    var soluong = slspArray[i];
                                                
            
                                                    // CTHoaDon.create(cthoadon, (err, data) => {
                                                    SanPham.updateSLNVC( masp, soluong,(err, sanpham) => {
                                                        if (!err) {
                                   
                                                        } else {
                                                            console.log(err);
                                                        }
                                                    });
                                                }
                                                
                                               
                                                 res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=success');
                                            }
                                        });

                                    }else{
                                        res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=success');
                                    }
                                }
                            }
                        );
                    }
                }
            );
        
        }
    });
   
};

// Xóa thông tin hóa đơn đặt hàng.
exports.delete = (req, res) => {

    HoaDon.findBymahd(req.params.mahd,(err, datahoadon) => {
        if (err)
            res.redirect('/admin/500')
        else{

            PhiShip.remove(datahoadon.maps, (err, data) => {
                
                CTHoaDon.remove(req.params.mahd, (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/admin/404');
                        } else {
                            res.redirect('/admin/500');
                        }
                    } else {
                        HoaDon.remove(req.params.mahd, (err, data) => {
                            res.redirect('/admin/hoadon/index?deleted=true')
                        });
                    }
                });
            });
        }
    });
};

// Xem chi tiết một đơn đặt hàng.
exports.details = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            TrangThai.findBymatt(data.matt, (err, trangthai) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/admin/500')
                                else {
                                    PhiShip.findBymaps(data.maps,(err, phiship) => {
                                        if (err)
                                            res.redirect('/admin/500')
                                        else {
                                            res.render('hoadon/detailshd', {
                                                hoadon: data,
                                                trangthai: trangthai,
                                                cthd: cthd,
                                                phiship: phiship,
                                                sanpham: sanpham,
                                                layout: './master2'
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

//======================= GIAO DIEN KHACH HANG ======================= 
// Hiển thị hóa đơn đặt hàng bên phía khach hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const mahd = req.query.mahd;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const offset = (page - 1) * limit;


    HoaDon.getAll(mahd, makh, limit, offset, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('dondathang', {
                        hoadon: data,
                        page,
                        limit,
                        trangthai: trangthai,
                        layout: './master'
                    });
                }
            });
        }
    });
};

// Hiển thị chi tiết một đơn đặt hàng bên phía khach hàng
exports.chitietdathang = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tenlx;
    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {
            CTHoaDon.findBymahd(req.params.mahd, (err, datacthd) => {
                if (err)
                    res.redirect('/500')
                else {

                    PhiShip.findBymaps(data.maps, (err, phiship) => {
                        SanPham.getAll(tensp, (err, sanpham) => {
                            if (err)
                                res.redirect('/500')
                            else {
                                res.render('ctdathang', {
                                    hoadon: data,
                                    cthd: datacthd,
                                    phiship: phiship,
                                    sanpham: sanpham,
                                    layout: './master'
                                });
                            }
                        });
                    });

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

    const mahd = req.query.mahd;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const offset = (page - 1) * limit;


    HoaDon.getLSAll(mahd, makh, limit, offset, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('lsdathang', {
                        hoadon: data,
                        page,
                        limit,
                        trangthai: trangthai,
                        layout: './master'
                    });
                }
            });
        }
    });
};

// thanh toán bằng Stripe
const Publishable_Key = 'pk_test_51MqHEXDWd2W6upWFp32vuRnPei7IjHDNJMJ0rQ8vBc6L4AetU7RqtYP6zXizThorGPFP5d08e76hAcAfWRcUMXPZ00xCXY4HTv'
const Secret_Key = 'sk_test_51MqHEXDWd2W6upWF1VZ7dn4skGPysk27NeODNhPsXlPgoyMbjqoFEl4hICGaAv1WexgSrFcRTo7vGS3S6hHZF1Py00jhzifGQJ'
const stripe = require('stripe')(Secret_Key)

exports.thanhToanThe = (req, res) => {
    mahd = req.params.mahd
    res.render('ttcarddh', {
            key: Publishable_Key,
            mahd: mahd,
    })
}