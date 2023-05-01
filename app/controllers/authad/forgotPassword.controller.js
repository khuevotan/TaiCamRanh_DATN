const NhanVien = require('../../models/nhanvien.model');
const bcrypt = require('bcrypt');
const mailer = require('../../utils/mailer');
require('dotenv/config');

exports.showForgotForm = (req, res) => {

    res.render('authad/passwords/email', {
        layout: false
    });
}

exports.sendResetLinkEmail = (req, res) => {
    if (!req.body.email) {
        res.redirect('/admin/password/reset')
    } else {
        // Tìm tài khoản
        NhanVien.findByEmail(req.body.email, (err, nhanvien) => {
            if (!nhanvien) {
                const conflictError = 'Mail này không thuộc tài khoản nào!';
                res.render('authad/passwords/email', {
                    conflictError,
                    layout: false
                });
        
            } else {
                bcrypt.hash(nhanvien.email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                    mailer.sendMail(nhanvien.email, "Reset password", `<a href="${process.env.APP_URL}/admin/password/reset/${nhanvien.email}?token=${hashedEmail}"> Reset Password </a>`)
                    console.log(`${process.env.APP_URL}/admin/password/reset/${nhanvien.email}?token=${hashedEmail}`);
                })
           
                const conflictError = 'Thành công, vui lòng check mail!';
                res.render('authad/passwords/email', {
                    conflictError,
                    layout: false
                });
            }
        })
    }
}

exports.showResetForm = (req, res) => {
    if (!req.params.email || !req.query.token ) {
        res.redirect('/admin/password/reset')
    } else {
        bcrypt.compare(req.params.email, req.query.token, (err, result) => {
            if (result == true) {
                console.log(result);
                    if (!err) {
                        res.render('authad/passwords/reset', { email: req.params.email, token: req.query.token,  layout: false})
                    } else {
                        res.redirect('/500');
                    }
            
            } else {
                res.redirect('/404');
            }
        })
    }
}

exports.reset = (req, res) => {
    const { email, token, matkhaumoi, matkhaumoixn } = req.body;

    console.log(email, token, matkhaumoi);

    if (!email || !token || !matkhaumoi || !matkhaumoixn) { 
        res.redirect('/admin/password/reset');
        console.log("khue");
    } else {

        if(req.body.matkhaumoi == req.body.matkhaumoixn){
            if( matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)){
                bcrypt.compare(email, token, (err, result) => {
                    console.log('compare', result);
                    if (result == true) {
                        bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                            NhanVien.resetPassword(email, hashedMatkhau, (err, result) => {
                                if (!err) {
                                    res.redirect('/admin/login?status=doimkthanhcong');
        
                                } else {
                                    res.redirect("/admin/500");
                                }
                            })
                        })
        
                    } 
                })
            }else{
                res.redirect('/admin/password/reset/' + email + '?token='+ token + '&status=mahoakhongdung');
            }
        }else{
           
            res.redirect('/admin/password/reset/' + email + '?token='+ token + '&status=khongtrungnhau');
        }
    }
}
