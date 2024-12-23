# IE104 - Nhóm 19 - AnimeKL

## Giới Thiệu Tổng Quan

**AnimeKL** là đồ án cuối kỳ môn IE104 - Internet và công nghệ Web của nhóm sinh viên của trường Đại học Công nghệ Thông tin - ĐHQG. Đồ án này được thực hiện bởi nhóm 19, lớp IE104.P11 dưới sự hướng dẫn của Th.S Võ Tấn Khoa.

## Thành Viên Nhóm

Các thành viên trong nhóm bao gồm:

| STT | Tên                    | Mã Số Sinh Viên | Vai Trò         |
|-----|------------------------|------------------|----------------|
| 1   | Dương Uy Quan          | 21521323         | Trưởng nhóm    |
| 2   | Nguyễn Thành Trung     | 21521595         | Thành Viên     |
| 3   | Nguyễn Mạnh Tuấn       | 21522755         | Thành Viên     |
| 4   | Dương Văn Quy          | 21522528         | Thành Viên     |
| 5   | Trần Ngọc Trí          | 21522710         | Thành Viên     |


## Công nghệ sử dụng

Nhóm sử dụng NodeJS, ExpressJS, MongoDB, JWT, ...

## Cài Đặt

### Yêu Cầu Hệ Thống

- Cài đặt [NodeJS](https://nodejs.org/) phiên bản 14.17.0 trở lên.

### Hướng Dẫn Cài Đặt

1. **Bước 1:** Clone repo về máy tính của bạn bằng cách sử dụng git command line hoặc download zip file.

    ```bash
    git clone https://github.com/CracQuiz/animekl-web.git
    ```

2. **Bước 2:** Di chuyển vào thư mục dự án.

    ```bash
    cd animekl-web
    ```

3. **Bước 3:** Cài đặt các dependencies.

    ```bash
    npm install
    ```

4. **Bước 4:** Cấu hình file `.env` tại thư mục gốc với các thông số như:

    ```bash
    PORT=5000
    MONGO_URI=your_connection_string
    NODE_ENV=development
    JWT_SECRET=your_secret_key
    TMDB_API_KEY=your_tmdb_api_key
    ```


5. **Bước 5:** Thực hiện build project.
    
    ```bash
    npm run build
    ```

6. **Bước 6:** Khởi chạy server.
    ```bash
    npm run start
    ```
7. **Bước 7:** Truy cập vào trang web bằng cách truy cập địa chỉ `http://localhost:5000` trên trình duyệt web.
