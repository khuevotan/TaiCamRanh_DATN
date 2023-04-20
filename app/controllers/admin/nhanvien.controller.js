const NhanVien = require("../../models/nhanvien.model");

// Show form create nhanvien
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('nhanvien/createnv',  {layout: './master2'});
}

// Create and Save a new nhanvien
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/nhanvien/create?status=error')
    }

    const file = req.file

    // Create a nhanvien
    const nhanvien = new NhanVien({
        tennv: req.body.tennv,
        hinhdd: file.filename,
        motact: req.body.motact,
    });
    // Save nhanvien in the database
    NhanVien.create(nhanvien, (err, data) => {
        if (err)
            res.redirect('/admin/nhanvien/create?status=error')
        else res.redirect('/admin/nhanvien/create?status=success')
    });
};

// Retrieve all nhanvien from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tennv = req.query.tennv;
    NhanVien.getAll(tennv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('nhanvien/indexnv',  {nhanvien: data, layout: './master3'});
        }
    });
};

// Hiển thị nhân viên bên phía khách hàng
exports.findAllKHdm = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tennv = req.query.tennv;
    NhanVien.getAll(tennv, (err, nhanvien) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('shop',  {nhanvien: nhanvien, layout: './master'});
             console.log(nhanvien);
        }
   
    });
};


// Find a single nhanvien with a manv
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findBymanv(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhanvien/editnv', { nhanvien: data,  layout: './master2'});
    });
};


exports.details = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findBymanv(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhanvien/detailsnv', { nhanvien: data,  layout: './master2'});
    });
};

// Update a nhanvien identified by the id in the request
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/nhanvien/edit/' + req.params.manv + '?status=error')
    }

    const nhanvien = new NhanVien({
        tennv: req.body.tennv,
        hinhdd: req.body.hinhdd,
        motact: req.body.motact,
    });

    NhanVien.updateBymanv(
        req.params.manv,
        nhanvien,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/nhanvien/edit/' + req.params.manv + '?status=success');
        }
    );
};

// Delete a nhanvien with the specified id in the request
exports.delete = (req, res) => {
    NhanVien.remove(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/nhanvien/index?deleted=true')
    });
};

// Delete all nhanvien from the database.
exports.deleteAll = (req, res) => {
    NhanVien.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/nhanvien?deleted=true')
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
            const filePath = '/images/nhanvien/' + fileNameCu; 
          
            fs.unlink("app/public"+ filePath,function(err){
                if(err) throw err;
                console.log('File deleted!');
            });
        }
    
        NhanVien.updateADD(req.params.manv, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/nhanvien/edit/' + req.params.manv + '?status=successhdd');
        } else {
            res.redirect('/admin/nhanvien/edit/' + req.params.manv + '?status=errorhdd')
        }
    });
}


