# TaiCamRanh_DATN

Xây Dựng Website Đặt Lịch Rửa Xe Và Bán Hàng Online 

## Cách chạy project

Clone the project

```bash
  git clone https://github.com/khuevotan/TaiCamRanh_DATN.git
```

Install npm

```bash
  npm install
```

Đổi tên file .env.example thành .env

```bash
  .env
```

Chỉnh sửa file .env

```bash
 
  MAIL_MAILER=smtp
  MAIL_HOST=smtp.gmail.com
  MAIL_PORT=...(thay bằng cổng muốn sử dụng)
  MAIL_USERNAME=...(thay bằng gmail đang sử dụng)
  MAIL_PASSWORD=...(thay bằng mật khẩu ứng dụng gmail)
  MAIL_ENCRYPTION=...(thay bằng giao thức gmail muốn sử dụng)
  MAIL_FROM_ADDRESS="hello@example.com"
  MAIL_FROM_NAME=...(thay bằng tên gmail muốn hiển thị)
```

Vào MySQL tạo cơ sở dữ liệu có tên là taicamranh, sau đó nhập file sql trong thư mục sql vào

```bash
  
```

Chạy server

```bash
  npm start
```
