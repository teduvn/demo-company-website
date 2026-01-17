# TEDU Company Website

Website doanh nghiệp được xây dựng với Next.js 16, TypeScript, Tailwind CSS và Prisma ORM.

## 🚀 Tính Năng

- ✅ Trang chủ với hero section và giới thiệu sản phẩm/dịch vụ
- ✅ Trang About - Giới thiệu về công ty
- ✅ Trang Products - Danh sách sản phẩm
- ✅ Trang Services - Dịch vụ cung cấp
- ✅ Trang Contact - Form liên hệ với database integration
- ✅ Responsive design - Tối ưu cho mobile và desktop
- ✅ Prisma ORM với PostgreSQL (Supabase)

## 📋 Yêu Cầu

- **Node.js** 18.x hoặc cao hơn
- **npm** hoặc **yarn**
- **PostgreSQL Database** (khuyến nghị dùng Supabase)

## 🛠️ Cài Đặt và Chạy

### 1. Clone Repository và Cài Dependencies

```bash
# Cài đặt các packages
npm install
```

### 2. Cấu Hình Database

#### Lấy Connection String từ Supabase:

1. Đăng nhập vào [Supabase Dashboard](https://supabase.com)
2. Chọn hoặc tạo project mới
3. Vào **Settings** → **Database** → **Connection String**
4. Copy 2 loại connection strings:
   - **Connection Pooling** (Transaction mode) cho `DATABASE_URL`
   - **Direct Connection** cho `DIRECT_URL`

#### Tạo file `.env`:

Tạo file `.env` trong thư mục root với nội dung:

```env
# Connection pooling (cho queries thông thường)
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection (cho migrations)
DIRECT_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].supabase.com:5432/postgres"
```

**Lưu ý:** Thay thế `[project-ref]`, `[password]`, và `[region]` bằng thông tin thực tế từ Supabase.

### 3. Tạo Bảng Database với Prisma

#### Generate Prisma Client:

```bash
npx prisma generate
```

#### Chạy Migration để tạo bảng:

```bash
npx prisma migrate dev --name init
```

Lệnh này sẽ:
- Tạo bảng `contacts` trong database
- Tạo migration files trong `prisma/migrations/`
- Đồng bộ schema với database

#### Xem Database (tùy chọn):

```bash
# Mở Prisma Studio để xem dữ liệu
npx prisma studio
```

### 4. Chạy Development Server

```bash
npm run dev
```

Website sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

## 📁 Cấu Trúc Thư Mục

```
demo-company-website/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Trang chủ
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── about/               # Trang About
│   ├── products/            # Trang Products
│   ├── services/            # Trang Services
│   ├── contact/             # Trang Contact
│   └── api/
│       └── contact/         # API endpoint cho form
│           └── route.ts
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   └── Footer.tsx           # Footer
├── lib/                     # Utilities
│   └── prisma.ts           # Prisma client singleton
├── prisma/                  # Prisma configuration
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Migration files
├── .env                     # Environment variables (không commit)
└── prisma.config.ts        # Prisma config
```

## 🗄️ Database Schema

### Bảng `contacts`

| Cột       | Kiểu      | Mô tả                    |
|-----------|-----------|--------------------------|
| id        | String    | Primary key (CUID)       |
| name      | String    | Tên người liên hệ        |
| email     | String    | Email                    |
| phone     | String?   | Số điện thoại (optional) |
| message   | String    | Nội dung tin nhắn        |
| createdAt | DateTime  | Thời gian tạo            |

## 🚢 Build và Deploy

### Build Production:

```bash
npm run build
```

### Chạy Production Server:

```bash
npm start
```

### Deploy lên Vercel:

1. Push code lên GitHub
2. Import project vào [Vercel](https://vercel.com)
3. Thêm environment variables:
   - `DATABASE_URL`
   - `DIRECT_URL`
4. Deploy

**Lưu ý:** Vercel sẽ tự động chạy `prisma generate` khi build (đã config trong `postinstall` script).

## 🧪 Test Tính Năng Contact

1. Chạy website: `npm run dev`
2. Truy cập: [http://localhost:3000/contact](http://localhost:3000/contact)
3. Điền form và submit
4. Kiểm tra data trong Supabase Dashboard hoặc chạy:
   ```bash
   npx prisma studio
   ```

## 📝 Scripts Có Sẵn

```bash
npm run dev          # Chạy development server
npm run build        # Build production
npm start            # Chạy production server
npm run lint         # Chạy ESLint
npx prisma studio    # Mở Prisma Studio
npx prisma migrate dev  # Tạo và apply migration
npx prisma generate  # Generate Prisma Client
```

## 🔧 Troubleshooting

### Lỗi "Module '@prisma/client' has no exported member 'PrismaClient'"

```bash
npx prisma generate
```

### Lỗi "prepared statement already exists"

Đảm bảo đang dùng `DIRECT_URL` trong `prisma.config.ts` cho migrations.

### Migration thất bại

Kiểm tra:
- Database connection string đúng chưa
- Database có thể kết nối được không
- Có quyền tạo bảng trong database không

## 📞 Liên Hệ

- Website: [https://tedu.com](https://tedu.com)
- Email: contact@tedu.com

## 📄 License

Private - All rights reserved.
