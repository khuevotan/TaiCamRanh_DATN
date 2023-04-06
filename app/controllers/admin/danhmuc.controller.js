const Danhmuc = require("../../models/danhmuc.model");

// Show form create danhmuc
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('danhmuc/create',  {layout: './master2'});
}

// Create and Save a new danhmuc
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/danhmuc/create?status=error')
    }

    const file = req.file

    // Create a Danhmuc
    const danhmuc = new Danhmuc({
        tendm: req.body.tendm,
        hinhdd: file.filename,
        motact: req.body.motact,
    });
    // Save danhmuc in the database
    Danhmuc.create(danhmuc, (err, data) => {
        if (err)
            res.redirect('/admin/danhmuc/create?status=error')
        else res.redirect('/admin/danhmuc/create?status=success')
    });
};

// Retrieve all danhmuc from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tendm = req.query.tendm;
    Danhmuc.getAll(tendm, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('danhmuc/indexdm',  {danhmuc: data, layout: './master3'});
        }
    });
};

// Hiển thị danh mục bên phía khách hàng
exports.findAllKHdm = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tendm = req.query.tendm;
    Danhmuc.getAll(tendm, (err, danhmuc) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('shop',  {danhmuc: danhmuc, layout: './master'});
             console.log(danhmuc);
        }
   
    });
};


// Find a single danhmuc with a madm
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Danhmuc.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('danhmuc/editdm', { danhmuc: data,  layout: './master2'});
    });
};

// Update a danhmuc identified by the id in the request
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/danhmuc/edit/' + req.params.madm + '?status=error')
    }

    const danhmuc = new Danhmuc({
        tendm: req.body.tendm,
        hinhdd: req.body.hinhdd,
        motact: req.body.motact,
    });

    Danhmuc.updateBymadm(
        req.params.madm,
        danhmuc,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/danhmuc/edit/' + req.params.madm + '?status=success');
        }
    );
};

// Delete a danhmuc with the specified id in the request
exports.delete = (req, res) => {
    Danhmuc.remove(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/danhmuc/index?deleted=true')
    });
};

// Delete all danhmuc from the database.
exports.deleteAll = (req, res) => {
    Danhmuc.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/danhmuc?deleted=true')
    });
};


// Upload fle ảnh
exports.updateADD = (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Vui Lòng Up Ảnh')
        error.httpStatusCode = 400
        return next(error);
    }

        if(req.body.hinhdd != ''){
            const fs = require('fs');
            const fileNameCu = req.body.hinhdd;
            const filePath = '/images/danhmuc/' + fileNameCu; 
          
            fs.unlink("app/public"+ filePath,function(err){
                if(err) throw err;
                console.log('File deleted!');
            });
        }
    
    Danhmuc.updateADD(req.params.madm, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/danhmuc/edit/' + req.params.madm + '?status=successhdd');
        } else {
            res.redirect('/admin/danhmuc/edit/' + req.params.madm + '?status=errorhdd')
        }
    });
}


