const Danhmuc = require("../../models/danhmuc.model");
const SanPham = require("../../models/sanpham.model");
const NhaCungCap = require("../../models/nhacungcap.model");
const ThamSo = require("../../models/thamso.model");
const Sanpham = require("../../models/sanpham.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới sản phẩm.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    const tendm = req.query.tensp;
    Danhmuc.getAll(tendm, (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            NhaCungCap.getAll((err, ncc) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    res.render('sanpham/createsp', {
                        nhacungcap: ncc,
                        danhmuc: data,
                        layout: './master2'
                    });
                }
            });
        }
    });
}

// Lưu sản phẩm mới khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/sanpham/create?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    const file = req.file
    let giaBanNumberFL = parseFloat(req.body.giaban.replace(/,/g, ''));

    // Create a sanpham
    const sanpham = new SanPham({
        tensp: req.body.tensp,
        hinhdd: file.filename,
        soluong: req.body.soluong,
        motangan: req.body.motangan,
        motact: req.body.motact,
        giaban: giaBanNumberFL,
        madm: req.body.madm,
        mancc: req.body.mancc,
        tinhtrang : 1,
        manv: manv,
    });
    // Save sanpham in the database
    SanPham.create(sanpham, (err, data) => {
        if (err)
            res.redirect('/admin/sanpham/create?status=error')
        else res.redirect('/admin/sanpham/create?status=success')
    });
};

// Hiển thị danh sách sản phẩm.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tensp = req.query.tensp;
    const tendm = req.query.tensp;
    SanPham.getAll(tensp, (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            Danhmuc.getAll(tendm, (err, danhmuc) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    res.render('sanpham/indexsp', {
                        sanpham: data,
                        danhmuc: danhmuc,
                        layout: './master3'
                    });
                }
            });
        }
    });
};

// Hiển thị danh sách sản phẩm sắp hết.
exports.findAllSH = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tensp = req.query.tensp;
    const tendm = req.query.tensp;

    var SL_SPHET = 0;
    ThamSo.findBymats(4, (err, thamso) => {
        if (err)
            res.redirect('/admin/500')
        else {
            SL_SPHET = thamso.giatri;

            SanPham.getAllSH(SL_SPHET, (err, data) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    Danhmuc.getAll(tendm, (err, danhmuc) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            res.render('phieunhap/indexspsh', {
                                sanpham: data,
                                danhmuc: danhmuc,
                                layout: './master3'
                            });
                        }
                    });
                }
            });
        }
    });

};

// Hiển thị chi tiết một sản phẩm.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    SanPham.findBymasp(req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            Danhmuc.findByMaDM(data.madm, (err, danhmuc) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    NhaCungCap.findBymancc(data.mancc, (err, nhacungcap) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            res.render('sanpham/detailssp', {
                                nhacungcap: nhacungcap,
                                sanpham: data,
                                danhmuc: danhmuc,
                                layout: './master4'
                            });
                        }
                    });

                }
            });
        }
    });
};

// Chỉnh sửa thông tin một sản phẩm.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;
    const tendm = req.query.tensp;

    SanPham.findBymasp(req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            Danhmuc.getAll(tendm, (err, danhmuc) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    NhaCungCap.getAll((err, nhacungcap) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            res.render('sanpham/editsp', {
                                sanpham: data,
                                danhmuc: danhmuc,
                                nhacungcap: nhacungcap,
                                layout: './master2'
                            });
                        }
                    });
                }
            });
        }
    });
};

// Cập nhật sản phẩm khi nhấn nút cập nhật.
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/sanpham/edit/' + req.params.masp + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    const sanpham = new SanPham({
        tensp: req.body.tensp,
        soluong: req.body.soluong,
        motangan: req.body.motangan,
        motact: req.body.motact,
        giaban: parseFloat(req.body.giaban.replace(/,/g, '')),
        madm: req.body.madm,
        mancc: req.body.mancc,
        manv: manv,
    });

    SanPham.updateBymasp(
        req.params.masp,
        sanpham,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/sanpham/edit/' + req.params.masp + '?status=success');
        }
    );
};

// Xóa một sản phẩm
exports.delete = (req, res) => {
    SanPham.findBymasp(req.params.masp, (err, sanpham) => {
        if (err)
            res.redirect('/admin/500')
        else {

            if (sanpham.hinhdd != '') {
                const fs = require('fs');
                const fileNameCu = sanpham.hinhdd;
                const filePath = '/images/sanpham/' + fileNameCu;

                fs.unlink("app/public" + filePath, function (err) {
                    if (err) throw err;
                    console.log('File deleted!');
                });
            }

            SanPham.remove(req.params.masp, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/admin/404');
                    } else {
                        res.redirect('/admin/500');
                    }
                } else res.redirect('/admin/sanpham/index?deleted=true')
            });
        }
    });
};

// Update ảnh đại diện sản phẩm
exports.updateADD = (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Vui Lòng Up Ảnh')
        error.httpStatusCode = 400
        return next(error);
    }

    if (req.body.hinhdd != '') {
        const fs = require('fs');
        const fileNameCu = req.body.hinhdd;
        const filePath = '/images/sanpham/' + fileNameCu;

        fs.unlink("app/public" + filePath, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }

    SanPham.updateADD(req.params.masp, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/sanpham/edit/' + req.params.masp + '?status=successhdd');
        } else {
            res.redirect('/admin/sanpham/edit/' + req.params.masp + '?status=errorhdd')
        }
    });
}

//======================= GIAO DIEN KHACH HANG ======================= 
// Hiển thị sản phẩm bên phía khách hàng.
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
                    NhaCungCap.getAll((err, nhacungcap) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('shop', {
                                sanpham: data,
                                danhmuc: danhmuc,
                                nhacungcap: nhacungcap,
                                page,
                                limit,
                                layout: './master1'
                            });
                        }
                    });

                }
            });
        }
    });
};

// Hiển thị sản phẩm danh mục chi tiết
exports.findAllKHandDMct = (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const offset = (page - 1) * limit;

    res.locals.status = req.query.status;
    const tendm = req.params.tendm;

    SanPham.getAllKHdmsp(req.params.madm, limit, offset,(err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Danhmuc.getAll(tendm, (err, danhmuc) => {
                if (err)
                    res.redirect('/500')
                else {
                    NhaCungCap.getAll((err, nhacungcap) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('shop', {
                                sanpham: data,
                                danhmuc: danhmuc,
                                page,
                                limit,
                                nhacungcap: nhacungcap,
                                layout: './master'
                            });
                        }
                    });
                }
            });
        }
    });
};

// Hiển thị chi tiết 1 sản phẩm
exports.chitietsp = (req, res) => {
    res.locals.status = req.query.status;

    SanPham.findBymasp(req.params.masp, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            Sanpham.getNew((err, sanphamNew) => {
                if (err)
                    res.redirect('/500')
                else {
                    Danhmuc.findByMaDM(data.madm, (err, danhmuc) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            NhaCungCap.findBymancc(data.mancc, (err, nhacungcap) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                                    res.render('sanphamct', {
                                        danhmuc: danhmuc,
                                        nhacungcap: nhacungcap,
                                        sanpham: data,
                                        sanphamNew: sanphamNew,
                                        layout: './master'
                                    });
                                }
                            });

                        }
                    });
                }
            });
        }
    });
};
