const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const danhMuc = require("../controllers/admin/danhmuc.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các danh mục
    router.get("/index",authMiddleware.loggedinad, danhMuc.findAll);

    // Hiển thị form tạo danh mục

     //File upload images Danh Muc
     const multer = require("multer");
     const fsExtra = require('fs-extra');
 
     // SET STORAGE
     var storage = multer.diskStorage({
         destination: function (req, file, cb) {
             let path = 'app/public/images/danhmuc';
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

    router.get("/create", authMiddleware.loggedinad, danhMuc.create);

    // Lưu danh mục mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, upload.single('hinhdd'), danhMuc.store);

    // Xem thông tin chi tiết 1 danh mục
    router.get("/details/:madm", authMiddleware.loggedinad, danhMuc.details);

    // Chỉnh sửa 1 danh mục khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:madm", authMiddleware.loggedinad, danhMuc.edit);
    
    // Lưu danh mục khi nhấn nút update
    router.put("/:madm", authMiddleware.loggedinad, danhMuc.update);

    router.post("/anhdaidien/:madm", authMiddleware.loggedinad, upload.single('hinhddmoi'), danhMuc.updateADD);

    // // Delete a danhmuc with id
    router.get("/delete/:madm", authMiddleware.loggedinad, danhMuc.delete);

    app.use('/admin/danhmuc', router);
}