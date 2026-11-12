// Ghép src/* thành 2 bản: dist/mieu-qua-mon.html (artifact claude.ai) và dist/index.html (tự host)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const css = readFileSync('src/style.css', 'utf8').trim();
const markup = readFileSync('src/markup.html', 'utf8').trim();
const js = readFileSync('src/app.js', 'utf8').trim();
const desc = 'Miếu thắp hương 3D cho sinh viên FPT: viết sớ, thắp hương, xin xăm thi cử, gõ mõ tích công đức.';
const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700;800&family=Bungee&family=Dancing+Script:wght@700&display=swap">`;
mkdirSync('dist', { recursive: true });
const fragment = `<title>Miếu Qua Môn</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="${desc}">
${fonts}
<style>
${css}
</style>
${markup}
<script type="module">
${js}
</script>
`;
writeFileSync('dist/mieu-qua-mon.html', fragment);
const page = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Miếu Qua Môn</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#120a0e">
<meta property="og:title" content="Miếu Qua Môn">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
${fonts}
<style>
${css}
</style>
</head>
<body>
${markup}
<script type="module">
${js}
</script>
</body>
</html>
`;
writeFileSync('dist/index.html', page);
console.log('fragment', Buffer.byteLength(fragment), 'bytes · index.html', Buffer.byteLength(page), 'bytes');
