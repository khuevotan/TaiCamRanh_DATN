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

  npm install --save-dev nodemon
```

Tạo một file có tên là .env và thêm nội dung trong file


```bash

  APP_NAME=TAICAMRANH
  APP_URL=http://localhost:3000

  PORT = 3000

  SESSION_SECRET=taicamranh

  BCRYPT_SALT_ROUND=10
 
  MAIL_MAILER=smtp
  MAIL_HOST=smtp.gmail.com
  MAIL_PORT=587 ...(có thể thay bằng cổng khác)
  MAIL_USERNAME=...(thay bằng gmail đang sử dụng)
  MAIL_PASSWORD=...(thay bằng mật khẩu ứng dụng gmail)
  MAIL_ENCRYPTION=TLS
  MAIL_FROM_ADDRESS="hello@example.com"
  MAIL_FROM_NAME="${APP_NAME}"

  STRIPE_KEY=...(thay đổi bằng key STRIPE)

  STRIPE_SECRET=...(thay đổi bằng mật khẩu STRIPE)

```

Vào MySQL tạo cơ sở dữ liệu có tên là taicamranh, sau đó nhập file sql trong thư mục database vào

```bash
  
```

Chạy server

```bash
  npm start
```

Sử Dụng ChatBot

```bash

  Sử dụng trực tiếp tại đây:
  https://khuevotan.github.io/ChatBot-Wit.ai/

  Source code
  https://glitch.com/edit/#!/leaf-mellow-scabiosa
  https://github.com/khuevotan/ChatBot-Wit.ai

```
