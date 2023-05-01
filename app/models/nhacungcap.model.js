const sql = require("./db")

const NhaCungCap = function(nhacungcap){
    this.mancc = nhacungcap.mancc;
    this.tenncc = nhacungcap.tenncc;
    this.sodt = nhacungcap.sodt;
    this.diachi = nhacungcap.diachi;
    this.created_at = nhacungcap.created_at;
    this.updated_at = nhacungcap.updated_at;
};

// Tạo một nhà cung cấp mới.
NhaCungCap.create = (newnhacungcap, result) => {
    sql.query("INSERT INTO nhacungcap SET ?", newnhacungcap, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created nhacungcap: ", { mancc: res.insertmancc, ...newnhacungcap });
        result(null, { mancc: res.insertmancc, ...newnhacungcap });
    });
};

// Tìm kiếm nhà cung cấp.
NhaCungCap.findBymancc = (mancc, result) => {
    sql.query(`SELECT * FROM nhacungcap WHERE mancc = ${mancc}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
        
            result(null, res[0]);
            return;
        }
        // not found nhacungcap with the mancc
        result({ kind: "not_found" }, null);
    });
};

// Hiển thị danh sách nhà cung cấp rửa.
NhaCungCap.getAll = (result) => {
    let query = "SELECT * FROM nhacungcap";
 
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// Cập nhật nhà cung cấp rửa bằng mã nhà cung cấp.
NhaCungCap.updateBymancc = (mancc, nhacungcap, result) => {
    sql.query(
        "UPDATE nhacungcap SET tenncc = ?, sodt = ?, diachi= ?, updated_at = ? WHERE mancc = ?",
        [nhacungcap.tenncc, nhacungcap.sodt,nhacungcap.diachi, new Date(), mancc],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found nhacungcap with the mancc
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mancc: mancc, ...nhacungcap });
        }
    );
};

// Xóa nhà cung cấp.
NhaCungCap.remove = (mancc, result) => {
    sql.query("DELETE FROM nhacungcap WHERE mancc = ?", mancc, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found nhacungcap with the mancc
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted nhacungcap with mancc: ", mancc);
        result(null, res);
    });
};


module.exports = NhaCungCap;