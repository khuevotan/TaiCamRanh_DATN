const Danhmuc = require("../../models/danhmuc.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới danh mục.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('danhmuc/create',  {layout: './master2'});
}

// Lưu danh mục mới khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/danhmuc/create?status=error')
    }

    const file = req.file

    // Create a Danhmuc
    const danhmuc = new Danhmuc({
        tendm: req.body.tendm,
        hinhdd: file.filename,
        motact: req.body.motact,
        tinhtrang : 1,
    });

    // Save danhmuc in the database
    Danhmuc.create(danhmuc, (err, data) => {
        if (err)
            res.redirect('/admin/danhmuc/create?status=error')
        else res.redirect('/admin/danhmuc/create?status=success')
    });
};

// Hiển thị danh sách danh mục.
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

// Xem chi tiết một danh mục.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Danhmuc.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('danhmuc/detailsdm', { danhmuc: data,  layout: './master2'});
    });
};

// Chỉnh sửa thông tin một danh mục.
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

// Cập nhật danh mục khi nhấn nút cập nhật.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/danhmuc/edit/' + req.params.madm + '?status=error')
    }

    const danhmuc = new Danhmuc({
        tendm: req.body.tendm,
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

// Xóa một danh mục
exports.delete = (req, res) => {
    Danhmuc.findByMaDM(req.params.madm, (err, danhmuc) => {
        if (err)
            res.redirect('/500')
        else {

            if(danhmuc.hinhdd != ''){
                const fs = require('fs');
                const fileNameCu = danhmuc.hinhdd;
                const filePath = '/images/danhmuc/' + fileNameCu; 
                
                fs.unlink("app/public"+ filePath,function(err){
                    if(err) throw err;
                    console.log('File deleted!');
                });
            }

            Danhmuc.remove(req.params.madm, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/404');
                    } else {
                        res.redirect('/500');
                    }
                } else res.redirect('/admin/danhmuc/index?deleted=true')
            });
        }
    });
};

// Update ảnh đại diện danh mục
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

//======================= GIAO DIEN KHACHHANG ======================= 
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



