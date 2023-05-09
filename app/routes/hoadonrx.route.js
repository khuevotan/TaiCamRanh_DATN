const authMiddRX = require('../middlewares/authadrx.middleware');

module.exports = app => {
    const hoadonrx = require("../controllers/admin/hoadonrx.controller");
    var router = require("express").Router();

    const pdfController = require('../controllers/admin/pdf.controller');

    router.get('/pdf/:mahdrx', pdfController.print); 

    // Hiển thị danh sách các hóa đơn rx
    router.get("/index",authMiddRX.loggedinadrx, hoadonrx.findAll);

    router.get('/chonngay', authMiddRX.loggedinadrx, hoadonrx.showDayForm)
        .post('/chonngay', authMiddRX.loggedinadrx, hoadonrx.chonNgay)

    router.get('/create/:ngayrua', authMiddRX.loggedinadrx, hoadonrx.showDLForm)
 
    // Nhấn nút đặt lịch
    router.post("/datlich", authMiddRX.loggedinadrx, hoadonrx.datlich);

    // Xem thông tin chi tiết 1 hóa đơn rx
    router.get("/details/:mahdrx", authMiddRX.loggedinadrx, hoadonrx.details);

    // Chỉnh sửa 1 hóa đơn rx khi nhấn nút chỉnh sửa -> hiển thị form
    router.get("/edit/:mahdrx", authMiddRX.loggedinadrx, hoadonrx.edit);

    router.post("/doingay/:mahdrx", authMiddRX.loggedinadrx, hoadonrx.editdoingay);

    // Lưu hóa đơn rx khi nhấn nút update
    router.put("/:mahdrx", authMiddRX.loggedinadrx, hoadonrx.update);

    // Delete a hoadonrx with id
    router.get("/delete/:mahdrx", authMiddRX.loggedinadrx, hoadonrx.delete);

    app.use('/admin/hoadonrx', router);
}