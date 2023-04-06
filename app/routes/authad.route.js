const login = require('../controllers/authad/login.controller');
const register = require('../controllers/authad/register.controller');
const authMiddleware = require('../middlewares/authad.middleware');
const forgotPassword = require('../controllers/authad/forgotPassword.controller');

module.exports = app => {
    var router = require('express').Router();

    // hien form
    router.get('/login', authMiddleware.isAuthad, login.showLoginForm)
    .post('/login', login.login)

    .get('/register', authMiddleware.isAuthad, register.create)
    .post('/register', register.register)

    .get('/logout', authMiddleware.loggedinad, login.logout)

    .get('/verify', register.verify)

    //quen mat khau
    .get('/password/reset', forgotPassword.showForgotForm)
    .post('/password/email', forgotPassword.sendResetLinkEmail)

    .get('/password/reset/:email', forgotPassword.showResetForm)
    .post('/password/reset', forgotPassword.reset)

    app.use('/admin', router);
}