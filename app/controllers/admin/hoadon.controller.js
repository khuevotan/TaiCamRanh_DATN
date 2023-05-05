const HoaDon = require("../../models/HoaDon.model");
const CTHoaDon = require("../../models/CTHoaDon.model");
const TrangThai = require("../../models/TrangThai.model");
const SanPham = require("../../models/SanPham.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị danh sách hóa đơn.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
 
    HoaDon.getAllAD((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('hoadon/indexhd', {
                        hoadon: data,
                        trangthai: trangthai,
                        layout: './master3'
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
                                    res.render('hoadon/edithd', {
                                        hoadon: data,
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
};

// Cập nhật hóa đơn khi nhấn nút Update.
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

     // Create a hoadon
     const hoadon = new HoaDon({
        tennguoinhan: req.body.tennguoinhan,
        ngaygiao: req.body.ngaygiao,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        thanhtoan: req.body.thanhtoan,
        matt: req.body.matt,
        manv: manv,
    });

    HoaDon.updateBymahd(
        req.params.mahd,
        hoadon,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/hoadon/edit/' + req.params.mahd + '?status=success');
        }
    );
};

// Xóa thông tin hóa đơn đặt hàng.
exports.delete = (req, res) => {
    
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
};

// Xem chi tiết một đơn đặt hàng.
exports.details = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {
            TrangThai.findBymatt(data.matt, (err, trangthai) => {
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
                                    res.render('hoadon/detailshd', {
                                        hoadon: data,
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
};

//======================= GIAO DIEN KHACH HANG ======================= 
// Hiển thị hóa đơn đặt hàng bên phía khach hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    HoaDon.getAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('dondathang', {
                        hoadon: data,
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
            CTHoaDon.findBymahd(req.params.mahd, (err, cthd) => {
                if (err)
                    res.redirect('/500')
                else {
                    SanPham.getAll(tensp, (err, sanpham) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('ctdathang', {
                                hoadon: data,
                                cthd: cthd,
                                sanpham: sanpham,
                                layout: './master'
                            });
                        }
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
  
    HoaDon.getLSAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('lsdathang', {
                        hoadon: data,
                        trangthai: trangthai,
                        layout: './master'
                    });
                }
            });
        }
    });
};