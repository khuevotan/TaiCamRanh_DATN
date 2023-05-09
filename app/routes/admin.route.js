const authMiddleware = require('../middlewares/authad.middleware');
const authMiddQL = require('../middlewares/authadql.middleware');

const nhanVien = require('../controllers/admin/admin.controller');

module.exports = app => {
    var router = require("express").Router();

    router.get('/500', function (req, res) {
        res.render('error_500.ejs', {
            layout: false
        });
    })

    router.get('/404', function (req, res) {
        res.render('error_404.ejs', {
            layout: false
        });
    })

    // ===================  Trang Cá Nhân =================== 

    router.get('/trangcanhan', authMiddleware.loggedinad, nhanVien.trangCaNhan);

    router.get("/chinhsuatt/:manv", authMiddleware.loggedinad, nhanVien.chinhSuaTT);

    router.put("/:manv", authMiddleware.loggedinad, nhanVien.update);

    // Hiển thị form đổi mật khẩu cá nhân.
    router.get("/chinhsuatt/formdmk/:manv", authMiddleware.loggedinad, nhanVien.formdoimktt);

    // Nhấn vào nút đổi mk.
    router.put("/doimatkhau/:manv", authMiddleware.loggedinad, nhanVien.changePassword);

    // Hien thi form doi mail
    router.get("/chinhsuatt/formdoimail/:manv", authMiddleware.loggedinad, nhanVien.formDoiMailTT);

    // Nhấn vào nút đổi email.
    router.put("/doiemail/:manv", authMiddleware.loggedinad, nhanVien.changeEmailTT);

    // xác thực tài khoản
    router.get("/xacthuctaikhoan/:email", authMiddleware.loggedinad, nhanVien.xacthuctaikhoan);

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

    router.post('/uploadfile', authMiddleware.loggedinad, upload.single('myFile'), nhanVien.uploadFile)

    // =================== Ứng Dụng  =================== 

    router.get('/huongdansd', authMiddleware.loggedinad, nhanVien.huongDanSD);

    router.get('/soanmail', authMiddQL.loggedinadql, nhanVien.soanMail);

    router.post('/guimail', authMiddQL.loggedinadql, nhanVien.guiMail);

    // =================== Thống kê  =================== 
    router.get('/index', authMiddleware.loggedinad, nhanVien.getIndex);

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

    app.use('/admin', router);
}