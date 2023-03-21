const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require('express').Router();

    router.get('/khachhang/home', authMiddleware.loggedin, (req, res) => {
        res.render('/khachhang/home');
    });

    router.get('/khachhang/datlichrx', authMiddleware.loggedin, (req, res) => {
        res.render('/khachhang/datlichrx');
    });

    app.use(router);
}