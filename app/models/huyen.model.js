const sql = require("./db")

const Huyen = function(huyen){
    this.mahuyen = huyen.mahuyen;
    this.tenhuyen = huyen.tenhuyen;
    this.matinh  = huyen.matinh ;
    this.created_at = huyen.created_at;
    this.updated_at = huyen.updated_at;
};

Huyen.create = (newhuyen, result) => {
    sql.query("INSERT INTO huyen SET ?", newhuyen, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created huyen: ", { mahuyen: res.insertmahuyen, ...newhuyen });
        result(null, { mahuyen: res.insertmahuyen, ...newhuyen });
    });
};

Huyen.findBymahuyen = (mahuyen, result) => {
    sql.query(`SELECT * from huyen WHERE mahuyen = '${mahuyen}'`, (err, res) => {
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


Huyen.getALLByMT = (matinh, result) => {
    let query =`SELECT * from huyen WHERE matinh = '${matinh}'`;
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("huyen: ", res);
        result(null, res);
    });
};


Huyen.getAll = (result) => {
    let query = "SELECT * FROM huyen";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("huyen: ", res);
        result(null, res);
    });
};

Huyen.updateBymahuyen = (mahuyen, huyen, result) => {
    sql.query(
        "UPDATE huyen SET tenhuyen = ?, matinh  = ?, updated_at = ? WHERE mahuyen = ?",
        [huyen.tenhuyen, huyen.matinh ,new Date(), mahuyen],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found huyen with the mahuyen
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated huyen: ", { mahuyen: mahuyen, ...huyen });
            result(null, { mahuyen: mahuyen, ...huyen });
        }
    );
};

module.exports = Huyen;