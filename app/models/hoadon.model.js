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

HoaDon.updateBymahd  = (mahd , hoadon, result) => {
    sql.query(
        "UPDATE hoadon SET tenbv = ?, noidung = ?, hinhdd = ?, hinhdd = ? , ngaydang = ? WHERE mahd  = ?",
        [hoadon.tenbv, hoadon.noidung , hoadon.hinhdd, hoadon.hinhdd , hoadon.ngaydang,  mahd ],
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