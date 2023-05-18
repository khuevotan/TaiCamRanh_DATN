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
                // res.redirect('/login');
                const conflictError = 'Tài khoản này không tồn tại, xin vui lòng nhập lại!';
                res.render('auth/login', { taikhoan, conflictError });
            } else {

                if(khachhang.tinhtrang == 1){
                    bcrypt.compare(matkhau,khachhang.matkhau, (err, result) => {      
                        if (result == true) {
                            req.session.loggedin = true;
                            req.session.khachhang = khachhang;
                            res.redirect('/');
                        } else {
                            const conflictError = 'Sai mật khẩu, xin vui lòng nhập lại!';
                            res.render('auth/login', { taikhoan, matkhau, conflictError });
                        }
                    })
                }else{
                    const conflictError = 'Tài Khoản Đã Bị Vô Hiệu Hóa!';
                    res.render('auth/login', { taikhoan, matkhau, conflictError });
                }
                
            }
        })
    } else {
        // A khach hang with that taikhoan address does not exists
        const conflictError = 'Bạn phải nhập Tài khoản và Password!';
        res.render('auth/login', { taikhoan, matkhau, conflictError });
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/login');
    })
}