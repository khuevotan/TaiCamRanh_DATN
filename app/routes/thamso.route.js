const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const thamso = require("../controllers/admin/thamso.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các tham số
    router.get("/index",authMiddleware.loggedinad, thamso.findAll);

    // Xem thông tin chi tiết 1 tham số
    router.get("/details/:mats", authMiddleware.loggedinad, thamso.details);

    // Chỉnh sửa 1 tham số khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mats", authMiddleware.loggedinad, thamso.edit);

    // Lưu tham số khi nhấn nút update
    router.put("/:mats", authMiddleware.loggedinad, thamso.update);

    app.use('/admin/thamso', router);
}