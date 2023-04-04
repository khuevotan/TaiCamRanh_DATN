const sql = require("./db")

const CTHoaDon = function(cthoadon){
    this.mahd  = cthoadon.mahd;
    this.masp = cthoadon.masp;
    this.soluong = cthoadon.soluong;
    this.giatien = cthoadon.giatien;
};

// Tạo đơn rửa xe
CTHoaDon.create = (newcthoadon, result) => {
    sql.query("INSERT INTO cthoadon SET ?", newcthoadon, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created cthoadon: ", {  ...newcthoadon });
        result(null, { ...newcthoadon });
    });
};

//tìm kiếm 1 hóa đơn bằng mã đơn hàng
CTHoaDon.findBymahd = (mahd, result) => { 
    sql.query(`SELECT * FROM cthoadon WHERE mahd = '${mahd}'`, (err, res) => {
        
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found cthoadon: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found cthoadon with the mahd
        result({ kind: "not_found" }, null);
    });
};

// hiển thị hóa đơn rửa xe bên phía khách hàng
CTHoaDon.getAll = (makh, result) => {
    let query = `SELECT * FROM cthoadon WHERE makh = ${makh} and matt != 4`;
    // if (tenbv) {
    //     query += ` WHERE tenbv LIKE '%${tenbv}%'`;
    // }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("cthoadon: ", res);
        result(null, res);
    });
};


CTHoaDon.updateBymahd = (mahd, cthoadon, result) => {
    sql.query(
        "UPDATE cthoadon SET tenbv = ?, noidung = ?, hinhdd = ?, hinhdd = ? , ngaydang = ? WHERE mahd = ?",
        [cthoadon.tenbv, cthoadon.noidung , cthoadon.hinhdd, cthoadon.hinhdd , cthoadon.ngaydang,  mahd],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found cthoadon with the mahd
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated cthoadon: ", { mahd: mahd, ...cthoadon });
            result(null, { mahd: mahd, ...cthoadon });
        }
    );
};

CTHoaDon.remove = (mahd, result) => {
    sql.query("DELETE FROM cthoadon WHERE mahd = ?", mahd, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found cthoadon with the mahd
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted cthoadon with mahd: ", mahd);
        result(null, res);
    });
};

CTHoaDon.removeAll = result => {
    sql.query("DELETE FROM cthoadon", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} cthoadon`);
        result(null, res);
    });
};

module.exports = CTHoaDon;