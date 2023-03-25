const Khachhang = require("../../models/khachhang.model");

// Show form create khachhang
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('khachhang/create');
}
// Create and Save a new khachhang
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/khachhang/create?status=error')
    }
    
    // Create a khachhang
    const khachhang = new Khachhang({
        tenkh: req.body.tenkh,
        hinhdd: req.body.hinhdd,
        motact: req.body.motact,
    });
    // Save khachhang in the database
    Khachhang.create(khachhang, (err, data) => {
        if (err)
            res.redirect('/khachhang/create?status=error')
        else res.redirect('/khachhang/create?status=success')
    });
};

// Retrieve all khachhang from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenkh = req.query.tenkh;
    khachhang.getAll(tenkh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('khachhang/indexkh',  {khachhang: data, layout: './master2'});
        }
   
    });
};

// Find a single khachhang with a makh
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findBymakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('khachhang/editdm', { khachhang: data,  layout: './master2'});
    });
};

// Edit bên phía khách hàng
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByTaikhoan(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('/khachhang/chinhsuatt', { khachhang: data});
    });
};


// Update a khachhang khi nhấn vào chỉnh sửa thông tin cá nhân bên phía khách hàng
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/edit/' + req.params.makh + '?status=error')
    }

    Khachhang.updateBymakh(
        req.params.makh,
        new khachhang(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/khachhang/edit/' + req.params.makh + '?status=success');
        }
    );
};

// Delete a khachhang with the specified id in the request
exports.delete = (req, res) => {
    Khachhang.remove(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/khachhang?deleted=true')
    });
};


// Delete all khachhang from the database.
exports.deleteAll = (req, res) => {
    Khachhang.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/khachhang?deleted=true')
    });
};

