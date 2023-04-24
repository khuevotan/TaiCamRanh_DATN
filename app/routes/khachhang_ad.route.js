const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const khachhang = require("../controllers/khachhang/khachhang.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các khách hàng
    router.get("/index",authMiddleware.loggedinad, khachhang.findAll);

    // Hiển thị form tạo khách hàng

     //File upload images Danh Muc
     const multer = require("multer");
     const fsExtra = require('fs-extra');
 
     // SET STORAGE
     var storage = multer.diskStorage({
         destination: function (req, file, cb) {
             let path = 'app/public/images/khachhang';
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
     var upload = multer({
         storage: storage
     })

    //file
    var uploadctanh = multer({
        storage: storage
    })

    router.get("/create", authMiddleware.loggedinad, khachhang.create);

    // Lưu khách hàng mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, upload.single('hinhdd'), khachhang.store);

    // Xem thông tin chi tiết 1 khách hàng
    router.get("/details/:makh", authMiddleware.loggedinad, khachhang.details);

    // Chỉnh sửa 1 khách hàng khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:makh", authMiddleware.loggedinad, khachhang.edit);
    // Lưu khách hàng khi nhấn nút update
    // router.put("/:makh", authMiddleware.loggedinad, khachhang.update);

    // router.post("/anhdaidien/:makh", authMiddleware.loggedinad, upload.single('hinhddmoi'), khachhang.updateADD);

    // Delete a khachhang with id
    router.get("/delete/:makh", authMiddleware.loggedinad, khachhang.delete);

    app.use('/admin/khachhang', router);
}