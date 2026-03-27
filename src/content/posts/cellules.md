---
title: Cellules (running)
date: "2026-06"
image: ""
excerpt: 互動裝置 × 攝影。以手勢驅動一顆呼吸的球體，喚醒散落在有機體表面的台北記憶。
category: 專案
tags: ["互動裝置", "攝影", "TouchDesigner", "MediaPipe", "手勢追蹤", "台北", "世新大學"]
---

<div class="section-label">Overview</div>

Cellules — 小房間，也是生命最小的單元。一座城市的記憶，如何在指尖生長。

這是一件結合互動裝置與攝影的專題作品。觀眾站在螢幕前，透過雙手即時控制一顆不斷呼吸的 3D 球體，每條從球體延伸出的絲線末端，連結著一張台北的街拍攝影。

<div class="keywords">
  <span>互動裝置</span>
  <span>攝影</span>
  <span>TouchDesigner</span>
  <span>MediaPipe</span>
  <span>手勢追蹤</span>
  <span>台北</span>
  <span>世新大學</span>
</div>

---

<div class="section-label">Concept</div>

## 城市是活的

城市不是被記住的，是長出來的。每一段記憶都是從核心向外延伸的觸手，連結著一幀畫面、一個片刻。

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
    <p>食指與大拇指捏合／張開，控制球體的縮放。</p>
  </div>
</div>

觀眾靠近 → 球體微微呼吸反應 → 雙手進入畫面 → 開始操控。無需任何文字指引，互動行為直覺且自然。

</div>

---

<div class="section-label">Architecture</div>

## 系統架構

<div style="max-width: 520px; margin-bottom: 2em;">
<svg viewBox="0 0 500 460" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:'Noto Serif TC',serif;">
  <defs>
    <marker id="ah" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#1a1a1a"/>
    </marker>
  </defs>
  <rect x="42" y="2" width="136" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="110" y="20" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">Webcam</text>
  <text x="110" y="35" text-anchor="middle" font-size="8.5" fill="#555555">拍攝觀眾手勢</text>
  <line x1="110" y1="46" x2="110" y2="76" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <text x="124" y="65" font-size="8" fill="#888888" letter-spacing="0.12em">NDI</text>
  <rect x="30" y="76" width="160" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="110" y="94" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">MacBook Pro</text>
  <text x="110" y="109" text-anchor="middle" font-size="8.5" fill="#555555">接收影像</text>
  <line x1="110" y1="120" x2="110" y2="150" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <rect x="38" y="150" width="144" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="110" y="168" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">MediaPipe</text>
  <text x="110" y="183" text-anchor="middle" font-size="8.5" fill="#555555">解析雙手座標</text>
  <line x1="110" y1="194" x2="110" y2="220" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="110" y1="220" x2="370" y2="220" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="110" y1="220" x2="110" y2="258" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <text x="124" y="243" font-size="8" fill="#888888" letter-spacing="0.12em">MIDI</text>
  <line x1="370" y1="220" x2="370" y2="258" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <rect x="40" y="258" width="140" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="110" y="276" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">Mac Mini</text>
  <text x="110" y="291" text-anchor="middle" font-size="8.5" fill="#555555">接收控制訊號</text>
  <rect x="278" y="258" width="185" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="370" y="276" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">MediaPipe Monitor</text>
  <text x="370" y="291" text-anchor="middle" font-size="8.5" fill="#555555">手勢追蹤預覽</text>
  <line x1="110" y1="302" x2="110" y2="332" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <rect x="12" y="332" width="196" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="110" y="350" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">TouchDesigner</text>
  <text x="110" y="365" text-anchor="middle" font-size="8.5" fill="#555555">3D 球體渲染・互動邏輯</text>
  <line x1="110" y1="376" x2="110" y2="408" stroke="#1a1a1a" stroke-width="1" marker-end="url(#ah)"/>
  <text x="124" y="396" font-size="8" fill="#888888" letter-spacing="0.12em">HDMI</text>
  <rect x="60" y="408" width="100" height="44" rx="2" stroke="#1a1a1a" stroke-width="1.2" fill="#fafafa"/>
  <text x="110" y="426" text-anchor="middle" font-size="12.5" font-weight="500" fill="#1a1a1a" letter-spacing="0.03em">MSI</text>
  <text x="110" y="441" text-anchor="middle" font-size="8.5" fill="#555555">主要輸出</text>
</svg>
</div>

手機作為 Webcam 透過 NDI 無線傳輸至 MacBook Pro，MediaPipe 解析手勢座標後，左支線以 MIDI 訊號驅動 Mac Mini 上的 TouchDesigner 進行即時渲染，右支線輸出手勢追蹤預覽供現場監控。

---

<div class="section-label">Exhibition</div>

## 空間規劃

<div style="width:100%;max-width:800px;margin-bottom:2em;">
<svg viewBox="0 0 700 438" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:'Noto Serif TC',serif;">
  <rect x="180" y="60" width="340" height="140" fill="rgba(0,0,0,0.015)" stroke="#d0d0d0" stroke-width="1"/>
  <polygon points="0,430 180,200 180,60 0,142" fill="rgba(0,0,0,0.035)" stroke="#d0d0d0" stroke-width="1"/>
  <polygon points="700,430 520,200 520,60 700,142" fill="rgba(0,0,0,0.025)" stroke="#d0d0d0" stroke-width="1"/>
  <polygon points="0,430 700,430 520,200 180,200" fill="rgba(0,0,0,0.015)" stroke="#d0d0d0" stroke-width="1"/>
  <polygon points="245,222 455,222 478,262 222,262" fill="rgba(0,0,0,0.025)" stroke="#1a1a1a" stroke-width="1.2"/>
  <line x1="247" y1="222" x2="247" y2="252" stroke="#1a1a1a" stroke-width="1.3"/>
  <line x1="453" y1="222" x2="453" y2="252" stroke="#1a1a1a" stroke-width="1.3"/>
  <line x1="224" y1="262" x2="224" y2="312" stroke="#1a1a1a" stroke-width="1.3"/>
  <line x1="476" y1="262" x2="476" y2="312" stroke="#1a1a1a" stroke-width="1.3"/>
  <line x1="130" y1="210" x2="115" y2="310" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="130" y1="210" x2="145" y2="310" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="130" y1="210" x2="130" y2="310" stroke="#1a1a1a" stroke-width="1"/>
  <circle cx="130" cy="205" r="4" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  <ellipse cx="350" cy="388" rx="45" ry="12" fill="none" stroke="#888888" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="130" y="198" text-anchor="middle" font-size="11" font-weight="500" fill="#1a1a1a">Webcam</text>
  <text x="130" y="325" text-anchor="middle" font-size="7.5" fill="#888888">腳架架設</text>
  <rect x="295" y="175" width="110" height="28" rx="1" stroke="#1a1a1a" stroke-width="1.5" fill="#fafafa"/>
  <text x="350" y="193" text-anchor="middle" font-size="11" font-weight="600" fill="#1a1a1a">MSI 主螢幕</text>
  <text x="350" y="215" text-anchor="middle" font-size="7.5" fill="#888888">主要輸出</text>
  <rect x="305" y="238" width="60" height="20" rx="1" stroke="#1a1a1a" stroke-width="1" fill="#fafafa"/>
  <text x="335" y="252" text-anchor="middle" font-size="8" font-weight="500" fill="#1a1a1a">Mac Mini</text>
  <rect x="410" y="218" width="100" height="26" rx="1" stroke="#1a1a1a" stroke-width="1" fill="#fafafa"/>
  <text x="460" y="232" text-anchor="middle" font-size="10" font-weight="500" fill="#1a1a1a">MacBook Pro</text>
  <text x="460" y="255" text-anchor="middle" font-size="7" fill="#888888">MediaPipe Monitor</text>
  <text x="350" y="370" text-anchor="middle" font-size="7" fill="#aaaaaa">1 – 1.5 m</text>
  <line x1="300" y1="365" x2="400" y2="365" stroke="#aaaaaa" stroke-width="0.8" stroke-dasharray="4,3"/>
  <rect x="341" y="392" width="18" height="30" rx="9" stroke="#888888" stroke-width="1.2" fill="none"/>
  <circle cx="350" cy="384" r="5" stroke="#888888" stroke-width="1.2" fill="none"/>
  <text x="350" y="435" text-anchor="middle" font-size="8" fill="#888888">觀眾</text>
</svg>
</div>

桌面左側放置 MSI 主螢幕與 Mac Mini（藏於螢幕下方），右側放置 MacBook Pro 作為 MediaPipe 監控畫面。Webcam 以腳架架設於桌子左前方，觀眾站立於約 1–1.5m 處即可開始互動。

---

<div class="section-label">Timeline</div>

## 製作排程

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">4/1 – 4/14</div>
    <div class="timeline-text">概念定案與技術驗證 — MediaPipe → MIDI → TouchDesigner 通路測試</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">4/15 – 4/28</div>
    <div class="timeline-text">攝影採集 — 台北街拍取材，篩選 40–60 張用於球體節點</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">4/29 – 5/19</div>
    <div class="timeline-text">核心開發 — TouchDesigner 球體建構、照片節點佈局、手勢互動邏輯</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">5/20 – 5/26</div>
    <div class="timeline-text">視覺打磨 — 粒子效果、絲線動態、光影氛圍調整</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">5/27 – 5/31</div>
    <div class="timeline-text">影片製作 — 錄製一分鐘互動紀錄影片，後期剪輯</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">6/1 – 6/8</div>
    <div class="timeline-text">整合測試與展場架設 — 全系統聯調、展台組裝、現場燈光測試</div>
  </div>
</div>

---

<div class="section-label">Tools</div>

## 製作

<div class="tools-list">
  TouchDesigner — 3D 球體渲染・互動邏輯<br>
  MediaPipe — 手部骨架追蹤<br>
  NDI — 影像無線串流<br>
  MIDI — 控制訊號傳輸
</div>
