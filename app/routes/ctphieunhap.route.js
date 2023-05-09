
const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const ctphieunhap = require("../controllers/admin/ctphieunhap.controller");
    var router = require("express").Router();

    // Lưu ct hóa đơn khi nhấn nút update
    router.put("/:mapn/:masp", authMiddBH.loggedinadbh, ctphieunhap.update);

    router.put("/edit/:mapn/:masp", authMiddBH.loggedinadbh, ctphieunhap.updateEdit);

    // dele ct hóa đơn
    router.get("/delete/:mapn/:masp", authMiddBH.loggedinadbh, ctphieunhap.delete);

    app.use('/admin/ctphieunhap', router);
}