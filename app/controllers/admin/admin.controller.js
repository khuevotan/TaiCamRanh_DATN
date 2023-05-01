const NhanVien = require("../../models/NhanVien.model");
const HoaDon = require("../../models/HoaDon.model");
const HoaDonRX = require("../../models/HoaDonRX.model");
const mailer = require('../../utils/mailer');
const moment = require('moment');
const bcrypt = require('bcrypt');
require('dotenv/config');



exports.Login = (req, res) => {
    res.render('login.ejs',{layout: false});
}

exports.xacthuctaikhoan = (req, res) => {

     var emailnv = req.params.email;

     console.log("khue");
     console.log(emailnv);
    
    bcrypt.hash(emailnv, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
        console.log(`${process.env.APP_URL}/verify?email=${emailnv}&token=${hashedEmail}`);
        mailer.sendMail(emailnv, "Verify Email", `<a href="${process.env.APP_URL}/admin/nhanvien/verify?email=${emailnv}&token=${hashedEmail}"> Verify </a>`)
    });

    res.redirect('/admin/trangcanhan?status=xacthucsuccess');  
}


exports.getIndex = (req, res) => {

    HoaDon.thongKeDG((err, data1, data2, dataago, data3, datatrago, ngay6, ngay5, ngay4, ngay3, ngay2, ngay1, ngay0) => {
    
        if(data1[0]['COUNT(*)'] == null){
            data1[0]['COUNT(*)'] = 0;
        }

        if(data2[0]['SUM(tongtiensp)'] == null){
            data2[0]['SUM(tongtiensp)'] = 0;
        }

        if(dataago[0]['tongtiensp'] == null){
            dataago[0]['SUM(tongtiensp)'] = 0;
        }

        if(data3[0]['SUM(tongtiensp)'] == null){
            data3[0]['SUM(tongtiensp)'] = 0;
        }

        if(datatrago[0]['tongtiensp'] == null){
            datatrago[0]['SUM(tongtiensp)'] = 0;
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

        const soLuongDHN6 = ngay6[0]['sldh'];
        const soLuongDHN5 = ngay5[0]['sldh'];
        const soLuongDHN4 = ngay4[0]['sldh'];
        const soLuongDHN3 = ngay3[0]['sldh'];
        const soLuongDHN2 = ngay2[0]['sldh'];
        const soLuongDHN1 = ngay1[0]['sldh'];
        const soLuongDHN0 = ngay0[0]['sldh'];

         // Số lượng hóa đơn chưa được duyệt.
         const SLHDCD = data1[0]['COUNT(*)'];

         // Doanh thu hóa đơn đặt hàng ngày hôm nay.
         const DTDHHN = data2[0]['SUM(tongtiensp)'];

         // Doanh thu hóa đơn đặt hàng ngày hôm qua.
         const DTDHHNago = dataago[0]['SUM(tongtiensp)'];

         // Doanh thu hóa đơn đặt hàng tháng này.
         const DTHDTN = data3[0]['SUM(tongtiensp)'];

          // Doanh thu hóa đơn đặt hàng tháng trước.
        const DTHDTNago = datatrago[0]['tongtiensp'];

        HoaDonRX.thongKeDG((err, hdrxcd, dtrxn, dtrxnago , dtrxt,  dtrxtago,ngayrx6, ngayrx5, ngayrx4, ngayrx3, ngayrx2, ngayrx1, ngayrx0) => {
            
            console.log(dtrxtago);

            if(hdrxcd[0]['COUNT(*)'] == null){
                hdrxcd[0]['COUNT(*)'] = 0;
            }
    
            if(dtrxn[0]['SUM(tongtienrx)'] == null){
                dtrxn[0]['SUM(tongtienrx)'] = 0;
            }

            // doanh thu ngày hôm qua
            if(dtrxnago[0]['tongtienrx'] == null){
                dtrxnago[0]['SUM(tongtienrx)'] = 0;
            }
    
            if(dtrxt[0]['SUM(tongtienrx)'] == null){
                dtrxt[0]['SUM(tongtienrx)'] = 0;
            }
            // doanh thu tháng tuewocs
            if(dtrxtago[0]['tongtienrx'] == null){
                dtrxtago[0]['SUM(tongtienrx)'] = 0;
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

            const soLuongRXN6 = ngayrx6[0]['sldrx'];
            const soLuongRXN5 = ngayrx5[0]['sldrx'];
            const soLuongRXN4 = ngayrx4[0]['sldrx'];
            const soLuongRXN3 = ngayrx3[0]['sldrx'];
            const soLuongRXN2 = ngayrx2[0]['sldrx'];
            const soLuongRXN1 = ngayrx1[0]['sldrx'];
            const soLuongRXN0 = ngayrx0[0]['sldrx'];

             // Số lượng hóa đơn rửa xe chưa được duyệt.
             const hdrxcdne = hdrxcd[0]['COUNT(*)'];
    
             // Doanh thu hóa đơn rửa xe ngày hôm nay.
             const dtrxnne = dtrxn[0]['SUM(tongtienrx)'];

            // Doanh thu hóa đơn rửa xe ngày hôm qua.
            const dtrxnagoa = dtrxnago[0]['SUM(tongtienrx)'];
     
            // Doanh thu hóa đơn rửa xe tháng này.
            const dtrxtne = dtrxt[0]['SUM(tongtienrx)'];

            // Doanh thu hóa đơn rửa xe tháng trước.
            const dtrxtneago = dtrxtago[0]['tongtienrx'];

            // tổng doanh thu
            var doanthuhomnay =DTDHHN + dtrxnne;
            var doanthuhomqua = dtrxnagoa + DTDHHNago;
            var doanthuthangnay =  DTHDTN + dtrxtne;
            var doanthuthangtruoc = dtrxtneago + DTHDTNago;

            console.log("khue2424");
            console.log(doanthuhomnay);
            console.log(doanthuhomqua);
            console.log(doanthuthangnay);
            console.log(doanthuthangtruoc);

            // so sanh donah thu ngày
            if (doanthuhomnay == 0 && doanthuhomqua == 0){
                var tyledaanhthuhn = 0;
            }

            if (doanthuhomqua == 0){
                var tyledaanhthuhn = 100;

            }else{
                var tyledaanhthuhn = ((doanthuhomnay - doanthuhomqua) / doanthuhomqua * 100);
            }


           
              // so sanh donah thu ngày
              if (doanthuthangnay == 0 && doanthuthangtruoc == 0){
                var tyldoanhthut = 0;
                }

                if (doanthuthangtruoc == 0){
                    var tyldoanhthut = 100;

                }else{
                    var tyldoanhthut = ((doanthuthangnay - doanthuthangtruoc) / doanthuthangtruoc * 100);
                }

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

                HoaDonRX.thongkeTT((err, tt1, tt2, tt3, tt4) => {
                    var tt1 = tt1[0]['SoLuongHoaDon'];
                    var tt2 = tt2[0]['SoLuongHoaDon'];
                    var tt3 = tt3[0]['SoLuongHoaDon'];
                    var tt4 = tt4[0]['SoLuongHoaDon'];
                
                    HoaDon.thongkeTT((err, ttdh1, ttdh2, ttdh3, ttdh4, ttdh5) => {

                        var ttdh1 = ttdh1[0]['SoLuongHoaDon'];
                        var ttdh2 = ttdh2[0]['SoLuongHoaDon'];
                        var ttdh3 = ttdh3[0]['SoLuongHoaDon'];
                        var ttdh4 = ttdh4[0]['SoLuongHoaDon'];
                        var ttdh5 = ttdh5[0]['SoLuongHoaDon'];
                    
                    res.render('trangchuad.ejs',{ 
                        SLHDCD: SLHDCD,
                        SLHDRXCD: hdrxcdne,

                        // Doanh Thu Ngày Hôm Nay
                        DTN: DTDHHN + dtrxnne,

                        // Doanh Thu Của Tháng Này
                        DTT: DTHDTN + dtrxtne,

                        //  tỷ lệ daonh thu tháng
                        tyldoanhthut :  Math.round(tyldoanhthut),
                    //  tỷ lệ daonh thu ngày
                        tyledaanhthuhn : Math.round(tyledaanhthuhn),
    
                        // tỷ lệ ĐƠN HÀNG TUẦN NÀY
                        SLDHTuan: SLDHTuan,
                        tyleTuanDH: tyleTuanDH,

                        // tỷ lệ xe
                        slxe: slxe,
                        loaixe: xe,

                      
    
                        dhn6 : doanhThuN6,
                        dhn5 : doanhThuN5,
                        dhn4 : doanhThuN4,
                        dhn3 : doanhThuN3,
                        dhn2 : doanhThuN2,
                        dhn1 : doanhThuN1,
                        dhn0 : doanhThuN0,

                        soLuongDHN6: soLuongDHN6,
                        soLuongDHN5: soLuongDHN5,
                        soLuongDHN4: soLuongDHN4,
                        soLuongDHN3: soLuongDHN3,
                        soLuongDHN2: soLuongDHN2,
                        soLuongDHN1: soLuongDHN1,
                        soLuongDHN0 : soLuongDHN0,
        
                        dhrxn6 : doanhThuRXN6,
                        dhrxn5 : doanhThuRXN5,
                        dhrxn4 : doanhThuRXN4,
                        dhrxn3 : doanhThuRXN3,
                        dhrxn2 : doanhThuRXN2,
                        dhrxn1 : doanhThuRXN1,
                        dhrxn0 : doanhThuRXN0,

                        soLuongRXN6 : soLuongRXN6,
                        soLuongRXN5 : soLuongRXN5,
                        soLuongRXN4 : soLuongRXN4,
                        soLuongRXN3 : soLuongRXN3, 
                        soLuongRXN2 : soLuongRXN2,
                        soLuongRXN1 : soLuongRXN1,
                        soLuongRXN0 : soLuongRXN0,

                        tt1 : tt1,
                        tt2: tt2,
                        tt3: tt3,
                        tt4 : tt4,
                     
                        ttdh1: ttdh1,
                        ttdh2 : ttdh2,
                        ttdh3: ttdh3,
                        ttdh4: ttdh4,
                        ttdh5: ttdh5,


                        
                        layout: './master2'
                    });

                    });
                });

                });

                
            });
        });
    });
}


// gửi mail
exports.soanMail = (req, res) => {
    res.render('soanmail.ejs',{layout: './master2'});
    
}

exports.guiMail = (req, res) => {

    // Validate request
    if (!req.body) {
        res.redirect('/admin/soanmail?status=error')
    }

    var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;

    mailer.sendMail(to, subject, message);
   
    res.redirect('/admin/soanmail?status=success');
}


// thống kê doanh thu cố định
exports.doanhthuCoDinh = (req, res) => {
    var chuoidate = '';
    var chuoitienhd = '';
    var chuoitienhdrx = '';
    var codinh = 1;
    var thanhtoan = 1;
    var trangthai  =  1;

    res.render('thongke/doanhthucodinh.ejs',{ 
        chuoidate: chuoidate,
        chuoitienhd: chuoitienhd,
        chuoitienhdrx : chuoitienhdrx,
        codinh: codinh,
        thanhtoan: thanhtoan,
        trangthai: trangthai,
        layout: './master2'
    });

}

// doanh thu 12 thang trong nam nay
exports.doanhthuCoDinhSecond = (req, res) => {

// Doanh thu cac tuan trong thang nay
    const codinh = req.body.codinh;
    const thanhtoan = req.body.thanhtoan;
    const trangthai = req.body.trangthai;

    if(codinh == 1){
        // tuần trong tháng hiện tại
        HoaDonRX.doanhThuCDTuan(thanhtoan, trangthai, (err, dtHDRX, dtHD) => {

            // Lấy giá trị date và tongtienrx thành một mảng 2 chiều
            const manghdrx = dtHDRX.map(item => [item.week_number, item.tongtienrx]);
            const manghd = dtHD.map(item => [item.week_number , item.tongtiensp]);
    
            // mang 1 chieu
            console.log(manghdrx);
            console.log(manghd);
            
            let mang2chieu = [];
            
            for (let i = 0; i < manghd.length; i++) {
                const ngayhd = manghd[i][0];
                let row = [manghd[i][0], manghd[i][1], 0];
                for (let j = 0; j < manghdrx.length; j++) {
                    const ngayrx = manghdrx[j][0];
                    if (ngayhd === ngayrx) {
                        row[2] = manghdrx[j][1];
                        break;
                    }
                }
                mang2chieu.push(row);
            }
            
            for (let i = 0; i < manghdrx.length; i++) {
                const ngayrx = manghdrx[i][0];
                let isExists = false;
                for (let j = 0; j < mang2chieu.length; j++) {
                    const ngaym2c = mang2chieu[j][0];
                    if (ngayrx === ngaym2c) {
                        isExists = true;
                        break;
                    }
                }
                if (!isExists) {
                    mang2chieu.push([manghdrx[i][0], 0, manghdrx[i][1]]);
                }
            }
            
            mang2chieu.sort((a, b) => {
                return a[0] - b[0];
            });
    
            console.log(mang2chieu);
    
           // lấy giá trị phần tử thứ 3 và chuyển thành chuỗi
         
            // thêm chữ chuyển sang tháng
     
           
    
            let chuoidate = '';
           
    
            for (let i = 0; i < mang2chieu.length; i++) {
                chuoidate += 'Tuần ' + mang2chieu[i][0].toString();
                if (i < mang2chieu.length - 1) {
                    chuoidate += ', ';
                }
              }
          
    
           const chuoitienhd = mang2chieu.map(item => item[1].toString()).join(', ');
           const chuoitienhdrx = mang2chieu.map(item => item[2].toString()).join(', ');
    
            res.render('thongke/doanhthucodinh.ejs',{ 
                chuoidate: chuoidate ,
                chuoitienhd: chuoitienhd,
                chuoitienhdrx : chuoitienhdrx,
                codinh: codinh,
                thanhtoan : thanhtoan,
                trangthai: trangthai,
                layout: './master2'
            });
        });
    }else{
        HoaDonRX.doanhThuCDT(thanhtoan, trangthai, (err, dtHDRX, dtHD) => {

            // Lấy giá trị date và tongtienrx thành một mảng 2 chiều
            const manghdrx = dtHDRX.map(item => [item.month_number, item.tongtienrx]);
            const manghd = dtHD.map(item => [item.month_number , item.tongtiensp]);
    
            // mang 1 chieu
            console.log(manghdrx);
            console.log(manghd);
            
            let mang2chieu = [];
            
            for (let i = 0; i < manghd.length; i++) {
                const ngayhd = manghd[i][0];
                let row = [manghd[i][0], manghd[i][1], 0];
                for (let j = 0; j < manghdrx.length; j++) {
                    const ngayrx = manghdrx[j][0];
                    if (ngayhd === ngayrx) {
                        row[2] = manghdrx[j][1];
                        break;
                    }
                }
                mang2chieu.push(row);
            }
            
            for (let i = 0; i < manghdrx.length; i++) {
                const ngayrx = manghdrx[i][0];
                let isExists = false;
                for (let j = 0; j < mang2chieu.length; j++) {
                    const ngaym2c = mang2chieu[j][0];
                    if (ngayrx === ngaym2c) {
                        isExists = true;
                        break;
                    }
                }
                if (!isExists) {
                    mang2chieu.push([manghdrx[i][0], 0, manghdrx[i][1]]);
                }
            }
            
            mang2chieu.sort((a, b) => {
                return a[0] - b[0];
            });
    
            console.log(mang2chieu);
    
           // lấy giá trị phần tử thứ 3 và chuyển thành chuỗi
         
            // thêm chữ chuyển sang tháng
     
           
    
            let chuoidate = '';
           
    
            for (let i = 0; i < mang2chieu.length; i++) {
                chuoidate += 'Tháng ' + mang2chieu[i][0].toString();
                if (i < mang2chieu.length - 1) {
                    chuoidate += ', ';
                }
              }
          
    
           const chuoitienhd = mang2chieu.map(item => item[1].toString()).join(', ');
           const chuoitienhdrx = mang2chieu.map(item => item[2].toString()).join(', ');
    
            res.render('thongke/doanhthucodinh.ejs',{ 
                chuoidate: chuoidate ,
                chuoitienhd: chuoitienhd,
                chuoitienhdrx : chuoitienhdrx,
                codinh: codinh,
                thanhtoan : thanhtoan,
                trangthai: trangthai,
                layout: './master2'
            });
        });
    }

  
}

// tuan

exports.loaiXeTk = (req, res) => {
    HoaDonRX.thongkeSLXT((err, slxe, xe ) => {

        var colIndex = 0; 
        var colIndexne = 1;

        // lấy mảng gốc
        var slxegoc = [].concat(slxe);
        var loaixegoc = [].concat(xe);
    
        // tạo mảng để hứng dữ liệu
        var mangdlxe = [];
        var mangsl = [];
        var mantenxe = [];

        // tạo mảng 2 chiều với cột thứ 2 là tên xe
        for(var i=0; i< slxegoc.length; i++){  
            for(var j=0; j< loaixegoc.length; j++){  
                if(slxegoc[i].malx == loaixegoc[j].malx){  
                    mangdlxe.push([slxegoc[i].soluong, loaixegoc[j].tenlx]); 
                }  
            }  
        } 

        // tạo mảng 1 chiều là số lượng
        for (let i = 0; i < mangdlxe.length; i++) {
            mangsl[i] = mangdlxe[i][colIndex];
        }

        // tạo mảng 1 chiều là tên xe ứng với số lượng
        for (let i = 0; i < mangdlxe.length; i++) {
            mantenxe[i] = mangdlxe[i][colIndexne];
        }

        // chuyển đổi mảng thành chuỗi
        const chuoisl = mangsl.join(', ');
        const chuoitenxe = mantenxe.join(', ');

        res.render('thongke/loaixe.ejs',{ 
                
                    cslxe: chuoisl,
                    ctx: chuoitenxe,
                    layout: './master2'
                });
    });
}

// sản phẩm bán chạy trong tháng này
exports.sanPhamTK = (req, res) => {

    HoaDon.sanPhamBanChayTrongThang((err, sanpham ) => {

        console.log("khue");
        console.log(sanpham);

        var colIndex = 0; 
        var colIndexne = 1;

        const mangspgoc = sanpham.map(item => [item.tensp, item.soluongln]);
   
        // tạo mảng để hứng dữ liệu
        var mangspln = [];
        var mangsoln = [];

        // tạo mảng 1 chiều là số lượng
        for (let i = 0; i < mangspgoc.length; i++) {
            mangspln[i] = mangspgoc[i][colIndex];
        }

        // tạo mảng 1 chiều là tên xe ứng với số lượng
        for (let i = 0; i < mangspgoc.length; i++) {
            mangsoln[i] = mangspgoc[i][colIndexne];
        }

        // chuyển đổi mảng thành chuỗi
        const chuoitensp = mangspln.join(', ');
        const chuoisoluongln = mangsoln.join(', ');

        res.render('thongke/sanpham.ejs',{ 
                
            chuoitensp: chuoitensp,
            chuoisoluongln: chuoisoluongln,
                    layout: './master2'
            });
    });
}


// thống kê doanh thu biểu đồ tùy chọn luc dau
exports.thongKeBieuDo = (req, res) => {
    var chuoidate = '';
    var chuoitienhd = '';
    var chuoitienhdrx = '';
    var ngaybatdau = new Date();
    var ngayketthuc = new Date();
    var thanhtoan = 1;
    var trangthai  =  1;

    var changengaybatdau = moment(ngaybatdau).format('YYYY-MM-DD');
    var changengayketthuc = moment(ngayketthuc).format('YYYY-MM-DD');

    res.render('thongke/thongkebd.ejs',{ 
        chuoidate: chuoidate ,
        chuoitienhd: chuoitienhd,
        chuoitienhdrx : chuoitienhdrx,
        ngaybatdau: changengaybatdau,
        ngayketthuc: changengayketthuc,
        thanhtoan : thanhtoan,
        trangthai: trangthai,
        layout: './master2'
    });
 
}

// thống kê doanh thu biểu đồ tùy chọn luc sau
exports.doanhThuTuyChinh= (req, res) => {

    const ngaybatdau = req.body.ngaybatdau;
    const ngayketthuc = req.body.ngayketthuc;
    const thanhtoan = req.body.thanhtoan;
    const trangthai = req.body.trangthai;

    HoaDonRX.doanhThuTC(ngaybatdau, ngayketthuc, thanhtoan, trangthai, (err, dtHDRX, dtHD) => {

        // Lấy giá trị date và tongtienrx thành một mảng 2 chiều
        const manghdrx = dtHDRX.map(item => [item.date, item.tongtienrx]);
        const manghd = dtHD.map(item => [item.date , item.tongtiensp]);

        
        let mang2chieu = [];
        
        for (let i = 0; i < manghd.length; i++) {
            const ngayhd = new Date(manghd[i][0]);
            let row = [manghd[i][0], manghd[i][1], 0];
            for (let j = 0; j < manghdrx.length; j++) {
                const ngayrx = new Date(manghdrx[j][0]);
                if (ngayhd.getTime() === ngayrx.getTime()) {
                    row[2] = manghdrx[j][1];
                    break;
                }
            }
            mang2chieu.push(row);
        }

        console.log("KHUE TEST1");
        
        for (let i = 0; i < manghdrx.length; i++) {
            const ngayrx = new Date(manghdrx[i][0]);
            let isExists = false;
            for (let j = 0; j < mang2chieu.length; j++) {
                const ngaym2c = new Date(mang2chieu[j][0]);
                if (ngayrx.getTime() === ngaym2c.getTime()) {
                    isExists = true;
                    break;
                }
            }
            if (!isExists) {
                mang2chieu.push([manghdrx[i][0], 0, manghdrx[i][1]]);
            }
        }
        
        mang2chieu.sort((a, b) => {
            return new Date(a[0]) - new Date(b[0]);
        });
        
       // lấy giá trị phần tử thứ 3 và chuyển thành chuỗi
       
       const chuoidate = mang2chieu.map( item => moment(item[0]).format('DD-MM-YYYY').toString()).join(', ');
       const chuoitienhd = mang2chieu.map(item => item[1].toString()).join(', ');
       const chuoitienhdrx = mang2chieu.map(item => item[2].toString()).join(', ');

       // Hiển thị data lần 2
       var ngaybatdau = req.body.ngaybatdau;
       var ngayketthuc =  req.body.ngayketthuc;
       var thanhtoan =  req.body.thanhtoan;
       var trangthai  =  req.body.trangthai;

       var changengaybatdau = moment(ngaybatdau).format('YYYY-MM-DD');
       var changengayketthuc = moment(ngayketthuc).format('YYYY-MM-DD');

        res.render('thongke/thongkebd.ejs',{ 
            chuoidate: chuoidate ,
            chuoitienhd: chuoitienhd,
            chuoitienhdrx : chuoitienhdrx,
            ngaybatdau: changengaybatdau,
            ngayketthuc: changengayketthuc,
            thanhtoan : thanhtoan,
            trangthai: trangthai,
            layout: './master2'});
    });
}


exports.trangCaNhan = (req, res) => {
    res.locals.nhanvien = req.session.nhanvien
    const manv = res.locals.nhanvien.manv;
 
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

exports.formdoimktt = (req, res) => {
    res.locals.status = req.query.status;

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else res.render('changpassnvtt', {
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

    res.locals.status = req.query.status;
    const {
        taikhoan,
        matkhaumoi,
        matkhaumoixn,
        matkhaucu
    } = req.body;

    if(req.body.matkhaumoi == req.body.matkhaumoixn){
        NhanVien.findByMaNV(req.params.manv, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                NhanVien.findByTaikhoan(taikhoan, (err, nhanvien) => {
                    bcrypt.compare(matkhaucu, nhanvien.matkhau, (err, result) => {
                        console.log(result);
                        if (result == true) {
                            if (matkhaumoi.length >= 8 && matkhaumoi.match(/[a-z]/) && matkhaumoi.match(/[A-Z]/) && matkhaumoi.match(/\d/) && matkhaumoi.match(/[^a-zA-Z\d]/)) {
                                bcrypt.hash(matkhaumoi, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedMatkhau) => {
                                    NhanVien.resetPasswordNV(taikhoan, hashedMatkhau, (err, result) => {
                                        if (!err) {
                                          

                                            res.redirect('/admin/chinhsuatt/formdmk/'+ req.params.manv + '?status=success');  
                                      
            
                                        } else {
                                            res.redirect("/admin/500");
                                        }
                                    })
                                })
                            } else {
                                const conflictError = 'Mật khẩu mới phải dài hơn 8 ký tự, cả chữ thường và chữ in hoa, ít nhất một số và một ký tự đặc biệt ví dụ: 012345Kh*';
                            
                                res.render('changpassnvtt.ejs', { 
                                    nhanvien: data,
                                    conflictError,  
                                    layout: './master2'
                                });

                            }
            
                        } else {
        
                            const conflictError = 'Sai Password Cũ!';
                       
                            res.render('changpassnvtt.ejs', { 
                                nhanvien: data,
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

        NhanVien.findByMaNV(req.params.manv, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/404');
                } else {
                    res.redirect('/500');
                }
            } else {

                const conflictError = 'Mật khẩu mới và xác nhận mật khẩu chưa khớp!';
           
                res.render('changpassnvtt.ejs', { 
                    nhanvien: data,
                    conflictError,  
                    layout: './master2'
                });
            }
        });
    }
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
