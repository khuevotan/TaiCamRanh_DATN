
const LoaiXe = require("../../models/loaixe.model");

exports.getIndex = (req, res) => {
    res.render('index.ejs');
}

exports.getDichVuRuaXe = (req, res) => {

    LoaiXe.getAll((err, loaixe) => {
        if (err)
            res.redirect('/500')
        else {
            res.render('dichvuruaxe.ejs', {loaixe: loaixe});
        }
    });
   
}

exports.getLienhe = (req, res) => {
    res.render('lienhe.ejs');
}

exports.getBaiviet = (req, res) => {
    res.render('baiviet.ejs');
}

exports.showForm = (req, res) => {
    res.render('form.ejs');
}

exports.showView = (req, res) => {
    res.render('view.ejs',{layout: './master2'});
}


// K
exports.quyenTruyCap = (req, res) => {
    res.render('quyentruycap.ejs',{layout: false});
}

exports.dangNhap = (req, res) => {
    res.render('dangnhap.ejs');
}
