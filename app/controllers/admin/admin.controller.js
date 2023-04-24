const NhanVien = require("../../models/NhanVien.model");
const HoaDon = require("../../models/HoaDon.model");
const HoaDonRX = require("../../models/HoaDonRX.model");

const bcrypt = require('bcrypt');

exports.Login = (req, res) => {
    res.render('login.ejs',{layout: false});
}

exports.getIndex = (req, res) => {

    HoaDon.getAllChuaDuyet((err, data, data2) => {
        console.log("KHUE0");
        console.log(data);
        console.log(data2);


        const mot = 60;
        const hai = 0;


        res.render('trangchuad.ejs',{ 
            HoaDonNgay: mot,
            HoaDonRXNgay: hai,
            // DoanhThuNgay: doanhThuNgayHN + dtNgayRX,
            // DoanhThuThang: doanhThuThangNay + dtthangRX,
            layout: './master2'});

        // const HoaDonNgay = data[0]['COUNT(*)'];
        // console.log("KHUE1");
        // console.log(HoaDonNgay);
    });




    // HoaDonRX.getAllChuaDuyet((err, datb) => {
    //     const HoaDonRXNgay = datb[0]['COUNT(*)'];
    //     res.render('trangchuad.ejs',{ 
    //         HoaDonNgay: HoaDonNgay,
    //         HoaDonRXNgay: HoaDonRXNgay,
    //         // DoanhThuNgay: doanhThuNgayHN + dtNgayRX,
    //         // DoanhThuThang: doanhThuThangNay + dtthangRX,
    //         layout: './master2'});
    // });

  

    // HoaDon.getAllChuaDuyet((err, data) => {
    //     const HoaDonNgay = data[0]['COUNT(*)'];

    //     HoaDonRX.getAllChuaDuyet((err, datb) => {
    //         const HoaDonRXNgay = datb[0]['COUNT(*)'];

    //         HoaDon.doanhThuNgayHN((err, datc) => {
    //             const doanhThuNgayHN = datc[0]['SUM(tongtiensp)'];

    //             HoaDon.doanhThuThangNay((err, datd) => {
    //                 const doanhThuThangNay = datc[0]['SUM(tongtiensp)'];

    //                 HoaDonRX.doanhThuNgayHN((err, date) => {
    //                     const dtNgayRX = date[0]['SUM(tongtienrx)'];

    //                     HoaDonRX.doanhThuThangNay((err, datf) => {
    //                         const dtthangRX = datf[0]['SUM(tongtienrx)'];

    //                         HoaDon.dtTungNgay((err, tuongngay) => {

    //                             res.render('trangchuad.ejs',{ 
    //                                 HoaDonNgay: HoaDonNgay,
    //                                 HoaDonRXNgay: HoaDonRXNgay,
    //                                 DoanhThuNgay: doanhThuNgayHN + dtNgayRX,
    //                                 DoanhThuThang: doanhThuThangNay + dtthangRX,
    //                                 layout: './master2'});
    //                             });

    //                         });
    //                     });        
    //                 });
    //             });
    //         });
    // });

   
    // const loaixe = [
    //     RowDataPacket { malx: 1, tenlx: 'Xe Máy', gia: 40000 },
    //     RowDataPacket { malx: 2, tenlx: 'Xe Ô Tô Nhỏ', gia: 100000 },
    //     RowDataPacket { malx: 3, tenlx: 'Xe Bán Tải', gia: 60000 },
    //     RowDataPacket { malx: 4, tenlx: 'Xe Ô Tô Lớn', gia: 150000 }
    //   ]; // Input array of objects
      
    //   const sum = loaixe.reduce((acc, obj) => acc + obj.gia, 0); // Use reduce() to accumulate the sum
      
    //   console.log(sum); // Output: 350000


    // const loaixe = [
    //     RowDataPacket { malx: 1, tenlx: 'Xe Máy', gia: 40000 },
    //     RowDataPacket { malx: 2, tenlx: 'Xe Ô Tô Nhỏ', gia: 100000 },
    //     RowDataPacket { malx: 3, tenlx: 'Xe Bán Tải', gia: 60000 },
    //     RowDataPacket { malx: 4, tenlx: 'Xe Ô Tô Lớn', gia: 150000 }
    //   ]; // Input array of objects
      
    //   const count = loaixe.length; // Get the length of the array
      
    //   console.log(count); // Output: 4
}

exports.trangCaNhan = (req, res) => {
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;
    console.log(manv);
    NhanVien.findByMaNV(manv, (err, data) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('trangcanhan',{ nhanvien:data, layout: './master2'});
        }

    });
   
}

exports.huongDanSD = (req, res) => {
    res.render('huongdansd.ejs',{layout: './master2'});
}

// Chỉnh sửa thông tin cá nhân bên phía nhân viên
exports.chinhSuaTT = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('chinhsuattnv', {
            nhanvien: data, 
            layout: './master2'
        });
    });
};

// Nhân viên chỉnh sửa thông tin ở prof nhân viên
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.redirect('/admin/chinhsuatt/' + req.params.manv + '?status=error')
    }

    NhanVien.updateByMaNV(
        req.params.manv,
        new NhanVien(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else res.redirect('/admin/trangcanhan/?status=updatetc');
        }
    );
};

// Update mật khẩu khi nhấn vào nút thay đổi cá nhân bên phía nhân viên
exports.changePassword = (req, res) => {
    const {
        taikhoan,
        matkhaumoi,
        matkhaucu
    } = req.body;
    console.log(taikhoan);
    console.log(matkhaumoi);
    console.log(matkhaucu);

    NhanVien.findByTaikhoan(taikhoan, (err, admin) => {
        bcrypt.compare(matkhaucu, admin.matkhau, (err, result) => {
            console.log(result);
            if (result == true) {
                if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                    bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                        NhanVien.resetPasswordNV(taikhoan, hashedMatkhau, (err, result) => {
                            if (!err) {
                                res.redirect('/admin/trangcanhan/?status=doimkthanhcong');

                            } else {
                                res.redirect("/500");
                            }
                        })
                    })
                } else {
                    res.redirect('/admin/trangcanhan/?status=doimatkhauthatbai');
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


// Upload fle ảnh
exports.uploadFile = (req, res) => {
    const file = req.file
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;
    const hinhdd = res.locals.nhanvien.hinhdd;

    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
 
    if(hinhdd != 'abc.png'){
      
        const fs = require('fs');
        const fileNameCu = hinhdd;
        const filePath = '/images/avatarad/' + fileNameCu; 
      
        fs.unlink("app/public"+ filePath,function(err){
            if(err) throw err;
            console.log('File deleted!');
        });
    }

    //    res.send(file)
    NhanVien.updateAvaByMaNV(manv, file.filename, (err, result) => {
        if (!err) {
            res.redirect('/admin/trangcanhan');
        } else {
            res.redirect('/admin/500');
        }
    });

    // res.send(file)
}

exports.uploadMultiple = (req, res) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
}



// exports.showView = (req, res) => {
//     res.render('view.ejs',{layout: './master2'});
// }

// res.render('index', {layout: false}); -> neu khong muon truyen layout nao

// module.exports.getIndex = (req, res) => {
//     res.render('index.ejs', {
//         name: 'Vo Tan Khue',
//         age:22,
//     });
// }
