const Gio = require("../../models/gio.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới giờ.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('gio/creategio',  {layout: './master2'});
}

// Lưu khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/gio/create?status=error')
    }

    const file = req.file

    // Create a gio
    const gio = new Gio({
        tengio: req.body.tengio,
    });
    // Save gio in the database
    Gio.create(gio, (err, data) => {
        if (err)
            res.redirect('/admin/gio/create?status=error')
        else res.redirect('/admin/gio/create?status=success')
    });
};

// Hiển thị danh sách giờ.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tengio = req.query.tengio;
    Gio.getAll(tengio, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('gio/indexgio',  {gio: data, layout: './master3'});
        }
    });
};

// Chỉnh sửa thông tin giờ.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Gio.findBymagio(req.params.magio, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('gio/editgio', { gio: data,  layout: './master2'});
    });
};

// Cập nhật khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/gio/edit/' + req.params.magio + '?status=error')
    }

    const gio = new Gio({
        tengio: req.body.tengio,
    });

    Gio.updateBymagio(
        req.params.magio,
        gio,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/gio/edit/' + req.params.magio + '?status=success');
        }
    );
};

// Xem chi tiết một giờ
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Gio.findBymagio(req.params.magio, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('gio/detailsgio', { gio: data,  layout: './master2'});
    });
};

// Xóa giờ 
exports.delete = (req, res) => {
    Gio.remove(req.params.magio, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/gio/index?deleted=true')
    });
};




