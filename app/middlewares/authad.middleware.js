
// khong vo dc trang home (chua dang nhap)
exports.loggedinad = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.nhanvien = req.session.nhanvien
        next();
    } else {
        res.redirect('/admin/login')
    }
}

// khong vo duoc trang login (dang nhap roi)
exports.isAuthad = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.nhanvien = req.session.nhanvien
        res.redirect('/admin/trangcanhan');
    } else {
        next();
    }
}
