const sql = require("./db")

const TrangThai = function(trangthai){
    this.matt = trangthai.matt;
    this.tentt = trangthai.tentt;
    this.created_at = trangthai.created_at;
    this.updated_at = trangthai.updated_at;
};

TrangThai.create = (newtrangthai, result) => {
    sql.query("INSERT INTO trangthai SET ?", newtrangthai, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created trangthai: ", { matt: res.insertmatt, ...newtrangthai });
        result(null, { matt: res.insertmatt, ...newtrangthai });
    });
};

TrangThai.findBymatt = (matt, result) => {
    sql.query(`SELECT * FROM trangthai WHERE matt = ${matt}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found trangthai: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found trangthai with the matt
        result({ kind: "not_found" }, null);
    });
};

// Hiển thị trạng thái đơn hàng
TrangThai.getAll = (result) => {
    let query = "SELECT * FROM trangthai";
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
     
        result(null, res);
    });
};

// Update trạng thái
TrangThai.updateBymatt = (matt, trangthai, result) => {
    sql.query(
        "UPDATE trangthai SET tentt = ?, updated_at = ? WHERE matt = ?",
        [trangthai.tentt,new Date() ,  matt],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found trangthai with the matt
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { matt: matt, ...trangthai });
        }
    );
};

TrangThai.remove = (matt, result) => {
    sql.query("DELETE FROM trangthai WHERE matt = ?", matt, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found trangthai with the matt
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted trangthai with matt: ", matt);
        result(null, res);
    });
};

module.exports = TrangThai;