const NhanVien = require('../../models/NhanVien.model');
const bcrypt = require('bcrypt');

exports.showLoginForm = (req, res) => {
    res.render('authad/login', {layout: false});
}

exports.login = (req, res) => {
    const { taikhoan, matkhau } = req.body;
    
    if (taikhoan && matkhau) {
        NhanVien.findByTaikhoan(taikhoan, (err, nhanvien) => {
            if (!nhanvien) {
                // res.redirect('/login');
                const conflictError = 'Tài khoản này không tồn tại!';
                res.render('authad/login', { taikhoan, conflictError });
            } else {
                bcrypt.compare(matkhau,nhanvien.matkhau, (err, result) => {      
                    if (result == true) {
                        req.session.loggedin = true;
                        req.session.nhanvien = nhanvien;
                        res.redirect('/admin/index');
                    } else {
                        const conflictError = 'Sai Password!';
                        res.render('authad/login', { taikhoan, matkhau, conflictError });
                    }
                })
            }
        })
    } else {
        // A khach hang with that taikhoan address does not exists
        const conflictError = 'Bạn phải nhập Tài khoản và Password!';
        res.render('authad/login', { taikhoan, matkhau, conflictError });
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/admin/login');
    })
}