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
                bcrypt.compare( matkhau ,khachhang.matkhau, (err, result) => {
                    if (result == true) {
                        req.session.loggedin = true;
                        req.session.khachhang = khachhang;
                        res.redirect('/home');
                    } else {
                        // A khach hang with that taikhoan address does not exists
                        const conflictError = 'Khue1.';
                        res.render('auth/login', { taikhoan, matkhau, conflictError });
                    }
                })
            }
        })
    } else {
        // A user with that taikhoan address does not exists
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