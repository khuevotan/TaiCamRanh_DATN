const sql = require("./db")

const HoaDon = function (hoadon) {
    this.mahd = hoadon.mahd;
    this.tennguoinhan = hoadon.tennguoinhan;
    this.sodt = hoadon.sodt;
    this.diachi = hoadon.diachi;
    this.ghichu = hoadon.ghichu;
    this.tongtiensp = hoadon.tongtiensp;
    this.tongtienhd = hoadon.tongtienhd;
    this.thanhtoan = hoadon.thanhtoan;
    this.ptthanhtoan = hoadon.ptthanhtoan;
    this.maps = hoadon.maps;
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

// Tìm kiếm 1 hóa đơn bằng mã đơn hàng.
HoaDon.findBymahd = (mahd, result) => {
    sql.query(`SELECT * FROM hoadon WHERE mahd  = '${mahd }'`, (err, res) => {

        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {

            result(null, res[0]);
            return;
        }
        // not found hoadon with the mahd 
        result({
            kind: "not_found"
        }, null);
    });
};

// Cập nhật hóa đơn bằng mã hóa đơn.
HoaDon.updateBymahd = (mahd, hoadon, result) => {
    sql.query(
        "UPDATE hoadon SET tennguoinhan = ? , sodt = ?, diachi = ? , ghichu = ? , ptthanhtoan = ?,  tongtienhd = ? ,manv = ?, updated_at = ?  WHERE mahd  = ?",
        [hoadon.tennguoinhan, hoadon.sodt, hoadon.diachi, hoadon.ghichu, hoadon.ptthanhtoan, hoadon.tongtienhd, hoadon.manv, new Date(), mahd],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadon with the mahd 
                result({
                    kind: "not_found"
                }, null);
                return;
            }
            console.log("updated hoadon: ", {
                mahd: mahd,
                ...hoadon
            });
            result(null, {
                mahd: mahd,
                ...hoadon
            });
        }
    );
};

// Update Fast
HoaDon.updateFastByMaHD = (mahd, hoadon, result) => {
    sql.query(
        "UPDATE hoadon SET  thanhtoan = ?, matt = ? ,manv = ?, updated_at = ?  WHERE mahd  = ?",
        [hoadon.thanhtoan, hoadon.matt, hoadon.manv, new Date(), mahd],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadon with the mahd 
                result({
                    kind: "not_found"
                }, null);
                return;
            }
            console.log("updated hoadon: ", {
                mahd: mahd,
                ...hoadon
            });
            result(null, {
                mahd: mahd,
                ...hoadon
            });
        }
    );
};

// Xóa hóa đơn.
HoaDon.remove = (mahd, result) => {
    sql.query("DELETE FROM hoadon WHERE mahd  = ?", mahd, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found hoadon with the mahd 
            result({
                kind: "not_found"
            }, null);
            return;
        }
        console.log("deleted hoadon with mahd : ", mahd);
        result(null, res);
    });
};

//======================= THỐNG KÊ ======================= 
// Thống kê đơn giản khi admin đăng nhập vào.
HoaDon.thongKeDG = (result) => {
    // Số lượng hóa đơn chưa được duyệt.
    let query = `SELECT COUNT(*) FROM hoadon WHERE matt = 1`;

    // Doanh thu hóa đơn đặt hàng ngày hôm nay.
    let query2 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienHDHN FROM hoadon WHERE DATE(created_at) = CURDATE()`;

    // Doanh thu hóa đơn đặt hàng ngày hôm qua.
    let query2ago = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienHDHQ FROM hoadon WHERE DATE(created_at) = DATE(CURRENT_DATE - INTERVAL 1 DAY)`;

    // Doanh thu hóa đơn đặt hàng tháng này.
    let query3 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienHDTN FROM hoadon WHERE MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())`;

    // Doanh thu hóa đơn đặt hàng tháng trước.
    let query3ago = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienHDTT FROM hoadon WHERE MONTH(created_at) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) AND YEAR(created_at) = YEAR(CURRENT_DATE)`;

    // Doanh thu hóa đơn đặt hàng 7 ngày gần nhất.
    let queryn6 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN6, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 6;`;
    let queryn5 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN5, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 5;`;
    let queryn4 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN4, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 4;`;
    let queryn3 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN3, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 3;`;
    let queryn2 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN2, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 2;`;
    let queryn1 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN1, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 1;`;
    let queryn0 = `SELECT IFNULL(SUM(tongtienhd), 0) as TongTienN0, COUNT(*) AS sldh FROM hoadon WHERE DATEDIFF(NOW(), created_at) = 0;`;

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
                                                    result(null, res1, res2, ngay2ago, res3, ngay3ago, ngay6, ngay5, ngay4, ngay3, ngay2, ngay1, ngay0);
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

// Tình Trạng Đơn Hàng 7 Ngày Qua.
HoaDon.thongkeTT = (result) => {

    // Thống kê trạng thái đơn rửa xe trong tuần.
    let querytt1 = `SELECT COUNT(*) AS SoLuongDHTT1 FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 1);`;
    let querytt2 = `SELECT COUNT(*) AS SoLuongDHTT2 FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 2);`;
    let querytt3 = `SELECT COUNT(*) AS SoLuongDHTT3 FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 3);`;
    let querytt4 = `SELECT COUNT(*) AS SoLuongDHTT4 FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 4);`;
    let querytt5 = `SELECT COUNT(*) AS SoLuongDHTT5 FROM hoadon WHERE (created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AND (matt = 5);`;

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

// Thống kê top 3 sản phẩm có số lượng bán chạy trong tháng.
HoaDon.sanPhamBanChayTrongThang = (result) => {

    // Số lượng xe ứng với mỗi hóa đơn rửa xe trong tháng này.
    let query = `SELECT sanpham.tensp, cthoadon.masp, SUM(cthoadon.soluong) AS soluongln FROM cthoadon INNER JOIN hoadon ON cthoadon.mahd = hoadon.mahd INNER JOIN sanpham ON cthoadon.masp = sanpham.masp WHERE MONTH(hoadon.created_at) = MONTH(CURDATE()) AND YEAR(hoadon.created_at) = YEAR(CURDATE()) GROUP BY cthoadon.masp ORDER BY soluongln DESC LIMIT 3;`;

    sql.query(query, (err, sanpham) => {
        result(null, sanpham);
    });

};

//======================= GIAO DIEN KHÁCH HÀNG ======================= 

// Tạo đơn đặt hàng
HoaDon.create = (newhoadon, result) => {
    sql.query("INSERT INTO hoadon SET ?", newhoadon, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created hoadon: ", {
            ...newhoadon
        });
        result(null, {
            ...newhoadon
        });
    });
};

// Hiển thị lịch sử hóa đơn đặt hàng bên phía khách hàng
HoaDon.getLSAll = (mahd, makh, limit, offset, result) => {

    let query = `SELECT * FROM hoadon WHERE makh = ${makh} and matt = 4 and thanhtoan = 2 ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;

    if (mahd) {
        query = `SELECT * FROM hoadon WHERE mahd LIKE '%${mahd}%' and makh = ${makh} and matt = 4 and thanhtoan = 2  ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
    }

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


HoaDon.updateBymahdwitdtongtien = (mahd, tongtiensp, tongtienhd, result) => {
    sql.query(
        "UPDATE hoadon SET  tongtiensp = ?, tongtienhd = ? ,updated_at = ?  WHERE mahd  = ?",
        [tongtiensp, tongtienhd, new Date(), mahd],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadon with the mahd 
                result({
                    kind: "not_found"
                }, null);
                return;
            }
            result(null, {
                mahd: mahd
            });
        }
    );
};

// Kiểm tra xem hôm nay đã đặt lịch quá giới hạn không?
HoaDon.checkToDay = (makh, result) => {
    let query = `SELECT COUNT(*) AS CheckToDay FROM hoadon WHERE makh = ${makh} and DATE(created_at) = CURDATE() `;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Hiển thị hóa đơn rửa xe bên phía khách hàng
HoaDon.getAll = (mahd, makh, limit, offset, result) => {

    let query = `SELECT * FROM hoadon WHERE makh = ${makh} and matt != 4 ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;

    if (mahd) {
        query = `SELECT * FROM hoadon WHERE mahd LIKE '%${mahd}%' and makh = ${makh} and matt != 4  ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
    }

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

// Cập nhật thanh toán đơn hàng bên phía khách hàng.
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
                result({
                    kind: "not_found"
                }, null);
                return;
            }
            result(null, {
                mahd: mahd
            });
        }
    );
};

module.exports = HoaDon;