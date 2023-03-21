const dichvu = require("../../models/dichvu.model");

// Show form create dichvu
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('dichvu/create');
}

// Create and Save a new dichvu
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/dichvu/create?status=error')
    }
    
    // Create a dichvu
    const dichvu = new dichvu({
        tendv: req.body.tendv,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save dichvu in the database
    dichvu.create(dichvu, (err, data) => {
        if (err)
            res.redirect('/dichvu/create?status=error')
        else res.redirect('/dichvu/create?status=success')
    });
};

// Retrieve all dichvu from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tendv = req.query.tendv;
    dichvu.getAll(tendv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('dichvu/indexdv',  {dichvu: data, layout: './master2'});
        }
   
    });
};


exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tendv = req.query.tendv;
    dichvu.getAll(tendv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('dichvu',  {dichvu: data, layout: './master'});
            console.log(data);
        }
   
    });
};


// Find a single dichvu with a madm
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    dichvu.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('dichvu/edit', { dichvu: data });
    });
};
// Update a dichvu identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/dichvu/edit/' + req.params.madm + '?status=error')
    }

    dichvu.updateByMaDM(
        req.params.madm,
        new dichvu(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/dichvu/edit/' + req.params.madm + '?status=success');
        }
    );
};
// Delete a dichvu with the specified id in the request
exports.delete = (req, res) => {
    dichvu.remove(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/dichvu?deleted=true')
    });
};
// Delete all dichvu from the database.
exports.deleteAll = (req, res) => {
    dichvu.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/dichvu?deleted=true')
    });
};

