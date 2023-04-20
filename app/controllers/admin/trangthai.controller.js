const TrangThai = require("../../models/trangthai.model");

// Show form create trangthai
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('trangthai/creatett',  {layout: './master2'});
}

// Create and Save a new trangthai
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('admin/trangthai/create?status=error')
    }

    const file = req.file

    // Create a trangthai
    const trangthai = new TrangThai({
        tentt: req.body.tentt,
    });
    // Save trangthai in the database
    trangthai.create(trangthai, (err, data) => {
        if (err)
            res.redirect('/admin/trangthai/create?status=error')
        else res.redirect('/admin/trangthai/create?status=success')
    });
};

// Retrieve all trangthai from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tentt = req.query.tentt;
    TrangThai.getAll(tentt, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('trangthai/indextt',  {trangthai: data, layout: './master3'});
        }
    });
};


// Find a single trangthai with a matt
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    TrangThai.findBymatt(req.params.matt, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('trangthai/edittt', { trangthai: data,  layout: './master2'});
    });
};


exports.details = (req, res) => {
    res.locals.status = req.query.status;

    TrangThai.findBymatt(req.params.matt, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('trangthai/detailstt', { trangthai: data,  layout: './master2'});
    });
};

// Update a trangthai identified by the id in the request
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/trangthai/edit/' + req.params.matt + '?status=error')
    }

    const trangthai = new TrangThai({
        tentt: req.body.tentt,
    });

    TrangThai.updateBymatt(
        req.params.matt,
        trangthai,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/trangthai/edit/' + req.params.matt + '?status=success');
        }
    );
};

// Delete a trangthai with the specified id in the request
exports.delete = (req, res) => {
    TrangThai.remove(req.params.matt, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/trangthai/index?deleted=true')
    });
};

// Delete all trangthai from the database.
exports.deleteAll = (req, res) => {
    TrangThai.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/trangthai?deleted=true')
    });
};



