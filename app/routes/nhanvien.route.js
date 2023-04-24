const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const nhanvien = require("../controllers/admin/nhanvien.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các nhân viên
    router.get("/index",authMiddleware.loggedinad, nhanvien.findAll);

    // Hiển thị form tạo nhân viên
    router.get("/create", authMiddleware.loggedinad, nhanvien.create);

    router.get("/verify", nhanvien.verify);

    // Lưu nhân viên mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, nhanvien.store);

    // Xem thông tin chi tiết 1 nhân viên
    router.get("/details/:manv", authMiddleware.loggedinad, nhanvien.details);

    // Chỉnh sửa 1 nhân viên khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:manv", authMiddleware.loggedinad, nhanvien.edit);
    // Lưu nhân viên khi nhấn nút update
    router.put("/:manv", authMiddleware.loggedinad, nhanvien.update);

    // Delete a nhanvien with id
    router.get("/delete/:manv", authMiddleware.loggedinad, nhanvien.delete);

    app.use('/admin/nhanvien', router);
}