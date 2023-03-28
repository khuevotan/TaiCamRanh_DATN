const sql = require("./db")

const HoaDonRX = function(hoadonrx){
    this.mahdrx  = hoadonrx.mahdrx;
    this.tennguoidat = hoadonrx.tennguoidat;
    this.ngaydat = hoadonrx.ngaydat;
    this.ngayrua = hoadonrx.ngayrua;
    this.giorua = hoadonrx.giorua;
    this.sodt = hoadonrx.sodt;
    this.diachi = hoadonrx.diachi;
    this.ghichu = hoadonrx.ghichu;
    this.tongtienrx = hoadonrx.tongtienrx;
    this.thanhtoan = hoadonrx.thanhtoan;
    this.malx = hoadonrx.malx;
    this.matt = hoadonrx.matt;
    this.manv = hoadonrx.manv;
    this.makh = hoadonrx.makh;
};

// Tạo đơn rửa xe
HoaDonRX.create = (newhoadonrx, result) => {
    sql.query("INSERT INTO hoadonrx SET ?", newhoadonrx, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created hoadonrx: ", {  ...newhoadonrx });
        result(null, { ...newhoadonrx });
    });
};

//tìm kiếm 1 hóa đơn bằng mã đơn hàng
HoaDonRX.findBymahdrx = (mahdrx, result) => { 
    sql.query(`SELECT * FROM hoadonrx WHERE mahdrx = '${mahdrx}'`, (err, res) => {
        
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found hoadonrx: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found hoadonrx with the mahdrx
        result({ kind: "not_found" }, null);
    });
};

// hiển thị hóa đơn rửa xe bên phía khách hàng
HoaDonRX.getAll = (makh, result) => {
    let query = `SELECT * FROM hoadonrx WHERE makh = ${makh} and thanhtoan = 1`;
    // if (tenbv) {
    //     query += ` WHERE tenbv LIKE '%${tenbv}%'`;
    // }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadonrx: ", res);
        result(null, res);
    });
};

// hiển thị lịch sử hóa đơn rửa xe bên phía khách hàng
HoaDonRX.getLSAll = (makh, result) => {
    let query = `SELECT * FROM hoadonrx WHERE makh = ${makh} and matt = 4 and thanhtoan = 2`;
    // if (tenbv) {
    //     query += ` WHERE tenbv LIKE '%${tenbv}%'`;
    // }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hoadonrx: ", res);
        result(null, res);
    });
};

HoaDonRX.updateBymahdrx = (mahdrx, hoadonrx, result) => {
    sql.query(
        "UPDATE hoadonrx SET tenbv = ?, noidung = ?, hinhdd = ?, hinhdd = ? , ngaydang = ? WHERE mahdrx = ?",
        [hoadonrx.tenbv, hoadonrx.noidung , hoadonrx.hinhdd, hoadonrx.hinhdd , hoadonrx.ngaydang,  mahdrx],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadonrx with the mahdrx
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated hoadonrx: ", { mahdrx: mahdrx, ...hoadonrx });
            result(null, { mahdrx: mahdrx, ...hoadonrx });
        }
    );
};

HoaDonRX.remove = (mahdrx, result) => {
    sql.query("DELETE FROM hoadonrx WHERE mahdrx = ?", mahdrx, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found hoadonrx with the mahdrx
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted hoadonrx with mahdrx: ", mahdrx);
        result(null, res);
    });
};

HoaDonRX.removeAll = result => {
    sql.query("DELETE FROM hoadonrx", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} hoadonrx`);
        result(null, res);
    });
};

module.exports = HoaDonRX;