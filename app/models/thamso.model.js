const sql = require("./db")

const ThamSo = function(thamso){
    this.mats = thamso.mats;
    this.tents = thamso.tents;
    this.giatri = thamso.giatri;
    this.chuthich = thamso.chuthich;
    this.created_at = thamso.created_at;
    this.updated_at = thamso.updated_at;
};

ThamSo.create = (newthamso, result) => {
    sql.query("INSERT INTO thamso SET ?", newthamso, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created thamso: ", { mats: res.insertmats, ...newthamso });
        result(null, { mats: res.insertmats, ...newthamso });
    });
};

ThamSo.findBymats = (mats, result) => {
    sql.query(`SELECT * from thamso WHERE mats = '${mats}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0])
            return;
        }
        result(null, null);
    });
};

ThamSo.getAll = (result) => {
    let query = "SELECT * FROM thamso";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("thamso: ", res);
        result(null, res);
    });
};

ThamSo.updateBymats = (mats, thamso, result) => {
    sql.query(
        "UPDATE thamso SET tents = ?, giatri = ?, chuthich = ?, updated_at = ? WHERE mats = ?",
        [thamso.tents, thamso.giatri , thamso.chuthich ,new Date(), mats],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found thamso with the mats
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated thamso: ", { mats: mats, ...thamso });
            result(null, { mats: mats, ...thamso });
        }
    );
};

module.exports = ThamSo;