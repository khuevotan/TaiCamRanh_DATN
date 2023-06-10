const PhiShip = require("../../models/phiship.model");

//======================= GIAO DIEN ADMIN ======================= 

// Lưu khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/phiship/create?status=error')
    }

    const file = req.file

    // Create a phiship
    const phiship = new PhiShip({
        tenphiship: req.body.tenphiship,
    });
    // Save phiship in the database
    PhiShip.create(phiship, (err, data) => {
        if (err)
            res.redirect('/admin/phiship/create?status=error')
        else res.redirect('/admin/phiship/create?status=success')
    });
};

// Hiển thị danh sách giờ.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;

    PhiShip.getAll( (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('phiship/indexphiship',  {phiship: data, layout: './master3'});
        }
    });
};

// Chỉnh sửa thông tin giờ.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    PhiShip.findBymaps(req.params.maps, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('phiship/editphiship', { phiship: data,  layout: './master2'});
    });
};

// Cập nhật khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/phiship/edit/' + req.params.maps + '?status=error')
    }

    const phiship = new PhiShip({
        tenphiship: req.body.tenphiship,
    });

    PhiShip.updateBymaps(
        req.params.maps,
        phiship,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/phiship/edit/' + req.params.maps + '?status=success');
        }
    );
};



