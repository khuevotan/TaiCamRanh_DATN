const sql = require("./db");

const Dichvu = function(dichvu){
    this.tendv = dichvu.tendv;
    this.thoigian = dichvu.thoigian;
    this.motact = dichvu.motact;
    this.giatien = dichvu.giatien;
};

Dichvu.create = (newDichvu, result) => {
    sql.query("INSERT INTO dichvu SET ?", newDichvu, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created dichvu: ", { madv: res.insertmadv, ...newDichvu });
        result(null, { madv: res.insertmadv, ...newDichvu });
    });
};

Dichvu.findBymadv = (madv, result) => {
    sql.query(`SELECT * FROM dichvu WHERE madv = ${madv}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found dichvu: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found dichvu with the madv
        result({ kind: "not_found" }, null);
    });
};

Dichvu.getAll = (tendv, result) => {
    let query = "SELECT * FROM dichvu";
    if (tendv) {
        query += ` WHERE tendv LIKE '%${tendv}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("dichvu: ", res);
        result(null, res);
    });
};

Dichvu.updateBymadv = (madv, dichvu, result) => {
    sql.query(
        "UPDATE dichvu SET tendv = ?, thoigian = ?, hinhdd = ?, motact = ? , giatien = ? WHERE madv = ?",
        [dichvu.tendv, dichvu.thoigian , dichvu.hinhdd, dichvu.motact , dichvu.giatien,  madv],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found dichvu with the madv
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated dichvu: ", { madv: madv, ...dichvu });
            result(null, { madv: madv, ...dichvu });
        }
    );
};

Dichvu.remove = (madv, result) => {
    sql.query("DELETE FROM dichvu WHERE madv = ?", madv, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found dichvu with the madv
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted dichvu with madv: ", madv);
        result(null, res);
    });
};

Dichvu.removeAll = result => {
    sql.query("DELETE FROM dichvu", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} dichvu`);
        result(null, res);
    });
};

module.exports = Dichvu;