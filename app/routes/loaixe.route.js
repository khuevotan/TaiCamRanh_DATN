const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const loaixe = require("../controllers/admin/loaixe.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các danh mục
    router.get("/index",authMiddleware.loggedinad, loaixe.findAll);

    // Hiển thị form tạo danh mục
    router.get("/create", authMiddleware.loggedinad, loaixe.create);

    // Lưu danh mục mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, loaixe.store);

    // Xem thông tin chi tiết 1 danh mục
    router.get("/details/:malx", authMiddleware.loggedinad, loaixe.details);

    // Chỉnh sửa 1 danh mục khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:malx", authMiddleware.loggedinad, loaixe.edit);
    // Lưu danh mục khi nhấn nút update
    router.put("/:malx", authMiddleware.loggedinad, loaixe.update);

    // // Delete a loaixe with id
    router.get("/delete/:malx", authMiddleware.loggedinad, loaixe.delete);

    // // Delete all loaixe
    // router.delete("/delete", loaixe.deleteAll);

    app.use('/admin/loaixe', router);
}