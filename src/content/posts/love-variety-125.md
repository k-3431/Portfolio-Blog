---
title: 戀綜125 — 舞台視覺與 VJ
date: "2026-03"
image: "/images/love-variety-125/love125-cover.png"
excerpt: 戀愛綜藝節目的現場舞台視覺設計，包含主視覺投影、VJ 即時演出、身控樂器互動裝置與 Ableton 音樂整合。
category: 專案
tags: ["現場演出", "VJ", "TouchDesigner", "Resolume Arena", "Ableton Live", "Mediapipe", "Pepper's Ghost", "女巫店"]
---

<div class="section-label">Overview</div>

戀綜125 是一檔在女巫店舉辦的現場戀愛綜藝。我負責的部分包含舞台主視覺投影、VJ 即時視覺演出、互動影音裝置製作，以及整場演出的音樂節目流程整合。

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

<div class="media-placeholder hero">女巫店現場 — 舞台全景</div>

---

<div class="section-label">Visual Direction</div>

## 主視覺投影

<div class="layout-h">
  <div class="layout-text">
    <p>戀愛綜藝通常是粉紅色的、甜的、暖的，但現場的空間是女巫店——一個搖滾樂的 live house，牆是白的、粗的。</p>
    <p>所以視覺上我讓插畫的色彩去撐甜度，投影本身維持在比較乾淨的狀態，不去搶空間本身的質感。</p>
  </div>
  <div class="media-placeholder">女巫店 — 場地空間</div>
</div>

場景設計走了一個跟節目調性完全相反的路線——用高彩度的 2D 手繪插畫去建構一個不存在的甜美世界，然後把它投在一面搖滾樂的白牆上。這個衝突本身就是整個視覺的核心。

---

<div class="section-dark">

<div class="section-label">Scenes</div>

## 場景

三個主要場景，全部由 AI 生成動態素材（Dreamina），再透過 After Effects 做合成與動畫處理。

<div class="media-grid three">
  <div class="media-placeholder">客廳 — 粉紅沙發、綠地毯</div>
  <div class="media-placeholder">廚房 — 粉色調烹飪空間</div>
  <div class="media-placeholder">泳池 — 棕櫚樹、躺椅</div>
</div>

<div class="layout-h">
  <div class="layout-text">
    <p>客廳是主要的談話場景，粉色沙發搭配綠色地毯，牆上掛著小幅插畫。整個空間刻意做得像兒童繪本的插圖——過度乾淨、過度甜美。</p>
    <p>廚房和泳池是遊戲環節的場景。廚房走暖粉色調，泳池則是冷藍與粉紅的對比。</p>
  </div>
  <div class="media-placeholder">場景插畫 — 原始設計稿</div>
</div>

<div class="layout-h reverse">
  <div class="layout-text">
    <p>所有場景素材都由 Dreamina（AI 影像生成）產出靜態底圖，再用 After Effects 把插畫裡的元素拆開做微動態——窗外的雲在飄、燈在搖、水面在晃。</p>
    <p>讓一張靜態插畫活起來，但不要太活，保持那種「幾乎是靜止的」呼吸感。</p>
  </div>
  <div class="media-placeholder">AE 工程 — 場景動態合成</div>
</div>

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
  <div class="media-placeholder">VJ 系統 — 三通道輸出架構</div>
</div>

每首歌都有獨立的 TouchDesigner 專案和預渲染影片，現場根據表演狀態即時切換和混合。歌單包含成癮、Does it call love、女賊、Stranger、飛翔等曲目。

<div class="media-grid two">
  <div class="media-placeholder">VJ 畫面 — 成癮</div>
  <div class="media-placeholder">VJ 畫面 — Stranger</div>
</div>

<div class="media-grid two">
  <div class="media-placeholder">VJ 畫面 — 女賊</div>
  <div class="media-placeholder">VJ 畫面 — Does it call love</div>
</div>

---

<div class="section-dark">

<div class="section-label">Interactive Installation</div>

## 身控樂器 — 互動影音裝置

這是整個專案裡技術含量最高的部分。讓歌手 Juju 透過手勢即時控制聲音與視覺，觀眾看到的是一個懸浮在透明壓克力上的 3D 小雕像跟著手動。

<div class="layout-h">
  <div class="media-placeholder tall">Pepper's Ghost — 3D 投影效果</div>
  <div class="layout-text">
    <p><strong>訊號流程：</strong></p>
    <p>Webcam → NDI → MediaPipe 手部骨架辨識 → TouchDesigner 訊號處理</p>
    <p>分兩路輸出：<br>
    MIDI → Ableton Live（聲音合成）<br>
    NDI → Resolume Arena → 平板 + 45° 透明壓克力（Pepper's Ghost 3D 投影）</p>
    <p>MediaPipe 輸出 21 個關節座標，TouchDesigner 解析後同時 mapping 到 MIDI 與視覺參數。所有 NDI 串流走同一個區域網路，以有線為主。</p>
  </div>
</div>

<div class="media-grid two">
  <div class="media-placeholder">MediaPipe — 手部追蹤畫面</div>
  <div class="media-placeholder">小雕像 — TD 即時生成</div>
</div>

</div>

---

<div class="section-label">Music Integration</div>

## 音樂流程整合

<div class="layout-h">
  <div class="layout-text">
    <p>整場演出的音樂透過 Ableton Live 搭配 AbleSet 做 PGM 控制，讓音樂 cue 點跟視覺切換能夠同步。</p>
    <p>12 首歌的工作帶全部在 Ableton 裡做好分軌，包含人聲、吉他、鼓、Bass 的獨立 stem，現場可以根據需要即時調整。</p>
  </div>
  <div class="media-placeholder">Ableton Live — PGM 時間軸</div>
</div>

<div class="media-placeholder wide">AbleSet — 整場節目流程控制介面</div>

---

<div class="section-label">Production</div>

## 製作

<div class="layout-h">
  <div class="layout-text">
    <div class="tools-list">
      TouchDesigner — VJ 即時視覺 / 身控樂器<br>
      Resolume Arena — 多通道投影輸出<br>
      After Effects — 場景動態合成<br>
      Ableton Live + AbleSet — 音樂 PGM 控制<br>
      MediaPipe — 手部骨架追蹤<br>
      Dreamina — AI 場景素材生成<br>
      NDI — 影像串流
    </div>
  </div>
  <div class="media-placeholder">TD 節點 — Mediapipe 訊號處理</div>
</div>

整個專案從前期的場景繪製、投影對位測試，到現場的即時操控，大概準備了兩週。

<div class="media-grid two">
  <div class="media-placeholder">對位測試 — 投影與牆面校準</div>
  <div class="media-placeholder">現場 — 設備架設</div>
</div>

<div class="media-placeholder hero">2026.03.05 女巫店 — 演出現場</div>

<div class="video-embed" data-id="YWYCM7m8jvY">
  <img src="https://img.youtube.com/vi/YWYCM7m8jvY/maxresdefault.jpg" alt="戀綜125 — 演出紀錄" />
  <div class="play-btn"></div>
</div>

現場演出那天所有系統都順利運作，沒有當機，這大概是最值得記錄的事。
