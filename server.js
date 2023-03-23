const express = require('express');
const app = express();

// khai bao thu muc staic de co the truy cap tu moi noi
app.use(express.static('app/public'));
app.use(express.static('app/public/admin'));
app.use(express.static('app/views'));
app.use(express.static('app/views/assets'));
app.use('/uploads', express.static('uploads'));
require('dotenv').config();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

//CREATE EXPRESS APP
app.use(bodyParser.urlencoded({ extended: true }));

 // call all the required packages
const multer = require('multer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// dung seesion
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))

app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

// su dung layout
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);



// them views
app.set('view engine', 'ejs');
app.set('views', [__dirname + '/app/views', __dirname + '/app/views/layout/admin', __dirname + '/app/views/layout/khachhang']);
app.set('layout', './master')

// app.get('/', (req, res, next) => {
//     res.render('index');
// })

//truyen app sang router
require("./app/routes/route")(app);

app.listen(process.env.PORT, function(){
    console.log('sever running: http://localhost:' + process.env.PORT);
});



