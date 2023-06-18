const ThamSo = require("../../models/thamso.model");

//======================= GIAO DIEN ADMIN ======================= 

// Hiển thị danh sách tham số.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    
    ThamSo.getAll((err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            res.render('thamso/indexts',  {thamso: data, layout: './master3'});
        }
    });
};

// Chỉnh sửa thông tin một tham số.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    ThamSo.findBymats(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('thamso/editts', { thamso: data,  layout: './master2'});
    });
};

// Xem chi tiết một tham số.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    ThamSo.findBymats(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('thamso/detailsts', { thamso: data,  layout: './master2'});
    });
};

// Cập nhật tham số khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/thamso/edit/' + req.params.mats + '?status=error')
    }

    console.log("TEST");
    console.log(req.body.giatri);

    const thamso = new ThamSo({
        tents: req.body.tents,
        giatri	: req.body.giatri,
        chuthich: req.body.chuthich,
    });

    ThamSo.updateByMaTS(
        req.params.mats,
        thamso,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/thamso/edit/' + req.params.mats + '?status=success');
        }
    );
};


