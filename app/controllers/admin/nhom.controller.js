const Nhom = require("../../models/nhom.model");

// Hiển thị danh sách nhóm bên phía admin.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    Nhom.getAll((err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            res.render('nhom/indexnh',  {nhom: data, layout: './master3'});
        }
    });
};

