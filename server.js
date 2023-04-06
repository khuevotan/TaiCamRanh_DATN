const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

global.__basedir = "http://localhost:3000";

// khai bao thu muc staic de co the truy cap tu moi noi
app.use(express.static('app/public'));
app.use(express.static('app/public/admin'));
app.use(express.static('app/views'));
app.use(express.static('app/views/assets'));
app.use('/uploads', express.static('uploads'));
require('dotenv').config();

// thanh toan stripe
const path = require('path')
const Publishable_Key = 'pk_test_51MqHEXDWd2W6upWFp32vuRnPei7IjHDNJMJ0rQ8vBc6L4AetU7RqtYP6zXizThorGPFP5d08e76hAcAfWRcUMXPZ00xCXY4HTv'
const Secret_Key = 'sk_test_51MqHEXDWd2W6upWF1VZ7dn4skGPysk27NeODNhPsXlPgoyMbjqoFEl4hICGaAv1WexgSrFcRTo7vGS3S6hHZF1Py00jhzifGQJ'


const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

//CREATE EXPRESS APP
app.use(bodyParser.urlencoded({ extended: true }));

 // call all the required packages -> thay đổi datetime
const moment = require("moment");



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

app.use(cookieParser());

// dung seesion
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))

app.use(function (req, res, next) {
    res.locals.session = req.session;
    res.locals.moment = moment;
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



