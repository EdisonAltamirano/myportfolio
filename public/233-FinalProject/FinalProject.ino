// NewProject.ino
// Receives LO (CLK2) and quadrature frequency (CLK0/CLK1) from HTTP API.
// API used by new_interface.html:
//   /api/clk2/set?mhz=<value>
//   /api/quad/set?mhz=<value>

#include <WiFi.h>
#include "si5351.h"
#include <Wire.h>

// ==================== Embedded HTML ====================
static const char HTML_PAGE[] = R"HTML(
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>SDR Tuning Interface</title>
<style>
/* ── SHARED TOKENS ─────────────────────────────────────────── */
:root {
  --bg: #eef3f9;
  --panel: #ffffff;
  --line: #d1dbe8;
  --text: #1d2a3b;
  --muted: #5b6b80;
  --accent: #1f5fae;
  --accent-soft: #e6f0fb;
  --readonly: #f2f6fc;
  --ok: #1f7a4f;
  --warn: #9a6a10;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
  color: var(--text);
  background: radial-gradient(circle at 0% 0%, #ffffff 0%, #f4f8fd 42%, #e8eff8 100%);
  min-height: 100vh;
  padding: 28px 16px;
}

.app { max-width: 1080px; margin: 0 auto; }

/* ── TOP BAR ───────────────────────────────────────────────── */
.topbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.title { font-size: 1.25rem; font-weight: 700; letter-spacing: 0.01em; }

.mode-switch {
  display: inline-flex;
  background: #dfe8f4;
  border: 1px solid #c8d4e4;
  border-radius: 999px;
  padding: 3px;
  gap: 4px;
}

.mode-switch input { position: absolute; opacity: 0; pointer-events: none; }

.mode-switch label {
  padding: 7px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--muted);
  user-select: none;
}

.mode-switch input:checked + label {
  background: var(--panel);
  color: var(--accent);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16,40,74,0.08);
}

/* ── DEBUG PANEL (light theme) ─────────────────────────────── */
.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 18px;
}

.panel + .panel { margin-top: 14px; }
.panel h2 { margin: 0; font-size: 1.03rem; letter-spacing: 0.01em; }
.caption { margin-top: 4px; color: var(--muted); font-size: 0.9rem; }
.section-gap { margin-top: 14px; }

.field-grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: minmax(250px, 1.35fr) minmax(220px, 1fr);
  gap: 12px 16px;
  align-items: center;
}

.field-grid label { font-size: 0.92rem; color: #304056; }

input[type="text"] {
  width: 100%;
  border: 1px solid #c8d4e4;
  border-radius: 8px;
  padding: 9px 10px;
  font-size: 0.95rem;
  color: var(--text);
  background: #fff;
}

input[type="text"]:focus {
  outline: none;
  border-color: #78a1d8;
  box-shadow: 0 0 0 2px rgba(31,95,174,0.12);
}

input[readonly] { background: var(--readonly); color: #2f4462; border-color: #cfd9e7; }

.status-line {
  margin-top: 10px;
  background: var(--accent-soft);
  border: 1px solid #c8d9ef;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.9rem;
  color: #234066;
}

.pair-line {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #f4f8fd;
  border: 1px solid #d7e1ef;
  font-size: 0.9rem;
  color: #2d4565;
}

.button-row { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 10px; }

button {
  border: 1px solid #2d6eb9;
  background: #2d6eb9;
  color: #fff;
  border-radius: 8px;
  padding: 9px 14px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.01em;
}

button.secondary { background: #f4f8ff; color: #1f5fae; border-color: #9bb7dc; }
button:hover { filter: brightness(0.98); }

.results-grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: minmax(300px,1.4fr) 1fr;
  gap: 10px 16px;
  align-items: center;
}

.results-grid .k { color: #334861; font-size: 0.92rem; }

.results-grid .v {
  background: #f6f9fd;
  border: 1px solid #d7e0ed;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.92rem;
  color: #213550;
  min-height: 37px;
  display: flex;
  align-items: center;
}

/* ── PRODUCTION PANEL (dark radio theme) ───────────────────── */
.radio-panel {
  background: #0b0f18;
  border: 1px solid #1c2535;
  border-radius: 16px;
  padding: 24px;
  color: #c8d8ec;
  font-family: "Segoe UI", sans-serif;
}

/* Header */
.radio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid #1c2535;
}

.radio-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #00c99a;
}

.radio-live {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  letter-spacing: 1px;
  color: #4a6070;
}

.live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #00ff88;
  animation: livepulse 2s infinite;
}

@keyframes livepulse {
  0%,100% { opacity: 1; box-shadow: 0 0 6px #00ff88; }
  50%      { opacity: 0.35; box-shadow: none; }
}

/* Main frequency display */
.radio-freq-display {
  text-align: center;
  background: #06090f;
  border-radius: 14px;
  padding: 26px 20px 18px;
  margin-bottom: 16px;
  border: 1px solid #151e2e;
  position: relative;
}

.freq-label {
  font-size: 0.65rem;
  letter-spacing: 4px;
  color: #2e4050;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.freq-big {
  font-size: 4.4rem;
  font-weight: 200;
  font-family: "Courier New", monospace;
  color: #00c99a;
  text-shadow: 0 0 28px rgba(0,201,154,0.45);
  line-height: 1;
  letter-spacing: 2px;
}

.freq-unit {
  font-size: 1.3rem;
  color: #2e5040;
  margin-left: 6px;
  vertical-align: bottom;
  line-height: 1.6;
}

.freq-sublabel {
  margin-top: 10px;
  font-size: 0.68rem;
  letter-spacing: 3px;
  color: #1e3030;
  text-transform: uppercase;
}

/* FM band bar */
.fm-band-wrap {
  margin-bottom: 18px;
}

.fm-band-ticks {
  display: flex;
  justify-content: space-between;
  font-size: 0.62rem;
  color: #2e4050;
  font-family: monospace;
  margin-bottom: 5px;
  padding: 0 1px;
}

.fm-band-track {
  height: 14px;
  background: #0a1220;
  border-radius: 7px;
  border: 1px solid #1a2840;
  position: relative;
  overflow: visible;
}

/* tick marks inside the bar */
.fm-band-track::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 7px;
  background: repeating-linear-gradient(
    90deg,
    transparent 0%,
    transparent calc(20% - 1px),
    #1a2840 calc(20% - 1px),
    #1a2840 20%
  );
}

.fm-needle {
  position: absolute;
  top: -7px;
  width: 3px;
  height: 28px;
  background: #00c99a;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0,201,154,0.9);
  transform: translateX(-50%);
  transition: left 0.45s cubic-bezier(0.25,0.8,0.25,1);
  left: 50%;
}

/* Spectrum analyzer */
.spectrum-wrap {
  margin-bottom: 18px;
}

.spectrum-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.spectrum-title {
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: #2e4050;
  text-transform: uppercase;
}

.spectrum-box {
  height: 150px;
  background: #06090f;
  border-radius: 10px;
  border: 1px solid #141e2e;
  position: relative;
  overflow: hidden;
}

#prod-spectrum {
  display: block;
  width: 100%;
  height: 100%;
}

.spectrum-freq-labels {
  display: flex;
  justify-content: space-between;
  padding: 5px 2px 0;
  font-size: 0.6rem;
  color: #2e4050;
  font-family: monospace;
}

/* Readout cards grid */
.radio-readouts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 12px;
}

.readout-card {
  background: #0a1220;
  border: 1px solid #1a2535;
  border-radius: 10px;
  padding: 11px 14px;
}

.readout-lbl {
  font-size: 0.62rem;
  letter-spacing: 1.5px;
  color: #2e4050;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.readout-val {
  font-size: 1rem;
  font-weight: 600;
  color: #00c99a;
  font-family: "Courier New", monospace;
}

/* Bottom note */
.radio-note {
  font-size: 0.8rem;
  color: #2e4858;
  background: #0a1220;
  border: 1px solid #1a2535;
  border-radius: 8px;
  padding: 8px 12px;
}

/* ── HIDDEN ─────────────────────────────────────────────────── */
[hidden] { display: none !important; }

/* ── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 860px) {
  .field-grid, .results-grid { grid-template-columns: 1fr; }
  .radio-readouts { grid-template-columns: 1fr; }
  .freq-big { font-size: 2.8rem; }
}
</style>
</head>
<body>
<main class="app">

  <!-- TOP BAR -->
  <div class="topbar">
    <div class="title">FM Radio / SDR Tuning Interface</div>
    <div class="mode-switch" aria-label="Mode">
      <input id="mode-production" type="radio" name="mode" />
      <label for="mode-production">Production Mode</label>
      <input id="mode-debug" type="radio" name="mode" checked />
      <label for="mode-debug">Debug Mode</label>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════
       PRODUCTION PANEL — dark FM radio
  ═══════════════════════════════════════════════════════════ -->
  <section id="production-panel" class="radio-panel" hidden>

    <div class="radio-header">
      <span class="radio-title">FM Radio Receiver</span>
      <div class="radio-live">
        <span class="live-dot"></span>
        <span>LIVE</span>
      </div>
    </div>

    <!-- Big frequency display -->
    <div class="radio-freq-display">
      <div class="freq-label">Tuned Frequency</div>
      <div class="freq-big">
        <span id="prod-rf-display">—</span><span class="freq-unit">MHz</span>
      </div>
      <div class="freq-sublabel">FM Band &nbsp;·&nbsp; Antenna → Speaker</div>
    </div>

    <!-- FM band bar 87.5 – 108 MHz -->
    <div class="fm-band-wrap">
      <div class="fm-band-ticks">
        <span>87.5</span><span>92</span><span>96</span><span>100</span><span>104</span><span>108</span>
      </div>
      <div class="fm-band-track">
        <div class="fm-needle" id="prod-needle"></div>
      </div>
    </div>

    <!-- Spectrum Analyzer -->
    <div class="spectrum-wrap">
      <div class="spectrum-header">
        <span class="spectrum-title">Spectrum Analyzer</span>
      </div>
      <div class="spectrum-box">
        <canvas id="prod-spectrum"></canvas>
      </div>
      <div class="spectrum-freq-labels">
        <span>87.5 MHz</span><span>92</span><span>96</span><span>100</span><span>104</span><span>108 MHz</span>
      </div>
    </div>

    <!-- Compact readout cards -->
    <div class="radio-readouts">
      <div class="readout-card">
        <div class="readout-lbl">LO1 / CLK2</div>
        <div class="readout-val" id="prod-clk2">—</div>
      </div>
      <div class="readout-card">
        <div class="readout-lbl">IF Stage 1</div>
        <div class="readout-val" id="prod-if">—</div>
      </div>
      <div class="readout-card">
        <div class="readout-lbl">CLK0 / CLK1</div>
        <div class="readout-val" id="prod-quad">—</div>
      </div>
      <div class="readout-card">
        <div class="readout-lbl">Low-IF</div>
        <div class="readout-val" id="prod-lowif">—</div>
      </div>
    </div>

    <div class="radio-note" id="prod-note">—</div>

  </section>

  <!-- ═══════════════════════════════════════════════════════════
       DEBUG PANEL — unchanged
  ═══════════════════════════════════════════════════════════ -->
  <section id="debug-panel" class="panel">
    <h2>SECTION A: STAGE 1 INPUTS</h2>
    <div class="caption">Stage 1 only: RF source and CLK2 (LO1). IF ≈ |RF - CLK2|</div>
    <div class="field-grid">
      <label for="rf-generator">RF from generator (MHz)</label>
      <input id="rf-generator" type="text" inputmode="decimal" value="40.000" />

      <label for="clk2-current">CLK2 current frequency (MHz)</label>
      <input id="clk2-current" type="text" inputmode="decimal" value="29.300" />

      <label for="suggested-clk2">Suggested LO1 / CLK2 (MHz)</label>
      <input id="suggested-clk2" type="text" readonly />

      <label for="measured-if">Measured IF after stage 1 (MHz)</label>
      <input id="measured-if" type="text" inputmode="decimal" value="10.670" />
    </div>
    <div id="stage1-check" class="status-line">Measured IF matches the stage-1 reference</div>
    <div class="button-row">
      <button id="send-clk2">SEND FREQ CLK2</button>
    </div>
    <div id="clk2-send-status" class="status-line">Ready to send CLK2 value</div>

    <section class="panel section-gap">
      <h2>SECTION B: STAGE 2 QUADRATURE CORRECTION</h2>
      <div class="caption">Stage 2 only: measured IF into CLK0/CLK1 quadrature mixer.</div>
      <div class="pair-line">CLK0 = 0° &nbsp;&nbsp;|&nbsp;&nbsp; CLK1 = 90°</div>
      <div class="field-grid">
        <label for="desired-low-if">Desired low-IF (kHz)</label>
        <input id="desired-low-if" type="text" inputmode="decimal" value="250" />

        <label for="quad-current">Current freq in CLK0 / CLK1 (MHz)</label>
        <input id="quad-current" type="text" inputmode="decimal" value="10.950" />

        <label for="quad-suggested">Suggested quad_freq for CLK0 / CLK1 (MHz)</label>
        <input id="quad-suggested" type="text" readonly />

        <label for="quad-adjust">Suggested quad_adjust</label>
        <input id="quad-adjust" type="text" readonly />
      </div>
      <div class="button-row">
        <button id="load-quad" class="secondary">LOAD SUGGESTED QUAD_FREQ</button>
        <button id="send-quad">SEND QUAD_FREQ CORRECTION TO RASPBERRY</button>
      </div>
      <div id="quad-send-status" class="status-line">Ready to send quadrature value</div>
    </section>

    <section class="panel section-gap">
      <h2>SECTION C: EXPECTED RESULTS</h2>
      <div class="results-grid">
        <div class="k">Measured IF used</div>
        <div class="v" id="result-measured-if">10.670 MHz</div>

        <div class="k">Stage-1 reference from suggested LO1 / CLK2</div>
        <div class="v" id="result-stage1-ref">10.700 MHz</div>

        <div class="k">Current freq in CLK0 / CLK1</div>
        <div class="v" id="result-quad-current">10.950 MHz</div>

        <div class="k">Try quad_freq for CLK0 / CLK1</div>
        <div class="v" id="result-quad-try">10.920 MHz</div>

        <div class="k">Current low-IF from your values</div>
        <div class="v" id="result-low-if">280.0 kHz</div>

        <div class="k">Move quad_freq for CLK0 / CLK1</div>
        <div class="v" id="result-move">Decrease quad_freq by 30.0 kHz</div>

        <div class="k">After that move you should see</div>
        <div class="v" id="result-after">low-IF near 250.0 kHz with quad_freq = 10.920 MHz</div>
      </div>
    </section>
  </section>

</main>

<script>
(function () {
  /* ── element registry ───────────────────────────────────── */
  const ids = [
    "mode-production","mode-debug","production-panel","debug-panel",
    "rf-generator","clk2-current","suggested-clk2","measured-if",
    "stage1-check","send-clk2","clk2-send-status",
    "desired-low-if","quad-current","quad-suggested","quad-adjust",
    "load-quad","send-quad","quad-send-status",
    "result-measured-if","result-stage1-ref","result-quad-current",
    "result-quad-try","result-low-if","result-move","result-after",
    "prod-clk2","prod-if","prod-quad","prod-lowif","prod-note",
    "prod-rf-display","prod-needle","prod-spectrum"
  ];
  const el = {};
  for (const id of ids) {
    const node = document.getElementById(id);
    if (!node) { console.error("Missing element:", id); return; }
    el[id] = node;
  }

  /* ── helpers ───────────────────────────────────────────── */
  const toNumber = v => {
    const t = String(v).trim().replace(",",".");
    if (t===""||t==="."||t==="-"||t==="+") return 0;
    const n = Number(t);
    return Number.isFinite(n) ? n : 0;
  };
  const fmtMhz = n => `${n.toFixed(3)} MHz`;
  const fmtKhz = n => `${n.toFixed(1)} kHz`;

  const stage1Message = d => {
    const a = Math.abs(d);
    if (a < 0.05) return "Measured IF matches the stage-1 reference";
    return d > 0
      ? `Measured IF is ${fmtKhz(a)} above the stage-1 reference`
      : `Measured IF is ${fmtKhz(a)} below the stage-1 reference`;
  };

  const quadAdjustMessage = d => {
    const a = Math.abs(d);
    if (a < 0.05) return "Current quad_freq already matches the recommendation";
    return d > 0
      ? `Increase quad_freq by ${fmtKhz(a)}`
      : `Decrease quad_freq by ${fmtKhz(a)}`;
  };

  /* ── spectrum analyzer ─────────────────────────────────── */
  const specCvs = el["prod-spectrum"];
  const specCtx = specCvs.getContext("2d");
  let specActive = false;
  let specRfMhz  = 40;   // updated from computed values

  const FM_MIN = 87.5, FM_MAX = 108;
  const BINS   = 120;

  function resizeSpectrum() {
    const dpr = window.devicePixelRatio || 1;
    const rect = specCvs.parentElement.getBoundingClientRect();
    specCvs.width  = (rect.width  || 600) * dpr;
    specCvs.height = (rect.height || 150) * dpr;
    specCtx.scale(dpr, dpr);
  }

  function drawSpectrum() {
    if (!specActive) return;

    const dpr = window.devicePixelRatio || 1;
    const W = specCvs.width  / dpr;
    const H = specCvs.height / dpr;

    // background
    specCtx.fillStyle = "#06090f";
    specCtx.fillRect(0, 0, W, H);

    // horizontal dB grid lines
    specCtx.strokeStyle = "rgba(30,50,60,0.6)";
    specCtx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const y = (H / 4) * i;
      specCtx.beginPath();
      specCtx.moveTo(0, y);
      specCtx.lineTo(W, y);
      specCtx.stroke();
    }

    // vertical frequency grid (every 20% = ~4 MHz apart)
    for (let i = 1; i < 5; i++) {
      const x = (W / 5) * i;
      specCtx.beginPath();
      specCtx.moveTo(x, 0);
      specCtx.lineTo(x, H);
      specCtx.stroke();
    }

    // tuned bin in FM range
    const tunedBin = Math.floor(
      ((specRfMhz - FM_MIN) / (FM_MAX - FM_MIN)) * BINS
    );
    const binW = W / BINS;

    for (let i = 0; i < BINS; i++) {
      // noise floor
      let amp = 0.05 + Math.random() * 0.10;

      // tuned station main peak
      const d = Math.abs(i - tunedBin);
      if (d < 9) {
        amp += Math.exp(-(d * d) / 7) * 0.88;
      }

      // adjacent channel spill (~±20 bins)
      if (d >= 14 && d < 22) amp += 0.14 + Math.random() * 0.06;

      // scatter weaker stations across band
      const ghost1 = Math.round(tunedBin + 35) % BINS;
      const ghost2 = Math.round(tunedBin - 28 + BINS) % BINS;
      if (Math.abs(i - ghost1) < 5) amp += Math.exp(-Math.abs(i-ghost1)*0.6)*0.30;
      if (Math.abs(i - ghost2) < 4) amp += Math.exp(-Math.abs(i-ghost2)*0.7)*0.22;

      const barH = Math.min(amp * H * 0.92, H);
      const x = i * binW;
      const y = H - barH;

      // colour: tuned station = cyan, rest = dim blue-grey
      const isTuned = (d <= 2);
      const grad = specCtx.createLinearGradient(0, H, 0, y);
      if (isTuned) {
        grad.addColorStop(0, "#00c99a");
        grad.addColorStop(1, "#4a9eff");
      } else {
        grad.addColorStop(0, "#1a2a3a");
        grad.addColorStop(1, "#2e4050");
      }
      specCtx.fillStyle = grad;
      specCtx.fillRect(x + 1, y, Math.max(binW - 2, 1), barH);
    }

    // tuned frequency dashed marker line
    if (tunedBin >= 0 && tunedBin <= BINS) {
      const tx = (tunedBin / BINS) * W;
      specCtx.save();
      specCtx.strokeStyle = "#00c99a";
      specCtx.lineWidth   = 1.5;
      specCtx.setLineDash([4, 4]);
      specCtx.beginPath();
      specCtx.moveTo(tx, 0);
      specCtx.lineTo(tx, H);
      specCtx.stroke();
      specCtx.restore();
    }

    requestAnimationFrame(drawSpectrum);
  }

  /* ── mode switch ───────────────────────────────────────── */
  const updateMode = () => {
    const isDebug = el["mode-debug"].checked;
    el["debug-panel"].hidden      = !isDebug;
    el["production-panel"].hidden = isDebug;

    if (!isDebug) {
      if (!specActive) {
        specActive = true;
        resizeSpectrum();
        drawSpectrum();
      }
    } else {
      specActive = false;
    }
  };

  /* ── main computation ──────────────────────────────────── */
  const updateComputed = () => {
    const rf              = toNumber(el["rf-generator"].value);
    const clk2Current     = toNumber(el["clk2-current"].value);
    const measuredIf      = toNumber(el["measured-if"].value);
    const desiredLowIfKhz = toNumber(el["desired-low-if"].value);
    const quadCurrent     = toNumber(el["quad-current"].value);

    const suggestedLo1Clk2 = rf - 10.700;
    const stage1RefIf       = Math.abs(rf - suggestedLo1Clk2);
    const stage1DeltaKhz    = (measuredIf - stage1RefIf) * 1000;
    const suggestedQuad     = measuredIf + desiredLowIfKhz / 1000;
    const quadDeltaKhz      = (suggestedQuad - quadCurrent) * 1000;
    const currentLowIfKhz   = Math.abs(quadCurrent - measuredIf) * 1000;
    const adjustText        = quadAdjustMessage(quadDeltaKhz);

    /* debug panel outputs */
    el["suggested-clk2"].value          = suggestedLo1Clk2.toFixed(3);
    el["quad-suggested"].value          = suggestedQuad.toFixed(3);
    el["quad-adjust"].value             = adjustText;
    el["stage1-check"].textContent      = stage1Message(stage1DeltaKhz);
    el["result-measured-if"].textContent= fmtMhz(measuredIf);
    el["result-stage1-ref"].textContent = fmtMhz(stage1RefIf);
    el["result-quad-current"].textContent= fmtMhz(quadCurrent);
    el["result-quad-try"].textContent   = fmtMhz(suggestedQuad);
    el["result-low-if"].textContent     = fmtKhz(currentLowIfKhz);
    el["result-move"].textContent       = adjustText;
    el["result-after"].textContent      = `low-IF near ${desiredLowIfKhz.toFixed(1)} kHz with quad_freq = ${suggestedQuad.toFixed(3)} MHz`;

    /* production panel — readout cards */
    el["prod-clk2"].textContent  = fmtMhz(clk2Current);
    el["prod-if"].textContent    = fmtMhz(measuredIf);
    el["prod-quad"].textContent  = fmtMhz(quadCurrent);
    el["prod-lowif"].textContent = fmtKhz(currentLowIfKhz);

    const lowIfOffset = currentLowIfKhz - desiredLowIfKhz;
    const offAbs      = Math.abs(lowIfOffset);
    el["prod-note"].textContent = offAbs < 0.05
      ? "Low-IF is on target."
      : lowIfOffset > 0
        ? `Low-IF offset: ${fmtKhz(offAbs)} above target.`
        : `Low-IF offset: ${fmtKhz(offAbs)} below target.`;

    /* production panel — big freq display */
    el["prod-rf-display"].textContent = rf.toFixed(3);

    /* production panel — FM band needle (87.5 – 108 MHz) */
    const pct = Math.max(0, Math.min(100,
      ((rf - FM_MIN) / (FM_MAX - FM_MIN)) * 100
    ));
    el["prod-needle"].style.left = `${pct}%`;

    /* update spectrum tuned frequency */
    specRfMhz = rf;
  };

  /* ── send helpers ──────────────────────────────────────── */
  const sendWithFallback = async (urlBase, mhz, statusEl, ok, fallback) => {
    const safe    = Number.isFinite(mhz) ? mhz : 0;
    const display = safe.toFixed(3);
    try {
      const res = await fetch(`${urlBase}${encodeURIComponent(safe.toFixed(6))}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      statusEl.textContent = `${ok}: ${display} MHz`;
    } catch (_) {
      statusEl.textContent = `Manual UI only: ${fallback} ${display} MHz`;
    }
  };

  /* ── event listeners ───────────────────────────────────── */
  for (const id of ["rf-generator","clk2-current","measured-if","desired-low-if","quad-current"]) {
    el[id].addEventListener("input", updateComputed);
  }

  el["mode-production"].addEventListener("change", updateMode);
  el["mode-debug"].addEventListener("change", updateMode);

  el["load-quad"].addEventListener("click", () => {
    el["quad-current"].value = toNumber(el["quad-suggested"].value).toFixed(3);
    updateComputed();
  });

  el["send-clk2"].addEventListener("click", async () => {
    await sendWithFallback("/api/clk2/set?mhz=", toNumber(el["clk2-current"].value),
      el["clk2-send-status"], "CLK2 sent", "CLK2 target");
  });

  el["send-quad"].addEventListener("click", async () => {
    await sendWithFallback("/api/quad/set?mhz=", toNumber(el["quad-current"].value),
      el["quad-send-status"], "Quadrature sent", "quadrature target");
  });

  /* ── init ──────────────────────────────────────────────── */
  updateMode();
  updateComputed();
})();
</script>
</body>
</html>

)HTML";

// ==================== WiFi ====================
const char* ssid     = "iPhone";
const char* password = "cdaaeraa";

WiFiServer server(80);
const int LED_PIN = LED_BUILTIN;

// ==================== Si5351 ====================
Si5351 si5351;

#define RATIO 64ULL

// Keep broad LO range so interface can tune lab frequencies (ex: 29.300 MHz).
const uint64_t LO_MIN_FREQ_HZ = 1000000ULL;      // 1.000 MHz
const uint64_t LO_MAX_FREQ_HZ = 160000000ULL;    // 160.000 MHz

// Quadrature defaults/range from lab version.
const uint64_t QUAD_MIN_FREQ_HZ = 10875000ULL;   // 10.875 MHz
const uint64_t QUAD_MID_FREQ_HZ = 10450000ULL;   // 10.950 MHz
const uint64_t QUAD_MAX_FREQ_HZ = 11025000ULL;   // 11.025 MHz

// uint64_t current_lo_freq_hz   = 29300000ULL;     // 29.300 MHz default
uint64_t current_lo_freq_hz   = 24300000ULL;     // 29.300 MHz default
uint64_t current_quad_freq_hz = QUAD_MID_FREQ_HZ;

// PLLB for CLK2 (LO) in centi-Hz.
uint64_t pllB_freq = 85000000000ULL;

// ==================== Si5351 Helpers ====================
void setQuadrature(uint64_t quad_freq_hz) {
  uint64_t pll_freq_hz = quad_freq_hz * RATIO;
  si5351.set_freq_manual(quad_freq_hz * 100ULL, pll_freq_hz * 100ULL, SI5351_CLK0);
  si5351.set_freq_manual(quad_freq_hz * 100ULL, pll_freq_hz * 100ULL, SI5351_CLK1);
  si5351.set_phase(SI5351_CLK0, 0);
  si5351.set_phase(SI5351_CLK1, RATIO);
  si5351.pll_reset(SI5351_PLLA);
}

void applyLO(uint64_t lo_freq_hz) {
  si5351.set_ms_source(SI5351_CLK2, SI5351_PLLB);
  si5351.set_freq_manual(lo_freq_hz * 100ULL, pllB_freq, SI5351_CLK2);
}

// ==================== HTTP Helpers ====================
static String getPathFromRequestLine(const String& reqLine) {
  int a = reqLine.indexOf(' ');
  if (a < 0) return "/";
  int b = reqLine.indexOf(' ', a + 1);
  if (b < 0) return "/";
  return reqLine.substring(a + 1, b);
}

static bool startsWith(const String& s, const char* prefix) {
  return s.startsWith(prefix);
}

static bool getQueryValue(const String& path, const char* key, String& out) {
  int q = path.indexOf('?');
  if (q < 0) return false;

  String qs = path.substring(q + 1);
  String k  = String(key) + "=";
  int i = qs.indexOf(k);
  if (i < 0) return false;

  int j = qs.indexOf('&', i);
  out = (j < 0) ? qs.substring(i + k.length()) : qs.substring(i + k.length(), j);
  out.trim();
  return out.length() > 0;
}

static bool getQueryDouble(const String& path, const char* key, double& out) {
  String v;
  if (!getQueryValue(path, key, v)) return false;
  out = atof(v.c_str());
  return true;
}

static void sendText(WiFiClient& client, int code, const char* ctype, const String& body) {
  client.print("HTTP/1.1 ");
  client.print(code);
  client.print(code == 200 ? " OK\r\n" : " ERROR\r\n");
  client.print("Content-Type: "); client.print(ctype);
  client.print("\r\nConnection: close\r\n\r\n");
  client.print(body);
}

static void sendHtml(WiFiClient& client) {
  client.print("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nConnection: close\r\n\r\n");
  client.print(HTML_PAGE);
}

static void sendJsonStatus(WiFiClient& client) {
  si5351.update_status();

  String hw = "SYS_INIT=" + String(si5351.dev_status.SYS_INIT) +
              " LOL_A="   + String(si5351.dev_status.LOL_A) +
              " LOL_B="   + String(si5351.dev_status.LOL_B) +
              " LOS="     + String(si5351.dev_status.LOS);

  String body = "{";
  body += "\"lo_hz\":"        + String((unsigned long)current_lo_freq_hz)   + ",";
  body += "\"quad_hz\":"      + String((unsigned long)current_quad_freq_hz) + ",";
  body += "\"lo_mhz\":\""     + String(current_lo_freq_hz / 1000000.0, 6)   + "\",";
  body += "\"quad_mhz\":\""   + String(current_quad_freq_hz / 1000000.0, 6) + "\",";
  body += "\"hw\":\""         + hw + "\"";
  body += "}";

  sendText(client, 200, "application/json", body);
}

static uint64_t mhzToHzClamped(double mhz, uint64_t min_hz, uint64_t max_hz) {
  if (mhz < 0.0) mhz = 0.0;
  double hz_d = mhz * 1000000.0;
  if (hz_d < (double)min_hz) hz_d = (double)min_hz;
  if (hz_d > (double)max_hz) hz_d = (double)max_hz;
  return (uint64_t)(hz_d + 0.5);
}

// ==================== Setup ====================
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  Serial.begin(115200);
  delay(300);

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  si5351.init(SI5351_CRYSTAL_LOAD_8PF, 0, 0);
  si5351.drive_strength(SI5351_CLK0, SI5351_DRIVE_8MA);
  si5351.drive_strength(SI5351_CLK1, SI5351_DRIVE_8MA);
  si5351.drive_strength(SI5351_CLK2, SI5351_DRIVE_8MA);

  setQuadrature(current_quad_freq_hz);
  applyLO(current_lo_freq_hz);

  Serial.println("\nConnecting to WiFi...");
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  int max_wait = 30;
  while (max_wait-- > 0) {
    if (WiFi.status() == WL_CONNECTED) break;
    Serial.println("waiting...");
    delay(1000);
  }

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi failed");
    while (true) delay(1000);
  }

  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
  server.begin();
  Serial.println("Server listening on port 80");
}

// ==================== Loop ====================
void loop() {
  WiFiClient client = server.accept();
  if (!client) return;

  String requestLine = client.readStringUntil('\r');
  client.readStringUntil('\n');
  String path = getPathFromRequestLine(requestLine);

  // Drain remaining headers
  unsigned long t0 = millis();
  while (client.connected() && (millis() - t0) < 25) {
    while (client.available()) client.read();
  }

  if (path == "/" || startsWith(path, "/index")) {
    sendHtml(client);
  }
  else if (startsWith(path, "/api/status")) {
    sendJsonStatus(client);
  }
  else if (startsWith(path, "/api/clk2/set") || startsWith(path, "/api/lo/set")) {
    double mhz = 0.0;
    bool ok = getQueryDouble(path, "mhz", mhz) || getQueryDouble(path, "lo", mhz);
    if (!ok) {
      sendText(client, 400, "text/plain", "Missing query: mhz");
    } else {
      current_lo_freq_hz = mhzToHzClamped(mhz, LO_MIN_FREQ_HZ, LO_MAX_FREQ_HZ);
      applyLO(current_lo_freq_hz);
      Serial.print("LO set to ");
      Serial.print(current_lo_freq_hz / 1000000.0, 6);
      Serial.println(" MHz");
      sendText(client, 200, "text/plain", "OK");
    }
  }
  else if (startsWith(path, "/api/quad/set")) {
    double mhz = 0.0;
    bool ok = getQueryDouble(path, "mhz", mhz) || getQueryDouble(path, "quad_freq", mhz);
    if (!ok) {
      sendText(client, 400, "text/plain", "Missing query: mhz");
    } else {
      current_quad_freq_hz = mhzToHzClamped(mhz, QUAD_MIN_FREQ_HZ, QUAD_MAX_FREQ_HZ);
      setQuadrature(current_quad_freq_hz);
      Serial.print("QUAD set to ");
      Serial.print(current_quad_freq_hz / 1000000.0, 6);
      Serial.println(" MHz");
      sendText(client, 200, "text/plain", "OK");
    }
  }
  else if (startsWith(path, "/light/on")) {
    digitalWrite(LED_PIN, HIGH);
    sendText(client, 200, "text/plain", "OK");
  }
  else if (startsWith(path, "/light/off")) {
    digitalWrite(LED_PIN, LOW);
    sendText(client, 200, "text/plain", "OK");
  }
  else {
    sendText(client, 404, "text/plain", "Not Found");
  }

  client.stop();
}
