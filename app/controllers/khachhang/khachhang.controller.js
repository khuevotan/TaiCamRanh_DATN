const KhachHang = require("../../models/khachhang.model");
const Khachhang = require("../../models/khachhang.model");
const HoaDonRX = require("../../models/hoadonrx.model");

const bcrypt = require('bcrypt');

// Show form create khachhang
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('khachhang/create');
}

// Create and Save a new khachhang
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/khachhang/create?status=error')
    }

    // Create a khachhang
    const khachhang = new Khachhang({
        tenkh: req.body.tenkh,
        hinhdd: req.body.hinhdd,
        motact: req.body.motact,
    });
    // Save khachhang in the database
    Khachhang.create(khachhang, (err, data) => {
        if (err)
            res.redirect('/khachhang/create?status=error')
        else res.redirect('/khachhang/create?status=success')
    });
};

// Retrieve all khachhang from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tenkh = req.query.tenkh;
    Khachhang.getAll(tenkh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('khachhang/indexkh', {
                khachhang: data,
                layout: './master2'
            });
        }

    });
};

exports.trangCaNhan = (req, res) => {
    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    Khachhang.findByMakh(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            console.log(data);
            res.render('home', {
                khachhang: data
            });
        }

    });
};

// Find a single khachhang with a makh
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findBymakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('khachhang/editkh', {
            khachhang: data,
            layout: './master2'
        });
    });
};

// Edit bên phía khách hàng
exports.editkh = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('chinhsuatt', {
            khachhang: data
        });
    });
};

// đổi password
exports.doimk = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('doimatkhau', {
            khachhang: data
        });
    });
};

// Update a khachhang khi nhấn vào chỉnh sửa thông tin cá nhân bên phía khách hàng
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/edit/' + req.params.makh + '?status=error')
    }

    Khachhang.updateBymakh(
        req.params.makh,
        new Khachhang(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/khachhang/home/?status=success');
        }
    );
};

// Update mật khẩu khi nhấn vào chỉnh sửa thông tin cá nhân bên phía khách hàng
exports.updatemk = (req, res) => {
    // Validate Request
    // if (!req.body) {
    //     res.redirect('/khachhang/doimatkhau/' + req.params.makh + '?status=error')
    // }

    const {
        taikhoan,
        matkhaumoi,
        matkhaucu
    } = req.body;
    console.log(taikhoan);
    console.log(matkhaumoi);
    console.log(matkhaucu);

    Khachhang.findByTaikhoan(taikhoan, (err, khachhang) => {
        bcrypt.compare(matkhaucu, khachhang.matkhau, (err, result) => {
            console.log(result);
            if (result == true) {
                if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                    bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                        Khachhang.resetPasswordKH(taikhoan, hashedMatkhau, (err, result) => {
                            if (!err) {
                                res.redirect('/khachhang/home/?status=doimkthanhcong');

                            } else {
                                res.redirect("/500");
                            }
                        })
                    })
                } else {
                    res.redirect('/khachhang/home/?status=doimatkhauthatbai');
                }

            } else {
                const conflictError = 'Sai Password!';
                res.render('auth/login', {
                    taikhoan,
                    matkhaucu,
                    conflictError
                });
            }
        })
    })

};

// Delete a khachhang with the specified id in the request
exports.delete = (req, res) => {
    Khachhang.remove(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/khachhang?deleted=true')
    });
};


// Delete all khachhang from the database.
exports.deleteAll = (req, res) => {
    Khachhang.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/khachhang?deleted=true')
    });
};


// Upload fle ảnh
exports.uploadFile = (req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    //    res.send(file)
    Khachhang.updateBymakhAva(makh, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/login');
        } else {
            res.redirect('/500');
        }
    });

    // res.send(file)
}

exports.uploadMultiple = (req, res) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
}


// đặt lịch rửa xe
exports.datlich = (req, res) => {


    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/datlichrx?status=error')
    }
      // Create a khachhang
      const hoadonrx = new HoaDonRX({
        tennguoidat: req.body.tennguoidat,
        ngaydat: new Date(),
        ngayrua: req.body.ngayrua,
        giorua: req.body.giorua,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        tongtienrx: req.body.tongtienrx,
        thanhtoan: 1,
        malx: req.body.malx,
        matt: 1,
        manv: 0,
        makh: makh,
    });

      // Save khachhang in the database
      HoaDonRX.create(hoadonrx, (err, data) => {
        if (err){
             // res.redirect('/khachhang/datlichrx?status=error')
 const conflictError = "Đặt lịch thành công, vui lòng chọn hình thức thanh toán"
            // res.render('chonttrx', {
            //     conflictError
            // });
        }
           
        else res.redirect('/khachhang/datlichrx?status=success')
    });

};
