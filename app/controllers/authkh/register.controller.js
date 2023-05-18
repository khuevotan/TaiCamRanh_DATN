const Khachhang = require('../../models/khachhang.model');
const bcrypt = require('bcrypt');
const mailer = require('../../utils/mailer');
require('dotenv/config');

exports.create = (req, res) => {
    res.render('auth/register');
}

exports.register = (req, res) => {
    const {
        hokh,
        tenkh,
        taikhoan,
        matkhau,
        matkhauxn,
        email,
        gioitinh,
        diachi,
        sodt,
        ngaysinh
    } = req.body;


    if (hokh && tenkh && taikhoan && matkhau && matkhauxn && gioitinh && diachi && sodt && ngaysinh && email) {
        Khachhang.findByTaikhoanvaEmail(taikhoan, email, (err, khachhang) => {
            if (err || khachhang) {
                // A khachhang with that email address does not exists
                const conflictError = 'Tên tài khoản hoặc email này đã tồn tại';
                res.render('auth/register', {
                    hokh,
                    tenkh,
                    matkhauxn,
                    gioitinh,
                    diachi,
                    sodt,
                    ngaysinh,
                    taikhoan,
                    matkhau,
                    email,
                    conflictError
                });
            } else {
                if(matkhau == matkhauxn){

                    if(matkhau.length >= 8 && matkhau.match(/[a-z]/) && matkhau.match(/[A-Z]/) && matkhau.match(/\d/) && matkhau.match(/[^a-zA-Z\d]/) ){
                        bcrypt.hash(matkhau, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
                            // Create a khachhang
                            const khachhang = new Khachhang({
                                taikhoan: taikhoan,
                                matkhau: hashed,
                                email: email,
                                hokh: hokh,
                                tenkh: tenkh,
                                gioitinh: gioitinh,
                                diachi: diachi,
                                hinhdd: '',
                                kichhoat: 1,
                                tinhtrang: 1,
                             
                                sodt: sodt,
                                ngaysinh: ngaysinh,
                            });
                            Khachhang.create(khachhang, (err, khachhang) => {
                                if (!err) {
                                    bcrypt.hash(khachhang.email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                                        console.log(`${process.env.APP_URL}/verify?email=${khachhang.email}&token=${hashedEmail}`);
                                        mailer.sendMail(khachhang.email, "Verify Email", `<a href="${process.env.APP_URL}/verify?email=${khachhang.email}&token=${hashedEmail}"> Verify </a>`)
                                    });
                                    // const conflictError = 'Tạo tài khoản thành công, vui lòng check mail để xác nhận và đăng nhập!';
                                    // res.redirect('/login', { conflictError});
                                    res.redirect('/login?status=taotaikhoantc');
                                }
                            })
                        });
                    }else{
                        const conflictError = 'Mật khẩu phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                        res.render('auth/register', {
                            hokh,
                            tenkh,
                            matkhauxn,
                            gioitinh,
                            diachi,
                            sodt,
                            ngaysinh,
                            taikhoan,
                            matkhau,
                            email,
                            conflictError
                        });
                    }

                  
                }else{
                    const conflictError = 'Bạn phải xác nhận mật khẩu đúng!';
                    res.render('auth/register', {
                        hokh,
                        tenkh,
                        matkhauxn,
                        gioitinh,
                        diachi,
                        sodt,
                        ngaysinh,
                        taikhoan,
                        matkhau,
                        email,
                        conflictError
                    });
                }
            }
        })
    } else {
        const conflictError = 'Bạn phải nhập đầy đủ thông tin!';
        res.render('auth/register', {
            hokh,
            tenkh,
            matkhauxn,
            gioitinh,
            diachi,
            sodt,
            ngaysinh,
            taikhoan,
            matkhau,
            email,
            conflictError
        });
    }
}

exports.verify = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        if (result == true) {
            Khachhang.verify(req.query.email, (err, result) => {
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