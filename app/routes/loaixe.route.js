const authMiddRX = require('../middlewares/authadrx.middleware');

module.exports = app => {
    const loaixe = require("../controllers/admin/loaixe.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các danh mục
    router.get("/index",authMiddRX.loggedinadrx, loaixe.findAll);

    // Hiển thị form tạo danh mục
    router.get("/create", authMiddRX.loggedinadrx, loaixe.create);

    // Lưu danh mục mới khi nhấn nút lưu
    router.post("/", authMiddRX.loggedinadrx, loaixe.store);

    // Xem thông tin chi tiết 1 danh mục
    router.get("/details/:malx", authMiddRX.loggedinadrx, loaixe.details);

    // Chỉnh sửa 1 danh mục khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:malx", authMiddRX.loggedinadrx, loaixe.edit);
    // Lưu danh mục khi nhấn nút update
    router.put("/:malx", authMiddRX.loggedinadrx, loaixe.update);

    // // Delete a loaixe with id
    router.get("/delete/:malx", authMiddRX.loggedinadrx, loaixe.delete);

    // // Delete all loaixe
    // router.delete("/delete", loaixe.deleteAll);

    app.use('/admin/loaixe', router);
}