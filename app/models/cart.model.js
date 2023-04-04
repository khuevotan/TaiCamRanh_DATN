module.exports = function Cart(cart) {
    this.items = cart.items || {};
    // tổng số lượng sản phẩm
    this.totalItems = cart.totalItems || 0;
    // tổng số lượng tiền của giỏ
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
       
        var cartItem = this.items[id];

        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, giaban: 0};
        }

        console.log(cartItem.item.giaban);
        console.log(cartItem.quantity);

        cartItem.quantity++;
        cartItem.price = cartItem.item.giaban * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.giaban;
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};