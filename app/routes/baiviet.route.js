const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const baiviet = require("../controllers/admin/baiviet.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các bài viết
    router.get("/index", authMiddleware.loggedinad, baiviet.findAll);

    // Hiển thị form tạo bài viết
    router.get("/create", authMiddleware.loggedinad, baiviet.create);

     //File upload images Bài Viết
     const multer = require("multer");
     const fsExtra = require('fs-extra');
 
     // SET STORAGE
     var storage = multer.diskStorage({
         destination: function (req, file, cb) {
             let path = 'app/public/images/baiviet';
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

    
    // Lưu bài viết mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, upload.single('hinhdd'), baiviet.store);

    // Xem thông tin chi tiết 1 bài viết
    router.get("/details/:mabv", authMiddleware.loggedinad, baiviet.details);

    // Chỉnh sửa 1 bài viết khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mabv", authMiddleware.loggedinad, baiviet.edit);

    // Lưu bài viết khi nhấn nút update
    router.put("/:mabv", authMiddleware.loggedinad, baiviet.update);

    router.post("/anhdaidien/:mabv", authMiddleware.loggedinad, upload.single('hinhddmoi'), baiviet.updateADD);

    // Xóa một bài viết
    router.get("/delete/:mabv", authMiddleware.loggedinad, baiviet.delete);

    app.use('/admin/baiviet', router);
}