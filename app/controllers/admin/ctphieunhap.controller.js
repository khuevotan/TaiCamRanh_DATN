const CTPhieuNhap = require("../../models/CTPhieuNhap.model");
const PhieuNhap = require("../../models/PhieuNhap.model");
const SanPham = require("../../models/SanPham.model");

// Cập nhật số lượng, giá tiền sản phẩm trong hoàn tất phiếu nhập.
exports.update = (req, res) => {

    if (!req.body) {
        res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=errorSP');
    }

    let giaNhapNumber = parseInt(req.body.gianhap.replace(/,/g, ''));

    // Tạo một ct hóa đơn
    const ctphieunhap = new CTPhieuNhap({
        soluongnhap: req.body.soluongnhap,
        gianhap: giaNhapNumber,
    });

    CTPhieuNhap.updateBymapn(
        req.params.mapn,
        req.params.masp,
        ctphieunhap,
        (err, data) => {
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

                        console.log("indanhsach");
                        console.log(ctpn);

                        var gianhap = ctpn.map(item => item.gianhap);

                        var tongtiennhap = 0;

                        for (let i = 0; i < gianhap.length; i++) {
                            tongtiennhap += gianhap[i];
                        }

                        PhieuNhap.updateBymapnwitdtongtien(
                            req.params.mapn,
                            tongtiennhap,
                            (err, data) => {
                                if (err) {
                                    if (err.kind === "not_found") {
                                        res.redirect('/admin/404');
                                    } else {
                                        res.redirect('/admin/500');
                                    }
                                } else {
                            
                                    SanPham.updateTSL(req.params.masp, req.body.soluongnhapcu, (err, data) => {
                                        if (err)
                                            res.redirect('/admin/500')
                                        else {
                                            SanPham.updateSL(req.params.masp, req.body.soluongnhap, (err, data) => {
                                                if (err)
                                                    res.redirect('/admin/500')
                                                else {
                                                    res.redirect('/admin/phieunhap/editsp/' + req.params.mapn + '?status=successSP');
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        );
                    }
                });
            }
        }
    );
};

// Cập nhật số lượng, giá tiền sản phẩm trong chỉnh sửa phiếu nhập.
exports.updateEdit = (req, res) => {

    if (!req.body) {
        res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=errorSP');
    }

    let giaNhapNumber = parseInt(req.body.gianhap.replace(/,/g, ''));

    // Tạo một ct hóa đơn
    const ctphieunhap = new CTPhieuNhap({
        soluongnhap: req.body.soluongnhap,
        gianhap: giaNhapNumber,
    });

    CTPhieuNhap.updateBymapn(
        req.params.mapn,
        req.params.masp,
        ctphieunhap,
        (err, data) => {
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

                        console.log("indanhsach");
                        console.log(ctpn);

                        var gianhap = ctpn.map(item => item.gianhap);

                        var tongtiennhap = 0;

                        for (let i = 0; i < gianhap.length; i++) {
                            tongtiennhap += gianhap[i];
                        }

                        PhieuNhap.updateBymapnwitdtongtien(
                            req.params.mapn,
                            tongtiennhap,
                            (err, data) => {
                                if (err) {
                                    if (err.kind === "not_found") {
                                        res.redirect('/admin/404');
                                    } else {
                                        res.redirect('/admin/500');
                                    }
                                } else {
                                    res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=successSP');
                                }
                            }
                        );
                    }
                });
            }
        }
    );
};

// Xóa một sản phẩm trong chi tiết phiếu nhập.
exports.delete = (req, res) => {
    CTPhieuNhap.countBymapn(req.params.mapn, (err, slcthd) => {
        if (err)
            res.redirect('/admin/500')
        else {

            var soluongcthd = slcthd[0]['COUNT(*)'];
     
            // số lượng danh sách lớn hơn > 1 thì xóa còn không thì không xóa
            if(soluongcthd >1){
                CTPhieuNhap.removeHDSP(req.params.mapn , req.params.masp, (err, data) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.redirect('/admin/404');
                        } else {
                            res.redirect('/admin/500');
                        }
                    } else {
            
                        CTPhieuNhap.findBymapn(req.params.mapn, (err, cthd) => {
                            if (err)
                                res.redirect('/admin/500')
                            else {
                              
                                var gianhap = cthd.map(item => item.gianhap);
                                var tongtiennhap = 0;
                                for (let i = 0; i < gianhap.length; i++) {
                                    tongtiennhap += gianhap[i];
                                }
        
                                PhieuNhap.updateBymapnwitdtongtien(
                                    req.params.mapn,
                                    tongtiennhap,
                                    (err, data) => {
                                        if (err) {
                                            if (err.kind === "not_found") {
                                                res.redirect('/admin/404');
                                            } else {
                                                res.redirect('/admin/500');
                                            }
                                        } else res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=successSP');
                                    }
                                );
                            }
                        });
                    }
                });
            }else{
                res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=khongxoaduoc');
            }
        }
    });
};