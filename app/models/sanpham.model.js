const sql = require("./db");

const Sanpham = function(sanpham){
    this.masp = sanpham.masp;
    this.tensp = sanpham.tensp;
    this.motangan = sanpham.motangan;
    this.hinhdd = sanpham.hinhdd;
    this.soluong = sanpham.soluong;
    this.motact = sanpham.motact;
    this.giaban = sanpham.giaban;
    this.madm = sanpham.madm;
    this.mancc = sanpham.mancc;
    this.manv = sanpham.manv;
    this.tinhtrang = sanpham.tinhtrang;
    this.created_at = sanpham.created_at;
    this.updated_at = sanpham.updated_at;
};

// ======================= GIAO DIỆN ADMIN ======================
Sanpham.create = (newsanpham, result) => {
    sql.query("INSERT INTO sanpham SET ?", newsanpham, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created sanpham: ", { masp: res.insertmasp, ...newsanpham });
        result(null, { masp: res.insertmasp, ...newsanpham });
    });
};

Sanpham.findBymasp = (masp, result) => {
    sql.query(`SELECT * FROM sanpham WHERE masp = ${masp}`, (err, res) => {
        if (err) {
       
            result(err, null);
            return;
        }
        if (res.length) {
       
            result(null, res[0]);
            return;
        }
        // not found sanpham with the masp
        result({ kind: "not_found" }, null);
    });
};

Sanpham.getAll = (tensp, result) => {
    let query = "SELECT * FROM sanpham WHERE tinhtrang = 1";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

Sanpham.getAllNOTAN = (result) => {
    let query = "SELECT * FROM sanpham";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};



// Hiển thị danh sách sản phẩm gần hết số lượng bên phía admin.
Sanpham.getAllSH = (soLuongHet, result) => {
    let query = `SELECT * FROM sanpham where soluong <= ${soLuongHet} and tinhtrang = 1`;

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};


Sanpham.remove = (masp, result) => {
    
    sql.query(
        "UPDATE sanpham SET tinhtrang = ?, updated_at = ? WHERE masp = ?",
        [2, new Date(),masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found sanpham with the masp
                result({ kind: "not_found" }, null);
                return;
            }
        
            result(null, { masp: masp });
        }
    );
};

Sanpham.updateBymasp = (masp, sanpham, result) => {
    sql.query(
        "UPDATE sanpham SET tensp = ?, motangan =? ,soluong = ?, motact = ? , giaban = ?, madm = ?, mancc = ? , manv = ?, updated_at = ? WHERE masp = ?",
        [sanpham.tensp , sanpham.motangan ,sanpham.soluong, sanpham.motact , sanpham.giaban, sanpham.madm, sanpham.mancc, sanpham.manv, new Date(),masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found sanpham with the masp
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated sanpham: ", { masp: masp, ...sanpham });
            result(null, { masp: masp, ...sanpham });
        }
    );
};

// Update số lượng sản phẩm khi đã đưa cho nhà vận chuyển.
Sanpham.updateSLNVC = (masp, soluongtru, result) => {
    sql.query(
        "UPDATE sanpham SET soluong = soluong - ?, updated_at = ? WHERE masp = ?",
        [soluongtru, new Date(), masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found sanpham with the masp
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { masp: masp });
        }
    );
};


// Update số lượng sản phẩm khi nhập số lượng trong phiếu nhập.
Sanpham.updateSL = (masp, soluongnhap, result) => {
    sql.query(
        "UPDATE sanpham SET soluong = soluong + ?, updated_at = ? WHERE masp = ?",
        [soluongnhap, new Date(), masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found sanpham with the masp
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { masp: masp });
        }
    );
};

// updata delete ---- só lượng khi nhập số lượng trong phiếu nhập
Sanpham.updateTSL = (masp, soluongnhap, result) => {
    sql.query(
        "UPDATE sanpham SET soluong = soluong - ?, updated_at = ? WHERE masp = ?",
        [soluongnhap, new Date(), masp],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found sanpham with the masp
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { masp: masp });
        }
    );
};

// update ảnh đại diện sản phẩm
Sanpham.updateADD = (masp, hinhdd, result) => {
    sql.query(
        "UPDATE sanpham SET hinhdd = ?, updated_at = ? WHERE masp = ?",
        [hinhdd, new Date(),masp],
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
            result(null, { masp: masp, hinhdd: hinhdd });
        }
    );
};

// ======================= GIAO DIỆN KHÁCH HÀNG ======================
// Hiển thị sản phẩm bên khánh hàng
Sanpham.getAllKH = (tensp, limit, offset, result) => {
    let query = `SELECT * FROM sanpham WHERE tinhtrang = 1 and soluong >=1  LIMIT ${limit} OFFSET ${offset}`;
    if (tensp) {
        query = `SELECT * FROM sanpham WHERE tinhtrang = 1 and soluong >=1 and tensp LIKE '%${tensp}%' LIMIT ${limit} OFFSET ${offset}`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
     
        result(null, res);
    });
};

// Hiển thị sản phẩm theo danh mục bên phía khách hàng
Sanpham.getAllKHdmsp = (madm, limit, offset, result) => {
   
    let query = `SELECT * FROM sanpham WHERE tinhtrang = 1 and soluong >= 1 and madm = ${madm} LIMIT ${limit} OFFSET ${offset} `;
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};


// Hiển thị sản phẩm mới nhất theo thứ tự
Sanpham.getNew = (result) => {
    let query = `SELECT * FROM sanpham WHERE tinhtrang = 1 ORDER BY created_at DESC LIMIT 6`;
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};


module.exports = Sanpham;