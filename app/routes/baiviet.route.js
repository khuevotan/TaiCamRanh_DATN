const authMiddQL = require('../middlewares/authadql.middleware');

module.exports = app => {
    const baiviet = require("../controllers/admin/baiviet.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các bài viết
    router.get("/index", authMiddQL.loggedinadql, baiviet.findAll);

    // Hiển thị form tạo bài viết
    router.get("/create", authMiddQL.loggedinadql, baiviet.create);

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
    router.post("/", authMiddQL.loggedinadql, upload.single('hinhdd'), baiviet.store);

    // Xem thông tin chi tiết 1 bài viết
    router.get("/details/:mabv", authMiddQL.loggedinadql, baiviet.details);

    // Chỉnh sửa 1 bài viết khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mabv", authMiddQL.loggedinadql, baiviet.edit);

    // Lưu bài viết khi nhấn nút update
    router.put("/:mabv", authMiddQL.loggedinadql, baiviet.update);

    router.post("/anhdaidien/:mabv", authMiddQL.loggedinadql, upload.single('hinhddmoi'), baiviet.updateADD);

    // Xóa một bài viết
    router.get("/delete/:mabv", authMiddQL.loggedinadql, baiviet.delete);

    app.use('/admin/baiviet', router);
}