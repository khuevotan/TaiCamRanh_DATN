
const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const danhMuc = require("../controllers/admin/danhmuc.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các danh mục
    router.get("/index",authMiddBH.loggedinadbh, danhMuc.findAll);

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

    router.get("/create", authMiddBH.loggedinadbh, danhMuc.create);

    // Lưu danh mục mới khi nhấn nút lưu
    router.post("/", authMiddBH.loggedinadbh, upload.single('hinhdd'), danhMuc.store);

    // Xem thông tin chi tiết 1 danh mục
    router.get("/details/:madm", authMiddBH.loggedinadbh, danhMuc.details);

    // Chỉnh sửa 1 danh mục khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:madm", authMiddBH.loggedinadbh, danhMuc.edit);
    
    // Lưu danh mục khi nhấn nút update
    router.put("/:madm", authMiddBH.loggedinadbh, danhMuc.update);

    router.post("/anhdaidien/:madm", authMiddBH.loggedinadbh, upload.single('hinhddmoi'), danhMuc.updateADD);

    // // Delete a danhmuc with id
    router.get("/delete/:madm", authMiddBH.loggedinadbh, danhMuc.delete);

    app.use('/admin/danhmuc', router);
}