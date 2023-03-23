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


// exports.getBaivietct = (req, res) => {
//     res.render('baivietct.ejs');
// }

exports.showView = (req, res) => {
    res.render('view.ejs',{layout: './master2'});
}

exports.dangNhap = (req, res) => {
    res.render('dangnhap.ejs');
}

// res.render('index', {layout: false}); -> neu khong muon truyen layout nao

// module.exports.getIndex = (req, res) => {
//     res.render('index.ejs', {
//         name: 'Vo Tan Khue',
//         age:22,
//     });
// }

exports.uploadFile = (req, res) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
}

exports.uploadMultiple = (req, res) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(files)
}
