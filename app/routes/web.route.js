// const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require("express").Router();
    const controller = require('../controllers/web/controller');

    const controllerbv = require('../controllers/admin/baiviet.controller');
    const controllersp = require('../controllers/admin/sanpham.controller');
  

    router.get('/baivietct/:mabv', controllerbv.chitiet);
    
    router.get('/sanphamct/:masp', controllersp.chitietsp);

    router.get('/', controller.getIndex);

    router.get('/index', controller.getIndex);

    router.get('/dvruaxe', controller.getDichVuRuaXe);

    router.get('/lienhe', controller.getLienhe);

    router.get('/baiviet', controllerbv.findAllKH);

    router.get('/sanphamdm/:madm',  controllersp.findAllKHandDMct); 

    router.get('/shop',  controllersp.findAllKHandDM);

    router.get('/dangnhap', controller.dangNhap);

    router.get('/view/index', controller.showView);

    router.get('/admin/quyentruycap', controller.quyenTruyCap);


    
    
    
  
    
    app.use(router);
}


