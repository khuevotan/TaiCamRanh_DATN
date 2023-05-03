const sql = require("./db")

const Gio = function(gio){
    this.magio  = gio.magio ;
    this.tengio = gio.tengio;
    this.created_at = gio.created_at;
    this.updated_at = gio.updated_at;
};


Gio.create = (newgio, result) => {
    sql.query("INSERT INTO gio SET ?", newgio, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created gio: ", { magio: res.insertmagio, ...newgio });
        result(null, { magio: res.insertmagio, ...newgio });
    });
};

Gio.findBymagio = (magio, result) => {
    sql.query(`SELECT * FROM gio WHERE magio = ${magio}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            // console.log("found gio: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found gio with the magio
        result({ kind: "not_found" }, null);
    });
};


// Hiển thị danh sách giờ bên phía admin.
Gio.getAll = (result) => {
    let query = "SELECT * FROM gio";
   
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("gio: ", res);
        result(null, res);
    });
};

// Hiển thị giờ đặt lịch.
Gio.getAllKH = (ngayrua, MAX_ĐL, result) => {
    date1 = new Date(ngayrua)
    date2 = new Date()

    if(date1.getYear() == date2.getYear() && date1.getMonth() == date2.getMonth() && date1.getDay() == date2.getDay()){
        let query = `SELECT * FROM gio where magio not in (select magio from hoadonrx where ngayrua = '${ngayrua}' group by magio having count(magio) >= '${MAX_ĐL}') and (tengio > CURTIME())`;
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
         
            result(null, res);
        });
    }else{
        let query = `SELECT * FROM gio where magio not in (select magio from hoadonrx where ngayrua = '${ngayrua}' group by magio having count(magio) >= '${MAX_ĐL}')`;
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
          
            result(null, res);
        });
    }
  
};

Gio.updateBymagio = (magio, gio, result) => {
    sql.query(
        "UPDATE gio SET tengio = ?, updated_at = ? WHERE magio = ?",
        [gio.tengio, new Date(), magio],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found gio with the magio
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated gio: ", { magio: magio, ...gio });
            result(null, { magio: magio, ...gio });
        }
    );
};

Gio.remove = (magio, result) => {
    sql.query("DELETE FROM gio WHERE magio = ?", magio, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found gio with the magio
            result({ kind: "not_found" }, null);
            return;
        }
     
        result(null, res);
    });
};


module.exports = Gio;