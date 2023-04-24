const authMiddleware = require('../middlewares/authad.middleware');
const controllerlx = require('../controllers/admin/loaixe.controller');

module.exports = app => {
    const hoadonrx = require("../controllers/admin/hoadonrx.controller");
    var router = require("express").Router();

    // Hiển thị danh sách các hóa đơn rx
    router.get("/index",authMiddleware.loggedinad, hoadonrx.findAll);

    router.get('/chonngay', authMiddleware.loggedinad, hoadonrx.showDayForm)
        .post('/chonngay', authMiddleware.loggedinad, hoadonrx.chonNgay)

    router.get('/create/:ngayrua', authMiddleware.loggedinad, hoadonrx.showDLForm)
    router.get('/create/', authMiddleware.loggedinad, hoadonrx.showDLForm2)
        
    // Nhấn nút đặt lịch
    router.post("/datlich", authMiddleware.loggedinad, hoadonrx.datlich);


    // Hiển thị form tạo hóa đơn rx
    // router.get("/create", authMiddleware.loggedinad, hoadonrx.create);

    // Lưu hóa đơn rx mới khi nhấn nút lưu
    // router.post("/", authMiddleware.loggedinad, hoadonrx.store);

    // Xem thông tin chi tiết 1 hóa đơn rx
    router.get("/details/:mahdrx", authMiddleware.loggedinad, hoadonrx.details);

    // Chỉnh sửa 1 hóa đơn rx khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mahdrx", authMiddleware.loggedinad, hoadonrx.edit);

    // Lưu hóa đơn rx khi nhấn nút update
    router.put("/:mahdrx", authMiddleware.loggedinad, hoadonrx.update);

    // Delete a hoadonrx with id
    router.get("/delete/:mahdrx", authMiddleware.loggedinad, hoadonrx.delete);

    app.use('/admin/hoadonrx', router);
}