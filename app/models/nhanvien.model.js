const sql = require("./db");

const NhanVien = function(nhanvien){
    this.manv = nhanvien.manv;
    this.taikhoan = nhanvien.taikhoan;
    this.matkhau = nhanvien.matkhau;
    this.honv = nhanvien.honv;
    this.tennv = nhanvien.tennv;
    this.ngaysinh = nhanvien.ngaysinh;
    this.sodt = nhanvien.sodt;
    this.diachi= nhanvien.diachi;
    this.gioitinh= nhanvien.gioitinh;
    this.hinhdd= nhanvien.hinhdd;
    this.email = nhanvien.email;
    this.manhom = nhanvien.manhom;
    this.luong = nhanvien.luong;
    this.kichhoat = nhanvien.kichhoat;
    this.tinhtrang = nhanvien.tinhtrang;
    this.created_at = nhanvien.created_at;
    this.updated_at = nhanvien.updated_at;
};

NhanVien.create = (newnhanvien, result) => {
    sql.query("INSERT INTO nhanvien SET ?", newnhanvien, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created nhanvien: ", { id: res.insertId, ...newnhanvien });
        result(null, { id: res.insertmanv, ...newnhanvien });
    });
};

NhanVien.findByTaikhoan = (taikhoan, result) => {
    sql.query(`SELECT * from nhanvien WHERE taikhoan = '${taikhoan}'`, (err, res) => {
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

NhanVien.findByMaNV = (manv, result) => {
    sql.query(`SELECT * from nhanvien WHERE manv = '${manv}'`, (err, res) => {
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

NhanVien.findByTaikhoanvaEmail = (taikhoan, email, result) => {
    sql.query(`SELECT * from nhanvien WHERE taikhoan = '${taikhoan}' OR email = '${email}'`, (err, res) => {
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


NhanVien.findByEmail = (email, result) => {
    sql.query(`SELECT * from nhanvien WHERE email = '${email}'`, (err, res) => {
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


// Hiển thị danh sách nhân viên
NhanVien.getAll = (result) => {
    let query = "SELECT * FROM nhanvien WHERE tinhtrang = 1";
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
     
        result(null, res);
    });
};

NhanVien.updateByMaNV = (manv, nhanvien, result) => {
    sql.query(
        "UPDATE nhanvien SET honv = ?, tennv = ?, ngaysinh = ?, sodt = ?, diachi = ?, gioitinh = ?, updated_at = ?  WHERE manv = ?",
        [nhanvien.honv , nhanvien.tennv, nhanvien.ngaysinh , nhanvien.sodt, nhanvien.diachi, nhanvien.gioitinh, new Date(),  manv],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found nhanvien with the manv
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated nhanvien: ", { manv: manv, ...nhanvien });
            result(null, { manv: manv, ...nhanvien });
        }
    );
};


NhanVien.updateByMaNVAD = (manv, nhanvien, result) => {
    sql.query(
        "UPDATE nhanvien SET honv = ?, tennv = ?, ngaysinh = ?, sodt = ?, diachi = ?, gioitinh = ?, luong =?, manhom =?, kichhoat =? , updated_at = ?   WHERE manv = ?",
        [nhanvien.honv , nhanvien.tennv, nhanvien.ngaysinh , nhanvien.sodt, nhanvien.diachi, nhanvien.gioitinh,nhanvien.luong, nhanvien.manhom , nhanvien.kichhoat, new Date(), manv],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found nhanvien with the manv
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated nhanvien: ", { manv: manv, ...nhanvien });
            result(null, { manv: manv, ...nhanvien });
        }
    );
};


// cập nhật Mail
NhanVien.updateMail = (manv, emailmoi, result) => {
    sql.query(
        "UPDATE nhanvien SET email = ?, updated_at = ? WHERE manv = ?",
        [emailmoi, new Date(), manv],
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
            result(null, { manv: manv, emailmoi: emailmoi });
        }
    );
};

// cập nhật ảnh đại diện
NhanVien.updateAvaByMaNV = (manv, hinhdd, result) => {
    sql.query(
        "UPDATE nhanvien SET hinhdd = ?, updated_at = ? WHERE manv = ?",
        [hinhdd, new Date(), manv],
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
            result(null, { manv: manv, hinhdd: hinhdd });
        }
    );
};

// Xóa nhân viên
NhanVien.remove = (manv, result) => {
    sql.query(
        "UPDATE nhanvien SET tinhtrang = ?, updated_at = ? WHERE manv = ?",
        [2,new Date(), manv],
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
            result(null, { manv: manv });
        }
    );
};


NhanVien.verify = (email, result) => {
    sql.query(
        "UPDATE nhanvien SET kichhoat = ?, updated_at = ? WHERE email = ?",
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

NhanVien.resetPassword = (email, matkhau, result) => {
    sql.query(
        "UPDATE nhanvien SET matkhau = ? , updated_at = ?WHERE email = ?",
        [matkhau, new Date(), email],
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

NhanVien.resetPasswordNV = (taikhoan, matkhau, result) => {
    sql.query(
        "UPDATE nhanvien SET matkhau = ?, updated_at = ? WHERE taikhoan = ?",
        [matkhau, new Date(), taikhoan],
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

NhanVien.errDMK = (matkhau, result) => {
    result(null, res);
}

module.exports = NhanVien;