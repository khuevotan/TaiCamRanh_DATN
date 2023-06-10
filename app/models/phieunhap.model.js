const sql = require("./db")

const PhieuNhap = function(phieunhap){
    this.mapn   = phieunhap.mapn ;
    this.ghichu = phieunhap.ghichu;
    this.thanhtoan = phieunhap.thanhtoan;
    this.tongtiennhap = phieunhap.tongtiennhap;
    this.mancc  = phieunhap.mancc;
    this.matt = phieunhap.matt;
    this.manv = phieunhap.manv;
    this.created_at = phieunhap.created_at;
    this.updated_at = phieunhap.updated_at;
};


//======================= GIAO DIEN ADMIN ======================= 
// Hiển thị hóa đơn nhập hàng bên phía admin.
PhieuNhap.getAllAD = (result) => {
    let query = "SELECT * FROM phieunhap";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("phieunhap: ", res);
        result(null, res);
    });
};

// Tạo đơn nhập hàng.
PhieuNhap.create = (newphieunhap, result) => {
    sql.query("INSERT INTO phieunhap SET ?", newphieunhap, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created phieunhap: ", {  ...newphieunhap });
        result(null, { ...newphieunhap });
    });
};

// Tìm kiếm 1 hóa đơn nhập bằng mã đơn nhập.
PhieuNhap.findBymapn  = (mapn , result) => { 
    sql.query(`SELECT * FROM phieunhap WHERE mapn  = '${mapn }'`, (err, res) => {
        
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found phieunhap: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found phieunhap with the mapn 
        result({ kind: "not_found" }, null);
    });
};

// Cập nhật đơn nhập.
PhieuNhap.updateBymapn  = (mapn , phieunhap, result) => {
    sql.query(
        "UPDATE phieunhap SET ghichu = ? ,  thanhtoan = ?, mancc  = ? , matt = ? , manv = ?, updated_at = ?  WHERE mapn  = ?",
        [phieunhap.ghichu, phieunhap.thanhtoan , phieunhap.mancc , phieunhap.matt,  phieunhap.manv, new Date(),  mapn ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found phieunhap with the mapn 
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated phieunhap: ", { mapn : mapn , ...phieunhap });
            result(null, { mapn : mapn , ...phieunhap });
        }
    );
};

// Cập nhật đơn nhập với tổng tiền nhập.
PhieuNhap.updateBymapnwitdtongtien  = (mapn , tongtiennhap, result) => {
    sql.query(
        "UPDATE phieunhap SET  tongtiennhap = ?, updated_at = ?  WHERE mapn  = ?",
        [tongtiennhap, new Date(), mapn ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found hoadon with the mahd 
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { mapn: mapn });
        }
    );
};

// Xóa đơn nhập.
PhieuNhap.remove = (mapn , result) => {
    sql.query("DELETE FROM phieunhap WHERE mapn  = ?", mapn , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found phieunhap with the mapn 
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted phieunhap with mapn : ", mapn );
        result(null, res);
    });
};

module.exports = PhieuNhap;