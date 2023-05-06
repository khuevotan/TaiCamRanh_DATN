  // Lấy thời gian hiện tại
var currentDate = new Date();

// Cộng thêm 3 ngày
var futureDate = new Date(currentDate.getTime() + (3 * 24 * 60 * 60 * 1000));

console.log(futureDate);