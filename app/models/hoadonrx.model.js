const sql = require("./db")

const HoaDonRX = function(hoadonrx){
    this.mahdrx  = hoadonrx.mahdrx;
    this.tennguoirua = hoadonrx.tennguoirua;
    this.ngayrua = hoadonrx.ngayrua;
    this.magio = hoadonrx.magio;
    this.sodt = hoadonrx.sodt;
    this.diachi = hoadonrx.diachi;
    this.ghichu = hoadonrx.ghichu;
    this.tongtienrx = hoadonrx.tongtienrx;
    this.thanhtoan = hoadonrx.thanhtoan;
    this.ptthanhtoan = hoadonrx.ptthanhtoan;
    this.malx = hoadonrx.malx;
    this.matt = hoadonrx.matt;
    this.manv = hoadonrx.manv;
    this.makh = hoadonrx.makh;
    this.created_at = hoadonrx.created_at;
    this.updated_at = hoadonrx.updated_at;
};


//======================= GIAO DIEN ADMIN ======================= 
// Tạo đơn rửa xe
HoaDonRX.create = (newhoadonrx, result) => {
    sql.query("INSERT INTO hoadonrx SET ?", newhoadonrx, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created hoadonrx: ", {  ...newhoadonrx });
        result(null, { ...newhoadonrx });
    });
};

// Hiển thị hóa đơn rửa xe bên phía admin
HoaDonRX.getAllAD = (result) => {
    let query = `SELECT * FROM hoadonrx `;
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadonrx: ", res);
        result(null, res);
    });
};

// Tìm kiếm 1 hóa đơn bằng mã đơn hàng
HoaDonRX.findBymahdrx = (mahdrx, result) => { 
    sql.query(`SELECT * FROM hoadonrx WHERE mahdrx = '${mahdrx}'`, (err, res) => {
        
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            // console.log("found hoadonrx: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found hoadonrx with the mahdrx
        result({ kind: "not_found" }, null);
    });
};

HoaDonRX.updateHuy = (mahdrx, result) => {
    sql.query(
        "UPDATE hoadonrx SET matt = ?, updated_at = ?  WHERE mahdrx = ?",
        [ 3, new Date(), mahdrx],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadonrx with the mahdrx
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated hoadonrx: ", { mahdrx: mahdrx });
            result(null, { mahdrx: mahdrx });
        }
    );
};

HoaDonRX.updateBymahdrx = (mahdrx, hoadonrx, result) => {
    sql.query(
        "UPDATE hoadonrx SET tennguoirua = ?, ngayrua = ?, magio = ? , sodt = ? , diachi = ? , ghichu = ? , tongtienrx = ? , thanhtoan = ?, ptthanhtoan = ? , malx = ? , matt = ? , manv = ?, updated_at = ?  WHERE mahdrx = ?",
        [hoadonrx.tennguoirua , hoadonrx.ngayrua, hoadonrx.magio , hoadonrx.sodt,  hoadonrx.diachi,hoadonrx.ghichu,hoadonrx.tongtienrx,hoadonrx.thanhtoan, hoadonrx.ptthanhtoan ,hoadonrx.malx,hoadonrx.matt, hoadonrx.manv, new Date(), mahdrx],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadonrx with the mahdrx
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated hoadonrx: ", { mahdrx: mahdrx, ...hoadonrx });
            result(null, { mahdrx: mahdrx, ...hoadonrx });
        }
    );
};

HoaDonRX.remove = (mahdrx, result) => {
    sql.query("DELETE FROM hoadonrx WHERE mahdrx = ?", mahdrx, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found hoadonrx with the mahdrx
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted hoadonrx with mahdrx: ", mahdrx);
        result(null, res);
    });
};


//======================= THỐNG KÊ ======================= 
// Thống kê đơn giản khi admin đăng nhập vào.
HoaDonRX.thongKeDG = (result) => {
    
    // Số lượng hóa đơn rửa xe chưa được duyệt.
    let query = `SELECT COUNT(*) FROM hoadonrx WHERE matt = 1`;

    // Doanh thu hóa đơn rửa xe ngày hôm nay.
    let query2 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATE(created_at) = CURDATE()`;

    let query2ago = `SELECT SUM(tongtienrx) as tongtienrx FROM hoadonrx WHERE DATE(created_at) = DATE(CURRENT_DATE - INTERVAL 1 DAY)`;

    // Doanh thu hóa đơn rửa xe tháng này.
    let query3 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())`;

    let query3ago = `SELECT SUM(tongtienrx) as tongtienrx FROM hoadonrx WHERE MONTH(created_at) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) AND YEAR(created_at) = YEAR(CURRENT_DATE)`;

    // Doanh thu hóa đơn rửa xe ngày gần nhất.
    let queryn6 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 6;`;
    let queryn5 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 5;`;
    let queryn4 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 4;`;
    let queryn3 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 3;`;
    let queryn2 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 2;`;
    let queryn1 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 1;`;
    let queryn0 = `SELECT SUM(tongtienrx), COUNT(*) AS sldrx FROM hoadonrx WHERE DATEDIFF(NOW(), created_at) = 0;`;

    sql.query(query, (err, hdrxcd) => {
        sql.query(query2, (err, dtrxn) => {
            sql.query(query3, (err, dtrxt) => {
                sql.query(queryn6, (err, ngayrx6) => {
                    sql.query(queryn5, (err, ngayrx5) => {
                        sql.query(queryn4, (err, ngayrx4) => {
                            sql.query(queryn3, (err, ngayrx3) => {
                                sql.query(queryn2, (err, ngayrx2) => {
                                    sql.query(queryn1, (err, ngayrx1) => {
                                        sql.query(queryn0, (err, ngayrx0) => {
                                            sql.query(query2ago, (err, dtrxnago) => {
                                                sql.query(query3ago, (err, dtrxtago) => {
                                                result(null, hdrxcd, dtrxn ,dtrxnago,dtrxt,dtrxtago, ngayrx6, ngayrx5, ngayrx4, ngayrx3, ngayrx2, ngayrx1, ngayrx0);
                                        
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

// Thống kê trạng thái đơn rửa xe trong tuần.
HoaDonRX.thongkeTT = (result) => {

    // Thống kê trạng thái đơn rửa xe trong tuần.
    let querytt1 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadonrx WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 1);`;
    let querytt2 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadonrx WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 2);`;
    let querytt3 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadonrx WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 3);`;
    let querytt4 = `SELECT COUNT(*) AS SoLuongHoaDon FROM hoadonrx WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 4);`;
  

    sql.query(querytt1, (err, tt1) => {
       sql.query(querytt2, (err, tt2) => {
        sql.query(querytt3, (err, tt3) => {
            sql.query(querytt4, (err, tt4) => {
          
                    result(null, tt1, tt2, tt3, tt4);
             
            });
        });
       });
   });
};

// thống kê số lượng xe đặt rửa xe trong 1 tháng này.
HoaDonRX.thongkeSLXT = (result) => {

    // Số lượng xe ứng với mỗi hóa đơn rửa xe trong tháng này.
    let slxe = `SELECT malx, COUNT(*) AS soluong FROM hoadonrx WHERE MONTH(created_at) = MONTH(CURRENT_DATE()) AND YEAR(created_at) = YEAR(CURRENT_DATE()) GROUP BY malx;`;

    let query = "SELECT * FROM loaixe";
    sql.query(slxe, (err, slxe) => {
       sql.query(query, (err, xe) => {
           result(null, slxe, xe);
       });
   });
};

// Thống kê doanh thu tùy chọn.
HoaDonRX.doanhThuTC = (ngaybatdau, ngayketthuc, thanhtoan, trangthai, result) => {

    const query = `SELECT DATE(created_at) AS date, SUM(tongtienrx) AS tongtienrx FROM hoadonrx WHERE created_at BETWEEN '${ngaybatdau}' AND '${ngayketthuc}' AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY DATE(created_at) ORDER BY DATE(created_at);`

    const query2 = `SELECT DATE(created_at) AS date, SUM(tongtiensp) AS tongtiensp FROM hoadon WHERE created_at BETWEEN '${ngaybatdau}' AND '${ngayketthuc}' AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY DATE(created_at) ORDER BY DATE(created_at);`

    sql.query(query, (err, dtHDRX) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        sql.query(query2, (err, dtHD) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
           
            result(null, dtHDRX, dtHD);
        });
    });
};

// Thống kê doanh thu co dinh theo thang.
HoaDonRX.doanhThuCDT = (thanhtoan, trangthai, result) => {

    const queryhrdx = `SELECT MONTH(created_at) as month_number, SUM(tongtienrx) as tongtienrx FROM hoadonrx WHERE YEAR(created_at) = YEAR(NOW()) AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY MONTH(created_at);`

    const queryhd = `SELECT MONTH(created_at) as month_number, SUM(tongtiensp) as tongtiensp FROM hoadon WHERE YEAR(created_at) = YEAR(NOW()) AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY MONTH(created_at);`

    sql.query(queryhrdx, (err, dtHDRX) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        sql.query(queryhd, (err, dtHD) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
           
            result(null, dtHDRX, dtHD);
        });
    });
};

// Thống kê doanh thu co dinh theo thang.
HoaDonRX.doanhThuCDTuan = (thanhtoan, trangthai, result) => {

    const queryhrdx = `SELECT WEEK(created_at) as week_number, SUM(tongtienrx) as tongtienrx FROM hoadonrx WHERE YEAR(created_at) = YEAR(NOW()) AND MONTH(created_at) = MONTH(NOW()) AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY WEEK(created_at) HAVING week_number >= WEEK(NOW()) - 3;`

    const queryhd = `SELECT WEEK(created_at) as week_number, SUM(tongtiensp) as tongtiensp FROM hoadon WHERE YEAR(created_at) = YEAR(NOW()) AND MONTH(created_at) = MONTH(NOW()) AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY WEEK(created_at) HAVING week_number >= WEEK(NOW()) - 3;`

    sql.query(queryhrdx, (err, dtHDRX) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        sql.query(queryhd, (err, dtHD) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
           
            result(null, dtHDRX, dtHD);
        });
    });
};

//======================= GIAO DIEN KHÁCH HÀNG ======================= 
// Hiển thị hóa đơn rửa xe bên phía khách hàng
HoaDonRX.getAll = (mahdrx, makh,  limit, offset, result) => {
    let query = `SELECT * FROM hoadonrx WHERE makh = ${makh} and matt != 4 LIMIT ${limit} OFFSET ${offset}`;
    
    if (mahdrx) {
        query = `SELECT * FROM hoadonrx WHERE mahdrx LIKE '%${mahdrx}%' and makh = ${makh} and matt != 4 LIMIT ${limit} OFFSET ${offset}`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadonrx: ", res);
        result(null, res);
    });
};

// Kiểm tra xem hôm nay đã đặt lịch quá giới hạn không?
HoaDonRX.checkToDay = (makh, result) => {
    let query = `SELECT COUNT(*) AS CheckToDay FROM hoadonrx WHERE makh = ${makh} and DATE(created_at) = CURDATE() `;
    
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadonrx: ", res);
        result(null, res);
    });
};

HoaDonRX.updateThanhToan = (mahdrx, result) => {
    sql.query(
        "UPDATE hoadonrx SET thanhtoan = ? WHERE mahdrx = ?",
        ['2', mahdrx],
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
            result(null, { mahdrx: mahdrx });
        }
    );
};

// hiển thị lịch sử hóa đơn rửa xe bên phía khách hàng
HoaDonRX.getLSAll = (makh, result) => {
    let query = `SELECT * FROM hoadonrx WHERE makh = ${makh} and matt = 4 and thanhtoan = 2`;
    // if (tenbv) {
    //     query += ` WHERE tenbv LIKE '%${tenbv}%'`;
    // }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadonrx: ", res);
        result(null, res);
    });
};

module.exports = HoaDonRX;