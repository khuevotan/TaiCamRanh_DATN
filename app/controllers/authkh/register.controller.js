const Khachhang = require('../../models/khachhang.model');
const bcrypt = require('bcrypt');
require('dotenv/config');

exports.create = (req, res) => {
    res.render('auth/register');
}

exports.register = (req, res) => {
    const { taikhoan, matkhau, email } = req.body;

    if (taikhoan && matkhau && email) {
        Khachhang.findByTaikhoan(taikhoan, (err, khachhang) => {
            if (err || khachhang) {
                // A khachhang with that email address does not exists
                const conflictError = 'Da co tai khoan nay';
                res.render('auth/register', { taikhoan, matkhau, email, conflictError });
            }
        })

        bcrypt.hash(matkhau, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
            // Create a User
            const khachhang = new Khachhang({
                taikhoan: taikhoan,
                matkhau: hashed,
                email: email,
            });
            Khachhang.create(khachhang, (err, khachhang) => {
                if (!err) {
                    res.redirect('/login');
                }
            })
        });
    } else {
        const conflictError = 'Khue2';
        res.render('auth/register', { taikhoan, matkhau, email, conflictError });
    }
}