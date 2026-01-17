# HƯỚNG DẪN TRIỂN KHAI TÍNH NĂNG CONTACT

## ✅ Đã Hoàn Thành

1. **Cấu hình Prisma ORM**
   - Đã cài đặt `@prisma/client` và `prisma`
   - Đã tạo schema với model Contact
   - Đã generate Prisma Client

2. **Tạo Database Schema**
   - Model Contact gồm: id, name, email, phone, message, createdAt
   - File schema tại: `prisma/schema.prisma`

3. **API Route**
   - Đã tạo API endpoint: `/api/contact`
   - Xử lý POST request và lưu vào database
   - Có validation cho email và required fields

4. **Trang Contact**
   - Tạo UI đẹp với form liên hệ
   - Tích hợp submit form với API
   - Hiển thị thông báo success/error
   - Responsive design

5. **Navigation Menu**
   - Đã thêm link "Contact" vào menu
   - Button "Contact Us" đã chuyển thành link đến `/contact`

## 📋 Các Bước Tiếp Theo

### Bước 1: Cấu hình Supabase Database

1. Đăng nhập vào [Supabase Dashboard](https://supabase.com)
2. Tạo project mới hoặc chọn project có sẵn
3. Vào **Settings** → **Database** → **Connection String**
4. Copy **Connection Pooling** URL (Transaction mode) cho `DATABASE_URL`
5. Copy **Direct Connection** URL cho `DIRECT_URL`

### Bước 2: Cập nhật file .env

Mở file `.env` và thay thế với connection strings từ Supabase:

```env
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].supabase.com:5432/postgres"
```

### Bước 3: Chạy Migration

Sau khi cấu hình DATABASE_URL, chạy lệnh:

```bash
npx prisma migrate dev --name init
```

Lệnh này sẽ:
- Tạo bảng `contacts` trong database
- Tạo file migration trong `prisma/migrations`
- Đồng bộ schema với database

### Bước 4: Test Tính Năng

1. Chạy dev server:
   ```bash
   npm run dev
   ```

2. Truy cập: `http://localhost:3000/contact`

3. Điền form và submit để test

4. Kiểm tra data trong Supabase Dashboard:
   - Vào **Table Editor**
   - Chọn bảng `contacts`
   - Xem dữ liệu đã được insert

## 📁 Cấu Trúc Files Đã Tạo

```
├── .env                          # Environment variables (DATABASE_URL, DIRECT_URL)
├── .env.example                  # Template cho environment variables
├── prisma/
│   └── schema.prisma            # Prisma schema với model Contact
├── prisma.config.ts             # Prisma configuration (đã cập nhật)
├── lib/
│   └── prisma.ts                # Prisma Client singleton
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # API endpoint xử lý contact form
│   └── contact/
│       └── page.tsx             # Trang Contact với form
└── components/
    └── Navigation.tsx           # Updated menu (đã cập nhật)
```

## 🎨 Tính Năng Form Contact

- **Validation**: Email format, required fields
- **Loading State**: Hiển thị khi đang submit
- **Success/Error Messages**: Thông báo rõ ràng
- **Auto-clear Form**: Xóa form sau khi submit thành công
- **Responsive Design**: Hoạt động tốt trên mobile và desktop

## 🔒 Bảo Mật

- Validation ở cả client và server
- Environment variables cho sensitive data
- Error handling đầy đủ
- SQL injection protection (Prisma ORM)

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
1. DATABASE_URL đã đúng format chưa
2. Database có thể connect được không
3. Migration đã chạy thành công chưa
4. Prisma Client đã generate chưa
