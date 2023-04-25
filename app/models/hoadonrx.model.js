const sql = require("./db")

const HoaDonRX = function(hoadonrx){
    this.mahdrx  = hoadonrx.mahdrx;
    this.tennguoidat = hoadonrx.tennguoidat;
    this.ngaydat = hoadonrx.ngaydat;
    this.ngayrua = hoadonrx.ngayrua;
    this.magio = hoadonrx.magio;
    this.sodt = hoadonrx.sodt;
    this.diachi = hoadonrx.diachi;
    this.ghichu = hoadonrx.ghichu;
    this.tongtienrx = hoadonrx.tongtienrx;
    this.thanhtoan = hoadonrx.thanhtoan;
    this.malx = hoadonrx.malx;
    this.matt = hoadonrx.matt;
    this.manv = hoadonrx.manv;
    this.makh = hoadonrx.makh;
};

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

// hiển thị hóa đơn rửa xe bên phía admin
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

//tìm kiếm 1 hóa đơn bằng mã đơn hàng
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

// hiển thị hóa đơn rửa xe bên phía khách hàng
HoaDonRX.getAll = (makh, result) => {
    let query = `SELECT * FROM hoadonrx WHERE makh = ${makh} and matt != 4`;
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

// cập nhật thanh toán hóa đơn
// HoaDonRX.updateBymahdrx = (mahdrx, result) => {
//     sql.query(
//         `UPDATE hoadonrx SET thanhtoan = 2 where mahdrx = ${mahdrx}`,
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }
//             if (res.affectedRows == 0) {
//                 // not found hoadonrx with the mahdrx
//                 result({ kind: "not_found" }, null);
//                 return;
//             }
//             result(null, { mahdrx: mahdrx});
//         }
//     );
// };

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

HoaDonRX.updateBymahdrx = (mahdrx, hoadonrx, result) => {
    sql.query(
        "UPDATE hoadonrx SET tennguoidat = ?, ngaydat = ?, ngayrua = ?, magio = ? , sodt = ? , diachi = ? , ghichu = ? , tongtienrx = ? , thanhtoan = ? , malx = ? , matt = ? , manv = ? , makh = ? WHERE mahdrx = ?",
        [hoadonrx.tennguoidat, hoadonrx.ngaydat , hoadonrx.ngayrua, hoadonrx.magio , hoadonrx.sodt,  hoadonrx.diachi,hoadonrx.ghichu,hoadonrx.tongtienrx,hoadonrx.thanhtoan,hoadonrx.malx,hoadonrx.matt, hoadonrx.manv, hoadonrx.makh, mahdrx],
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

// Thống kê đơn giản khi admin đăng nhập vào.
HoaDonRX.thongKeDG = (result) => {
    
    // Số lượng hóa đơn rửa xe chưa được duyệt.
    let query = `SELECT COUNT(*) FROM hoadonrx WHERE matt = 1`;

    // Doanh thu hóa đơn rửa xe ngày hôm nay.
    let query2 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATE(ngaydat) = CURDATE()`;

    // Doanh thu hóa đơn rửa xe tháng này.
    let query3 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE MONTH(ngaydat) = MONTH(CURDATE()) AND YEAR(ngaydat) = YEAR(CURDATE())`;

    // Doanh thu hóa đơn rửa xe ngày gần nhất.
    let queryn6 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 6;`;
    let queryn5 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 5;`;
    let queryn4 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 4;`;
    let queryn3 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 3;`;
    let queryn2 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 2;`;
    let queryn1 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 1;`;
    let queryn0 = `SELECT SUM(tongtienrx) FROM hoadonrx WHERE DATEDIFF(NOW(), ngaydat) = 0;`;

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
                                            result(null, hdrxcd, dtrxn , dtrxt, ngayrx6, ngayrx5, ngayrx4, ngayrx3, ngayrx2, ngayrx1, ngayrx0);
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

// thống kê số lượng xe đặt rửa xe trong 1 tháng này.
HoaDonRX.thongkeSLXT = (result) => {

    // Số lượng xe ứng với mỗi hóa đơn rửa xe trong tháng này.
    let slxe = `SELECT malx, COUNT(*) AS soluong FROM hoadonrx WHERE MONTH(ngaydat) = MONTH(CURRENT_DATE()) AND YEAR(ngaydat) = YEAR(CURRENT_DATE()) GROUP BY malx;`;

    let query = "SELECT * FROM loaixe";
    sql.query(slxe, (err, slxe) => {
       sql.query(query, (err, xe) => {
           result(null, slxe, xe);
       });
   });
};

// Thống kê doanh thu tùy chọn.
HoaDonRX.doanhThuTC = (ngaybatdau, ngayketthuc, thanhtoan, trangthai, result) => {

    const query = `SELECT DATE(ngaydat) AS date, SUM(tongtienrx) AS tongtienrx FROM hoadonrx WHERE ngaydat BETWEEN '${ngaybatdau}' AND '${ngayketthuc}' AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY DATE(ngaydat) ORDER BY DATE(ngaydat);`

    const query2 = `SELECT DATE(ngaydat) AS date, SUM(tongtiensp) AS tongtiensp FROM hoadon WHERE ngaydat BETWEEN '${ngaybatdau}' AND '${ngayketthuc}' AND thanhtoan = ${thanhtoan} AND matt =  ${trangthai} GROUP BY DATE(ngaydat) ORDER BY DATE(ngaydat);`

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



module.exports = HoaDonRX;