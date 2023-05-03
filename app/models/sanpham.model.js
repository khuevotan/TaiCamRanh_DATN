const sql = require("./db");

const Sanpham = function(sanpham){
    this.masp = sanpham.masp;
    this.tensp = sanpham.tensp;
    this.hinhdd = sanpham.hinhdd;
    this.soluong = sanpham.soluong;
    this.motact = sanpham.motact;
    this.giaban = sanpham.giaban;
    this.ngaydang = sanpham.ngaydang;
    this.madm = sanpham.madm;
    this.mancc = sanpham.mancc;
    this.manv = sanpham.manv;
    this.created_at = sanpham.created_at;
    this.updated_at = sanpham.updated_at;
};

// ======================= GIAO DIỆN ADMIN ======================
Sanpham.create = (newsanpham, result) => {
    sql.query("INSERT INTO sanpham SET ?", newsanpham, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created sanpham: ", { masp: res.insertmasp, ...newsanpham });
        result(null, { masp: res.insertmasp, ...newsanpham });
    });
};

Sanpham.findBymasp = (masp, result) => {
    sql.query(`SELECT * FROM sanpham WHERE masp = ${masp}`, (err, res) => {
        if (err) {
            // console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            // console.log("found sanpham: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found sanpham with the masp
        result({ kind: "not_found" }, null);
    });
};

Sanpham.getAll = (tensp, result) => {
    let query = "SELECT * FROM sanpham";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

Sanpham.remove = (masp, result) => {
    sql.query("DELETE FROM sanpham WHERE masp = ?", masp, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found sanpham with the masp
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted sanpham with masp: ", masp);
        result(null, res);
    });
};

Sanpham.updateBymasp = (masp, sanpham, result) => {
    sql.query(
        "UPDATE sanpham SET tensp = ?, soluong = ?, motact = ? , giaban = ?, madm = ? , manv = ?, updated_at = ? WHERE masp = ?",
        [sanpham.tensp , sanpham.soluong, sanpham.motact , sanpham.giaban, sanpham.madm, sanpham.manv, new Date(),masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found sanpham with the masp
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated sanpham: ", { masp: masp, ...sanpham });
            result(null, { masp: masp, ...sanpham });
        }
    );
};

// update ảnh đại diện sản phẩm
Sanpham.updateADD = (masp, hinhdd, result) => {
    sql.query(
        "UPDATE sanpham SET hinhdd = ? WHERE masp = ?",
        [hinhdd, masp],
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
            result(null, { masp: masp, hinhdd: hinhdd });
        }
    );
};

// ======================= GIAO DIỆN KHÁCH HÀNG ======================
// Hiển thị sản phẩm bên khánh hàng
Sanpham.getAllKH = (tensp, limit, offset, result) => {
    let query = `SELECT * FROM sanpham LIMIT ${limit} OFFSET ${offset}`;
    if (tensp) {
        query = `SELECT * FROM sanpham WHERE tensp LIKE '%${tensp}%' LIMIT ${limit} OFFSET ${offset}`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
     
        result(null, res);
    });
};

// Hiển thị sản phẩm theo danh mục bên phía khách hàng
Sanpham.getAllKHdmsp = (madm, result) => {
    let query = `SELECT * FROM sanpham WHERE madm = ${madm} `;
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("sanpham: ", res);
        result(null, res);
    });
};




module.exports = Sanpham;