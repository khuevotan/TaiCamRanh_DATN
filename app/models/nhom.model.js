const sql = require("./db");

const Nhom = function(nhom){
    this.tennhom = nhom.tennhom;
};

Nhom.create = (newnhom, result) => {
    sql.query("INSERT INTO nhom SET ?", newnhom, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created nhom: ", { manhom: res.insertmanhom, ...newnhom });
        result(null, { manhom: res.insertmanhom, ...newnhom });
    });
};

Nhom.findByNhom = (manhom, result) => {
    sql.query(`SELECT * FROM nhom WHERE manhom = ${manhom}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found nhom: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found nhom with the manhom
        result({ kind: "not_found" }, null);
    });
};

Nhom.getAll = (tennhom, result) => {
    let query = "SELECT * FROM nhom";
    if (tennhom) {
        query += ` WHERE tennhom LIKE '%${tennhom}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("nhom: ", res);
        result(null, res);
    });
};

Nhom.updateBymanhom = (manhom, nhom, result) => {
    sql.query(
        "UPDATE nhom SET tennhom = ?, hinhdd = ?, motact = ? WHERE manhom = ?",
        [nhom.tennhom, nhom.hinhdd, nhom.motact , manhom],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found nhom with the manhom
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated nhom: ", { manhom: manhom, ...nhom });
            result(null, { manhom: manhom, ...nhom });
        }
    );
};

Nhom.remove = (manhom, result) => {
    sql.query("DELETE FROM nhom WHERE manhom = ?", manhom, (err, res) => {

        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found nhom with the manhom
            result({ kind: "not_found" }, null);
            return;
        }
        
        console.log("deleted nhom with manhom: ", manhom);
        result(null, res);
    });
};

module.exports = Nhom;