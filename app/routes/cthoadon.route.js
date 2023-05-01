const authMiddleware = require('../middlewares/authad.middleware');

module.exports = app => {
    const cthoadon = require("../controllers/admin/cthoadon.controller");
    var router = require("express").Router();

    // Lưu ct hóa đơn khi nhấn nút update
    router.put("/:mahd/:masp", authMiddleware.loggedinad, cthoadon.update);

    // dele ct hóa đơn
    router.get("/delete/:mahd/:masp", authMiddleware.loggedinad, cthoadon.delete);

    app.use('/admin/cthoadon', router);
}