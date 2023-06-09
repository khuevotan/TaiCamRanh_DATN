const Khachhang = require('../../models/khachhang.model');
const bcrypt = require('bcrypt');
const mailer = require('../../utils/mailer');
require('dotenv/config');

exports.showForgotForm = (req, res) => {
    res.render('auth/passwords/email');
}

exports.sendResetLinkEmail = (req, res) => {
    if (!req.body.email) {
        res.redirect('/password/reset')
    } else {
        // tim tai khoan
        Khachhang.findByEmail(req.body.email, (err, khachhang) => {
            if (!khachhang) {
             
                const conflictError = 'Email này không thuộc tài khoản nào!';
                res.render('auth/passwords/email', {  conflictError });
        
            } else {
                bcrypt.hash(khachhang.email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                    mailer.sendMail(khachhang.email, "Reset password", `<a href="${process.env.APP_URL}/password/reset/${khachhang.email}?token=${hashedEmail}"> Reset Password </a>`)
                    console.log(`${process.env.APP_URL}/password/reset/${khachhang.email}?token=${hashedEmail}`);
                })
                const conflictError = 'Thành công, Vui lòng check mail!';
             
                res.render('auth/passwords/email', {  conflictError });
            }
        })
    }
}

exports.showResetForm = (req, res) => {
    if (!req.params.email || !req.query.token ) {
        res.redirect('/password/reset')
    } else {
        bcrypt.compare(req.params.email, req.query.token, (err, result) => {
            if (result == true) {
                console.log(result);
                    if (!err) {
                        res.render('auth/passwords/reset', { email: req.params.email, token: req.query.token})
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
    const { email, token, matkhau, matkhauxn } = req.body;
   
    if ( !token || !matkhau) { 
        res.redirect('/password/reset');
    } else {

        if(matkhau.length >= 8 && matkhau.match(/[a-z]/) && matkhau.match(/[A-Z]/) && matkhau.match(/\d/) && matkhau.match(/[^a-zA-Z\d]/)){

            if (matkhau == matkhauxn) {
                bcrypt.compare(email, token, (err, result) => {
                    console.log('compare', result);
                    if (result == true) {
                        bcrypt.hash(matkhau, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                            Khachhang.resetPassword(email, hashedMatkhau, (err, result) => {
                                if (!err) {
                                    res.redirect('/login?status=thanhcong');
        
                                } else {
                                    res.redirect("/500");
                                }
                            })
                        })
        
                    } 
                })
            }else{
                res.redirect('/password/reset/' + email + '?token=' +  token  + '&status=xnchuadung');
            }
           
        }else{  
            res.redirect('/password/reset/' + email + '?token=' +  token  + '&status=thatbai');
        }
    }
}
