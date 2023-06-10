const sql = require("./db")

const Gio = function(gio){
    this.magio  = gio.magio ;
    this.tengio = gio.tengio;
    this.created_at = gio.created_at;
    this.updated_at = gio.updated_at;
};


// Hiển thị danh sách giờ đầy đủ bên phía admin.
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

module.exports = Gio;