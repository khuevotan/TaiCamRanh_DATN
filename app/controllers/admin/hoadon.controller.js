const HoaDon = require("../../models/HoaDon.model");
const CTHoaDon = require("../../models/CTHoaDon.model");
const TrangThai = require("../../models/TrangThai.model");
const SanPham = require("../../models/SanPham.model");

// Show form create hoadon
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('hoadon/create');
}

// Create and Save a new hoadon
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/hoadon/create?status=error')
    }

    // Create a hoadon
    const hoadon = new hoadon({
        tenbv: req.body.tenbv,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save hoadon in the database
    HoaDon.create(hoadon, (err, data) => {
        if (err)
            res.redirect('/hoadon/create?status=error')
        else res.redirect('/hoadon/create?status=success')
    });
};

// Retrieve all hoadon from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenbv = req.query.tenbv;
    HoaDon.getAll(tenbv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('hoadon/indexdv', {
                hoadon: data,
                layout: './master2'
            });
        }

    });
};

// Hiển thị hóa đơn đặt hàng bên phía khach hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tentt = req.query.tentt;
    HoaDon.getAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll(tentt, (err, trangthai) => {
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

// Hiển thị hóa đơn lịch sử đặt lịch bên phía khách hàng
exports.findAllKHLS = (req, res) => {

    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tentt = req.query.tentt;
    HoaDon.getLSAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            TrangThai.getAll(tentt, (err, trangthai) => {
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

// Hiển thị chi tiết 1 đơn đặt hàng
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

// Find a single hoadon with a madm
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    HoaDon.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('hoadon/edit', {
            hoadon: data
        });
    });
};

// Update a hoadon identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/hoadon/edit/' + req.params.madm + '?status=error')
    }

    HoaDon.updateByMaDM(
        req.params.madm,
        new hoadon(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/hoadon/edit/' + req.params.madm + '?status=success');
        }
    );
};
// Delete a hoadon with the specified id in the request
exports.delete = (req, res) => {
    HoaDon.remove(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/hoadon?deleted=true')
    });
};

// Delete all hoadon from the database.
exports.deleteAll = (req, res) => {
    HoaDon.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/hoadon?deleted=true')
    });
};