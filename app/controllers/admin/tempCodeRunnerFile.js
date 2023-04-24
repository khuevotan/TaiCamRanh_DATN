   // Tạo hai đối tượng Date đại diện cho hai ngày cần so sánh
const date1 = new Date('2023-04-24');
const date2 = new Date();

// Chuyển đổi đối tượng Date thành chuỗi ngày tháng năm
const dateString1 = date1.toDateString();
const dateString2 = date2.toDateString();

// So sánh chuỗi ngày tháng năm
if (dateString1 === dateString2) {
  console.log('Hai ngày bằng nhau.');
} else {
  console.log('Hai ngày khác nhau.');
}
