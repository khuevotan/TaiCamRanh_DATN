const Gio = require("../../models/gio.model");

// Show form create gio
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('gio/creategio',  {layout: './master2'});
}

// Create and Save a new gio
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

// Retrieve all gio from the database (with condition).
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

// Find a single gio with a magio
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

exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Gio.findBymagio(req.params.magio, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('gio/detailsts', { gio: data,  layout: './master2'});
    });
};

// Update a gio identified by the id in the request
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

// Delete a gio with the specified id in the request
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

// Delete all gio from the database.
exports.deleteAll = (req, res) => {
    Gio.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/gio?deleted=true')
    });
};


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


