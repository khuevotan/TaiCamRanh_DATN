const authMiddleware = require('../middlewares/auth.middleware');
const controllerlx = require('../controllers/admin/loaixe.controller');
const khachhang = require("../controllers/khachhang/khachhang.controller");
const hoadonrx = require("../controllers/admin/hoadonrx.controller");

// thanh toán bằng Stripe
const Publishable_Key = 'pk_test_51MqHEXDWd2W6upWFp32vuRnPei7IjHDNJMJ0rQ8vBc6L4AetU7RqtYP6zXizThorGPFP5d08e76hAcAfWRcUMXPZ00xCXY4HTv'
const Secret_Key = 'sk_test_51MqHEXDWd2W6upWF1VZ7dn4skGPysk27NeODNhPsXlPgoyMbjqoFEl4hICGaAv1WexgSrFcRTo7vGS3S6hHZF1Py00jhzifGQJ'
const stripe = require('stripe')(Secret_Key)

const bodyparser = require('body-parser')



module.exports = app => {
    var router = require('express').Router();

    //thanh toán bằng 
    app.use(bodyparser.urlencoded({
        extended: false
    }))
    app.use(bodyparser.json())

    router.get('/khachhang/home', authMiddleware.loggedin, khachhang.trangCaNhan);

    router.get("/khachhang/chinhsuatt/:makh", authMiddleware.loggedin, khachhang.editkh);

    router.put("/khachhang/:makh", authMiddleware.loggedin, khachhang.update);

    router.get("/khachhang/doimatkhau/:makh", authMiddleware.loggedin, khachhang.doimk)

    router.put("/doimatkhau/:makh", authMiddleware.loggedin, khachhang.updatemk);

    router.get("/khachhang/chinhsuatt/:makh", authMiddleware.loggedin, khachhang.editkh);


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

    router.post('/uploadfile', upload.single('myFile'), khachhang.uploadFile)
    router.post('/uploadmultiple', upload.array('myFiles'), khachhang.uploadMultiple)

    // Đặt Lịch Rửa Xe
    router.get('/khachhang/chonngay', authMiddleware.loggedin, khachhang.showDayForm)
    .post('/khachhang/chonngay',  authMiddleware.loggedin, khachhang.chonNgay)

    router.get('/khachhang/datlichrx/:ngayrua', authMiddleware.loggedin, controllerlx.findAllKH, (req, res) => {
        res.render('datlichrx');
    });

    // nhấn nút đặt lịch
    router.post("/datlich/:makh", authMiddleware.loggedin, khachhang.datlich);

    // chọn phương thức thanh toán
    router.get('/khachhang/chonttrx/:mahdrx', authMiddleware.loggedin, (req, res) => {
        res.render('chonttrx');
    });

    // hiển thị lịch sử đặt lịch
    router.get('/khachhang/lsdatlich', authMiddleware.loggedin, hoadonrx.findAllKHLS)

    // hiển thị đơn đặt lịch bên phía khách hàng
    router.get('/khachhang/dondatlich', authMiddleware.loggedin, hoadonrx.findAllKH)

    // hiển thị chi tiết 1 đơn đặt lịch
    router.get('/khachhang/ctdatlich/:mahdrx', authMiddleware.loggedin, hoadonrx.chitietdatlich)

    // Đặt hàng
    router.get('/khachhang/dondathang', authMiddleware.loggedin, (req, res) => {
        res.render('dondathang');
    });

    router.get('/khachhang/ctdathang', authMiddleware.loggedin, (req, res) => {
        res.render('ctdathang');
    });

    router.get('/khachhang/lsdathang', authMiddleware.loggedin, (req, res) => {
        res.render('lsdathang');
    });

    router.get('/khachhang/giohang', authMiddleware.loggedin, (req, res) => {
        res.render('giohang', {
            layout: false
        });
    });

    router.get('/khachhang/thongtintt', authMiddleware.loggedin, (req, res) => {
        res.render('thongtintt');
    });

    //Thanh toán bằng Stripe
    router.get('/khachhang/ttcard', authMiddleware.loggedin, (req, res) => {
        res.render('ttcard', {
            key: Publishable_Key
        })
    });

    app.post('/khachhang/payment', function (req, res) {

        // Moreover you can take more details from user
        // like Address, Name, etc from form
        stripe.customers.create({
                email: req.body.stripeEmail,
                source: req.body.stripeToken,
                name: 'Gautam Sharma',
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
                    amount: 7000, // Charing Rs 25
                    description: 'Web Development Product',
                    currency: 'USD',
                    customer: customer.id
                });
            })
            .then((charge) => {
                res.send("Success") // If no error occurs
            })
            .catch((err) => {
                res.send(err) // If some error occurs
            });
    })

    // Thanh Toán Thành Công
    router.get('/khachhang/thanhtoantc', authMiddleware.loggedin, (req, res) => {
        res.render('thanhtoantc');
    });

    app.use(router);
}