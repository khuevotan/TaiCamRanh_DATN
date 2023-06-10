const authMiddleware = require('../middlewares/auth.middleware');
const khachhang = require("../controllers/khachhang/khachhang.controller");
const hoadonrx = require("../controllers/admin/hoadonrx.controller");
const hoadon = require("../controllers/admin/hoadon.controller");
const Huyen = require("../models/huyen.model");

// thanh toán bằng Stripe
const Publishable_Key = 'pk_test_51MqHEXDWd2W6upWFp32vuRnPei7IjHDNJMJ0rQ8vBc6L4AetU7RqtYP6zXizThorGPFP5d08e76hAcAfWRcUMXPZ00xCXY4HTv'
const Secret_Key = 'sk_test_51MqHEXDWd2W6upWF1VZ7dn4skGPysk27NeODNhPsXlPgoyMbjqoFEl4hICGaAv1WexgSrFcRTo7vGS3S6hHZF1Py00jhzifGQJ'
const stripe = require('stripe')(Secret_Key)

const bodyparser = require('body-parser');
const HoaDon = require('../models/hoadon.model');

module.exports = app => {
    var router = require('express').Router();

    //thanh toán bằng 
    app.use(bodyparser.urlencoded({
        extended: false
    }))
    app.use(bodyparser.json())

    // ======================= THÔNG TIN KHÁCH HÀNG ======================= 
    router.get('/khachhang/home', authMiddleware.loggedin, khachhang.trangCaNhan);

    // hiển thị form chỉnh sửa bên phía khách hàng.
    router.get("/khachhang/chinhsuatt/:makh", authMiddleware.loggedin, khachhang.editkh);

    // thay đổi thông tin khách hàng bên phía khách hàng.
    router.put("/khachhang/:makh", authMiddleware.loggedin, khachhang.updateKH);

    // đổi mail
    router.get("/khachhang/doimail/:makh", authMiddleware.loggedin, khachhang.editMail);

    // thay đổi thông tin mail
    router.put("/khachhang/doimail/:makh", authMiddleware.loggedin, khachhang.updateEmail);

    // hiển thị form đổi mật khẩu.
    router.get("/khachhang/doimatkhau/:makh", authMiddleware.loggedin, khachhang.doimk)

    // nhân vào nút đổi mật khẩu.
    router.put("/doimatkhau/:makh", authMiddleware.loggedin, khachhang.updatemk);

    //file upload avatar
    const multer = require("multer");
    const fsExtra = require('fs-extra');

    // SET STORAGE
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            let path = 'app/public/images/avatarkh';
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

    router.post('/khachhang/uploadfile/', upload.single('myFile'), khachhang.uploadFile)

    // xác thực tài khoản
    router.get("/khachhang/xacthuctaikhoan/:email", authMiddleware.loggedin, khachhang.xacthuctaikhoan);

    // ======================= Đặt Lịch Rửa Xe ======================= 
    // Đặt Lịch Rửa Xe
    router.get('/khachhang/chonngay', khachhang.showDayForm)
        .post('/khachhang/chonngay', khachhang.chonNgay)

    router.get('/khachhang/datlichrx/:ngayrua', khachhang.showDLForm);

    // nhấn nút đặt lịch
    router.post("/datlich/:makh", authMiddleware.loggedin, khachhang.datlich);

    // Hiển thị lịch sử đặt lịch
    router.get('/khachhang/lsdatlich', authMiddleware.loggedin, hoadonrx.findAllKHLS)

    // Hủy đơn đặt lịch trong 30p đổ lại
    router.get('/khachhang/huydonhang/:mahdrx', authMiddleware.loggedin, hoadonrx.huyDonDL)

    // Hiển thị đơn đặt lịch.
    router.get('/khachhang/dondatlich', authMiddleware.loggedin, hoadonrx.findAllKH)

    // Hiển thị chi tiết 1 đơn đặt lịch
    router.get('/khachhang/ctdatlich/:mahdrx', authMiddleware.loggedin, hoadonrx.chitietdatlich)

    // ======================= Đặt Hàng ======================= 
    // Hiển thị đơn đặt hàng bên phía khách hàng
    router.get('/khachhang/dondathang', authMiddleware.loggedin, hoadon.findAllKH)

    // Hiển thị chi tiết 1 đơn đặt hàng
    router.get('/khachhang/ctdathang/:mahd', authMiddleware.loggedin, hoadon.chitietdathang)

    // Hiển thị lịch sử đặt hàng
    router.get('/khachhang/lsdathang', authMiddleware.loggedin, hoadon.findAllKHLS)

    // nhập thông hóa đơn đặt hàng
    router.get('/khachhang/thongtintt', authMiddleware.loggedin, khachhang.showFormTTDH);

    app.get('/getHuyen', (req, res) => {
        const selectedMatinh = req.query.matinh; // Lấy giá trị matinh từ query parameters

        // Xử lý logic để lấy danh sách huyện tương ứng với selectedMatinh

        Huyen.getALLByMT(selectedMatinh, (err, data) => {

            const huyenList = data;

            // Gửi danh sách huyện về cho client dưới dạng JSON
            res.json(huyenList);
        });
    });

    // nhấn nút đặt hàng
    router.post("/dathang", khachhang.nhapThongTinDonHang);

    // Đặt lịch thành công.
    router.get('/khachhang/thanhtoantc', authMiddleware.loggedin, (req, res) => {
        res.render('thanhtoantc');
    });

    // Đặt hàng thành công.
    router.get('/khachhang/thanhtoantcdh', authMiddleware.loggedin, (req, res) => {
        res.render('thanhtoantcdh');
    });

    // ======================= THANH TOÁN ======================= 

    // thnah toán bằng online bên đặt hàng
    router.get('/khachhang/ttcarddh/:mahd', authMiddleware.loggedin, hoadon.thanhToanThe)

    router.post('/khachhang/ttcarddh/payment/', khachhang.thanhToanDH, authMiddleware.loggedin, function (req, res) {

        const mahdhai = req.body.mahd

            stripe.customers.create({
                    email: req.body.stripeEmail,
                    source: req.body.stripeToken,
                    name: 'TaiCamRanh',
                    address: {
                        line1: 'TC 9/4 Old MES colony',
                        postal_code: '110092',
                        city: 'New Delhi',
                        state: 'Delhi',
                        country: 'India',
                    }
                })
                .then((customer) => {
                    return stripe.charges.create({
                        amount: 1000, // Charing Rs 25
                        description: 'Web Development Product',
                        currency: 'USD',
                        customer: customer.id
                    });
                })
                .then((charge) => {
                    res.redirect('/khachhang/thanhtoantcdh?mahd=' + req.body.mahd + '&status=thanhtoantc') // If no error occurs

                })
                .catch((err) => {
                    res.send(err) // If some error occurs
                });
    
    })

    //Thanh toán bằng Stripe bên đặt lịch
    router.get('/khachhang/ttcard/:mahdrx', authMiddleware.loggedin, (req, res) => {
        mahdrx = req.params.mahdrx
        res.render('ttcard', {
            key: Publishable_Key,
            mahdrx: mahdrx,
        })
    });

    router.post('/khachhang/ttcard/payment/', khachhang.thanhToan, authMiddleware.loggedin, function (req, res) {

        const mahdrxhai = req.body.mahdrx

        stripe.customers.create({
                email: req.body.stripeEmail,
                source: req.body.stripeToken,
                name: 'TaiCamRanh',
                address: {
                    line1: 'TC 9/4 Old MES colony',
                    postal_code: '110092',
                    city: 'New Delhi',
                    state: 'Delhi',
                    country: 'India',
                }
            })
            .then((customer) => {
                return stripe.charges.create({
                    amount: 8000, // Charing Rs 25
                    description: 'Web Development Product',
                    currency: 'USD',
                    customer: customer.id
                });
            })
            .then((charge) => {
                res.redirect('/khachhang/thanhtoantc?mahdrx=' + req.body.mahdrx + '&status=thanhtoantc') // If no error occurs

            })
            .catch((err) => {
                res.send(err) // If some error occurs
            });
    })

    app.use(router);
}