// const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require("express").Router();
    const controller = require('../controllers/web/controller');
    const controllerdv = require('../controllers/admin/dichvu.controller');
    const controllerbv = require('../controllers/admin/baiviet.controller');
    const controllersp = require('../controllers/admin/sanpham.controller');

    //file
    const multer = require("multer");
    const fsExtra = require('fs-extra');

     // SET STORAGE
     var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            let path = 'uploads';
            if (!fsExtra.existsSync(path)) {
                fsExtra.mkdirSync(path)
            }

            cb(null, path)
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    });

    //file
    var upload = multer({ storage: storage })

    router.post('/uploadfile', upload.single('myFile'), controller.uploadFile)
    router.post('/uploadmultiple', upload.array('myFiles'), controller.uploadMultiple)

    router.get('/baivietct/:mabv', controllerbv.chitiet);
    router.get('/', controller.getIndex);
    router.get('/index', controller.getIndex);
    router.get('/dichvu', controllerdv.findAllKH);
    router.get('/vetcr', controller.getVetcr);
    router.get('/lienhe', controller.getLienhe);
    router.get('/baiviet', controllerbv.findAllKH);
  
    router.get('/shop', controllersp.findAllKH);
    // sản phẩm chi tiết
    router.get('/sanphamct/:masp', controllersp.chitiet);
    router.get('/dangnhap', controller.dangNhap);
 

    // router.get('/home', authMiddleware.loggedin, (req, res) => {
    //     res.render('home');
    // });

    router.get('/view/index', controller.showView);

    //file
    router.get('/form/data', controller.showForm);


    app.use(router);
}


