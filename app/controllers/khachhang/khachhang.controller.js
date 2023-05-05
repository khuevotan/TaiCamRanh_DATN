const KhachHang = require("../../models/khachhang.model");
const Khachhang = require("../../models/khachhang.model");
const HoaDonRX = require("../../models/hoadonrx.model");
const HoaDon = require("../../models/hoadon.model");
const CTHoaDon = require("../../models/cthoadon.model");
const LoaiXe = require("../../models/loaixe.model");
const ThamSo = require("../../models/thamso.model");
const Gio = require("../../models/gio.model");


const mailer = require('../../utils/mailer');
require('dotenv/config');

const bcrypt = require('bcrypt');

// ======================== ADMIN =================================
// Hiện thị form tạo mới khách hàng
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('khachhang/createkh',  {layout: './master2'});
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
                    if(matkhau == matkhauxn){
                        if(matkhau.match(/[a-z]/) && matkhau.match(/[A-Z]/) && matkhau.match(/\d/) && matkhau.match(/[^a-zA-Z\d]/) ){
                            bcrypt.hash(matkhau, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashed) => {
                                // Create a nhanvien
        
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
                        }else{
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
                    }else{
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
        } else res.render('khachhang/detailskh', { khachhang: data,  layout: './master2'});
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
        } else res.render('khachhang/changepass', { khachhang: data,  layout: './master2'});
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

    if(req.body.matkhaumoi == req.body.matkhaumoixn){
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
                                            res.redirect('/admin/khachhang/changepass/'+ req.params.makh + '?status=success');  
            
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

    }else{

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
                } else   res.render('chinhsuatt', {
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

// Update mật khẩu khi nhấn vào chỉnh sửa thông tin cá nhân bên phía khách hàng
exports.updatemk = (req, res) => {
    
    const {
        taikhoan,
        matkhaumoi,
        matkhaucu
    } = req.body;


    Khachhang.findByTaikhoan(taikhoan, (err, khachhang) => {
        bcrypt.compare(matkhaucu, khachhang.matkhau, (err, result) => {
            console.log(result);
            if (result == true) {
                if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                    bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                        Khachhang.resetPasswordKH(taikhoan, hashedMatkhau, (err, result) => {
                            if (!err) {
                                res.redirect('/khachhang/home/?status=doimkthanhcong');

                            } else {
                                res.redirect("/500");
                            }
                        })
                    })
                } else {
                    res.redirect('/khachhang/home/?status=doimatkhauthatbai');
                }

            } else {
                const conflictError = 'Sai Password!';
                res.render('auth/login', {
                    taikhoan,
                    matkhaucu,
                    conflictError
                });
            }
        })
    })
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

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

   if(req.body.hinhdd != ''){
        const fs = require('fs');
        const fileNameCu = req.body.hinhdd;
        const filePath = '/images/avatarkh/' + fileNameCu; 
        
        fs.unlink("app/public"+ filePath,function(err){
            if(err) throw err;
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

   if(req.body.hinhdd != ''){
        const fs = require('fs');
        const fileNameCu = req.body.hinhdd;
        const filePath = '/images/avatarkh/' + fileNameCu; 
        
        fs.unlink("app/public"+ filePath,function(err){
            if(err) throw err;
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
        if (chonDate > currentDate){
            res.redirect('/khachhang/datlichrx/' + ngayrua)
        }else{
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

    // Validate Request
    if (!req.body) {
        res.redirect('/khachhang/datlichrx?status=error')
    }

    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");

    // Create a khachhang
    const hoadonrx = new HoaDonRX({
        mahdrx: id,
        tennguoidat: req.body.tennguoidat,
        ngaydat: new Date(),
        ngayrua: req.body.ngayrua,
        magio: req.body.magio,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        tongtienrx: req.body.tongtienrx,
        thanhtoan: 1,
        malx: req.body.malx,
        matt: 1,
        manv: 0,
        makh: makh,
    });

    // Save khachhang in the database
    HoaDonRX.create(hoadonrx, (err, data) => {
        console.log(err);
        if (!err) {
            const mahdrx = data.mahdrx;
            res.redirect('/khachhang/chonttrx?mahdrx=' + mahdrx + '&status=taothanhcong')
        } else {
            res.redirect('/khachhang/chonttrx?status=thatbai')
        }
    });
};


// ====================== ĐẶT HÀNG =========================

const Cart = require("../../models/cart.model");

// nhấn nút đặt đơn hàng
exports.nhapThongTinDonHang = (req, res) => {
    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;

    res.locals.cart = req.session.cart;

    const tongtiensp = res.locals.cart.totalPrice;
    const tongsosp = Object.keys(res.locals.cart.items).length;

    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");

    const {
        tennguoinhan,
        sodt,
        diachi,
        ghichu,
    } = req.body;

    if (tennguoinhan && sodt && diachi && ghichu) {

        // Create a hoadon
        const hoadon = new HoaDon({
            mahd : id,
            ngaygiao: new Date(),
            tennguoinhan: req.body.tennguoinhan,
            sodt: req.body.sodt,
            diachi: req.body.diachi,
            ghichu: req.body.ghichu,
            tongtiensp: tongtiensp,
            thanhtoan: 1,
            matt: 1,
            manv: 1,
            makh: makh,
        });

         // Save hoadon in the database
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
                            mahd : mahd,
                            masp: masp,
                            soluong: soluong,
                            giatien: giatien,
                        });
    
                        CTHoaDon.create(cthoadon, (err, data) => {
                            if (!err) {
                               
                            }else{
                                console.log(err);
                            }
                        });
                    }

                res.redirect('/khachhang/chonttdh?mahd=' + mahd + '&status=taothanhcong')
            } else {
                res.redirect('/khachhang/chonttdh?status=thatbai')
            }
        });
    } else {
        const conflictError = 'Bạn phải nhập đầy đủ thông tin!';
        res.render('thongtintt', {
            tennguoinhan,
            sodt,
            diachi,
            ghichu,
            conflictError
        });
    }
}

// Hiển thị form thêm thông tin thanh toán
exports.showFormTTDH = (req, res) => {
    res.render('thongtintt');
};

