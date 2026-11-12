# Miếu Qua Môn — deploy lên Vercel

## Cách 1: kéo thả (không cần code)
1. Giải nén file zip này.
2. Vào https://vercel.com/new → chọn tab deploy thư mục (hoặc dùng Vercel CLI bên dưới).

## Cách 2: Vercel CLI
```
npm i -g vercel
cd mieu-qua-mon-vercel
vercel          # lần đầu: trả lời các câu hỏi, Framework = Other
vercel --prod   # đưa lên bản chính thức
```

## Cách 3: GitHub
Đẩy thư mục này lên một repo GitHub → Vercel → Add New Project → Import repo →
Framework Preset: **Other**, Build Command: để trống, Output Directory: để trống → Deploy.

## Ghi chú
- Trang là 1 file `index.html` tĩnh, không cần build.
- Multiplayer: Vercel không giữ kết nối WebSocket lâu dài, nên trên Vercel trang chạy với NPC
  (và đồng bộ giữa các tab cùng trình duyệt). Muốn nhiều người chơi thật, chạy `server.mjs`
  (gói mieu-qua-mon-server.zip) trên Render/Railway/VPS, rồi sửa trong `index.html`:
  `WS_URL: 'wss://<ten-server-cua-ban>/mq-ws'`.
- Huy hiệu ngực áo riêng: đặt `logo.png` cạnh `index.html` và sửa `BADGE_IMAGE: 'logo.png'`
  (chỉ dùng logo khi bạn có quyền).
