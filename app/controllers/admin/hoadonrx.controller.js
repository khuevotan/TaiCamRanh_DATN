const HoaDonRX = require("../../models/HoaDonRX.model");
const Gio = require("../../models/Gio.model");
const LoaiXe = require("../../models/LoaiXe.model");

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
    const tenbv = req.query.tenbv;
    HoaDonRX.getAll(tenbv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('hoadonrx/indexdv',  {hoadonrx: data, layout: './master2'});
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



// Hiển thị chi tiết 1 đơn đặt lịch hẹn
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
                            console.log(gio);
                        }
                    });
                }
            });
        }
    });
};

// Find a single hoadonrx with a madm
exports.edit = (req, res) => {
    res.locals.status = req.query.status;

    HoaDonRX.findByMaDM(req.params.madm, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('hoadonrx/edit', { hoadonrx: data });
    });
};

// Update a hoadonrx identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/hoadonrx/edit/' + req.params.madm + '?status=error')
    }

    HoaDonRX.updateByMaDM(
        req.params.madm,
        new hoadonrx(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/hoadonrx/edit/' + req.params.madm + '?status=success');
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
        } else res.redirect('/hoadonrx?deleted=true')
    });
};

// Delete all hoadonrx from the database.
exports.deleteAll = (req, res) => {
    HoaDonRX.removeAll((err, data) => {
        if (err)
            res.redirect('/500');
        else res.redirect('/hoadonrx?deleted=true')
    });
};

