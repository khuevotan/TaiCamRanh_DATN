const Baiviet = require("../../models/baiviet.model");
const NhanVien = require("../../models/NhanVien.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới bài viết.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('baiviet/createbv', {
        layout: './master2'
    });
}

exports.store = async (req, res) => {
    try {
        if (!req.body) {
            res.redirect('/admin/baiviet/create?status=error')
        }

        res.locals.nhanvien = req.session.nhanvien
        const manv = res.locals.nhanvien.manv;
        ngaydang = new Date()
        const file = req.file

        // Create a baiviet
        const baiviet = new Baiviet({
            tenbv: req.body.tenbv,
            motangan: req.body.motangan,
            noidung: req.body.noidung,
            hinhdd: file.filename,
            ngaydang: ngaydang,
            manv: manv
        });

        // Save baiviet in the database
        await Baiviet.create(baiviet);
        res.redirect('/admin/baiviet/create?status=success')
    } catch (error) {
        res.redirect('/admin/baiviet/create?status=error')
    }
};


// Lưu bài viết mới khi nhấn nút.
// exports.store = (req, res) => {

//     if (!req.body) {
//         res.redirect('/admin/baiviet/create?status=error')
//     }

//     res.locals.nhanvien = req.session.nhanvien
//     const manv = res.locals.nhanvien.manv;
//     ngaydang = new Date()
//     const file = req.file

//     // Create a baiviet
//     const baiviet = new Baiviet({
//         tenbv: req.body.tenbv,
//         motangan: req.body.motangan,
//         noidung: req.body.noidung,
//         hinhdd: file.filename,
//         ngaydang: ngaydang,
//         manv: manv
//     });

//     // Save baiviet in the database
//     Baiviet.create(baiviet, (err, data) => {
//         if (err)
//             res.redirect('/admin/baiviet/create?status=error')
//         else res.redirect('/admin/baiviet/create?status=success')
//     });
// };


// exports.store = async (req, res) => {
//     try {

//         if (!req.body) {
//             res.redirect('/admin/baiviet/create?status=error')
//         }

//         res.locals.nhanvien = req.session.nhanvien
//         const manv = res.locals.nhanvien.manv;
//         ngaydang = new Date();
//         const file = req.file;

//         // Tạo một bài viết.
//         const baiviet = new Baiviet({
//             tenbv: req.body.tenbv,
//             motangan: req.body.motangan,
//             noidung: req.body.noidung,
//             hinhdd: file.filename,
//             manv: manv
//         });

//         // lưu bài viết vào database.
//         const savedBaiviet = await new Promise((resolve, reject) => {
//             Baiviet.create(baiviet, (err, data) => {
//                 if (err) reject(err);
//                 else resolve(data);
//             });

//         });

//         res.redirect('/admin/baiviet/create?status=success');
//     } catch (err) {
//         console.log("error: ", err);
//         res.redirect('/admin/baiviet/create?status=error')
//     }
// };




// Hiển thị danh sách bài viết.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;

    Baiviet.getAllAD((err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            res.render('baiviet/indexbv', {
                baiviet: data,
                layout: './master3'
            });
        }
    });
};

// Chỉnh sửa thông tin một bài viết.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Baiviet.findBymabv(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('baiviet/editbv', {
            baiviet: data,
            layout: './master2'
        });
    });
};

// Cập nhật thông tin bài viết khi nhấn nút cập nhật.
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/baiviet/edit/' + req.params.mabv + '?status=error')
    }

    const baiviet = new Baiviet({
        tenbv: req.body.tenbv,
        motangan: req.body.motangan,
        noidung: req.body.noidung,
    });

    Baiviet.updateBymabv(
        req.params.mabv,
        baiviet,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/baiviet/edit/' + req.params.mabv + '?status=success');
        }
    );
};

// Upload fle ảnh
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
        const filePath = '/images/baiviet/' + fileNameCu;

        fs.unlink("app/public" + filePath, function (err) {
            if (err) throw err;
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

// Hiển thị chi tiết 1 bài viết
exports.details = (req, res) => {
    res.locals.status = req.query.status;
    Baiviet.findBymabv(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('baiviet/detailsbv', {
            baiviet: data,
            layout: './master4'
        });
    });
};

// Xóa một bài viết
exports.delete = (req, res) => {
    Baiviet.findBymabv(req.params.mabv, (err, baiviet) => {
        if (err)
            res.redirect('/admin/500')
        else {

            if (baiviet.hinhdd != '') {
                const fs = require('fs');
                const fileNameCu = baiviet.hinhdd;
                const filePath = '/images/baiviet/' + fileNameCu;

                fs.unlink("app/public" + filePath, function (err) {
                    if (err) throw err;
                    console.log('File deleted!');
                });
            }

            Baiviet.remove(req.params.mabv, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/404');
                    } else {
                        res.redirect('/500');
                    }
                } else res.redirect('/admin/baiviet/index?deleted=true')
            });
        }
    });
};


//======================= GIAO DIEN KHACHHANG ======================= 
// Hiển thị danh sách bài viết.
exports.findAllKH = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const offset = (page - 1) * limit;

    res.locals.deleted = req.query.deleted;
    const tenbv = req.query.tenbv;

    Baiviet.getAllKH(tenbv, limit, offset, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            NhanVien.getAll((err, nhanvien) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('baiviet', {
                        baiviet: data,
                        page,
                        limit,
                        nhanvien: nhanvien,
                        layout: './master'
                    });
                }
            });
        }
    });
};

// Hiển thị chi tiết 1 bài viết.
exports.chitiet = (req, res) => {
    res.locals.status = req.query.status;

    Baiviet.findBymabv(req.params.mabv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            Baiviet.getNew((err, baivietmoi) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/404');
                    } else {
                        res.redirect('/500');
                    }
                } else {

                    NhanVien.findByMaNV(data.manv,(err, nhanvien) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('baivietct', {
                                baiviet: data,
                                baivietmoi: baivietmoi,
                                nhanvien: nhanvien,
                                layout: './master'
                            });
                        }
                    });

                }
            });

        }
    });
};

