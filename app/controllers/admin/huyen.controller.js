const Huyen = require("../../models/huyen.model");

//======================= GIAO DIEN ADMIN ======================= 

// Hiển thị danh sách huyện.
exports.findAll = (req, res) => {
    res.locals.deleted = req.query.deleted;
 
    Huyen.getAll( (err, data) => {
        if (err)
            res.redirect('/admin/500')
        else {
            res.render('huyen/indexhuyen',  {huyen: data, layout: './master3'});
        }
    });
};



