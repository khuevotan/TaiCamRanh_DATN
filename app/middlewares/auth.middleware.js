
const Cart = require("../models/cart.model");

// khong vo dc trang home (chua dang nhap)
exports.loggedin = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.khachhang = req.session.khachhang

        // var cart = new Cart(req.session.cart ? req.session.cart : {});
        // req.session.cart = cart;
        // res.locals.cart = req.session.cart;

        next();
    } else {
        res.redirect('/login')
    }
}

// khong vo duoc trang login (dang nhap roi)
exports.isAuth = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.khachhang = req.session.khachhang
        res.redirect('khachhang/home');
    } else {
        // var cart = new Cart(req.session.cart ? req.session.cart : {});
        // req.session.cart = cart;
        // res.locals.cart = req.session.cart;
        next();
    }
}
