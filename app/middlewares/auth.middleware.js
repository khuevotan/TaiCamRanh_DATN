
// khong vo dc trang home
exports.loggedin = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.khachhang = req.session.khachhang
        next();
    } else {
        res.redirect('/login')
    }
}

// khong vo duoc trang login
exports.isAuth = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.khachhang = req.session.khachhang
        res.redirect('khachhang/home');
    } else {
        next();
    }
}
