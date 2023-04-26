const authMiddleware = require('../middlewares/authad.middleware');
const nhanVien = require('../controllers/admin/admin.controller');

module.exports = app => {
    var router = require("express").Router();

    // router.get('/', function(req, res){
    //     res.send('hello admin');
    // })

    // router.get('/login', controller.Login);

    router.get('/index', authMiddleware.loggedinad, nhanVien.getIndex);

    router.get('/huongdansd', authMiddleware.loggedinad, nhanVien.huongDanSD);

    router.get('/soanmail', authMiddleware.loggedinad, nhanVien.soanMail);

    router.post('/guimail', authMiddleware.loggedinad, nhanVien.guiMail);

    // Thống kê doanh thu tùy chỉnh
    router.get('/nhanvien/thongke/bdtk', authMiddleware.loggedinad, nhanVien.thongKeBieuDo);

    router.post('/doanhthutuychinh', authMiddleware.loggedinad, nhanVien.doanhThuTuyChinh);


    // thống kê doanh thu cố định
    router.get('/nhanvien/thongke/dtcd', authMiddleware.loggedinad, nhanVien.doanhthuCoDinh);

    router.post('/doanhthucodinh', authMiddleware.loggedinad, nhanVien.doanhthuCoDinhSecond);


    // thống kê loại xe
    router.get('/nhanvien/thongke/loaixe', authMiddleware.loggedinad, nhanVien.loaiXeTk);

    // thống kê sản phẩm bán chạy
    router.get('/nhanvien/thongke/sanpham', authMiddleware.loggedinad, nhanVien.sanPhamTK);


    router.get('/trangcanhan', authMiddleware.loggedinad, nhanVien.trangCaNhan);

    router.get("/chinhsuatt/:manv", authMiddleware.loggedinad, nhanVien.chinhSuaTT);

    router.put("/:manv", authMiddleware.loggedinad, nhanVien.update);

    // nhấn vào nút đổi mk
    router.put("/doimatkhau/:manv", authMiddleware.loggedinad, nhanVien.changePassword);

    //file upload avatar
    const multer = require("multer");
    const fsExtra = require('fs-extra');

     // SET STORAGE
     var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            let path = 'app/public/images/avatarad';
            if (!fsExtra.existsSync(path)) {
                fsExtra.mkdirSync(path)
            }

            cb(null, path)
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    });

    //file
    var upload = multer({
        storage: storage
    })

    router.post('/uploadfile', upload.single('myFile'), nhanVien.uploadFile)

    app.use('/admin', router);
}