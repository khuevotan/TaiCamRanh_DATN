const NhanVien = require("../../models/NhanVien.model");
const Nhom = require("../../models/Nhom.model");
const HoaDon = require("../../models/HoaDon.model");
const HoaDonRX = require("../../models/HoaDonRX.model");
const mailer = require('../../utils/mailer');
const moment = require('moment');
const bcrypt = require('bcrypt');
require('dotenv/config');

// Trang cá nhân của nhân viên.
exports.trangCaNhan = (req, res) => {
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    NhanVien.findByMaNV(manv, (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            Nhom.findByNhom(data.manhom, (err, datanhom) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    res.render('trangcanhan', {
                        nhanvien: data,
                        nhom: datanhom.tennhom,
                        layout: './master2'
                    });
                }
            });
        }
    });
}

// Trang hướng dẫn nhân viên.
exports.huongDanSD = (req, res) => {
    res.render('huongdansd.ejs', {
        layout: './master2'
    });
}

// Hiển thị trang chỉnh sửa thông tin cá nhân bên phía cá nhân của nhân viên.
exports.chinhSuaTT = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('chinhsuattnv', {
            nhanvien: data,
            layout: './master2'
        });
    });
};

// Nhấn nút cập nhật (chỉnh sửa thông tin).
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/chinhsuatt/' + req.params.manv + '?status=error')
    }

    const nhanvien = new NhanVien({
        honv: req.body.honv,
        tennv: req.body.tennv,
        ngaysinh: req.body.ngaysinh,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        gioitinh: req.body.gioitinh,
    });

    NhanVien.updateByMaNV(
        req.params.manv,
        nhanvien,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/trangcanhan/?status=updatetc');
        }
    );
};

// Hiển thị form đổi mật khẩu bên phía cá nhân của nhân viên.
exports.formdoimktt = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('changpassnvtt', {
            nhanvien: data,
            layout: './master2'
        });
    });
};

// Hiển thị form đổi mail bên phía cá nhân của nhân viên.
exports.formDoiMailTT = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else res.render('changmailnvtt', {
            nhanvien: data,
            layout: './master2'
        });
    });
};

// Update mật khẩu khi nhấn vào nút thay đổi cá nhân bên phía nhân viên.
exports.changePassword = (req, res) => {

    res.locals.status = req.query.status;
    const taikhoan = res.locals.nhanvien.taikhoan;

    const {
        matkhaumoi,
        matkhaumoixn,
        matkhaucu
    } = req.body;

    if (req.body.matkhaumoi == req.body.matkhaumoixn) {
        NhanVien.findByMaNV(req.params.manv, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                NhanVien.findByTaikhoan(taikhoan, (err, nhanvien) => {
                    bcrypt.compare(matkhaucu, nhanvien.matkhau, (err, result) => {
                        console.log(result);
                        if (result == true) {
                            if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                                bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                                    NhanVien.resetPasswordNV(taikhoan, hashedMatkhau, (err, result) => {
                                        if (!err) {
                                            res.redirect('/admin/trangcanhan?status=doimksuccess');
                                        } else {
                                            res.redirect("/admin/500");
                                        }
                                    })
                                })
                            } else {
                                const conflictError = 'Mật khẩu mới phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                                res.render('changpassnvtt.ejs', {
                                    nhanvien: data,
                                    conflictError,
                                    layout: './master2'
                                });
                            }

                        } else {

                            const conflictError = 'Sai Password Cũ!';
                            res.render('changpassnvtt.ejs', {
                                nhanvien: data,
                                conflictError,
                                layout: './master2'
                            });
                        }
                    })
                })
            }
        });

    } else {

        res.locals.status = req.query.status;

        NhanVien.findByMaNV(req.params.manv, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else {

                const conflictError = 'Mật khẩu mới và xác nhận mật khẩu chưa khớp!';
                res.render('changpassnvtt.ejs', {
                    nhanvien: data,
                    conflictError,
                    layout: './master2'
                });
            }
        });
    }
};

// Update mật khẩu khi nhấn vào nút thay đổi cá nhân bên phía nhân viên.
exports.changeEmailTT = (req, res) => {

    res.locals.status = req.query.status;

    NhanVien.findByEmail(req.body.emailmoi, (err, nhanvienne) => {
        if (nhanvienne) {

            const conflictError = 'Email này đã tồn tại';

            NhanVien.findByMaNV(req.params.manv, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/admin/404');
                    } else {
                        res.redirect('/admin/500');
                    }
                } else res.render('changmailnvtt', {
                    conflictError,
                    nhanvien: data,
                    layout: './master2'
                });
            });

        } else {

            NhanVien.updateMail(
                req.params.manv,
                req.body.emailmoi,
                (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/admin/404');
                        } else {
                            res.redirect('/admin/500');
                        }
                    } else res.redirect('/admin/trangcanhan?status=successdoimail');
                }
            );
        }
    });

};

// Upload fle ảnh
exports.uploadFile = (req, res) => {
    const file = req.file
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    NhanVien.findByMaNV(manv, (err, data) => {
        var hinhdd = data.hinhdd;

        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
        }

        if (hinhdd != '') {

            const fs = require('fs');
            const fileNameCu = hinhdd;
            const filePath = '/images/avatarad/' + fileNameCu;

            fs.unlink("app/public" + filePath, function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });
        }

        NhanVien.updateAvaByMaNV(manv, file.filename, (err, result) => {
            if (!err) {
                res.redirect('/admin/trangcanhan');
            } else {
                res.redirect('/admin/500');
            }
        });
    });
}

// Nhấn nút xác thực tài khoản nếu chưa xác thực.
exports.xacthuctaikhoan = (req, res) => {

    var emailnv = req.params.email;

    bcrypt.hash(emailnv, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
        console.log(`${process.env.APP_URL}/verify?email=${emailnv}&token=${hashedEmail}`);
        mailer.sendMail(emailnv, "Verify Email", `<a href="${process.env.APP_URL}/admin/nhanvien/verify?email=${emailnv}&token=${hashedEmail}"> Verify </a>`)
    });

    res.redirect('/admin/trangcanhan?status=daguimailxacthuc');
}

// Hiển thị form để gửi mail.
exports.soanMail = (req, res) => {
    res.render('soanmail.ejs', {
        layout: './master2'
    });
}

// Nhấn nút gửi mail.
exports.guiMail = (req, res) => {

    // Validate request
    if (!req.body) {
        res.redirect('/admin/soanmail?status=error')
    }

    var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;

    mailer.sendMail(to, subject, message);

    res.redirect('/admin/soanmail?status=success');
}

// =========================== THỐNG KÊ  ===========================
// Thống kê ở trang Tổng Quan.
exports.getIndex = (req, res) => {

    // Thống kê bên hóa đơn đặt hàng.
    HoaDon.thongKeDG((err, data1, data2, dataago, data3, datatrago, ngay6, ngay5, ngay4, ngay3, ngay2, ngay1, ngay0) => {

        // Danh thu ngày 7
        const doanhThuN6 = ngay6[0]['TongTienN6'];
        const doanhThuN5 = ngay5[0]['TongTienN5'];
        const doanhThuN4 = ngay4[0]['TongTienN4'];
        const doanhThuN3 = ngay3[0]['TongTienN3'];
        const doanhThuN2 = ngay2[0]['TongTienN2'];
        const doanhThuN1 = ngay1[0]['TongTienN1'];

        // Doanh thu hôm nay
        const doanhThuN0 = ngay0[0]['TongTienN0'];

        // Sô lượng đơn 
        const soLuongDHN6 = ngay6[0]['sldh'];
        const soLuongDHN5 = ngay5[0]['sldh'];
        const soLuongDHN4 = ngay4[0]['sldh'];
        const soLuongDHN3 = ngay3[0]['sldh'];
        const soLuongDHN2 = ngay2[0]['sldh'];
        const soLuongDHN1 = ngay1[0]['sldh'];
        const soLuongDHN0 = ngay0[0]['sldh'];

        // Số lượng hóa đơn chưa được duyệt.
        const soLuongBanHangChuaDuyet = data1[0]['COUNT(*)'];

        // Doanh thu hóa đơn đặt hàng ngày hôm nay.
        const doanhThuBanHangHomNay = data2[0]['TongTienHDHN'];

        // Doanh thu hóa đơn đặt hàng ngày hôm qua.
        const doanhThuBanHangHomQua = dataago[0]['TongTienHDHQ'];

        // Doanh thu hóa đơn đặt hàng tháng này.
        const doanhThuBanHangThangNay = data3[0]['TongTienHDTN'];

        // Doanh thu hóa đơn đặt hàng tháng trước.
        const doanhThuBanHangThangTruoc = datatrago[0]['TongTienHDTT'];

        // Thống kê bên hóa đơn rửa xe.
        HoaDonRX.thongKeDG((err, hdrxcd, dtrxn, dtrxnago, dtrxt, dtrxtago, ngayrx6, ngayrx5, ngayrx4, ngayrx3, ngayrx2, ngayrx1, ngayrx0) => {

            const doanhThuRXN6 = ngayrx6[0]['TongTienRXN6'];
            const doanhThuRXN5 = ngayrx5[0]['TongTienRXN5'];
            const doanhThuRXN4 = ngayrx4[0]['TongTienRXN4'];
            const doanhThuRXN3 = ngayrx3[0]['TongTienRXN3'];
            const doanhThuRXN2 = ngayrx2[0]['TongTienRXN2'];
            const doanhThuRXN1 = ngayrx1[0]['TongTienRXN1'];
            const doanhThuRXN0 = ngayrx0[0]['TongTienRXN0'];

            const soLuongRXN6 = ngayrx6[0]['sldrx'];
            const soLuongRXN5 = ngayrx5[0]['sldrx'];
            const soLuongRXN4 = ngayrx4[0]['sldrx'];
            const soLuongRXN3 = ngayrx3[0]['sldrx'];
            const soLuongRXN2 = ngayrx2[0]['sldrx'];
            const soLuongRXN1 = ngayrx1[0]['sldrx'];
            const soLuongRXN0 = ngayrx0[0]['sldrx'];

            // Số lượng hóa đơn rửa xe chưa được duyệt.
            const soLuongRXChuaDuyet = hdrxcd[0]['COUNT(*)'];

            // Doanh thu hóa đơn rửa xe ngày hôm nay.
            const doanhThuRuaXeHomNay = dtrxn[0]['TongTienRXHN'];

            // Doanh thu hóa đơn rửa xe ngày hôm qua.
            const doanhThuRuaXeHomQua = dtrxnago[0]['TongTienRXHQ'];

            // Doanh thu hóa đơn rửa xe tháng này.
            const doanhThuRuaXeThangNay = dtrxt[0]['TongTienRXTN'];

            // Doanh thu hóa đơn rửa xe tháng trước.
            const doanhThuRuaXeThangTruoc = dtrxtago[0]['TongTienRXTT'];

            // Tổng doanh thu
            var doanhThuHomNay = doanhThuBanHangHomNay + doanhThuRuaXeHomNay;
            var doanhThuHomQua = doanhThuRuaXeHomQua + doanhThuBanHangHomQua;
            var doanhThuThangNay = doanhThuBanHangThangNay + doanhThuRuaXeThangNay;
            var doanhThuThangTruoc = doanhThuRuaXeThangTruoc + doanhThuBanHangThangTruoc;

            // So sánh doanh thu ngày
            if (doanhThuHomNay == 0 && doanhThuHomQua == 0) {
                var tyLeDoanhThuNgay = 0;
            }

            if (doanhThuHomQua == 0) {
                var tyLeDoanhThuNgay = 100;

            } else {
                var tyLeDoanhThuNgay = ((doanhThuHomNay - doanhThuHomQua) / doanhThuHomQua * 100);
            }

            // So sánh doanh thu tháng
            if (doanhThuThangNay == 0 && doanhThuThangTruoc == 0) {
                var tyLeDoanhThuThang = 0;
            }

            if (doanhThuThangTruoc == 0) {
                var tyLeDoanhThuThang = 100;

            } else {
                var tyLeDoanhThuThang = ((doanhThuThangNay - doanhThuThangTruoc) / doanhThuThangTruoc * 100);
            }

            // Thống kê Tình Trạng Đơn Rửa Xe 7 Ngày Qua. (4 trạng thái)
            HoaDonRX.thongkeTT((err, tt1, tt2, tt3, tt4) => {
                    var tt1 = tt1[0]['SoLuongRXTT1'];
                    var tt2 = tt2[0]['SoLuongRXTT2'];
                    var tt3 = tt3[0]['SoLuongRXTT3'];
                    var tt4 = tt4[0]['SoLuongRXTT4'];

                     // Thống kê Tình Trạng Đơn Hàng 7 Ngày Qua. (5 trạng thái)
                    HoaDon.thongkeTT((err, ttdh1, ttdh2, ttdh3, ttdh4, ttdh5) => {

                        var ttdh1 = ttdh1[0]['SoLuongDHTT1'];
                        var ttdh2 = ttdh2[0]['SoLuongDHTT2'];
                        var ttdh3 = ttdh3[0]['SoLuongDHTT3'];
                        var ttdh4 = ttdh4[0]['SoLuongDHTT4'];
                        var ttdh5 = ttdh5[0]['SoLuongDHTT5'];

                        res.render('trangchuad.ejs', {

                            // Số lượng hóa đơn đặt hàng chưa duyệt
                            soLuongBanHangChuaDuyet: soLuongBanHangChuaDuyet,

                            // Số lượng hóa đơn rửa xe chưa duyệt
                            soLuongRXChuaDuyet: soLuongRXChuaDuyet,

                            // Doanh Thu Ngày Hôm Nay
                            DTN: doanhThuBanHangHomNay + doanhThuRuaXeHomNay,

                            // Doanh Thu Của Tháng Này
                            DTT: doanhThuBanHangThangNay + doanhThuRuaXeThangNay,

                            // Tỷ lệ doanh thu tháng (làm tròn)  Ví dụ: Math.round(3.6) sẽ trả về 4 và Math.round(2.4) sẽ trả về 2.
                            tyLeDoanhThuThang: Math.round(tyLeDoanhThuThang),
                            //  Tỷ lệ doanh thu ngày
                            tyLeDoanhThuNgay: Math.round(tyLeDoanhThuNgay),

                            // Doanh thu đặt hàng từng ngày.
                            dhn6: doanhThuN6,
                            dhn5: doanhThuN5,
                            dhn4: doanhThuN4,
                            dhn3: doanhThuN3,
                            dhn2: doanhThuN2,
                            dhn1: doanhThuN1,
                            dhn0: doanhThuN0,

                            doanhThuDatHang7Ngay: doanhThuN6 + doanhThuN5 + doanhThuN4 + doanhThuN3 + doanhThuN2 + doanhThuN1 + doanhThuN0,

                            // Số lượng đơn đặt hàng từng ngày.
                            soLuongDHN6: soLuongDHN6,
                            soLuongDHN5: soLuongDHN5,
                            soLuongDHN4: soLuongDHN4,
                            soLuongDHN3: soLuongDHN3,
                            soLuongDHN2: soLuongDHN2,
                            soLuongDHN1: soLuongDHN1,
                            soLuongDHN0: soLuongDHN0,

                            // Doanh thu đặt lịch từng ngày.
                            dhrxn6: doanhThuRXN6,
                            dhrxn5: doanhThuRXN5,
                            dhrxn4: doanhThuRXN4,
                            dhrxn3: doanhThuRXN3,
                            dhrxn2: doanhThuRXN2,
                            dhrxn1: doanhThuRXN1,
                            dhrxn0: doanhThuRXN0,

                            doanhThuDatLich7Ngay: doanhThuRXN6 + doanhThuRXN5 + doanhThuRXN4 + doanhThuRXN3 + doanhThuRXN2 + doanhThuRXN1 + doanhThuRXN0,

                            // Số lượng đặt lịch từng ngày.
                            soLuongRXN6: soLuongRXN6,
                            soLuongRXN5: soLuongRXN5,
                            soLuongRXN4: soLuongRXN4,
                            soLuongRXN3: soLuongRXN3,
                            soLuongRXN2: soLuongRXN2,
                            soLuongRXN1: soLuongRXN1,
                            soLuongRXN0: soLuongRXN0,

                            // Tình Trạng Đơn Rửa Xe 7 Ngày Qua.
                            tt1: tt1,
                            tt2: tt2,
                            tt3: tt3,
                            tt4: tt4,

                            // Tình Trạng Đơn Hàng 7 Ngày Qua.
                            ttdh1: ttdh1,
                            ttdh2: ttdh2,
                            ttdh3: ttdh3,
                            ttdh4: ttdh4,
                            ttdh5: ttdh5,

                            layout: './master2'
                        });
                    });
            });
        });
    });
}

// thống kê doanh thu cố định
exports.doanhthuCoDinh = (req, res) => {
    var chuoidate = '';
    var chuoitienhd = '';
    var chuoitienhdrx = '';
    var codinh = 1;
    var thanhtoan = 1;
    var trangthai = 1;

    res.render('thongke/doanhthucodinh.ejs', {
        chuoidate: chuoidate,
        chuoitienhd: chuoitienhd,
        chuoitienhdrx: chuoitienhdrx,
        codinh: codinh,
        thanhtoan: thanhtoan,
        trangthai: trangthai,
        layout: './master2'
    });
}

// doanh thu 12 thang trong nam nay
exports.doanhthuCoDinhSecond = (req, res) => {

    // Doanh thu các tuần trong tháng hiện tại
    const codinh = req.body.codinh;
    const thanhtoan = req.body.thanhtoan;
    const trangthai = req.body.trangthai;

    if (codinh == 1) {
        // tuần trong tháng hiện tại
        HoaDonRX.doanhThuCDTuan(thanhtoan, trangthai, (err, dtHDRX, dtHD) => {

            // Lấy giá trị date và tongtienrx thành một mảng 2 chiều
            const manghdrx = dtHDRX.map(item => [item.week_number, item.tongtienrx]);
            const manghd = dtHD.map(item => [item.week_number, item.tongtienhd]);

            // mang 1 chieu
            console.log(manghdrx);
            console.log(manghd);

            let mang2chieu = [];

            for (let i = 0; i < manghd.length; i++) {
                const ngayhd = manghd[i][0];
                let row = [manghd[i][0], manghd[i][1], 0];
                for (let j = 0; j < manghdrx.length; j++) {
                    const ngayrx = manghdrx[j][0];
                    if (ngayhd === ngayrx) {
                        row[2] = manghdrx[j][1];
                        break;
                    }
                }
                mang2chieu.push(row);
            }

            for (let i = 0; i < manghdrx.length; i++) {
                const ngayrx = manghdrx[i][0];
                let isExists = false;
                for (let j = 0; j < mang2chieu.length; j++) {
                    const ngaym2c = mang2chieu[j][0];
                    if (ngayrx === ngaym2c) {
                        isExists = true;
                        break;
                    }
                }
                if (!isExists) {
                    mang2chieu.push([manghdrx[i][0], 0, manghdrx[i][1]]);
                }
            }

            mang2chieu.sort((a, b) => {
                return a[0] - b[0];
            });

            console.log(mang2chieu);

            // lấy giá trị phần tử thứ 3 và chuyển thành chuỗi

            // thêm chữ chuyển sang tháng
            let chuoidate = '';

            for (let i = 0; i < mang2chieu.length; i++) {
                chuoidate += 'Tuần ' + mang2chieu[i][0].toString();
                if (i < mang2chieu.length - 1) {
                    chuoidate += ', ';
                }
            }

            const chuoitienhd = mang2chieu.map(item => item[1].toString()).join(', ');
            const chuoitienhdrx = mang2chieu.map(item => item[2].toString()).join(', ');

            res.render('thongke/doanhthucodinh.ejs', {
                chuoidate: chuoidate,
                chuoitienhd: chuoitienhd,
                chuoitienhdrx: chuoitienhdrx,
                codinh: codinh,
                thanhtoan: thanhtoan,
                trangthai: trangthai,
                layout: './master2'
            });
        });
    } else {

        // Doanh thu cố định theo tháng.
        HoaDonRX.doanhThuCDT(thanhtoan, trangthai, (err, dtHDRX, dtHD) => {

            // Lấy giá trị date và tongtienrx thành một mảng 2 chiều
            const manghdrx = dtHDRX.map(item => [item.month_number, item.tongtienrx]);
            const manghd = dtHD.map(item => [item.month_number, item.tongtienhd]);

            // mang 1 chieu
            console.log(manghdrx);
            console.log(manghd);

            let mang2chieu = [];

            for (let i = 0; i < manghd.length; i++) {
                const ngayhd = manghd[i][0];
                let row = [manghd[i][0], manghd[i][1], 0];
                for (let j = 0; j < manghdrx.length; j++) {
                    const ngayrx = manghdrx[j][0];
                    if (ngayhd === ngayrx) {
                        row[2] = manghdrx[j][1];
                        break;
                    }
                }
                mang2chieu.push(row);
            }

            for (let i = 0; i < manghdrx.length; i++) {
                const ngayrx = manghdrx[i][0];
                let isExists = false;
                for (let j = 0; j < mang2chieu.length; j++) {
                    const ngaym2c = mang2chieu[j][0];
                    if (ngayrx === ngaym2c) {
                        isExists = true;
                        break;
                    }
                }
                if (!isExists) {
                    mang2chieu.push([manghdrx[i][0], 0, manghdrx[i][1]]);
                }
            }

            mang2chieu.sort((a, b) => {
                return a[0] - b[0];
            });

            console.log(mang2chieu);

            // Thêm chữ "Tháng vào mảng chuỗi date"
            let chuoidate = '';

            for (let i = 0; i < mang2chieu.length; i++) {
                chuoidate += 'Tháng ' + mang2chieu[i][0].toString();
                if (i < mang2chieu.length - 1) {
                    chuoidate += ', ';
                }
            }

            const chuoitienhd = mang2chieu.map(item => item[1].toString()).join(', ');
            const chuoitienhdrx = mang2chieu.map(item => item[2].toString()).join(', ');

            res.render('thongke/doanhthucodinh.ejs', {
                chuoidate: chuoidate,
                chuoitienhd: chuoitienhd,
                chuoitienhdrx: chuoitienhdrx,
                codinh: codinh,
                thanhtoan: thanhtoan,
                trangthai: trangthai,
                layout: './master2'
            });
        });
    }
}

// Số lượng loại xe được rửa nhiều trong tháng này.
exports.loaiXeTk = (req, res) => {
    HoaDonRX.thongkeSLXT((err, slxe, xe) => {

        var colIndex = 0;
        var colIndexne = 1;

        // lấy mảng gốc
        var slxegoc = [].concat(slxe);
        var loaixegoc = [].concat(xe);

        // tạo mảng để hứng dữ liệu
        var mangdlxe = [];
        var mangsl = [];
        var mantenxe = [];

        // tạo mảng 2 chiều với cột thứ 2 là tên xe
        for (var i = 0; i < slxegoc.length; i++) {
            for (var j = 0; j < loaixegoc.length; j++) {
                if (slxegoc[i].malx == loaixegoc[j].malx) {
                    mangdlxe.push([slxegoc[i].soluong, loaixegoc[j].tenlx]);
                }
            }
        }

        // tạo mảng 1 chiều là số lượng
        for (let i = 0; i < mangdlxe.length; i++) {
            mangsl[i] = mangdlxe[i][colIndex];
        }

        // tạo mảng 1 chiều là tên xe ứng với số lượng
        for (let i = 0; i < mangdlxe.length; i++) {
            mantenxe[i] = mangdlxe[i][colIndexne];
        }

        // chuyển đổi mảng thành chuỗi
        const chuoisl = mangsl.join(', ');
        const chuoitenxe = mantenxe.join(', ');

        res.render('thongke/loaixe.ejs', {
            cslxe: chuoisl,
            ctx: chuoitenxe,
            layout: './master2'
        });
    });
}

// Sản phẩm bán chạy trong tháng này
exports.sanPhamTK = (req, res) => {

    HoaDon.sanPhamBanChayTrongThang((err, sanpham) => {

        console.log(sanpham);

        var colIndex = 0;
        var colIndexne = 1;

        const mangspgoc = sanpham.map(item => [item.tensp, item.soluongln]);

        // Tạo mảng để hứng dữ liệu.
        var mangspln = [];
        var mangsoln = [];

        // Tạo mảng 1 chiều là số lượng.
        for (let i = 0; i < mangspgoc.length; i++) {
            mangspln[i] = mangspgoc[i][colIndex];
        }

        // Tạo mảng 1 chiều là tên xe ứng với số lượng.
        for (let i = 0; i < mangspgoc.length; i++) {
            mangsoln[i] = mangspgoc[i][colIndexne];
        }

        // Chuyển đổi mảng thành chuỗi.
        const chuoitensp = mangspln.join(', ');
        const chuoisoluongln = mangsoln.join(', ');

        res.render('thongke/sanpham.ejs', {
            chuoitensp: chuoitensp,
            chuoisoluongln: chuoisoluongln,
            layout: './master2'
        });
    });
}

// Thống kê doanh thu biểu đồ tùy chọn lúc đầu. (mặc định)
exports.thongKeBieuDo = (req, res) => {
    var chuoidate = '';
    var chuoitienhd = '';
    var chuoitienhdrx = '';
    var ngaybatdau = new Date();
    var ngayketthuc = new Date();
    var thanhtoan = 1;
    var trangthai = 1;

    var changengaybatdau = moment(ngaybatdau).format('YYYY-MM-DD');
    var changengayketthuc = moment(ngayketthuc).format('YYYY-MM-DD');

    res.render('thongke/thongkebd.ejs', {
        chuoidate: chuoidate,
        chuoitienhd: chuoitienhd,
        chuoitienhdrx: chuoitienhdrx,
        ngaybatdau: changengaybatdau,
        ngayketthuc: changengayketthuc,
        thanhtoan: thanhtoan,
        trangthai: trangthai,
        layout: './master2'
    });

}

// thống kê doanh thu biểu đồ tùy chọn lúc sau.
exports.doanhThuTuyChinh = (req, res) => {

    const ngaybatdau = req.body.ngaybatdau;
    const ngayketthuc = req.body.ngayketthuc;
    const thanhtoan = req.body.thanhtoan;
    const trangthai = req.body.trangthai;

    // Lấy cả hóa đơn rửa xe và bán hàng.
    HoaDonRX.doanhThuTC(ngaybatdau, ngayketthuc, thanhtoan, trangthai, (err, dtHDRX, dtHD) => {

        // 
        console.log("KẾT QUẢ LẤY");
        console.log(dtHDRX);
        console.log(dtHD);

        // Lấy giá trị date và tongtienrx thành một mảng 2 chiều
        const manghdrx = dtHDRX.map(item => [item.date, item.tongtienrx]);
        const manghd = dtHD.map(item => [item.date, item.tongtienhd]);

        console.log("Đổi Thành mảng 2 chiều");
        console.log(manghdrx);
        console.log(manghd);

        let mang2chieu = [];

        for (let i = 0; i < manghd.length; i++) {
            const ngayhd = new Date(manghd[i][0]);
            let row = [manghd[i][0], manghd[i][1], 0];
            for (let j = 0; j < manghdrx.length; j++) {
                const ngayrx = new Date(manghdrx[j][0]);
                if (ngayhd.getTime() === ngayrx.getTime()) {
                    row[2] = manghdrx[j][1];
                    break;
                }
            }
            mang2chieu.push(row);
        }

        console.log("======= LẦN 1======");
        console.log(mang2chieu);
   


        for (let i = 0; i < manghdrx.length; i++) {
            const ngayrx = new Date(manghdrx[i][0]);
            let isExists = false;
            for (let j = 0; j < mang2chieu.length; j++) {
                const ngaym2c = new Date(mang2chieu[j][0]);
                if (ngayrx.getTime() === ngaym2c.getTime()) {
                    isExists = true;
                    break;
                }
            }
            if (!isExists) {
                mang2chieu.push([manghdrx[i][0], 0, manghdrx[i][1]]);
            }
        }

        console.log("======= LẦN 2 ======");
        console.log(mang2chieu);

        // 
        mang2chieu.sort((a, b) => {
            return new Date(a[0]) - new Date(b[0]);
        });

        console.log("======= LẦN 3 ======");
        console.log(mang2chieu);

        // lấy giá trị phần tử thứ 3 và chuyển thành chuỗi

        const chuoidate = mang2chieu.map(item => moment(item[0]).format('DD-MM-YYYY').toString()).join(', ');
        const chuoitienhd = mang2chieu.map(item => item[1].toString()).join(', ');
        const chuoitienhdrx = mang2chieu.map(item => item[2].toString()).join(', ');

        console.log("======= 3 chuỗi ======");
        console.log(chuoidate);
        console.log(chuoitienhd);
        console.log(chuoitienhdrx);

        // Hiển thị data lần 2
        var ngaybatdau = req.body.ngaybatdau;
        var ngayketthuc = req.body.ngayketthuc;
        var thanhtoan = req.body.thanhtoan;
        var trangthai = req.body.trangthai;

        var changengaybatdau = moment(ngaybatdau).format('YYYY-MM-DD');
        var changengayketthuc = moment(ngayketthuc).format('YYYY-MM-DD');

        res.render('thongke/thongkebd.ejs', {
            chuoidate: chuoidate,
            chuoitienhd: chuoitienhd,
            chuoitienhdrx: chuoitienhdrx,
            ngaybatdau: changengaybatdau,
            ngayketthuc: changengayketthuc,
            thanhtoan: thanhtoan,
            trangthai: trangthai,
            layout: './master2'
        });
    });
}