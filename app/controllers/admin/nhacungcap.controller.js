const NhaCungCap = require("../../models/nhacungcap.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới nhà cung cấp.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('nhacungcap/createncc',  {layout: './master2'});
}

// Lưu nhà cung cấp mới khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/nhacungcap/create?status=error')
    }

    const file = req.file

    // Create a nhacungcap
    const nhacungcap = new NhaCungCap({
        tenncc: req.body.tenncc,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        tinhtrang : 1,
    });

    // Save nhacungcap in the database
    NhaCungCap.create(nhacungcap, (err, data) => {
        if (err)
            res.redirect('/admin/nhacungcap/create?status=error')
        else res.redirect('/admin/nhacungcap/create?status=success')
    });
};

// Hiển thị danh sách nhà cung cấp.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    NhaCungCap.getAll( (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            res.render('nhacungcap/indexncc',  {nhacungcap: data, layout: './master3'});
        }
    });
};

// Xem chi tiết một nhà cung cấp.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    NhaCungCap.findBymancc(req.params.mancc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('nhacungcap/detailsncc', { nhacungcap: data,  layout: './master2'});
    });
};

// Chỉnh sửa thông tin một nhà cung cấp.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    NhaCungCap.findBymancc(req.params.mancc, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('nhacungcap/editncc', { nhacungcap: data,  layout: './master2'});
    });
};

// Cập nhật nhà cung cấp khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/nhacungcap/edit/' + req.params.mancc + '?status=error')
    }

    const nhacungcap = new NhaCungCap({
        tenncc: req.body.tenncc,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
    });

    NhaCungCap.updateBymancc(
        req.params.mancc,
        nhacungcap,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/nhacungcap/edit/' + req.params.mancc + '?status=success');
        }
    );
};

// Xóa một nhà cung cấp.
exports.delete = (req, res) => {
    NhaCungCap.findBymancc(req.params.mancc, (err, nhacungcap) => {
        if (err)
            res.redirect('/admin/500')
        else {

            NhaCungCap.remove(req.params.mancc, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/admin/404');
                    } else {
                        res.redirect('/admin/500');
                    }
                } else res.redirect('/admin/nhacungcap/index?deleted=true')
            });
        }
    });
};





