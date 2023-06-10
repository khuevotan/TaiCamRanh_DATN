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

    let giaBanNumberFL = parseFloat(req.body.gia.replace(/,/g, ''));

    // Create a loaixe
    const loaixe = new LoaiXe({
        tenlx: req.body.tenlx,
        gia: giaBanNumberFL,
        tinhtrang : 1,
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
    LoaiXe.getAll((err, data) => {
        if (err)
            res.redirect('/admin/500')
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
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
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

    let giaBanNumberFL = parseFloat(req.body.gia.replace(/,/g, ''));

    // Create a loaixe
    const loaixe = new LoaiXe({
        tenlx: req.body.tenlx,
        gia: giaBanNumberFL,
    });

    LoaiXe.updateBymalx(
        req.params.malx,
        loaixe,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/loaixe/edit/' + req.params.malx + '?status=success');
        }
    );
};

// Xóa một loại xe.
exports.delete = (req, res) => {
    LoaiXe.remove(req.params.malx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
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
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('loaixe/detailslx', {
            loaixe: data,
            layout: './master2'
        });
    });
};

