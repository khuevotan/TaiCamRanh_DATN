module.exports = app => {
    require("./web")(app);
    require("./admin.route")(app);
    require("./danhmuc.route")(app);
    require("./khachhang.route")(app);
    require("./auth.route")(app);
    require("./authad.route")(app);
    require("./cart.route")(app);
}