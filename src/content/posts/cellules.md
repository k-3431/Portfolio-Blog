---
title: Cellules (running)
date: "2026-06"
image: /images/cellules/cover.jpeg
excerpt: 互動裝置 × 攝影。以手勢驅動一顆呼吸的球體，喚醒散落在有機體表面的台北記憶。
category: 專案
tags: ["互動裝置", "攝影", "three.js", "MediaPipe", "手勢追蹤", "台北", "世新大學"]
---

<div class="section-label">Concept</div>

Cellules — 小房間，也是生命最小的單元。一座城市的記憶，如何在指尖生長。

這是一件結合互動裝置與攝影的專題作品。觀眾站在螢幕前，透過雙手即時控制一顆不斷呼吸的 3D 球體，每條從球體延伸出的絲線末端，連結著一張台北的街拍攝影。

<div class="keywords">
  <span>互動裝置</span>
  <span>攝影</span>
  <span>three.js</span>
  <span>MediaPipe</span>
  <span>手勢追蹤</span>
  <span>台北</span>
  <span>世新大學</span>
</div>

---

<div class="section-label">Visual Direction</div>

## 城市是活的

城市不是被記住的，是長出來的。每一段記憶都是從核心向外延伸的觸手，連結著一幀畫面、一個片刻。城市的記憶從核心向外增生，如同細胞分裂——細胞是最接近記憶生長方式的結構。

<div class="layout-h">
  <div class="layout-text">
    <p><strong>球體 — 核心</strong></p>
    <p>一顆不斷呼吸的細胞，從中心向外延展出無數條絲線。每條絲線是一段記憶的路徑，球體本身是城市的意識，是所有記憶匯聚之處。</p>
  </div>
  <div class="layout-text">
    <p><strong>照片 — 末端</strong></p>
    <p>每條絲線的盡頭連結著一張攝影作品。觀眾以手勢旋轉、靠近，喚醒散落在有機體表面的台北記憶。</p>
  </div>
</div>

![Cellules 主視覺 — 絲線球體](/images/cellules/hero.jpeg)

---

<div class="section-label">Photography</div>

## 三層距離的攝影語言

攝影不只是素材，它是互動體驗本身的敘事弧線。147 張照片依「遠／中／近」分成三層，觀眾從外往內靠近球體，畫面從「一座城市」收束到「一個你才會注意到的東西」。

### 遠 — 輪廓

你還沒走進去，但你知道那是台北。天際線、山與樓的交界、高架橋的弧線、整條街的縱深。色調偏冷、抽離，像一段還沒想起來的記憶。

<div class="media-grid three">
  <img src="/images/cellules/a1.jpeg" alt="斜張橋逆光" loading="lazy" />
  <img src="/images/cellules/a2.jpeg" alt="仰拍高樓" loading="lazy" />
  <img src="/images/cellules/a3.jpeg" alt="河岸橋墩與釣客" loading="lazy" />
</div>

### 中 — 場所

你到了某個地方，但還沒聚焦在任何瞬間。巷弄、市場、騎樓、廟口、捷運月台、公園一角。有人的存在感但不是特寫，記憶開始有溫度。

<div class="media-row">
  <img src="/images/cellules/b1.jpeg" alt="街角招牌與行人" loading="lazy" />
  <img src="/images/cellules/b2.jpeg" alt="街上行人" loading="lazy" />
</div>

![俯瞰大廳人群](/images/cellules/b3.jpeg)

### 近 — 細節

記憶真正住的地方。攤販的手、褪色招牌、鐵窗植物、機車上的雨珠、便當油光。沒有全景、沒有地標，越私密越小的碎片反而越強烈。

<div class="media-grid three">
  <img src="/images/cellules/c1.jpeg" alt="鐵窗衣架光影" loading="lazy" />
  <img src="/images/cellules/c2.jpeg" alt="鐵皮牆前盆栽" loading="lazy" />
  <img src="/images/cellules/c3.jpeg" alt="欄杆藤蔓與光" loading="lazy" />
</div>

---

<div class="section-dark">

<div class="section-label">Interaction</div>

## 體驗流程

觀眾站在螢幕前，攝影機偵測雙手，即時驅動畫面。

<div class="layout-h">
  <div class="layout-text">
    <p><strong>左手 — 旋轉</strong></p>
    <p>食指與大拇指旋轉，控制球體的移動方向。</p>
  </div>
  <div class="layout-text">
    <p><strong>右手 — 縮放</strong></p>
    <p>食指與大拇指捏合／張開，控制球體的縮放。相機拉近，畫面從遠景層逐步穿入中景與近景。</p>
  </div>
</div>

觀眾靠近 → 球體微微呼吸反應 → 雙手進入畫面 → 開始操控。無需任何文字指引，互動行為直覺且自然。無人互動時球體緩慢自轉，並自動穿越三層照片，作為閒置展示。

</div>

---

<div class="section-label">Mechanics</div>

## 核心機制

<div class="layout-h">
  <div class="layout-text">
    <p><strong>Fibonacci 球面分佈</strong></p>
    <p>以黃金角將 147 個照片節點均勻散佈在三層球面（38 / 52 / 57），避免隨機聚集。</p>
    <p><strong>多頻 sin noise 呼吸</strong></p>
    <p>四個頻率的 sin 波疊加、各絲線獨立種子，產生有機的「呼吸感」。</p>
    <p><strong>視線對齊觸發</strong></p>
    <p>視線錐角與距離雙閾值，同時只展開一張照片，最大展開至螢幕 88%，並壓暗背景聚光。</p>
  </div>
  <div class="layout-text">
    <p><strong>雙門檻 hysteresis</strong></p>
    <p>層的進出採不同距離門檻，避免在邊界附近抖動切換。</p>
    <p><strong>Selective bloom</strong></p>
    <p>輝光只作用於絲線與核心，照片維持原始層次。</p>
    <p><strong>閒置穿層</strong></p>
    <p>無人互動時相機自動穿越三層，作品自己呼吸。</p>
  </div>
</div>

---

<div class="section-label">Architecture</div>

## 系統架構

<div style="max-width: 560px; margin-bottom: 2em;">
<svg viewBox="0 0 520 430" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:'Noto Serif TC',serif;">
  <defs>
    <marker id="ah" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#1a1a1a"/>
    </marker>
  </defs>
  <!-- Facecam -->
  <rect x="170" y="2" width="180" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="260" y="20" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">Elgato Facecam Neo</text>
  <text x="260" y="35" text-anchor="middle" font-size="8.5" fill="#555555">拍攝觀眾手勢（1080p60）</text>
  <line x1="260" y1="46" x2="260" y2="78" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <text x="274" y="67" font-size="8" fill="#888888" letter-spacing="0.12em">USB-C</text>
  <!-- Mac mini / Cellules.app -->
  <rect x="110" y="78" width="300" height="160" rx="2" stroke="#1a1a1a" stroke-width="1.4" fill="#fafafa"/>
  <text x="260" y="100" text-anchor="middle" font-size="13" font-weight="600" fill="#1a1a1a" letter-spacing="0.03em">Mac mini M4 — Cellules.app</text>
  <text x="260" y="115" text-anchor="middle" font-size="8.5" fill="#555555">SwiftUI + WKWebView・loopback server・完全離線</text>
  <rect x="130" y="130" width="125" height="40" rx="2" stroke="#888888" stroke-width="1" fill="#ffffff"/>
  <text x="192" y="147" text-anchor="middle" font-size="10.5" font-weight="500" fill="#1a1a1a">MediaPipe</text>
  <text x="192" y="161" text-anchor="middle" font-size="8" fill="#555555">手部骨架追蹤</text>
  <rect x="265" y="130" width="125" height="40" rx="2" stroke="#888888" stroke-width="1" fill="#ffffff"/>
  <text x="327" y="147" text-anchor="middle" font-size="10.5" font-weight="500" fill="#1a1a1a">three.js</text>
  <text x="327" y="161" text-anchor="middle" font-size="8" fill="#555555">球體渲染・互動邏輯</text>
  <line x1="255" y1="150" x2="265" y2="150" stroke="#888888" stroke-width="1" marker-end="url(#ah)"/>
  <text x="260" y="200" text-anchor="middle" font-size="8.5" fill="#555555">單一進程，無中介軟體・60 fps</text>
  <!-- outputs -->
  <line x1="180" y1="238" x2="130" y2="300" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <text x="130" y="270" text-anchor="end" font-size="8" fill="#888888" letter-spacing="0.12em">HDMI</text>
  <line x1="340" y1="238" x2="390" y2="300" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <text x="392" y="270" font-size="8" fill="#888888" letter-spacing="0.12em">USB-C (DP)</text>
  <rect x="30" y="300" width="200" height="52" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="130" y="320" text-anchor="middle" font-size="12" font-weight="500" fill="#1a1a1a">27&quot; 主螢幕</text>
  <text x="130" y="336" text-anchor="middle" font-size="8.5" fill="#555555">球體投影・全螢幕・面向觀眾</text>
  <rect x="290" y="300" width="200" height="52" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="390" y="320" text-anchor="middle" font-size="12" font-weight="500" fill="#1a1a1a">MSI MP165 16&quot;</text>
  <text x="390" y="336" text-anchor="middle" font-size="8.5" fill="#555555">相機監看 + 控制面板・操作端</text>
</svg>
</div>

整個 stack 壓進一個原生 macOS app：Facecam 影像進入 Cellules.app 後，MediaPipe 在瀏覽器引擎內直接解析手勢、three.js 同進程渲染，不再經過任何中介軟體。app 內建 loopback HTTP server（127.0.0.1 即 secure context，相機可用），three.js／MediaPipe／手部模型全數本地化——雙擊即開、完全離線、換機可跑。

---

<div class="section-label">Result — Installation</div>

## 成果 — 互動裝置

![Cellules 互動裝置實機畫面](/images/cellules/result_device.jpeg)

<div class="layout-h">
  <div class="layout-text">
    <p><strong>147</strong> 張台北街拍，分佈於三層球面</p>
    <p><strong>3</strong> 層距離結構 — 遠 38 / 中 52 / 近 57</p>
  </div>
  <div class="layout-text">
    <p><strong>60</strong> fps 即時渲染與手勢追蹤</p>
    <p><strong>離線</strong>自包含原生 app，雙擊即開</p>
  </div>
</div>

---

<div class="section-label">Result — LVS</div>

## 成果 — 動態視覺

展場入口的橫幅動態：黑 → 純絲線球體 → 照片球體 → Motion Title → MediaPipe 手勢 → Motion Ending。

![Cellules LVS 全景 01](/images/cellules/result_lvs1.jpeg)

![Cellules LVS 全景 02](/images/cellules/result_lvs2.jpeg)

---

<div class="section-label">Result — Posters</div>

## 成果 — 主視覺海報

<div class="media-grid two">
  <img src="/images/cellules/result_poster1.jpeg" alt="主視覺海報 01" loading="lazy" />
  <img src="/images/cellules/result_poster2.jpeg" alt="主視覺海報 02" loading="lazy" />
  <img src="/images/cellules/result_poster3.jpeg" alt="主視覺海報 03" loading="lazy" />
  <img src="/images/cellules/result_poster4.jpeg" alt="主視覺海報 04" loading="lazy" />
</div>

---

<div class="section-label">Result — Photo Book</div>

## 成果 — 散文攝影集

147 張照片之外的另一條敘事線：以散文與攝影並置的小冊，遠中近三章，跟著互動裝置同一套距離結構走。

<div class="media-row">
  <img src="/images/cellules/result_book_cover.jpeg" alt="攝影集封面" loading="lazy" />
  <img src="/images/cellules/result_book_back.jpeg" alt="攝影集封底" loading="lazy" />
</div>

![攝影集內頁 — 引](/images/cellules/result_book_p1.jpeg)

![攝影集內頁](/images/cellules/result_book_p2.jpeg)

![攝影集內頁](/images/cellules/result_book_p3.jpeg)

---

<div class="section-label">Timeline</div>

## 製作排程

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">4/1 – 4/14</div>
    <div class="timeline-text">概念定案與技術驗證 — 視覺風格確認、手勢追蹤通路測試</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">4/15 – 5/15</div>
    <div class="timeline-text">核心開發 — 球體建構、照片節點佈局、手勢互動邏輯</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">5/15 – 5/20</div>
    <div class="timeline-text">視覺打磨 — 絲線動態、selective bloom、三層穿越</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">5/20 – 5/30</div>
    <div class="timeline-text">影片拍攝及製作 — 互動紀錄影片、LVS 動態</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">6/1 – 6/5</div>
    <div class="timeline-text">軟硬體整合測試與展場設計 — 全系統聯調、展台組裝、燈光測試</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">6/16</div>
    <div class="timeline-text">展演</div>
  </div>
</div>

---

<div class="section-label">Tools</div>

## 工具

<div class="tools-list">
  three.js — 球體渲染・互動邏輯<br>
  MediaPipe Tasks Vision — 手部骨架追蹤<br>
  SwiftUI + WKWebView — Cellules.app 展演執行器（離線自包含）<br>
  Elgato Facecam Neo — 手勢輸入（1080p60）
</div>

---

<div class="section-label">Team</div>

## 團隊

<div class="tools-list">
  視覺設計 / 軟硬體架構 / 現場執行 — kk<br>
  攝影 — 皞皞
</div>
