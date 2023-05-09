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
     var upload = multer({
         storage: storage
     })

    //file
    var uploadctanh = multer({
        storage: storage
    })

    router.get("/create", authMiddleware.loggedinad, khachhang.create);

    // Lưu khách hàng mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, khachhang.store);

    // Xem thông tin chi tiết 1 khách hàng
    router.get("/details/:makh", authMiddleware.loggedinad, khachhang.details);

    // thay đổi mật khẩu
    router.get("/changepass/:makh", authMiddleware.loggedinad, khachhang.formthaypasss);

    // đổi mật khẩu khi nhấn nút
    router.put("/doimatkhau/:makh", authMiddleware.loggedinad, khachhang.adupdatemk);

    // Chỉnh sửa 1 khách hàng khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:makh", authMiddleware.loggedinad, khachhang.edit);

    // đổi email
    router.put("/doiemail/:manv", authMiddleware.loggedinad, khachhang.changeEmail);

    // Lưu khách hàng khi nhấn nút update
    router.put("/:makh", authMiddleware.loggedinad, khachhang.update);

    router.post("/anhdaidien/:makh", authMiddleware.loggedinad, upload.single('hinhddmoi'), khachhang.updateHddAD);

    // Delete a khachhang with id
    router.get("/delete/:makh", authMiddleware.loggedinad, khachhang.delete);

    app.use('/admin/khachhang', router);
}