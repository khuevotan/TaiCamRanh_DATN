const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const hoadon = require("../controllers/admin/hoadon.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn
    router.get("/index",authMiddBH.loggedinadbh, hoadon.findAll);

    const pdfController = require('../controllers/admin/pdfhd.controller');

    router.get('/pdf/:mahd', pdfController.print); 

    // Xem thông tin chi tiết 1 hóa đơn
    router.get("/details/:mahd", authMiddBH.loggedinadbh, hoadon.details);

    // Chỉnh sửa 1 hóa đơn khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mahd", authMiddBH.loggedinadbh, hoadon.edit);
    // Lưu hóa đơn khi nhấn nút update
    router.put("/:mahd", authMiddBH.loggedinadbh, hoadon.update);

    // // Delete a hoadon with id
    router.get("/delete/:mahd", authMiddBH.loggedinadbh, hoadon.delete);

    app.use('/admin/hoadon', router);
}