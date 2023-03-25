const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require('express').Router();

    router.get('/khachhang/home', authMiddleware.loggedin, (req, res) => {
        res.render('home');
    });

    router.get('/khachhang/chinhsuatt', authMiddleware.loggedin, (req, res) => {
        res.render('chinhsuatt');
    });

    router.get('/khachhang/dondathang', authMiddleware.loggedin, (req, res) => {
        res.render('dondathang');
    });

    router.get('/khachhang/dondatlich', authMiddleware.loggedin, (req, res) => {
        res.render('dondatlich');
    });

    router.get('/khachhang/ctdathang', authMiddleware.loggedin, (req, res) => {
        res.render('ctdathang');
    });

    router.get('/khachhang/ctdatlich', authMiddleware.loggedin, (req, res) => {
        res.render('ctdatlich');
    });

    router.get('/khachhang/lsdathang', authMiddleware.loggedin, (req, res) => {
        res.render('lsdathang');
    });

    router.get('/khachhang/lsdatlich', authMiddleware.loggedin, (req, res) => {
        res.render('lsdatlich');
    });

    router.get('/khachhang/giohang', authMiddleware.loggedin, (req, res) => {
        res.render('giohang',{layout: false});
    });

    router.get('/khachhang/thanhtoantc', authMiddleware.loggedin, (req, res) => {
        res.render('thanhtoantc');
    });
    router.get('/khachhang/chonthanhtoan', authMiddleware.loggedin, (req, res) => {
        res.render('chonthanhtoan');
    });

    router.get('/khachhang/thongtintt', authMiddleware.loggedin, (req, res) => {
        res.render('thongtintt');
    });


    router.get('/khachhang/datlichrx', authMiddleware.loggedin, (req, res) => {
        res.render('datlichrx');
    });

    app.use(router);
}