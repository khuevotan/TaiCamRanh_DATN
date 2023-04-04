const sql = require("./db")

const TrangThai = function(trangthai){
    this.matt = trangthai.matt;
    this.tentt = trangthai.tentt;
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

// hiên thị trạng thái đơn hàng
TrangThai.getAll = (tentt, result) => {
    let query = "SELECT * FROM trangthai";
    if (tentt) {
        query += ` WHERE tentt LIKE '%${tentt}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("trangthai: ", res);
        result(null, res);
    });
};

TrangThai.updateBymatt = (matt, trangthai, result) => {
    sql.query(
        "UPDATE trangthai SET tentt = ?, noidung = ?, hinhdd = ?, hinhdd = ? , ngaydang = ? WHERE matt = ?",
        [trangthai.tentt, trangthai.noidung , trangthai.hinhdd, trangthai.hinhdd , trangthai.ngaydang,  matt],
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
            console.log("updated trangthai: ", { matt: matt, ...trangthai });
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

TrangThai.removeAll = result => {
    sql.query("DELETE FROM trangthai", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} trangthai`);
        result(null, res);
    });
};

module.exports = TrangThai;