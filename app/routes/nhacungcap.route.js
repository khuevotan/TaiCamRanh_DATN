const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const nhaCungCap = require("../controllers/admin/nhacungcap.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các nhà cung cấp
    router.get("/index",authMiddleware.loggedinad, nhaCungCap.findAll);

    // Hiển thị form tạo nhà cung cấp
    router.get("/create", authMiddleware.loggedinad, nhaCungCap.create);

    // Lưu nhà cung cấp mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, nhaCungCap.store);

    // Xem thông tin chi tiết 1 nhà cung cấp
    router.get("/details/:mancc", authMiddleware.loggedinad, nhaCungCap.details);

    // Chỉnh sửa 1 nhà cung cấp khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mancc", authMiddleware.loggedinad, nhaCungCap.edit);
    
    // Lưu nhà cung cấp khi nhấn nút update
    router.put("/:mancc", authMiddleware.loggedinad, nhaCungCap.update);

    // // Delete a nhaCungCap with id
    router.get("/delete/:mancc", authMiddleware.loggedinad, nhaCungCap.delete);

    app.use('/admin/nhacungcap', router);
}