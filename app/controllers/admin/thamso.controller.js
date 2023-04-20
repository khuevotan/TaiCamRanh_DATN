const ThamSo = require("../../models/thamso.model");

// Show form create thamso
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('thamso/createts',  {layout: './master2'});
}

// Create and Save a new thamso
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/thamso/create?status=error')
    }

    const file = req.file

    // Create a thamso
    const thamso = new ThamSo({
        tents: req.body.tents,
    });
    // Save thamso in the database
    thamso.create(thamso, (err, data) => {
        if (err)
            res.redirect('/admin/thamso/create?status=error')
        else res.redirect('/admin/thamso/create?status=success')
    });
};

// Retrieve all thamso from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tents = req.query.tents;
    ThamSo.getAll(tents, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('thamso/indexts',  {thamso: data, layout: './master3'});
        }
    });
};

// Find a single thamso with a mats
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    ThamSo.findBymats(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('thamso/editts', { thamso: data,  layout: './master2'});
    });
};

exports.details = (req, res) => {
    res.locals.status = req.query.status;

    ThamSo.findBymats(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('thamso/detailsts', { thamso: data,  layout: './master2'});
    });
};

// Update a thamso identified by the id in the request
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/thamso/edit/' + req.params.mats + '?status=error')
    }

    const thamso = new ThamSo({
        tents: req.body.tents,
        hinhdd: req.body.hinhdd,
        motact: req.body.motact,
    });

    ThamSo.updateBymats(
        req.params.mats,
        thamso,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/thamso/edit/' + req.params.mats + '?status=success');
        }
    );
};

// Delete a thamso with the specified id in the request
exports.delete = (req, res) => {
    ThamSo.remove(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/thamso/index?deleted=true')
    });
};

// Delete all thamso from the database.
exports.deleteAll = (req, res) => {
    thamso.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/thamso?deleted=true')
    });
};


