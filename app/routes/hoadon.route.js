const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const hoadon = require("../controllers/admin/hoadon.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn
    router.get("/index",authMiddleware.loggedinad, hoadon.findAll);

    // Xem thông tin chi tiết 1 hóa đơn
    router.get("/details/:mahd", authMiddleware.loggedinad, hoadon.details);

    // Chỉnh sửa 1 hóa đơn khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mahd", authMiddleware.loggedinad, hoadon.edit);
    // Lưu hóa đơn khi nhấn nút update
    router.put("/:mahd", authMiddleware.loggedinad, hoadon.update);

    // // Delete a hoadon with id
    router.get("/delete/:mahd", authMiddleware.loggedinad, hoadon.delete);

    app.use('/admin/hoadon', router);
}