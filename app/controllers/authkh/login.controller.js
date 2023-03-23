const Khachhang = require('../../models/khachhang.model');
const bcrypt = require('bcrypt');

exports.showLoginForm = (req, res) => {
    res.render('auth/login');
}

exports.login = (req, res) => {
    const { taikhoan, matkhau } = req.body;
    
    if (taikhoan && matkhau) {
        Khachhang.findByTaikhoan(taikhoan, (err, khachhang) => {
            if (!khachhang) {
                res.redirect('/login');
            } else {
                console.log(matkhau === '12345');
                console.log(khachhang.matkhau);

                bcrypt.compare(matkhau,khachhang.matkhau, (err, result) => {
                    
                    console.log(result);
                
                    if (result == true) {
                        req.session.loggedin = true;
                        req.session.khachhang = khachhang;
                        res.redirect('/');
                    } else {
                        // A khach hang with that taikhoan address does not exists
                        const conflictError = 'Tài khoản hoặc Password sai';
                        res.render('auth/login', { taikhoan, matkhau, conflictError });
                    }
                })
            }
        })
    } else {
        // A khach hang with that taikhoan address does not exists
        const conflictError = 'khue 2';
        res.render('auth/login', { taikhoan, matkhau, conflictError });
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/');
    })
}