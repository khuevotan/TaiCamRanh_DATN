const authMiddBH = require('../middlewares/authadbh.middleware');

module.exports = app => {
    const nhaCungCap = require("../controllers/admin/nhacungcap.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các nhà cung cấp
    router.get("/index",authMiddBH.loggedinadbh, nhaCungCap.findAll);

    // Hiển thị form tạo nhà cung cấp
    router.get("/create", authMiddBH.loggedinadbh, nhaCungCap.create);

    // Lưu nhà cung cấp mới khi nhấn nút lưu
    router.post("/", authMiddBH.loggedinadbh, nhaCungCap.store);

    // Xem thông tin chi tiết 1 nhà cung cấp
    router.get("/details/:mancc", authMiddBH.loggedinadbh, nhaCungCap.details);

    // Chỉnh sửa 1 nhà cung cấp khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mancc", authMiddBH.loggedinadbh, nhaCungCap.edit);
    
    // Lưu nhà cung cấp khi nhấn nút update
    router.put("/:mancc", authMiddBH.loggedinadbh, nhaCungCap.update);

    // // Delete a nhaCungCap with id
    router.get("/delete/:mancc", authMiddBH.loggedinadbh, nhaCungCap.delete);

    app.use('/admin/nhacungcap', router);
}