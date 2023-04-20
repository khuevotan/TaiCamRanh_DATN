const HoaDonRX = require("../../models/HoaDonRX.model");
const Gio = require("../../models/Gio.model");
const LoaiXe = require("../../models/LoaiXe.model");
const TrangThai = require("../../models/TrangThai.model");

// Show form create hoadonrx
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    res.render('hoadonrx/create');
}

// Create and Save a new hoadonrx
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/hoadonrx/create?status=error')
    }
    
    // Create a hoadonrx
    const hoadonrx = new HoaDonRX({
        tenbv: req.body.tenbv,
        thoigian: req.body.thoigian,
        motact: req.body.motact,
        giatien: req.body.giatien
    });
    // Save hoadonrx in the database
    HoaDonRX.create(hoadonrx, (err, data) => {
        if (err)
            res.redirect('/hoadonrx/create?status=error')
        else res.redirect('/hoadonrx/create?status=success')
    });
};

// Retrieve all hoadonrx from the database (with condition).
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
    const tengio = req.query.tengio;
    const tenlx = req.query.tenlx;
    const tentt = req.query.tentt;

    HoaDonRX.getAllAD((err, data) => {
        if (err)
            res.redirect('/500')
        else {
            LoaiXe.getAll( tenlx,(err, loaixe) => {
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
                                    res.render('hoadonrx/indexhdr',  {hoadonrx: data,loaixe: loaixe, gio: gio, 
                                        trangthai: trangthai, layout: './master3'});
                                }
                           
                            });

                        }
                   
                    });

                }
           
            });
        }
    });
};

// Find a single hoadonrx with a mahdrx
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
            
            LoaiXe.getAll( tenlx,(err, loaixe) => {
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
                                    res.render('hoadonrx/edithdr',  {hoadonrx: data,loaixe: loaixe, gio: gio, 
                                        trangthai: trangthai, layout: './master2'});
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

// Update a hoadonrx identified by the id in the request
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
// Delete a hoadonrx with the specified id in the request
exports.delete = (req, res) => {
    HoaDonRX.remove(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.redirect('/admin/hoadonrx?deleted=true')
    });
};

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
            
            LoaiXe.findBymalx( data.malx,(err, loaixe) => {
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
                                    res.render('hoadonrx/detailshdr',  {hoadonrx: data,loaixe: loaixe, gio: gio, 
                                        trangthai: trangthai, layout: './master2'});
                                }
                           
                            });

                        }
                   
                    });

                }
           
            });
         
    
        }
    });
};

// Hiển thị hóa đơn đặt lịch bên phía khach hàng
exports.findAllKH = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tengio = req.query.tengio;
    HoaDonRX.getAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll(tengio,(err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('dondatlich',  {hoadonrx: data, gio: gio, layout: './master'});
                    console.log(gio);
             
                }
            });
        }
    });

    
};

// Hiển thị hóa đơn lịch sử đặt lịch bên phía khách hàng
exports.findAllKHLS = (req, res) => {
    res.locals.deleted = req.query.deleted;

    res.locals.khachhang = req.session.khachhang
    const makh = res.locals.khachhang.makh;
    const tengio = req.query.tengio;
    HoaDonRX.getLSAll(makh, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            Gio.getAll(tengio,(err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    res.render('lsdatlich',  {hoadonrx: data, gio: gio, layout: './master'});
                    console.log(gio);
                }
            });
        }
    });
};

// Hiển thị chi tiết 1 đơn đặt lịch hẹn bên phía khách hàng
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
            Gio.getAll(tengio,(err, gio) => {
                if (err)
                    res.redirect('/500')
                else {
                    LoaiXe.getAll(tenlx,(err, tenlx) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            res.render('ctdatlich', { hoadonrx: data, gio : gio, tenlx: tenlx , layout: './master'});
                        }
                    });
                }
            });
        }
    });
};
