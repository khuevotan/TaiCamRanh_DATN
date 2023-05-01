module.exports = app => {
    require("./web")(app);
    require("./admin.route")(app);
    require("./danhmuc.route")(app);
    require("./khachhang.route")(app);
    require("./auth.route")(app);
    require("./authad.route")(app);
    require("./cart.route")(app);
    require("./sanpham.route")(app);
    require("./baiviet.route")(app);
    require("./thamso.route")(app);
    require("./hoadonrx.route")(app);
    require("./hoadon.route")(app);
    require("./nhanvien.route")(app);
    require("./loaixe.route")(app);
    require("./gio.route")(app);
    require("./cthoadon.route")(app);
    require("./nhacungcap.route")(app);
    require("./nhom.route")(app);
    require("./khachhang_ad.route")(app);
}