const authMiddRX = require('../middlewares/authadrx.middleware');

module.exports = app => {
    const loaixe = require("../controllers/admin/loaixe.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các loại xe
    router.get("/index",authMiddRX.loggedinadrx, loaixe.findAll);

    // Hiển thị form tạo loại xe
    router.get("/create", authMiddRX.loggedinadrx, loaixe.create);

    // Lưu loại xe mới khi nhấn nút lưu
    router.post("/", authMiddRX.loggedinadrx, loaixe.store);

    // Xem thông tin chi tiết 1 loại xe
    router.get("/details/:malx", authMiddRX.loggedinadrx, loaixe.details);

    // Chỉnh sửa 1 loại xe khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:malx", authMiddRX.loggedinadrx, loaixe.edit);

    // Lưu loại xe khi nhấn nút update
    router.put("/:malx", authMiddRX.loggedinadrx, loaixe.update);

    // Xóa một loại xe
    router.get("/delete/:malx", authMiddRX.loggedinadrx, loaixe.delete);

    app.use('/admin/loaixe', router);
}