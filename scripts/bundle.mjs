// Tạo bản rút gọn để phát qua CDN: dist/cdn/{a.js, s.css, b.js}
// b.js chèn giao diện (markup) vào trang rồi nạp a.js, nên trang chủ chỉ cần 1 thẻ <script>.
import { build, transform } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist/cdn', { recursive: true });
const common = { minify: true, charset: 'utf8', logLevel: 'warning' };
await build({ ...common, entryPoints: ['src/app.js'], outfile: 'dist/cdn/a.js', format: 'esm' });
await build({ ...common, entryPoints: ['src/style.css'], outfile: 'dist/cdn/s.css' });
const markup = readFileSync('src/markup.html', 'utf8');
const boot = `document.body.insertAdjacentHTML('afterbegin', ${JSON.stringify(markup)});\nimport(new URL('./a.js', import.meta.url).href);\n`;
writeFileSync('dist/cdn/b.js', (await transform(boot, { ...common, format: 'esm', loader: 'js' })).code);
console.log('dist/cdn: a.js, s.css, b.js');
