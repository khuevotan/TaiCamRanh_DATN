const sql = require("./db");

const Khachhang = function(khachhang){
    this.taikhoan = khachhang.taikhoan;
    this.matkhau = khachhang.matkhau;
    this.email = khachhang.email;
};

Khachhang.create = (newKhachhang, result) => {
    sql.query("INSERT INTO khachhang SET ?", newKhachhang, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id: res.insertId, ...newKhachhang });
        result(null, { id: res.insertmakh, ...newKhachhang });
    });
};

Khachhang.findByTaikhoan = (taikhoan, result) => {
    sql.query(`SELECT * from khachhang WHERE taikhoan = '${taikhoan}'`, (err, res) => {
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
}

// thêm
Khachhang.getAll = (tenkh, result) => {
    let query = "SELECT * FROM khachhang";
    if (tenkh) {
        query += ` WHERE tenkh LIKE '%${tenkh}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("khachhang: ", res);
        result(null, res);
    });
};

Khachhang.updateBymakh = (makh, khachhang, result) => {
    sql.query(
        "UPDATE khachhang SET taikhoan =?, hokh = ?, tenkh = ?, ngaysinh = ?, sodt = ?, diachi = ? , email = ?, gioitinh = ? WHERE makh = ?",
        [khachhang.taikhoan, khachhang.hokh , khachhang.tenkh, khachhang.ngaysinh , khachhang.sodt, khachhang.diachi, khachhang.email, khachhang.gioitinh,  makh],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found khachhang with the makh
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated khachhang: ", { makh: makh, ...khachhang });
            result(null, { makh: makh, ...khachhang });
        }
    );
};

Khachhang.remove = (makh, result) => {
    sql.query("DELETE FROM khachhang WHERE makh = ?", makh, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found khachhang with the makh
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted khachhang with makh: ", makh);
        result(null, res);
    });
};

Khachhang.removeAll = result => {
    sql.query("DELETE FROM khachhang", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} khachhang`);
        result(null, res);
    });
};


module.exports = Khachhang;