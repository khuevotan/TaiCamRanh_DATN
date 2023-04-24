const Nhom = require("../../models/nhom.model");

// Hiển thị form thêm mới nhóm
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('nhom/createnh',  {layout: './master2'});
}

// Create and Save a new nhom
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/nhom/create?status=error')
    }

    const file = req.file

    // Create a nhom
    const nhom = new Nhom({
        tents: req.body.tents,
    });
    // Save nhom in the database
    nhom.create(nhom, (err, data) => {
        if (err)
            res.redirect('/admin/nhom/create?status=error')
        else res.redirect('/admin/nhom/create?status=success')
    });
};

// Hiển thị danh sách nhóm bên phía admin.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    Nhom.getAll((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('nhom/indexnh',  {nhom: data, layout: './master3'});
        }
    });
};

// Chỉnh sửa thông tin một nhóm bên phía admin.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Nhom.findByNhom(req.params.manhom, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhom/editnh', { nhom: data,  layout: './master2'});
    });
};

// Xem chi tiết thông tin một nhóm bên phía admin.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Nhom.findByNhom(req.params.manhom, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhom/detailsnh', { nhom: data,  layout: './master2'});
    });
};

// Cập nhật thông tin nhóm bên phía admin.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/nhom/edit/' + req.params.manhom + '?status=error')
    }

    const nhom = new Nhom({
        tennhom: req.body.tennhom,
    });

    Nhom.updateByMaNhom(
        req.params.manhom,
        nhom,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/nhom/edit/' + req.params.manhom + '?status=success');
        }
    );
};

