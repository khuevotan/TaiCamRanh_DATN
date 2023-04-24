const sql = require("./db")

const HoaDon = function(hoadon){
    this.mahd   = hoadon.mahd ;
    this.ngaydat = hoadon.ngaydat;
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
};

// Hiển thị hóa đơn đặt hàng bên phía admin.
HoaDon.getAllAD = (tenhd,result) => {
    let query = "SELECT * FROM hoadon";
    if (tenhd) {
        query += ` WHERE tenhd LIKE '%${tenhd}%'`;
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

// hiển thị hóa đơn rửa xe bên phía khách hàng
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

// Thống kê
// HoaDon.Where(x => x.matt == "1" ).Count();
// Số lượng hóa đơn đặt hàng chưa duyệt
HoaDon.getAllChuaDuyet = (result) => {
    let query = `SELECT COUNT(*) FROM hoadon WHERE matt = 1`;

    let query2 = `SELECT COUNT(*) FROM hoadon WHERE matt = 2`;

    sql.query(query, (err, res1) => {
        sql.query(query2, (err, res2) => {
            result(null, res1, res2);
        });
    });

   
};

// Doanh thu ngày hôm nay
HoaDon.doanhThuNgayHN = (result) => {
    let query = `SELECT SUM(tongtiensp) FROM hoadon WHERE DATE(ngaydat) = CURDATE()`;
    sql.query(query, (err, res) => {
        result(null, res);
    });
};

// Doanh thu tháng này
HoaDon.doanhThuThangNay = (result) => {
    let query = `SELECT SUM(tongtiensp) FROM hoadon WHERE MONTH(ngaydat) = MONTH(CURDATE()) AND YEAR(ngaydat) = YEAR(CURDATE())`;
    sql.query(query, (err, res) => {
        result(null, res);
    });
};


HoaDon.dtTungNgay = (result) => {
    let query6 = `SELECT SUM(tongtiensp) FROM hoadon WHERE DATEDIFF(NOW(), ngaydat) = 6;`;
  
   
    sql.query(query6, (err, res) => {
            result(null, res);
    });
};



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

// hiển thị lịch sử hóa đơn đặt hàng bên phía khách hàng
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

HoaDon.updateBymahd  = (mahd , hoadon, result) => {
    sql.query(
        "UPDATE hoadon SET tennguoinhan = ?, ngaygiao = ?, sodt = ?, diachi = ? , ghichu = ? ,  thanhtoan = ? , matt = ? , manv = ?  WHERE mahd  = ?",
        [hoadon.tennguoinhan, hoadon.ngaygiao , hoadon.sodt, hoadon.diachi , hoadon.ghichu,  hoadon.thanhtoan,  hoadon.matt , hoadon.manv,  mahd ],
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

HoaDon.removeAll = result => {
    sql.query("DELETE FROM hoadon", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} hoadon`);
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