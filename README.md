# 🛍️ UI E-commerce Fashion Store

Dự án **UI_E-commerce_Fashion_Store** là một ứng dụng giao diện người dùng (UI) cho website bán hàng thời trang.  
Được xây dựng với **Vite + React + TailwindCSS**, dự án tập trung vào tốc độ, khả năng mở rộng, và trải nghiệm người dùng hiện đại.

---

## 🚀 Công nghệ sử dụng

- ⚡ [Vite](https://vitejs.dev/) — Công cụ build nhanh, tối ưu cho React.
- ⚛️ [React](https://react.dev/) — Thư viện xây dựng UI hiện đại.
- 🎨 [TailwindCSS](https://tailwindcss.com/) — Framework CSS tiện lợi, hỗ trợ responsive nhanh chóng.
- 🧹 [ESLint + Prettier](https://eslint.org/) — Giúp code sạch và đồng nhất.

- UI / CSS Library: Tailwindcss + HeadlessUI
- State Management: React Query cho async state và React Context cho state thường
- Form Management: React Hook Form
- Router: React Router
- Build tool: Vite
- API: Rest API dựa trên server mình cung cấp sẵn
- Hỗ trợ đa ngôn ngữ với react.i18next
- Hỗ trợ SEO với React Helmet
- Mô hình hóa các component với story book
- Unit Test
- Và còn nhiều thứ nữa khi làm chúng ta sẽ áp dụng...

---

### Bộ ESLint và Prettier

Dưới đây là những depedency mà chúng ta cần cài

- ESLint: linter (bộ kiểm tra lỗi) chính

- Prettier: code formatter chính

- @typescript-eslint/eslint-plugin: ESLint plugin cung cấp các rule cho Typescript

- @typescript-eslint/parser: Parser cho phép ESLint kiểm tra lỗi Typescript.

- eslint-config-prettier: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.

- eslint-plugin-import: Để ESLint hiểu về cú pháp `import...` trong source code.

- eslint-plugin-jsx-a11y: Kiểm tra các vấn đề liên quan đến accessiblity (Tính thân thiện website, ví dụ cho thiết bị máy đọc sách).

- eslint-plugin-react: Các rule ESLint cho React

- eslint-plugin-prettier: Dùng thêm 1 số rule Prettier cho ESLint

- prettier-plugin-tailwindcss: Sắp xếp class tailwindcss

- eslint-plugin-react-hooks: ESLint cho React hook

Chạy câu lệnh dưới đây :

```bash
npm i -D add eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier prettier-plugin-tailwindcss eslint-plugin-react-hooks
```

### Cấu hình vite config

Cài package `@types/node` để sử dụng node js trong file ts không bị lỗi

```bash
npm i -D @types/node
```

## 📦 Cài đặt

### 1. Clone dự án

```bash
git clone git@github.com:Huu-Danh/UI_E-commerce_Fashion_Store.git
cd /UI_E-commerce_Fashion_Store
```

## 2.Cài dependencies

```bash
npm install
```

## Chạy project

```bash
npm run dev
```

## ✨ Tính năng chính

🏠 Trang chủ với banner và sản phẩm nổi bật.

👕 Trang danh mục sản phẩm (filter, sort).

📄 Trang chi tiết sản phẩm.

🛒 Giỏ hàng với thêm/xóa sản phẩm.

🔍 Responsive trên mọi thiết bị.

## 🛠️ Dev Scripts

```bash
npm run dev       # Chạy server dev
npm run build     # Build production
npm run preview   # Preview build
npm run lint      # Kiểm tra lint
```

## 👨‍💻 Tác giả

Nguyễn Tấn Hữu Danh - [GitHub Pages](https://github.com/Huu-Danh).
