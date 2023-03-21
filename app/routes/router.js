module.exports = app => {
    require("./web")(app);
    require("./admin")(app);
}