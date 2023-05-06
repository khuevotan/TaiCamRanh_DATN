exports.getIndex = (req, res) => {
    res.render('index.ejs');
}

exports.getDichvu = (req, res) => {
    res.render('dichvu.ejs');
}

exports.getVetcr = (req, res) => {
    res.render('vetaicamranh.ejs');
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

exports.dangNhap = (req, res) => {
    res.render('dangnhap.ejs');
}
