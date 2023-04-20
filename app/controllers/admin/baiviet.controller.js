const Baiviet = require("../../models/baiviet.model");

// Show form create baiviet
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('baiviet/createbv', {layout: './master2'});
}

// Create and Save a new baiviet
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/baiviet/create?status=error')
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
            res.redirect('/admin/baiviet/create?status=error')
        else res.redirect('/admin/baiviet/create?status=success')
    });
};

// Retrieve all baiviet from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenbv = req.query.tenbv;
    Baiviet.getAllAD(tenbv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('baiviet/indexbv',  {baiviet: data, layout: './master3'});
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


// Find a single baiviet with a mabv
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Baiviet.findBymabv(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('baiviet/editbv', { baiviet: data ,  layout: './master2'});
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
    Baiviet.remove(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/baiviet/index?deleted=true')
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
            const filePath = '/images/baiviet/' + fileNameCu; 
          
            fs.unlink("app/public"+ filePath,function(err){
                if(err) throw err;
                console.log('File deleted!');
            });
        }
    
    Baiviet.updateADD(req.params.mabv, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/baiviet/edit/' + req.params.mabv + '?status=successhdd');
        } else {
            res.redirect('/admin/baiviet/edit/' + req.params.mabv + '?status=errorhdd')
        }
    });
}


// hiển thị chi tiết 1 bài viết
exports.details = (req, res) => {
    res.locals.status = req.query.status;
    Baiviet.findBymabv(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('baiviet/detailsbv', { baiviet: data,  layout: './master2'});
    });
};