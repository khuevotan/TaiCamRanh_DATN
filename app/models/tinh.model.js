const sql = require("./db")

const Tinh = function(tinh){
    this.matinh = tinh.matinh;
    this.tentinh = tinh.tentinh;
    this.created_at = tinh.created_at;
    this.updated_at = tinh.updated_at;
};

Tinh.create = (newtinh, result) => {
    sql.query("INSERT INTO tinh SET ?", newtinh, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
      
        result(null, { matinh: res.insertmatinh, ...newtinh });
    });
};

Tinh.findBymatinh = (matinh, result) => {
    sql.query(`SELECT * from tinh WHERE matinh = '${matinh}'`, (err, res) => {
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

Tinh.getAll = (result) => {
    let query = "SELECT * FROM tinh";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        result(null, res);
    });
};

Tinh.updateBymatinh = (matinh, tinh, result) => {
    sql.query(
        "UPDATE tinh SET tentinh = ?, updated_at = ? WHERE matinh = ?",
        [tinh.tentinh,new Date(), matinh],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found tinh with the matinh
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated tinh: ", { matinh: matinh, ...tinh });
            result(null, { matinh: matinh, ...tinh });
        }
    );
};

module.exports = Tinh;