const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const phieunhap = require("../controllers/admin/phieunhap.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn
    router.get("/index",authMiddleware.loggedinad, phieunhap.findAll);
    
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