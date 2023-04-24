const LoaiXe = require("../../models/loaixe.model");
const Gio = require("../../models/gio.model");
const ThamSo = require("../../models/ThamSo.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới loại xe.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('loaixe/createlx', {
        layout: './master2'
    });
}

// Lưu loại xe mới khi nhấn nút.
exports.store = (req, res) => {

    // Validate request
    if (!req.body) {
        res.redirect('/admin/loaixe/create?status=error')
    }

    // Create a loaixe
    const loaixe = new LoaiXe({
        tenlx: req.body.tenlx,
        gia: req.body.gia,
    });
    // Save loaixe in the database
    LoaiXe.create(loaixe, (err, data) => {
        if (err)
            res.redirect('/admin/loaixe/create?status=error')
        else res.redirect('/admin/loaixe/create?status=success')
    });
};

// Hiển thị danh sách loại xe.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenlx = req.query.tenlx;
    LoaiXe.getAll(tenlx, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('loaixe/indexlx', {
                loaixe: data,
                layout: './master3'
            });
        }

    });
};

// Chỉnh sửa thông tin một loại xe.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    LoaiXe.findBymalx(req.params.malx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('loaixe/editlx', {
            loaixe: data,
            layout: './master2'
        });
    });
};

// Cập nhật loại xe khi nhấn nút cập nhật.
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/loaixe/edit/' + req.params.malx + '?status=error')
    }

    LoaiXe.updateBymalx(
        req.params.malx,
        new LoaiXe(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/loaixe/edit/' + req.params.malx + '?status=success');
        }
    );
};

// Xóa một loại xe
exports.delete = (req, res) => {
    LoaiXe.remove(req.params.malx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/loaixe/index?deleted=true')
    });
};

// Xem thông tin chi tiết một loại xe.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    LoaiXe.findBymalx(req.params.malx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('loaixe/detailslx', {
            loaixe: data,
            layout: './master2'
        });
    });
};

//======================= GIAO DIEN KHACH HANG ======================= 
// Hiển thị ra màn hình đặt lịch bên phía khách hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenlx = req.query.tenlx;
    const ngayrua = req.params.ngayrua;

    LoaiXe.getAll(tenlx, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            ThamSo.findBymats(1, (err, MAX_ĐL) => {
                if (err)
                    res.redirect('/500')
                else {
                    Gio.getAllKH(ngayrua, MAX_ĐL.giatri, (err, gio) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('datlichrx', {
                                loaixe: data,
                                gio: gio,
                                ngayrua,
                                layout: './master'
                            });
                        }
                    });

                }
            });
        }
    });
};