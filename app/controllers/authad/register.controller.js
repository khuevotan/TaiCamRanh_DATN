const NhanVien = require('../../models/NhanVien.model');
const bcrypt = require('bcrypt');
const mailer = require('../../utils/mailer');
require('dotenv/config');

exports.create = (req, res) => {
    res.render('authad/register', {
        layout: false
    });
}

exports.register = (req, res) => {
    const {
        honv,
        tennv,
        taikhoan,
        matkhau,
        matkhauxn,
        email,
        gioitinh,
        luong,
        diachi,
        sodt,
        manhom,
        ngaysinh
    } = req.body;

    if (honv && tennv && taikhoan && matkhau && luong && matkhauxn && gioitinh && diachi && sodt && ngaysinh && email && manhom) {
        NhanVien.findByTaikhoanvaEmail(taikhoan, email, (err, nhanvien) => {
            if (err || nhanvien) {
                // A nhanvien with that email address does not exists
                const conflictError = 'Tên tài khoản hoặc email này đã tồn tại';
                res.render('authad/register', {
                    honv,
                    tennv,
                    matkhauxn,
                    gioitinh,
                    luong,
                    diachi,
                    sodt,
                    ngaysinh,
                    taikhoan,
                    matkhau,
                    email,
                    conflictError,
                    layout: false
                });
            } else {
                if(matkhau == matkhauxn){
                    if(matkhau.length >= 8 && matkhau.match(/[a-z]/) && matkhau.match(/[A-Z]/) && matkhau.match(/\d/) && matkhau.match(/[^a-zA-Z\d]/) ){
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
                                tinhtrang: 1,
                                manhom: manhom, 
                                ngaytaotk: new Date(),
                                sodt: sodt,
                                ngaysinh: ngaysinh,
                            });
                            NhanVien.create(nhanvien, (err, nhanvien) => {
                                if (!err) {
                                    bcrypt.hash(nhanvien.email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                                        console.log(`${process.env.APP_URL}/verify?email=${nhanvien.email}&token=${hashedEmail}`);
                                        mailer.sendMail(nhanvien.email, "Verify Email", `<a href="${process.env.APP_URL}/verify?email=${nhanvien.email}&token=${hashedEmail}"> Verify </a>`)
                                    });
                                    // const conflictError = 'Tạo tài khoản thành công, vui lòng check mail để xác nhận và đăng nhập!';
                                    // res.redirect('/login', { conflictError});
                                    res.redirect('/admin/login?status=taotaikhoantc');
                                }
                            })
                        });
                    }else{
                        const conflictError = 'Mật khẩu phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                        res.render('authad/register', {
                            honv,
                            tennv,
                            matkhauxn,
                            gioitinh,
                            diachi,
                            sodt,
                            luong,
                            ngaysinh,
                            taikhoan,
                            matkhau,
                            email,
                            conflictError,
                            layout: false
                        });
                    }

                  
                }else{
                    const conflictError = 'Bạn phải xác nhận mật khẩu đúng!';
                    res.render('authad/register', {
                        honv,
                        tennv,
                        matkhauxn,
                        gioitinh,
                        diachi,
                        sodt,
                        luong,
                        ngaysinh,
                        taikhoan,
                        matkhau,
                        email,
                        conflictError,
                        layout: false
                    });
                }
            }
        })
    } else {
        const conflictError = 'Bạn phải nhập đầy đủ thông tin!';
        res.render('authad/register', {
            honv,
            tennv,
            matkhauxn,
            gioitinh,
            diachi,
            luong,
            sodt,
            ngaysinh,
            taikhoan,
            matkhau,
            email,
            layout: false,
            conflictError
        });
    }
}

exports.verify = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        if (result == true) {
            NhanVien.verify(req.query.email, (err, result) => {
                if (!err) {
                    res.redirect('/login');
                } else {
                    res.redirect('/500');
                }
            });
        } else {
            res.redirect('/404');
        }
    })
}