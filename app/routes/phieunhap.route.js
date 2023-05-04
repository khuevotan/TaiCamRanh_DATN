const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const phieunhap = require("../controllers/admin/phieunhap.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn
    router.get("/index",authMiddleware.loggedinad, phieunhap.findAll);

     // Hiển thị form tạo đơn nhập
     router.get("/create", authMiddleware.loggedinad, phieunhap.create);

     // Lưu phiếu nhập mới khi nhấn nút lưu
     router.post("/", authMiddleware.loggedinad, phieunhap.store);

    // Chỉnh sửa 1 hóa đơn khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/editsp/:mapn", authMiddleware.loggedinad, phieunhap.editsp);

    
    
    // Xem thông tin chi tiết 1 hóa đơn
    router.get("/details/:mapn", authMiddleware.loggedinad, phieunhap.details);

    // Chỉnh sửa 1 hóa đơn khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mapn", authMiddleware.loggedinad, phieunhap.edit);



    // Lưu hóa đơn khi nhấn nút update
    router.put("/:mapn", authMiddleware.loggedinad, phieunhap.update);

    // // Delete a phieunhap with id
    router.get("/delete/:mapn", authMiddleware.loggedinad, phieunhap.delete);

    app.use('/admin/phieunhap', router);
}