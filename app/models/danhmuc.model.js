const sql = require("./db");

const Danhmuc = function(danhmuc){
    this.tendm = danhmuc.tendm;
    this.hinhdd = danhmuc.hinhdd;
    this.motact = danhmuc.motact;
};

Danhmuc.create = (newDanhmuc, result) => {
    sql.query("INSERT INTO danhmuc SET ?", newDanhmuc, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created danhmuc: ", { madm: res.insertmadm, ...newDanhmuc });
        result(null, { madm: res.insertmadm, ...newDanhmuc });
    });
};

Danhmuc.findByMaDM = (madm, result) => {
    sql.query(`SELECT * FROM danhmuc WHERE madm = ${madm}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found danhmuc: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found danhmuc with the madm
        result({ kind: "not_found" }, null);
    });
};

Danhmuc.getAll = (tendm, result) => {
    let query = "SELECT * FROM danhmuc";
    if (tendm) {
        query += ` WHERE tendm LIKE '%${tendm}%'`;
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

Danhmuc.updateBymadm = (madm, danhmuc, result) => {
    sql.query(
        "UPDATE danhmuc SET tendm = ?, hinhdd = ?, motact = ? WHERE madm = ?",
        [danhmuc.tendm, danhmuc.hinhdd, danhmuc.motact , madm],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found danhmuc with the madm
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated danhmuc: ", { madm: madm, ...danhmuc });
            result(null, { madm: madm, ...danhmuc });
        }
    );
};

Danhmuc.updateADD = (madm, hinhdd, result) => {
    sql.query(
        "UPDATE danhmuc SET hinhdd = ? WHERE madm = ?",
        [hinhdd, madm],
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
            result(null, { madm: madm, hinhdd: hinhdd });
        }
    );
};

Danhmuc.remove = (madm, result) => {
    sql.query("DELETE FROM danhmuc WHERE madm = ?", madm, (err, res) => {

        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found danhmuc with the madm
            result({ kind: "not_found" }, null);
            return;
        }
        
        console.log("deleted danhmuc with madm: ", madm);
        result(null, res);
    });
};


module.exports = Danhmuc;