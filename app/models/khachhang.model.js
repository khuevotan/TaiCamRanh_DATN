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
    this.tinhtrang = khachhang.tinhtrang;
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

// Hiển thị danh sách khách hàng.
KhachHang.getAll = (result) => {
    let query = "SELECT * FROM khachhang WHERE tinhtrang = 1";
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
  
        result(null, res);
    });
};


// Update thông tin bên phía nhân viên.
KhachHang.updateTTByAdmin = (makh, khachhang, result) => {
    sql.query(
        "UPDATE khachhang SET taikhoan =?, hokh = ?, tenkh = ?, ngaysinh = ?, sodt = ?, diachi = ?, gioitinh = ?, kichhoat = ?, updated_at = ? WHERE makh = ?",
        [khachhang.taikhoan, khachhang.hokh , khachhang.tenkh, khachhang.ngaysinh , khachhang.sodt, khachhang.diachi,  khachhang.gioitinh , khachhang.kichhoat, new Date(), makh],
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

// Update bên phía khách hàng.
KhachHang.updateBymakh = (makh, khachhang, result) => {
    sql.query(
        "UPDATE khachhang SET hokh = ?, tenkh = ?, ngaysinh = ?, sodt = ?, diachi = ?, gioitinh = ?,  updated_at = ? WHERE makh = ?",
        [khachhang.hokh , khachhang.tenkh, khachhang.ngaysinh , khachhang.sodt, khachhang.diachi, khachhang.gioitinh, new Date(),  makh],
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

// Update bên phía khách hàng.
KhachHang.updateMail = (makh, khachhang, result) => {
    sql.query(
        "UPDATE khachhang SET  email = ?,  updated_at = ? WHERE makh = ?",
        [khachhang.email, new Date(),  makh],
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


// cập nhật ảnh đại diện.
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

// xóa khách hàng.
KhachHang.remove = (makh, result) => {
    sql.query(
        "UPDATE khachhang SET tinhtrang = ?,updated_at = ?  WHERE makh = ?",
        [2,new Date(), makh],
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
            result(null, { makh: makh });
        }
    );
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