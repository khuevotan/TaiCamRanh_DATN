
// khong vo dc trang home (chua dang nhap)
exports.loggedinadrx = (req, res, next) => {
    if ((req.session.loggedin && req.session.nhanvien.manhom == 3) || (req.session.loggedin && req.session.nhanvien.manhom == 1)) {
        res.locals.nhanvien = req.session.nhanvien
        next();
    } else {
        res.redirect('/admin/login')
    }
}


