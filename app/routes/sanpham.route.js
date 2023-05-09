const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const sanPham = require("../controllers/admin/sanpham.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các sản phẩm
    router.get("/index", authMiddBH.loggedinadbh, sanPham.findAll);

     // Hiển thị danh sách sản phẩm sắp hết
    router.get("/spsaphet", authMiddBH.loggedinadbh, sanPham.findAllSH);
    

    router.get("/details/:masp", authMiddBH.loggedinadbh, sanPham.details);

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

    router.get("/create", authMiddBH.loggedinadbh, sanPham.create);

    // Lưu sản phẩm mới khi nhấn nút lưu
    router.post("/", authMiddBH.loggedinadbh, upload.single('hinhdd'), sanPham.store);

    // Chỉnh sửa 1 sản phẩm khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:masp", authMiddBH.loggedinadbh, sanPham.edit);

    // Lưu sản phẩm khi nhấn nút update
    router.put("/:masp", authMiddBH.loggedinadbh, sanPham.update);

    router.post("/anhdaidien/:masp", authMiddBH.loggedinadbh, upload.single('hinhddmoi'), sanPham.updateADD);

    // Delete a sanPham with id
    router.get("/delete/:masp", authMiddBH.loggedinadbh, sanPham.delete);

    app.use('/admin/sanpham', router); 
}