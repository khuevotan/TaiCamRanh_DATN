const sql = require("./db");

const KhachHang = function(khachhang){
    this.makh = khachhang.makh;
    this.taikhoan = khachhang.taikhoan;
    this.matkhau = khachhang.matkhau;
    this.hokh = khachhang.hokh;
    this.tenkh = khachhang.tenkh;
    this.ngaysinh = khachhang.ngaysinh;
    this.sodt = khachhang.sodt;
    this.diachi= khachhang.diachi;
    this.gioitinh= khachhang.gioitinh;
    this.hinhdd= khachhang.hinhdd;
    this.email = khachhang.email;
    this.kichhoat = khachhang.kichhoat;
    this.created_at = khachhang.created_at;
    this.updated_at = khachhang.updated_at;
};

KhachHang.create = (newKhachhang, result) => {
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

KhachHang.findByTaikhoan = (taikhoan, result) => {
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

KhachHang.findByMakh = (makh, result) => {
    sql.query(`SELECT * from khachhang WHERE makh = '${makh}'`, (err, res) => {
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

KhachHang.findByTaikhoanvaEmail = (taikhoan, email, result) => {
    sql.query(`SELECT * from khachhang WHERE taikhoan = '${taikhoan}' OR email = '${email}'`, (err, res) => {
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

KhachHang.findByEmail = (email, result) => {
    sql.query(`SELECT * from khachhang WHERE email = '${email}'`, (err, res) => {
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


KhachHang.getAll = (tenkh, result) => {
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


KhachHang.updateBymakhphiadmin = (makh, khachhang, result) => {
    sql.query(
        "UPDATE khachhang SET taikhoan =?, hokh = ?, tenkh = ?, ngaysinh = ?, sodt = ?, diachi = ? , email = ?, gioitinh = ?, kichhoat = ?, updated_at = ? WHERE makh = ?",
        [khachhang.taikhoan, khachhang.hokh , khachhang.tenkh, khachhang.ngaysinh , khachhang.sodt, khachhang.diachi, khachhang.email, khachhang.gioitinh , khachhang.kichhoat, new Date(), makh],
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

KhachHang.updateBymakh = (makh, khachhang, result) => {
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


// cập nhật ảnh đại diện
KhachHang.updateBymakhAva = (makh, hinhdd, result) => {
    sql.query(
        "UPDATE khachhang SET hinhdd = ?,updated_at = ?  WHERE makh = ?",
        [hinhdd,new Date(), makh],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { makh: makh, hinhdd: hinhdd });
        }
    );
};

KhachHang.remove = (makh, result) => {
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

KhachHang.verify = (email, result) => {
    sql.query(
        "UPDATE khachhang SET kichhoat = ?, updated_at = ? WHERE email = ?",
        [2,new Date(), email],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { email: email });
        }
    );
}

KhachHang.resetPassword = (email, matkhau, result) => {
    sql.query(
        "UPDATE khachhang SET matkhau = ?, updated_at = ? WHERE email = ?",
        [matkhau,new Date(), email],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { email: email });
        }
    );
};

KhachHang.resetPasswordKH = (taikhoan, matkhau, result) => {
    sql.query(
        "UPDATE khachhang SET matkhau = ?, updated_at = ? WHERE taikhoan = ?",
        [matkhau,new Date(), taikhoan],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { taikhoan: taikhoan });
        }
    );
};

KhachHang.errDMK = (matkhau, result) => {
    result(null, res);
}

module.exports = KhachHang;