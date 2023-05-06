const Cart = require("../models/cart.model");
const SanPham = require("../models/SanPham.model");

module.exports = app => {
  var router = require('express').Router();

  var fs = require('fs');

  router.get('/add/:id', function (req, res, next) {
    var productId = req.params.id;

    var cart = new Cart(req.session.cart ? req.session.cart : {});

    SanPham.findBymasp(productId, function (err, product) {
      if (err) {
        return res.redirect('/');
      }
      cart.add(product, productId, product.soluong);
      req.session.cart = cart;
      res.locals.cart = req.session.cart;

      res.redirect('/shop');
    });
  });

  // từ ct sản phẩm
  router.post('/addfromct/:masp/', function (req, res, next) {

    var productId = req.params.masp;
    var quantity = parseInt(req.body.quantity);
    // var quantitykho = parseInt(req.body.quantitykho);
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    // tìm sản phẩm trong cơ sở dữ liệu

    SanPham.findBymasp(productId, function (err, product) {
      if (err) {
        return res.redirect('/');
      }

      // thêm sản phẩm vào giỏ hàng
      cart.addToCart(product, product.masp, quantity, product.soluong);
      req.session.cart = cart;
      res.redirect('/sanphamct/' + product.masp);
    });
  });

  // từ giỏ hàng
  router.post('/addfromgh/:masp/', function (req, res, next) {

    var productId = req.params.masp;
    var quantity = parseInt(req.body.quantity);
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    // tìm sản phẩm trong cơ sở dữ liệu

    SanPham.findBymasp(productId, function (err, product) {
      if (err) {
        return res.redirect('/');
      }

      // thêm sản phẩm vào giỏ hàng
      cart.addToGH(product, product.masp, quantity);
      req.session.cart = cart;
      res.redirect('/cart');
    });
  });

  router.get('/cart', function (req, res, next) {

    // kieemr tra xem gio hang co ton tai hay khong?
    if (!req.session.cart) {
      return res.render('cart', {
        products: null,
      });
    }

    var cart = new Cart(req.session.cart);
    res.render('cart', {
      title: 'NodeJS Shopping Cart',
      products: cart.getItems(),
      totalPrice: cart.totalPrice,

    });
  });

  router.get('/remove/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.remove(productId);
    req.session.cart = cart;
    res.redirect('/cart');
  });

  router.get('/removeAll', function(req, res, next) {
    var cart = new Cart(req.session.cart);
    cart.removeAll();
    req.session.cart = cart;
    res.redirect('/cart');
  });


  app.use(router);

}