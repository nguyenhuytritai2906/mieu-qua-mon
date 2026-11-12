document.body.insertAdjacentHTML("afterbegin",`<canvas id="scene" role="img" aria-label="Bàn thờ 3D: mái ngói cong, đèn lồng đỏ, lư hương, ống xăm, mõ gỗ và các bạn sinh viên mặc áo FPT"></canvas>
<div class="tags" id="tags" aria-hidden="true"></div>

<header class="hud">
  <div class="brand">
    <b>MIẾU QUA MÔN</b>
    <span class="sub"><span class="sub-long">Thắp hương cho sinh viên FPT · </span><span id="online"><i class="dot" aria-hidden="true"></i><span id="onlineText">Đang chơi cùng NPC</span></span></span>
  </div>
  <div class="stats">
    <span class="pill" title="Số nén hương bạn đã thắp">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M8 21V9M12 21V6M16 21V9"/><path d="M8 7.5c-.8-1-.6-2 .4-3M12 4.5c-.8-1-.6-2 .4-3M16 7.5c-.8-1-.6-2 .4-3"/></svg>
      <span id="statIncense">0</span><span class="lbl">nén</span>
    </span>
    <span class="pill" title="Công đức tích được khi thắp hương và gõ mõ">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20c-4.5-2-7-5.2-7-8.6C5 8.7 6.9 7 9 7c1.3 0 2.3.6 3 1.6.7-1 1.7-1.6 3-1.6 2.1 0 4 1.7 4 4.4 0 3.4-2.5 6.6-7 8.6z"/></svg>
      <span id="statMerit">0</span><span class="lbl">công đức</span>
    </span>
    <button class="icon-btn" id="avatarBtn" type="button" aria-label="Đổi nhân vật" title="Nhân vật của bạn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8.5" r="4"/><path d="M8.2 6.6c1.6.9 4.6 1.1 7.6-.3"/><path d="M4.5 20.5c1.2-3.6 4-5.3 7.5-5.3s6.3 1.7 7.5 5.3"/></svg>
    </button>
    <button class="icon-btn chat-btn" id="chatBtn" type="button" aria-label="Trò chuyện" aria-expanded="false" aria-controls="chatPanel" title="Trò chuyện (Enter)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12.5c0 3.9-3.6 7-8 7-1.2 0-2.3-.2-3.3-.6L4 20l1.2-3.6C4.4 15.3 4 14 4 12.5c0-3.9 3.6-7 8-7s8 3.1 8 7z"/><path d="M8.5 12.5h.01M12 12.5h.01M15.5 12.5h.01"/></svg>
      <i class="badge" id="chatBadge" hidden>0</i>
    </button>
    <button class="icon-btn" id="musicBtn" type="button" aria-pressed="true" aria-label="Nhạc nền" title="Nhạc nền">
      <svg class="on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/></svg>
      <svg class="off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/><path d="M3 3l18 18"/></svg>
    </button>
    <button class="icon-btn" id="soundBtn" type="button" aria-pressed="true" aria-label="Âm thanh">
      <svg class="on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>
      <svg class="off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>
    </button>
  </div>
</header>

<section class="sheet" id="sheet" aria-labelledby="sheetTitle">
  <form id="prayForm" novalidate>
    <div class="sheet-head">
      <h1 id="sheetTitle">Viết sớ cầu qua môn</h1>
      <span class="eyebrow">Lá sớ</span>
      <button type="button" class="sheet-toggle" id="sheetToggle" aria-expanded="false" aria-controls="prayForm" aria-label="Mở rộng lá sớ">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>
      </button>
    </div>
    <label class="field f-email" for="email">
      <span>Mail của bạn</span>
      <input id="email" name="email" type="email" inputmode="email" autocomplete="email" maxlength="80" placeholder="Mail của bạn...">
    </label>
    <label class="field f-wish" for="wish">
      <span>Mong muốn của bạn</span>
      <textarea id="wish" name="wish" rows="2" maxlength="240" placeholder="Mong muốn của bạn..." required></textarea>
    </label>
    <div class="chips" id="chips" aria-label="Gợi ý lời nguyện">
      <button type="button" class="chip" data-text="Con xin qua MAE101, không phải học lại ạ.">Qua MAE101</button>
      <button type="button" class="chip" data-text="Con xin qua PRF192, code chạy một phát là xanh.">Qua PRF192</button>
      <button type="button" class="chip" data-text="Con xin qua CSD201, cây nhị phân đừng làm khó con.">Qua CSD201</button>
      <button type="button" class="chip" data-text="Con xin điểm danh đủ buổi, không bị cấm thi.">Không bị cấm thi</button>
      <button type="button" class="chip" data-text="Con xin qua Vovinam, đường quyền không quên.">Qua Vovinam</button>
      <button type="button" class="chip" data-text="Con xin kỳ OJT vào được công ty xịn.">OJT công ty xịn</button>
      <button type="button" class="chip" data-text="Con xin học kỳ này GPA trên 8.">GPA trên 8</button>
    </div>
    <p class="form-msg" id="formMsg" role="alert"></p>
    <button class="btn-light" id="lightBtn" type="submit">THẮP HƯƠNG</button>
    <p class="fine">Lá sớ được hoá ngay trên máy bạn, không gửi đi đâu. Trang vui do sinh viên làm, không phải trang chính thức của Trường Đại học FPT.</p>
  </form>
</section>

<div class="caption" aria-live="polite">
  <p id="capText"></p>
  <p id="capWish"></p>
  <button class="skip" id="skipBtn" type="button">Tua nhanh</button>
</div>

<section class="dock" id="resultDock" aria-label="Sau khi thắp hương">
  <div class="card">
    <div>
      <h2 id="resultTitle">Nén hương đã cắm</h2>
      <p class="sub" id="resultSub">Lời nguyện đã gửi lên trời. Giờ thì xin một quẻ hoặc gõ mõ tích đức.</p>
    </div>
    <div class="burn" aria-live="off">
      <div class="burn-row"><span id="burnLabel">Hương đang cháy</span><span id="burnTime">3:00</span></div>
      <div class="bar"><i id="burnBar"></i></div>
    </div>
    <div class="actions">
      <button class="btn primary" id="btnXam" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M7 21h10l-1.2-10H8.2z"/><path d="M10 11 9 3M12 11V2.5M14 11l1-8"/></svg>
        Xin xăm
      </button>
      <button class="btn" id="btnMo" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="11" cy="15" rx="7.5" ry="5"/><path d="M5 14.5h12M15 4l5 5M19 3l2 2"/></svg>
        <span id="moLabel">Gõ mõ</span>
      </button>
      <button class="btn" id="btnNew" type="button">Viết sớ mới</button>
    </div>
  </div>
</section>

<section class="dock" id="shakeDock" aria-label="Xin xăm">
  <div class="card shake-card">
    <div>
      <h2>Xin xăm thi cử</h2>
      <p class="sub">Nghĩ về môn cần qua, rồi nhấn giữ để lắc ống xăm cho tới khi một thẻ rơi ra.</p>
    </div>
    <button class="hold" id="holdBtn" type="button" aria-label="Nhấn giữ để lắc ống xăm"><span>Nhấn giữ<br>để lắc</span></button>
    <button class="linkish" id="shakeCancel" type="button">Thôi, quay lại</button>
  </div>
</section>

<div class="modal" id="fortuneModal" role="dialog" aria-modal="true" aria-labelledby="fNum">
  <article class="fortune" id="fortuneCard">
    <div class="f-head">
      <span class="f-num" id="fNum">XĂM SỐ 1</span>
      <span class="rank" id="fRank" data-tier="1">Thượng thượng</span>
    </div>
    <p class="verse" id="fVerse"></p>
    <div class="f-sec"><b>Lời giải</b><p id="fMeaning"></p></div>
    <div class="f-sec"><b>Nên làm</b><p id="fAdvice"></p></div>
    <div class="f-sec f-tip" id="fTipWrap" hidden><b id="fTipTitle">Bí kíp môn</b><p id="fTip"></p></div>
    <div class="f-actions">
      <button class="btn" id="fCopy" type="button">Sao chép quẻ</button>
      <button class="btn" id="fAgain" type="button">Xin quẻ khác</button>
      <button class="btn primary" id="fClose" type="button">Xong</button>
    </div>
    <div class="seal" aria-hidden="true">ĐẬU</div>
  </article>
</div>

<section class="wardrobe" id="avPanel" aria-labelledby="avTitle" inert>
  <div class="wd-card">
    <div class="wd-head">
      <h2 id="avTitle">Tủ đồ</h2>
      <p>Chọn tên và kiểu tóc trước khi vào miếu</p>
    </div>
    <div class="wd-stage">
      <div class="wd-preview"><img id="wdPreview" alt="Nhân vật của bạn mặc áo đồng phục"></div>
      <label class="field" for="nick"><span>Tên hiện trong miếu</span><input id="nick" maxlength="16" autocomplete="nickname" placeholder="Tên hiển thị"></label>
    </div>
    <div class="wd-shop">
      <div class="wd-gender" id="genderOpts" role="group" aria-label="Giới tính nhân vật">
        <button type="button" data-g="m" aria-pressed="true">Nam</button>
        <button type="button" data-g="f" aria-pressed="false">Nữ</button>
      </div>
      <span class="av-label">Kiểu tóc</span>
      <div class="wd-items" id="hairOpts"></div>
      <div class="av-row">
        <div class="av-group"><span class="av-label">Màu tóc</span><div class="av-swatches" id="hairColorOpts"></div></div>
        <div class="av-group"><span class="av-label">Màu da</span><div class="av-swatches" id="skinOpts"></div></div>
      </div>
    </div>
    <div class="wd-actions"><button class="btn" id="avRandom" type="button">Ngẫu nhiên</button><button class="btn primary" id="avDone" type="button">Vào miếu</button></div>
    <p class="fine wd-fine">Người khác trong miếu chỉ thấy tên và nhân vật này, không thấy email hay lời nguyện của bạn.</p>
  </div>
</section>
<section class="chat" id="chatPanel" aria-label="Trò chuyện trong miếu">
  <div class="chat-head"><b>Trò chuyện</b><span>Mọi người trong miếu đều thấy</span><button type="button" class="chat-x" id="chatClose" aria-label="Đóng khung chat">×</button></div>
  <div class="chat-log" id="chatLog" aria-live="polite"><p class="chat-empty" id="chatEmpty">Chưa có ai nhắn. Chào mọi người một câu đi!</p></div>
  <div class="chat-quick" id="chatQuick"><button type="button">Chào cả nhà!</button><button type="button">Qua môn hết nha!</button><button type="button">Ai ôn bài chung không?</button><button type="button">Deadline dí quá…</button></div>
  <form class="chat-form" id="chatForm" autocomplete="off"><input id="chatInput" maxlength="120" placeholder="Nhắn gì đó…" enterkeyhint="send" aria-label="Tin nhắn"><button type="submit" class="btn primary">Gửi</button></form>
</section>
<div class="joy" id="joy" aria-label="Cần điều khiển: kéo để đi" role="application"><i id="joyKnob"></i></div>
<button class="home-btn" id="homeBtn" type="button">Về trước miếu</button>

<div class="tooltip" id="tooltip" role="status"></div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>

<div class="loader" id="loader">
  <div class="incense" aria-hidden="true"><i></i><b></b><b></b><b></b></div>
  <p id="loaderText">Đang dựng miếu…</p>
</div>
<div class="debug" id="debug" hidden></div>
<noscript><style>.loader{display:none}</style><p class="fallback-note">Bật JavaScript để vào miếu thắp hương nhé.</p></noscript>
`),import(new URL("./a.js",import.meta.url).href);
