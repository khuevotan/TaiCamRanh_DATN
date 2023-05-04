const PhieuNhap = require("../../models/PhieuNhap.model");
const CTPhieuNhap = require("../../models/CTPhieuNhap.model");
const TrangThai = require("../../models/TrangThai.model");
const SanPham = require("../../models/SanPham.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị danh sách hóa đơn.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;

    PhieuNhap.getAllAD((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('phieunhap/indexhd', {
                        phieunhap: data,
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
    
    PhieuNhap.findBymapn(req.params.mapn, (err, data) => {
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

                    CTPhieuNhap.findBymapn(req.params.mapn, (err, cthd) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                                    res.render('phieunhap/edithd', {
                                        phieunhap: data,
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
        res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

     // Create a phieunhap
     const phieunhap = new PhieuNhap({
        tennguoinhan: req.body.tennguoinhan,
        ngaygiao: req.body.ngaygiao,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        thanhtoan: req.body.thanhtoan,
        matt: req.body.matt,
        manv: manv,
    });

    PhieuNhap.updateBymapn(
        req.params.mapn,
        phieunhap,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=success');
        }
    );
};

// Xóa thông tin hóa đơn đặt hàng.
exports.delete = (req, res) => {

    CTphieunhap.remove(req.params.mapn, (err, data) => {if (err) {
        if (err.kind === "not_found") {
            res.redirect('/404');
        } else {
            res.redirect('/500');
        }
    } else {
            phieunhap.remove(req.params.mapn, (err, data) => {
                res.redirect('/admin/phieunhap/index?deleted=true')
        });
    }
    });
};

// Xem chi tiết một đơn đặt hàng.
exports.details = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    PhieuNhap.findBymapn(req.params.mapn, (err, data) => {
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
                    CTPhieuNhap.findBymapn(req.params.mapn, (err, cthd) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                                    res.render('phieunhap/detailshd', {
                                        phieunhap: data,
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

