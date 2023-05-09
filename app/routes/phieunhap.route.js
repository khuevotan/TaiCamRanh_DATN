const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const phieunhap = require("../controllers/admin/phieunhap.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn
    router.get("/index",authMiddBH.loggedinadbh, phieunhap.findAll);

     // Hiển thị form tạo đơn nhập
     router.get("/create", authMiddBH.loggedinadbh, phieunhap.create);

     // Lưu phiếu nhập mới khi nhấn nút lưu
     router.post("/", authMiddBH.loggedinadbh, phieunhap.store);

    // Chỉnh sửa 1 hóa đơn khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/editsp/:mapn", authMiddBH.loggedinadbh, phieunhap.editsp);

    // Xem thông tin chi tiết 1 hóa đơn
    router.get("/details/:mapn", authMiddBH.loggedinadbh, phieunhap.details);

    // Chỉnh sửa 1 hóa đơn khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mapn", authMiddBH.loggedinadbh, phieunhap.edit);

    // Lưu hóa đơn khi nhấn nút update
    router.put("/:mapn", authMiddBH.loggedinadbh, phieunhap.update);

    // // Delete a phieunhap with id
    router.get("/delete/:mapn", authMiddBH.loggedinadbh, phieunhap.delete);

    app.use('/admin/phieunhap', router);
}