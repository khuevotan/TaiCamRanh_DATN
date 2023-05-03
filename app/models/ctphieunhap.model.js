const sql = require("./db")

const CTPhieuNhap = function(ctphieunhap){
    this.mapn  = ctphieunhap.mapn;
    this.masp = ctphieunhap.masp;
    this.soluongnhap = ctphieunhap.soluongnhap;
    this.gianhap = ctphieunhap.gianhap;
    this.created_at = ctphieunhap.created_at;
    this.updated_at = ctphieunhap.updated_at;
};

// Tạo đơn đặt hàng
CTPhieuNhap.create = (newctphieunhap, result) => {
    sql.query("INSERT INTO ctphieunhap SET ?", newctphieunhap, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created ctphieunhap: ", {  ...newctphieunhap });
        result(null, { ...newctphieunhap });
    });
};

// Tìm kiếm 1 hóa đơn bằng mã đơn hàng
CTPhieuNhap.findBymapn = (mapn, result) => { 
    let query = `SELECT * FROM ctphieunhap WHERE mapn = '${mapn}'`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
       
        result(null, res);
    });
};


// Hiển thị hóa đơn rửa xe bên phía khách hàng
CTPhieuNhap.getAll = (makh, result) => {
    let query = `SELECT * FROM ctphieunhap WHERE makh = ${makh} and matt != 4`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("ctphieunhap: ", res);
        result(null, res);
    });
};


// Cập nhật chi tiết hóa đơn bằng mapn và masp
CTPhieuNhap.updateBymapn = (mapn, masp, ctphieunhap, result) => {
    sql.query(
        "UPDATE ctphieunhap SET soluongnhap = ?, gianhap = ?, updated_at = ? WHERE mapn = ? and masp = ? ",
        [ctphieunhap.soluongnhap , ctphieunhap.gianhap, new Date(), mapn, masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found ctphieunhap with the mapn
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mapn: mapn, ...ctphieunhap });
        }
    );
};

// Xóa chi tiết 1 hóa đơn
CTPhieuNhap.remove = (mapn, masp, result) => {
    sql.query("DELETE FROM ctphieunhap WHERE mapn = ? and masp = ?",[mapn,masp] , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found ctphieunhap with the mapn
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted ctphieunhap with mapn: ", mapn);
        result(null, res);
    });
};

module.exports = CTPhieuNhap;