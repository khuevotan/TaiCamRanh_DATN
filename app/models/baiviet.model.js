const sql = require("./db")

const Baiviet = function (baiviet) {
    this.mabv = baiviet.mabv;
    this.tenbv = baiviet.tenbv;
    this.motangan = baiviet.motangan;
    this.noidung = baiviet.noidung;
    this.hinhdd = baiviet.hinhdd;
    this.manv = baiviet.manv;
    this.created_at = baiviet.created_at;
    this.updated_at = baiviet.updated_at;
};

// Tạo một bài viết mới.
// Baiviet.create = (newbaiviet, result) => {
//     sql.query("INSERT INTO baiviet SET ?", newbaiviet, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         result(null, { mabv: res.insertmabv, ...newbaiviet });
//     });
// };

Baiviet.create = (newbaiviet) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO baiviet SET ?", newbaiviet, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve({
                    mabv: res.insertmabv,
                    ...newbaiviet
                });
            }
        });
    });
};


// Tìm một bài viết bằng mabv
Baiviet.findBymabv = (mabv, result) => {    
    sql.query(`SELECT * FROM baiviet WHERE mabv = ${mabv}`, (err, res) => {
        if (err) {
         
            result(err, null);
            return;
        }
        if (res.length) {
        
            result(null, res[0]);
            return;
        }
        // not found baiviet with the madm
        result({ kind: "not_found" }, null);
    });
};

// Hiển thị bài viết bên phía khách hàng
Baiviet.getAllKH = (tenbv, limit, offset, result) => {
    let query = `SELECT * FROM baiviet ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset} `;
   
    if (tenbv) {
        query = `SELECT * FROM baiviet WHERE tenbv LIKE '%${tenbv}%' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
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

// Hiển thị 5 bài viết mới nhất bên phía khách hàng.
Baiviet.getNew = (result) => {
    let query = `SELECT * FROM baiviet ORDER BY created_at DESC LIMIT 5`;
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};


// Hiển thị bài viết bên phía admin
Baiviet.getAllAD = (result) => {
    let query = "SELECT * FROM baiviet";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        result(null, res);
    });
};

// Cập nhật bài viết tin tức bên phía admin.
Baiviet.updateBymabv = (mabv, baiviet, result) => {
    sql.query(
        "UPDATE baiviet SET tenbv = ?, motangan = ?, noidung = ?, updated_at = ? WHERE mabv = ?",
        [baiviet.tenbv, baiviet.motangan, baiviet.noidung, new Date(), mabv],
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
                mabv: mabv,
                ...baiviet
            });
        }
    );
};

// Xóa bài viết
Baiviet.remove = (mabv, result) => {
    sql.query("DELETE FROM baiviet WHERE mabv = ?", mabv, (err, res) => {
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
        console.log("deleted baiviet with mabv: ", mabv);
        result(null, res);
    });
};

// Update ảnh đại diện bài viết
Baiviet.updateADD = (mabv, hinhdd, result) => {
    sql.query(
        "UPDATE baiviet SET hinhdd = ?, updated_at = ? WHERE mabv = ?",
        [hinhdd,new Date(), mabv],
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
                mabv: mabv,
                hinhdd: hinhdd
            });
        }
    );
};

module.exports = Baiviet;