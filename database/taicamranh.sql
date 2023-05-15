-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 15, 2023 lúc 07:04 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `taicamranh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet`
--

CREATE TABLE `baiviet` (
  `mabv` int(11) NOT NULL,
  `tenbv` varchar(255) NOT NULL,
  `motangan` varchar(255) NOT NULL,
  `noidung` text NOT NULL,
  `hinhdd` varchar(255) NOT NULL,
  `manv` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `baiviet`
--

INSERT INTO `baiviet` (`mabv`, `tenbv`, `motangan`, `noidung`, `hinhdd`, `manv`, `created_at`, `updated_at`) VALUES
(2, 'Phim cách nhiệt 3M Crystalline có đáng tiền?', '3M Crystalline kết hợp tổng cộng 200 lớp trong phim của nó nhưng khi cầm nắm thì nó vẫn mỏng hơn một tờ giấy.', '1️⃣ Đặc điểm vượt trội của 3M Cyrstalline khiến loại phim cách nhiệt này tốt nhất hiện tại\r\n3M Crystalline kết hợp tổng cộng 200 lớp trong phim của nó nhưng khi cầm nắm thì nó vẫn mỏng hơn một tờ giấy. Tuy nhiên, lớp film mỏng không làm giảm sức mạnh của nó, vì nó vẫn ngăn nhiệt và ánh sáng chiếu vào xe. \r\n99,9% Tia UV bị chặn bởi dòng phim cách nhiệt 3M Crystalline , trong khi film có màu tối nhất là CR20 có thể giảm nhiệt lên đến 97%. Film 3M Crystalline sáng nhất CR70 có thể làm giảm nhiệt trong xe của bạn lên đến 50%. \r\nNó có chỉ số SPF 1000+, vì vậy bạn không bao giờ phải lo lắng về nội thất của xe bị hư hại khi tiếp xúc với ánh nắng mặt trời. Đồng thời, nó sẽ làm giảm ánh sáng chói vào xe của bạn. \r\nKhông giống như các loại phim cách nhiệt Trung Quốc nhuộm đủ màu rẻ hơn và ít được biết đến hơn, không có nhiễu kim loại hoặc tín hiệu vô tuyến với phim 3M Crystalline. \r\nPhim mỏng và độ bóng cao sẽ nâng cao khả năng hiển thị của bạn vào ban đêm, vì vậy bạn không cần lo lắng về việc không nhìn thấy vào ban đêm. \r\nCho dù bạn có để xe dưới sa mạc hay bảo tuyết, phim không bị đổi màu. Nó sẽ trông giống như ngày đầu tiên bạn mua dán nó trên xe. \r\nĐó là chất lượng đi kèm với phim 3M Crystalline, bạn sẽ được đảm bảo chất lượng trọn đời. Điều đó có nghĩa là bạn không bao giờ phải quay lại để sửa chữa.  ', '3mcrystalline.jpg', 1, '2023-05-01 08:59:13', '2023-05-01 08:59:13'),
(11, '10 phụ kiện tiện ích nên có trên chiếc ô tô của bạn', 'Khi sở hữu một chiếc ô tô, ngoài options được hãng trang bị sẵn, người dùng cũng nên trang bị thêm một số phụ kiện để hỗ trợ tốt hơn cho việc lái xe. Dưới đây, Tài Cam Ranh gửi đến bạn 10 loại phụ kiện tiện ích nên có trên xế cưng của bạn.', '<h2 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-size: 22px; font-weight: 700; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\"><span style=\"font-style: inherit; font-weight: inherit; font-size: 14pt;\">1. Bộ chia cổng sạc pin trên ô tô</span><span class=\"ez-toc-section-end\" style=\"font-style: inherit; font-weight: inherit;\"></span></h2><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Bộ chia cổng sạc pin trên ô tô được rất nhiều khách hàng ưa chuộng bởi nhu cầu sử dụng điện thoại, máy tính bảng ngày càng trở nên phổ biến, đặc biệt với những chuyến đi xa, lượng pin của các thiết bị không đủ để đáp ứng nhu cầu sử dụng.&nbsp;</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"size-full wp-image-187314 aligncenter\" src=\"https://storage.googleapis.com/f1-cms/2020/07/13fa401f-20200716_063722.jpg\" alt=\"Những phụ kiện nhất định phải có trên xe ô tô - 9\" width=\"780\" height=\"758\" style=\"height: auto; width: auto !important;\"></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Bộ chia cổng sạc sẽ giúp các thành viên trên xe đều có thể nạp năng lượng cho thiết bị của mình mà không cần phải chờ đợi, bạn có thể sạc cho nhiều thiết bị cùng lúc rất tiện lợi. Cũng cần lưu ý lựa chọn các sản phẩm có chất lượng ổn định, vì việc kết nối nhiều máy một lúc cần bộ chia hoạt động tốt để có thể đảm bảo sự an toàn cho dây sạc cũng như các thiết bị của bạn.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><h2 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-size: 22px; font-weight: 700; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\"><span class=\"ez-toc-section\" id=\"2_Bo_sac_kiem_gia_do_dien_thoai\" style=\"font-style: inherit; font-weight: inherit;\"></span><span style=\"font-style: inherit; font-weight: inherit; font-size: 14pt;\">2. Bộ sạc kiêm giá đỡ điện thoại</span><span class=\"ez-toc-section-end\" style=\"font-style: inherit; font-weight: inherit;\"></span></h2><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Giá đỡ điện thoại cũng là một phụ kiện thường thấy trên các mẫu xe ô tô, vì quá trình di chuyển liên tục cần bản đồ để tránh lạc đường cũng như thuận tiện hơn trong việc sắp xếp lịch trình.&nbsp;</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"size-full wp-image-188898 aligncenter\" src=\"https://storage.googleapis.com/f1-cms/2020/07/2bd18a94-20200722_063712.jpg\" alt=\"Cổng sạc kèm giá đỡ điện thoại\" width=\"780\" height=\"390\" style=\"height: auto; width: auto !important;\"></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Việc vừa lái xe vừa cầm điện thoại sẽ rất bất tiện và nguy hiểm trong quá trình di chuyển, nên giá đỡ điện thoại ngày càng được ưa chuộng bởi nó giúp giữ điện thoại ở vị trí cố định, trước tầm nhìn của tài xế nên việc quan sát cũng trở nên dễ dàng hơn, đồng thời tài xế có thể theo dõi bản đồ cũng như các thông báo khác trên điện thoại mà không ảnh hưởng đến việc lái xe.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Bên cạnh đó, một số loại giá đỡ còn tích hợp bộ sạc đi kèm rất tiện lợi, bạn có thể vừa cắm sạc vừa theo dõi thông tin mà không sợ điện thoại hết pin.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><h2 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-size: 22px; font-weight: 700; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;He', '1683257792359-10mondo.jpg', 1, '2023-05-05 03:36:32', '2023-05-05 03:36:32'),
(12, 'Phân loại bằng lái xe ô tô theo quy định 2023', 'Dự thảo Luật Giao thông đường bộ (sửa đổi thay thế Luật giao thông đường bộ 2008) trong 2021 đã chia giấy phép lái xe ra thành 17 hạng khác nhau thay vì 13 hạng như hiện nay, trong đó gồm 04 hạng không thời hạn và 13 hạng có thời hạn.', '                                    <p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">Đáng chú ý, hạng A1 chỉ lái xe từ trên 50 đến 125 phân khối hoặc có công suất động cơ điện trên 4 kW đến 11 kW và các loại xe quy định cho giấy phép lái xe hạng A0, thay cho xe từ trên 50 đến dưới 175 phân khối như hiện nay;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">Bằng lái hạng B1 sẽ dùng cho người lái môtô 3 bánh thay vì lái ôtô số tự động 9 chỗ trở xuống, xe tải số tự động dưới 3,5 tấn như hiện nay.</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">Đồng thời, dự thảo bổ sung hạng bằng mới là A0 cấp cho người lái xe gắn máy (kể cả xe máy điện) dưới 50 phân khối hoặc có công suất động cơ điện không vượt quá 4kW.</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">Với người lái môtô 2 bánh trên 125 phân khối hoặc có công suất động cơ điện trên 11 kW, dự thảo quy định sử dụng bằng lái hạng A thay cho bằng A2 hiện nay.</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_185042\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-185042 size-full\" src=\"https://storage.googleapis.com/f1-cms/2020/07/c53390c8-20200701_022911.jpg\" alt=\"Dự thảo luật giao thông đường bộ mới nhất tháng 2021 - 3\" width=\"780\" height=\"438\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Giấy phép lái xe dành cho phương tiện 2, 3 bánh là vô thời hạn</figcaption></figure><figure id=\"attachment_185046\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-185046 size-full\" src=\"https://storage.googleapis.com/f1-cms/2020/07/2fb3941e-20200701_022916.jpg\" alt=\"Dự thảo luật giao thông đường bộ mới nhất tháng 2021 - 4\" width=\"780\" height=\"425\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Tuy nhiên giấy phép lái xe dành cho ô tô, máy kéo, gắn rơ-mooc sẽ có thời hạn sử dụng khác nhau</figcaption></figure><figure id=\"attachment_185050\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-185050 size-full\" src=\"https://storage.googleapis.com/f1-cms/2020/07/70868a51-20200701_022921.jpg\" alt=\"Dự thảo luật giao thông đường bộ mới nhất tháng 2021 - 5\" width=\"780\" height=\"321\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Tuy nhiên giấy phép lái xe dành cho ô tô, máy kéo, gắn rơ-mooc sẽ có thời hạn sử dụng khác nhau - 2</figcaption></figure><figure id=\"attachment_185054\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-185054 size-full\" src=\"https://storage.googleapis.com/f1-cms/2020/07/81528d52-20200701_022926.jpg\" alt=\"Dự thảo luật giao thông đường bộ mới nhất tháng 2021 - 6\" width=\"780\" height=\"413\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Tuy nhiên giấy phép lái xe dành cho ô tô, máy kéo, gắn rơ-mooc sẽ có thời hạn sử dụng khác nhau - 3</figcaption></figure>', '1683259416966-c6fe32a6-20200701_022930.jpg', 1, '2023-05-05 04:03:36', '2023-05-05 06:40:10');
INSERT INTO `baiviet` (`mabv`, `tenbv`, `motangan`, `noidung`, `hinhdd`, `manv`, `created_at`, `updated_at`) VALUES
(13, 'Giá xe Toyota Vios 2023 kèm Thông Số & Khuyến Mãi (05/2023)', 'Đánh giá xe Toyota Vios 2023 - Cập nhật thông tin xe, thông số kỹ thuật, khả năng vận hành, trang bị tiện nghi, đánh giá ngoại thất, nội thất và báo giá xe Vios 2023  mới nhất tháng 05/2023 tại Việt Nam.', '                                                                                                            <h2 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-weight: 700; color: rgb(33, 37, 41); font-size: 22px; padding: 0px;\">Toyota Vios 2023 chính thức lộ diện, có gì mới?<span class=\"ez-toc-section-end\" style=\"font-style: inherit; font-weight: inherit;\"></span></h2><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Toyota Vios 2023 đã chính thức ra mắt thế hệ mới tại Đông Nam Á với diện mạo hoàn mới và trang bị đi kèm cũng được bổ sung nhằm nâng cao trải nghiệm của khách hàng.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_300131\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; max-width: 100%; width: 780px; font-size: 15.4px;\"><img class=\"wp-image-300131 size-full\" src=\"https://cms.anycar.vn/wp-content/uploads/2023/03/8e01ef8e-20230504_070256.jpg\" alt=\"Toyota Vios 2023 tại buổi lễ ra mắt gần đây\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Toyota Vios 2023 tại buổi lễ ra mắt gần đây</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Về ngoại hình, Toyota Vios 2023 rũ bỏ vẽ hầm hố ở thế hệ tiền nhiệm để trở lại dáng vẻ thanh lịch vốn có của những chiếc Sedan truyền thống. Cụ thể, đầu xe Vios 2023 gọn gàng hơn với bộ tản nhiệt đa giác, đèn pha trên xe cũng được làm lại sắc nét và góc cạnh hơn, hốc hút gió trên xe cũng đã được thay đổi thành dạng lưới thay vì móc câu giống thế hệ trước.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_300130\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; max-width: 100%; width: 780px; font-size: 15.4px;\"><img class=\"wp-image-300130 size-full\" src=\"https://cms.anycar.vn/wp-content/uploads/2023/03/7f7d1612-20230504_070255-1.jpg\" alt=\"Cận cảnh Toyota Vios 2023\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Cận cảnh Toyota Vios 2023</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Ngoài ra, sự thay đổi đáng chú ý trên Toyota Vios đời mới lần này là đường LED chạy ngang nắp capo, đây là chi tiết đang được hãng xe Toyota tích cực bổ sung trên các sản phẩm của mình.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_300132\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; max-width: 100%; width: 780px; font-size: 15.4px;\"><img class=\"wp-image-300132 size-full\" src=\"https://cms.anycar.vn/wp-content/uploads/2023/03/12985509-20230504_070257.jpg\" alt=\"Đuôi xe gọn gàng thanh lịch của Vios đời mới\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Đuôi xe gọn gàng thanh lịch của Vios đời mới</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Về nội thất, Toyota Vios 2023 nay đã hiện đại và thời trang hơn với cụm màn hình cảm ứng được đặt nổi trên taplo, đi kèm với đó là các cổng gió điều hòa được sắp xếp cân đối cho 2 bên. Vô lăng sử dụng trên Vios 2023 là vô lăng 03 chấu tích hợp phím bấm chức năng rất tiện dụng.&nbsp;</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_300128\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; max-width: 100%; width: 780px; font-size: 15.4px;\"><img class=\"wp-image-300128 size-full\" src=\"https://cms.anycar.vn/wp-content/uploads/2023/03/4422a352-20230504_070254.jpg\" alt=\"Màn hình được đặt nổi là thay đổi ấn tượng bên trong cabin Toyota Vios 2023\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Màn hình được đặt nổi là thay đổi ấn tượng bên trong cabin Toyota Vios 2023</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Lốp dự phòng trên xe sẽ được lược bỏ ở thế hệ này, nhiều khách hàng Việt tỏ ra khá tiếc nuối với thay đổi này.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị tiện nghi trên Vios 2023 có thể kể đến như: Màn hình cảm ứng 9 inch, kết nối Apple CarPlay và Android Auto, phiên bản cao cấp sử dụng vô lăng bọc da, sạc điện thoại không dây Qi, phanh tay điện tử, đèn viền nội thất 64 màu, điều hòa tự động, 6 loa, đồng hồ tài xế dạng kỹ thuật số 7 inch.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_300129\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; max-width: 100%; width: 780px; font-size: 15.4px;\"><img class=\"wp-image-300129 size-full\" src=\"https://cms.anycar.vn/wp-content/uploads/2023/03/7f7d1612-20230504_070255.jpg\" alt=\"Toyota Vios 2023 sở hữu thêm một dải LED chạy ngang capo, rất hiện đại\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Toyota Vios 2023 sở hữu thêm một dải LED chạy ngang capo, rất hiện đại</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị an toàn mới của Toyota Vios 2023 có thể kể đến như: hệ thống cảnh báo tiền va chạm và phanh khẩn cấp, cảnh báo lệch làn đường, kiểm soát giữ làn đường, giám sát điểm mù và cảnh báo phương tiện cắt ngang phía sau xe,...</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_300133\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; max-width: 100%; width: 780px; font-size: 15.4px;\"><img class=\"wp-image-300133 size-full\" src=\"https://cms.anycar.vn/wp-content/uploads/2023/03/767056de-20230504_071358.jpg\" alt=\"Toyota Vios 2023 tại đại lý Malaysia\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Toyota Vios 2023 tại đại lý Malaysia</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Động cơ được sử dụng trên Toyota Vios 2023 là loại động cơ xăng, mã hiệu 2NR-VE có dung tích 1.5L cho công suất cực đại 104 mã lực, momen xoắn cực đại 138Nm.&nbsp;</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Về giá cả, hiện tại Toyota Việt Nam chưa công bố thông tin về giá xe Toyota Vios 2023 tại Việt Nam, Anycar sẽ cập nhật lại khi giá xe được công bố. Ngoài ra, thông tin Toyota Vios 2023 cập bến Việt Nam hiện tại là chưa đúng, mẫu xe này vẫn chưa mở bán tại Việt Nam.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><h2 id=\"mucluc-gia-ban\" class=\"ftwp-heading\" style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-weight: 700; color: rgb(33, 37, 41); font-size: 22px; padding: 0px;\"><span class=\"ez-toc-section\" id=\"Gia_xe_Toyota_Vios_2023_bao_nhieu\" style=\"font-style: inherit; font-weight: inherit;\"></span><span style=\"font-style: inherit; font-weight: inherit; font-size: 18pt;\">Giá xe Toyota Vios 2023 bao nhiêu?</span><span class=\"ez-toc-section-end\" style=\"font-style: inherit; font-weight: inherit;\"></span></h2><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">Tại thị trường Việt Nam, Giá xe Toyota Vios 2023 dao động từ 489 - 641 triệu đồng&nbsp;cho 06 phiên bản khác nhau bao gồm: Vios E - MT (7 túi khí), Vios E - MT (3 túi khí), Vios E - CVT (3 túi khí), Vios - E CVT (7 túi khí), Vios G - CVT, Vios GR-S.&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\">&nbsp;</p><table border=\"1\" cellspacing=\"1\" cellpadding=\"1\" style=\"color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; border-spacing: 0px; font-size: 15.4px; width: 772.99px;\"><tbody><tr style=\"height: 56px;\"><td colspan=\"5\" style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 772.323px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-weight: 700;\">Bảng giá xe Toyota Vios tháng 05/2023 tại Việt Nam</span></p></td></tr><tr style=\"height: 56px;\"><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-weight: 700;\">Phiên bản</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-weight: 700;\">Giá xe niêm yết (VNĐ)</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-weight: 700;\">Giá lăn bánh tại Hà Nội&nbsp; (VNĐ)</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-weight: 700;\">Giá lăn bánh tại TPHCM&nbsp; (VNĐ)</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-weight: 700;\">Giá lăn bánh tại các tỉnh khác (VNĐ)</span></p></td></tr><tr style=\"height: 56px;\"><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">Vios E - MT (3 túi khí)</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">489.000.000&nbsp;</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">570.000.000</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">560.000.000</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">541.000.000</p></td></tr><tr style=\"height: 56px;\"><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Vios E - MT (7 túi khí)</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">506.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">589.000.000</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">579.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">560.000.000</span></p></td></tr><tr style=\"height: 56px;\"><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Vios E - CVT (3 túi khí)</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">542.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">629.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">619.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">600.000.000</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Vios E - CVT (7 túi khí)</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">561.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">650.000.000&nbsp;</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">639.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">620.000.000</span></p></td></tr><tr style=\"height: 56px;\"><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Vios G - CVT</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">592.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">685.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">673.000.000</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">654.000.000</span></p></td></tr><tr style=\"height: 56px;\"><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 105.156px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">Vios GR-S</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 137.844px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">641.000.000</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 167.896px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">740.000.000</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 176.729px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">727.000.000</p></td><td style=\"padding: 0px; text-align: center; vertical-align: top; height: 56px; width: 184.698px;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">708.000.000</span></p></td></tr></tbody></table><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; padding: 0px; font-size: 15.4px;\"><em><span style=\"font-weight: 700;\"><span style=\"font-style: inherit; font-weight: inherit; text-decoration-line: underline;\">#Lưu ý:</span></span>&nbsp;Giá lăn bánh Toyota Vios bên trên chỉ mang tính chất tham khảo, có thể phát sinh thêm chi phí khi mua xe.</em></p>\r\n                                \r\n                                \r\n                                ', '1683267219176-7df8196b-20221129_095600.jpg', 1, '2023-05-05 04:10:33', '2023-05-05 06:13:39');
INSERT INTO `baiviet` (`mabv`, `tenbv`, `motangan`, `noidung`, `hinhdd`, `manv`, `created_at`, `updated_at`) VALUES
(14, 'Giá xe ô tô cũ dưới 200 triệu VND tháng 05/2023', 'Các mẫu xe ô tô cũ dưới 200 triệu có thể kể đến như: KIA Morning, CD5, Hyundai i10, Chevrolet Spark, Matiz, Honda Brio, City, Ford Everest, Toyota Vios tùy thuộc vào đời xe và năm sản xuất. Mời bạn tham khảo bảng giá xe ô tô cũ dưới 200 triệu tại Anycar n', '<h2 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-size: 22px; font-weight: 700; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\"><b>Bảng giá xe ô tô cũ dưới 200 triệu VND</b><span class=\"ez-toc-section-end\" style=\"font-style: inherit; font-weight: inherit;\"></span></h2><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><b><i>Lưu ý bạn đọc và khách hàng của Anycar</i></b><span style=\"font-style: inherit;\">&nbsp;về bảng giá xe ô tô cũ dưới 200 triệu VND dưới đây được Anycar tổng hợp từ những mẫu xe ô tô cũ đã từng bán. Xe có thể sẽ không có ngay lúc bạn xem bài viết này, tuy nhiên quý khách hàng có nhu cầu mua xe ô tô dưới 200 triệu có thể để lại thông tin để Anycar có thể tư vấn và báo giá khi có xe.&nbsp;</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Các mẫu xe dưới 200 triệu VND có thể kể đến một số dòng xe nổi tiếng như: KIA Morning, Hyundai i10, Chevrolet Spark, Toyota Vios, Honda City, Ford Everest, Mitsubishi Jolie,...</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><table border=\"1\" style=\"border-spacing: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px; width: 772.99px;\"><tbody><tr><td colspan=\"2\" style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><b>BẢNG GIÁ XE Ô TÔ CŨ DƯỚI 200 TRIỆU VND</b></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><b>Dòng Xe</b></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><b>Giá xe (triệu VND)</b></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">KIA Morning 2011 - 2015</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">150 - 200&nbsp;</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">KIA CD5 2011 - 2015</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">100 - 150</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">KIA Spectra 2011 - 2015</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">100 - 190</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Toyota Vios 2010</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">190 - 200&nbsp;</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Toyota Zace 2010- 2015</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">100 - 180</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Ford Laser 1.6L&nbsp;</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">45 - 200</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Ford Everest 2005</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">180 - 200</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Chevrolet Spark&nbsp;</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">85 - 190</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Daewoo Matiz</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">85 - 150</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Honda City 2002 - 2006</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">180 - 200&nbsp;</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Hyundai i10 2010</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">170 - 200</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Hyundai Tucson 2004</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">150 - 195</span></p></td></tr><tr><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">Mazda Premacy 2003</span></p></td><td style=\"padding: 0px; text-align: center; vertical-align: top;\"><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-style: inherit;\">150 - 200</span></p></td></tr></tbody></table><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px; text-align: center;\"><em><span style=\"font-style: inherit; font-weight: inherit; text-decoration-line: underline;\"><span style=\"font-weight: 700;\">#Tham khảo thêm:</span></span></em>&nbsp;<a href=\"https://anycar.vn/ban-xe-oto/\" style=\"color: rgb(145, 23, 10);\">Xe ô tô cũ</a>&nbsp;(đang bán tại Anycar)</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><h3 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-size: 18px; font-weight: 700; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\"><b>1. KIA Morning đời 2011 - 2015: Từ 150 triệu VND</b></h3><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262776\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262776 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/fa240a5e-20211223_032411.jpg\" alt=\"KIA Morning 2011 là mẫu xe ô tô cũ dưới 200 triệu được ưa chuộng tại Việt Nam\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">KIA Morning 2011 là mẫu xe ô tô cũ dưới 200 triệu được ưa chuộng tại Việt Nam</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px; text-align: center;\"><em><span style=\"font-style: inherit; font-weight: inherit; text-decoration-line: underline;\"><span style=\"font-weight: 700;\">#Tham khảo xe:</span></span></em>&nbsp;<a href=\"https://anycar.vn/ban-xe-oto/kia/morning-m1808/\" style=\"color: rgb(145, 23, 10);\">KIA Morning cũ</a>&nbsp;(đang bán tại Anycar)</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">KIA Morning đời 2011 - 2015 là&nbsp;<span style=\"font-weight: 700;\">dòng xe ô tô cũ có giá dưới 200 triệu VND</span>&nbsp;được nhiều người Việt ưa chuộng nhất nhờ ngoại hình không quá lạc hậu, trang bị đi kèm khá phong phú, hiện đại, giá thành dễ tiếp cận, độ bền bỉ cao.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit; font-weight: inherit; text-decoration-line: underline;\"><b><i>Thông tin xe KIA Morning 2011 - 2015</i></b><span style=\"font-style: inherit;\">:</span></span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">KIA Morning 2011 sở hữu chiều dài cơ sở 2.385mm, chiều Dài x Rộng x Cao của xe là 3.595 x 1.595 x 1.485mm.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262770\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262770 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/880cbf23-20211223_032216.jpg\" alt=\"KIA Morning 2011 sở hữu ngoại thất cá tính, trẻ trung\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">KIA Morning 2011 sở hữu ngoại thất cá tính, trẻ trung</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị ngoại thất của xe KIA Morning 2011 - 2015&nbsp; bao gồm: gương chiếu hậu chỉnh và gập điện, tích hợp đèn xi-nhan, cánh hướng gió khí động học cùng đèn phanh trên cao và bộ mâm hợp kim tối màu 15 inch cách điệu dạng 8 chấu đơn độc đáo.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị nội thất bên trong xe KIA Morning 2011 cũng khá phong phú mặc dù là dòng xe ô tô cũ giá rẻ dưới 200 triệu VND. Cụ thể, trang bị tiện nghi của Morning 2011 bao gồm: Đầu CD, kết nối điện thoại thông minh, kết nối Radio/AUX/USB/MP3, hệ thống âm thanh 4 loa, điều hòa tự động, ghế ngồi bọc da,..</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262768\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262768 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/207b8e27-20211223_032207.jpg\" alt=\"Khoang nội thất của KIA Morning 2011\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Khoang nội thất của KIA Morning 2011</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Hệ thống an toàn trên KIA Morning đời 2011 trở về trước khá thô sơ như: 2 túi khí, khung xe chịu lực, dây an toàn,...</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Động cơ của KIA Morning cũ dưới 200 triệu là động cơ&nbsp; động cơ xăng I4 MPI 1.0L cho công suất cực đại 64Hp tại vòng tua 5.500 vòng/phút, mô-men xoắn cực đại đạt 97Nm tại 2.800 vòng/phút. Có 2 loại hộp số đi kèm dành cho khách hàng tùy chọn đó là hộp số sàn 5 cấp và hộp số tự động 4 cấp.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><h3 style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-size: 18px; font-weight: 700; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\"><span class=\"ez-toc-section\" id=\"2_Hyundai_Grand_i10_2010_Tu_170_trieu_VND\" style=\"font-style: inherit; font-weight: inherit;\"></span><b>2. Hyundai Grand i10 2010: Từ 170 triệu VND</b><span class=\"ez-toc-section-end\" style=\"font-style: inherit; font-weight: inherit;\"></span></h3><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262780\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262780 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/6128c0fb-20211223_032424.jpg\" alt=\"Hyundai Grand i10 đời 2010 có giá dưới 200 triệu VND\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Hyundai Grand i10 đời 2010 có giá dưới 200 triệu VND</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px; text-align: center;\"><em><span style=\"font-style: inherit; font-weight: inherit; text-decoration-line: underline;\"><span style=\"font-weight: 700;\">#Tham khảo xe:</span></span></em>&nbsp;<a href=\"https://anycar.vn/ban-xe-oto/hyundai/i10-m1808/\" style=\"color: rgb(145, 23, 10);\">Hyundai Grand i10 cũ</a>&nbsp;(đang bán tại Anycar)</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Hyundai Grand i10 cũng là một trong những dòng xe ô tô cũ dưới 200 triệu mà Anycar muốn giới thiệu đến bạn đọc. Những chiếc xe đô thị cỡ nhỏ do Hyundai sản xuất luôn mang đến thiết kế trẻ trung cho người dùng và một khoang cabin đầy ắp công nghệ.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit; font-weight: inherit; text-decoration-line: underline;\"><b><i>Thông tin xe Hyundai Grand i10 2010:&nbsp;</i></b></span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Hyundai Grand i10 là dòng xe đô thị cỡ nhỏ, kiểu dáng xe Hatchback - Sedan, 5 chỗ ngồi, sản xuất bởi hãng xe Hyundai - Hàn Quốc.</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262783\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262783 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/9ac81337-20211223_032428.jpg\" alt=\"Hyundai i10 rất được ưa chuộng tại Việt Nam\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Hyundai i10 rất được ưa chuộng tại Việt Nam</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><div class=\"ads_position_ajax\" data-group_id=\"7037\" style=\"color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><div id=\"anyca-1662521274\" style=\"margin: 10px auto; text-align: center;\"><a href=\"https://anycar.vn/dich-vu-sua-chua.html\" style=\"color: rgb(145, 23, 10);\"><img src=\"https://cms.anycar.vn/wp-content/uploads/2022/11/d0644d6b-20221125_085708.jpg\" alt=\"\" width=\"750\" height=\"180\" style=\"height: auto; display: inline-block; width: auto !important;\"></a></div></div><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị ngoại thất của Hyundai Grand i10 đời 2010 - 2016 cũng khá hiện đại không hề thua kém gì so với những mẫu xe hiện đại bây giờ. Cụ thể, một số trang bị ngoại thất nổi bất trên Hyundai i10 có thể kể đến như: hệ thống chiếu sáng Halogen, gương chiếu hậu chỉnh tay/báo rẽ, chắn bùn, cánh lướt gió,...</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Hyundai i10 đời 2010 sử dụng cho mình động cơ xăng dung tích 1.2L, công suất tối đa 79 mã lực. Đi kèm là hộp số sàn 4 cấp hoặc tự động 5 cấp.&nbsp;</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262786\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262786 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/8bed832f-20211223_032433.jpg\" alt=\"Nội thất đơn giản, ít hư hỏng vặt\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Nội thất đơn giản, ít hư hỏng vặt</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị tiện nghi trên Hyundai i10 2010 có thể kể đến như: Ghế ngồi bọc nỉ, hệ thống âm thanh 6 loa, Radio, AM/FM, CD 1 đĩa, kết nối MP3,...</span></p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><figure id=\"attachment_262789\" class=\"wp-caption aligncenter\" style=\"margin-bottom: 0px; padding: 0px; max-width: 100%; width: 780px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><img class=\"wp-image-262789 size-full\" src=\"https://storage.googleapis.com/f1-cms/2021/12/d5adc795-20211223_032437.jpg\" alt=\"Hàng ghế thứ 02 khá thoáng của Hyundai i10 2010\" width=\"780\" height=\"500\" style=\"height: auto; width: auto !important;\"><figcaption class=\"wp-caption-text\" style=\"text-align: center;\">Hàng ghế thứ 02 khá thoáng của Hyundai i10 2010</figcaption></figure><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\">&nbsp;</p><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 15.4px;\"><span style=\"font-style: inherit;\">Trang bị an toàn của Hyundai i10 2010 bao gồm: Trợ lực lái điện, phanh dẫn động thủy lực, dây đai an toàn 03 điểm, 02 túi khí, khóa cửa trung tâm, khóa an toàn cho bé,...</span></p>                                <h4></h4>', '1683269093448-0a8df037-20211223_032955.jpg', 1, '2023-05-05 06:42:15', '2023-05-05 06:44:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cthoadon`
--

CREATE TABLE `cthoadon` (
  `mahd` varchar(255) NOT NULL,
  `masp` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `giatien` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cthoadon`
--

INSERT INTO `cthoadon` (`mahd`, `masp`, `soluong`, `giatien`, `created_at`, `updated_at`) VALUES
('3dfd0f4e97d104954ed30cc6988dfd83', 5, 1, 150000, '2023-05-09 06:02:28', '2023-05-09 06:02:28'),
('7f83800e275e753a858425460817e95e', 9, 4, 1396000, '2023-05-08 13:32:43', '2023-05-09 05:26:18'),
('d5b8ee036453e19f7f75856333c0130b', 12, 1, 1749000, '2023-05-09 06:10:04', '2023-05-09 06:10:04'),
('fd32f88f8e002a4767248ee400852e09', 9, 3, 1047000, '2023-05-09 06:04:02', '2023-05-09 06:04:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ctphieunhap`
--

CREATE TABLE `ctphieunhap` (
  `mapn` varchar(255) NOT NULL,
  `masp` int(11) NOT NULL,
  `soluongnhap` int(11) NOT NULL,
  `gianhap` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ctphieunhap`
--

INSERT INTO `ctphieunhap` (`mapn`, `masp`, `soluongnhap`, `gianhap`, `created_at`, `updated_at`) VALUES
('d668ccf7d42f06a54968e05f5f98d3f2', 23, 10, 100000, '2023-05-09 10:09:43', '2023-05-09 10:10:17'),
('d668ccf7d42f06a54968e05f5f98d3f2', 25, 5, 100000, '2023-05-09 10:09:43', '2023-05-09 10:14:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `madm` int(11) NOT NULL,
  `tendm` varchar(255) NOT NULL,
  `hinhdd` varchar(255) NOT NULL,
  `motact` text NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`madm`, `tendm`, `hinhdd`, `motact`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(1, 'Tẩu Sạc Xe Hơi', '1683202483618-tausacxehoi.png', 'Tẩu sạc xe hơi là một thiết bị cho phép bạn sạc các thiết bị điện tử của mình trong khi đang lái xe. Nó được kết nối trực tiếp vào nguồn điện DC (điện áp trực tiếp từ hệ thống điện của xe) và cung cấp nguồn điện để sạc các thiết bị điện tử như điện thoại,', 1, '2023-05-01 09:04:32', '2023-05-15 05:02:44'),
(2, 'Bơm Lốp Xe Ô Tô', '1683202598125-bomlopxeoto.png', 'Bơm lốp xe ô tô là một thiết bị dùng để bơm hoặc thổi khí vào lốp xe ô tô để giữ áp suất phù hợp. Khi áp suất trong lốp không đủ, bơm lốp sẽ được sử dụng để bơm thêm khí vào lốp để đạt áp suất khuyến nghị từ nhà sản xuất xe hoặc từ hướng dẫn sử dụng của l', 1, '2023-05-01 09:04:32', '2023-05-15 05:02:44'),
(3, 'Kích Bình Xe', '1683202623017-kichbinhxe.png', 'Kích bình xe (hay còn gọi là bình kích xăng) là một thiết bị cần thiết để kích nổ động cơ của xe máy hoặc xe ô tô khi bình xăng không còn đủ nhiên liệu. Khi bình xăng của xe bị hết, hoặc đường ống dẫn xăng bị tắc hoặc bị hỏng, động cơ không thể hoạt động ', 1, '2023-05-01 09:04:32', '2023-05-15 05:02:44'),
(4, 'Giá Treo Điện Thoại', '1683202656939-giatreodienthoai.png', 'Giá treo điện thoại là một thiết bị hỗ trợ để giữ cho điện thoại của bạn được treo lên một vị trí nhất định với các tùy chọn độ nghiêng và xoay. Giá treo điện thoại thường có nhiều loại, từ loại đơn giản giữ cho điện thoại ở vị trí hiển thị cố định đến nh', 1, '2023-05-01 09:04:32', '2023-05-15 05:02:44'),
(5, 'Lọc Không Khí - Khử Mùi', '1683202674283-lockhongkhi.png', 'Lọc không khí - khử mùi (hay còn gọi là máy lọc không khí) là một thiết bị giúp lọc và khử mùi không khí trong xe.', 1, '2023-05-01 09:04:32', '2023-05-15 05:02:44'),
(6, 'Máy Hút Bụi Trên Ô Tô', '1683202685544-mayhutbuitrenoto.png', 'Máy hút bụi trên ô tô là một thiết bị dùng để hút bụi, rác và các mảnh vụn khác trên bề mặt nội thất và ngoại thất của ô tô. Nó được thiết kế để tiện lợi sử dụng trong xe hơi, với kích thước nhỏ gọn, dễ dàng di chuyển và có đầu hút.', 1, '2023-05-01 09:04:32', '2023-05-15 05:02:44'),
(7, 'Bảng Số Điện Thoại', '1683202900252-bansodt.png', 'Bảng số điện thoại trên ô tô thường được gọi là bảng số điện thoại khẩn cấp hoặc bảng số điện thoại khẩn trương. Đây là một bảng ghi lại các số điện thoại khẩn cấp quan trọng như số điện thoại cảnh sát, cứu hỏa, cứu thương, trung tâm điều hành, trạm cảnh ', 1, '2023-05-04 12:21:40', '2023-05-15 05:02:44'),
(8, 'Phụ Kiện Trang Trí Ô Tô', '1683624954616-phukienoto.png', 'Phụ kiện trang trí ô tô là các sản phẩm được thiết kế để tăng cường ngoại thất hoặc nội thất của xe ô tô, tạo ra một cái nhìn mới mẻ và cá nhân hóa cho phương tiện của bạn. ', 1, '2023-05-09 09:35:54', '2023-05-15 05:02:44'),
(9, 'Phụ Kiện Tiện Ích Ô tô', '1683625819990-atj1652254619.jpg', 'Phụ kiện tiện ích ô tô là những sản phẩm được thiết kế để cải thiện chức năng hoặc tiện nghi cho xe ô tô.', 1, '2023-05-09 09:50:19', '2023-05-15 05:02:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gio`
--

CREATE TABLE `gio` (
  `magio` int(11) NOT NULL,
  `tengio` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `gio`
--

INSERT INTO `gio` (`magio`, `tengio`, `created_at`, `updated_at`) VALUES
(1, '7:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(2, '7:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(3, '8:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(4, '8:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(5, '9:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(6, '9:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(7, '10:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(8, '10:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(9, '11:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(10, '11:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(11, '12:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(12, '12:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(13, '13:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(14, '13:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(15, '14:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(16, '14:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(17, '15:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(18, '15:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(19, '16:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(20, '16:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(21, '17:00', '2023-05-01 09:04:21', '2023-05-01 09:04:21'),
(22, '17:30', '2023-05-01 09:04:21', '2023-05-01 09:04:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` varchar(255) NOT NULL,
  `ngaygiao` date NOT NULL,
  `tennguoinhan` varchar(255) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `ghichu` varchar(255) NOT NULL,
  `tongtiensp` float NOT NULL,
  `tongtienhd` float NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `ptthanhtoan` tinyint(1) NOT NULL,
  `maps` varchar(255) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `makh` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`mahd`, `ngaygiao`, `tennguoinhan`, `sodt`, `diachi`, `ghichu`, `tongtiensp`, `tongtienhd`, `thanhtoan`, `ptthanhtoan`, `maps`, `matt`, `manv`, `makh`, `created_at`, `updated_at`) VALUES
('3dfd0f4e97d104954ed30cc6988dfd83', '2023-05-12', 'Lô Nguyên Bảo', '0584025869', 'Phường Vạn Thắng,Huyện Mèo Vạc, Hà Giang', '', 999000, 1029000, 1, 1, 'a71b144344c6d8d83100967e88e687fd', 1, 1, 1, '2023-05-09 06:02:28', '2023-05-09 06:02:28'),
('7f83800e275e753a858425460817e95e', '2023-05-11', 'Dã Linh Trang', '0987664220', '499, Mỹ Ca, Cam Nghĩa,Thành phố Cam Ranh, Khánh Hòa', '', 1396000, 1406000, 2, 2, '0cdedc0f067d46406436946ccb93a2f6', 3, 1, 1, '2023-05-08 13:32:43', '2023-05-09 05:26:18'),
('d5b8ee036453e19f7f75856333c0130b', '2023-05-12', 'Sơn Sông Hương', '0772178934', 'Xã Nhựt Ninh,Huyện Đô Lương, Nghệ An', '', 1749000, 1779000, 1, 1, 'b885d5f26da6ee4dccbbb82b05d69e23', 1, 1, 1, '2023-05-09 06:10:04', '2023-05-09 06:10:04'),
('fd32f88f8e002a4767248ee400852e09', '2023-05-12', 'Tôn Thất Thúy Anh', '0381589074', 'Xã Tà Hộc,Huyện Quản Bạ, Hà Giang', '', 1047000, 1077000, 1, 1, '9e36662ba40c3d62ec938d943f40d574', 1, 1, 1, '2023-05-09 06:04:02', '2023-05-09 06:04:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadonrx`
--

CREATE TABLE `hoadonrx` (
  `mahdrx` varchar(255) NOT NULL,
  `ngayrua` date NOT NULL,
  `magio` int(11) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `ghichu` varchar(255) NOT NULL,
  `tongtienrx` float NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `ptthanhtoan` tinyint(1) NOT NULL,
  `malx` int(11) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `makh` int(11) NOT NULL,
  `tennguoirua` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `hoadonrx`
--

INSERT INTO `hoadonrx` (`mahdrx`, `ngayrua`, `magio`, `sodt`, `diachi`, `ghichu`, `tongtienrx`, `thanhtoan`, `ptthanhtoan`, `malx`, `matt`, `manv`, `makh`, `tennguoirua`, `created_at`, `updated_at`) VALUES
('3a12eb1f202117d94e8cbb3e4a79dfea', '2023-05-18', 10, '0583297860', 'Xã Nậm Xé, Huyện Văn Bàn, Lào Cai', 'Rửa nhanh nhé', 60000, 1, 1, 5, 1, 1, 1, 'Hi Hải Miên', '2023-05-06 08:25:11', '2023-05-09 08:45:20'),
('7da19fd11d5899ef659eff969fcd2063', '2023-06-09', 16, '0796057342', 'Huyện Thạch Thất, Hà Nội', '', 80000, 1, 2, 5, 3, 1, 1, 'Trà Liên Hương', '2023-05-06 08:41:41', '2023-05-06 08:57:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `huyen`
--

CREATE TABLE `huyen` (
  `mahuyen` int(11) NOT NULL,
  `tenhuyen` varchar(255) NOT NULL,
  `matinh` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `huyen`
--

INSERT INTO `huyen` (`mahuyen`, `tenhuyen`, `matinh`, `created_at`, `updated_at`) VALUES
(1, 'Quận Ba Đình', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(2, 'Quận Hoàn Kiếm', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(3, 'Quận Tây Hồ', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(4, 'Quận Long Biên', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(5, 'Quận Cầu Giấy', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(6, 'Quận Đống Đa', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(7, 'Quận Hai Bà Trưng', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(8, 'Quận Hoàng Mai', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(9, 'Quận Thanh Xuân', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(10, 'Huyện Sóc Sơn', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(11, 'Huyện Đông Anh', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(12, 'Huyện Gia Lâm', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(13, 'Quận Nam Từ Liêm', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(14, 'Huyện Thanh Trì', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(15, 'Quận Bắc Từ Liêm', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(16, 'Huyện Mê Linh', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(17, 'Quận Hà Đông', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(18, 'Thị xã Sơn Tây', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(19, 'Huyện Ba Vì', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(20, 'Huyện Phúc Thọ', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(21, 'Huyện Đan Phượng', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(22, 'Huyện Hoài Đức', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(23, 'Huyện Quốc Oai', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(24, 'Huyện Thạch Thất', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(25, 'Huyện Chương Mỹ', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(26, 'Huyện Thanh Oai', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(27, 'Huyện Thường Tín', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(28, 'Huyện Phú Xuyên', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(29, 'Huyện Ứng Hòa', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(30, 'Huyện Mỹ Đức', 1, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(31, 'Thành phố Hà Giang', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(32, 'Huyện Đồng Văn', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(33, 'Huyện Mèo Vạc', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(34, 'Huyện Yên Minh', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(35, 'Huyện Quản Bạ', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(36, 'Huyện Vị Xuyên', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(37, 'Huyện Bắc Mê', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(38, 'Huyện Hoàng Su Phì', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(39, 'Huyện Xín Mần', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(40, 'Huyện Bắc Quang', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(41, 'Huyện Quang Bình', 2, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(42, 'Thành phố Cao Bằng', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(43, 'Huyện Bảo Lâm', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(44, 'Huyện Bảo Lạc', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(45, 'Huyện Hà Quảng', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(46, 'Huyện Trùng Khánh', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(47, 'Huyện Hạ Lang', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(48, 'Huyện Quảng Hòa', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(49, 'Huyện Hoà An', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(50, 'Huyện Nguyên Bình', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(51, 'Huyện Thạch An', 3, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(52, 'Thành Phố Bắc Kạn', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(53, 'Huyện Pác Nặm', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(54, 'Huyện Ba Bể', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(55, 'Huyện Ngân Sơn', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(56, 'Huyện Bạch Thông', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(57, 'Huyện Chợ Đồn', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(58, 'Huyện Chợ Mới', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(59, 'Huyện Na Rì', 4, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(60, 'Thành phố Tuyên Quang', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(61, 'Huyện Lâm Bình', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(62, 'Huyện Na Hang', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(63, 'Huyện Chiêm Hóa', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(64, 'Huyện Hàm Yên', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(65, 'Huyện Yên Sơn', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(66, 'Huyện Sơn Dương', 5, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(67, 'Thành phố Lào Cai', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(68, 'Huyện Bát Xát', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(69, 'Huyện Mường Khương', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(70, 'Huyện Si Ma Cai', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(71, 'Huyện Bắc Hà', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(72, 'Huyện Bảo Thắng', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(73, 'Huyện Bảo Yên', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(74, 'Thị xã Sa Pa', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(75, 'Huyện Văn Bàn', 6, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(76, 'Thành phố Điện Biên Phủ', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(77, 'Thị Xã Mường Lay', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(78, 'Huyện Mường Nhé', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(79, 'Huyện Mường Chà', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(80, 'Huyện Tủa Chùa', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(81, 'Huyện Tuần Giáo', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(82, 'Huyện Điện Biên', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(83, 'Huyện Điện Biên Đông', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(84, 'Huyện Mường Ảng', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(85, 'Huyện Nậm Pồ', 7, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(86, 'Thành phố Lai Châu', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(87, 'Huyện Tam Đường', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(88, 'Huyện Mường Tè', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(89, 'Huyện Sìn Hồ', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(90, 'Huyện Phong Thổ', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(91, 'Huyện Than Uyên', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(92, 'Huyện Tân Uyên', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(93, 'Huyện Nậm Nhùn', 8, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(94, 'Thành phố Sơn La', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(95, 'Huyện Quỳnh Nhai', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(96, 'Huyện Thuận Châu', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(97, 'Huyện Mường La', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(98, 'Huyện Bắc Yên', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(99, 'Huyện Phù Yên', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(100, 'Huyện Mộc Châu', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(101, 'Huyện Yên Châu', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(102, 'Huyện Mai Sơn', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(103, 'Huyện Sông Mã', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(104, 'Huyện Sốp Cộp', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(105, 'Huyện Vân Hồ', 9, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(106, 'Thành phố Yên Bái', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(107, 'Thị xã Nghĩa Lộ', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(108, 'Huyện Lục Yên', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(109, 'Huyện Văn Yên', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(110, 'Huyện Mù Căng Chải', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(111, 'Huyện Trấn Yên', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(112, 'Huyện Trạm Tấu', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(113, 'Huyện Văn Chấn', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(114, 'Huyện Yên Bình', 10, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(115, 'Thành phố Hòa Bình', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(116, 'Huyện Đà Bắc', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(117, 'Huyện Lương Sơn', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(118, 'Huyện Kim Bôi', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(119, 'Huyện Cao Phong', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(120, 'Huyện Tân Lạc', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(121, 'Huyện Mai Châu', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(122, 'Huyện Lạc Sơn', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(123, 'Huyện Yên Thủy', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(124, 'Huyện Lạc Thủy', 11, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(125, 'Thành phố Thái Nguyên', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(126, 'Thành phố Sông Công', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(127, 'Huyện Định Hóa', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(128, 'Huyện Phú Lương', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(129, 'Huyện Đồng Hỷ', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(130, 'Huyện Võ Nhai', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(131, 'Huyện Đại Từ', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(132, 'Thị xã Phổ Yên', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(133, 'Huyện Phú Bình', 12, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(134, 'Thành phố Lạng Sơn', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(135, 'Huyện Tràng Định', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(136, 'Huyện Bình Gia', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(137, 'Huyện Văn Lãng', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(138, 'Huyện Cao Lộc', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(139, 'Huyện Văn Quan', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(140, 'Huyện Bắc Sơn', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(141, 'Huyện Hữu Lũng', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(142, 'Huyện Chi Lăng', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(143, 'Huyện Lộc Bình', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(144, 'Huyện Đình Lập', 13, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(145, 'Thành phố Hạ Long', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(146, 'Thành phố Móng Cái', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(147, 'Thành phố Cẩm Phả', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(148, 'Thành phố Uông Bí', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(149, 'Huyện Bình Liêu', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(150, 'Huyện Tiên Yên', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(151, 'Huyện Đầm Hà', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(152, 'Huyện Hải Hà', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(153, 'Huyện Ba Chẽ', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(154, 'Huyện Vân Đồn', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(155, 'Thị xã Đông Triều', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(156, 'Thị xã Quảng Yên', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(157, 'Huyện Cô Tô', 14, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(158, 'Thành phố Bắc Giang', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(159, 'Huyện Yên Thế', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(160, 'Huyện Tân Yên', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(161, 'Huyện Lạng Giang', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(162, 'Huyện Lục Nam', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(163, 'Huyện Lục Ngạn', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(164, 'Huyện Sơn Động', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(165, 'Huyện Yên Dũng', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(166, 'Huyện Việt Yên', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(167, 'Huyện Hiệp Hòa', 15, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(168, 'Thành phố Việt Trì', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(169, 'Thị xã Phú Thọ', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(170, 'Huyện Đoan Hùng', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(171, 'Huyện Hạ Hoà', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(172, 'Huyện Thanh Ba', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(173, 'Huyện Phù Ninh', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(174, 'Huyện Yên Lập', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(175, 'Huyện Cẩm Khê', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(176, 'Huyện Tam Nông', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(177, 'Huyện Lâm Thao', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(178, 'Huyện Thanh Sơn', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(179, 'Huyện Thanh Thuỷ', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(180, 'Huyện Tân Sơn', 16, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(181, 'Thành phố Vĩnh Yên', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(182, 'Thành phố Phúc Yên', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(183, 'Huyện Lập Thạch', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(184, 'Huyện Tam Dương', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(185, 'Huyện Tam Đảo', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(186, 'Huyện Bình Xuyên', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(187, 'Huyện Yên Lạc', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(188, 'Huyện Vĩnh Tường', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(189, 'Huyện Sông Lô', 17, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(190, 'Thành phố Bắc Ninh', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(191, 'Huyện Yên Phong', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(192, 'Huyện Quế Võ', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(193, 'Huyện Tiên Du', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(194, 'Thành phố Từ Sơn', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(195, 'Huyện Thuận Thành', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(196, 'Huyện Gia Bình', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(197, 'Huyện Lương Tài', 18, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(198, 'Thành phố Hải Dương', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(199, 'Thành phố Chí Linh', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(200, 'Huyện Nam Sách', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(201, 'Thị xã Kinh Môn', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(202, 'Huyện Kim Thành', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(203, 'Huyện Thanh Hà', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(204, 'Huyện Cẩm Giàng', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(205, 'Huyện Bình Giang', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(206, 'Huyện Gia Lộc', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(207, 'Huyện Tứ Kỳ', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(208, 'Huyện Ninh Giang', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(209, 'Huyện Thanh Miện', 19, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(210, 'Quận Hồng Bàng', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(211, 'Quận Ngô Quyền', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(212, 'Quận Lê Chân', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(213, 'Quận Hải An', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(214, 'Quận Kiến An', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(215, 'Quận Đồ Sơn', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(216, 'Quận Dương Kinh', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(217, 'Huyện Thuỷ Nguyên', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(218, 'Huyện An Dương', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(219, 'Huyện An Lão', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(220, 'Huyện Kiến Thuỵ', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(221, 'Huyện Tiên Lãng', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(222, 'Huyện Vĩnh Bảo', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(223, 'Huyện Cát Hải', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(224, 'Huyện Bạch Long Vĩ', 20, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(225, 'Thành phố Hưng Yên', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(226, 'Huyện Văn Lâm', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(227, 'Huyện Văn Giang', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(228, 'Huyện Yên Mỹ', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(229, 'Thị xã Mỹ Hào', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(230, 'Huyện Ân Thi', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(231, 'Huyện Khoái Châu', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(232, 'Huyện Kim Động', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(233, 'Huyện Tiên Lữ', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(234, 'Huyện Phù Cừ', 21, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(235, 'Thành phố Thái Bình', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(236, 'Huyện Quỳnh Phụ', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(237, 'Huyện Hưng Hà', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(238, 'Huyện Đông Hưng', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(239, 'Huyện Thái Thụy', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(240, 'Huyện Tiền Hải', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(241, 'Huyện Kiến Xương', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(242, 'Huyện Vũ Thư', 22, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(243, 'Thành phố Phủ Lý', 23, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(244, 'Thị xã Duy Tiên', 23, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(245, 'Huyện Kim Bảng', 23, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(246, 'Huyện Thanh Liêm', 23, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(247, 'Huyện Bình Lục', 23, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(248, 'Huyện Lý Nhân', 23, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(249, 'Thành phố Nam Định', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(250, 'Huyện Mỹ Lộc', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(251, 'Huyện Vụ Bản', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(252, 'Huyện Ý Yên', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(253, 'Huyện Nghĩa Hưng', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(254, 'Huyện Nam Trực', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(255, 'Huyện Trực Ninh', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(256, 'Huyện Xuân Trường', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(257, 'Huyện Giao Thủy', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(258, 'Huyện Hải Hậu', 24, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(259, 'Thành phố Ninh Bình', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(260, 'Thành phố Tam Điệp', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(261, 'Huyện Nho Quan', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(262, 'Huyện Gia Viễn', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(263, 'Huyện Hoa Lư', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(264, 'Huyện Yên Khánh', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(265, 'Huyện Kim Sơn', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(266, 'Huyện Yên Mô', 25, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(267, 'Thành phố Thanh Hóa', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(268, 'Thị xã Bỉm Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(269, 'Thành phố Sầm Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(270, 'Huyện Mường Lát', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(271, 'Huyện Quan Hóa', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(272, 'Huyện Bá Thước', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(273, 'Huyện Quan Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(274, 'Huyện Lang Chánh', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(275, 'Huyện Ngọc Lặc', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(276, 'Huyện Cẩm Thủy', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(277, 'Huyện Thạch Thành', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(278, 'Huyện Hà Trung', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(279, 'Huyện Vĩnh Lộc', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(280, 'Huyện Yên Định', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(281, 'Huyện Thọ Xuân', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(282, 'Huyện Thường Xuân', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(283, 'Huyện Triệu Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(284, 'Huyện Thiệu Hóa', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(285, 'Huyện Hoằng Hóa', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(286, 'Huyện Hậu Lộc', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(287, 'Huyện Nga Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(288, 'Huyện Như Xuân', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(289, 'Huyện Như Thanh', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(290, 'Huyện Nông Cống', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(291, 'Huyện Đông Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(292, 'Huyện Quảng Xương', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(293, 'Thị xã Nghi Sơn', 26, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(294, 'Thành phố Vinh', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(295, 'Thị xã Cửa Lò', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(296, 'Thị xã Thái Hoà', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(297, 'Huyện Quế Phong', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(298, 'Huyện Quỳ Châu', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(299, 'Huyện Kỳ Sơn', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(300, 'Huyện Tương Dương', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(301, 'Huyện Nghĩa Đàn', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(302, 'Huyện Quỳ Hợp', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(303, 'Huyện Quỳnh Lưu', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(304, 'Huyện Con Cuông', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(305, 'Huyện Tân Kỳ', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(306, 'Huyện Anh Sơn', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(307, 'Huyện Diễn Châu', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(308, 'Huyện Yên Thành', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(309, 'Huyện Đô Lương', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(310, 'Huyện Thanh Chương', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(311, 'Huyện Nghi Lộc', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(312, 'Huyện Nam Đàn', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(313, 'Huyện Hưng Nguyên', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(314, 'Thị xã Hoàng Mai', 27, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(315, 'Thành phố Hà Tĩnh', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(316, 'Thị xã Hồng Lĩnh', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(317, 'Huyện Hương Sơn', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(318, 'Huyện Đức Thọ', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(319, 'Huyện Vũ Quang', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(320, 'Huyện Nghi Xuân', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(321, 'Huyện Can Lộc', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(322, 'Huyện Hương Khê', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(323, 'Huyện Thạch Hà', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(324, 'Huyện Cẩm Xuyên', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(325, 'Huyện Kỳ Anh', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(326, 'Huyện Lộc Hà', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(327, 'Thị xã Kỳ Anh', 28, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(328, 'Thành Phố Đồng Hới', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(329, 'Huyện Minh Hóa', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(330, 'Huyện Tuyên Hóa', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(331, 'Huyện Quảng Trạch', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(332, 'Huyện Bố Trạch', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(333, 'Huyện Quảng Ninh', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(334, 'Huyện Lệ Thủy', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(335, 'Thị xã Ba Đồn', 29, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(336, 'Thành phố Đông Hà', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(337, 'Thị xã Quảng Trị', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(338, 'Huyện Vĩnh Linh', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(339, 'Huyện Hướng Hóa', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(340, 'Huyện Gio Linh', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(341, 'Huyện Đa Krông', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(342, 'Huyện Cam Lộ', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(343, 'Huyện Triệu Phong', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(344, 'Huyện Hải Lăng', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(345, 'Huyện Cồn Cỏ', 30, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(346, 'Thành phố Huế', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(347, 'Huyện Phong Điền', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(348, 'Huyện Quảng Điền', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(349, 'Huyện Phú Vang', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(350, 'Thị xã Hương Thủy', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(351, 'Thị xã Hương Trà', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(352, 'Huyện A Lưới', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(353, 'Huyện Phú Lộc', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(354, 'Huyện Nam Đông', 31, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(355, 'Quận Liên Chiểu', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(356, 'Quận Thanh Khê', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(357, 'Quận Hải Châu', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(358, 'Quận Sơn Trà', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(359, 'Quận Ngũ Hành Sơn', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(360, 'Quận Cẩm Lệ', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(361, 'Huyện Hòa Vang', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(362, 'Huyện Hoàng Sa', 32, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(363, 'Thành phố Tam Kỳ', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(364, 'Thành phố Hội An', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(365, 'Huyện Tây Giang', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(366, 'Huyện Đông Giang', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(367, 'Huyện Đại Lộc', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(368, 'Thị xã Điện Bàn', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(369, 'Huyện Duy Xuyên', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(370, 'Huyện Quế Sơn', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(371, 'Huyện Nam Giang', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(372, 'Huyện Phước Sơn', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(373, 'Huyện Hiệp Đức', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(374, 'Huyện Thăng Bình', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(375, 'Huyện Tiên Phước', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(376, 'Huyện Bắc Trà My', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(377, 'Huyện Nam Trà My', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(378, 'Huyện Núi Thành', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(379, 'Huyện Phú Ninh', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(380, 'Huyện Nông Sơn', 33, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(381, 'Thành phố Quảng Ngãi', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(382, 'Huyện Bình Sơn', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(383, 'Huyện Trà Bồng', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(384, 'Huyện Sơn Tịnh', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(385, 'Huyện Tư Nghĩa', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(386, 'Huyện Sơn Hà', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(387, 'Huyện Sơn Tây', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(388, 'Huyện Minh Long', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(389, 'Huyện Nghĩa Hành', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(390, 'Huyện Mộ Đức', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(391, 'Thị xã Đức Phổ', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(392, 'Huyện Ba Tơ', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(393, 'Huyện Lý Sơn', 34, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(394, 'Thành phố Quy Nhơn', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(395, 'Huyện An Lão', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(396, 'Thị xã Hoài Nhơn', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(397, 'Huyện Hoài Ân', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(398, 'Huyện Phù Mỹ', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(399, 'Huyện Vĩnh Thạnh', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(400, 'Huyện Tây Sơn', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(401, 'Huyện Phù Cát', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(402, 'Thị xã An Nhơn', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(403, 'Huyện Tuy Phước', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(404, 'Huyện Vân Canh', 35, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(405, 'Thành phố Tuy Hoà', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(406, 'Thị xã Sông Cầu', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(407, 'Huyện Đồng Xuân', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(408, 'Huyện Tuy An', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(409, 'Huyện Sơn Hòa', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(410, 'Huyện Sông Hinh', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(411, 'Huyện Tây Hoà', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(412, 'Huyện Phú Hoà', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(413, 'Thị xã Đông Hòa', 36, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(414, 'Thành phố Nha Trang', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(415, 'Thành phố Cam Ranh', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(416, 'Huyện Cam Lâm', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(417, 'Huyện Vạn Ninh', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(418, 'Thị xã Ninh Hòa', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(419, 'Huyện Khánh Vĩnh', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(420, 'Huyện Diên Khánh', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(421, 'Huyện Khánh Sơn', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(422, 'Huyện Trường Sa', 37, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(423, 'Thành phố Phan Rang-Tháp Chàm', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(424, 'Huyện Bác Ái', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(425, 'Huyện Ninh Sơn', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(426, 'Huyện Ninh Hải', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(427, 'Huyện Ninh Phước', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(428, 'Huyện Thuận Bắc', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(429, 'Huyện Thuận Nam', 38, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(430, 'Thành phố Phan Thiết', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(431, 'Thị xã La Gi', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(432, 'Huyện Tuy Phong', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(433, 'Huyện Bắc Bình', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(434, 'Huyện Hàm Thuận Bắc', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(435, 'Huyện Hàm Thuận Nam', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(436, 'Huyện Tánh Linh', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(437, 'Huyện Đức Linh', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(438, 'Huyện Hàm Tân', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(439, 'Huyện Phú Quí', 39, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(440, 'Thành phố Kon Tum', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(441, 'Huyện Đắk Glei', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(442, 'Huyện Ngọc Hồi', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(443, 'Huyện Đắk Tô', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(444, 'Huyện Kon Plông', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(445, 'Huyện Kon Rẫy', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(446, 'Huyện Đắk Hà', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(447, 'Huyện Sa Thầy', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(448, 'Huyện Tu Mơ Rông', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(449, 'Huyện Ia H\' Drai', 40, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(450, 'Thành phố Pleiku', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(451, 'Thị xã An Khê', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(452, 'Thị xã Ayun Pa', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(453, 'Huyện KBang', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(454, 'Huyện Đăk Đoa', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(455, 'Huyện Chư Păh', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(456, 'Huyện Ia Grai', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(457, 'Huyện Mang Yang', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(458, 'Huyện Kông Chro', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(459, 'Huyện Đức Cơ', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(460, 'Huyện Chư Prông', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(461, 'Huyện Chư Sê', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(462, 'Huyện Đăk Pơ', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(463, 'Huyện Ia Pa', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(464, 'Huyện Krông Pa', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(465, 'Huyện Phú Thiện', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(466, 'Huyện Chư Pưh', 41, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(467, 'Thành phố Buôn Ma Thuột', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(468, 'Thị Xã Buôn Hồ', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(469, 'Huyện Ea H\'leo', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(470, 'Huyện Ea Súp', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(471, 'Huyện Buôn Đôn', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(472, 'Huyện Cư M\'gar', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(473, 'Huyện Krông Búk', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(474, 'Huyện Krông Năng', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(475, 'Huyện Ea Kar', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(476, 'Huyện M\'Đrắk', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(477, 'Huyện Krông Bông', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(478, 'Huyện Krông Pắc', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(479, 'Huyện Krông A Na', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(480, 'Huyện Lắk', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(481, 'Huyện Cư Kuin', 42, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(482, 'Thành phố Gia Nghĩa', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(483, 'Huyện Đăk Glong', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(484, 'Huyện Cư Jút', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(485, 'Huyện Đắk Mil', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(486, 'Huyện Krông Nô', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(487, 'Huyện Đắk Song', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(488, 'Huyện Đắk R\'Lấp', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(489, 'Huyện Tuy Đức', 43, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(490, 'Thành phố Đà Lạt', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(491, 'Thành phố Bảo Lộc', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(492, 'Huyện Đam Rông', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(493, 'Huyện Lạc Dương', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(494, 'Huyện Lâm Hà', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(495, 'Huyện Đơn Dương', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(496, 'Huyện Đức Trọng', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(497, 'Huyện Di Linh', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(498, 'Huyện Bảo Lâm', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(499, 'Huyện Đạ Huoai', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(500, 'Huyện Đạ Tẻh', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(501, 'Huyện Cát Tiên', 44, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(502, 'Thị xã Phước Long', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(503, 'Thành phố Đồng Xoài', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(504, 'Thị xã Bình Long', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(505, 'Huyện Bù Gia Mập', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(506, 'Huyện Lộc Ninh', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(507, 'Huyện Bù Đốp', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(508, 'Huyện Hớn Quản', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(509, 'Huyện Đồng Phú', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(510, 'Huyện Bù Đăng', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(511, 'Huyện Chơn Thành', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(512, 'Huyện Phú Riềng', 45, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(513, 'Thành phố Tây Ninh', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(514, 'Huyện Tân Biên', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(515, 'Huyện Tân Châu', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(516, 'Huyện Dương Minh Châu', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(517, 'Huyện Châu Thành', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(518, 'Thị xã Hòa Thành', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(519, 'Huyện Gò Dầu', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(520, 'Huyện Bến Cầu', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(521, 'Thị xã Trảng Bàng', 46, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(522, 'Thành phố Thủ Dầu Một', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(523, 'Huyện Bàu Bàng', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(524, 'Huyện Dầu Tiếng', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(525, 'Thị xã Bến Cát', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(526, 'Huyện Phú Giáo', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(527, 'Thị xã Tân Uyên', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(528, 'Thành phố Dĩ An', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(529, 'Thành phố Thuận An', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(530, 'Huyện Bắc Tân Uyên', 47, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(531, 'Thành phố Biên Hòa', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(532, 'Thành phố Long Khánh', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(533, 'Huyện Tân Phú', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(534, 'Huyện Vĩnh Cửu', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(535, 'Huyện Định Quán', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(536, 'Huyện Trảng Bom', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(537, 'Huyện Thống Nhất', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(538, 'Huyện Cẩm Mỹ', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(539, 'Huyện Long Thành', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(540, 'Huyện Xuân Lộc', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(541, 'Huyện Nhơn Trạch', 48, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(542, 'Thành phố Vũng Tàu', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(543, 'Thành phố Bà Rịa', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(544, 'Huyện Châu Đức', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(545, 'Huyện Xuyên Mộc', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(546, 'Huyện Long Điền', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(547, 'Huyện Đất Đỏ', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(548, 'Thị xã Phú Mỹ', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(549, 'Huyện Côn Đảo', 49, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(550, 'Quận 1', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(551, 'Quận 12', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(552, 'Quận Gò Vấp', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(553, 'Quận Bình Thạnh', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(554, 'Quận Tân Bình', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(555, 'Quận Tân Phú', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(556, 'Quận Phú Nhuận', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(557, 'Thành phố Thủ Đức', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(558, 'Quận 3', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(559, 'Quận 10', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(560, 'Quận 11', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(561, 'Quận 4', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(562, 'Quận 5', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(563, 'Quận 6', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(564, 'Quận 8', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(565, 'Quận Bình Tân', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(566, 'Quận 7', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(567, 'Huyện Củ Chi', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(568, 'Huyện Hóc Môn', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(569, 'Huyện Bình Chánh', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(570, 'Huyện Nhà Bè', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(571, 'Huyện Cần Giờ', 50, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(572, 'Thành phố Tân An', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(573, 'Thị xã Kiến Tường', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(574, 'Huyện Tân Hưng', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(575, 'Huyện Vĩnh Hưng', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(576, 'Huyện Mộc Hóa', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(577, 'Huyện Tân Thạnh', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(578, 'Huyện Thạnh Hóa', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(579, 'Huyện Đức Huệ', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(580, 'Huyện Đức Hòa', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(581, 'Huyện Bến Lức', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(582, 'Huyện Thủ Thừa', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(583, 'Huyện Tân Trụ', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(584, 'Huyện Cần Đước', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(585, 'Huyện Cần Giuộc', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(586, 'Huyện Châu Thành', 51, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(587, 'Thành phố Mỹ Tho', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(588, 'Thị xã Gò Công', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(589, 'Thị xã Cai Lậy', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(590, 'Huyện Tân Phước', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(591, 'Huyện Cái Bè', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(592, 'Huyện Cai Lậy', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(593, 'Huyện Châu Thành', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(594, 'Huyện Chợ Gạo', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(595, 'Huyện Gò Công Tây', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(596, 'Huyện Gò Công Đông', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(597, 'Huyện Tân Phú Đông', 52, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(598, 'Thành phố Bến Tre', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(599, 'Huyện Châu Thành', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(600, 'Huyện Chợ Lách', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(601, 'Huyện Mỏ Cày Nam', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(602, 'Huyện Giồng Trôm', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(603, 'Huyện Bình Đại', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(604, 'Huyện Ba Tri', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(605, 'Huyện Thạnh Phú', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(606, 'Huyện Mỏ Cày Bắc', 53, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(607, 'Thành phố Trà Vinh', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(608, 'Huyện Càng Long', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(609, 'Huyện Cầu Kè', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(610, 'Huyện Tiểu Cần', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(611, 'Huyện Châu Thành', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(612, 'Huyện Cầu Ngang', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(613, 'Huyện Trà Cú', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(614, 'Huyện Duyên Hải', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(615, 'Thị xã Duyên Hải', 54, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(616, 'Thành phố Vĩnh Long', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(617, 'Huyện Long Hồ', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(618, 'Huyện Mang Thít', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(619, 'Huyện  Vũng Liêm', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(620, 'Huyện Tam Bình', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(621, 'Thị xã Bình Minh', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(622, 'Huyện Trà Ôn', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(623, 'Huyện Bình Tân', 55, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(624, 'Thành phố Cao Lãnh', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(625, 'Thành phố Sa Đéc', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(626, 'Thành phố Hồng Ngự', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(627, 'Huyện Tân Hồng', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(628, 'Huyện Hồng Ngự', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(629, 'Huyện Tam Nông', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(630, 'Huyện Tháp Mười', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(631, 'Huyện Cao Lãnh', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(632, 'Huyện Thanh Bình', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(633, 'Huyện Lấp Vò', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(634, 'Huyện Lai Vung', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(635, 'Huyện Châu Thành', 56, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(636, 'Thành phố Long Xuyên', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(637, 'Thành phố Châu Đốc', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(638, 'Huyện An Phú', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(639, 'Thị xã Tân Châu', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(640, 'Huyện Phú Tân', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(641, 'Huyện Châu Phú', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(642, 'Huyện Tịnh Biên', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(643, 'Huyện Tri Tôn', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(644, 'Huyện Châu Thành', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(645, 'Huyện Chợ Mới', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(646, 'Huyện Thoại Sơn', 57, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(647, 'Thành phố Rạch Giá', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(648, 'Thành phố Hà Tiên', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(649, 'Huyện Kiên Lương', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(650, 'Huyện Hòn Đất', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(651, 'Huyện Tân Hiệp', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(652, 'Huyện Châu Thành', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(653, 'Huyện Giồng Riềng', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(654, 'Huyện Gò Quao', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(655, 'Huyện An Biên', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(656, 'Huyện An Minh', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(657, 'Huyện Vĩnh Thuận', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(658, 'Thành phố Phú Quốc', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(659, 'Huyện Kiên Hải', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(660, 'Huyện U Minh Thượng', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(661, 'Huyện Giang Thành', 58, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(662, 'Quận Ninh Kiều', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(663, 'Quận Ô Môn', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(664, 'Quận Bình Thuỷ', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(665, 'Quận Cái Răng', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(666, 'Quận Thốt Nốt', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(667, 'Huyện Vĩnh Thạnh', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(668, 'Huyện Cờ Đỏ', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(669, 'Huyện Phong Điền', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(670, 'Huyện Thới Lai', 59, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(671, 'Thành phố Vị Thanh', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(672, 'Thành phố Ngã Bảy', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(673, 'Huyện Châu Thành A', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(674, 'Huyện Châu Thành', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(675, 'Huyện Phụng Hiệp', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(676, 'Huyện Vị Thuỷ', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(677, 'Huyện Long Mỹ', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(678, 'Thị xã Long Mỹ', 60, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(679, 'Thành phố Sóc Trăng', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(680, 'Huyện Châu Thành', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(681, 'Huyện Kế Sách', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(682, 'Huyện Mỹ Tú', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58');
INSERT INTO `huyen` (`mahuyen`, `tenhuyen`, `matinh`, `created_at`, `updated_at`) VALUES
(683, 'Huyện Cù Lao Dung', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(684, 'Huyện Long Phú', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(685, 'Huyện Mỹ Xuyên', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(686, 'Thị xã Ngã Năm', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(687, 'Huyện Thạnh Trị', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(688, 'Thị xã Vĩnh Châu', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(689, 'Huyện Trần Đề', 61, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(690, 'Thành phố Bạc Liêu', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(691, 'Huyện Hồng Dân', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(692, 'Huyện Phước Long', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(693, 'Huyện Vĩnh Lợi', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(694, 'Thị xã Giá Rai', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(695, 'Huyện Đông Hải', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(696, 'Huyện Hoà Bình', 62, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(697, 'Thành phố Cà Mau', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(698, 'Huyện U Minh', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(699, 'Huyện Thới Bình', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(700, 'Huyện Trần Văn Thời', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(701, 'Huyện Cái Nước', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(702, 'Huyện Đầm Dơi', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(703, 'Huyện Năm Căn', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(704, 'Huyện Phú Tân', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58'),
(705, 'Huyện Ngọc Hiển', 63, '2023-05-08 05:13:58', '2023-05-08 05:13:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` int(11) NOT NULL,
  `taikhoan` varchar(255) NOT NULL,
  `matkhau` varchar(255) NOT NULL,
  `hokh` varchar(255) NOT NULL,
  `tenkh` varchar(255) NOT NULL,
  `ngaysinh` date NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `hinhdd` varchar(255) NOT NULL,
  `kichhoat` tinyint(1) NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh`, `taikhoan`, `matkhau`, `hokh`, `tenkh`, `ngaysinh`, `sodt`, `diachi`, `email`, `gioitinh`, `hinhdd`, `kichhoat`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(1, 'khuevotan', '$2b$10$e8hyH8CQv38AyPhPyYxftemIc6Sf2VrSGH3kc058BkXt4XAigAtIW', 'Võ Tấn', 'Khuê', '2001-09-06', '0987664220', '499, Mỹ Ca, Cam Nghĩa, Cam Ranh, Khánh Hòa', 'khuevotan@gmail.com', 1, '1683354694661-khue.jpg', 2, 1, '2023-05-01 09:03:04', '2023-05-15 05:03:05'),
(13, 'oanhdung', '$2b$10$HNkeMM5kUnLCz3WNKnjkpe4bqxmWyivvDf/3VXlUDAaFV/1CTEy2.', 'Nguyễn Thị', 'Oanh', '2023-04-15', '0987664220', 'Vĩnh Phúc', 'khuevotan1@gmail.com', 0, '1682612022526-khue.png', 2, 1, '2023-05-01 09:03:04', '2023-05-15 05:03:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaixe`
--

CREATE TABLE `loaixe` (
  `malx` int(11) NOT NULL,
  `tenlx` varchar(255) NOT NULL,
  `gia` float NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `loaixe`
--

INSERT INTO `loaixe` (`malx`, `tenlx`, `gia`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(1, 'Xe Máy', 20000, 1, '2023-05-01 09:02:51', '2023-05-15 05:03:15'),
(2, 'Ô Tô Nhỏ', 40000, 1, '2023-05-01 09:02:51', '2023-05-15 05:03:25'),
(3, 'Ô Tô Trung', 60000, 1, '2023-05-01 09:02:51', '2023-05-15 05:03:25'),
(4, 'Ô Tô Lớn', 70000, 1, '2023-05-01 09:02:51', '2023-05-15 05:03:25'),
(5, 'Bán Tải', 80000, 1, '2023-05-01 09:02:51', '2023-05-15 05:03:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhacungcap`
--

CREATE TABLE `nhacungcap` (
  `mancc` int(11) NOT NULL,
  `tenncc` varchar(255) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nhacungcap`
--

INSERT INTO `nhacungcap` (`mancc`, `tenncc`, `sodt`, `diachi`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(1, 'Tài Cam Ranh', '0987664220', '77 Chế Lan Viên, Cam Lộc, Cam Ranh, Khánh Hòa', 0, '2023-05-01 10:04:52', '2023-05-04 13:25:21'),
(2, 'Baseus Official Flagship Store', '0949625400', 'Baseus Quận 1 : 109 Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh', 0, '2023-05-04 04:26:57', '2023-05-04 04:31:42'),
(3, 'Mucar', '0782530697', ' 140-142 Đường 2, Khu nhà ở Vạn Phúc 1, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Hồ Chí Minh.', 0, '2023-05-09 09:30:25', '2023-05-09 09:32:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `manv` int(11) NOT NULL,
  `taikhoan` varchar(255) NOT NULL,
  `matkhau` varchar(250) NOT NULL,
  `honv` varchar(255) NOT NULL,
  `tennv` varchar(255) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `luong` float NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `hinhdd` varchar(255) NOT NULL,
  `manhom` int(11) NOT NULL,
  `kichhoat` tinyint(1) NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`manv`, `taikhoan`, `matkhau`, `honv`, `tennv`, `sodt`, `diachi`, `email`, `luong`, `ngaysinh`, `gioitinh`, `hinhdd`, `manhom`, `kichhoat`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(1, 'khuevotan', '$2b$10$qZiL7YRyVyZEpaEsOrYE1OFDnVSkQOF8.osDIGvAHAs9sVdqG1gVu', 'Võ', 'Tấn Khuê', '0987664220', '499 Mỹ Ca, Cam Nghĩa, Cam Ranh, Khánh Hòa', 'khuevotan@gmail.com', 15000000, '2001-09-06', 1, '1683118246255-khue.jpg', 3, 2, 1, '2023-05-01 09:02:35', '2023-05-15 05:03:38'),
(2, 'taicamranh', '$2b$10$OhpfW9p913ULXMly/ccCBefjKbipMsxiRq5rtIRc7y.svJywMw0By', 'Tài', 'Cam Ranh', '0377975929', '77 Chế Lan Viên, Cam Lộc, Cam Ranh, Khánh Hòa', 'taicamranh79@gmail.com', 25000000, '2001-09-05', 1, '1683619402461-taicamranh.png', 1, 2, 1, '2023-05-09 07:34:17', '2023-05-15 05:03:38'),
(3, 'tranthuyoanh', '$2b$10$Ap8uF7sXlJfrkTIQaZYVx.yt5MuqhPmXoGVlHJzxb3CeGU05r9f..', 'Trần', 'Thúy Oanh', '0963052487', 'Xã Trà Trung, Huyện Tây Trà, Quảng Ngãi', 'tranthuyoanh4234@gmail.com', 15000000, '2000-06-09', 2, '1683621057958-tranthuyoanh.png', 2, 1, 1, '2023-05-09 08:22:42', '2023-05-15 05:03:38');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhom`
--

CREATE TABLE `nhom` (
  `manhom` int(11) NOT NULL,
  `tennhom` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nhom`
--

INSERT INTO `nhom` (`manhom`, `tennhom`, `created_at`, `updated_at`) VALUES
(1, 'Quản Lý', '2023-05-01 09:00:54', '2023-05-01 09:00:54'),
(2, 'Nhân Viên Bán Hàng', '2023-05-01 09:00:54', '2023-05-01 09:00:54'),
(3, 'Nhân Viên Rửa Xe', '2023-05-01 09:00:54', '2023-05-01 09:00:54');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phieunhap`
--

CREATE TABLE `phieunhap` (
  `mapn` varchar(255) NOT NULL,
  `ghichu` varchar(255) NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `tongtiennhap` float NOT NULL,
  `mancc` int(11) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phieunhap`
--

INSERT INTO `phieunhap` (`mapn`, `ghichu`, `thanhtoan`, `tongtiennhap`, `mancc`, `matt`, `manv`, `created_at`, `updated_at`) VALUES
('d668ccf7d42f06a54968e05f5f98d3f2', 'Đơn nhập hàng đợt 1', 2, 200000, 3, 2, 3, '2023-05-09 10:09:43', '2023-05-09 10:14:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phiship`
--

CREATE TABLE `phiship` (
  `maps` varchar(255) NOT NULL,
  `giaphi` float NOT NULL,
  `mavanchuyen` varchar(255) NOT NULL,
  `mahuyen` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phiship`
--

INSERT INTO `phiship` (`maps`, `giaphi`, `mavanchuyen`, `mahuyen`, `created_at`, `updated_at`) VALUES
('0cdedc0f067d46406436946ccb93a2f6', 10000, '', 415, '2023-05-08 13:32:43', '2023-05-09 05:22:01'),
('9e36662ba40c3d62ec938d943f40d574', 30000, '', 35, '2023-05-09 06:04:02', '2023-05-09 06:04:02'),
('a71b144344c6d8d83100967e88e687fd', 30000, '', 33, '2023-05-09 06:02:28', '2023-05-09 06:02:28'),
('b885d5f26da6ee4dccbbb82b05d69e23', 30000, '', 309, '2023-05-09 06:10:04', '2023-05-09 06:10:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL,
  `tensp` varchar(255) NOT NULL,
  `motangan` varchar(255) NOT NULL,
  `hinhdd` varchar(255) NOT NULL,
  `soluong` int(11) NOT NULL,
  `motact` text NOT NULL,
  `giaban` float NOT NULL,
  `madm` int(11) NOT NULL,
  `mancc` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `motangan`, `hinhdd`, `soluong`, `motact`, `giaban`, `madm`, `mancc`, `manv`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(1, 'Tẩu Ô Tô Sạc Không Dây Magsafe Baseus CW01', '', '1683173601082-magsafebaseus.png', 10, '                                        <div class=\"title_module_main heading-bar d-flex justify-content-between align-items-center\" style=\"box-sizing: border-box; font-size: 16px; padding-bottom: 15px; padding-top: 0px; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><h2 class=\"heading-bar__title \" style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-weight: bold; line-height: 1.2; font-size: 18px;\">THÔNG TIN SẢN PHẨM</h2></div><div id=\"ega-uti-editable-content\" data-platform=\"haravan\" data-id=\"1043989326\" class=\"rte js-product-getcontent product_getcontent pos-relative\" style=\"box-sizing: border-box; max-height: 970px; overflow: hidden; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><div id=\"content\" class=\"content js-content\" style=\"box-sizing: border-box; overflow: hidden; word-break: break-word;\"><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Giới Thiệu&nbsp;Tẩu Ô Tô Sạc Không Dây Magsafe Baseus CW01 Magnetic Wireless Charging Car Mount Sạc Nhanh 40W</h2><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\">Tính Năng&nbsp;Tẩu Ô Tô Sạc Không Dây Magsafe Baseus CW01 Magnetic Wireless Charging Car Mount Sạc Nhanh 40W</h2><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\">Sạc nhanh, và không bị rơi</h3><p style=\"box-sizing: border-box;\">Trang bị nam châm neodymium N52&nbsp;lõi từ mạnh mẽ với lực hút mạnh và chắc chắn giúp căn chỉnh chính xác vị trí tối ưu nhất cho bộ sạc&nbsp;để sạc siêu nhanh cho điện thoạị.&nbsp;Lực hút nam châm mạnh và bề mặt bám dính an toàn và chống trượt, chống rơi.</p><p style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-weight: 400;\">Bộ sạc CW01 có thể sạc đồng thời 2 thiết bị cùng lúc như điện thoại và tai nghe, hoặc 2 điện thoại cùng lúc.</span></p><p style=\"box-sizing: border-box;\">Nhiều biện pháp bảo vệ an toàn</p><p style=\"box-sizing: border-box;\">Chip thông minh cung cấp khả năng kiểm soát nhiệt độ tuyệt vời và tự động nhận dạng cho các thiết bị, điện thoại&nbsp;và điều chỉnh&nbsp;phù hợp với nguồn điện sạc tối ưu nhất.</p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\">Điều chỉnh vô cấp</h3><p style=\"box-sizing: border-box;\">Sản phẩm được thiết kế chuyên dụng cho điện thoại&nbsp;có kích thước từ 6.7&nbsp;inch trở xuống. Có thể đặt máy theo cả chiều ngang và dọc.</p><p style=\"box-sizing: border-box;\">CW01 điều chỉnh chiều cao và góc nhìn, tìm vị trí hoàn hảo&nbsp;cho người dùng giúp&nbsp;giảm&nbsp;đau nhức&nbsp;cổ&nbsp;và&nbsp;đau lưng.</p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\">Chống rung chuyên nghiệp</h3><p style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-weight: 400;\">Kẹp đuôi bằng thép với các miếng silicon mềm mang lại hiệu suất chống rung tuyệt vời mà không làm hỏng các cánh quạt thông gió của xe.</span></p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Kích thước nhỏ với thiết kế tinh tế</h3><p style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-weight: 400;\">Thiết kế tối giản, nhỏ gọn không làm che tầm nhìn&nbsp;xung quanh, trang bị đèn quanh viền sạc giúp&nbsp;thêm phần năng động cho nó, phù hợp&nbsp;với trang trí nội thất.</span></p><p style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-weight: 400;\"><br></span></p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\">Hình Ảnh&nbsp;Tẩu Ô Tô Sạc Không Dây Magsafe Baseus CW01 Magnetic Wireless Charging Car Mount Sạc Nhanh 40W</h2><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__2__31bd7d02523f47a293897bdab3831a7e.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__3__b7e210fffd9b49e49f3c0adf73affdfd.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__4__1d821ad9ae7d4c2fa7a89bd23d2c762a.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__5__17f690ea22304c5e94f6bd07f12f516f.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__6__2876719f805b4488a1046a24fd3d67e6.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__7__7aa905ac76344ce1883fa21bc11eebe9.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p></div></div>\r\n                                    ', 649000, 1, 2, 3, 1, '2023-05-01 09:02:02', '2023-05-15 05:03:47'),
(5, 'Máy Hút Bụi Nhỏ Gọn Cầm Tay Baseus', '', '1683201312023-mayhutbui.png', 14, '<div class=\"title_module_main heading-bar d-flex justify-content-between align-items-center\" style=\"box-sizing: border-box; font-size: 16px; padding-bottom: 15px; padding-top: 0px; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><h2 class=\"heading-bar__title \" style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-weight: bold; line-height: 1.2; font-size: 18px;\">THÔNG TIN SẢN PHẨM</h2></div><div id=\"ega-uti-editable-content\" data-platform=\"haravan\" data-id=\"1045233770\" class=\"rte js-product-getcontent product_getcontent pos-relative\" style=\"box-sizing: border-box; max-height: none; overflow: hidden; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><div id=\"content\" class=\"content js-content\" style=\"box-sizing: border-box; overflow: hidden; word-break: break-word;\"><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Giới thiệu&nbsp;Máy Hút Bụi Nhỏ Gọn Cầm Tay Baseus A3lite Car Vacuum Cleaner 100W 6000mAh &nbsp;(12,000Pa Blow/Vacuum, 2 in 1 Hepa)</h2><hr>Là phiên bản nâng cấp mới nhất của dòng&nbsp;<span style=\"box-sizing: border-box; font-weight: bolder;\">máy hút bụi mini cầm tay A3</span>.&nbsp;Ngoài việc thừa hưởng những ưu điểm vốn có như kích thước nhỏ gọn, kiểu dáng sang trọng hiện đại, dễ dàng mang theo sử dụng mọi nơi... Phiên bản Baseus A3lite&nbsp;Car Vacuum Cleaner này còn được Baseus nâng cấp, cải thiện đáng kể về hiệu suất, thời lượng pin, giảm tiếng ồn&nbsp;và bổ sung thêm nhiều phụ kiện vệ sinh kèm theo.<br style=\"box-sizing: border-box;\">&nbsp;<h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Tính năng&nbsp;Máy Hút Bụi Nhỏ Gọn Cầm Tay Baseus A3lite Car Vacuum Cleaner 100W 6000mAh &nbsp;(12,000Pa Blow/Vacuum, 2 in 1 Hepa)</h2><hr><p style=\"box-sizing: border-box;\">Baseus A3lite Car Vacuum Cleaner là một thiết bị hút bụi cho ô tô của thương hiệu Baseus. Với thiết kế nhỏ gọn và tiện lợi, nó giúp bạn dễ dàng làm sạch bụi bẩn và rác thải trong xe của mình.</p><p style=\"box-sizing: border-box;\">Bộ hút bụi này có công suất 100W&nbsp;và có thể hút được các loại bụi và rác thải khác nhau như bụi mịn,&nbsp;lông thú, bụi bẩn và các vật nhỏ khác. Bộ lọc HEPA có trong thiết bị này giúp loại bỏ các hạt bụi nhỏ và các tạp chất khác, giúp không khí trong xe của bạn sạch sẽ hơn.</p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214);\">Dung lượng pin 6000mAh sử dụng lâu dài</h3><p style=\"box-sizing: border-box;\"><a href=\"https://baseus.vn/products/baseus-a3-car-vacuum-cleaner-15000pa\" style=\"box-sizing: border-box; color: var(--text-color); box-shadow: none; outline: none !important;\">Máy hút bụi cầm tay</a>&nbsp;Baseus&nbsp;A3lite&nbsp;có dung lượng pin 6000mAh với cổng sạc Type-C mang đến thời gian sử dụng kéo dài. Máy hút bụi cầm tay này chỉ cần cắm sạc trong vòng 4&nbsp;giờ, bạn sẽ có thể hút bụi nhanh, gọn, lẹ cả ngày&nbsp;liền với Baseus&nbsp;Vacuum Cleaner.</p><p style=\"box-sizing: border-box;\">&nbsp;</p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214);\">4 Chế độ hút đa năng</h3><ul style=\"box-sizing: border-box;\"><li style=\"box-sizing: border-box;\">2 trong 1 Hút và thổi</li><li style=\"box-sizing: border-box;\">Ống chổi&nbsp;chổi hút trên mặt phẳng mềm</li><li style=\"box-sizing: border-box;\">Ống thẳng&nbsp;dùng cho khe hở và kẽ hở</li><li style=\"box-sizing: border-box;\">Ống khí nhỏ bơm banh, bóng yoga</li></ul><p style=\"box-sizing: border-box;\">Với bộ hút bụi Baseus A3lite Car Vacuum Cleaner, bạn sẽ không còn phải lo lắng về việc bụi bẩn và rác thải tích tụ trong xe của mình nữa. Thiết bị này rất thuận tiện để sử dụng và mang theo khi di chuyển và là một lựa chọn tuyệt vời cho những người có nhu cầu làm sạch xe hơi của mình một cách nhanh chóng và hiệu quả.</p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><br style=\"box-sizing: border-box;\">Hình ảnh&nbsp;Máy Hút Bụi Nhỏ Gọn Cầm Tay Baseus A3lite Car Vacuum Cleaner 100W 6000mAh &nbsp;(12,000Pa Blow/Vacuum, 2 in 1 Hepa)</h2><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0_01_fc2008c1757b4b85abef000440defe04.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0_02_45fb1b195d6f4b0f81ecf01782498cf3.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p></div></div>                                                                                                                                                        <h4></h4>', 1349000, 3, 2, 3, 1, '2023-05-04 06:44:12', '2023-05-15 05:03:47'),
(6, 'Tẩu Sạc Nhanh Dùng Trên Ô Tô Baseus Digital Display', '', '1683200732750-tausacnhanh.png', 5, '                                <h4>Giới thiệu sản phẩm</h4><h4><span style=\"box-sizing: border-box; font-weight: bolder; color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\"><a href=\"https://baseus.vn/collections/sac-dung-trong-xe-hoi\" style=\"box-sizing: border-box; color: var(--text-color); box-shadow: none; outline: none !important;\">Tẩu Sạc Nhanh</a>&nbsp;Công Suất Cao Baseus Digital Display 140W&nbsp;</span><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\">sử dụng chip xử lý nguồn BDIP thế hệ mới nhất, hỗ trợ nhiều chuẩn&nbsp;</span><a href=\"https://baseus.vn/collections/coc-sac\" style=\"box-sizing: border-box; color: var(--text-color); background-color: rgb(255, 255, 255); box-shadow: none; font-family: Lato, sans-serif; font-size: 14px; outline: none !important;\">sạc nhanh</a><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\">&nbsp;khác nhau như Quick charge QC3.0 / 4.0 / 5.0, Power Delivery, PPS,SPC,... tương thích với hầu hết các thiết bị số hiện nay từ Smartphone, Tablet, iPad cho đến cả Macbook. Tăng tốc độ sạc lên đến 40% tiết kiểm đáng kể thời gian sạc của bạn.</span><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\"><br style=\"box-sizing: border-box;\">Bộ sạc đi kèm với dây cáp sạc nhanh chuẩn Type-C to Type-C 240W (48V/5A) 1m màu đen từ dòng sản phẩm Superior Series.</p><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\">Sạc nhanh đa năng Baseus PD3.1 cho ô tô với màn hình hiển thị số kiểm soát thực tế&nbsp;dòng vào, dòng ra, trạng thái hoạt động để có trải nghiệm lái xe an toàn hơn.</span><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\"><br style=\"box-sizing: border-box;\">Màu sắc của tẩu sạc&nbsp;là đen thạch anh, sang trọng, hiện đại&nbsp;và phù hợp với nhiều loại nội thất&nbsp;xe hơi.</p></h4><h4>Tính năng nổi bật</h4>\r\n                                <ul>\r\n                                    <li><li>1.Chứng nhận 1.PD 3</li><li>2.Công suất cao 140W</li><li>3. Màn hình kỹ thuật số để hiển thị nguồn / điện áp</li><li>4.Với cáp sạc nhanh 240W</li><li>5. Công nghệ sạc BPSⅡ</li><li>6.Đối với xe ô tô 12V-24V\"</li></li>\r\n                                  \r\n                        \r\n                                </ul>\r\n                                <h4>Hình ảnh chi tiết</h4><p><img src=\"https://file.hstatic.net/1000152881/file/0_01_c1e25cfc0f4046c388b20f0a4265cc20.jpg\" style=\"width: 50%;\"><br></p>', 849000, 1, 2, 1, 1, '2023-05-04 11:45:32', '2023-05-15 05:03:47'),
(7, 'Bảng Số Điện Thoại Dạ Quang Baseus Square Bar Temporary ', '', '1683269533052-bangsodtdaquang.png', 10, '                                        <div class=\"title_module_main heading-bar d-flex justify-content-between align-items-center\" style=\"box-sizing: border-box; font-size: 16px; padding-bottom: 15px; padding-top: 0px; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><h2 class=\"heading-bar__title \" style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-weight: bold; line-height: 1.2; font-size: 18px;\">THÔNG TIN SẢN PHẨM</h2></div><div id=\"ega-uti-editable-content\" data-platform=\"haravan\" data-id=\"1035621128\" class=\"rte js-product-getcontent product_getcontent pos-relative\" style=\"box-sizing: border-box; max-height: none; overflow: hidden; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><div id=\"content\" class=\"content js-content\" style=\"box-sizing: border-box; overflow: hidden; word-break: break-word;\"><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><span style=\"box-sizing: border-box; font-weight: bolder;\">Tính năng cơ bản Bảng số điện thoại trên xe hơi&nbsp;Baseus Square Bar Temporary Parking Number Plate</span></h2><hr><p style=\"box-sizing: border-box;\">- Chất liệu tất cả đều làm bằng kim loại chắc chắn : Thiết kế hợp&nbsp;kim nhôm đều được CNC từng chi tiết, kết cấu nhẹ và sang trọng, đường nét mạnh mẽ và đặc biệt, kết hợp hoàn hảo hơn với trang trí nội thất ô tô.</p><p style=\"box-sizing: border-box;\">- Khả năng chịu nhiệt độ cao và chống oxy hóa tốt trên bề mặt hợp kim nhôm, không bị phai màu . Cho thời gian sử dụng lâu dài.</p><p style=\"box-sizing: border-box;\">- Kiểu chữ đẹp, sắc nét và sang trọng cùng khả năng dạ quang rất dễ nhận biết, chữ số rõ ràng ngay cả trong điều kiện thiếu sáng , buổi tối ...</p><p style=\"box-sizing: border-box;\">- Lật để ẩn số: Thiết kế rãnh độc đáo, lật để ẩn số và bảo vệ quyền riêng tư cá nhân.</p><p style=\"box-sizing: border-box;\">- Keo 3M: Có thể được sử dụng nhiều lần.</p><hr><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><span style=\"box-sizing: border-box; font-weight: bolder;\">Hình ảnh chi tiết&nbsp;Bảng số điện thoại trên xe hơi&nbsp;Baseus Square Bar Temporary Parking Number Plate</span></h2><hr><p style=\"box-sizing: border-box;\">&nbsp;</p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_square_bar_temporary_parking_number_plate_001_45b7256986eb4c82a15773b44e7d9fb7.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_square_bar_temporary_parking_number_plate_002_84cc21ffc7854a38accdfba32c561598.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_square_bar_temporary_parking_number_plate_003_79dbe39c08a744de827c45b3de72d60d.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_square_bar_temporary_parking_number_plate_004_b63a5ff476f240bcb32312aedd45b59a.jpg\" style=\"box-sizing: border-box; width: 50%;\"></p></div></div>                                <h4></h4>\r\n                                    ', 179000, 7, 2, 3, 1, '2023-05-05 06:52:13', '2023-05-15 05:03:47'),
(8, 'Bảng Số Điện Thoại Baseus Parking Number Plate Tint (Dual-number)', '', '1683269607711-bangsonumber.png', 10, '                                        <h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\">Tính Năng&nbsp;Bảng Số Điện Thoại Dùng Trên Xe Hơi Baseus Parking Number Plate Tint &nbsp;(Dual-number)</h2><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\">Thiết kế độc đáo, chuyển đổi số dễ dàng</h3><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Thiết kế vỏ trong suốt độc đáo, với chân đế bằng kim loại nhìn&nbsp;mấy con số như&nbsp;đang lở lửng giữa không trung, độc lạ và sang trọng&nbsp;Bạn có thể sử dụng một lúc hai số điện thoại hiển thị chỉ cần xoay để thay đổi giữa hai số cực dễ dàng.&nbsp;Chỉ cần xoay để ẩn số điện thoại nếu không muốn người khác nhìn thấy.</span><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Chất liệu siêu bền dùng mãi mãi, kích thước nhỏ gọn</h3><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Thiết kế nhỏ gọn, không che khuất tầm nhìn. Chất liệu kim loại, siêu bền, dùng được trong điều kiện thời tiết nóng. Thiết kế đẳng cấp và sang trọng.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Đi kèm với 6 bộ số từ tính cho bất kỳ số điện thoại bạn muốn</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Keo 3M nhập khẩu vẫn dính chắc chắn sau nhiều lần tái sử dụng</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Đặc biệt chữ được thiết kế nổi nhìn rõ ràng hơn&nbsp;những bảng số điện thoại thông thường ở trên thị trường hiện nay.</p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Hình Ảnh&nbsp;Bảng Số Điện Thoại Dùng Trên Xe Hơi Baseus Parking Number Plate Tint &nbsp;(Dual-number)</h2><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__3__d46bde7177fc4e0799ff6ca9fa2bb736.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__4__1d549d61982e4f7fa0694e994545a2a4.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__5__4cd0e0a7e689444aaced8fc13430e687.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__6__d9b8144771154ce9900ff961b19b0d5e.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p>                                <h4></h4>\r\n                                    ', 249000, 7, 2, 3, 1, '2023-05-05 06:53:27', '2023-05-15 05:03:47'),
(9, 'Giá Đỡ Điện Thoại Cảm Biến Baseus Steel Cannon Pro', '', '1683269716257-giatreo1.png', 10, '                                        <div class=\"title_module_main heading-bar d-flex justify-content-between align-items-center\" style=\"box-sizing: border-box; font-size: 16px; padding-bottom: 15px; padding-top: 0px; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><h2 class=\"heading-bar__title \" style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-weight: bold; line-height: 1.2; font-size: 18px;\">THÔNG TIN SẢN PHẨM</h2></div><div id=\"ega-uti-editable-content\" data-platform=\"haravan\" data-id=\"1043528735\" class=\"rte js-product-getcontent product_getcontent pos-relative\" style=\"box-sizing: border-box; max-height: none; overflow: hidden; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><div id=\"content\" class=\"content js-content\" style=\"box-sizing: border-box; overflow: hidden; word-break: break-word;\"><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Tính Năng&nbsp;Giá Đỡ Điện Thoại Trên Ô Tô Baseus Steel Cannon pro Solar Electric Car Mount ( Energy charging, auto Clamping )</h2>Baseus Steel Cannon pro được trang bị tấm pin năng lượng mặt trời silicon đơn&nbsp;tinh thể có độ tinh khiết cao cho xe của bạn lúc nào cũng có sẵn pin để sử dụng. Tiện lợi hơn những sản phẩm thông thường phải cắm nguồn.<br style=\"box-sizing: border-box;\">&nbsp;<p style=\"box-sizing: border-box;\">Được trang bị “cảm biến” thông minh tự nhận diện khi đưa điện thoại vào hay lấy điện thoại ra, được làm từ chất liệu Silicone giúp tăng cường bộ đệm cho điện thoại bảo vệ chống trượt và trầy xước. Khi di chuyển và đặt điện thoại vào giá treo, cảm biến&nbsp;mở ra và tự động khóa lại để giữ chắc điện thoại.</p><p style=\"box-sizing: border-box;\">Đế giữ điện thoại Baseus Steel Cannon pro Solar còn được tích hợp khả năng xoay linh hoạt 360 độ, giúp người dùng dễ điều hướng và thoải mái trong quá trình lái xe. Đặc biệt trang bị bộ kẹp&nbsp;cánh gió&nbsp;bám chắc, giữ điện thoại an toàn và tránh bị trơn trượt ngay cả khi di chuyển trên đoạn đường gập ghềnh.</p><p style=\"box-sizing: border-box;\">Cấu trúc bánh răng bên trong được tối ưu hóa đảm bảo nắm chặt hơn mà không có bất kỳ tiếng kêu nào.&nbsp;Dùng gắn&nbsp;trên khe gió ô tô tương thích hầu hết các xe ô tô hiện nay, phù hợp với điện thoại có kích thước 4.7 đến 6.7 inch</p><p style=\"box-sizing: border-box;\">Thiết kế tinh tế với chất lượng cao cấp,&nbsp;nghệ thuật và phù hợp hoàn hảo với trang trí nội thất xe hơi của bạn</p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><br style=\"box-sizing: border-box;\">Hình Ảnh&nbsp;Giá Đỡ Điện Thoại Trên Ô Tô Baseus Steel Cannon pro Solar Electric Car Mount ( Energy charging, auto Clamping )</h2><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__1__1c3f09e00bb14756bff644a1adce0753.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__2__beffb9a40f244be4bcff177b8e5e5222.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__3__a2acd92daf954fc9a3b430e190ace3c6.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p></div></div>                                <h4></h4>\r\n                                    ', 349000, 4, 2, 3, 1, '2023-05-05 06:55:16', '2023-05-15 05:03:47'),
(10, 'Giá Đỡ Vòng Kim Loại MagSafe Baseus Halo Series Foldable', '', '1683269788559-giateoip.png', 10, '                                        <div class=\"title_module_main heading-bar d-flex justify-content-between align-items-center\" style=\"box-sizing: border-box; font-size: 16px; padding-bottom: 15px; padding-top: 0px; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><h2 class=\"heading-bar__title \" style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-weight: bold; line-height: 1.2; font-size: 18px;\">THÔNG TIN SẢN PHẨM</h2></div><div id=\"ega-uti-editable-content\" data-platform=\"haravan\" data-id=\"1041878698\" class=\"rte js-product-getcontent product_getcontent pos-relative\" style=\"box-sizing: border-box; max-height: none; overflow: hidden; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><div id=\"content\" class=\"content js-content\" style=\"box-sizing: border-box; overflow: hidden; word-break: break-word;\"><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Giới Thiệu&nbsp;Giá Đỡ Vòng Kim Loại Có Thể Gập Lại MagSafe Baseus Halo Series Foldable Metal Ring Stand Cho iPhone 13/12 Series, Hút nam châm, Dùng cho phụ kiện MagSafe Apple</h2>Tính năng độc đáo và tiện ích nhất trên dòng iPhone 12/13 Series&nbsp;là khi sử dụng cùng hệ sinh thái các phụ kiện chuẩn MagSafe của Apple. Tuy nhiên nếu bạn đang sử dụng các loại ốp lưng bảo vệ sẽ làm giảm đáng kể lực hút của mặt&nbsp;lưng iPhone với các phụ kiện MagSafe này ( thậm chí khi lực hút yếu các đế sạc không dây chỉ nhận sạc thông thường mà không nhận được chuẩn sạc không dây MagSafe). Điều này&nbsp;làm giảm đáng kể&nbsp;trải nghiệm và hiệu quả sử dụng của các loại phụ kiện MagSafe. Hoặc bạn đang sở hữu các dòng iPhone 11 (hoặc cũ hơn)/ Smartphone Android như Samsung/ Huawei/ OPPO Xiaomi nhưng lại muốn sử dụng với các loại phụ kiện MagSafe hoặc các&nbsp;<a href=\"https://baseus.vn/collections/holder-trong-xe-hoi\" style=\"box-sizing: border-box; color: var(--text-color); box-shadow: none; outline: none !important;\">đế giữ điện thoại&nbsp;</a>bằng nam châm&nbsp;nhưng không tương thích do mặt lưng không được trang bị nam châm. Trong trường hợp này bạn chỉ cần trang bị Bộ vòng kim loại Magsafe Baseus Halo Series Magnetic là&nbsp;có thể khắc phục hiệu quả tất cả các nhược điểm nói trên.<h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\"><br style=\"box-sizing: border-box;\">Tính Năng&nbsp;Giá Đỡ Vòng Kim Loại Có Thể Gập Lại MagSafe Baseus Halo Series Foldable Metal Ring Stand Cho iPhone 13/12 Series, Hút nam châm, Dùng cho phụ kiện MagSafe Apple</h2>Công dụng : dùng dán vào mặt lưng điện thoại (có mặt lưng bàng nhôm hoặc kính) để tạo lực hút từ tính cho các&nbsp;<span style=\"box-sizing: border-box; font-weight: bolder;\"><a href=\"https://baseus.vn/collections/holder-trong-xe-hoi\" style=\"box-sizing: border-box; color: var(--text-color); box-shadow: none; outline: none !important;\">bộ đế giữ điên thoại bằng nam châm</a></span>&nbsp;(Magnetic Holder) dùng trên xe hơi.<br style=\"box-sizing: border-box;\">&nbsp;&nbsp;<p style=\"box-sizing: border-box;\">Thiết kế từ tính không cần dán keo sử dụng liền mạch với sạc không dây. có thể tháo&nbsp;vòng Halo bất cứ lúc nào bạn muốn không&nbsp;sợ mất keo và không&nbsp;ảnh hưởng đến sạc&nbsp;<a href=\"https://baseus.vn/products/de-sac-khong-day-nam-cham-baseus-simple-mini2-magnetic-wireless-charger-dung-cho-iphone-12-13-series-15w\" style=\"box-sizing: border-box; color: var(--text-color); box-shadow: none; outline: none !important;\">magsafe</a>.</p><p style=\"box-sizing: border-box;\">Giá đỡ vòng&nbsp;kim loại&nbsp;cho điện thoại&nbsp;chỉ việc đặt&nbsp;vào lưng điện thoại hay máy tính bảng với chế độ xoay 360 độ, cứng cáp khi đeo vào tay, có thể chịu lực tác động lên đến 4kg&nbsp;giúp bạn yên tâm khi rơi rớt va chạm.&nbsp;</p><p style=\"box-sizing: border-box;\">Bản lề đước nâng cấp hoàn toàn mới giảm chấn động hỗ trợ ổn định, giúp cố định không bị lỏng khi sử dụng trong thời gian dài.</p><p style=\"box-sizing: border-box;\">Với thiết kế siêu mỏng, siêu nhỏ gọn đổ mỏng&nbsp;chỉ&nbsp; ≈3mm và nặng ≈29g dể dàng bỏ túi quần, giỏ xách mà không lo bị vướng,</p><p style=\"box-sizing: border-box;\">Chất liệu hợp kim nhôm chống o xy hóa, không bị ăn mòn bền theo năm tháng.</p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Hình Ảnh&nbsp;Giá Đỡ Vòng Kim Loại Có Thể Gập Lại MagSafe Baseus Halo Series Foldable Metal Ring Stand Cho iPhone 13/12 Series, Hút nam châm, Dùng cho phụ kiện MagSafe Apple</h2><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0_01_4c9d9d5bee3a457a94cbb085d418f97e.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0_02_7ccc4402fe2647dd8a1db6462348c27b.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p></div></div>                                <h4></h4>\r\n                                    ', 199000, 4, 1, 3, 1, '2023-05-05 06:56:28', '2023-05-15 05:03:47'),
(11, 'Máy Bơm Hơi Lốp Ô Tô Di Động Baseus Mega Wireless Inflator 250W', '', '1683269893460-bomlop1.png', 10, '                                        <h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\">Tính Năng&nbsp;Máy Bơm Hơi Lốp Ô Tô Di Động Baseus Mega EnergyPump Series Dual Cylinder Wireless Inflator Bằng Điện Không Dây 250W</h2><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Bơm xe Baseus Mega Pump&nbsp;có thiết kế nhỏ gọn, dễ dàng sử dụng nên thay vì tốn thời gian ra tiệm sửa xe, gara bạn có thể tự bơm xe được ở nhà. Đến chị em phụ nữ cũng có thể tự bơm xe mà không cần tới sự trợ giúp của cánh đàn ông.</span><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Tốc độ bơm mạnh mẽ</h3><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Trang bị xi lanh kép làm từ hợp kim đúc, công suất&nbsp;động cơ cao với tăng áp cơ học, dễ dàng bơm ra luồng không khí tốc độ lớn, không còn mất áp suất cho lốp xe của bạn.&nbsp;Bơm đầy lốp xe&nbsp;R195 xẹp trong 3,5 phút và có thể bơm 3 lốp chỉ với một lần sạc đầy, hiệu quả tốt hơn so với máy bơm có dây. Có thể bơm hầu hết ô tô, SUV, xe tải nhỏ, xe địa hình, xe máy thông thường, xe đạp.</span><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Đơn giản ai cũng có thể dùng được</h3><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Máy Bơm Hơi&nbsp;Baseus Mega được trang bị bảng điều khiển với màn hình kỹ thuật số trên cùng, hiển thị rõ ràng các thông số cụ thể. Đặc biệt, 4 nút bấm điều khiển được thiết kế tối giản giúp người dùng có thể dễ dàng thao tác sử dụng máy bơm một cách đơn giản nhất.</span><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Với cảm biến thông minh được thiết kế tự động ngắt sau khi bơm đầy, Bơm&nbsp;máy sẽ nhận biết và tự&nbsp;động bơm lượng khí vừa đủ cho từng loại lốp, từ đấy đảm bảo tuổi thọ của ruột bánh xe.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Độ chính xác cao với cảm biến áp suất, màn hình hiển thị&nbsp;áp suất&nbsp;với sai số không quá 0.1bar.</p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Thiết kế nhỏ gọn, nhiều biện pháp bảo vệ an toàn</h3><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Bơm ô tô Baseus&nbsp;được thiết kế với kích thước nhỏ gọn chỉ 230&nbsp;*&nbsp;64&nbsp;*&nbsp;99mm, di động, tương đương với 1 cuốn sách&nbsp;nên không chiếm quá nhiều diện tích trên xe ô tô của bạn.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Baseus Mega EnergyPump được tích hợp nhiều tính năng bảo vệ đạt chuẩn Thế Giới : bảo vệ quá dòng, ngắn mạch, quá nhiệt, quá tải,&nbsp;chống nhiễu, chống nổ...</p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\"><br style=\"box-sizing: border-box;\">Hình Ảnh&nbsp;Máy Bơm Hơi Lốp Ô Tô Di Động Baseus Mega EnergyPump Series Dual Cylinder Wireless Inflator Bằng Điện Không Dây 250W</h2><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__1__5a2a66a47d5441ddb35fcfe29d03cafb.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__2__614e4a1ac1614230a567c745da8297ab.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p>                                <h4></h4>\r\n                                    ', 1489000, 2, 2, 3, 1, '2023-05-05 06:58:13', '2023-05-15 05:03:47'),
(12, 'Bơm Lốp Đa Năng Kiêm Kích Bình Ô Tô Baseus Super', '', '1683269974204-bomlop2.png', 10, '                                        <h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\">Tính năng&nbsp;Bơm Lốp Đa Năng Kiêm Kích Bình Ô Tô Baseus Super Energy 2-in-1 Jump Starter Sạc Pin Cầm Tay 8000mAh</h2><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\">Tính năng kích bình</h3><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Với thiết kế tinh tế, chắc chắn và tối ưu công năng sử dụng, bộ bơm lốp kiêm kích bình mang đến những lợi ích thiết thực cho chiếc xế yêu của bạn.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Giúp bạn khởi động xe, nổ máy một cách an toàn và dễ dàng. Với hiệu suất mạnh mẽ, dung lượng Pin lên đến 8000mAh thì bạn có thể kích được nhiều lần sau mỗi lần sạc đầy Pin ( Từ 15-20&nbsp;lần). Không những vậy, với dòng điện cực đại: 1000A ( Dòng khởi động: 500A) bộ sản phẩm cho phép bạn kích được xe ô tô sử dụng động cơ máy dầu ( DIESEL) có dung tích từ 2.5L trở xuống. Và với xe ô tô sử dụng động cơ máy xăng ( GASOLINE) bạn hoàn toàn có thể kích được xe có dung tích từ 4.0L trở xuống.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Có độ bền và tính an toàn cao, được làm từ chất liệu chống cháy nổ. Phần khung vỏ làm bằng hợp kim chắc chắn và sang trọng, độ hoàn thiện cao. Chip xử lý thông minh có khả năng giữ cho thiết bị hoạt động ổn định trong tình trạng khí hậu khắc nghiệt (-20°C -&gt; 60°C).</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><span style=\"box-sizing: border-box; font-weight: bolder;\"><em style=\"box-sizing: border-box;\">Chức năng sạc pin</em></span>: Sản phẩm có thể sạc được hầu hết các thiết bị điện tử có trên thị trường như&nbsp;điện thoại, máy tính bảng, tai nghe….Với dung lượng pin 8000Mah sẽ có thể thoải mái sạc được nhiều thiết bị cùng lúc mà không lo hết pin.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><span style=\"box-sizing: border-box; font-weight: bolder;\">Chức năng chiếu sáng</span>: Sản phẩm có 1 đèn led phía trên để chiếu sáng trong trường hợp cần thiết như sửa chữa xe trong điều kiện trời tối, hoặc ở các ví trí ánh sáng không lọt vào được. Sản phẩm này cũng có thể dùng để thay thế một chiếc đèn pin thông thường</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><span style=\"box-sizing: border-box; font-weight: bolder;\">Chức năng đèn cảnh báo</span>: Với các sự cố không may xẩy ra trên đường, đặc biệt là vào lúc trời tối nếu như không mang theo tam giác phản quang cảnh báo cho các phương tiện khác biết xe mình đang gặp sự cố thì bộ sản phẩm sẽ hỗ trỡ trợ tài xế phát ra cảnh báo bằng cách nhấp nháy đèn SOS để phát ra cảnh báo.</p><h3 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1rem; color: rgb(40, 138, 214); font-family: Lato, sans-serif;\">Tính năng bơm lốp</h3><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Lốp bị cán đinh khi di chuyển trên đường, bạn phải loay hoay để thay lốp dự phòng.Chẳng may mà bạn cán đinh vào 2 hay cả 4 lốp thì bạn không có đủ lốp dự phòng để thay trên đường. Bộ bơm lốp kiêm kích bình Baseus&nbsp;sẽ là cứu tinh cho bạn trong tình huống này.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Chức năng bơm hơi cực mạnh mẽ. Sản phẩm có nút lựa chọn chế độ bơm phù hợp cho từng loại như: Bơm lốp xe ô tô, xe đạp, xe máy, bơm bóng…( Sản phẩm có kèm thêm các đầu bơm phù hợp với từng loại nêu trên).</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Áp suất lốp bơm tối đa lên tới 150PSI, nên việc bơm lốp nhanh hơn rất nhiều so với các sản phẩm có trên thị trường ( chỉ 100PSI đến 120PSI).</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Sản phẩm có đồng hồ LED điện tử hiển thị các thông số giúp người dùng có thể đo được chính sác thông số lốp xe hoặc thông số áp suất của các thiết bị khác.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Chức năng bơm tự ngắt, cài đặt thông số áp suất nhờ tích hợp CHIP AI thông minh.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Thiết bị sẽ tự tắt nguồn sau 5 phút nếu không sử dụng.</p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\">Chín&nbsp;chế độ bảo vệ thông minh: Bảo vệ bảo vệ từ trường, ngắn mạch, bảo vệ quá áp, bảo vệ quá dòng, bảo vệ quá tải, bảo vệ quá nhiệt, bảo vệ kết nối ngược, bảo vệ sạc ngược, bảo vệ xả điện quá mức.</p><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112); font-family: Lato, sans-serif;\">Hình Ảnh&nbsp;Bơm Lốp Đa Năng Kiêm Kích Bình Ô Tô Baseus Super Energy 2-in-1 Jump Starter Sạc Pin Cầm Tay 8000mAh</h2><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__8__33168af2456a4b4e9a1894752f2df82d.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__9__e83d9f0a6bb9482e8e41049afc1ecc33.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__10__87051831efde49d6870e2a515b7269f1.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__15__3e132fb11b224eaa8f9a2f68f5c3b218.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__16__67eb70f83a9a4277a6a034dea0d5c0fb.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__19__5af1a652fc88445a9e8333468b1743b0.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__25__5d9bc5d226154c9abd4177cbfc277566.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/0__26__0b3d43af13a24c9c8ec7904fd888c954.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; text-align: center;\"></p>                                <h4></h4>\r\n                                    ', 1749000, 2, 2, 3, 1, '2023-05-05 06:59:34', '2023-05-15 05:03:47'),
(13, 'Máy Bơm Lốp Xe Hơi Baseus Energy Source Inflator Pump', '', '1683270039459-maybom3.png', 10, '<div class=\"title_module_main heading-bar d-flex justify-content-between align-items-center\" style=\"box-sizing: border-box; font-size: 16px; padding-bottom: 15px; padding-top: 0px; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><h2 class=\"heading-bar__title \" style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-weight: bold; line-height: 1.2; font-size: 18px;\">THÔNG TIN SẢN PHẨM</h2></div><div id=\"ega-uti-editable-content\" data-platform=\"haravan\" data-id=\"1035565220\" class=\"rte js-product-getcontent product_getcontent pos-relative\" style=\"box-sizing: border-box; max-height: none; overflow: hidden; color: rgb(51, 51, 51); font-family: Lato, sans-serif;\"><div id=\"content\" class=\"content js-content\" style=\"box-sizing: border-box; overflow: hidden; word-break: break-word;\"><h2 style=\"box-sizing: border-box; font-weight: 700; line-height: 1.2; font-size: 1.2rem; color: rgb(0, 128, 112);\">Giới thiệu sản phẩm Máy bơm lốp xe hơi Baseus Energy Source Inflator Pump</h2><p style=\"box-sizing: border-box;\">- Giống với&nbsp;các dòng đàn anh, máy bơm lốp xe hơi Baseus Energy Source cũng sở hữu thiết kế bằng kim loại giúp trao đổi nhiệt tốt hơn, 1 màn hình LED hiển thị các thông số áp suất, các nút điều khiển tăng/giảm áp suất, đổi chế độ và nút nguồn.</p><p style=\"box-sizing: border-box;\">- Máy bơm lốp xe hơi Baseus Energy Source cũng&nbsp;được trang bị thêm đèn Flash để người dùng có thể sử dụng trong những trường hợp cần thiết, bên cạnh đó máy cũng có thiết kế tối ưu hơn, nhỏ gọn hơn và bộ phận nén bên trong mạnh mẽ hơn&nbsp;các thế hệ tiền nhiệm.</p><p style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; font-size: 18px;\"><span style=\"box-sizing: border-box; font-weight: bolder;\">Thông số kỹ thuật</span></span><br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">Nút M Nhấn nhanh để bật thiết bị và thay đổi chế độ. Giữ trong 3 giây cho đến khi thiết bị nhấp nháy, sau đó nhấn nhanh để chuyển đổi giữa các cài đặt trong khi đèn vẫn nhấp nháy.<br style=\"box-sizing: border-box;\">Các nút \" +, - \" Điều chỉnh giá trị áp suất không khí đặt trước và thay đổi hiển thị đặt trước. Nhấn nhanh để tăng hoặc giảm.<br style=\"box-sizing: border-box;\">Nút OK Giữ trong 3 giây để tắt máy khi máy đang bật<br style=\"box-sizing: border-box;\">Nút đèn Bấm nhanh một lần để bật đèn, sau đó bấm nhanh một lần để đèn nhấp nháy, sau đó bấm nhanh một lần để đèn SOS nhấp nháy<br style=\"box-sizing: border-box;\">&nbsp;Trọng lượng sản phẩm: 610g<br style=\"box-sizing: border-box;\">Chiều rộng sản phẩm: 4,26cm<br style=\"box-sizing: border-box;\">&nbsp; Chiều cao sản phẩm: 14,02cm<br style=\"box-sizing: border-box;\">Chiều dài sản phẩm: 7,82cm<br style=\"box-sizing: border-box;\">Chất liệu: Hợp kim nhôm<br style=\"box-sizing: border-box;\">Công suất: 54W<br style=\"box-sizing: border-box;\">Dung lượng pin: 6000mAh (3 viên pin mỗi viên 2000mAh)<br style=\"box-sizing: border-box;\">Thời gian sạc: khoảng 4-5 giờ<br style=\"box-sizing: border-box;\">Tương thích: Xe hơi và SUV / Xe đạp / Xe máy / Xe đạp / Bóng rổ<br style=\"box-sizing: border-box;\">Tính năng 1: Máy bơm hơi mini cho xe máy<br style=\"box-sizing: border-box;\">Tính năng 2: Máy bơm và nén hơi cho ô tô điện/máy bơm không khí/Máy nén cho ô tô<br style=\"box-sizing: border-box;\">Tính năng 3: Máy bơm / bơm lốp áp suất tự động cho xe hơi<br style=\"box-sizing: border-box;\">Tính năng 4: Máy bơm lốp di động không dây cho xe đạp<br style=\"box-sizing: border-box;\">Tính năng 5: Máy bơm không khí điện xe hơi 54W / Máy nén khí xe hơi 5V<br style=\"box-sizing: border-box;\">Tính năng 6: Máy nén khí ô tô / máy bơm cho xe đạp / bơm hơi tự động<br style=\"box-sizing: border-box;\">Tính năng 7: Máy nén cho xe hơi / bơm lốp / máy nén tự động / máy nén khí mini<br style=\"box-sizing: border-box;\">Tính năng 8: Máy bơm lốp cho xe hơi / máy nén khí cầm tay / bơm khí điện<br style=\"box-sizing: border-box;\">Tính năng 9: xe đạp tự động / máy nén khí / bơm điện xe hơi / máy nén lốp<br style=\"box-sizing: border-box;\">Tính năng 10: Máy bơm xe hơi / bơm điện / bơm pin / máy nén khí</p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_energy_source_inflator_pump_013_654cb5d2e3df408ba8a8ed2b71b2db20.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_energy_source_inflator_pump_011_668d13d9b46947458db5029407a7d27d.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p><p style=\"box-sizing: border-box; text-align: center;\"><img src=\"https://file.hstatic.net/1000152881/file/baseus_energy_source_inflator_pump_010_f2924c177f0a4aa5bc07d486bada9b1a.jpg\" style=\"box-sizing: border-box; height: auto !important;\"></p></div></div>                                <h4></h4>', 1099000, 2, 2, 1, 1, '2023-05-05 07:00:39', '2023-05-15 05:03:47');
INSERT INTO `sanpham` (`masp`, `tensp`, `motangan`, `hinhdd`, `soluong`, `motact`, `giaban`, `madm`, `mancc`, `manv`, `tinhtrang`, `created_at`, `updated_at`) VALUES
(14, 'Tượng Hồ Lô Quan Âm tranh Phong Thủy', 'Tượng Hồ Lô Quan Âm tranh Phong Thủy là một loại tượng điêu khắc đại diện cho Quan Âm - một vị thần nữ trong đạo Phật. Tượng Hồ Lô Quan Âm thường được chế tác từ đá, gỗ, kim loại hoặc các vật liệu khác, và có hình dạng một nữ thần mang bình hoa trong tay.', '1683625586884-tuong-ho-lo-quan-am-tranh-phong-thuy-3.jpg', 0, '<h1 style=\"box-sizing: border-box; margin-right: 0px; margin-bottom: 1em; margin-left: 0px; font-size: 1.643em; font-family: Quicksand; line-height: 1.043em; color: rgb(51, 62, 72); letter-spacing: -0.14px; text-align: center;\"><a href=\"http://tuong-ho-lo-quan-am-tranh-phong-thuy/\" target=\"_blank\" style=\"box-sizing: border-box; color: rgb(2, 117, 216); margin-bottom: 0px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Tượng Hồ Lô Quan Âm tranh Phong Thủy</span></a></h1><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">“Thuyết kinh, nhất đóa nhất tòa. Thơm lừng hương pháp, phật bà hóa duyên” chính là hình ảnh Quan Thế Âm Bồ Tát tọa sen hạ trần, ra tay cứu vớt chúng sinh lầm than, ban phước lành. Hình ảnh đẹp đẽ ấy đã được tái hiện lại trong sản phẩm tượng Quan Âm phong thủy.&nbsp;Tượng được làm từ pha lê khối, chạm khắc tinh xảo. Các chi tiết góc cạnh kết hợp tài tình, tỉ mỉ nên khi mặt trời chiếu vào, sẽ tạo ra những tia sáng lấp lánh, cực kì huyền ảo.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Bên cạnh đó, bình hồ lô với đặc điểm miệng nhỏ bụng lớn, là hình tượng thể hiện tài lộc đầy kho. Có tác dụng chiêu tài, nạp phúc, tránh tà, bình an và may mắn. Tượng hồ lô Quan Âm là vật phẩm phong thủy mang lại thành công, thuận lợi cho tài xế trong mọi hành trình. Bên trong bình hồ lô là các hạt pha lê lấp lánh, đa dạng màu sắc.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Tượng không chỉ tô điểm cho không gian trong xe mà còn khử mùi, tạo cho xe mùi hương dễ chịu. Khoang đế là nơi lưu giữ lượng nước hoa trong quá trình sử dụng. Tượng được dùng trưng bày trên ô tô, bàn làm việc</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><img decoding=\"async\" loading=\"lazy\" class=\"alignnone wp-image-12163\" src=\"https://mucar.vn/wp-content/uploads/2022/02/tuong-ho-lo-quan-am-tranh-phong-thuy-3.jpg\" alt=\"Tượng Hồ Lô Quan Âm tranh Phong Thủy\" width=\"1000\" height=\"1000\" srcset=\"https://mucar.vn/wp-content/uploads/2022/02/tuong-ho-lo-quan-am-tranh-phong-thuy-3.jpg 500w, https://mucar.vn/wp-content/uploads/2022/02/tuong-ho-lo-quan-am-tranh-phong-thuy-3-300x300.jpg 300w, https://mucar.vn/wp-content/uploads/2022/02/tuong-ho-lo-quan-am-tranh-phong-thuy-3-100x100.jpg 100w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" style=\"box-sizing: border-box; height: auto; border: 0px; display: block; margin-bottom: 0px;\"></p><h3 style=\"box-sizing: border-box; margin-bottom: 1em; font-family: Quicksand; line-height: 1.043em; color: rgb(51, 62, 72); font-size: 1.643em; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Đặc điểm của sản phẩm Tượng Hồ Lô Quan Âm tranh Phong Thủy :</span></h3><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><ul style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Màu sắc: tím, đỏ, xanh dương,Hồng,Cam</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Trọng lượng: 540gr.</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Chất liệu pha lê khối</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Chạm khắc tinh xảo</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Các chi tiết góc cạnh kết hợp tài tình, tỉ mỉ.</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Phát ra những tia sáng lấp lánh, cực kì huyền ảo khi mặt trời chiếu vào.</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Bình hồ lô có đặc điểm miệng nhỏ bụng lớn.</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Là hình tượng thể hiện tài lộc đầy kho.</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Có tác dụng chiêu tài, nạp phúc, tránh tà, bình an và may mắn.</span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">Là vật phẩm phong thủy mang lại thành công, thuận lợi.</span></li><li style=\"box-sizing: border-box; margin-bottom: 0px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px; vertical-align: inherit;\">====&gt;Tặng kèm 1 lọ nước hoa.</span></li></ul>                                <h4></h4>', 0, 8, 3, 3, 1, '2023-05-09 09:46:26', '2023-05-15 05:03:47'),
(15, 'Nước hoa chó Bull', 'Sở hữu bề ngoài dạng hình độc lạ, ngộ nghĩnh kèm mùi nước hoa đẳng cấp, Nước hoa Chó Bulldog gắn cửa gió điều hòa ô tô bao lâu nay vẫn là loại sản phẩm được đa dạng bác bỏ tài kiếm tìm…', '1683625662417-nuochoachobill.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Thiết kế mẫu toả hương đầu chó Bull siêu ngầu, sang trọng.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Mùi hương nhẹ nhàng, ngọt nhẹ, thoang thoảng.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Giải quyết được các mùi hôi trong xe, giúp tài xế và người ngồi trong xe ô tô có được một bầu không khí thoải mái và dịu mát.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– 1 set bao gồm: 1 lọ nước hoa dung tích 10ml, 1 Đầu chó Bull, 1 kẹp cửa gió, 1 cục bông thấm giữ hương và 1 hộp đựng sang trọng.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Hướng dẫn sử dụng: Đổ tinh dầu vào bông thấm giữ hương đi kèm, vặn đầu chó theo chiều kim đồng hồ, đặt lõi thấm hút vào bên trong. Sử dụng kẹp khe gió điều hoà gắn vào xe</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Đặc điểm nổi bật</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Được làm bằng chất liệu thân thiện với môi trường, chất lượng cao</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Thiết kế có thể được sử dụng trong xe hơi và trong nhà và bất kỳ sự thích nghi nào trong nhà.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">không độc hại, không có hóa chất và mùi hương nhân tạo&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Làm sạch không khí bên trong xe, giữ cho không khí trong lành, giảm khí độc hại&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Món quà cho bạn bè, khách hàng của bạn, cho tất cả những người thích Bulldog hoặc động vật.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">✪ Thông tin về sản phẩm:&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\"><img draggable=\"false\" role=\"img\" class=\"emoji\" alt=\"✔\" src=\"https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg\" style=\"box-sizing: border-box; margin-bottom: 0px; border-width: initial !important; border-color: initial !important; border-image: initial !important; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; box-shadow: none !important; width: 1em !important; margin-top: 0px !important; margin-right: 0.07em !important; margin-left: 0.07em !important; background: none !important; padding: 0px !important;\">&nbsp;Chất liệu: Nhựa ABS siêu cứng mạ CRÔM, tạo nên một chú chó bull cực Cool Ngầu&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\"><img draggable=\"false\" role=\"img\" class=\"emoji\" alt=\"✔\" src=\"https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg\" style=\"box-sizing: border-box; margin-bottom: 0px; border-width: initial !important; border-color: initial !important; border-image: initial !important; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; box-shadow: none !important; width: 1em !important; margin-top: 0px !important; margin-right: 0.07em !important; margin-left: 0.07em !important; background: none !important; padding: 0px !important;\">&nbsp;Màu sắc: ĐEN – ĐỎ – VÀNG – BẠC – HỒNG (rose)</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">&nbsp;<img draggable=\"false\" role=\"img\" class=\"emoji\" alt=\"✔\" src=\"https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg\" style=\"box-sizing: border-box; margin-bottom: 0px; border-width: initial !important; border-color: initial !important; border-image: initial !important; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; box-shadow: none !important; width: 1em !important; margin-top: 0px !important; margin-right: 0.07em !important; margin-left: 0.07em !important; background: none !important; padding: 0px !important;\">&nbsp;Loại hình: Gắn (kẹp) vào cửa gió điều hòa, khiến cho thơm xe.&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\"><img draggable=\"false\" role=\"img\" class=\"emoji\" alt=\"✔\" src=\"https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg\" style=\"box-sizing: border-box; margin-bottom: 0px; border-width: initial !important; border-color: initial !important; border-image: initial !important; vertical-align: -0.1em !important; height: 1em !important; display: inline !important; box-shadow: none !important; width: 1em !important; margin-top: 0px !important; margin-right: 0.07em !important; margin-left: 0.07em !important; background: none !important; padding: 0px !important;\">&nbsp;Mùi hương: thơm nhẹ, dễ chịu&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">( Lưu ý: ví như ko thích mùi nước hoa này người mua với thể cho nước hoa riêng của người dùng vào thay thế)</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">&nbsp;Bộ sản phẩm gồm: 1 đầu chó Pitbull, 1 lọ nước hoa, 1 cục bông thấm và 1 thanh kẹp inox</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">&nbsp;✪ Hướng dẫn sử dụng và lắp đặt sản phẩm:</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">&nbsp;– B1: Xoay nắp lưng theo chiều mũi tên chỉ dẫn để mở nắp lưng ra&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– B2: Nhỏ nước hoa cho thấm vừa phải vào cục bông được đặt phía sau lưng chú bull (cho thấm vừa phải cục bông)&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– B3: Vặn nắp lưng chó Pitbull lại&nbsp;</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– B4: Thanh kẹp inox hút chặt sau lưng Chó Pitbul</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Xuất xứ: Made in Korea</span></p>                                <h4></h4>', 0, 8, 3, 3, 1, '2023-05-09 09:47:42', '2023-05-15 05:03:47'),
(16, 'Khánh Phật', 'Khánh treo xe may mắn là phụ kiện phong thủy được nhiều chủ xế sử dụng để trang trí bên trong chiếc xe của mình!', '1683625715906-design-1.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Khánh treo xe được hiểu nôm na là 1 dây treo xe được tết tỉ mỉ với nhiều tua dua nhằm mục đích hút nhiều tài lộc và may mắn. Trên dây treo đó có một vật phẩm phong thủy linh thiêng. Vừa để tạo thêm vẻ đẹp vừa tăng thêm ý nghĩa phong thủy.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Theo quan niệm phương Đông, khánh treo xe ô tô càng có nhiều sợi tua rua sẽ càng “hút” may mắn, niềm vui và hạnh phúc về phía người sở hữu. Các chi tiết trang trí mang đậm tâm linh của sự an lành cũng giúp tài xế lái xe an toàn, chắc chắn hơn.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Đặc điểm</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Phụ kiện mang lại sự may mắn trong phong thủy</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Tạo điểm nhấn cho không gian trong xe</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Giúp không gian của buồng lái luôn có sinh lực và hỉ xả</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Hoa sen biểu trưng cho tâm tính thanh tịnh</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Mang đến may mắn, niềm vui và hạnh phúc</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">– Giúp tài xế lái xe an toàn, chắc chắn hơn.</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Mô tả sản phẩm:</span></p><ul style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Chất liệu: gỗ đào</span></li><li style=\"box-sizing: border-box; margin-bottom: 0px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">chiều dài tổng thể 40cm, chiều dài trang trí treo 6,5cm rộng 3cm độ dày 2,5cm</span></li></ul>                                <h4></h4>', 0, 8, 3, 3, 1, '2023-05-09 09:48:35', '2023-05-15 05:03:47'),
(17, 'Quạt máy đơn mini gắn taplo và kính xe ô tô F403', 'Quạt máy đơn mini gắn trên taplo và kính xe ô tô là một phụ kiện tiện ích ô tô dùng để cung cấp luồng gió mát trong xe. Có hai loại quạt máy đơn mini thường được sử dụng trong xe ô tô', '1683625888285-6b7b65f7c15a3323f7048a5d9c29eb5b.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700;\">Quạt máy đơn sử dụng trên ô tô và bàn làm việc</span><br style=\"box-sizing: border-box;\">– Lái xe trong môi trường nóng bức do hơi nóng của động cơ tỏa ra, nhất &nbsp;là về mùa hè nóng nực làm ảnh hưởng rất nhiều đến sức khỏe. Hay ngồi làm việc tại văn phòng cần có chút gió thoáng mát. Lúc này, một chiếc đơn&nbsp;mini lấy nguồn từ tẩu trên ô tô&nbsp;đặt ngay trong cabin, sát người tài xế lái xe, là giải pháp lý tưởng nhất.<br style=\"box-sizing: border-box;\">– Sử dụng: Dùng trên ô tô lấy nguồn từ tẩu trên ô tô, dùng trên bàn làm việc lấy nguồn từ USB máy tính<br style=\"box-sizing: border-box;\">– Sản phẩm phù hợp để lắp đặt cho các loại xe tải nhỏ, xe van, ô tô 4 – 5&nbsp;chỗ hay bàn làm việc&nbsp;giúp tạo luồng khí lưu thông, mang tới sự mát mẻ và dễ chịu cho người ngồi trong xe.<br style=\"box-sizing: border-box;\">– Quạt &nbsp;có thể điều chỉnh được 360&nbsp;độ, để người dùng dễ dàng điều chỉnh hướng gió phù hợp với nhu cầu sử dụng.<br style=\"box-sizing: border-box;\">– Làm từ nhựa ABS&nbsp;cao cấp, thân thiện với môi trường và không độc hại<br style=\"box-sizing: border-box;\">– Trọng lượng nhẹ và ít tiếng ồn, xua tan các mùi lạ trong xe<br style=\"box-sizing: border-box;\">– Với công suất nhỏ, tiết kiệm điện và xăng dầu<br style=\"box-sizing: border-box;\">– Kích thước nhỏ gọn, nhưng có thể tạo ra gió mạnh.<br style=\"box-sizing: border-box;\">– Không bị vướng tầm nhìn quan sát luôn giúp bạn lái xe tốt hơn, xử lý tình huống tốt hơn.<br style=\"box-sizing: border-box;\">– Động cơ cực khỏe, an toàn khi sử dụng.<br style=\"box-sizing: border-box;\">– Thích hợp cho hầu hết các xe, như xe hơi, xe tải và xe buýt, bàn làm việc,<br style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; font-weight: 700;\">Thông số kỹ thuật</span><br style=\"box-sizing: border-box;\">– Nguồn điện 5V, 1A<br style=\"box-sizing: border-box;\">– Công suất: 5W<br style=\"box-sizing: border-box;\">– Độ ồn: 30dB<br style=\"box-sizing: border-box;\">– Chất liệu nhựa ABS<br style=\"box-sizing: border-box;\">– Dây nguồn USB dài 1.4m<br style=\"box-sizing: border-box;\">– Tích hợp 3 tốc độ gió:&nbsp; Mức&nbsp;1 / mức 2&nbsp;/ mức 3<br style=\"box-sizing: border-box; margin-bottom: 0px;\">– Trọng lượng: 240g</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Liên hệ hotline: 0901 464 566</span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box;\">Truy cập website:&nbsp;</span><a href=\"https://mucar.vn/\" style=\"box-sizing: border-box; color: rgb(2, 117, 216); margin-bottom: 0px;\">mucar.vn</a></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">CÔNG TY PHÂN PHỐI PHỤ KIỆN Ô TÔ – ĐỒ CHƠI XE HƠI MUCAR</span></p>                                <h4></h4>', 0, 9, 3, 3, 1, '2023-05-09 09:51:28', '2023-05-15 05:03:47'),
(18, 'Gối tựa lưng cao su non 626CL', 'Gối tựa lưng cao su non được làm bằng chất liệu cao su non cao cấp, có đàn hồi tốt. Đặc tính đàn hồi giúp nâng đỡ, phân bổ lực đồng đều lên cơ thể.', '1683625957935-goi-co-cao-su-8.jpg', 0, '                                <h4></h4><div><br></div><div><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><img decoding=\"async\" loading=\"lazy\" class=\"alignnone wp-image-11003\" src=\"https://mucar.vn/wp-content/uploads/2021/10/goi-co-cao-su-8.jpg\" alt=\"Gối tựa lưng cao su non\" width=\"1000\" height=\"1000\" srcset=\"https://mucar.vn/wp-content/uploads/2021/10/goi-co-cao-su-8.jpg 500w, https://mucar.vn/wp-content/uploads/2021/10/goi-co-cao-su-8-300x300.jpg 300w, https://mucar.vn/wp-content/uploads/2021/10/goi-co-cao-su-8-100x100.jpg 100w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" style=\"box-sizing: border-box; height: auto; border: 0px; display: block; margin-bottom: 0px;\"></p><ol style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Tên sản phẩm:<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">&nbsp;GỐI TỰA LƯNG CAO SU NON</span></span></li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; margin-bottom: 0px;\">Màu sắc: Xám, Đen, Kem,</span></li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Mô tả sản phẩm :</li></ol><ul style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Gối tựa lưng cao su non có thiết kế nâng đỡ cơ thể.</li><li style=\"box-sizing: border-box;\">Độ dày tốt rất êm ái.</li><li style=\"box-sizing: border-box;\">Được làm bằng chất liệu cao su non cao cấp, có đàn hồi tốt. Đặc tính đàn hồi giúp nâng đỡ, phân bố lực đồng đều lên cơ thể.</li><li style=\"box-sizing: border-box;\">Bên ngoài gối lớp vải nhung 3d cao cấp thoáng mát, có màu sắc sang trọng, có thể tháo ra vệ sinh sạch sẽ.</li><li style=\"box-sizing: border-box;\">Kiểu dáng thiết kế hiện đại, thời trang</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Màu sắc: Đen, Kem, Xám</li><li></li></ul></div>', 0, 9, 3, 3, 1, '2023-05-09 09:52:37', '2023-05-15 05:03:47'),
(19, 'Dù che nắng kính lái ô tô loại nhỏ', 'Gối tựa lưng cao su non được làm bằng chất liệu cao su non cao cấp, có đàn hồi tốt. Đặc tính đàn hồi giúp nâng đỡ, phân bổ lực đồng đều lên cơ thể.', '1683626081186-48b113ff4428aede2d49e05a7936174a-1.jpeg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><img decoding=\"async\" loading=\"lazy\" class=\"alignnone wp-image-11081\" src=\"https://mucar.vn/wp-content/uploads/2021/10/du-chong-nang-kinh-lai-7.jpg\" alt=\"Dù che nắng kính lái ô tô loại nhỏ\" width=\"1000\" height=\"1000\" srcset=\"https://mucar.vn/wp-content/uploads/2021/10/du-chong-nang-kinh-lai-7.jpg 500w, https://mucar.vn/wp-content/uploads/2021/10/du-chong-nang-kinh-lai-7-300x300.jpg 300w, https://mucar.vn/wp-content/uploads/2021/10/du-chong-nang-kinh-lai-7-100x100.jpg 100w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" style=\"box-sizing: border-box; height: auto; border: 0px; display: block; margin-bottom: 0px;\"></p><h2 style=\"box-sizing: border-box; margin-bottom: 1em; font-family: Quicksand; line-height: 1.043em; color: rgb(51, 62, 72); font-size: 1.643em; letter-spacing: -0.14px;\">Thông tin sản phẩm :&nbsp;<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">DÙ CHE NẮNG KÍNH LÁI Ô TÔ LOẠI NHỎ</span></h2><ul style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Tên sản phẩm:&nbsp;<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Dù che nắng kính lái ô tô loại nhỏ&nbsp;</span></li><li style=\"box-sizing: border-box;\">Chất liệu: (vải dù) keo bạc titan</li><li style=\"box-sizing: border-box;\">Chỉ số chống nắng: UPF50 +</li><li style=\"box-sizing: border-box;\">&nbsp;Kích thước: 65*125cm<br style=\"box-sizing: border-box;\"><h2 style=\"box-sizing: border-box; margin-bottom: 0px; line-height: 1.043em; color: rgb(51, 62, 72); font-size: 1.643em; font-family: Quicksand !important;\">Tính chất sản phẩm :&nbsp;<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Dù che nắng kính lái ô tô</span></h2></li><li style=\"box-sizing: border-box;\">&nbsp;<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Bảo vệ khỏi ánh nắng mặt trời:</span>&nbsp;Chiếc ô che nắng chất lượng cao không chỉ bảo vệ chặn ánh sáng mặt trời một cách hoàn hảo mà còn giúp bảng điều khiển và vải bọc không bị phai màu và rách, đồng thời rút ngắn đáng kể thời gian cần thiết để làm mát xe của bạn.</li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; font-weight: 700;\">Dễ gấp</span>:&nbsp;<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Dù che nắng kính lái&nbsp; ô tô</span>&nbsp;rất tiện lợi cho việc sử dụng hàng ngày và là phụ kiện che nắng lý tưởng cho ô tô vào mùa hè! Thiết kế nhỏ gọn có thể gập lại đi kèm trong túi đựng dễ dàng – Mọi chi tiết đều quan trọng! Có thể gấp gọn dễ dàng và không chiếm diện tích trong xe.</li><li style=\"box-sizing: border-box;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Phù hợp hầu hết các loại xe</span>&nbsp;: Cho dù bạn sở hữu xe sedan, xe tải, SUV, xe tải nhỏ hay thậm chí là xe tải, tấm che nắng ô tô của chúng tôi sẽ bao quanh kính chắn gió và đạt được độ che phủ tối đa cho chiếc xe của bạn và cung cấp cho bạn khả năng chống nắng tối đa.</li><li style=\"box-sizing: border-box;\">Tay cầm, chân<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">&nbsp;dù che nắng kính lái ô tô</span>&nbsp;được gia cố, bọc hạt ô, chống trượt hiệu quả, giá đỡ chắc chắn hơn không dễ gây trầy xước xe.</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Thiết kế dạng dù, không cần cài đặt, có thể mở ra sử dụng sau khi đậu xe</li></ul>', 0, 9, 3, 3, 1, '2023-05-09 09:54:41', '2023-05-15 05:03:47'),
(20, 'Gel silicone làm sạch nội thất ô tô- dạng túi', 'Gel silicone làm sạch nội thất ô tô có ưu điểm siêu dính và linh hoạt trên mọi bề mặt, miếng cao su vệ sinh giúp bạn làm sạch những khe, kẹt mà khăn lau không thể chạm tới. Miếng cao su được sản xuất từ chất liệu gel, giúp cuốn bay những vết bẩn hoặc bụi ', '1683626170242-gel-silicon-lam-sach-noi-that-o-to-3.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Sự xuất hiện của món phụ kiện này sẽ mang lại cho bạn không gian sạch sẽ, gọn gàng hơn bao giờ hết. Bạn có thể tái sử dụng nhiều lần miếng cao su, nhờ đó mang lại hiệu quả và tiết kiệm.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><img decoding=\"async\" loading=\"lazy\" class=\"alignnone wp-image-11639\" src=\"https://mucar.vn/wp-content/uploads/2019/10/gel-silicon-lam-sach-noi-that-o-to-7.jpg\" alt=\"\" width=\"1000\" height=\"1000\" srcset=\"https://mucar.vn/wp-content/uploads/2019/10/gel-silicon-lam-sach-noi-that-o-to-7.jpg 500w, https://mucar.vn/wp-content/uploads/2019/10/gel-silicon-lam-sach-noi-that-o-to-7-300x300.jpg 300w, https://mucar.vn/wp-content/uploads/2019/10/gel-silicon-lam-sach-noi-that-o-to-7-100x100.jpg 100w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" style=\"box-sizing: border-box; height: auto; border: 0px; display: block; margin-bottom: 0px;\"></p><h3 style=\"box-sizing: border-box; margin-bottom: 1em; font-family: Quicksand; line-height: 1.043em; color: rgb(51, 62, 72); font-size: 1.643em; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Ưu điểm của Gel silicone làm sạch nội thất ô tô<br style=\"box-sizing: border-box; margin-bottom: 0px;\"></span></h3><ul style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Siêu dính và linh hoạt trên mọi bề mặt</li><li style=\"box-sizing: border-box;\">Giúp bạn làm sạch những khe, kẹt mà khăn lau không thể chạm tới</li><li style=\"box-sizing: border-box;\">Được sản xuất từ chất liệu gel</li><li style=\"box-sizing: border-box;\">Cuốn bay những vết bẩn hoặc bụi bám trên tap lô ô tô, khe bàn phím máy tính..</li><li style=\"box-sizing: border-box;\">Mọi đồ vật sẽ được vệ sinh một cách tiện lợi, nhanh chóng</li><li style=\"box-sizing: border-box;\">Không còn mất nhiều công sức lau chùi</li><li style=\"box-sizing: border-box;\">Chỉ lấy đi bụi bẩn chứ không bám dính vào tay và thiết bị</li><li style=\"box-sizing: border-box;\">Mang lại cho bạn không gian sạch sẽ, gọn gàng</li><li style=\"box-sizing: border-box;\">Có thể tái sử dụng nhiều lần miếng cao su</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Mang lại hiệu quả và tiết kiệm</li></ul>                                <h4></h4>', 0, 9, 3, 3, 1, '2023-05-09 09:56:10', '2023-05-15 05:03:47'),
(21, 'Bộ dán phản quang bảo vệ, trang trí ô tô', 'Dải bảo vệ trang trí ô tô được sản xuất từ chất liệu nhựa đã qua quá trình xử lí nên có độ bền cao. Phần lõi bên trong là khung sắt cứng cáp. Nhờ có phần lõi này, dải bảo vệ luôn bám chắc vào cánh cửa xe và nằm ở vị trí cố định trong suốt quá trình sử dụn', '1683626249208-Bo-dan-phan-quang-bao-ve-trang-tri-o-to_800x800.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Đây là phụ kiện hỗ trợ nhiều dòng, chủng loại ô tô.&nbsp;Sự kết hợp giữa gam màu và hoa văn trên bề mặt tạo nên&nbsp;phong cách mạnh mẽ cho xế yêu của bạn. Dải bảo vệ uốn cong linh hoạt theo chi tiết trên xe. Dải có chiều dài 5m.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Cấu tạo của dải bảo vệ trang trí ô tô<br style=\"box-sizing: border-box; margin-bottom: 0px;\"></span></p><ul style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Màu sắc: đen; trắng</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Kích thước: 5m</li></ul><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Ưu điểm của dải bảo vệ trang trí ô tô<br style=\"box-sizing: border-box; margin-bottom: 0px;\"></span></p><ul style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Được sản xuất từ chất liệu nhựa đã qua quá trình xử lí</li><li style=\"box-sizing: border-box;\">Độ bền cao</li><li style=\"box-sizing: border-box;\">Phần lõi bên trong là khung sắt cứng cáp</li><li style=\"box-sizing: border-box;\">Dải bảo vệ luôn bám chắc vào cánh cửa xe</li><li style=\"box-sizing: border-box;\">Nằm ở vị trí cố định trong suốt quá trình sử dụng</li><li style=\"box-sizing: border-box;\">Tránh cho phần cửa bị va chạm, trầy xước khi di chuyển hoặc lên xuống xe</li><li style=\"box-sizing: border-box;\">Là phụ kiện hỗ trợ nhiều dòng, chủng loại ô tô</li><li style=\"box-sizing: border-box;\">Tạo nên phong cách mạnh mẽ cho xế yêu của bạn</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Uốn cong linh hoạt theo chi tiết trên xe</li></ul>                                <h4></h4>', 79000, 9, 3, 3, 1, '2023-05-09 09:57:29', '2023-05-15 05:03:47'),
(22, 'Bạt phủ xe ô tô tráng nhôm 7 chỗ', 'Bạt Phủ Xe Ô tô Tráng Nhôm 7 Chỗ là phụ kiện bảo vệ cực kì hiệu quả dành cho dòng xe 7 chỗ. Phụ kiện này đặc biệt thu hút người dùng bởi chất liệu tráng nhôm đã qua quá trình xử lí, gia tăng hiệu quả bảo vệ trong mọi điều kiện thời tiết.', '1683626409362-bat_chong_nang_7_cho.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Bạn sẽ hoàn toàn yên tâm khi ôtô không còn bị ảnh hưởng bởi nắng nóng, mưa rào, lá cây rụng, gió bụi… Ngoài ra,&nbsp;<span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Bạt Phủ Xe Ô tô Tráng Nhôm 7 Chỗ</span>&nbsp;còn ngăn chặn tác động từ tia cực tím, va chạm dẫn đến trầy xước.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Bạn sẽ tiết kiệm&nbsp;chi phí rửa xe, bảo dưỡng xe bởi xe luôn sạch sẽ, sáng bóng, được bảo quản kĩ lưỡng. Bên cạnh đó, nếu bạn muốn tự tay chăm sóc xe thì vẫn dễ dàng lau chùi, vệ sinh cho xe.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Với lớp nhôm cách nhiệt, bạn sẽ không còn bị ám ảnh bởi tình trạng “sốc nhiệt” khi bước vào trong xe dưới trời nắng, để xe lâu ngoài bãi không có mái che. Bạt phủ hoàn toàn không thấm nước, kết cấu chịu lực và độ bền cao. Khi sử dụng, nếu cần tìm xe khi trời tối hoặc trong điều kiện thiếu sáng, bạn sẽ chủ động xác định vị trí bởi bạt có lớp dạ quang tự động hóa sáng.</p><h2 style=\"box-sizing: border-box; margin-bottom: 1em; font-family: Quicksand; line-height: 1.043em; color: rgb(51, 62, 72); font-size: 1.643em; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Cấu tạo của Bạt phủ xe ô tô tráng nhôm 7 chỗ<br style=\"box-sizing: border-box; margin-bottom: 0px;\"></span></h2><ul style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Màu sắc: bạc</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Trọng lượng: 500gr</li></ul><h2 style=\"box-sizing: border-box; margin-bottom: 1em; font-family: Quicksand; line-height: 1.043em; color: rgb(51, 62, 72); font-size: 1.643em; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Ưu điểm Bạt phủ xe ô tô tráng nhôm 7 chỗ</span></h2><ul style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Chất liệu tráng nhôm đã qua quá trình xử lí</li><li style=\"box-sizing: border-box;\">Gia tăng hiệu quả bảo vệ trong mọi điều kiện thời tiết</li><li style=\"box-sizing: border-box;\">Không còn bị ảnh hưởng bởi nắng nóng, mưa rào, lá cây rụng, gió bụi…</li><li style=\"box-sizing: border-box;\">Ngăn chặn tác động từ tia cực tím, va chạm dẫn đến trầy xước</li><li style=\"box-sizing: border-box;\">Tiết kiệm chi phí rửa xe, bảo dưỡng xe</li><li style=\"box-sizing: border-box;\">Xe luôn sạch sẽ, sáng bóng, được bảo quản kĩ lưỡng</li><li style=\"box-sizing: border-box;\">Dễ dàng lau chùi, vệ sinh cho xe</li><li style=\"box-sizing: border-box;\">Thoát khỏi tình trạng “sốc nhiệt” khi bước vào trong xe dưới trời nắng</li><li style=\"box-sizing: border-box;\">An tâm khi để xe lâu ngoài bãi không có mái che</li><li style=\"box-sizing: border-box;\">Không thấm nước</li><li style=\"box-sizing: border-box;\">Kết cấu chịu lực</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Độ bền cao</li></ul>                                <h4></h4>', 0, 9, 3, 3, 1, '2023-05-09 10:00:09', '2023-05-15 05:03:47'),
(23, 'Súc béc dầu', 'Súc bé dầu là hỗn hợp các chất tẩy, phân tán cặn bẩn, bảo vệ động cơ và tăng chỉ số cetan, được sản xuất phù hợp cho các động cơ, nhiên liệu và điều kiện vận hành ngày nay.', '1683626474481-Suc-bec-dau-200ml.jpg', 10, '<a href=\"https://mucar.vn/san-pham/suc-bec-dau\" style=\"box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(2, 117, 216); margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">Súc bé dầu</span></a><span style=\"font-family: Quicksand; letter-spacing: -0.14px;\">&nbsp;là hỗn hợp các chất tẩy, phân tán cặn bẩn, bảo vệ động cơ và tăng chỉ số cetan, được sản xuất phù hợp cho các động cơ, nhiên liệu và điều kiện vận hành ngày nay. Súc béc dầu cung cấp sự bôi trơn tốt hơn cho nhiên liệu có lượng lưu huỳnh thấp. Hiệu suất đánh lửa cao, nhờ vậy khả năng đốt cháy của nhiên liệu khi động cơ nguội tốt hơn và mùi khí thải ô nhiễm giảm. Phù hợp cho tất cả các động cơ và nhiên liệu dầu.</span>                                <h4></h4>', 0, 9, 3, 3, 1, '2023-05-09 10:01:14', '2023-05-15 05:03:47'),
(24, 'Bảo vệ ốc xe', 'Bảo vệ ốc mâm xe (còn được gọi là bảo vệ van mâm xe) là một phụ kiện được sử dụng để bảo vệ và tăng cường thẩm mỹ cho các ốc vít và van trên mâm xe ô tô. Thông thường, bảo vệ ốc mâm xe ', '1683626540012-Bao-ve-oc-xe.jpg', 0, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\"><a href=\"https://mucar.vn/san-pham/bao-ve-oc-xe\" style=\"box-sizing: border-box; color: rgb(2, 117, 216); margin-bottom: 0px;\">Bảo vệ ốc mâm xe</a>&nbsp;</span>được làm từ chất liệu cao su cao cấp, chịu mài mòn, chống trầy xước và chống gỉ. Sản phẩm chịu được biên độ nhiệt từ 300 độ C đến -25 độ C. Nhờ đa dạng về công năng, bộ sản phẩm giúp bảo vệ ốc mâm xe tránh khỏi tác động của thời tiết và ngoại cảnh. Ngoài ra, ốc còn là phụ kiện trang trí, màu sắc nổi bật tạo nên phong cách cá tính cho chiếc xe hơi của bạn. Dễ dàng lắp đặt bởi độ mềm dẻo giúp sản phẩm nhanh chóng bao bọc phần đầu ốc. Một bộ sản phẩm bao gồm 30 cái, dùng cho 4 bánh xe.</p><ul style=\"box-sizing: border-box; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Màu sắc: đỏ, vàng, cam, tím, xanh dương, xanh lá</li><li style=\"box-sizing: border-box;\">Chất liệu: cao su</li><li style=\"box-sizing: border-box;\">Trọng lượng: 30 gr</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Đơn vị tính: 1 hộp</li></ul><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">ƯU ĐIỂM của bảo vệ ốc xe<br style=\"box-sizing: border-box; margin-bottom: 0px;\"></span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Chất liệu cao su cao cấp</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Chịu mài mòn</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Chống trầy xước khi va chạm,&nbsp;Chống gỉ</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Chịu được biên độ nhiệt từ 300 độ C đến -25 độ C</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Giúp bảo vệ ốc mâm xe tránh khỏi tác động của thời tiết và ngoại cảnh</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Màu sắc nổi bật tạo nên phong cách cá tính cho chiếc xe hơi của bạn</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">– Dễ dàng lắp đặt</p><p style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\">– Phù hợp với mọi loại xe, dòng xe, Không ảnh hưởng đến kết cấu của xe</p>                                <h4></h4>', 0, 9, 3, 3, 1, '2023-05-09 10:02:20', '2023-05-15 05:03:47'),
(25, 'Chổi Lau Rửa/ Vệ Sinh Xe Ô tô Phẳng', 'Chổi lau rửa/vệ sinh ô tô là một dụng cụ được sử dụng để làm sạch và vệ sinh bề mặt nội thất và ngoại thất của xe ô tô. ', '1683626593696-choi-lau-rua-ve-sinh-o-to-1.jpg', 5, '<p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\"><a href=\"https://mucar.vn/san-pham/choi-lau-ve-sinh-xe-o-to\" style=\"box-sizing: border-box; color: rgb(2, 117, 216); margin-bottom: 0px;\">Chổi lau rửa/ vệ sinh ô tô</a></span></p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Việc lau chùi, vệ sinh xe giờ đây sẽ không còn chiếm nhiều thời gian và công sức của bạn bởi đã có sự hỗ trợ tối đa từ chổi vệ sinh xe hơi. Đầu lau quay tròn 360 độ làm sạch mọi vị trí trên xe như nóc xe, đầu xe, thân xe, mọi ngóc ngách mà những cây lau thông thường khó tiếp cận đến. Độ dài cán chổi linh hoạt thay đổi, có thể kéo dài hoặc thu gọn tùy theo nhu cầu sử dụng.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\">Phần tay cầm có quấn mút nén mang đến cảm giác êm ái, chống trơn trượt. Phần đầu chổi sở hữu sợi bông được làm từ chất liệu microfiber nhẹ nhàng cuốn bay mọi bụi bẩn, không ảnh hưởng bề mặt tác động và không để lại bụi bông. Sợi bông thấm hút nước cực tốt, nhanh khô. Ngoài sử dụng để vệ sinh xe, chổi còn phù hợp sử dụng trong nhiều không gian khác nhau : vệ sinh đồ dùng trong nhà, ngoài trời, cửa kiếng.</p><p style=\"box-sizing: border-box; margin-bottom: 15px; font-family: Quicksand; letter-spacing: -0.14px;\"><span style=\"box-sizing: border-box; font-weight: 700; margin-bottom: 0px;\">ƯU ĐIỂM của chổi vệ sinh xe hơi<br style=\"box-sizing: border-box; margin-bottom: 0px;\"></span></p><ul style=\"box-sizing: border-box; margin-bottom: 0px; font-family: Quicksand; letter-spacing: -0.14px;\"><li style=\"box-sizing: border-box;\">Cán chổi với vật liệu là thép chống gỉ cứng cáp và cực kỳ gọn nhẹ, có thể thu ngắn hay kéo dài 90cm &nbsp;tiện lợi cho mỗi dòng xe hay lau rửa cần độ cao.</li><li style=\"box-sizing: border-box;\">Đầu chổ làm băng sợi bông nên khi lau rửa không làm xước sơn xe hay kính.</li><li style=\"box-sizing: border-box;\">Dễ dàng làm sạch chổi: Mỗi lần lau xong ta chỉ việc rũ nhẹ chổi dầu và cho vào túi bảo quản cho lần sử dụng kế tiếp.</li><li style=\"box-sizing: border-box;\">Chổi có thể lau qua các cánh cửa, bàn ghế tủ sẽ tiết kiệm được thời gian và công sức lao động vì chỉ cần lau qua 1 lần là đã sạch, không phải lau đi lau lại nhiều lần.</li><li style=\"box-sizing: border-box;\">Sản phẩm mang lại cho bạn sự thoải mái và không lo mỏi tay, đau lưng.</li><li style=\"box-sizing: border-box;\">Đầu Bông dày thấm hút dễ dàng thấm và vắt khô vô cùng tiện lợi khi sử dụng.</li><li style=\"box-sizing: border-box;\">Bên cạnh đó, cây lau còn có thể điều chỉnh được độ dài, giúp làm sạch cả những góc khuất khó lau dọn như gầm giường, gầm tủ, bàn, ghế</li><li style=\"box-sizing: border-box; margin-bottom: 0px;\">Ngoài công dụng lau xe, bạn có thể lau cửa kính, lau sàn nhà, trần la phông, bề mặt máy lạnh… tất cả đều tiện dụng.</li></ul>                                <h4></h4>', 0, 9, 3, 3, 1, '2023-05-09 10:03:13', '2023-05-15 05:03:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thamso`
--

CREATE TABLE `thamso` (
  `mats` int(11) NOT NULL,
  `tents` varchar(255) NOT NULL,
  `giatri` float NOT NULL,
  `chuthich` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `thamso`
--

INSERT INTO `thamso` (`mats`, `tents`, `giatri`, `chuthich`, `created_at`, `updated_at`) VALUES
(1, 'MAX_SLRXCH', 5, 'Số lượng xe mà cửa hàng có thể phục vụ trong một khung giờ (30p)', '2023-05-01 09:01:42', '2023-05-01 09:01:42'),
(2, 'MAX_KH_ĐL', 20, 'Số lượng tối đa đơn đặt lịch của một khách hàng trong một ngày ', '2023-05-01 09:01:42', '2023-05-06 05:21:59'),
(3, 'MAX_KH_ĐH', 20, 'Số lượng tối đa đơn đặt hàng của một khách hàng trong một ngày ', '2023-05-01 09:01:42', '2023-05-09 06:08:06'),
(4, 'SL_SPHET', 3, 'Số lượng tối thiểu để sản phẩm', '2023-05-04 13:34:54', '2023-05-04 17:11:21'),
(5, 'PHI_SHIP_KH', 15000, 'Giá phí ship trong khu vực khánh hòa', '2023-05-08 09:10:02', '2023-05-08 09:10:02'),
(6, 'PHI_SHIP_NGOAITINH', 30000, 'Giá phí ship ngoài khu vực khánh hòa', '2023-05-08 09:10:02', '2023-05-08 09:10:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tinh`
--

CREATE TABLE `tinh` (
  `matinh` int(11) NOT NULL,
  `tentinh` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tinh`
--

INSERT INTO `tinh` (`matinh`, `tentinh`, `created_at`, `updated_at`) VALUES
(1, ' Hà Nội', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(2, ' Hà Giang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(3, ' Cao Bằng', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(4, ' Bắc Kạn', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(5, ' Tuyên Quang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(6, ' Lào Cai', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(7, ' Điện Biên', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(8, ' Lai Châu', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(9, ' Sơn La', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(10, ' Yên Bái', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(11, ' Hoà Bình', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(12, ' Thái Nguyên', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(13, ' Lạng Sơn', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(14, ' Quảng Ninh', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(15, ' Bắc Giang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(16, ' Phú Thọ', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(17, ' Vĩnh Phúc', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(18, ' Bắc Ninh', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(19, ' Hải Dương', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(20, ' Hải Phòng', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(21, ' Hưng Yên', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(22, ' Thái Bình', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(23, ' Hà Nam', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(24, ' Nam Định', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(25, ' Ninh Bình', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(26, ' Thanh Hóa', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(27, ' Nghệ An', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(28, ' Hà Tĩnh', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(29, ' Quảng Bình', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(30, ' Quảng Trị', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(31, ' Thừa Thiên Huế', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(32, ' Đà Nẵng', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(33, ' Quảng Nam', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(34, ' Quảng Ngãi', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(35, ' Bình Định', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(36, ' Phú Yên', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(37, ' Khánh Hòa', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(38, ' Ninh Thuận', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(39, ' Bình Thuận', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(40, ' Kon Tum', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(41, ' Gia Lai', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(42, ' Đắk Lắk', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(43, ' Đắk Nông', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(44, ' Lâm Đồng', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(45, ' Bình Phước', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(46, ' Tây Ninh', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(47, ' Bình Dương', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(48, ' Đồng Nai', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(49, ' Bà Rịa - Vũng Tàu', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(50, ' Hồ Chí Minh', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(51, ' Long An', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(52, ' Tiền Giang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(53, ' Bến Tre', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(54, ' Trà Vinh', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(55, ' Vĩnh Long', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(56, ' Đồng Tháp', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(57, ' An Giang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(58, ' Kiên Giang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(59, ' Cần Thơ', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(60, ' Hậu Giang', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(61, ' Sóc Trăng', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(62, ' Bạc Liêu', '2023-05-08 05:11:06', '2023-05-08 05:11:06'),
(63, ' Cà Mau', '2023-05-08 05:11:06', '2023-05-08 05:11:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trangthai`
--

CREATE TABLE `trangthai` (
  `matt` int(11) NOT NULL,
  `tentt` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `trangthai`
--

INSERT INTO `trangthai` (`matt`, `tentt`, `created_at`, `updated_at`) VALUES
(1, 'Chờ Xác Nhận', '2023-05-01 09:01:24', '2023-05-01 09:01:24'),
(2, 'Đã Xác Nhận', '2023-05-01 09:01:24', '2023-05-01 09:01:24'),
(3, 'Hủy', '2023-05-01 09:01:24', '2023-05-01 09:01:24'),
(4, 'Thành Công', '2023-05-01 09:01:24', '2023-05-01 09:01:24'),
(5, 'Đã Giao Cho Đơn Vị Vận Chuyển', '2023-05-01 09:01:24', '2023-05-01 09:01:24');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`mabv`),
  ADD KEY `fk_baiviet_nv` (`manv`);

--
-- Chỉ mục cho bảng `cthoadon`
--
ALTER TABLE `cthoadon`
  ADD PRIMARY KEY (`mahd`,`masp`),
  ADD KEY `fk_cthd_sp` (`masp`),
  ADD KEY `fk_cthd_hd` (`mahd`) USING BTREE;

--
-- Chỉ mục cho bảng `ctphieunhap`
--
ALTER TABLE `ctphieunhap`
  ADD PRIMARY KEY (`mapn`,`masp`),
  ADD KEY `masp` (`masp`),
  ADD KEY `mapn` (`mapn`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`madm`);

--
-- Chỉ mục cho bảng `gio`
--
ALTER TABLE `gio`
  ADD PRIMARY KEY (`magio`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `fk_hoadon_tt` (`matt`),
  ADD KEY `fk_hoadon_nv` (`manv`),
  ADD KEY `fk_hoadon_kh` (`makh`),
  ADD KEY `fk_hoadon_ps` (`maps`);

--
-- Chỉ mục cho bảng `hoadonrx`
--
ALTER TABLE `hoadonrx`
  ADD PRIMARY KEY (`mahdrx`),
  ADD KEY `fk_hoadonrx_lx` (`malx`),
  ADD KEY `fk_hoadonrx_tt` (`matt`),
  ADD KEY `fk_hoadonrx_nv` (`manv`),
  ADD KEY `fk_hoadonrx_kh` (`makh`),
  ADD KEY `fk_hoadonrx_gio` (`magio`);

--
-- Chỉ mục cho bảng `huyen`
--
ALTER TABLE `huyen`
  ADD PRIMARY KEY (`mahuyen`),
  ADD KEY `fk_huyen_tinh` (`matinh`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Chỉ mục cho bảng `loaixe`
--
ALTER TABLE `loaixe`
  ADD PRIMARY KEY (`malx`);

--
-- Chỉ mục cho bảng `nhacungcap`
--
ALTER TABLE `nhacungcap`
  ADD PRIMARY KEY (`mancc`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`manv`),
  ADD KEY `fk_nv_nhom` (`manhom`);

--
-- Chỉ mục cho bảng `nhom`
--
ALTER TABLE `nhom`
  ADD PRIMARY KEY (`manhom`);

--
-- Chỉ mục cho bảng `phieunhap`
--
ALTER TABLE `phieunhap`
  ADD PRIMARY KEY (`mapn`),
  ADD KEY `fk_phieunhap_mancc` (`mancc`),
  ADD KEY `fk_phieunhap_matt` (`matt`),
  ADD KEY `fk_phieunhap_manv` (`manv`);

--
-- Chỉ mục cho bảng `phiship`
--
ALTER TABLE `phiship`
  ADD PRIMARY KEY (`maps`),
  ADD KEY `fk_phiship_huyen` (`mahuyen`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`),
  ADD KEY `fk_sp_nv` (`manv`),
  ADD KEY `fk_sp_ncc` (`mancc`),
  ADD KEY `fk_sp_dm` (`madm`);

--
-- Chỉ mục cho bảng `thamso`
--
ALTER TABLE `thamso`
  ADD PRIMARY KEY (`mats`);

--
-- Chỉ mục cho bảng `tinh`
--
ALTER TABLE `tinh`
  ADD PRIMARY KEY (`matinh`);

--
-- Chỉ mục cho bảng `trangthai`
--
ALTER TABLE `trangthai`
  ADD PRIMARY KEY (`matt`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `mabv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `madm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `gio`
--
ALTER TABLE `gio`
  MODIFY `magio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `huyen`
--
ALTER TABLE `huyen`
  MODIFY `mahuyen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=706;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `makh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `loaixe`
--
ALTER TABLE `loaixe`
  MODIFY `malx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `nhacungcap`
--
ALTER TABLE `nhacungcap`
  MODIFY `mancc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `manv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `nhom`
--
ALTER TABLE `nhom`
  MODIFY `manhom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `thamso`
--
ALTER TABLE `thamso`
  MODIFY `mats` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `tinh`
--
ALTER TABLE `tinh`
  MODIFY `matinh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT cho bảng `trangthai`
--
ALTER TABLE `trangthai`
  MODIFY `matt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD CONSTRAINT `fk_baiviet_nv` FOREIGN KEY (`manv`) REFERENCES `nhanvien` (`manv`);

--
-- Các ràng buộc cho bảng `cthoadon`
--
ALTER TABLE `cthoadon`
  ADD CONSTRAINT `fk_cthd_hd` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`),
  ADD CONSTRAINT `fk_cthd_sp` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`);

--
-- Các ràng buộc cho bảng `ctphieunhap`
--
ALTER TABLE `ctphieunhap`
  ADD CONSTRAINT `fk_ctpn_pn` FOREIGN KEY (`mapn`) REFERENCES `phieunhap` (`mapn`),
  ADD CONSTRAINT `fk_ctpn_sp` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`);

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_hoadon_kh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`),
  ADD CONSTRAINT `fk_hoadon_nv` FOREIGN KEY (`manv`) REFERENCES `nhanvien` (`manv`),
  ADD CONSTRAINT `fk_hoadon_ps` FOREIGN KEY (`maps`) REFERENCES `phiship` (`maps`),
  ADD CONSTRAINT `fk_hoadon_tt` FOREIGN KEY (`matt`) REFERENCES `trangthai` (`matt`);

--
-- Các ràng buộc cho bảng `hoadonrx`
--
ALTER TABLE `hoadonrx`
  ADD CONSTRAINT `fk_hoadonrx_gio` FOREIGN KEY (`magio`) REFERENCES `gio` (`magio`),
  ADD CONSTRAINT `fk_hoadonrx_kh` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`),
  ADD CONSTRAINT `fk_hoadonrx_lx` FOREIGN KEY (`malx`) REFERENCES `loaixe` (`malx`),
  ADD CONSTRAINT `fk_hoadonrx_nv` FOREIGN KEY (`manv`) REFERENCES `nhanvien` (`manv`),
  ADD CONSTRAINT `fk_hoadonrx_tt` FOREIGN KEY (`matt`) REFERENCES `trangthai` (`matt`);

--
-- Các ràng buộc cho bảng `huyen`
--
ALTER TABLE `huyen`
  ADD CONSTRAINT `fk_huyen_tinh` FOREIGN KEY (`matinh`) REFERENCES `tinh` (`matinh`);

--
-- Các ràng buộc cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `fk_nv_nhom` FOREIGN KEY (`manhom`) REFERENCES `nhom` (`manhom`);

--
-- Các ràng buộc cho bảng `phieunhap`
--
ALTER TABLE `phieunhap`
  ADD CONSTRAINT `fk_phieunhap_mancc` FOREIGN KEY (`mancc`) REFERENCES `nhacungcap` (`mancc`),
  ADD CONSTRAINT `fk_phieunhap_manv` FOREIGN KEY (`manv`) REFERENCES `nhanvien` (`manv`),
  ADD CONSTRAINT `fk_phieunhap_matt` FOREIGN KEY (`matt`) REFERENCES `trangthai` (`matt`);

--
-- Các ràng buộc cho bảng `phiship`
--
ALTER TABLE `phiship`
  ADD CONSTRAINT `fk_phiship_huyen` FOREIGN KEY (`mahuyen`) REFERENCES `huyen` (`mahuyen`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `fk_sp_dm` FOREIGN KEY (`madm`) REFERENCES `danhmuc` (`madm`),
  ADD CONSTRAINT `fk_sp_ncc` FOREIGN KEY (`mancc`) REFERENCES `nhacungcap` (`mancc`),
  ADD CONSTRAINT `fk_sp_nv` FOREIGN KEY (`manv`) REFERENCES `nhanvien` (`manv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
