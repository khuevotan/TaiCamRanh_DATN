const sql = require("./db")

const LoaiXe = function(loaixe){
    this.malx = loaixe.malx;
    this.tenlx = loaixe.tenlx;
    this.gia = loaixe.gia;
};

LoaiXe.create = (newloaixe, result) => {
    sql.query("INSERT INTO loaixe SET ?", newloaixe, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created loaixe: ", { malx: res.insertmalx, ...newloaixe });
        result(null, { malx: res.insertmalx, ...newloaixe });
    });
};

LoaiXe.findBymalx = (malx, result) => {
    sql.query(`SELECT * FROM loaixe WHERE malx = ${malx}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found loaixe: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found loaixe with the malx
        result({ kind: "not_found" }, null);
    });
};

LoaiXe.getAll = (tenlx, result) => {
    let query = "SELECT * FROM loaixe";
    if (tenlx) {
        query += ` WHERE tenlx LIKE '%${tenlx}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("loaixe: ", res);
        result(null, res);
    });
};

LoaiXe.updateBymalx = (malx, loaixe, result) => {
    sql.query(
        "UPDATE loaixe SET tenlx = ?, noidung = ?, hinhdd = ?, hinhdd = ? , ngaydang = ? WHERE malx = ?",
        [loaixe.tenlx, loaixe.noidung , loaixe.hinhdd, loaixe.hinhdd , loaixe.ngaydang,  malx],
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
            console.log("updated loaixe: ", { malx: malx, ...loaixe });
            result(null, { malx: malx, ...loaixe });
        }
    );
};

LoaiXe.remove = (malx, result) => {
    sql.query("DELETE FROM loaixe WHERE malx = ?", malx, (err, res) => {
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
        console.log("deleted loaixe with malx: ", malx);
        result(null, res);
    });
};

LoaiXe.removeAll = result => {
    sql.query("DELETE FROM loaixe", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} loaixe`);
        result(null, res);
    });
};

module.exports = LoaiXe;