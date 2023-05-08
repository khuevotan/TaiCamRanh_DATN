const KhachHang = require("../../models/khachhang.model");
const Khachhang = require("../../models/khachhang.model");
const HoaDonRX = require("../../models/hoadonrx.model");
const HoaDon = require("../../models/hoadon.model");
const CTHoaDon = require("../../models/cthoadon.model");
const LoaiXe = require("../../models/loaixe.model");
const ThamSo = require("../../models/thamso.model");
const Gio = require("../../models/gio.model");
const Tinh = require("../../models/tinh.model");
const Huyen = require("../../models/huyen.model");



const mailer = require('../../utils/mailer');
require('dotenv/config');

const bcrypt = require('bcrypt');

// ======================== ADMIN =================================
// Hiện thị form tạo mới khách hàng
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('khachhang/createkh', {
        layout: './master2'
    });
}

// Create and Save a new khachhang
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/admin/khachhang/create?status=error')
    }
    const {
        taikhoan,
        matkhau,
        matkhauxn,
        tenkh,
        hokh,
        sodt,
        diachi,
        email,
        ngaysinh,
        gioitinh,
    } = req.body;

    KhachHang.findByTaikhoanvaEmail(taikhoan, email, (err, khachhang) => {
        if (err || khachhang) {

            const conflictError = 'Tên tài khoản hoặc email này đã tồn tại';
            res.render('khachhang/createkh', {
                taikhoan,
                matkhau,
                matkhauxn,
                tenkh,
                hokh,
                sodt,
                diachi,
                email,
                ngaysinh,
                gioitinh,
                conflictError,
                layout: './master2'
            });
        } else {
            if (matkhau == matkhauxn) {
                if (matkhau.match(/[a-z]/) && matkhau.match(/[A-Z]/) && matkhau.match(/\d/) && matkhau.match(/[^a-zA-Z\d]/)) {
                    bcrypt.hash(matkhau, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {


                        const khachhang = new KhachHang({
                            taikhoan: taikhoan,
                            matkhau: hashed,
                            email: email,
                            hokh: hokh,
                            tenkh: tenkh,
                            gioitinh: gioitinh,
                            diachi: diachi,
                            hinhdd: '',
                            kichhoat: 1,
                            ngaytaotk: new Date(),
                            sodt: sodt,
                            ngaysinh: ngaysinh,
                        });

                        KhachHang.create(khachhang, (err, khachhang) => {
                            if (!err) {
                                bcrypt.hash(khachhang.email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
                                    console.log(`${process.env.APP_URL}/verify?email=${khachhang.email}&token=${hashedEmail}`);
                                    mailer.sendMail(khachhang.email, "Verify Email", `<a href="${process.env.APP_URL}/admin/khachhang/verify?email=${khachhang.email}&token=${hashedEmail}"> Verify </a>`)
                                });

                                res.redirect('/admin/khachhang/create?status=success')
                            }
                        })
                    });
                } else {
                    const conflictError = 'Mật khẩu phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                    res.render('khachhang/createkh', {
                        hokh,
                        tenkh,
                        matkhauxn,
                        gioitinh,
                        diachi,
                        sodt,
                        ngaysinh,
                        taikhoan,
                        matkhau,
                        email,
                        conflictError,
                        layout: './master2'
                    });
                }
            } else {
                const conflictError = 'Bạn phải xác nhận mật khẩu đúng!';
                res.render('khachhang/createkh', {
                    taikhoan,
                    matkhau,
                    matkhauxn,
                    tenkh,
                    hokh,
                    sodt,
                    diachi,
                    email,

                    ngaysinh,
                    gioitinh,

                    conflictError,

                    layout: './master2'
                });
            }
        }
    })
};

// Xác thực tài khoản của khách hàng.
exports.verify = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        if (result == true) {
            KhachHang.verify(req.query.email, (err, result) => {
                if (!err) {
                    res.redirect('/login');
                } else {
                    res.redirect('/500');
                }
            });
        } else {
            res.redirect('/404');
        }
    })
}

// Hiển thị khách hàng bên phía admin
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;

    Khachhang.getAll((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('khachhang/indexkh', {
                khachhang: data,
                layout: './master3'
            });
        }
    });
};

// Xem chi tiết thông tin một khách hàng bên phía admin
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('khachhang/detailskh', {
            khachhang: data,
            layout: './master2'
        });
    });
};

exports.formthaypasss = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('khachhang/changepass', {
            khachhang: data,
            layout: './master2'
        });
    });
};

// Chỉnh sửa thông tin một khách hàng bên phía admin
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('khachhang/editkh', {
            khachhang: data,
            layout: './master2'
        });
    });
};

// Xóa một khách hàng bên phía admin
exports.delete = (req, res) => {
    Khachhang.remove(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/khachhang?deleted=true')
    });
};

// Update mật khẩu bến phía admin
exports.adupdatemk = (req, res) => {
    res.locals.status = req.query.status;
    const {
        taikhoan,
        matkhaumoi,
        matkhaumoixn,
        matkhaucu
    } = req.body;

    if (req.body.matkhaumoi == req.body.matkhaumoixn) {
        Khachhang.findByMakh(req.params.makh, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                Khachhang.findByTaikhoan(taikhoan, (err, khachhang) => {
                    bcrypt.compare(matkhaucu, khachhang.matkhau, (err, result) => {
                        console.log(result);
                        if (result == true) {
                            if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                                bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                                    Khachhang.resetPasswordKH(taikhoan, hashedMatkhau, (err, result) => {
                                        if (!err) {
                                            res.redirect('/admin/khachhang/changepass/' + req.params.makh + '?status=success');

                                        } else {
                                            res.redirect("/500");
                                        }
                                    })
                                })
                            } else {
                                const conflictError = 'Mật khẩu mới phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                                res.render('khachhang/changepass', {
                                    khachhang: data,
                                    conflictError,
                                    layout: './master2'
                                });

                            }

                        } else {

                            // const conflictError = 'Mật khẩu phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                            const conflictError = 'Sai Password Cũ!';
                            res.render('khachhang/changepass', {
                                khachhang: data,
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

        Khachhang.findByMakh(req.params.makh, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                const conflictError = 'Mật khẩu mới và xác nhận mật khẩu chưa khớp!';
                res.render('khachhang/changepass', {
                    khachhang: data,
                    conflictError,
                    layout: './master2'
                });


            }
        });

    }
};

// Update thông tin khách hàng bến phía admin
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/khachhang/edit/' + req.params.makh + '?status=error')
    }

    const khachhang = new KhachHang({
        taikhoan: req.body.taikhoan,
        email: req.body.email,
        hokh: req.body.hokh,
        tenkh: req.body.tenkh,
        diachi: req.body.diachi,
        kichhoat: req.body.kichhoat,
        sodt: req.body.sodt,
        ngaysinh: req.body.ngaysinh,
    });

    Khachhang.findByEmail(req.body.email, (err, khachhangne) => {
        if (err || khachhangne) {
            const conflictError = 'Email này đã tồn tại';

            Khachhang.findByMakh(req.params.makh, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/404');
                    } else {
                        res.redirect('/500');
                    }
                } else res.render('chinhsuatt', {
                    conflictError,
                    khachhang: data
                });
            });

        } else {

            KhachHang.updateBymakhphiadmin(
                req.params.makh,
                khachhang,
                (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/404');
                        } else {
                            res.redirect('/500');
                        }
                    } else res.redirect('/admin/khachhang/edit/' + req.params.makh + '?status=success');
                }
            );
        }
    });


};

// ================================= KHÁCH HÀNG =================================
// Trang cá nhân của khách hàng.
exports.trangCaNhan = (req, res) => {
    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    Khachhang.findByMakh(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('home', {
                khachhang: data
            });
        }
    });
};

// Edit bên phía khách hàng
exports.editkh = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('chinhsuatt', {
            khachhang: data
        });
    });
};

// Hiên thị form đổi  mail
exports.editMail = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('doimail', {
            khachhang: data
        });
    });
};

// Hiển thị form đổi mật khẩu
exports.doimk = (req, res) => {
    res.locals.status = req.query.status;

    Khachhang.findByMakh(req.params.makh, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('doimatkhau', {
            khachhang: data
        });
    });
};

// Update a khachhang khi nhấn vào chỉnh sửa thông tin cá nhân bên phía khách hàng
exports.updateKH = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/chinhsuatt/' + req.params.makh + '?status=error')
    }

    const khachhang = new KhachHang({
        hokh: req.body.hokh,
        tenkh: req.body.tenkh,
        diachi: req.body.diachi,
        sodt: req.body.sodt,
        ngaysinh: req.body.ngaysinh,
        gioitinh: req.body.gioitinh,
    });

    KhachHang.updateBymakh(
        req.params.makh,
        khachhang,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/khachhang/home?status=editsuccess');
        }
    );

};


// Update Email khi nhấn vào thay đổi email bên phía khách hàng.
exports.updateEmail = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/doimail/' + req.params.makh + '?status=error')
    }

    const khachhang = new KhachHang({
        email: req.body.email,
    });

    Khachhang.findByEmail(req.body.email, (err, khachhangne) => {
        if (err || khachhangne) {
            const conflictError = 'Email này đã tồn tại';

            Khachhang.findByMakh(req.params.makh, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.redirect('/404');
                    } else {
                        res.redirect('/500');
                    }
                } else res.render('doimail', {
                    conflictError,
                    khachhang: data
                });
            });

        } else {

            KhachHang.updateMail(
                req.params.makh,
                khachhang,
                (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/404');
                        } else {
                            res.redirect('/500');
                        }
                    } else res.redirect('/khachhang/home?status=successdoimail');
                }
            );
        }
    });


};

// Update mật khẩu khi nhấn vào chỉnh sửa thông tin cá nhân bên phía khách hàng
exports.updatemk = (req, res) => {

    res.locals.status = req.query.status;
    const taikhoan = res.locals.khachhang.taikhoan;

    const {
        matkhaumoi,
        matkhaucu,
        matkhaumoixn
    } = req.body;


    if (req.body.matkhaumoi == req.body.matkhaumoixn) {
        KhachHang.findByMakh(req.params.makh, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                KhachHang.findByTaikhoan(taikhoan, (err, khachhang) => {
                    bcrypt.compare(matkhaucu, khachhang.matkhau, (err, result) => {
                        console.log(result);
                        if (result == true) {
                            if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                                bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                                    KhachHang.resetPasswordKH(taikhoan, hashedMatkhau, (err, result) => {
                                        if (!err) {
                                            res.redirect('/khachhang/home?status=doimksuccess');
                                        } else {
                                            res.redirect("/500");
                                        }
                                    })
                                })
                            } else {
                                const conflictError = 'Mật khẩu mới phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                                res.render('doimatkhau.ejs', {
                                    khachhang: data,
                                    conflictError,

                                });
                            }

                        } else {

                            const conflictError = 'Sai Password Cũ!';
                            res.render('doimatkhau.ejs', {
                                khachhang: data,
                                conflictError,

                            });
                        }
                    })
                })
            }
        });

    } else {

        res.locals.status = req.query.status;

        KhachHang.findByMakh(req.params.makh, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                const conflictError = 'Mật khẩu mới và xác nhận mật khẩu chưa khớp!';
                res.render('doimatkhau.ejs', {
                    khachhang: data,
                    conflictError,
                });
            }
        });
    }
};

// Update thanh toán khi đặt lịch xong
exports.thanhToan = (req, res, next) => {
    const mahdrxhai = req.body.mahdrx

    HoaDonRX.updateThanhToan(mahdrxhai, (err, result) => {
        console.log("thanhcong!");
        next();
    });
}

// Update thanh toán khi đặt hàng xong
exports.thanhToanDH = (req, res, next) => {
    const mahdhai = req.body.mahd

    HoaDon.updateThanhToan(mahdhai, (err, result) => {
        console.log("thanhcong!");
        next();
    });
}

// Upload fle ảnh bê hía khách hàng
exports.uploadFile = (req, res) => {
    const file = req.file

    if (!file) {
        const error = new Error('Vui Lòng Up Ảnh')
        error.httpStatusCode = 400
        return next(error);
    }

    // lấy tên hình đại diện
    var hinhdd = req.params.hinhdd;


    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    if (hinhdd != '') {
        const fs = require('fs');
        const fileNameCu = hinhdd;
        const filePath = '/images/avatarkh/' + fileNameCu;

        fs.unlink("app/public" + filePath, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }

    Khachhang.updateBymakhAva(makh, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/khachhang/chinhsuatt/' + makh + '?status=successhdd');
        } else {
            res.redirect('/khachhang/chinhsuatt/' + makh + '?status=errorhdd')
        }
    });
}

// update ảnh bên phía amdin
exports.updateHddAD = (req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error('Vui Lòng Up Ảnh')
        error.httpStatusCode = 400
        return next(error);
    }

    if (req.body.hinhdd != '') {
        const fs = require('fs');
        const fileNameCu = req.body.hinhdd;
        const filePath = '/images/avatarkh/' + fileNameCu;

        fs.unlink("app/public" + filePath, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }

    Khachhang.updateBymakhAva(req.params.makh, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/khachhang/edit/' + req.params.makh + '?status=successhdd');
        } else {
            res.redirect('/admin/khachhang/edit/' + req.params.makh + '?status=errorhdd')
        }
    });
}


// Nhấn nút xác thực tài khoản nếu chưa xác thực.
exports.xacthuctaikhoan = (req, res) => {

    var emailkh = req.params.email;

    bcrypt.hash(emailkh, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
        console.log(`${process.env.APP_URL}/verify?email=${emailkh}&token=${hashedEmail}`);
        mailer.sendMail(emailkh, "Verify Email", `<a href="${process.env.APP_URL}/verify?email=${emailkh}&token=${hashedEmail}"> Verify </a>`)
    });

    res.redirect('/khachhang/home?status=daguimailxacthuc');
}



// ====================== ĐẶT LỊCH RỬA XE =========================

// Hiển thị form để người dùng chọn ngày
exports.showDayForm = (req, res) => {
    res.render('chonngay');
}

// chọn ngày rửa xe
exports.chonNgay = (req, res) => {
    res.locals.status = req.query.status;

    const {
        ngayrua
    } = req.body;

    const currentDate = new Date();
    const chonDate = new Date(ngayrua);

    // Chuyển đổi đối tượng Date thành chuỗi ngày tháng năm
    const dateString1 = chonDate.toDateString();
    const dateString2 = currentDate.toDateString();

    // So sánh chuỗi ngày tháng năm
    if (dateString1 === dateString2) {
        res.redirect('/khachhang/datlichrx/' + ngayrua)
    } else {
        if (chonDate > currentDate) {
            res.redirect('/khachhang/datlichrx/' + ngayrua)
        } else {
            const conflictError = 'Không được chọn ngày quá khứ!';
            res.render('chonngay', {
                conflictError
            });
        }
    }
};

// Hiển thị ra màn hình đặt lịch bên phía khách hàng
exports.showDLForm = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const ngayrua = req.params.ngayrua;

    LoaiXe.getAll((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            ThamSo.findBymats(1, (err, MAX_ĐL) => {
                if (err)
                    res.redirect('/500')
                else {
                    Gio.getAllKH(ngayrua, MAX_ĐL.giatri, (err, gio) => {
                        if (err)
                            res.redirect('/500')
                        else {

                            var giaTriDau = data[0].gia;

                            res.render('datlichrx', {
                                loaixe: data,
                                giaTriDau: giaTriDau,
                                gio: gio,
                                ngayrua,
                                layout: './master'
                            });
                        }
                    });

                }
            });
        }
    });
};

// Nhấn nút đặt lịch
exports.datlich = (req, res) => {
    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    const email = res.locals.khachhang.email;

    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/datlichrx?status=error')
    }

    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");

    const hoadonrx = new HoaDonRX({
        mahdrx: id,
        tennguoirua: req.body.tennguoirua,
        ngayrua: req.body.ngayrua,
        magio: req.body.magio,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        tongtienrx: req.body.tongtienrx,
        thanhtoan: 1,
        ptthanhtoan: req.body.ptthanhtoan,
        malx: req.body.malx,
        matt: 1,
        manv: 1,
        makh: makh,
    });

    // Kiểm tra xem MAX đặt lịch hôm nay.
    ThamSo.findBymats(2, (err, MAX_KH_ĐL) => {
        if (err) {
            res.redirect('/500');
        } else {

            HoaDonRX.checkToDay(makh, (err, somaxcheck) => {
                if (err) {
                    res.redirect('/500');
                } else {

                    var biencheck = somaxcheck[0].CheckToDay;
                    var bienInData = MAX_KH_ĐL.giatri;

                    console.log("innnnnnnnnnnnnnnn");
                    console.log(biencheck);
                    console.log(bienInData);

                    if (biencheck < bienInData) {

                        HoaDonRX.create(hoadonrx, (err, data) => {

                            if (!err) {
                                const mahdrx = data.mahdrx;
                                if (req.body.ptthanhtoan == 1) {

                                    var to = email;
                                    var subject = "Đặt lịch hẹn thành công!";
                                    var message = 'Chúng tôi xin gửi thông báo đặt lịch thành công cho bạn. Thời gian của cuộc hẹn. \n Ngày rửa: ' + req.body.ngayrua + '\n Giờ rửa: ' + req.body.magio + ' \n Loại xe: ' + req.body.malx + ' \n Tổng tiền: ' + req.body.tongtienrx + 'VNĐ\n \n Tên người rửa:' + req.body.tennguoirua + ' \n Số điện thoại: ' + req.body.sodt + ' \n \nXin lưu ý rằng nếu bạn có bất kỳ thay đổi hoặc hủy bỏ cuộc hẹn, vui lòng thông báo cho chúng tôi trước ít nhất 24 giờ để chúng tôi có thể sắp xếp lại lịch cho những khách hàng khác. \nChúc bạn một ngày tốt lành! \nTrân trọng, \nTài Cam Ranh \n0377975929 \n77 Chế Lan Viên, Cam Lộc, Cam Ranh ';

                                    mailer.sendMail(to, subject, message);

                                    res.redirect('/khachhang/thanhtoantc?mahdrx=' + mahdrx + '&status=taothanhcong')
                                } else {


                                    var to = email;
                                    var subject = "Đặt lịch hẹn thành công!";
                                    var message = 'Chúng tôi xin gửi thông báo đặt lịch thành công cho bạn. Thời gian của cuộc hẹn. \n Ngày rửa: ' + req.body.ngayrua + '\n Giờ rửa: ' + req.body.magio + ' \n Loại xe: ' + req.body.malx + ' \n Tổng tiền: ' + req.body.tongtienrx + 'VNĐ\n \n Tên người rửa:' + req.body.tennguoirua + ' \n Số điện thoại: ' + req.body.sodt + ' \n \nXin lưu ý rằng nếu bạn có bất kỳ thay đổi hoặc hủy bỏ cuộc hẹn, vui lòng thông báo cho chúng tôi trước ít nhất 24 giờ để chúng tôi có thể sắp xếp lại lịch cho những khách hàng khác. \nChúc bạn một ngày tốt lành! \nTrân trọng, \nTài Cam Ranh \n0377975929 \n77 Chế Lan Viên, Cam Lộc, Cam Ranh ';

                                    mailer.sendMail(to, subject, message);
                                    
                                    res.redirect('/khachhang/ttcard/' + mahdrx)
                                }
                            } else {
                                res.redirect('/khachhang/datlichrx/' + req.body.ngayrua + '&status=thatbai')

                            }
                        });

                    } else {
                        res.redirect('/khachhang/datlichrx/' + req.body.ngayrua + '&status=gioihan')
                    }
                }
            });
        }
    });
};


// ====================== ĐẶT HÀNG =========================

const Cart = require("../../models/cart.model");

// nhấn nút đặt đơn hàng
exports.nhapThongTinDonHang = (req, res) => {
    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const email = res.locals.khachhang.email;

    res.locals.cart = req.session.cart;

    const tongtiensp = res.locals.cart.totalPrice;
    const tongsosp = Object.keys(res.locals.cart.items).length;

    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");

    const {
        tennguoinhan,
        sodt,
        diachi,
        ptthanhtoan,
        ghichu,
    } = req.body;

    if (tennguoinhan && sodt && diachi && ptthanhtoan) {


        // Lấy thời gian hiện tại
        var currentDate = new Date();

        // Cộng thêm 3 ngày
        var futureDate = new Date(currentDate.getTime() + (3 * 24 * 60 * 60 * 1000));

        // Create a hoadon
        const hoadon = new HoaDon({
            mahd: id,
            ngaygiao: futureDate,
            tennguoinhan: req.body.tennguoinhan,
            sodt: req.body.sodt,
            diachi: req.body.diachi,
            ghichu: req.body.ghichu,
            tongtiensp: tongtiensp,
            thanhtoan: 1,
            ptthanhtoan: ptthanhtoan,
            matt: 1,
            manv: 1,
            makh: makh,
        });



        // Kiểm tra xem MAX đặt lịch hôm nay.
        ThamSo.findBymats(3, (err, MAX_KH_ĐH) => {
            if (err) {
                res.redirect('/500');
            } else {

                HoaDon.checkToDay(makh, (err, somaxcheck) => {
                    if (err) {
                        res.redirect('/500');
                    } else {

                        var biencheck = somaxcheck[0].CheckToDay;
                        var bienInData = MAX_KH_ĐH.giatri;

                        console.log("innnnnnnnnnnnnnnn");
                        console.log(biencheck);
                        console.log(bienInData);

                        if (biencheck < bienInData) {


                            HoaDon.create(hoadon, (err, data) => {

                                if (!err) {
                                    const mahd = data.mahd;
                                    var cart = new Cart(req.session.cart);
                                    var cartArr = cart.getItems();

                                    for (let i = 0; i < cartArr.length; i++) {
                                        var masp = cartArr[i].item.masp;
                                        var soluong = cartArr[i].quantity;
                                        var giatien = cartArr[i].price;

                                        const cthoadon = new CTHoaDon({
                                            mahd: mahd,
                                            masp: masp,
                                            soluong: soluong,
                                            giatien: giatien,
                                        });

                                        CTHoaDon.create(cthoadon, (err, data) => {
                                            if (!err) {

                                            } else {
                                                console.log(err);
                                            }
                                        });
                                    }


                                    if (req.body.ptthanhtoan == 1) {

                                        var to = email;
                                        var subject = "Đặt hàng thành công!";
                                        var message = 'Chúng tôi xin gửi';


                                        mailer.sendMail(to, subject, message);

                                        res.redirect('/khachhang/thanhtoantc?mahd' + mahd + 'status=dhtctaich')
                                    } else {

                                        var to = email;
                                        var subject = "Đặt hàng thành công!";
                                        var message = 'Chúng tôi xin gửi';


                                        mailer.sendMail(to, subject, message);

                                        res.redirect('/khachhang/ttcarddh/' + mahd)
                                    }

                                } else {
                                    res.redirect('/khachhang/chonttdh?status=thatbai')
                                }
                            });

                        } else {
                            res.redirect('/dathang&status=gioihan')
                        }
                    }
                });
            }
        });

    } else {
        const conflictError = 'Bạn phải nhập đầy đủ thông tin!';
        res.render('thongtintt', {
            tennguoinhan,
            sodt,
            diachi,
            ghichu,
            ptthanhtoan,
            conflictError
        });
    }
}

// Hiển thị form thêm thông tin thanh toán
exports.showFormTTDH = (req, res) => {

    res.locals.deleted = req.query.deleted;

     Tinh.getAll((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Huyen.getAll((err, dataHuyen) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('thongtintt', {
                        tinh: data,
                        huyen: dataHuyen,
                    
                     });
                }
            });
        }
    });

   
};