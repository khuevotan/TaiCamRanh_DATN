const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const ctphieunhap = require("../controllers/admin/ctphieunhap.controller");
    var router = require("express").Router();

    // Lưu ct hóa đơn khi nhấn nút update
    router.put("/:mapn/:masp", authMiddleware.loggedinad, ctphieunhap.update);

    router.put("/edit/:mapn/:masp", authMiddleware.loggedinad, ctphieunhap.updateEdit);

    // dele ct hóa đơn
    router.get("/delete/:mapn/:masp", authMiddleware.loggedinad, ctphieunhap.delete);

    app.use('/admin/ctphieunhap', router);
}