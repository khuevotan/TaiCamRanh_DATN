const NhanVien = require("../../models/NhanVien.model");
const bcrypt = require('bcrypt');

exports.Login = (req, res) => {
    res.render('login.ejs',{layout: false});
}

exports.getIndex = (req, res) => {
    res.render('trangchuad.ejs',{layout: './master2'});
}

exports.trangCaNhan = (req, res) => {
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;
    console.log(manv);
    NhanVien.findByMaNV(manv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('trangcanhan',{ nhanvien:data, layout: './master2'});
        }

    });
   
}

exports.huongDanSD = (req, res) => {
    res.render('huongdansd.ejs',{layout: './master2'});
}

// Chỉnh sửa thông tin cá nhân bên phía nhân viên
exports.chinhSuaTT = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('chinhsuattnv', {
            nhanvien: data, 
            layout: './master2'
        });
    });
};

// Nhân viên chỉnh sửa thông tin ở prof nhân viên
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/chinhsuatt/' + req.params.manv + '?status=error')
    }

    NhanVien.updateByMaNV(
        req.params.manv,
        new NhanVien(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/trangcanhan/?status=updatetc');
        }
    );
};

// Update mật khẩu khi nhấn vào nút thay đổi cá nhân bên phía nhân viên
exports.changePassword = (req, res) => {
    const {
        taikhoan,
        matkhaumoi,
        matkhaucu
    } = req.body;
    console.log(taikhoan);
    console.log(matkhaumoi);
    console.log(matkhaucu);

    NhanVien.findByTaikhoan(taikhoan, (err, admin) => {
        bcrypt.compare(matkhaucu, admin.matkhau, (err, result) => {
            console.log(result);
            if (result == true) {
                if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                    bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                        NhanVien.resetPasswordNV(taikhoan, hashedMatkhau, (err, result) => {
                            if (!err) {
                                res.redirect('/admin/trangcanhan/?status=doimkthanhcong');

                            } else {
                                res.redirect("/500");
                            }
                        })
                    })
                } else {
                    res.redirect('/admin/trangcanhan/?status=doimatkhauthatbai');
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


// Upload fle ảnh
exports.uploadFile = (req, res) => {
    const file = req.file
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;
    const hinhdd = res.locals.nhanvien.hinhdd;

    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
 
    if(hinhdd != 'abc.png'){
      
        const fs = require('fs');
        const fileNameCu = hinhdd;
        const filePath = '/images/avatarad/' + fileNameCu; 
      
        fs.unlink("app/public"+ filePath,function(err){
            if(err) throw err;
            console.log('File deleted!');
        });
    }

    //    res.send(file)
    NhanVien.updateAvaByMaNV(manv, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/trangcanhan');
        } else {
            res.redirect('/admin/500');
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



// exports.showView = (req, res) => {
//     res.render('view.ejs',{layout: './master2'});
// }

// res.render('index', {layout: false}); -> neu khong muon truyen layout nao

// module.exports.getIndex = (req, res) => {
//     res.render('index.ejs', {
//         name: 'Vo Tan Khue',
//         age:22,
//     });
// }
