const login = require('../controllers/authkh/login.controller');
const register = require('../controllers/authkh/register.controller');
const authMiddleware = require('../middlewares/auth.middleware');
// const forgotPassword = require('../controllers/authkh/forgotPassword.controller');

module.exports = app => {
    var router = require('express').Router();

    // hien form
    router.get('/login', authMiddleware.isAuth, login.showLoginForm)
    .post('/login', login.login)

    .get('/register', authMiddleware.isAuth, register.create)
    .post('/register', register.register)

    .get('/logout', authMiddleware.loggedin, login.logout)

    // .get('/verify', register.verify)

    // .get('/password/reset', forgotPassword.showForgotForm)
    // .post('/password/email', forgotPassword.sendResetLinkEmail)

    // .get('/password/reset/:email', forgotPassword.showResetForm)
    // .post('/password/reset', forgotPassword.reset)


    app.use(router);
}