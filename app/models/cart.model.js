module.exports = function Cart(cart) {
    this.items = cart.items || {};
    // tổng số lượng sản phẩm
    this.totalItems = cart.totalItems || 0;
    // tổng số lượng tiền của giỏ
    this.totalPrice = cart.totalPrice || 0;
    
    this.add = function(item, id, quantitykho, callback) {
       
        var cartItem = this.items[id];

        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, giaban: 0};
        }

        if(cartItem.quantity < quantitykho){
            cartItem.quantity++;
            cartItem.price = cartItem.item.giaban * cartItem.quantity;
            this.totalItems++;
            this.totalPrice += cartItem.item.giaban;
            callback(null, null);
        }else{
            var thongbao = "Số lượng trong kho đã đủ";
      
            // Gọi callback function với null (không có lỗi) và giá trị thongbao là biến thongbao
             callback(null, thongbao);
        }
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

    //update từ chi tiết sản phẩm
    this.addToCart = function(item, id, quantity, quantitykho, callback) {
        // kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
        var cartItem = this.items[id];
        if (!cartItem) {
            // nếu sản phẩm chưa có trong giỏ hàng, thêm mới sản phẩm vào giỏ hàng
            cartItem = this.items[id] = { item: item, quantity: 0, price: 0 };
        }

        // so sánh với số lượng trong kho
        if(cartItem.quantity < quantitykho){
                // tăng số lượng sản phẩm trong giỏ hàng theo giá trị nhập vào
            cartItem.quantity += quantity;
            // tính toán lại giá tiền của sản phẩm
            cartItem.price = cartItem.item.giaban * cartItem.quantity;
            // tăng tổng số lượng sản phẩm trong giỏ hàng theo giá trị nhập vào
            this.totalItems += quantity;
            // cập nhật lại tổng số tiền của giỏ hàng theo giá trị nhập vào
            this.totalPrice += cartItem.item.giaban * quantity;
            callback(null, null);
        }else{
            var thongbao = "Số lượng trong kho đã đủ";
      
            // Gọi callback function với null (không có lỗi) và giá trị thongbao là biến thongbao
             callback(null, thongbao);
        }
    };

    // update từ giỏ hàng
    this.addToGH = function(item, id, quantity, quantitykho) {
        // kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
        var cartItem = this.items[id];
        if (!cartItem) {
            // nếu sản phẩm chưa có trong giỏ hàng, thêm mới sản phẩm vào giỏ hàng
            cartItem = this.items[id] = { item: item, quantity: 0, price: 0 };
        }
            cartItem.quantity = quantity;
            // tính toán lại giá tiền của sản phẩm
            cartItem.price = cartItem.item.giaban * cartItem.quantity;

            this.totalItems = 0;
            this.totalPrice = 0;
         
            for (var id in this.items) {

                // tăng tổng số lượng sản phẩm trong giỏ hàng theo giá trị nhập vào
                this.totalItems += this.items[id].quantity;
               
                // cập nhật lại tổng số tiền của giỏ hàng theo giá trị nhập vào
                // this.totalPrice += cartItem.item.giaban * this.items[id];
                
                this.totalPrice +=  this.items[id].price;
            }
    };
    
    this.removeAll = function() {
        this.items = {};
        this.totalItems = 0;
        this.totalPrice = 0;
    };
};