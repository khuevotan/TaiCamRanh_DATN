const NhanVien = require("../../models/nhanvien.model");
const Nhom = require("../../models/nhom.model");
const bcrypt = require('bcrypt');
const mailer = require('../../utils/mailer');
require('dotenv/config');

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới nhân viên.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    Nhom.getAll((err, nhom) => {
        if (err)
            res.redirect('/500')
        else { 
            res.render('nhanvien/createnv',  { nhom: nhom,  layout: './master2'});
        }
    });
}

// Hiển thị form thanh mật khẩu.
exports.formthaypasss = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('nhanvien/changepassnv', { nhanvien: data,  layout: './master2'});
    });
};


// Update mật khẩu bến phía admin
exports.adupdatemk = (req, res) => {
    res.locals.status = req.query.status;
    const {
        taikhoan,
        matkhaumoi,
        matkhaumoixn,
        matkhaucu
    } = req.body;

    if(req.body.matkhaumoi == req.body.matkhaumoixn){
        NhanVien.findByMaNV(req.params.manv, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                NhanVien.findByTaikhoan(taikhoan, (err, nhanvien) => {
                    bcrypt.compare(matkhaucu, nhanvien.matkhau, (err, result) => {
                        console.log(result);
                        if (result == true) {
                            if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                                bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                                    NhanVien.resetPasswordNV(taikhoan, hashedMatkhau, (err, result) => {
                                        if (!err) {
                                            res.redirect('/admin/nhanvien/changepass/'+ req.params.manv + '?status=success');  
            
                                        } else {
                                            res.redirect("/admin/500");
                                        }
                                    })
                                })
                            } else {
                                const conflictError = 'Mật khẩu mới phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                                res.render('nhanvien/changepassnv', { 
                                    nhanvien: data,
                                    conflictError,  
                                    layout: './master2'
                                });

                            }
            
                        } else {
        
                          
                            const conflictError = 'Sai Password Cũ!';
                            res.render('nhanvien/changepassnv', { 
                                nhanvien: data,
                                conflictError,  
                                layout: './master2'
                            });
                        }
                    })
                })
            }
        });

    }else{

        res.locals.status = req.query.status;

        NhanVien.findByMaNV(req.params.manv, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                const conflictError = 'Mật khẩu mới và xác nhận mật khẩu chưa khớp!';
                res.render('nhanvien/changepassnv', { 
                    nhanvien: data,
                    conflictError,  
                    layout: './master2'
                });


            }
        });

    }
};

// Lưu nhân viên mới khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/nhanvien/create?status=error')
    }

    Nhom.getAll((err, nhom) => {
        if (err)
            res.redirect('/500')
        else { 
           
            const {
                taikhoan,
                matkhau,
                matkhauxn,
                tennv,
                honv,
                sodt,
                diachi,
                email,
                luong,
                ngaysinh,
                gioitinh,
                manhom,
            } = req.body;
        
            NhanVien.findByTaikhoanvaEmail(taikhoan, email, (err, nhanvien) => {   
                if (err || nhanvien) {
        
                    const conflictError = 'Tên tài khoản hoặc email này đã tồn tại';
                    res.render('nhanvien/createnv', {
                        taikhoan,
                        matkhau,
                        matkhauxn,
                        tennv,
                        honv,
                        sodt,
                        diachi,
                        email,
                        luong,
                        ngaysinh,
                        gioitinh,
                        manhom,
                        conflictError,
                        nhom : nhom,
                        layout: './master2'
                    });
                } else {
                    if(matkhau == matkhauxn){
                        if(matkhau.match(/[a-z]/) && matkhau.match(/[A-Z]/) && matkhau.match(/\d/) && matkhau.match(/[^a-zA-Z\d]/) ){
                            bcrypt.hash(matkhau, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
                                // Create a nhanvien
        
                                const nhanvien = new NhanVien({
                                    taikhoan: taikhoan,
                                    matkhau: hashed,
                                    email: email,
                                    honv: honv,
                                    tennv: tennv,
                                    luong : luong,
                                    gioitinh: gioitinh,
                                    diachi: diachi,
                                    hinhdd: '',
                                    kichhoat: 1,
                                    ngaytaotk: new Date(),
                                    sodt: sodt,
                                    ngaysinh: ngaysinh,
                                    manhom: manhom,
                                });
        
                                NhanVien.create(nhanvien, (err, nhanvien) => {
                                    if (!err) {
                                        bcrypt.hash(nhanvien.email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                                            console.log(`${process.env.APP_URL}/verify?email=${nhanvien.email}&token=${hashedEmail}`);
                                            mailer.sendMail(nhanvien.email, "Verify Email", `<a href="${process.env.APP_URL}/admin/nhanvien/verify?email=${nhanvien.email}&token=${hashedEmail}"> Verify </a>`)
                                        });
        
                                        res.redirect('/admin/nhanvien/create?status=success')
                                    }
                                })
                            });
                        }else{
                            const conflictError = 'Mật khẩu phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                            res.render('nhanvien/createnv', {
                                honv,
                                tennv,
                                matkhauxn,
                                gioitinh,
                                diachi,
                                sodt,
                                luong,
                                ngaysinh,
                                taikhoan,
                                manhom,
                                matkhau,
                                email,
                                conflictError,
                                nhom : nhom,
                                layout: './master2'

                            });
                        }
                    }else{
                        const conflictError = 'Bạn phải xác nhận mật khẩu đúng!';
                        res.render('nhanvien/createnv', {
                            taikhoan,
                            matkhau,
                            matkhauxn,
                            tennv,
                            honv,
                            sodt,
                            diachi,
                            email,
                            luong,
                            ngaysinh,
                            gioitinh,
                            manhom,
                            conflictError,
                            nhom : nhom,
                            layout: './master2'
                        });
                    }
                }
            })

            // bự
        }
    });
};

// Xác thực tài khoản của nhân viên.
exports.verify = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        if (result == true) {
            NhanVien.verify(req.query.email, (err, result) => {
                if (!err) {
                    res.redirect('/admin/login');
                } else {
                    res.redirect('/admin/500');
                }
            });
        } else {
            res.redirect('/admin/404');
        }
    })
}

// Hiển thị danh sách nhân viên.
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

// Chỉnh sửa thông tin nhân viên
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {
            
            Nhom.getAll((err, nhom) => {
                if (err)
                    res.redirect('/500')
                else { 
                    res.render('nhanvien/editnv', { nhom: nhom, nhanvien: data,  layout: './master2'});
                }
            });    
        }
    });
};

// Cập nhật thông tin nhân viên khi nhấn nút cập  nhật
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/nhanvien/edit/' + req.params.manv + '?status=error')
    }

    const nhanvien = new NhanVien({
        taikhoan: req.body.taikhoan,
        email: req.body.email,
        honv: req.body.honv,
        tennv: req.body.tennv,
        luong: req.body.luong,
        diachi: req.body.diachi,
        kichhoat: req.body.kichhoat,
        sodt: req.body.sodt,
        ngaysinh: req.body.ngaysinh,
        manhom: req.body.manhom,
    });

    NhanVien.updateByMaNVAD(
        req.params.manv,
        nhanvien,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/nhanvien/edit/' + req.params.manv + '?status=success');
        }
    );
};

// Xem chi tiết thông tin một nhân viên
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {
            
            Nhom.findByNhom(data.manhom, (err, nhom) => {
                if (err)
                    res.redirect('/500')
                else { 
                    res.render('nhanvien/detailsnv', { nhom: nhom, nhanvien: data,  layout: './master2'});
                }
            });
    }
    });
};

// Delete a nhanvien with the specified id in the request
exports.delete = (req, res) => {
    NhanVien.remove(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.redirect('/admin/nhanvien/index?deleted=true')
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
            const filePath = '/images/avatarad/' + fileNameCu; 
          
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

//======================= GIAO DIEN KHACHHANG ======================= 
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

