const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const sanPham = require("../controllers/admin/sanpham.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các sản phẩm
    router.get("/index", authMiddleware.loggedinad, sanPham.findAll);

     // Hiển thị danh sách sản phẩm sắp hết
    router.get("/spsaphet", authMiddleware.loggedinad, sanPham.findAllSH);
    

    router.get("/details/:masp", authMiddleware.loggedinad, sanPham.details);

    // Hiển thị form tạo sản phẩm

     //File upload images sản phẩm
     const multer = require("multer");
     const fsExtra = require('fs-extra');
 
     // SET STORAGE
     var storage = multer.diskStorage({
         destination: function (req, file, cb) {
             let path = 'app/public/images/sanpham';
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

    router.get("/create", authMiddleware.loggedinad, sanPham.create);

    // Lưu sản phẩm mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, upload.single('hinhdd'), sanPham.store);

    // Chỉnh sửa 1 sản phẩm khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:masp", authMiddleware.loggedinad, sanPham.edit);

    // Lưu sản phẩm khi nhấn nút update
    router.put("/:masp", authMiddleware.loggedinad, sanPham.update);

    router.post("/anhdaidien/:masp", authMiddleware.loggedinad, upload.single('hinhddmoi'), sanPham.updateADD);

    // Delete a sanPham with id
    router.get("/delete/:masp", authMiddleware.loggedinad, sanPham.delete);

    app.use('/admin/sanpham', router); 
}