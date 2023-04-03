const Baiviet = require("../../models/baiviet.model");

// Show form create baiviet
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('baiviet/create');
}

// Create and Save a new baiviet
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/baiviet/create?status=error')
    }
    
    // Create a baiviet
    const baiviet = new Baiviet({
        tenbv: req.body.tenbv,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save baiviet in the database
    Baiviet.create(baiviet, (err, data) => {
        if (err)
            res.redirect('/baiviet/create?status=error')
        else res.redirect('/baiviet/create?status=success')
    });
};

// Retrieve all baiviet from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenbv = req.query.tenbv;
    Baiviet.getAll(tenbv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('baiviet/indexdv',  {baiviet: data, layout: './master2'});
        }
   
    });
};


// hiển thị bài viết bên phía khach hàng
exports.findAllKH = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const offset = (page - 1) * limit;

    res.locals.deleted = req.query.deleted;
    const tenbv = req.query.tenbv;

    Baiviet.getAllKH(tenbv,limit, offset, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('baiviet',  {baiviet: data, page, limit, layout: './master'});
            console.log(data);
        }
    });
};


// Find a single baiviet with a madm
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Baiviet.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('baiviet/edit', { baiviet: data });
    });
};

// Update a baiviet identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/baiviet/edit/' + req.params.madm + '?status=error')
    }

    Baiviet.updateByMaDM(
        req.params.madm,
        new baiviet(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/baiviet/edit/' + req.params.madm + '?status=success');
        }
    );
};
// Delete a baiviet with the specified id in the request
exports.delete = (req, res) => {
    Baiviet.remove(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/baiviet?deleted=true')
    });
};
// Delete all baiviet from the database.
exports.deleteAll = (req, res) => {
    Baiviet.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/baiviet?deleted=true')
    });
};

// hiển thị chi tiết 1 bài viết
exports.chitiet = (req, res) => {
    res.locals.status = req.query.status;
    Baiviet.findBymabv(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('baivietct', { baiviet: data , layout: './master'});
    });
};

