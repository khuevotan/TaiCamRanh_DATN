const sql = require("./db")

const PhiShip = function(phiship){
    this.maphiship  = phiship.maphiship ;
    this.mavanchuyen = phiship.mavanchuyen;
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

PhiShip.findBymaphiship  = (maphiship , result) => {
    sql.query(`SELECT * from phiship WHERE maphiship  = '${maphiship }'`, (err, res) => {
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

PhiShip.updateBymaphiship  = (maphiship , phiship, result) => {
    sql.query(
        "UPDATE phiship SET mavanchuyen = ?, giaphi = ?, mahuyen  = ?, updated_at = ? WHERE maphiship  = ?",
        [phiship.mavanchuyen, phiship.giaphi , phiship.mahuyen  ,new Date(), maphiship ],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found phiship with the maphiship 
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated phiship: ", { maphiship : maphiship , ...phiship });
            result(null, { maphiship : maphiship , ...phiship });
        }
    );
};

module.exports = PhiShip;