const Cart = require("../models/cart.model");
const SanPham = require("../models/SanPham.model");

module.exports = app => {
  var router = require('express').Router();

  var fs = require('fs');

  router.get('/add/:id', function (req, res, next) {
    var productId = req.params.id;
    const tensp = req.query.tendm;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    SanPham.getAll(tensp, (err, data) => {
         const producthai = JSON.parse(JSON.stringify(data));
     

         // đổi obj sang aray
         var product = producthai.filter(function(item) {
          return item.masp == productId;
        });

        // const product = values.filter(masp => masp === productId);

        // const product = Object.values(producthai).filter(item => {
        //   return item.masp === productId;
        // });

        // console.log(product);
        // console.log(product[0]);
        
        //  cart.add(product[0], productId);
         cart.add(product[0], productId);
         req.session.cart = cart;
         res.locals.cart = req.session.cart;
         res.redirect('/shop');
    });
  });

  router.get('/cart', function (req, res, next) {

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

  app.use(router);

}