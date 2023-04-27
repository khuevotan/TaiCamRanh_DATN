const HoaDonRX = require("../../models/HoaDonRX.model");
const Gio = require("../../models/Gio.model");
const LoaiXe = require("../../models/LoaiXe.model");
const TrangThai = require("../../models/TrangThai.model");
const ThamSo = require("../../models/ThamSo.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form đặt lịch hẹn.
exports.showDayForm = (req, res) => {
    res.render('hoadonrx/chonngayhdr', {
        layout: './master2'
    });
}

// Chọn ngày rửa xe
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
        res.redirect('/admin/hoadonrx/create/' + ngayrua)
    } else {
        if (chonDate > currentDate) {
            res.redirect('/admin/hoadonrx/create/' + ngayrua)
        } else {
            const conflictError = 'Không được chọn ngày quá khứ!';
            res.render('hoadonrx/chonngayhdr', {
                conflictError,
                layout: './master2'
            });
        }
    }
};

// Hiển thị ra màn hình đặt lịch bên phía admin
exports.showDLForm = (req, res) => {
   
    res.locals.status = req.query.status;
    const tenlx = req.query.tenlx;
    const ngayrua = req.params.ngayrua;

    LoaiXe.getAll(tenlx, (err, data) => {
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
                            res.render('hoadonrx/datlichrxad', {
                                loaixe: data,
                                gio: gio,
                                ngayrua,
                                layout: './master2'
                            });
                        }
                    });
                }
            });
        }
    });
};

// Show form create hoadonrx
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('hoadonrx/create');
}

// Nhấn đặt lịch
exports.datlich = (req, res) => {
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    // Validate Request
    if (!req.body) {
        res.redirect('/admin/hoadonrx/create/' + ngayrua + '?status=error')
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
        manv: manv,
        makh: 0,
    });

    // Save khachhang in the database
    HoaDonRX.create(hoadonrx, (err, data) => {

        const ngayrua = req.body.ngayrua;

        if (err)
            res.redirect('/admin/hoadonrx/create/' + ngayrua + '?status=error')
        else res.redirect('/admin/hoadonrx/create/' + ngayrua + '?status=success')

    });
};

// Hiển thị danh sách hóa đơn đặt lịch
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tengio = req.query.tengio;
    const tenlx = req.query.tenlx;
    const tentt = req.query.tentt;

    HoaDonRX.getAllAD((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            LoaiXe.getAll(tenlx, (err, loaixe) => {
                if (err)
                    res.redirect('/500')
                else {

                    Gio.getAll(tengio, (err, gio) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            TrangThai.getAll(tentt, (err, trangthai) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                                    res.render('hoadonrx/indexhdr', {
                                        hoadonrx: data,
                                        loaixe: loaixe,
                                        gio: gio,
                                        trangthai: trangthai,
                                        layout: './master3'
                                    });
                                }

                            });

                        }

                    });

                }

            });
        }
    });
};

// Chỉnh sửa thông tin một hóa đơn đặt lịch.
exports.edit = (req, res) => {
    res.locals.status = req.query.status;
    const tengio = req.query.tengio;
    const tenlx = req.query.tenlx;
    const tentt = req.query.tentt;

    HoaDonRX.findBymahdrx(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            LoaiXe.getAll(tenlx, (err, loaixe) => {
                if (err)
                    res.redirect('/500')
                else {

                    Gio.getAll(tengio, (err, gio) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            TrangThai.getAll(tentt, (err, trangthai) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                                    res.render('hoadonrx/edithdr', {
                                        hoadonrx: data,
                                        loaixe: loaixe,
                                        gio: gio,
                                        trangthai: trangthai,
                                        layout: './master2'
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

// Cập nhật thông tin một hóa đơn đặt lịch.
exports.update = (req, res) => {
    
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/hoadonrx/edit/' + req.params.mahdrx + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    // Create a hoadonrx
    const hoadonrx = new HoaDonRX({
        tennguoidat: req.body.tennguoidat,
        ngaydat: req.body.ngaydat,
        ngayrua: req.body.ngayrua,
        magio: req.body.magio,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        tongtienrx: req.body.tongtienrx,
        thanhtoan: req.body.thanhtoan,
        malx: req.body.malx,
        matt: req.body.matt,
        manv: manv,
        makh: req.body.makh,
    });

    HoaDonRX.updateBymahdrx(
        req.params.mahdrx,
        hoadonrx,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/hoadonrx/edit/' + req.params.mahdrx + '?status=success');
        }
    );
};

// Xóa lịch.
exports.delete = (req, res) => {
    HoaDonRX.remove(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/hoadonrx/index?deleted=true')
    });
};

// Xem chi tiết một đơn đặt lịch.
exports.details = (req, res) => {
    res.locals.status = req.query.status;

    HoaDonRX.findBymahdrx(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            LoaiXe.findBymalx(data.malx, (err, loaixe) => {
                if (err)
                    res.redirect('/500')
                else {

                    Gio.findBymagio(data.magio, (err, gio) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            TrangThai.findBymatt(data.matt, (err, trangthai) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                                    res.render('hoadonrx/detailshdr', {
                                        hoadonrx: data,
                                        loaixe: loaixe,
                                        gio: gio,
                                        trangthai: trangthai,
                                        layout: './master2'
                                    });
                                }

                            });

                        }

                    });

                }

            });


        }
    });
};

//======================= GIAO DIEN KHACH HANG ======================= 

// Hiển thị hóa đơn đặt lịch bên phía khach hàng.
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tengio = req.query.tengio;
    HoaDonRX.getAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll(tengio, (err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('dondatlich', {
                        hoadonrx: data,
                        gio: gio,
                        layout: './master'
                    });
                    console.log(gio);

                }
            });
        }
    });


};

// Hiển thị hóa đơn lịch sử đặt lịch bên phía khách hàng.
exports.findAllKHLS = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tengio = req.query.tengio;
    HoaDonRX.getLSAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll(tengio, (err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('lsdatlich', {
                        hoadonrx: data,
                        gio: gio,
                        layout: './master'
                    });
                    console.log(gio);
                }
            });
        }
    });
};

// Hiển thị chi tiết 1 đơn đặt lịch hẹn bên phía khách hàng.
exports.chitietdatlich = (req, res) => {
    res.locals.status = req.query.status;
    const tengio = req.query.tendm;
    const tenlx = req.query.tenlx;
    HoaDonRX.findBymahdrx(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {
            Gio.getAll(tengio, (err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    LoaiXe.getAll(tenlx, (err, tenlx) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('ctdatlich', {
                                hoadonrx: data,
                                gio: gio,
                                tenlx: tenlx,
                                layout: './master'
                            });
                        }
                    });
                }
            });
        }
    });
};