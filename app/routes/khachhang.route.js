const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require('express').Router();

    router.get('/khachhang/home', authMiddleware.loggedin, (req, res) => {
        res.render('home');
    });

    router.get('/khachhang/datlichrx', authMiddleware.loggedin, (req, res) => {
        res.render('datlichrx');
    });

    app.use(router);
}