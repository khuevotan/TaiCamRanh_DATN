exports.Login = (req, res) => {
    res.render('login.ejs',{layout: false});
}

exports.getIndex = (req, res) => {
    res.render('trangchuad.ejs',{layout: './master2'});
}

// exports.showView = (req, res) => {
//     res.render('view.ejs',{layout: './master2'});
// }

// res.render('index', {layout: false}); -> neu khong muon truyen layout nao

// module.exports.getIndex = (req, res) => {
//     res.render('index.ejs', {
//         name: 'Vo Tan Khue',
//         age:22,
//     });
// }
