const CTPhieuNhap = require("../../models/CTPhieuNhap.model");
const PhieuNhap = require("../../models/PhieuNhap.model");
const SanPham = require("../../models/SanPham.model");

// Cập nhật số lượng, giá tiền sản phẩm trong hóa đơn
exports.update = (req, res) => {

    if (!req.body) {
        res.redirect('/admin/phieunhap/edit/' + req.params.mapn + '?status=errorSP');
    }

    console.log("soluongnhao");
    console.log(req.body.gianhap);

    console.log(typeof req.body.gianhap);


    let giaNhapNumberFL = parseFloat(req.body.gianhap.replace(/,/g, ''));

    let giaNhapNumber = parseInt(req.body.gianhap.replace(/,/g, ''));

    console.log(giaNhapNumber);
    console.log(typeof giaNhapNumber);

    console.log(giaNhapNumberFL);
    console.log(typeof giaNhapNumberFL);


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

                                    console.log("toiday");

                                    SanPham.updateSL(req.params.masp, req.body.soluongnhap, (err, data) => {
                                        if (err)
                                            res.redirect('/admin/500')
                                        else {
                                            console.log("toidaynee");
                                            res.redirect('/admin/phieunhap/editsp/' + req.params.mapn + '?status=successSP');
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

// xóa chi tiết hóa đơn
exports.delete = (req, res) => {

    CTPhieuNhap.remove(req.params.mapn, req.params.masp, (err, data) => {
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

                    var giatien = ctpn.map(item => item.giatien);

                    var tongtiensp = 0;

                    for (let i = 0; i < giatien.length; i++) {
                        tongtiensp += giatien[i];
                    }

                    PhieuNhap.updateBymapnwitdtongtien(
                        req.params.mapn,
                        tongtiensp,
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
};