-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 04, 2023 lúc 07:21 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.0.28

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
  `tenbv` varchar(500) NOT NULL,
  `motangan` varchar(500) NOT NULL,
  `noidung` varchar(10000) NOT NULL,
  `hinhdd` varchar(100) NOT NULL,
  `manv` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `baiviet`
--

INSERT INTO `baiviet` (`mabv`, `tenbv`, `motangan`, `noidung`, `hinhdd`, `manv`, `created_at`, `updated_at`) VALUES
(1, 'Sự Thật Về Lớp Phủ Ceramic Ô Tô', 'Bạn muốn chiếc xe của bạn trông tuyệt vời như ngày bạn mới mua xe với lớp sơn xe loáng bóng. Nhưng bất chấp những nỗ lực của bạn trong việc bảo trì và bão dưỡng lớp sơn.', 'Sự ra đời của phủ ceramic ô tô\r\nBạn muốn chiếc xe của bạn trông tuyệt vời như ngày bạn mới mua xe với lớp sơn xe loáng bóng. Nhưng bất chấp những nỗ lực của bạn trong việc bảo trì và bão dưỡng lớp sơn, các vết trầy xước bắt đầu lan rộng ra bên ngoài xe của bạn và lớp sơn bắt đầu xỉn màu và phai màu khỏi ánh nắng mặt trời, khiến nhiều người tiêu dùng tìm cách chống tia UV.\r\n\r\nBất cứ điều gì và mọi thứ liên tục tấn công bề mặt xe của bạn. Bùn, bụi, mưa bẩn, đốm nước, bụi phanh khó coi, bụi bẩn bắt đầu bám vào xe của bạn gần như ngay lập tức sau khi làm sạch nó. Tuyết, băng, đường muối, kẹo cao su, phân chim cũng không giúp được gì.\r\n\r\nChưa kể những vết trầy xước trong cuộc sống hàng ngày từ trẻ em,  xe máy va chạm trên đường phố Việt Nam, lùi xe không cẩn thận…\r\n\r\nWax bóng có thể tăng thêm một mức độ sáng và bóng tốt, và một lượng nhỏ bảo vệ, nhưng chỉ kéo dài tối đa 6 tháng là tốt nhất. Wax bóng chắc chắn không hiệu quả như phủ gốm được.\r\n\r\nĐó chính là lý do vì sao phủ nano xe hơi xe máy bắt đầu ra đời. Sau này, phủ ceramic xe hơi hay phủ gốm được thịnh hành hơn bởi hoá chất tốt hơn so với các loại nano mà chúng ta sẽ cùng tìm hiểu sau đây.\r\n\r\nPhủ ceramic ô tô là gì?\r\nĐể hiểu được phủ ceramic là gì, chúng ta cần hiểu ceramic được làm từ đâu, thành phần hóa học là gì:\r\n\r\nCeramic là gì ?\r\nCeramics hay còn gọi là gốm sứ, bao gồm silicon dioxide (silica, Si02), có nguồn gốc từ các vật liệu tự nhiên như thạch anh và cát. Một số loại và nhãn hiệu ceramic cũng sử dụng titanium dioxide (titania, Ti02) để tăng độ cứng bổ sung cho dung dịch phủ ceramic. Khi được phủ lên sơn ô tô, cả hai tạo ra một liên kết hóa học với đặc tính kỵ nước, hay còn gọi là không thấm nước.\r\nLớp phủ ceramic ô tô 9h 10h là như thế nào?\r\nLớp phủ ceramic 9H là gì? 10H như thế nào ? Cách dễ nhất để hiểu là lớp phủ sứ như một lớp da thứ hai, hoặc một lớp giáp sẵn sàng hi sinh để bảo vệ lớp sơn xe của bạn.\r\n\r\nCeramics được phát triển từ công nghệ nano, về cơ bản là các hạt nhỏ tạo thành một lớp rất mỏng, hoàn toàn trong suốt trước mắt. Bởi vì các hạt này rất nhỏ, khi được áp dụng lên bề mặt, chúng bịt kín tất cả các lỗ nhỏ nano mà bạn không thấy được làm cho bề mặt xe trở nên kỵ nước (không thấm nước, trượt nước, bùn bẩn), nhưng cũng có khả năng chống tia cực tím, trầy xước, hóa chất, nhiệt độ cực cao và thậm chí chống graffiti. Lớp gốm 9H hay 10H này hoàn toàn trong suốt.', 'ceramicoto.jpg', 1, '2023-05-01 08:59:13', '2023-05-01 08:59:13'),
(2, 'Phim cách nhiệt 3M Crystalline có đáng tiền?', '3M Crystalline kết hợp tổng cộng 200 lớp trong phim của nó nhưng khi cầm nắm thì nó vẫn mỏng hơn một tờ giấy.', '1️⃣ Đặc điểm vượt trội của 3M Cyrstalline khiến loại phim cách nhiệt này tốt nhất hiện tại\r\n3M Crystalline kết hợp tổng cộng 200 lớp trong phim của nó nhưng khi cầm nắm thì nó vẫn mỏng hơn một tờ giấy. Tuy nhiên, lớp film mỏng không làm giảm sức mạnh của nó, vì nó vẫn ngăn nhiệt và ánh sáng chiếu vào xe. \r\n99,9% Tia UV bị chặn bởi dòng phim cách nhiệt 3M Crystalline , trong khi film có màu tối nhất là CR20 có thể giảm nhiệt lên đến 97%. Film 3M Crystalline sáng nhất CR70 có thể làm giảm nhiệt trong xe của bạn lên đến 50%. \r\nNó có chỉ số SPF 1000+, vì vậy bạn không bao giờ phải lo lắng về nội thất của xe bị hư hại khi tiếp xúc với ánh nắng mặt trời. Đồng thời, nó sẽ làm giảm ánh sáng chói vào xe của bạn. \r\nKhông giống như các loại phim cách nhiệt Trung Quốc nhuộm đủ màu rẻ hơn và ít được biết đến hơn, không có nhiễu kim loại hoặc tín hiệu vô tuyến với phim 3M Crystalline. \r\nPhim mỏng và độ bóng cao sẽ nâng cao khả năng hiển thị của bạn vào ban đêm, vì vậy bạn không cần lo lắng về việc không nhìn thấy vào ban đêm. \r\nCho dù bạn có để xe dưới sa mạc hay bảo tuyết, phim không bị đổi màu. Nó sẽ trông giống như ngày đầu tiên bạn mua dán nó trên xe. \r\nĐó là chất lượng đi kèm với phim 3M Crystalline, bạn sẽ được đảm bảo chất lượng trọn đời. Điều đó có nghĩa là bạn không bao giờ phải quay lại để sửa chữa.  ', '3mcrystalline.jpg', 1, '2023-05-01 08:59:13', '2023-05-01 08:59:13');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `madm` int(11) NOT NULL,
  `tendm` varchar(50) NOT NULL,
  `hinhdd` varchar(100) NOT NULL,
  `motact` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`madm`, `tendm`, `hinhdd`, `motact`, `created_at`, `updated_at`) VALUES
(1, 'Tẩu Sạc Xe Hơi', '1683202483618-tausacxehoi.png', 'Tẩu sạc xe hơi là một thiết bị cho phép bạn sạc các thiết bị điện tử của mình trong khi đang lái xe. Nó được kết nối trực tiếp vào nguồn điện DC (điện áp trực tiếp từ hệ thống điện của xe) và cung cấp nguồn điện để sạc các thiết bị điện tử như điện thoại, máy tính bảng, máy ảnh, đồng hồ thông minh và nhiều thiết bị khác.', '2023-05-01 09:04:32', '2023-05-04 12:20:55'),
(2, 'Bơm Lốp Xe Ô Tô', '1683202598125-bomlopxeoto.png', 'Bơm lốp xe ô tô là một thiết bị dùng để bơm hoặc thổi khí vào lốp xe ô tô để giữ áp suất phù hợp. Khi áp suất trong lốp không đủ, bơm lốp sẽ được sử dụng để bơm thêm khí vào lốp để đạt áp suất khuyến nghị từ nhà sản xuất xe hoặc từ hướng dẫn sử dụng của lốp.', '2023-05-01 09:04:32', '2023-05-04 16:18:19'),
(3, 'Kích Bình Xe', '1683202623017-kichbinhxe.png', 'Kích bình xe (hay còn gọi là bình kích xăng) là một thiết bị cần thiết để kích nổ động cơ của xe máy hoặc xe ô tô khi bình xăng không còn đủ nhiên liệu. Khi bình xăng của xe bị hết, hoặc đường ống dẫn xăng bị tắc hoặc bị hỏng, động cơ không thể hoạt động mà cần phải thêm nhiên liệu vào bình xăng.', '2023-05-01 09:04:32', '2023-05-04 12:17:03'),
(4, 'Giá Treo Điện Thoại', '1683202656939-giatreodienthoai.png', 'Giá treo điện thoại là một thiết bị hỗ trợ để giữ cho điện thoại của bạn được treo lên một vị trí nhất định với các tùy chọn độ nghiêng và xoay. Giá treo điện thoại thường có nhiều loại, từ loại đơn giản giữ cho điện thoại ở vị trí hiển thị cố định đến những loại có độ nghiêng xoay.', '2023-05-01 09:04:32', '2023-05-04 12:17:36'),
(5, 'Lọc Không Khí - Khử Mùi', '1683202674283-lockhongkhi.png', 'Lọc không khí - khử mùi (hay còn gọi là máy lọc không khí) là một thiết bị giúp lọc và khử mùi không khí trong xe.', '2023-05-01 09:04:32', '2023-05-04 12:17:54'),
(6, 'Máy Hút Bụi Trên Ô Tô', '1683202685544-mayhutbuitrenoto.png', 'Máy hút bụi trên ô tô là một thiết bị dùng để hút bụi, rác và các mảnh vụn khác trên bề mặt nội thất và ngoại thất của ô tô. Nó được thiết kế để tiện lợi sử dụng trong xe hơi, với kích thước nhỏ gọn, dễ dàng di chuyển và có đầu hút.', '2023-05-01 09:04:32', '2023-05-04 12:18:05'),
(7, 'Bảng Số Điện Thoại', '1683202900252-bansodt.png', 'Bảng số điện thoại trên ô tô thường được gọi là bảng số điện thoại khẩn cấp hoặc bảng số điện thoại khẩn trương. Đây là một bảng ghi lại các số điện thoại khẩn cấp quan trọng như số điện thoại cảnh sát, cứu hỏa, cứu thương, trung tâm điều hành, trạm cảnh sát giao thông.', '2023-05-04 12:21:40', '2023-05-04 12:21:40');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gio`
--

CREATE TABLE `gio` (
  `magio` int(11) NOT NULL,
  `tengio` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `tennguoinhan` varchar(50) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `ghichu` varchar(500) NOT NULL,
  `tongtiensp` float NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `makh` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadonrx`
--

CREATE TABLE `hoadonrx` (
  `mahdrx` varchar(255) NOT NULL,
  `ngayrua` date NOT NULL,
  `magio` int(11) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(100) NOT NULL,
  `ghichu` varchar(500) NOT NULL,
  `tongtienrx` float NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `malx` int(11) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `makh` int(11) NOT NULL,
  `tennguoirua` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoadonrx`
--

INSERT INTO `hoadonrx` (`mahdrx`, `ngayrua`, `magio`, `sodt`, `diachi`, `ghichu`, `tongtienrx`, `thanhtoan`, `malx`, `matt`, `manv`, `makh`, `tennguoirua`, `created_at`, `updated_at`) VALUES
('94a69178302f5075446146c54ddfc8d4', '2023-05-12', 1, '0591546739', 'Thị trấn Tam Sơn, Huyện Quản Bạ, Hà Giang', 'Rửa nhanh nhé', 80000, 2, 5, 4, 1, 1, 'Chử Diễm Quỳnh', '2023-05-03 14:04:33', '2023-05-04 02:53:49');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` int(11) NOT NULL,
  `taikhoan` varchar(30) NOT NULL,
  `matkhau` varchar(255) NOT NULL,
  `hokh` varchar(30) NOT NULL,
  `tenkh` varchar(30) NOT NULL,
  `ngaysinh` date NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `hinhdd` varchar(250) NOT NULL,
  `kichhoat` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh`, `taikhoan`, `matkhau`, `hokh`, `tenkh`, `ngaysinh`, `sodt`, `diachi`, `email`, `gioitinh`, `hinhdd`, `kichhoat`, `created_at`, `updated_at`) VALUES
(1, 'khuevotan', '$2b$10$U6yZ1caTanSsrqclCNXwr.AZBJmecFQSQClUxo50hDoEZTcfFKwkm', 'Võ Tấn', 'Khuê', '2001-09-06', '0987664220', '499, Mỹ Ca, Cam Nghĩa, Cam Ranh, Khánh Hòa', 'khuevotan@gmail.com', 0, '1682611745462-khue.png', 2, '2023-05-01 09:03:04', '2023-05-03 13:46:59'),
(13, 'oanhdung', '$2b$10$HNkeMM5kUnLCz3WNKnjkpe4bqxmWyivvDf/3VXlUDAaFV/1CTEy2.', 'Nguyễn Thị', 'Oanh', '2023-04-15', '0987664220', 'Vĩnh Phúc', 'khuevotan1@gmail.com', 0, '1682612022526-khue.png', 2, '2023-05-01 09:03:04', '2023-05-04 17:03:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaixe`
--

CREATE TABLE `loaixe` (
  `malx` int(11) NOT NULL,
  `tenlx` varchar(255) NOT NULL,
  `gia` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaixe`
--

INSERT INTO `loaixe` (`malx`, `tenlx`, `gia`, `created_at`, `updated_at`) VALUES
(1, 'Xe Máy', 20000, '2023-05-01 09:02:51', '2023-05-04 16:30:45'),
(2, 'Ô Tô Nhỏ', 40000, '2023-05-01 09:02:51', '2023-05-01 09:02:51'),
(3, 'Ô Tô Trung', 60000, '2023-05-01 09:02:51', '2023-05-01 09:02:51'),
(4, 'Ô Tô Lớn', 70000, '2023-05-01 09:02:51', '2023-05-01 09:02:51'),
(5, 'Bán Tải', 80000, '2023-05-01 09:02:51', '2023-05-01 09:02:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhacungcap`
--

CREATE TABLE `nhacungcap` (
  `mancc` int(11) NOT NULL,
  `tenncc` varchar(255) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhacungcap`
--

INSERT INTO `nhacungcap` (`mancc`, `tenncc`, `sodt`, `diachi`, `created_at`, `updated_at`) VALUES
(1, 'Tài Cam Ranh', '0987664220', '77 Chế Lan Viên, Cam Lộc, Cam Ranh, Khánh Hòa', '2023-05-01 10:04:52', '2023-05-04 13:25:21'),
(2, 'Baseus Official Flagship Store', '0949625400', 'Baseus Quận 1 : 109 Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh', '2023-05-04 04:26:57', '2023-05-04 04:31:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `manv` int(11) NOT NULL,
  `taikhoan` varchar(30) NOT NULL,
  `matkhau` varchar(250) NOT NULL,
  `honv` varchar(30) NOT NULL,
  `tennv` varchar(30) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `luong` float NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `hinhdd` varchar(250) NOT NULL,
  `manhom` int(11) NOT NULL,
  `kichhoat` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`manv`, `taikhoan`, `matkhau`, `honv`, `tennv`, `sodt`, `diachi`, `email`, `luong`, `ngaysinh`, `gioitinh`, `hinhdd`, `manhom`, `kichhoat`, `created_at`, `updated_at`) VALUES
(1, 'khuevotan', '$2b$10$qZiL7YRyVyZEpaEsOrYE1OFDnVSkQOF8.osDIGvAHAs9sVdqG1gVu', 'Võ', 'Tấn Khuê', '0987664220', '499 Mỹ Ca, Cam Nghĩa, Cam Ranh, Khánh Hòa', 'khuevotan@gmail.com', 10000000, '2001-09-06', 2, '1683118246255-khue.jpg', 1, 2, '2023-05-01 09:02:35', '2023-05-03 12:55:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhom`
--

CREATE TABLE `nhom` (
  `manhom` int(11) NOT NULL,
  `tennhom` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `ghichu` varchar(500) NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `tongtiennhap` float NOT NULL,
  `mancc` int(11) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `hinhdd` varchar(100) NOT NULL,
  `soluong` int(11) NOT NULL,
  `motact` varchar(10000) NOT NULL,
  `giaban` float NOT NULL,
  `madm` int(11) NOT NULL,
  `mancc` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `hinhdd`, `soluong`, `motact`, `giaban`, `madm`, `mancc`, `manv`, `created_at`, `updated_at`) VALUES
(1, 'Tẩu Ô Tô Sạc Không Dây Magsafe Baseus CW01', '1683173601082-magsafebaseus.png', 10, '                                                                                Trang bị nam châm neodymium N52 lõi từ mạnh mẽ với lực hút mạnh và chắc chắn giúp căn chỉnh chính xác vị trí tối ưu nhất cho bộ sạc để sạc siêu nhanh cho điện thoạị. Lực hút nam châm mạnh và bề mặt bám dính an toàn và chống trượt, chống rơi.\r\n                                    \r\n                                    ', 150000, 1, 2, 1, '2023-05-01 09:02:02', '2023-05-04 15:13:53'),
(5, 'Máy Hút Bụi Nhỏ Gọn Cầm Tay Baseus', '1683201312023-mayhutbui.png', 14, '                                                                                                                <h4>Giới thiệu sản phẩm</h4> \r\n                                .\r\n                                <h4>Thông số kỹ thuật</h4>\r\n                                <ul>\r\n                                    <li>Một.</li>\r\n                                    <li>Hai.</li>\r\n                                  \r\n                        \r\n                                </ul>\r\n                                <h4>Hình ảnh chi tiết</h4> \r\n                                 .\r\n                            \r\n                                    \r\n                                    ', 150000, 3, 2, 1, '2023-05-04 06:44:12', '2023-05-04 16:12:03'),
(6, 'Tẩu Sạc Nhanh Dùng Trên Ô Tô Baseus Digital Display', '1683200732750-tausacnhanh.png', 5, '                                <h4>Giới thiệu sản phẩm</h4><h4><span style=\"box-sizing: border-box; font-weight: bolder; color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\"><a href=\"https://baseus.vn/collections/sac-dung-trong-xe-hoi\" style=\"box-sizing: border-box; color: var(--text-color); box-shadow: none; outline: none !important;\">Tẩu Sạc Nhanh</a>&nbsp;Công Suất Cao Baseus Digital Display 140W&nbsp;</span><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\">sử dụng chip xử lý nguồn BDIP thế hệ mới nhất, hỗ trợ nhiều chuẩn&nbsp;</span><a href=\"https://baseus.vn/collections/coc-sac\" style=\"box-sizing: border-box; color: var(--text-color); background-color: rgb(255, 255, 255); box-shadow: none; font-family: Lato, sans-serif; font-size: 14px; outline: none !important;\">sạc nhanh</a><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\">&nbsp;khác nhau như Quick charge QC3.0 / 4.0 / 5.0, Power Delivery, PPS,SPC,... tương thích với hầu hết các thiết bị số hiện nay từ Smartphone, Tablet, iPad cho đến cả Macbook. Tăng tốc độ sạc lên đến 40% tiết kiểm đáng kể thời gian sạc của bạn.</span><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\"><br style=\"box-sizing: border-box;\">Bộ sạc đi kèm với dây cáp sạc nhanh chuẩn Type-C to Type-C 240W (48V/5A) 1m màu đen từ dòng sản phẩm Superior Series.</p><span style=\"color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\">Sạc nhanh đa năng Baseus PD3.1 cho ô tô với màn hình hiển thị số kiểm soát thực tế&nbsp;dòng vào, dòng ra, trạng thái hoạt động để có trải nghiệm lái xe an toàn hơn.</span><p style=\"box-sizing: border-box; color: rgb(51, 51, 51); font-family: Lato, sans-serif; font-size: 14px;\"><br style=\"box-sizing: border-box;\">Màu sắc của tẩu sạc&nbsp;là đen thạch anh, sang trọng, hiện đại&nbsp;và phù hợp với nhiều loại nội thất&nbsp;xe hơi.</p></h4><h4>Tính năng nổi bật</h4>\r\n                                <ul>\r\n                                    <li><li>1.Chứng nhận 1.PD 3</li><li>2.Công suất cao 140W</li><li>3. Màn hình kỹ thuật số để hiển thị nguồn / điện áp</li><li>4.Với cáp sạc nhanh 240W</li><li>5. Công nghệ sạc BPSⅡ</li><li>6.Đối với xe ô tô 12V-24V\"</li></li>\r\n                                  \r\n                        \r\n                                </ul>\r\n                                <h4>Hình ảnh chi tiết</h4><p><img src=\"https://file.hstatic.net/1000152881/file/0_01_c1e25cfc0f4046c388b20f0a4265cc20.jpg\" style=\"width: 50%;\"><br></p>', 849000, 1, 2, 1, '2023-05-04 11:45:32', '2023-05-04 13:37:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thamso`
--

CREATE TABLE `thamso` (
  `mats` int(11) NOT NULL,
  `tents` varchar(255) NOT NULL,
  `giatri` varchar(255) NOT NULL,
  `chuthich` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thamso`
--

INSERT INTO `thamso` (`mats`, `tents`, `giatri`, `chuthich`, `created_at`, `updated_at`) VALUES
(1, 'MAX_SLRXCH', '5', 'Số lượng xe mà cửa hàng có thể phục vụ trong một khung giờ (30p)', '2023-05-01 09:01:42', '2023-05-01 09:01:42'),
(2, 'MAX_KH_ĐL', '4', 'Số lượng tối đa đơn đặt lịch của một khách hàng trong một ngày ', '2023-05-01 09:01:42', '2023-05-01 09:01:42'),
(3, 'MAX_KH_ĐH', '5', 'Số lượng tối đa đơn đặt hàng của một khách hàng trong một ngày ', '2023-05-01 09:01:42', '2023-05-01 09:01:42'),
(4, 'SL_SPHET', '3', 'Số lượng tối thiểu để sản phẩm', '2023-05-04 13:34:54', '2023-05-04 17:11:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trangthai`
--

CREATE TABLE `trangthai` (
  `matt` int(11) NOT NULL,
  `tentt` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD KEY `fk_hoadon_kh` (`makh`);

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
  MODIFY `mabv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `madm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `gio`
--
ALTER TABLE `gio`
  MODIFY `magio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `makh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `loaixe`
--
ALTER TABLE `loaixe`
  MODIFY `malx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `nhacungcap`
--
ALTER TABLE `nhacungcap`
  MODIFY `mancc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `manv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `nhom`
--
ALTER TABLE `nhom`
  MODIFY `manhom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `thamso`
--
ALTER TABLE `thamso`
  MODIFY `mats` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
