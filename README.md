# Orchid Project

Orchid Project là một dự án cá nhân được xây dựng nhằm thực hành các kỹ năng cơ bản về web, bao gồm hiển thị và quản lý danh sách loài lan (Orchid), xác thực đăng nhập bằng tài khoản Google, và thao tác dữ liệu với MockAPI.

## Mục tiêu

Dự án hướng đến việc rèn luyện:
- Kỹ năng làm việc với API (gọi dữ liệu, thêm, sửa, xóa)
- Sử dụng dịch vụ xác thực bên ngoài (Google Login)
- Quản lý logic phân quyền người dùng cơ bản
- Hiển thị dữ liệu lên giao diện web đơn giản

## Chức năng chính

- Đăng nhập bằng tài khoản Google sử dụng Google Identity Services
- Hiển thị danh sách các loài lan lấy từ MockAPI
- Chỉ người dùng đã đăng nhập mới có thể thực hiện:
  - Thêm Orchid mới
  - Sửa Orchid
  - Xóa Orchid
- Lọc Orchid theo loại (Natural hoặc Hybrid)
- Giao diện web đơn giản sử dụng HTML, CSS và JavaScript
- Kết nối dữ liệu bằng Fetch API

## Công nghệ sử dụng

- Node.js
- Express.js
- JavaScript (thuần)
- HTML, CSS
- Google Identity Services (OAuth2)
- MockAPI
- Fetch API


## Cách chạy dự án 

1. Clone repo về máy
2. Cài đặt các dependency (nếu có dùng Node)
3. Mở file HTML trong trình duyệt để xem giao diện
4. Đăng nhập bằng tài khoản Google để sử dụng các chức năng thêm, sửa, xóa

## Ghi chú

- Dự án sử dụng MockAPI làm cơ sở dữ liệu ảo (dạng JSON)
- Dữ liệu không được lưu trữ thực tế, chỉ phục vụ mục đích thực hành
- Đây là một dự án cá nhân, chưa dùng cho sản phẩm thực tế
- Bắt buộc phải sử dụng cổng 5173 để chạy dự án, có thể thay đổi cổng trong file vite.config.js

## Tác giả

Mầu Quốc Tuấn  
Sinh viên Đại học FPT  
Chuyên ngành hẹp Node.js  
