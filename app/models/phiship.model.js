const sql = require("./db")

const PhiShip = function(phiship){
    this.maps  = phiship.maps ;
    this.mavanchuyen = phiship.mavanchuyen;
    this.ngaygiaohang = phiship.ngaygiaohang;
    this.giaphi = phiship.giaphi;
    this.mahuyen  = phiship.mahuyen ;
    this.created_at = phiship.created_at;
    this.updated_at = phiship.updated_at;
};

PhiShip.create = (newphiship, result) => {
    sql.query("INSERT INTO phiship SET ?", newphiship, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
       
        result(null, {...newphiship });
    });
};

PhiShip.findBymaps  = (maps , result) => {
    sql.query(`SELECT * from phiship WHERE maps  = '${maps}'`, (err, res) => {
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
};

PhiShip.getAll = (result) => {
    let query = "SELECT * FROM phiship";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("phiship: ", res);
        result(null, res);
    });
};

PhiShip.updateBymaps  = (maps , phiship, result) => {
    sql.query(
        "UPDATE phiship SET giaphi = ?, updated_at = ? WHERE maps  = ?",
        [phiship.giaphi ,new Date(), maps ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found phiship with the maps 
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated phiship: ", { maps : maps , ...phiship });
            result(null, { maps : maps , ...phiship });
        }
    );
};

// Update Fast
PhiShip.updateFastByMaPS  = (maps , phiship, result) => {
    sql.query(

        "UPDATE phiship SET mavanchuyen = ?, ngaygiaohang = ?, updated_at = ? WHERE maps  = ?",
        [phiship.mavanchuyen,  phiship.ngaygiaohang ,new Date(), maps ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found phiship with the maps 
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated phiship: ", { maps : maps , ...phiship });
            result(null, { maps : maps , ...phiship });
        }
    );
};

// Xóa phí ship.
PhiShip.remove = (maps, result) => {

    sql.query("DELETE FROM phiship WHERE maps = ?",[maps] , (err, res) => {
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
        console.log("deleted phiship with maps: ", maps);
        result(null, res);
    });
};

module.exports = PhiShip;