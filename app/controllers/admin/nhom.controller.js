const Nhom = require("../../models/nhom.model");

// Show form create nhom
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('nhom/createts',  {layout: './master2'});
}

// Create and Save a new nhom
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/nhom/create?status=error')
    }

    const file = req.file

    // Create a nhom
    const nhom = new Nhom({
        tents: req.body.tents,
    });
    // Save nhom in the database
    nhom.create(nhom, (err, data) => {
        if (err)
            res.redirect('/admin/nhom/create?status=error')
        else res.redirect('/admin/nhom/create?status=success')
    });
};

// Retrieve all nhom from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tents = req.query.tents;
    Nhom.getAll(tents, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('nhom/indexts',  {nhom: data, layout: './master3'});
        }
    });
};

// Find a single nhom with a mats
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Nhom.findBymats(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhom/editts', { nhom: data,  layout: './master2'});
    });
};

exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Nhom.findBymats(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhom/detailsts', { nhom: data,  layout: './master2'});
    });
};

// Update a nhom identified by the id in the request
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/nhom/edit/' + req.params.mats + '?status=error')
    }

    const nhom = new Nhom({
        tents: req.body.tents,
        hinhdd: req.body.hinhdd,
        motact: req.body.motact,
    });

    Nhom.updateBymats(
        req.params.mats,
        nhom,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/nhom/edit/' + req.params.mats + '?status=success');
        }
    );
};

// Delete a nhom with the specified id in the request
exports.delete = (req, res) => {
    Nhom.remove(req.params.mats, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/nhom/index?deleted=true')
    });
};

// Delete all nhom from the database.
exports.deleteAll = (req, res) => {
    Nhom.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/nhom?deleted=true')
    });
};


