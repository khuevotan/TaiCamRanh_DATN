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

module.exports = Khachhang;