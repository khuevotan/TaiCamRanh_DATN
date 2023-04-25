const NhanVien = require("../../models/NhanVien.model");
const HoaDon = require("../../models/HoaDon.model");
const HoaDonRX = require("../../models/HoaDonRX.model");

const bcrypt = require('bcrypt');

exports.Login = (req, res) => {
    res.render('login.ejs',{layout: false});
}

exports.getIndex = (req, res) => {

    HoaDon.thongKeDG((err, data1, data2, data3, ngay6, ngay5, ngay4, ngay3, ngay2, ngay1, ngay0) => {
    
        if(data1[0]['COUNT(*)'] == null){
            data1[0]['COUNT(*)'] = 0;
        }

        if(data2[0]['SUM(tongtiensp)'] == null){
            data2[0]['SUM(tongtiensp)'] = 0;
        }

        if(data3[0]['SUM(tongtiensp)'] == null){
            data3[0]['SUM(tongtiensp)'] = 0;
        }

        

        // Doanh thu ngày 7.
        if(ngay6[0]['SUM(tongtiensp)'] == null){
            ngay6[0]['SUM(tongtiensp)'] = 0;
        }

        // Doanh thu ngày 6.
        if(ngay5[0]['SUM(tongtiensp)'] == null){
            ngay5[0]['SUM(tongtiensp)'] = 0;
        }

        // Doanh thu ngày 5.
        if(ngay4[0]['SUM(tongtiensp)'] == null){
            ngay4[0]['SUM(tongtiensp)'] = 0;
        }

        // Doanh thu ngày 4.
        if(ngay3[0]['SUM(tongtiensp)'] == null){
            ngay3[0]['SUM(tongtiensp)'] = 0;
        }

        // Doanh thu ngày 3.
        if(ngay2[0]['SUM(tongtiensp)'] == null){
            ngay2[0]['SUM(tongtiensp)'] = 0;
        }

        // Doanh thu ngày 2.
        if(ngay1[0]['SUM(tongtiensp)'] == null){
            ngay1[0]['SUM(tongtiensp)'] = 0;
        }

        // Doanh thu ngày 1.
        if(ngay0[0]['SUM(tongtiensp)'] == null){
            ngay0[0]['SUM(tongtiensp)'] = 0;
        }

        const doanhThuN6 = ngay6[0]['SUM(tongtiensp)'];
        const doanhThuN5 = ngay5[0]['SUM(tongtiensp)'];
        const doanhThuN4 = ngay4[0]['SUM(tongtiensp)'];
        const doanhThuN3 = ngay3[0]['SUM(tongtiensp)'];
        const doanhThuN2 = ngay2[0]['SUM(tongtiensp)'];
        const doanhThuN1 = ngay1[0]['SUM(tongtiensp)'];
        const doanhThuN0 = ngay0[0]['SUM(tongtiensp)'];

         // Số lượng hóa đơn chưa được duyệt.
         const SLHDCD = data1[0]['COUNT(*)'];

         // Doanh thu hóa đơn đặt hàng ngày hôm nay.
         const DTDHHN = data2[0]['SUM(tongtiensp)'];
 
         // Doanh thu hóa đơn đặt hàng tháng này.
         const DTHDTN = data3[0]['SUM(tongtiensp)'];

        HoaDonRX.thongKeDG((err, hdrxcd, dtrxn , dtrxt, ngayrx6, ngayrx5, ngayrx4, ngayrx3, ngayrx2, ngayrx1, ngayrx0) => {
            
            if(hdrxcd[0]['COUNT(*)'] == null){
                hdrxcd[0]['COUNT(*)'] = 0;
            }
    
            if(dtrxn[0]['SUM(tongtienrx)'] == null){
                dtrxn[0]['SUM(tongtienrx)'] = 0;
            }
    
            if(dtrxt[0]['SUM(tongtienrx)'] == null){
                dtrxt[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 7.
            if(ngayrx6[0]['SUM(tongtienrx)'] == null){
                ngayrx6[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 6.
            if(ngayrx5[0]['SUM(tongtienrx)'] == null){
                ngayrx5[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 5.
            if(ngayrx4[0]['SUM(tongtienrx)'] == null){
                ngayrx4[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 4.
            if(ngayrx3[0]['SUM(tongtienrx)'] == null){
                ngayrx3[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 3.
            if(ngayrx2[0]['SUM(tongtienrx)'] == null){
                ngayrx2[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 2.
            if(ngayrx1[0]['SUM(tongtienrx)'] == null){
                ngayrx1[0]['SUM(tongtienrx)'] = 0;
            }
    
            // Doanh thu ngày 1.
            if(ngayrx0[0]['SUM(tongtienrx)'] == null){
                ngayrx0[0]['SUM(tongtienrx)'] = 0;
            }
    
            const doanhThuRXN6 = ngayrx6[0]['SUM(tongtienrx)'];
            const doanhThuRXN5 = ngayrx5[0]['SUM(tongtienrx)'];
            const doanhThuRXN4 = ngayrx4[0]['SUM(tongtienrx)'];
            const doanhThuRXN3 = ngayrx3[0]['SUM(tongtienrx)'];
            const doanhThuRXN2 = ngayrx2[0]['SUM(tongtienrx)'];
            const doanhThuRXN1 = ngayrx1[0]['SUM(tongtienrx)'];
            const doanhThuRXN0 = ngayrx0[0]['SUM(tongtienrx)'];
    
             // Số lượng hóa đơn rửa xe chưa được duyệt.
             const hdrxcdne = hdrxcd[0]['COUNT(*)'];
    
             // Doanh thu hóa đơn rửa xe ngày hôm nay.
             const dtrxnne = dtrxn[0]['SUM(tongtienrx)'];
     
             // Doanh thu hóa đơn rửa xe tháng này.
             const dtrxtne = dtrxt[0]['SUM(tongtienrx)'];

            HoaDon.thongKeSS((err, sldht, sldhtt ) => {

                if(sldht[0]['COUNT(*)'] == null){
                    sldht[0]['COUNT(*)'] = 0;
                }

                if(sldht[0]['COUNT(*)'] == null){
                    sldhtt[0]['COUNT(*)'] = 0;
                }

                // Số lượng đơn đặt hàng trong tuần này.
                var SLDHTuan = sldht[0]['COUNT(*)']

                // Số lượng đơn đặt hàng trong tuần trước.
                var SLDHTuanT = sldhtt[0]['COUNT(*)']

                if (SLDHTuanT == 0 && SLDHTuan == 0){
                    var tyleTuanDH = 0;
                }

                if (SLDHTuanT == 0){
                    var tyleTuanDH = 100;
                
                }else{
                    var tyleTuanDH = ((SLDHTuan - SLDHTuanT) / SLDHTuanT * 100);
                }

                HoaDonRX.thongkeSLXT((err, slxe, xe ) => {

                var colIndex = 0; 
                var colIndexne = 1;

                var slxegoc = [].concat(slxe);
                var loaixegoc = [].concat(xe);
            
                console.log("KHUEEEEEEE");
                console.log(slxegoc);
                console.log(loaixegoc);

                var mangdlxe = [];
                var mangsl = [];
                var mantenxe = [];

                for(var i=0; i< slxegoc.length; i++){  
                    for(var j=0; j< loaixegoc.length; j++){  
                        if(slxegoc[i].malx == loaixegoc[j].malx){  
                            mangdlxe.push([slxegoc[i].soluong, loaixegoc[j].tenlx]); 
                        }  
                    }  
                } 

                for (let i = 0; i < mangdlxe.length; i++) {
                    mangsl[i] = mangdlxe[i][colIndex];
                }

                for (let i = 0; i < mangdlxe.length; i++) {
                    mantenxe[i] = mangdlxe[i][colIndexne];
                }

                const chuoisl = mangsl.join(', ');
                const chuoitenxe = mantenxe.join(', ');

    
                    res.render('trangchuad.ejs',{ 
                        SLHDCD: SLHDCD,
                        SLHDRXCD: hdrxcdne,
                        DTN: DTDHHN + dtrxnne,
                        DTT: DTHDTN + dtrxtne,
    
                        // tỷ lệ ĐƠN HÀNG TUẦN NÀY
                        SLDHTuan: SLDHTuan,
                        tyleTuanDH: tyleTuanDH,

                        // tỷ lệ xe
                        slxe: slxe,
                        loaixe: xe,

                        cslxe: chuoisl,
                        ctx: chuoitenxe,
    
                        dhn6 : doanhThuN6,
                        dhn5 : doanhThuN5,
                        dhn4 : doanhThuN4,
                        dhn3 : doanhThuN3,
                        dhn2 : doanhThuN2,
                        dhn1 : doanhThuN1,
                        dhn0 : doanhThuN0,
        
                        dhrxn6 : doanhThuRXN6,
                        dhrxn5 : doanhThuRXN5,
                        dhrxn4 : doanhThuRXN4,
                        dhrxn3 : doanhThuRXN3,
                        dhrxn2 : doanhThuRXN2,
                        dhrxn1 : doanhThuRXN1,
                        dhrxn0 : doanhThuRXN0,
                        
                        layout: './master2'
                    });

                });

                
            });
        });
    });
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
