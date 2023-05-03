const sql = require("./db")

const HoaDon = function(hoadon){
    this.mahd   = hoadon.mahd ;
    this.ngaygiao = hoadon.ngaygiao;
    this.tennguoinhan = hoadon.tennguoinhan;
    this.sodt = hoadon.sodt;
    this.diachi = hoadon.diachi;
    this.ghichu = hoadon.ghichu;
    this.tongtiensp = hoadon.tongtiensp;
    this.thanhtoan = hoadon.thanhtoan;
    this.matt = hoadon.matt;
    this.manv = hoadon.manv;
    this.makh = hoadon.makh;
    this.created_at = hoadon.created_at;
    this.updated_at = hoadon.updated_at;
};


//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị hóa đơn đặt hàng bên phía admin.
HoaDon.getAllAD = (result) => {
    let query = "SELECT * FROM hoadon";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadon: ", res);
        result(null, res);
    });
};

// Tạo đơn đặt hàng
HoaDon.create = (newhoadon, result) => {
    sql.query("INSERT INTO hoadon SET ?", newhoadon, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created hoadon: ", {  ...newhoadon });
        result(null, { ...newhoadon });
    });
};

//tìm kiếm 1 hóa đơn bằng mã đơn hàng
HoaDon.findBymahd  = (mahd , result) => { 
    sql.query(`SELECT * FROM hoadon WHERE mahd  = '${mahd }'`, (err, res) => {
        
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found hoadon: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found hoadon with the mahd 
        result({ kind: "not_found" }, null);
    });
};



HoaDon.updateBymahd  = (mahd , hoadon, result) => {
    sql.query(
        "UPDATE hoadon SET tennguoinhan = ?, ngaygiao = ?, sodt = ?, diachi = ? , ghichu = ? ,  thanhtoan = ? , matt = ? , manv = ?, updated_at = ?  WHERE mahd  = ?",
        [hoadon.tennguoinhan, hoadon.ngaygiao , hoadon.sodt, hoadon.diachi , hoadon.ghichu,  hoadon.thanhtoan,  hoadon.matt , hoadon.manv,new Date(),  mahd ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadon with the mahd 
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated hoadon: ", { mahd : mahd , ...hoadon });
            result(null, { mahd : mahd , ...hoadon });
        }
    );
};

HoaDon.remove = (mahd , result) => {
    sql.query("DELETE FROM hoadon WHERE mahd  = ?", mahd , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found hoadon with the mahd 
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted hoadon with mahd : ", mahd );
        result(null, res);
    });
};


//======================= THỐNG KÊ ======================= 
// Thống kê đơn giản khi admin đăng nhập vào.
HoaDon.thongKeDG = (result) => {
    // Số lượng hóa đơn chưa được duyệt.
    let query = `SELECT COUNT(*) FROM hoadon WHERE matt = 1`;

    // Doanh thu hóa đơn đặt hàng ngày hôm nay.
    let query2 = `SELECT SUM(tongtiensp) FROM hoadon WHERE DATE(created_at) = CURDATE()`;

    let query2ago = `SELECT SUM(tongtiensp) as tongtiensp FROM hoadon WHERE DATE(created_at) = DATE(CURRENT_DATE - INTERVAL 1 DAY)`;

    // Doanh thu hóa đơn đặt hàng tháng này.
    let query3 = `SELECT SUM(tongtiensp) FROM hoadon WHERE MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())`;

    let query3ago = `SELECT SUM(tongtiensp) as tongtiensp FROM hoadon WHERE MONTH(created_at) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) AND YEAR(created_at) = YEAR(CURRENT_DATE)`;

    // Doanh thu hóa đơn đặt hàng 7 ngày gần nhất.
    let queryn6 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 6;`;
    let queryn5 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 5;`;
    let queryn4 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 4;`;
    let queryn3 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 3;`;
    let queryn2 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 2;`;
    let queryn1 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 1;`;
    let queryn0 = `SELECT SUM(tongtiensp), COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 0;`;

    sql.query(query, (err, res1) => {
        sql.query(query2, (err, res2) => {
            sql.query(query3, (err, res3) => {
                sql.query(queryn6, (err, ngay6) => {
                    sql.query(queryn5, (err, ngay5) => {
                        sql.query(queryn4, (err, ngay4) => {
                            sql.query(queryn3, (err, ngay3) => {
                                sql.query(queryn2, (err, ngay2) => {
                                    sql.query(queryn1, (err, ngay1) => {
                                        sql.query(queryn0, (err, ngay0) => {
                                            sql.query(query2ago, (err, ngay2ago) => {
                                                sql.query(query3ago, (err, ngay3ago) => {
                                            result(null, res1, res2,ngay2ago, res3,ngay3ago,ngay6, ngay5, ngay4, ngay3, ngay2, ngay1, ngay0);
                                        });
                                        });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};

HoaDon.thongkeTT = (result) => {

    // Thống kê trạng thái đơn rửa xe trong tuần.
    let querytt1 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 1);`;
    let querytt2 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 2);`;
    let querytt3 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 3);`;
    let querytt4 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 4);`;
    let querytt5 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 5);`;
  


    sql.query(querytt1, (err, tt1) => {
       sql.query(querytt2, (err, tt2) => {
        sql.query(querytt3, (err, tt3) => {
            sql.query(querytt4, (err, tt4) => {
                sql.query(querytt5, (err, tt5) => {
                    result(null, tt1, tt2, tt3, tt4, tt5);
                });
            });
        });
       });
   });
};

// Thống kê so sánh
HoaDon.thongKeSS = (result) => {
     // Số lượng đơn đặt hàng trong tuần này.
     let sldathangttuan = `SELECT COUNT(*) FROM hoadon WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) DAY) AND created_at < DATE_ADD(DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) DAY), INTERVAL 7 DAY)`;

     // Số lượng đơn đặt hàng trong tuần trước.
     let sldathangttruoc = `SELECT COUNT(*) FROM hoadon WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 7 DAY) AND created_at < DATE_ADD(DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 7 DAY), INTERVAL 7 DAY)`;

     sql.query(sldathangttuan, (err, sldathangttuan) => {
        sql.query(sldathangttruoc, (err, sldathangttruoc) => {
            result(null, sldathangttuan, sldathangttruoc);
        });
    });
};

// thống kê số lượng sản phẩm bán chạy trong tháng
// thống kê số lượng xe đặt rửa xe trong 1 tháng này.
HoaDon.sanPhamBanChayTrongThang = (result) => {

    // Số lượng xe ứng với mỗi hóa đơn rửa xe trong tháng này.
  
    let query = `SELECT sanpham.tensp, cthoadon.masp, SUM(cthoadon.soluong) AS soluongln FROM cthoadon INNER JOIN hoadon ON cthoadon.mahd = hoadon.mahd INNER JOIN sanpham ON cthoadon.masp = sanpham.masp WHERE MONTH(hoadon.created_at) = MONTH(CURDATE()) AND YEAR(hoadon.created_at) = YEAR(CURDATE()) GROUP BY cthoadon.masp ORDER BY soluongln DESC LIMIT 3;`;

       sql.query(query, (err, sanpham) => {
           result(null,  sanpham);
       });
  
};


//======================= GIAO DIEN KHÁCH HÀNG ======================= 
HoaDon.updateThanhToan = (mahd , result) => {
    sql.query(
        "UPDATE hoadon SET thanhtoan = ? WHERE mahd  = ?",
        ['2', mahd ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mahd : mahd  });
        }
    );
};

// Hiển thị lịch sử hóa đơn đặt hàng bên phía khách hàng
HoaDon.getLSAll = (makh, result) => {
    let query = `SELECT * FROM hoadon WHERE makh = ${makh} and matt = 4 and thanhtoan = 2`;
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadon: ", res);
        result(null, res);
    });
};


HoaDon.updateBymahdwitdtongtien  = (mahd , tongtiensp, result) => {
    sql.query(
        "UPDATE hoadon SET  tongtiensp = ?  WHERE mahd  = ?",
        [tongtiensp,  mahd ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadon with the mahd 
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mahd: mahd });
        }
    );
};

// Hiển thị hóa đơn rửa xe bên phía khách hàng
HoaDon.getAll = (makh, result) => {
    let query = `SELECT * FROM hoadon WHERE makh = ${makh} and matt != 4`;
    // if (tenbv) {
    //     query += ` WHERE tenbv LIKE '%${tenbv}%'`;
    // }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadon: ", res);
        result(null, res);
    });
};


HoaDon.updateThanhToan = (mahd, result) => {
    sql.query(
        "UPDATE hoadon SET thanhtoan = ? WHERE mahd = ?",
        ['2', mahd],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mahd: mahd });
        }
    );
};

module.exports = HoaDon;