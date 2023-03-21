module.exports = app => {
    var router = require("express").Router();

    const controller = require('../controllers/admin/admin.controller');


    // router.get('/', function(req, res){
    //     res.send('hello admin');
    // })

    router.get('/login', controller.Login);

    router.get('/index', controller.getIndex);

    app.use('/admin', router);
   
}