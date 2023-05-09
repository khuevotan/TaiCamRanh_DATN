
const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const cthoadon = require("../controllers/admin/cthoadon.controller");
    var router = require("express").Router();

    // Lưu ct hóa đơn khi nhấn nút update
    router.put("/:mahd/:masp", authMiddBH.loggedinadbh, cthoadon.update);

    // dele ct hóa đơn
    router.get("/delete/:mahd/:masp", authMiddBH.loggedinadbh, cthoadon.delete);

    app.use('/admin/cthoadon', router);
}