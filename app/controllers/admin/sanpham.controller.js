
const Danhmuc = require("../../models/danhmuc.model");
const SanPham = require("../../models/sanpham.model");

// Hiển thị form tạo mới sản phẩm
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('sanpham/createsp', {layout: './master2'});
}

// Create and Save a new sanpham
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/sanpham/create?status=error')
    }
    
    // Create a sanpham
    const sanpham = new SanPham({
        tensp: req.body.tensp,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save sanpham in the database
    SanPham.create(sanpham, (err, data) => {
        if (err)
            res.redirect('/sanpham/create?status=error')
        else res.redirect('/sanpham/create?status=success')
    });
};

// Hiển thị danh sách sản phẩm
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tensp = req.query.tensp;
    SanPham.getAll(tensp, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('sanpham/indexsp',  {sanpham: data, layout: './master3'});
        }
    });
};

exports.details = (req, res) => {
    res.locals.status = req.query.status;
  

    SanPham.findBymasp(req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('sanpham/detailssp', { sanpham: data,  layout: './master2'});
    });
};


// hiển thị sản phẩm bên phía khách hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tensp = req.query.tensp;
    SanPham.getAllKH(tensp, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('shop',  {sanpham: data, layout: './master'});
            console.log(data);
        }
    });
};


exports.findAllKHandDM = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const offset = (page - 1) * limit;
    
    res.locals.deleted = req.query.deleted;

    const tensp = req.query.tensp;
    const tendm = req.query.tendm;
    SanPham.getAllKH(tensp, limit, offset, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Danhmuc.getAll(tendm, (err, danhmuc) => {
                if (err)
                    res.redirect('/500')
                else {
                     res.render('shop',  {sanpham: data, danhmuc: danhmuc, page, limit ,layout: './master'});
                }
            });
        }
    });
};

//giao diện hiển thị sản phẩm danh mục chi tiết
exports.findAllKHandDMct = (req, res) => {
 
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    const madm = req.params.madm;
    const tendm = req.params.tendm;
    SanPham.getAllKHdmsp(req.params.madm, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Danhmuc.getAll(tendm, (err, danhmuc) => {
                if (err)
                    res.redirect('/500')
                else {
                     res.render('shop',  {sanpham: data, danhmuc: danhmuc, layout: './master'});
                }
            });
        }
    });
};


// hiển thị chi tiết 1 sản phẩm
exports.chitietsp = (req, res) => {
    res.locals.status = req.query.status;
    
    SanPham.findBymasp(req.params.masp, (err, data) => {
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

    SanPham.findBymasp(req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('sanpham/editsp', { sanpham: data,   layout: './master2'});
    });
};

// Update a sanpham identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/sanpham/edit/' + req.params.masp + '?status=error')
    }

    SanPham.updateBymasp(
        req.params.masp,
        new SanPham(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/sanpham/edit/' + req.params.masp + '?status=success');
        }
    );
};

// Delete a sanpham with the specified id in the request
exports.delete = (req, res) => {
    SanPham.remove(req.params.madm, (err, data) => {
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
    SanPham.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/sanpham?deleted=true')
    });
};

