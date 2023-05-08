const Huyen = require("../../models/huyen.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới giờ.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('huyen/createhuyen',  {layout: './master2'});
}

// Lưu khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/huyen/create?status=error')
    }

    const file = req.file

    // Create a huyen
    const huyen = new huyen({
        tenhuyen: req.body.tenhuyen,
    });
    // Save huyen in the database
    Huyen.create(huyen, (err, data) => {
        if (err)
            res.redirect('/admin/huyen/create?status=error')
        else res.redirect('/admin/huyen/create?status=success')
    });
};

// Hiển thị danh sách giờ.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
 
    Huyen.getAll( (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('huyen/indexhuyen',  {huyen: data, layout: './master3'});
        }
    });
};

// Chỉnh sửa thông tin giờ.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Huyen.findBymahuyen(req.params.mahuyen, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('huyen/edithuyen', { huyen: data,  layout: './master2'});
    });
};

// Cập nhật khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/huyen/edit/' + req.params.mahuyen + '?status=error')
    }

    const huyen = new Huyen({
        tenhuyen: req.body.tenhuyen,
    });

    Huyen.updateBymahuyen(
        req.params.mahuyen,
        huyen,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/huyen/edit/' + req.params.mahuyen + '?status=success');
        }
    );
};

// Xem chi tiết một giờ
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Huyen.findBymahuyen(req.params.mahuyen, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('huyen/detailshuyen', { huyen: data,  layout: './master2'});
    });
};

// Xóa giờ 
exports.delete = (req, res) => {
    Huyen.remove(req.params.mahuyen, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/huyen/index?deleted=true')
    });
};




