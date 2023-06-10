const sql = require("./db")

const LoaiXe = function(loaixe){
    this.malx = loaixe.malx;
    this.tenlx = loaixe.tenlx;
    this.gia = loaixe.gia;
    this.tinhtrang = loaixe.tinhtrang;
    this.created_at = loaixe.created_at;
    this.updated_at = loaixe.updated_at;
};

// Tạo một loại xe mới.
LoaiXe.create = (newloaixe, result) => {
    sql.query("INSERT INTO loaixe SET ?", newloaixe, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created loaixe: ", { malx: res.insertmalx, ...newloaixe });
        result(null, { malx: res.insertmalx,...newloaixe });
    });
};

// Tìm kiếm loại xe.
LoaiXe.findBymalx = (malx, result) => {
    sql.query(`SELECT * FROM loaixe WHERE malx = ${malx}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            // console.log("found loaixe: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found loaixe with the malx
        result({ kind: "not_found" }, null);
    });
};

// Hiển thị danh sách loại xe rửa.
LoaiXe.getAll = (result) => {
    let query = "SELECT * FROM loaixe WHERE tinhtrang = 1";
 
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// Cập nhật loại xe rửa bằng mã loại xe.
LoaiXe.updateBymalx = (malx, loaixe, result) => {
    sql.query(
        "UPDATE loaixe SET tenlx = ?, gia = ?, updated_at = ? WHERE malx = ?",
        [loaixe.tenlx, loaixe.gia, new Date(), malx],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found loaixe with the malx
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { malx: malx, ...loaixe });
        }
    );
};

// Xóa loại xe.
LoaiXe.remove = (malx, result) => {
    sql.query(
        "UPDATE loaixe SET tinhtrang = ?, updated_at = ? WHERE malx = ?",
        [2, new Date(), malx],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found loaixe with the malx
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { malx: malx });
        }
    );
};

module.exports = LoaiXe;