const authMiddleware = require('../middlewares/auth.middleware');
const controllerlx = require('../controllers/admin/loaixe.controller');
const khachhang = require("../controllers/khachhang/khachhang.controller");


module.exports = app => {
    var router = require('express').Router();

    router.get('/khachhang/home', authMiddleware.loggedin, khachhang.trangCaNhan);

    router.get("/khachhang/chinhsuatt/:makh",authMiddleware.loggedin, khachhang.editkh);

    router.put("/khachhang/:makh", authMiddleware.loggedin, khachhang.update);

    //file
    const multer = require("multer");
    const fsExtra = require('fs-extra');

    
     // SET STORAGE
     var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            let path = 'app/public/images/avatarkh';
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

    router.post('/uploadfile', upload.single('myFile'), khachhang.uploadFile)
    router.post('/uploadmultiple', upload.array('myFiles'), khachhang.uploadMultiple)


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




    router.get('/khachhang/datlichrx', authMiddleware.loggedin, controllerlx.findAllKH,(req, res) => {
        res.render('datlichrx');
    });



    app.use(router);
}