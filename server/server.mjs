// Máy chủ nhỏ cho Miếu Qua Môn: phục vụ index.html và kênh multiplayer WebSocket tại /mq-ws.
// Chạy: npm install && npm start   (cần Node 18+). Biến môi trường PORT tuỳ chọn.
import http from 'node:http';
import { readFileSync } from 'node:fs';
import { WebSocketServer } from 'ws';

const PORT = Number(process.env.PORT) || 3000;
const ROOM_SIZE = 24;         // mỗi "phòng" tối đa 24 người thấy nhau, đông hơn thì mở phòng mới
const MAX_PRESENCE = 2048;    // byte
// chèn thẻ meta để trang biết có kênh multiplayer ở /mq-ws
const htmlFile = ['../dist/index.html', './index.html'].map((p) => new URL(p, import.meta.url)).find((u) => { try { readFileSync(u); return true; } catch { return false; } });
const html = Buffer.from(readFileSync(htmlFile, 'utf8').replace('<head>', '<head>\n<meta name="mq-ws" content="/mq-ws">'));

const server = http.createServer((req, res) => {
  const path = (req.url || '/').split('?')[0];
  if (path === '/' || path === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache' });
    return res.end(html);
  }
  if (path === '/healthz') { res.writeHead(200); return res.end('ok'); }
  const img = { '/logo.png': 'image/png', '/logo.webp': 'image/webp' }[path]; // ảnh huy hiệu tuỳ chọn
  if (img) { try { res.writeHead(200, { 'content-type': img }); return res.end(readFileSync(new URL('.' + path, import.meta.url))); } catch { /* không có file */ } }
  res.writeHead(404); res.end('Not found');
});

const wss = new WebSocketServer({ server, path: '/mq-ws', maxPayload: MAX_PRESENCE * 2 });
const rooms = [];
let seq = 0, flushTimer = null;
const dirty = new Set();
const total = () => rooms.reduce((n, r) => n + r.size, 0);
function pickRoom() {
  let room = rooms.find((r) => r.size < ROOM_SIZE);
  if (!room) { room = new Map(); rooms.push(room); }
  return room;
}
function flush() {
  flushTimer = null;
  const t = total();
  for (const room of dirty) {
    const peers = [...room.values()].map((c) => ({ id: c.id, p: c.p }));
    for (const [ws, c] of room) if (ws.readyState === 1) ws.send(JSON.stringify({ t: 'peers', you: c.id, total: t, peers }));
  }
  dirty.clear();
}
function schedule(all) {
  for (const r of all ? rooms : []) dirty.add(r);
  if (!flushTimer) flushTimer = setTimeout(flush, 120);
}

wss.on('connection', (ws) => {
  const room = pickRoom();
  const c = { id: (++seq).toString(36), p: {}, tokens: 8, last: Date.now() };
  room.set(ws, c);
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  schedule(true);
  ws.on('message', (buf) => {
    const now = Date.now();
    c.tokens = Math.min(8, c.tokens + (now - c.last) / 250); c.last = now; // tối đa ~4 tin/giây
    if (c.tokens < 1 || buf.length > MAX_PRESENCE) return;
    c.tokens -= 1;
    let m; try { m = JSON.parse(buf); } catch { return; }
    if (m && m.t === 'p' && m.p && typeof m.p === 'object' && !Array.isArray(m.p)) { c.p = m.p; dirty.add(room); schedule(false); }
  });
  ws.on('close', () => {
    room.delete(ws);
    if (!room.size) rooms.splice(rooms.indexOf(room), 1);
    schedule(true);
  });
});

setInterval(() => {
  for (const room of rooms) for (const ws of room.keys()) {
    if (!ws.isAlive) { ws.terminate(); continue; }
    ws.isAlive = false; ws.ping();
  }
}, 30000);

server.listen(PORT, () => console.log(`Miếu Qua Môn đang chạy: http://localhost:${PORT}`));
