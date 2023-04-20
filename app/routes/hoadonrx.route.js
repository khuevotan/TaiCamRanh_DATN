const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const hoadonrx = require("../controllers/admin/hoadonrx.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn rx
    router.get("/index",authMiddleware.loggedinad, hoadonrx.findAll);

    // Hiển thị form tạo hóa đơn rx
    router.get("/create", authMiddleware.loggedinad, hoadonrx.create);

    // Lưu hóa đơn rx mới khi nhấn nút lưu
    router.post("/", authMiddleware.loggedinad, hoadonrx.store);

    // Xem thông tin chi tiết 1 hóa đơn rx
    router.get("/details/:mahdrx", authMiddleware.loggedinad, hoadonrx.details);

    // Chỉnh sửa 1 hóa đơn rx khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mahdrx", authMiddleware.loggedinad, hoadonrx.edit);

    // Lưu hóa đơn rx khi nhấn nút update
    router.put("/:mahdrx", authMiddleware.loggedinad, hoadonrx.update);

    // Delete a hoadonrx with id
    router.get("/delete/:mahdrx", authMiddleware.loggedinad, hoadonrx.delete);

    app.use('/admin/hoadonrx', router);
}