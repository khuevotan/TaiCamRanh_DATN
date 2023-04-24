const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const nhom = require("../controllers/admin/nhom.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các nhóm
    router.get("/index",authMiddleware.loggedinad, nhom.findAll);

    // Xem thông tin chi tiết 1 nhóm
    router.get("/details/:manhom", authMiddleware.loggedinad, nhom.details);

    // Chỉnh sửa 1 nhóm khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:manhom", authMiddleware.loggedinad, nhom.edit);
    
    // Lưu nhóm khi nhấn nút update
    router.put("/:manhom", authMiddleware.loggedinad, nhom.update);

    // Delete a nhom with id
    // router.get("/delete/:manhom", authMiddleware.loggedinad, nhom.delete);

    app.use('/admin/nhom', router);
}