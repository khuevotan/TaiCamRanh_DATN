const sql = require("./db");

const Nhom = function(nhom){
    this.manhom  = nhom.manhom ;
    this.tennhom = nhom.tennhom;
    this.created_at = nhom.created_at;
    this.updated_at = nhom.updated_at;
};

// Tìm nhóm bằng mã nhóm.
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

// Hiển thị danh sách nhóm bên phía admin.
Nhom.getAll = (result) => {
    let query = "SELECT * FROM nhom";
  
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

module.exports = Nhom;