const authMiddQL = require('../middlewares/authadql.middleware');

module.exports = app => {
    const khachhang = require("../controllers/khachhang/khachhang.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các khách hàng
    router.get("/index",authMiddQL.loggedinadql, khachhang.findAll);

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

    router.get("/create", authMiddQL.loggedinadql, khachhang.create);

    // Lưu khách hàng mới khi nhấn nút lưu
    router.post("/", authMiddQL.loggedinadql, khachhang.store);

    // Xem thông tin chi tiết 1 khách hàng
    router.get("/details/:makh", authMiddQL.loggedinadql, khachhang.details);

    // thay đổi mật khẩu
    router.get("/changepass/:makh", authMiddQL.loggedinadql, khachhang.formthaypasss);

    // đổi mật khẩu khi nhấn nút
    router.put("/doimatkhau/:makh", authMiddQL.loggedinadql, khachhang.adupdatemk);

    // Chỉnh sửa 1 khách hàng khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:makh", authMiddQL.loggedinadql, khachhang.edit);

    // đổi email
    router.put("/doiemail/:manv", authMiddQL.loggedinadql, khachhang.changeEmail);

    // Lưu khách hàng khi nhấn nút update
    router.put("/:makh", authMiddQL.loggedinadql, khachhang.update);

    router.post("/anhdaidien/:makh", authMiddQL.loggedinadql, upload.single('hinhddmoi'), khachhang.updateHddAD);

    // Delete a khachhang with id
    router.get("/delete/:makh", authMiddQL.loggedinadql, khachhang.delete);

    app.use('/admin/khachhang', router);
}