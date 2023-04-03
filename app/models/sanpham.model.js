const sql = require("./db");

const Sanpham = function(sanpham){
    this.masp = sanpham.masp;
    this.tensp = sanpham.tensp;
    this.hinhdd = sanpham.hinhdd;
    this.soluong = sanpham.soluong;
    this.motact = sanpham.motact;
    this.giaban = sanpham.giaban;
    this.phobien = sanpham.phobien;
    this.ngaydang = sanpham.ngaydang;
    this.madm = sanpham.madm;
};

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
    console.log("khue==================================");
    console.log(masp);
    sql.query(`SELECT * FROM sanpham WHERE masp = ${masp}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found sanpham: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found sanpham with the masp
        result({ kind: "not_found" }, null);
    });
};


Sanpham.getAll = (tensp, result) => {
    let query = "SELECT * FROM sanpham";
    if (tensp) {
        query += ` WHERE tensp LIKE '%${tensp}%'`;
    }
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

// hiển thị sản phẩm bên khánh hàng
Sanpham.getAllKH = (tensp, result) => {
    let query = "SELECT * FROM sanpham ";
    if (tensp) {
        query += ` WHERE tensp LIKE '%${tensp}%'`;
    }
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

//hiển thị sản phẩm theo danh mục bên phía khách hàng
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

Sanpham.updateBymasp = (masp, sanpham, result) => {
    sql.query(
        "UPDATE sanpham SET tensp = ?, hinhdd = ?, hinhdd = ?, soluong = ? , motact = ? WHERE masp = ?",
        [sanpham.tensp, sanpham.hinhdd , sanpham.hinhdd, sanpham.soluong , sanpham.motact,  masp],
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

Sanpham.removeAll = result => {
    sql.query("DELETE FROM sanpham", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} sanpham`);
        result(null, res);
    });
};



module.exports = Sanpham;