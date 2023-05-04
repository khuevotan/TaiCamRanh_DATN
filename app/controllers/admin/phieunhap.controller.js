const PhieuNhap = require("../../models/PhieuNhap.model");
const CTPhieuNhap = require("../../models/CTPhieuNhap.model");
const TrangThai = require("../../models/TrangThai.model");
const SanPham = require("../../models/SanPham.model");
const NhaCungCap = require("../../models/NhaCungCap.model");

//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị form tạo mới sản phẩm.
exports.create = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    SanPham.getAll(tensp, (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else { 
            NhaCungCap.getAll((err, ncc) => {
                if (err)
                    res.redirect('/admin/500')
                else { 
                    TrangThai.getAll((err, tt) => {
                        if (err)
                            res.redirect('/admin/500')
                        else { 
                            res.render('phieunhap/createpn', { nhacungcap: ncc, sanpham: data, trangthai: tt, layout: './master5'});
                        }
                    });
                }
            });
        }
    });
}

// Lưu sản phẩm mới khi nhấn nút.
exports.store = (req, res) => {
    // Validate request
    if (!req.body) {
        res.redirect('/sanpham/create?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");
    
    const phieunhap = new PhieuNhap({
        mapn : id,
        ghichu: req.body.ghichu,
        thanhtoan: req.body.thanhtoan,
        tongtiennhap: 0,
        mancc: req.body.mancc,
        matt: req.body.matt,
        manv: manv,
    });

    PhieuNhap.create(phieunhap, (err, data) => {
   
        if (!err){
            const tensp = req.query.tensp;
            const mapn = data.mapn;

            var arrMaSP = req.body.lsmasp;
       
            for (let i = 0; i < arrMaSP.length; i++) {
                
                var masp = arrMaSP[i];

                const ctphieunhap = new CTPhieuNhap({
                    mapn : mapn,
                    masp: masp,
                    soluongnhap: 0,
                    gianhap: 0,
                });

                CTPhieuNhap.create(ctphieunhap, (err, data) => {
                    if (!err) {
                     
                    }else{
                        console.log(err);
                    }
                  
                });
            }

            PhieuNhap.findBymapn(mapn,(err, data) => {

                // console.log("ljieeeeee");
                res.render('phieunhap/canhbao', {
                    phieunhap: data,
                    layout: './master2'
                });    
              
                // res.redirect('/admin/phieunhap/editsp/' + req.params.mapn + '?status=success'); 

                // console.log("lưdihwqndwk");
            });
     
           
        }else {
            res.redirect('/admin/phieunhap/create?status=error')
        }
    });
};

// Hiển thị danh sách phiếu nhập.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;

    PhieuNhap.getAllAD((err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    NhaCungCap.getAll((err, nhacungcap) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            res.render('phieunhap/indexpn', {
                                nhacungcap: nhacungcap,
                                phieunhap: data,
                                trangthai: trangthai,
                                layout: './master3'
                            });
                        }
                    });
                }
            });
        }
    });
};

// Chỉnh sửa phiếu nhập
exports.edit = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    PhieuNhap.findBymapn(req.params.mapn, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {

            TrangThai.getAll((err, trangthai) => {
                if (err)
                    res.redirect('/admin/500')
                else {

                    CTPhieuNhap.findBymapn(req.params.mapn, (err, ctpn) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/admin/500')
                                else {

                                    NhaCungCap.getAll((err, nhacungcap) => {
                                        if (err)
                                            res.redirect('/admin/500')
                                        else {
                                            res.render('phieunhap/editpn', {
                                                ctpn: ctpn,
                                                phieunhap: data,
                                                trangthai: trangthai,
                                                nhacungcap: nhacungcap,
                                                sanpham: sanpham,
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
        }
    });
};

// Thêm số lượng thông tin của phiếu nhập.
exports.editsp = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    PhieuNhap.findBymapn(req.params.mapn, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
                 CTPhieuNhap.findBymapn(req.params.mapn, (err, ctpn) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/admin/500')
                                else {

                                    res.render('phieunhap/inputsl.ejs', {
                                        ctpn: ctpn,
                                        sanpham: sanpham,
                                      
                                        layout: './master2'
                                    });   

                                                
                                }
                            });
                        }
                    });

        }
    });
};

// Cập nhật phiếu nhập khi nhấn nút Update.
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=error')
    }

    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;

     // Create a phieunhap
     const phieunhap = new PhieuNhap({
        tennguoinhan: req.body.tennguoinhan,
        ngaygiao: req.body.ngaygiao,
        sodt: req.body.sodt,
        diachi: req.body.diachi,
        ghichu: req.body.ghichu,
        thanhtoan: req.body.thanhtoan,
        matt: req.body.matt,
        mancc: req.body.mancc,
        manv: manv,
    });

    PhieuNhap.updateBymapn(
        req.params.mapn,
        phieunhap,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/admin/404');
                } else {
                    res.redirect('/admin/500');
                }
            } else res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=success');
        }
    );
};

// Xóa thông tin phiếu nhập đặt hàng.
exports.delete = (req, res) => {

    CTPhieuNhap.removeHD(req.params.mapn, (err, data) => {if (err) {
        if (err.kind === "not_found") {
            res.redirect('/404');
        } else {
            res.redirect('/500');
        }
    } else {
            PhieuNhap.remove(req.params.mapn, (err, data) => {
                res.redirect('/admin/phieunhap/index?deleted=true')
        });
    }
    });
};

// Xem chi tiết một đơn đặt hàng.
exports.details = (req, res) => {
    res.locals.status = req.query.status;
    const tensp = req.query.tensp;
    PhieuNhap.findBymapn(req.params.mapn, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/admin/404');
            } else {
                res.redirect('/admin/500');
            }
        } else {
            TrangThai.findBymatt(data.matt, (err, trangthai) => {
                if (err)
                    res.redirect('/admin/500')
                else {
                    CTPhieuNhap.findBymapn(req.params.mapn, (err, cthd) => {
                        if (err)
                            res.redirect('/admin/500')
                        else {
                            SanPham.getAll(tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/admin/500')
                                else {

                                   
                                    NhaCungCap.findBymancc(data.mancc,(err, nhacungcap) => {
                                        if (err)
                                            res.redirect('/admin/500')
                                        else {
                                            res.render('phieunhap/detailspn', {
                                                phieunhap: data,
                                                trangthai: trangthai,
                                                nhacungcap: nhacungcap,
                                                cthd: cthd,
                                                sanpham: sanpham,
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
        }
    });
};

