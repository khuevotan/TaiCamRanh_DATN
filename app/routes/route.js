module.exports = app => {
    require("./web")(app);
    require("./admin")(app);
    require("./danhmuc.route")(app);
    require("./khachhang.route")(app);
    require("./auth.route")(app);
    // require("./shop.route")(app);
}