const sql = require("./db")

const Baiviet = function(baiviet){
    this.mabv = baiviet.mabv;
    this.tenbv = baiviet.tenbv;
    this.mota = baiviet.mota;
    this.noidung = baiviet.noidung;
    this.hinhdd = baiviet.hinhdd;
    this.ngaydang = baiviet.ngaydang;
    this.manv = baiviet.manv;
};



Baiviet.create = (newbaiviet, result) => {
    sql.query("INSERT INTO baiviet SET ?", newbaiviet, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created baiviet: ", { mabv: res.insertmabv, ...newbaiviet });
        result(null, { mabv: res.insertmabv, ...newbaiviet });
    });
};

Baiviet.findBymabv = (mabv, result) => {
    sql.query(`SELECT * FROM baiviet WHERE mabv = ${mabv}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found baiviet: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found baiviet with the mabv
        result({ kind: "not_found" }, null);
    });
};

// hiển thị bài viết bên phía khách hàng
Baiviet.getAllKH = (tenbv, limit, offset,result) => {
    let query = `SELECT * FROM baiviet LIMIT ${limit} OFFSET ${offset}`;
    if (tenbv) {
        query = `SELECT * FROM baiviet WHERE tenbv LIKE '%${tenbv}%' LIMIT ${limit} OFFSET ${offset}`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("baiviet: ", res);
        result(null, res);
    });
};

// hiển thị bài viết bên phía admin
// Baiviet.getAllAD = (tenbv, result) => {
//     let query = "SELECT * FROM baiviet";
//     if (tenbv) {
//         query += ` WHERE tenbv LIKE '%${tenbv}%'`;
//     }
//     sql.query(query, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//         console.log("baiviet: ", res);
//         result(null, res);
//     });
// };


Baiviet.updateBymabv = (mabv, baiviet, result) => {
    sql.query(
        "UPDATE baiviet SET tenbv = ?, noidung = ?, hinhdd = ?, hinhdd = ? , ngaydang = ? WHERE mabv = ?",
        [baiviet.tenbv, baiviet.noidung , baiviet.hinhdd, baiviet.hinhdd , baiviet.ngaydang,  mabv],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found baiviet with the mabv
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated baiviet: ", { mabv: mabv, ...baiviet });
            result(null, { mabv: mabv, ...baiviet });
        }
    );
};

Baiviet.remove = (mabv, result) => {
    sql.query("DELETE FROM baiviet WHERE mabv = ?", mabv, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found baiviet with the mabv
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted baiviet with mabv: ", mabv);
        result(null, res);
    });
};

Baiviet.removeAll = result => {
    sql.query("DELETE FROM baiviet", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} baiviet`);
        result(null, res);
    });
};

module.exports = Baiviet;