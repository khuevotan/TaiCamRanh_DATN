const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const nhanvien = require("../controllers/admin/nhanvien.controller");
    var router = require("express").Router();

      //File upload images Danh Muc
      const multer = require("multer");
      const fsExtra = require('fs-extra');
  
      // SET STORAGE
      var storage = multer.diskStorage({
          destination: function (req, file, cb) {
              let path = 'app/public/images/avatarad';
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


    // Hiển thị danh sách các nhân viên
    router.get("/index",authMiddleware.loggedinad, nhanvien.findAll);


    const pdfController = require('../controllers/admin/pdfluong.controller');

    router.get('/pdf/:manv', pdfController.print); 

    // Hiển thị form tạo nhân viên
    router.get("/create", authMiddleware.loggedinad, nhanvien.create);

    router.get("/verify", nhanvien.verify);

    // Lưu nhân viên mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, nhanvien.store);

    // Xem thông tin chi tiết 1 nhân viên
    router.get("/details/:manv", authMiddleware.loggedinad, nhanvien.details);

    // Chỉnh sửa 1 nhân viên khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:manv", authMiddleware.loggedinad, nhanvien.edit);


     // thay đổi mật khẩu
     router.get("/changepass/:manv", authMiddleware.loggedinad, nhanvien.formthaypasss);

     // đổi mật khẩu khi nhấn nút
     router.put("/doimatkhau/:manv", authMiddleware.loggedinad, nhanvien.adupdatemk);

    // Lưu nhân viên khi nhấn nút update
    router.put("/:manv", authMiddleware.loggedinad, nhanvien.update);

    // Delete a nhanvien with id
    router.get("/delete/:manv", authMiddleware.loggedinad, nhanvien.delete);

    router.post("/anhdaidien/:manv", authMiddleware.loggedinad, upload.single('hinhddmoi'), nhanvien.updateADD);

    app.use('/admin/nhanvien', router);
}