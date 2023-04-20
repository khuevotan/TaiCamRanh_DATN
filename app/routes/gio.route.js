const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const gio = require("../controllers/admin/gio.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các danh mục
    router.get("/index",authMiddleware.loggedinad, gio.findAll);

    // Hiển thị form tạo danh mục
    router.get("/create", authMiddleware.loggedinad, gio.create);

    // Lưu danh mục mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, gio.store);

    // Xem thông tin chi tiết 1 danh mục
    router.get("/details/:magio", authMiddleware.loggedinad, gio.details);

    // Chỉnh sửa 1 danh mục khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:magio", authMiddleware.loggedinad, gio.edit);

    // Lưu danh mục khi nhấn nút update
    router.put("/:magio", authMiddleware.loggedinad, gio.update);

    // // Delete a gio with id
    router.get("/delete/:magio", authMiddleware.loggedinad, gio.delete);

    // // Delete all gio
    // router.delete("/delete", gio.deleteAll);

    app.use('/admin/gio', router);
}