const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const trangthai = require("../controllers/admin/trangthai.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các trạng thái
    router.get("/index",authMiddleware.loggedinad, trangthai.findAll);

    // Hiển thị form tạo trạng thái

    router.get("/create", authMiddleware.loggedinad, trangthai.create);

    // Xem thông tin chi tiết 1 trạng thái
    router.get("/details/:matt", authMiddleware.loggedinad, trangthai.details);

    // Chỉnh sửa 1 trạng thái khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:matt", authMiddleware.loggedinad, trangthai.edit);
    // Lưu trạng thái khi nhấn nút update
    router.put("/:matt", authMiddleware.loggedinad, trangthai.update);

    // // Delete a trangthai with id
    router.get("/delete/:matt", authMiddleware.loggedinad, trangthai.delete);

    app.use('/admin/trangthai', router);
}