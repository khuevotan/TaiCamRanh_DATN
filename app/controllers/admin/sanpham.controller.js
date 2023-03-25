const sanpham = require("../../models/sanpham.model");

// Show form create sanpham
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('sanpham/create');
}

// Create and Save a new sanpham
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/sanpham/create?status=error')
    }
    
    // Create a sanpham
    const sanpham = new sanpham({
        tensp: req.body.tensp,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save sanpham in the database
    sanpham.create(sanpham, (err, data) => {
        if (err)
            res.redirect('/sanpham/create?status=error')
        else res.redirect('/sanpham/create?status=success')
    });
};

// Retrieve all sanpham from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tensp = req.query.tensp;
    sanpham.getAll(tensp, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('sanpham/indexsp',  {sanpham: data, layout: './master2'});
        }
   
    });
};


exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tensp = req.query.tensp;
    sanpham.getAll(tensp, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('shop',  {sanpham: data, layout: './master'});
            console.log(data);
        }
   
    });
};

exports.chitiet = (req, res) => {
    res.locals.status = req.query.status;
    sanpham.findBymasp(req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('sanphamct', { sanpham: data , layout: './master'});
    });
};

// Find a single sanpham with a madm
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    sanpham.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('sanpham/edit', { sanpham: data });
    });
};
// Update a sanpham identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/sanpham/edit/' + req.params.madm + '?status=error')
    }

    sanpham.updateByMaDM(
        req.params.madm,
        new sanpham(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/sanpham/edit/' + req.params.madm + '?status=success');
        }
    );
};
// Delete a sanpham with the specified id in the request
exports.delete = (req, res) => {
    sanpham.remove(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/sanpham?deleted=true')
    });
};
// Delete all sanpham from the database.
exports.deleteAll = (req, res) => {
    sanpham.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/sanpham?deleted=true')
    });
};

