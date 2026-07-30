---
title: 戀綜125 — 舞台視覺與 VJ
date: "2026-03"
image: "/images/love-variety-125/love125-cover.png"
excerpt: 獨立歌手現場演出的舞台視覺設計，包含主視覺投影、VJ 即時演出、身控樂器互動裝置與 Ableton 音樂整合。
category: 專案
tags: ["現場演出", "VJ", "TouchDesigner", "Resolume Arena", "Ableton Live", "Mediapipe", "Pepper's Ghost", "女巫店"]
---

<div class="section-label">Concept</div>

戀綜125 是獨立歌手 Juju 在女巫店的一場現場演出。我負責的部分包含場景動畫製作（將插畫做成 loop 影片）、前後兩首歌的 TouchDesigner 影音互動設計、MediaPipe 手勢辨識設計、結合 TouchDesigner 與 VTube Studio 的現場小雕像投影、硬體設計與串接，以及現場執行。場景插畫由合作插畫家繪製，音樂節目流程整合則與 Howie 共同完成。

<div class="keywords">
  <span>現場演出</span>
  <span>VJ</span>
  <span>TouchDesigner</span>
  <span>Resolume Arena</span>
  <span>Ableton Live</span>
  <span>Mediapipe</span>
  <span>Pepper's Ghost</span>
  <span>女巫店</span>
</div>

---

<div class="section-label">Visual Direction</div>

## 主視覺投影

<div class="layout-h">
  <div class="layout-text">
    <p>女巫店的空間本來就乾淨、偏清新，白牆帶著手抹的粗糙質感。</p>
    <p>投影就維持乾淨，讓插畫的高彩度自己撐住畫面，不蓋掉牆面的質感。</p>
  </div>
  <img src="/images/love-variety-125/love125-venue.jpg" alt="女巫店 — 場地空間" loading="lazy" />
</div>

場景用高彩度的 2D 手繪插畫，建構一個不存在的甜美世界，直接投在女巫店的白牆上。

---

<div class="section-dark">

<div class="section-label">Scenes</div>

## 場景

三個主要場景。插畫由合作插畫家以 Dreamina（AI 影像生成）輔助繪製，我再透過 After Effects 做合成與動畫處理。

<div class="media-grid three">
  <img src="/images/love-variety-125/love125-scene-livingroom.jpg" alt="客廳場景 — 粉紅沙發、綠地毯" loading="lazy" />
  <img src="/images/love-variety-125/love125-scene-kitchen.jpg" alt="廚房場景 — 粉色調烹飪空間" loading="lazy" />
  <img src="/images/love-variety-125/love125-scene-pool.jpg" alt="泳池場景 — 棕櫚樹、躺椅" loading="lazy" />
</div>

客廳是主要的談話場景，粉色沙發搭配綠色地毯，牆上掛著小幅插畫。整個空間刻意做得像兒童繪本的插圖——過度乾淨、過度甜美。

廚房和泳池是遊戲環節的場景。廚房走暖粉色調，泳池則是冷藍與粉紅的對比。

場景的靜態底圖由插畫家產出，我用 After Effects 把插畫裡的元素拆開做微動態 loop——窗外的雲在飄、燈在搖、水面在晃。

讓一張靜態插畫活起來，但不要太活，保持那種「幾乎是靜止的」呼吸感。

</div>

---

<div class="section-label">VJ Performance</div>

## VJ 即時演出

<div class="layout-h reverse">
  <div class="layout-text">
    <p>VJ 的部分用 TouchDesigner 搭配 Resolume Arena 做即時運算，三個輸出通道分別對應不同的舞台元素。</p>
    <p><strong>Main</strong> — 主投影畫面<br>
    <strong>iPad</strong> — 小雕像投影控制<br>
    <strong>Monitor</strong> — Mediapipe 追蹤監看</p>
  </div>
  <img src="/images/love-variety-125/love125-arena.jpg" alt="Resolume Arena — VJ 系統畫面" loading="lazy" />
</div>

<img src="/images/love-variety-125/love125-mapping.png" alt="投影對位圖" loading="lazy" />
<div class="caption">投影對位圖 — 上方黑條 1920×165、主畫面 1920×915，中央剪影對應女巫店牆上的木招牌</div>

開場的〈成癮〉與壓軸的〈飛翔〉是 TouchDesigner 即時互動視覺，中間的〈Does it call love〉〈女賊〉〈Stranger〉則是預渲染的 loop 影片，現場在 Resolume 裡根據表演狀態即時切換和混合。

---

<div class="section-dark">

<div class="section-label">Interactive Installation</div>

## 身控樂器 — 互動影音裝置

這是整個專案裡技術含量最高的部分。讓歌手 Juju 透過手勢即時控制聲音與視覺，觀眾看到的是一個懸浮在透明壓克力上的 3D 小雕像跟著手動。

**訊號流程：**

Webcam → NDI → MediaPipe 手部骨架辨識 → TouchDesigner 訊號處理

分兩路輸出：<br>
MIDI → Ableton Live（聲音合成）<br>
NDI → Resolume Arena → 平板 + 45° 透明壓克力（Pepper's Ghost 3D 投影）

MediaPipe 輸出 21 個關節座標，TouchDesigner 解析後同時 mapping 到 MIDI 與視覺參數。小雕像的形象由 VTube Studio 驅動，與 TouchDesigner 整合後進入投影鏈。所有 NDI 串流走同一個區域網路，以有線為主。

</div>

---

<div class="section-label">Music Integration</div>

## 音樂流程整合

整場演出的音樂透過 Ableton Live 搭配 AbleSet 做 PGM 控制，讓音樂 cue 點跟視覺切換能夠同步，這部分由我和 Howie 共同完成。

12 首歌的工作帶全部在 Ableton 裡做好分軌，包含人聲、吉他、鼓、Bass 的獨立 stem，現場可以根據需要即時調整。

---

<div class="section-label">Video</div>

## 影片

<div class="video-embed" data-id="YWYCM7m8jvY">
  <img src="https://img.youtube.com/vi/YWYCM7m8jvY/maxresdefault.jpg" alt="戀綜125 — 演出紀錄" />
  <div class="play-btn"></div>
</div>
<div class="caption">演出紀錄</div>

---

<div class="section-label">Tools</div>

## 工具

<div class="tools-list">
  TouchDesigner — VJ 即時視覺 / 身控樂器<br>
  Resolume Arena — 多通道投影輸出<br>
  After Effects — 場景動態合成<br>
  Ableton Live + AbleSet — 音樂 PGM 控制<br>
  MediaPipe — 手部骨架追蹤<br>
  VTube Studio — 小雕像形象驅動<br>
  Dreamina — AI 場景素材生成<br>
  NDI — 影像串流
</div>

---

<div class="section-label">Team</div>

## 團隊

<div class="tools-list">
  kk — 場景動畫、TouchDesigner 影音互動設計、MediaPipe 設計、小雕像投影、硬體設計與串接、現場執行、音樂流程整合<br>
  Howie — 音樂流程整合<br>
  插畫 — 合作插畫家
</div>
