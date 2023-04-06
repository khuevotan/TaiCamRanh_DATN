const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const sanPham = require("../controllers/admin/sanpham.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các danh mục
    router.get("/index", authMiddleware.loggedinad, sanPham.findAll);


    router.get("/details/:masp", authMiddleware.loggedinad, sanPham.details);

    // Hiển thị form tạo danh mục

    //  //File upload images Danh Muc
    //  const multer = require("multer");
    //  const fsExtra = require('fs-extra');
 
    //  // SET STORAGE
    //  var storage = multer.diskStorage({
    //      destination: function (req, file, cb) {
    //          let path = 'app/public/images/sanpham';
    //          if (!fsExtra.existsSync(path)) {
    //              fsExtra.mkdirSync(path)
    //          }
    //          cb(null, path)
    //      },
    //      filename: function (req, file, cb) {
    //          cb(null, Date.now() + '-' + file.originalname)
    //      }
    //  });
 
    //  //file
    //  var upload = multer({
    //      storage: storage
    //  })

    // //file
    // var uploadctanh = multer({
    //     storage: storage
    // })

    // router.get("/create", authMiddleware.loggedinad, sanPham.create);

    // Lưu danh mục mới khi nhấn nút lưu
    // router.post("/", authMiddleware.loggedinad, upload.single('hinhdd'), sanPham.store);

    // Chỉnh sửa 1 sản phẩm khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:masp", authMiddleware.loggedinad, sanPham.edit);

    // Lưu danh mục khi nhấn nút update
    router.put("/:masp", authMiddleware.loggedinad, sanPham.update);

    // router.post("/anhdaidien/:masp", authMiddleware.loggedinad, upload.single('hinhddmoi'), sanPham.updateADD);

    // // Delete a sanPham with id
    // router.get("/delete/:masp", authMiddleware.loggedinad, sanPham.delete);

    // // Delete all sanPham
    // router.delete("/delete", sanPham.deleteAll);

    app.use('/admin/sanpham', router);
}