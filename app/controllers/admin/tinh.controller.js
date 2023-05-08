const Tinh = require("../../models/tinh.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới giờ.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('tinh/createtinh',  {layout: './master2'});
}

// Lưu khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/tinh/create?status=error')
    }

    const file = req.file

    // Create a tinh
    const tinh = new tinh({
        tentinh: req.body.tentinh,
    });
    // Save tinh in the database
    Tinh.create(tinh, (err, data) => {
        if (err)
            res.redirect('/admin/tinh/create?status=error')
        else res.redirect('/admin/tinh/create?status=success')
    });
};

// Hiển thị danh sách giờ.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
   
    Tinh.getAll( (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('tinh/indextinh',  {tinh: data, layout: './master3'});
        }
    });
};

// Chỉnh sửa thông tin giờ.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Tinh.findBymatinh(req.params.matinh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('tinh/edittinh', { tinh: data,  layout: './master2'});
    });
};

// Cập nhật khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/tinh/edit/' + req.params.matinh + '?status=error')
    }

    const tinh = new Tinh({
        tentinh: req.body.tentinh,
    });

    Tinh.updateBymatinh(
        req.params.matinh,
        tinh,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/tinh/edit/' + req.params.matinh + '?status=success');
        }
    );
};

// Xem chi tiết một giờ
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Tinh.findBymatinh(req.params.matinh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('tinh/detailstinh', { tinh: data,  layout: './master2'});
    });
};

// Xóa giờ 
exports.delete = (req, res) => {
    Tinh.remove(req.params.matinh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/tinh/index?deleted=true')
    });
};




