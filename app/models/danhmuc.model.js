const sql = require("./db");

const Danhmuc = function(danhmuc){
    this.tendm = danhmuc.tendm;
    this.hinhdd = danhmuc.hinhdd;
    this.motact = danhmuc.motact;
    this.created_at = danhmuc.created_at;
    this.updated_at = danhmuc.updated_at;
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
        "UPDATE danhmuc SET tendm = ?, hinhdd = ?, motact = ?, updated_at = ? WHERE madm = ?",
        [danhmuc.tendm, danhmuc.hinhdd, danhmuc.motact, new Date() , madm],
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
            result(null, { madm: madm, ...danhmuc });
        }
    );
};

// Updata ảnh đại diện.
Danhmuc.updateADD = (madm, hinhdd,result) => {
    sql.query(
        "UPDATE danhmuc SET hinhdd = ?, updated_at = ? WHERE madm = ?",
        [hinhdd,new Date() ,madm],
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

// Xóa ảnh đại diện
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
        
        result(null, res);
    });
};

module.exports = Danhmuc;