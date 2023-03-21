module.exports = app => {
    var router = require("express").Router();
    const controller = require('../controllers/web/controller');

    router.get('/', controller.getIndex);
    router.get('/index', controller.getIndex);
    router.get('/dichvu', controller.getDichvu);
    router.get('/vetcr', controller.getVetcr);
    router.get('/lienhe', controller.getLienhe);
    router.get('/baiviet', controller.getBaiviet);
    router.get('/baivietct', controller.getBaivietct);

    router.get('/view/index', controller.showView);

    app.use(router);
}

