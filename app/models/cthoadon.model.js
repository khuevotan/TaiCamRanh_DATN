const sql = require("./db")

const CTHoaDon = function(cthoadon){
    this.mahd  = cthoadon.mahd;
    this.masp = cthoadon.masp;
    this.soluong = cthoadon.soluong;
    this.giatien = cthoadon.giatien;
    this.created_at = cthoadon.created_at;
    this.updated_at = cthoadon.updated_at;
};

// Tạo đơn đặt hàng
CTHoaDon.create = (newcthoadon, result) => {
    sql.query("INSERT INTO cthoadon SET ?", newcthoadon, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created cthoadon: ", {  ...newcthoadon });
        result(null, { ...newcthoadon });
    });
};

// Tìm kiếm 1 hóa đơn bằng mã đơn hàng
CTHoaDon.findBymahd = (mahd, result) => { 
    let query = `SELECT * FROM cthoadon WHERE mahd = '${mahd}'`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
       
        result(null, res);
    });
};

// Đếm số lượng hóa đơn bằng mã đơn hàng
CTHoaDon.countByMaHD = (mahd, result) => { 
    let query = `SELECT COUNT(*) FROM cthoadon WHERE mahd = '${mahd}'`;

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
CTHoaDon.getAll = (makh, result) => {
    let query = `SELECT * FROM cthoadon WHERE makh = ${makh} and matt != 4`;
 
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("cthoadon: ", res);
        result(null, res);
    });
};


// Cập nhật chi tiết hóa đơn bằng mahd và masp
CTHoaDon.updateBymahd = (mahd, masp, cthoadon, result) => {
    sql.query(
        "UPDATE cthoadon SET soluong = ?, giatien = ?, updated_at = ? WHERE mahd = ? and masp = ? ",
        [cthoadon.soluong , cthoadon.giatien, new Date(), mahd, masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found cthoadon with the mahd
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mahd: mahd, ...cthoadon });
        }
    );
};

// xóa bên trong hóa đơn
CTHoaDon.removeHDSP = (mahd, masp, result) => {
    sql.query("DELETE FROM cthoadon WHERE mahd = ? and masp = ?",[mahd, masp] , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found cthoadon with the mahd
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted cthoadon with mahd: ", mahd);
        result(null, res);
    });
};

// Xóa chi tiết 1 hóa đơn -> khi yêu cầu xóa
CTHoaDon.remove = (mahd, result) => {

    sql.query("DELETE FROM cthoadon WHERE mahd = ?",[mahd] , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found cthoadon with the mahd
       
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted cthoadon with mahd: ", mahd);
        result(null, res);
    });
};

module.exports = CTHoaDon;