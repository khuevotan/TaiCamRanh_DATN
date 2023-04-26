-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 24, 2023 lúc 06:36 AM
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
  `mota` varchar(500) NOT NULL,
  `noidung` varchar(10000) NOT NULL,
  `hinhdd` varchar(100) NOT NULL,
  `ngaydang` date NOT NULL,
  `manv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `baiviet`
--

INSERT INTO `baiviet` (`mabv`, `tenbv`, `mota`, `noidung`, `hinhdd`, `ngaydang`, `manv`) VALUES
(1, 'Sự Thật Về Lớp Phủ Ceramic Ô Tô', 'Bạn muốn chiếc xe của bạn trông tuyệt vời như ngày bạn mới mua xe với lớp sơn xe loáng bóng. Nhưng bất chấp những nỗ lực của bạn trong việc bảo trì và bão dưỡng lớp sơn.', 'Sự ra đời của phủ ceramic ô tô\r\nBạn muốn chiếc xe của bạn trông tuyệt vời như ngày bạn mới mua xe với lớp sơn xe loáng bóng. Nhưng bất chấp những nỗ lực của bạn trong việc bảo trì và bão dưỡng lớp sơn, các vết trầy xước bắt đầu lan rộng ra bên ngoài xe của bạn và lớp sơn bắt đầu xỉn màu và phai màu khỏi ánh nắng mặt trời, khiến nhiều người tiêu dùng tìm cách chống tia UV.\r\n\r\nBất cứ điều gì và mọi thứ liên tục tấn công bề mặt xe của bạn. Bùn, bụi, mưa bẩn, đốm nước, bụi phanh khó coi, bụi bẩn bắt đầu bám vào xe của bạn gần như ngay lập tức sau khi làm sạch nó. Tuyết, băng, đường muối, kẹo cao su, phân chim cũng không giúp được gì.\r\n\r\nChưa kể những vết trầy xước trong cuộc sống hàng ngày từ trẻ em,  xe máy va chạm trên đường phố Việt Nam, lùi xe không cẩn thận…\r\n\r\nWax bóng có thể tăng thêm một mức độ sáng và bóng tốt, và một lượng nhỏ bảo vệ, nhưng chỉ kéo dài tối đa 6 tháng là tốt nhất. Wax bóng chắc chắn không hiệu quả như phủ gốm được.\r\n\r\nĐó chính là lý do vì sao phủ nano xe hơi xe máy bắt đầu ra đời. Sau này, phủ ceramic xe hơi hay phủ gốm được thịnh hành hơn bởi hoá chất tốt hơn so với các loại nano mà chúng ta sẽ cùng tìm hiểu sau đây.\r\n\r\nPhủ ceramic ô tô là gì?\r\nĐể hiểu được phủ ceramic là gì, chúng ta cần hiểu ceramic được làm từ đâu, thành phần hóa học là gì:\r\n\r\nCeramic là gì ?\r\nCeramics hay còn gọi là gốm sứ, bao gồm silicon dioxide (silica, Si02), có nguồn gốc từ các vật liệu tự nhiên như thạch anh và cát. Một số loại và nhãn hiệu ceramic cũng sử dụng titanium dioxide (titania, Ti02) để tăng độ cứng bổ sung cho dung dịch phủ ceramic. Khi được phủ lên sơn ô tô, cả hai tạo ra một liên kết hóa học với đặc tính kỵ nước, hay còn gọi là không thấm nước.\r\nLớp phủ ceramic ô tô 9h 10h là như thế nào?\r\nLớp phủ ceramic 9H là gì? 10H như thế nào ? Cách dễ nhất để hiểu là lớp phủ sứ như một lớp da thứ hai, hoặc một lớp giáp sẵn sàng hi sinh để bảo vệ lớp sơn xe của bạn.\r\n\r\nCeramics được phát triển từ công nghệ nano, về cơ bản là các hạt nhỏ tạo thành một lớp rất mỏng, hoàn toàn trong suốt trước mắt. Bởi vì các hạt này rất nhỏ, khi được áp dụng lên bề mặt, chúng bịt kín tất cả các lỗ nhỏ nano mà bạn không thấy được làm cho bề mặt xe trở nên kỵ nước (không thấm nước, trượt nước, bùn bẩn), nhưng cũng có khả năng chống tia cực tím, trầy xước, hóa chất, nhiệt độ cực cao và thậm chí chống graffiti. Lớp gốm 9H hay 10H này hoàn toàn trong suốt.', 'ceramicoto.jpg', '2023-03-21', 1),
(2, 'Phim cách nhiệt 3M Crystalline có đáng tiền?', '3M Crystalline kết hợp tổng cộng 200 lớp trong phim của nó nhưng khi cầm nắm thì nó vẫn mỏng hơn một tờ giấy.', '1️⃣ Đặc điểm vượt trội của 3M Cyrstalline khiến loại phim cách nhiệt này tốt nhất hiện tại\r\n3M Crystalline kết hợp tổng cộng 200 lớp trong phim của nó nhưng khi cầm nắm thì nó vẫn mỏng hơn một tờ giấy. Tuy nhiên, lớp film mỏng không làm giảm sức mạnh của nó, vì nó vẫn ngăn nhiệt và ánh sáng chiếu vào xe. \r\n99,9% Tia UV bị chặn bởi dòng phim cách nhiệt 3M Crystalline , trong khi film có màu tối nhất là CR20 có thể giảm nhiệt lên đến 97%. Film 3M Crystalline sáng nhất CR70 có thể làm giảm nhiệt trong xe của bạn lên đến 50%. \r\nNó có chỉ số SPF 1000+, vì vậy bạn không bao giờ phải lo lắng về nội thất của xe bị hư hại khi tiếp xúc với ánh nắng mặt trời. Đồng thời, nó sẽ làm giảm ánh sáng chói vào xe của bạn. \r\nKhông giống như các loại phim cách nhiệt Trung Quốc nhuộm đủ màu rẻ hơn và ít được biết đến hơn, không có nhiễu kim loại hoặc tín hiệu vô tuyến với phim 3M Crystalline. \r\nPhim mỏng và độ bóng cao sẽ nâng cao khả năng hiển thị của bạn vào ban đêm, vì vậy bạn không cần lo lắng về việc không nhìn thấy vào ban đêm. \r\nCho dù bạn có để xe dưới sa mạc hay bảo tuyết, phim không bị đổi màu. Nó sẽ trông giống như ngày đầu tiên bạn mua dán nó trên xe. \r\nĐó là chất lượng đi kèm với phim 3M Crystalline, bạn sẽ được đảm bảo chất lượng trọn đời. Điều đó có nghĩa là bạn không bao giờ phải quay lại để sửa chữa.  ', '3mcrystalline.jpg', '2023-03-21', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cthoadon`
--

CREATE TABLE `cthoadon` (
  `mahd` varchar(255) NOT NULL,
  `masp` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `giatien` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `madm` int(11) NOT NULL,
  `tendm` varchar(50) NOT NULL,
  `hinhdd` varchar(100) NOT NULL,
  `motact` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`madm`, `tendm`, `hinhdd`, `motact`) VALUES
(1, 'Tẩu Sạc Xe Hơi', 'tausacxehoi.png', 'Tẩu sạc xe hơi (hay còn gọi là bộ sạc ô tô) là thiết bị giúp người dùng sạc lại pin cho các thiết bị di động như điện thoại, máy tính bảng, máy ảnh, máy nghe nhạc, đèn pin, và các thiết bị điện tử khác trong xe hơi.'),
(2, 'Bơm Lốp Xe Ô Tô', 'bomlopxeoto.png', 'Bơm lốp xe ô tô là một thiết bị dùng để bơm hoặc thổi khí vào lốp xe ô tô để giữ áp suất phù hợp. Khi áp suất trong lốp không đủ, bơm lốp sẽ được sử dụng để bơm thêm khí vào lốp để đạt áp suất khuyến nghị từ nhà sản xuất xe hoặc từ hướng dẫn sử dụng của lốp.'),
(3, 'Kích Bình Xe', 'kichbinhxe.png', 'Kích bình xe (hay còn gọi là bình kích xăng) là một thiết bị cần thiết để kích nổ động cơ của xe máy hoặc xe ô tô khi bình xăng không còn đủ nhiên liệu. Khi bình xăng của xe bị hết, hoặc đường ống dẫn xăng bị tắc hoặc bị hỏng, động cơ không thể hoạt động mà cần phải thêm nhiên liệu vào bình xăng.'),
(4, 'Giá Treo Điện Thoại', 'giatreodienthoai.png', 'Giá treo điện thoại là một thiết bị hỗ trợ để giữ cho điện thoại của bạn được treo lên một vị trí nhất định với các tùy chọn độ nghiêng và xoay. Giá treo điện thoại thường có nhiều loại, từ loại đơn giản giữ cho điện thoại ở vị trí hiển thị cố định đến những loại có độ nghiêng xoay.'),
(5, 'Lọc Không Khí - Khử Mùi', 'lockhongkhi.png', 'Lọc không khí - khử mùi (hay còn gọi là máy lọc không khí) là một thiết bị giúp lọc và khử mùi không khí trong xe.'),
(6, 'Máy Hút Bụi Trên Ô Tô', 'mayhutbuitrenoto.png', 'Máy hút bụi trên ô tô là một thiết bị dùng để hút bụi, rác và các mảnh vụn khác trên bề mặt nội thất và ngoại thất của ô tô. Nó được thiết kế để tiện lợi sử dụng trong xe hơi, với kích thước nhỏ gọn, dễ dàng di chuyển và có đầu hút.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gio`
--

CREATE TABLE `gio` (
  `magio` int(11) NOT NULL,
  `tengio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `gio`
--

INSERT INTO `gio` (`magio`, `tengio`) VALUES
(1, '7:00'),
(2, '7:30'),
(3, '8:00'),
(4, '8:30'),
(5, '9:00'),
(6, '9:30'),
(7, '10:00'),
(8, '10:30'),
(9, '11:00'),
(10, '11:30'),
(11, '12:00'),
(12, '12:30'),
(13, '13:00'),
(14, '13:30'),
(15, '14:00'),
(16, '14:30'),
(17, '15:00'),
(18, '15:30'),
(19, '16:30'),
(20, '16:30'),
(21, '17:00'),
(22, '17:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` varchar(255) NOT NULL,
  `ngaydat` date NOT NULL,
  `ngaygiao` date NOT NULL,
  `tennguoinhan` varchar(50) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `ghichu` varchar(500) NOT NULL,
  `tongtiensp` float NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `makh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadonrx`
--

CREATE TABLE `hoadonrx` (
  `mahdrx` varchar(255) NOT NULL,
  `ngaydat` date NOT NULL,
  `ngayrua` date NOT NULL,
  `magio` int(11) NOT NULL,
  `sodt` varchar(15) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `ghichu` varchar(50) NOT NULL,
  `tongtienrx` float NOT NULL,
  `thanhtoan` tinyint(1) NOT NULL,
  `malx` int(11) NOT NULL,
  `matt` int(11) NOT NULL,
  `manv` int(11) NOT NULL,
  `makh` int(11) NOT NULL,
  `tennguoidat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoadonrx`
--

INSERT INTO `hoadonrx` (`mahdrx`, `ngaydat`, `ngayrua`, `magio`, `sodt`, `diachi`, `ghichu`, `tongtienrx`, `thanhtoan`, `malx`, `matt`, `manv`, `makh`, `tennguoidat`) VALUES
('0c01c596af9f6c040fdfbecf65a9ee1e', '2023-04-24', '2023-04-24', 10, '0987664220', '499, Mỹ Ca, Cam Nghĩa, Cam Ranh, Khánh Hòa', 'Rửa Nhanh', 20000, 1, 1, 1, 1, 0, 'Nguyễn Văn An'),
('e4457e462b2ad18387e739ae84ce6e31', '2023-04-24', '2023-04-24', 15, '0987664220', 'Nha Trang', '', 40000, 1, 2, 1, 1, 0, 'Lê Diệu Thảo');

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
  `ngaytaotk` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh`, `taikhoan`, `matkhau`, `hokh`, `tenkh`, `ngaysinh`, `sodt`, `diachi`, `email`, `gioitinh`, `hinhdd`, `kichhoat`, `ngaytaotk`) VALUES
(1, 'khuevotan', '$2b$10$0FmJFubC23nsQ', '', '', '0000-00-00', '', '', 'khuevotan@gmail.com', 0, '', 0, '2023-03-21 05:25:06'),
(11, 'dieuthao', '$2b$10$HxuIQpwukkq3m9iyC2du1eWrbcFIH0W6vOsRj2yRsUEe5Y7GLws5G', '', '', '0000-00-00', '', '', 'khuevotan3@gmail.com', 0, '', 0, '2023-03-23 12:54:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaixe`
--

CREATE TABLE `loaixe` (
  `malx` int(11) NOT NULL,
  `tenlx` varchar(255) NOT NULL,
  `gia` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaixe`
--

INSERT INTO `loaixe` (`malx`, `tenlx`, `gia`) VALUES
(1, 'Xe Máy', 20000),
(2, 'Ô Tô Nhỏ', 40000),
(3, 'Ô Tô Vừa', 60000),
(4, 'Ô Tô To', 80000);

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
  `ngaytaotk` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`manv`, `taikhoan`, `matkhau`, `honv`, `tennv`, `sodt`, `diachi`, `email`, `luong`, `ngaysinh`, `gioitinh`, `hinhdd`, `manhom`, `kichhoat`, `ngaytaotk`) VALUES
(1, 'khuevotan', '$2b$10$u5Js78rZsOAM6lYyYSBt4OJRxAqXMPO5sQd1DvrxPGQACCuF0Fafa', 'Võ', 'Tấn Khuê', '0987664220', '499, Mỹ Ca, Cam Nghĩa, Cam Ranh, Khánh Hòa', 'khuevotan@gmail.com', 10000000, '2023-04-04', 1, 'nhanvien.png', 1, 1, '2023-04-24 04:22:34');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhom`
--

CREATE TABLE `nhom` (
  `manhom` int(11) NOT NULL,
  `tennhom` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhom`
--

INSERT INTO `nhom` (`manhom`, `tennhom`) VALUES
(1, 'Quản Lý'),
(2, 'Nhân Viên Bán Hàng'),
(3, 'Nhân Viên Rửa Xe');

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
  `ngaydang` date NOT NULL,
  `madm` int(11) NOT NULL,
  `manv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `hinhdd`, `soluong`, `motact`, `giaban`, `ngaydang`, `madm`, `manv`) VALUES
(1, 'Tẩu Ô Tô Sạc Không Dây Magsafe Baseus CW01', 'magsafebaseus.png', 10, 'Trang bị nam châm neodymium N52 lõi từ mạnh mẽ với lực hút mạnh và chắc chắn giúp căn chỉnh chính xác vị trí tối ưu nhất cho bộ sạc để sạc siêu nhanh cho điện thoạị. Lực hút nam châm mạnh và bề mặt bám dính an toàn và chống trượt, chống rơi.', 150, '2023-03-20', 1, 0),
(2, 'Tẩu Sạc Nhanh Đa Năng Trên Ô Tô 65W Baseus Golden Contactor Pro', 'baseusgoldencontactor.png', 12, 'Baseus Golden Contactor Pro Triple Fast Charger là tẩu sạc nhanh chuyên dụng trên xe ô tô, đặc biệt được trang bị cả 3 cổng sạc phổ thông hiện nay là USB và Type C với tổng công suất lên đến 65W giúp cho bạn có thể sạc pin cho cùng lúc nhiều thiết bị.', 150, '2023-03-20', 1, 0),
(3, 'Tẩu Sạc Nhanh Kèm Cáp Dây Rút 2 Đầu Type C + Lightning Baseus Enjoyment Retractable', 'typelightningbaseus.png', 13, 'Một chiếc tẩu sạc nhanh đa năng dùng cho xe hơi đến từ nhà Baseus, Baseus Enjoyment Retractable 2 in 1 Car Charger với công suất lên đến 30w được trang bị kèm cáp dây rút 2 đầu Type C và Lightning. Sản phẩm có thiết kế thông minh, hiện đại là một món phụ kiện không thể thiếu cho chiếc ô tô của bạn.', 1321, '2023-03-20', 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thamso`
--

CREATE TABLE `thamso` (
  `mats` int(11) NOT NULL,
  `tents` varchar(255) NOT NULL,
  `giatri` varchar(255) NOT NULL,
  `chuthich` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thamso`
--

INSERT INTO `thamso` (`mats`, `tents`, `giatri`, `chuthich`) VALUES
(1, 'MAX_SLRXCH', '5', 'Số lượng xe mà cửa hàng có thể phục vụ trong một khung giờ (30p)'),
(2, 'MAX_KH_ĐL', '4', 'Số lượng tối đa đơn đặt lịch của một khách hàng trong một ngày '),
(3, 'MAX_KH_ĐH', '5', 'Số lượng tối đa đơn đặt hàng của một khách hàng trong một ngày ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trangthai`
--

CREATE TABLE `trangthai` (
  `matt` int(11) NOT NULL,
  `tentt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `trangthai`
--

INSERT INTO `trangthai` (`matt`, `tentt`) VALUES
(1, 'Chờ Xác Nhận'),
(2, 'Đã Xác Nhận'),
(3, 'Hủy'),
(4, 'Thành Công'),
(5, 'Đã Giao Cho Đơn Vị Vận Chuyển');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`mabv`);

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
  ADD PRIMARY KEY (`mahd`);

--
-- Chỉ mục cho bảng `hoadonrx`
--
ALTER TABLE `hoadonrx`
  ADD PRIMARY KEY (`mahdrx`);

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
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`manv`);

--
-- Chỉ mục cho bảng `nhom`
--
ALTER TABLE `nhom`
  ADD PRIMARY KEY (`manhom`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`);

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
  MODIFY `mabv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `madm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `gio`
--
ALTER TABLE `gio`
  MODIFY `magio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `makh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `loaixe`
--
ALTER TABLE `loaixe`
  MODIFY `malx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `masp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `thamso`
--
ALTER TABLE `thamso`
  MODIFY `mats` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `trangthai`
--
ALTER TABLE `trangthai`
  MODIFY `matt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
