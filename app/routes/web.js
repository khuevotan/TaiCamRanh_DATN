// const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require("express").Router();
    const controller = require('../controllers/web/controller');
    const controllerdv = require('../controllers/admin/dichvu.controller');
    const controllerbv = require('../controllers/admin/baiviet.controller');
    const controllersp = require('../controllers/admin/sanpham.controller');
    const controllerdm = require('../controllers/admin/danhmuc.controller');

    router.get('/baivietct/:mabv', controllerbv.chitiet);
    router.get('/sanphamct/:masp', controllersp.chitietsp);
    router.get('/', controller.getIndex);
    router.get('/index', controller.getIndex);
    router.get('/dichvu', controllerdv.findAllKH);
    router.get('/vetcr', controller.getVetcr);
    router.get('/lienhe', controller.getLienhe);
    router.get('/baiviet', controllerbv.findAllKH);
  
    // router.get('/shop', controllersp.findAllKH);
    router.get('/sanphamdm/:madm',  controllersp.findAllKHandDMct); 

    router.get('/shop',  controllersp.findAllKHandDM);

    router.get('/dangnhap', controller.dangNhap);
 

    // router.get('/home', authMiddleware.loggedin, (req, res) => {
    //     res.render('home');
    // });

    router.get('/view/index', controller.showView);
    
    app.use(router);
}


