(function () {
"use strict";
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const BOOK = window.BOOK, P5 = window.PYQ5, YRS = window.PYQ_YEARS, NC = window.NCERT;
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let done = store.get("ncert-done", {});
const APR = (window.PYQS || []).map(([p, q, ch, concept, combo]) => ({ p, q, ch, concept, combo }));

// ---------- theme ----------
const root = document.documentElement;
const th = store.get("jee-theme", null); if (th) root.dataset.theme = th;
$("#themeBtn").onclick = () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark"; store.set("jee-theme", root.dataset.theme);
};

// ---------- lazy chapter loading ----------
const loading = {};
function loadCh(n) {
  if (NB.chapters[n]) return Promise.resolve(NB.chapters[n]);
  if (loading[n]) return loading[n];
  loading[n] = new Promise(res => {
    const s = document.createElement("script");
    s.src = `data/notes/ch${String(n).padStart(2, "0")}.js?v=9`;
    s.onload = () => res(NB.chapters[n] || null);
    s.onerror = () => res(null);
    document.head.appendChild(s);
  });
  return loading[n];
}

// ---------- helpers ----------
const sum = a => a.reduce((x, y) => x + y, 0);
function chCount(b) { // 5-yr total for a book chapter (shared keys counted once each)
  return sum(b.pyq.map(k => sum(P5[k].n)));
}
function prio(b) {
  if (b.s === "out") return ["Not in JEE Main syllabus", "out"];
  const per = b.pyq.length ? Math.max(...b.pyq.map(k => sum(P5[k].n) / 6)) : 0;
  return per >= 25 ? ["Very high weightage", "hi"] : per >= 15 ? ["High weightage", "hi"] : per >= 8 ? ["Medium weightage", ""] : ["Low weightage", ""];
}

// ---------- sidebar ----------
function ncPrio(c) {
  if (c.out) return ["Not in JEE Main syllabus", "out"];
  const bs = c.parts.map(p => BOOK.find(b => b.n === p.ch)).filter(Boolean);
  const per = Math.max(0, ...bs.flatMap(b => b.pyq.map(k => sum(P5[k].n) / 6)));
  return per >= 25 ? ["Very high weightage", "hi"] : per >= 15 ? ["High weightage", "hi"] : per >= 8 ? ["Medium weightage", ""] : ["Low weightage", ""];
}
function sidebar(active) {
  const inS = NC.filter(c => !c.out), nd = inS.filter(c => done[c.id]).length;
  const link = c => `<a class="nav-link ${active === c.id ? "active" : ""} ${c.out ? "out" : ""}" href="#/c/${c.id}"><span class="no">${c.n}</span><span class="nm">${esc(c.t)}</span>${done[c.id] ? '<span class="dn">✓</span>' : ""}</a>`;
  $("#sidebar").innerHTML = `
  <a class="nav-link ${active === "home" ? "active" : ""}" href="#/"><span class="no">◆</span><span class="nm">All Chapters</span></a>
  <div class="progress">Revised ${nd} / ${inS.length} chapters<div class="bar"><i style="width:${nd / inS.length * 100}%"></i></div></div>
  <div class="nav-title">Class 11 Physics</div>${NC.filter(c => c.cls === 11).map(link).join("")}
  <div class="nav-title">Class 12 Physics</div>${NC.filter(c => c.cls === 12).map(link).join("")}`;
}

// ---------- graph plotter ----------
const PAL = ["var(--ink)", "var(--red)", "var(--accent)", "var(--good)", "var(--hi)"];
function plot(g) {
  const W = 260, H = 170, L = 26, B = 22, T = 8, Rr = 8;
  const [x0, x1] = g.xr, [y0, y1] = g.yr;
  const sx = x => L + (x - x0) / (x1 - x0) * (W - L - Rr), sy = y => H - B - (y - y0) / (y1 - y0) * (H - B - T);
  let paths = "";
  g.fns.forEach((f, i) => {
    let d = "", pen = false;
    for (let k = 0; k <= 240; k++) {
      const x = x0 + (x1 - x0) * k / 240; let y; try { y = f(x); } catch (e) { y = NaN; }
      if (!isFinite(y)) { pen = false; continue; }
      y = Math.max(y0 - (y1 - y0) * .04, Math.min(y1 + (y1 - y0) * .04, y));
      d += (pen ? "L" : "M") + sx(x).toFixed(1) + " " + sy(y).toFixed(1); pen = true;
    }
    paths += `<path d="${d}" style="stroke:${PAL[i % PAL.length]};stroke-width:2.2"/>`;
  });
  const ax = (x0 < 0 && x1 > 0) ? sx(0) : L, ay = (y0 < 0 && y1 > 0) ? sy(0) : H - B;
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
   <defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" style="fill:currentColor;stroke:none"/></marker></defs>
   <line x1="${L - 4}" y1="${ay}" x2="${W - 2}" y2="${ay}" marker-end="url(#ah2)"/><line x1="${ax}" y1="${H - B + 4}" x2="${ax}" y2="2" marker-end="url(#ah2)"/>
   <text x="${W - 4}" y="${ay + 16}" text-anchor="end">${esc(g.xl)}</text><text x="${ax + 6}" y="12">${esc(g.yl)}</text>
   ${paths}</svg>`;
  const labs = (g.lab || []).map((l, i) => l ? `<span style="color:${PAL[i % PAL.length]}">— ${esc(l)}</span>` : "").join(" ");
  return `<div class="dg">${g.t ? `<div class="cap" style="font-weight:700;color:var(--ink)">${esc(g.t)}</div>` : ""}${svg}${labs ? `<div class="cap">${labs}</div>` : ""}</div>`;
}
function sketch(d) {
  return `<div class="dg"><svg viewBox="0 0 ${d.w} ${d.h}" width="${d.w}" height="${d.h}"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" style="fill:currentColor;stroke:none"/></marker></defs>${d.svg}</svg>${d.cap ? `<div class="cap">${d.cap}</div>` : ""}</div>`;
}
const ARROW = `<svg class="arrow" viewBox="0 0 70 40"><path d="M4 30 C 22 8, 44 6, 60 18" style="stroke:var(--red);stroke-width:3.2;fill:none;stroke-linecap:round"/><path d="M50 10 L62 19 L48 24" style="stroke:var(--red);stroke-width:3.2;fill:none;stroke-linecap:round;stroke-linejoin:round"/></svg>`;
function tex(s) {
  if (window.katex) { try { return katex.renderToString(s, { displayMode: true, throwOnError: false, trust: false }); } catch (e) {} }
  return `<code>${esc(s)}</code>`;
}
const BOX = ["var(--b1)", "var(--b2)", "var(--b3)", "var(--b4)", "var(--b5)", "var(--b6)"];
const HL = ["var(--blob3)", "var(--blob2)", "var(--blob1)", "var(--blob4)", "var(--blob5)", "var(--blob6)"];

// ---------- chapter renderer ----------
function renderItems(items, st) {
  const merged = [];
  items.forEach(it => {
    const prev = merged[merged.length - 1];
    if (prev && prev.k === "P" && !prev.d && (it.k === "S" || it.k === "G")) prev.d = it.k === "G" ? { k: "G", spec: it.spec } : it;
    else merged.push(it.k === "P" ? Object.assign({}, it) : it);
  });
  return merged.map(it => {
    switch (it.k) {
      case "P": {
        st.n++; const c = BOX[st.n % BOX.length];
        const fs = it.f ? (Array.isArray(it.f) ? it.f : [it.f]) : [];
        const boxes = fs.map(f => `<div><span class="fbox" style="--bc:${c}">${tex(f)}</span></div>`).join("");
        const dg = it.d ? (it.d.k === "G" ? plot(it.d.spec) : sketch(it.d)) : "";
        return `<div class="pt ${dg ? "wd" : ""}"><span class="num">${st.n}</span><div class="tx"><p>${it.t || ""}</p>${boxes}</div>${dg ? ARROW + dg : ""}</div>`;
      }
      case "B": { st.b++; return `<div class="bonly"><span class="fbox" style="--bc:${BOX[(st.b + 2) % BOX.length]}">${tex(it.f)}</span>${it.cap ? `<div class="fcap">${it.cap}</div>` : ""}</div>`; }
      case "J": return `<div class="jee">${it.t}${it.ref ? `<span class="ref">Asked: ${it.ref}</span>` : ""}</div>`;
      case "W": return `<div class="warn">${it.t}</div>`;
      case "D": return `<details class="drv"><summary>Derivation · ${it.title}</summary><ol>${it.steps.map(s => `<li>${s}</li>`).join("")}</ol></details>`;
      case "T": return `<div class="tw"><table class="nt"><tr>${it.head.map(h => `<th>${h}</th>`).join("")}</tr>${it.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
      case "L": return `<ul class="nl">${it.items.map(x => `<li>${x}</li>`).join("")}</ul>`;
      case "GR": return `<div class="grow"><div class="grt">${it.title}</div><div class="gwrap">${it.specs.map(plot).join("")}</div></div>`;
      case "G": return `<div class="gwrap">${plot(it.spec)}</div>`;
      case "S": return `<div class="gwrap">${sketch(it)}</div>`;
      default: return "";
    }
  }).join("");
}
function titleHTML(t) {
  const blobs = ["var(--blob1)", "var(--blob2)", "var(--blob3)", "var(--blob4)", "var(--blob5)", "var(--blob6)"];
  return t.split(" ").map((w, i) => `<span style="--bc:${blobs[i % blobs.length]}">${esc(w)}</span>`).join(" ");
}
const stripNo = h => String(h).replace(/^\d+\.\d+(\s*[–-]\s*\d+\.\d+)?\s+/, "");
async function renderNC(id) {
  const c = NC.find(x => x.id === id); if (!c) return renderHome();
  sidebar(id);
  $("#main").innerHTML = `<div class="loading">Opening ${esc(c.t)}…</div>`;
  const notes = await Promise.all(c.parts.map(p => loadCh(p.ch)));
  const [pl, pc] = ncPrio(c);
  const st = { n: 0, b: 0 };
  let body = "", hi = 0, corners = "";
  c.parts.forEach((p, k) => {
    const ch = notes[k]; if (!ch) return;
    if (!p.secs && ch.intro && !c.out) body += `<p style="text-align:center;margin-top:-4px">${ch.intro}</p>`;
    if (c.out && k === 0 && ch.intro) body += `<p style="text-align:center;margin-top:-4px">${ch.intro}</p>`;
    ch.sec.forEach(([h, items], i) => {
      if (p.secs && !p.secs.includes(i)) return;
      const its = items.map(it => it.k === "P" && it.t ? Object.assign({}, it, { t: it.t.replace(/^\d+\.\d+\s+/, "") }) : it);
      body += `<section class="sec"><h2 style="--hc:${HL[hi++ % HL.length]}">${stripNo(h)}</h2>${renderItems(its, st)}</section>`;
    });
    if (p.pyq && ch.pyq) corners += cornerParts(ch, BOOK.find(b => b.n === p.ch));
  });
  if (corners) body += `<div class="corner"><h2>JEE Main Focus</h2>${corners}</div>`;
  const list = NC, idx = list.indexOf(c), prev = list[idx - 1], next = list[idx + 1];
  $("#main").innerHTML = `<article class="sheet">
    <div class="unit-line">Class ${c.cls} · Chapter ${c.n}</div>
    <h1 class="ttl">${titleHTML(c.t)}</h1>
    <div class="meta"><span class="chip">Class ${c.cls} Physics</span><span class="chip ${pc}">${pl}</span></div>
    ${!c.out ? `<div class="actions"><button class="btn ${done[id] ? "on" : ""}" id="doneBtn">${done[id] ? "✓ Revised" : "Mark revised"}</button><button class="btn" onclick="window.print()">Print / PDF</button></div>` : ""}
    ${body}
    <div style="display:flex;justify-content:space-between;gap:10px;margin-top:30px;font-family:Inter;font-size:13px">
      ${prev ? `<a class="btn" href="#/c/${prev.id}">← ${esc(prev.t)}</a>` : "<span></span>"}${next ? `<a class="btn" href="#/c/${next.id}">${esc(next.t)} →</a>` : ""}</div>
  </article>`;
  const db = $("#doneBtn"); if (db) db.onclick = () => { done[id] = !done[id]; store.set("ncert-done", done); renderNC(id); };
  if (window.renderMathInElement) renderMathInElement($("#main"), { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }], throwOnError: false });
  window.scrollTo(0, 0);
}
function cornerParts(c, b) {
  const p = c.pyq;
  const apr = b ? APR.filter(x => b.old.includes(x.ch) && (!c.aprFilter || new RegExp(c.aprFilter, "i").test(x.concept + " " + x.combo))) : [];
  if (!p.pat && !p.combo && !p.trap && !p.mist && !apr.length) return "";
  return `${p.pat ? `<h3>✎ Question patterns asked again and again</h3>${p.pat.map(([t, r]) => `<div class="pat">${t}${r ? `<span class="r">e.g. ${r}</span>` : ""}</div>`).join("")}` : ""}
   ${p.combo ? `<h3>⇄ Concepts combined in one question</h3><ul class="nl" style="margin-left:0">${p.combo.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
   ${p.trap ? `<h3>⚑ Tricky points</h3><ul class="nl" style="margin-left:0">${p.trap.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
   ${p.mist ? `<h3>✗ Mistakes to avoid</h3><ul class="nl" style="margin-left:0">${p.mist.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
   ${apr.length ? `<h3>📄 Asked in April 2026</h3><ul class="apr">${apr.map(x => `<li><span class="s">${PAPER_SHORT[x.p]} · Q${x.q}</span> — ${esc(x.concept)}</li>`).join("")}</ul>` : ""}`;
}
// ---------- home / dashboard ----------
function renderHome() {
  sidebar("home");
  $("#main").innerHTML = `<div class="home" style="max-width:1080px;margin:0 auto">
  <h1>JEE Main Physics: Short Notes <span class="h1by">by Aarush Oberoi</span></h1>
  <h2>Class 11 Physics</h2>${tiles(11)}
  <h2 style="margin-top:18px">Class 12 Physics</h2>${tiles(12)}
  </div>`;
}
function tiles(cls) {
  return `<div class="ch-grid">${NC.filter(c => c.cls === cls).map(c => { const [pl] = ncPrio(c); return `<a class="card ch-tile ${c.out ? "out" : ""}" href="#/c/${c.id}"><div class="no">Chapter ${c.n}${done[c.id] ? " · ✓ revised" : ""}</div><div class="nm">${esc(c.t)}</div><div class="mt">${pl}</div></a>`; }).join("")}</div>`;
}

// ---------- search (loads all chapters in background) ----------
let index = null;
async function buildIndex() {
  if (index) return index;
  await Promise.all(NC.flatMap(c => c.parts.map(p => loadCh(p.ch))));
  index = [];
  const strip = s => String(s || "").replace(/<[^>]+>/g, " ").replace(/\$/g, "");
  NC.forEach(c => {
    index.push({ n: c.id, label: c.t, sub: `Class ${c.cls} · Chapter ${c.n}`, text: c.t.toLowerCase() });
    c.parts.forEach(p => {
      const ch = NB.chapters[p.ch]; if (!ch) return;
      ch.sec.forEach(([h, items], i) => {
        if (p.secs && !p.secs.includes(i)) return;
        const hh = strip(h).replace(/^\s*\d+\.\d+(\s*[–-]\s*\d+\.\d+)?\s+/, "");
        index.push({ n: c.id, label: hh, sub: `Class ${c.cls} · ${c.t}`, text: (hh + " " + items.map(x => strip(x.t) + " " + (x.f || "")).join(" ")).toLowerCase() });
      });
    });
  });
  return index;
}
const sIn = $("#search"), sOut = $("#searchResults"); let hits = [], sel = 0;
sIn.addEventListener("focus", buildIndex);
sIn.addEventListener("input", async () => {
  const q = sIn.value.trim().toLowerCase(); if (q.length < 2) { sOut.hidden = true; return; }
  const idx = await buildIndex(); const terms = q.split(/\s+/);
  hits = idx.filter(e => terms.every(t => e.text.includes(t))).sort((a, b) => (b.label.toLowerCase().includes(q)) - (a.label.toLowerCase().includes(q))).slice(0, 14); sel = 0;
  sOut.innerHTML = hits.length ? hits.map((h, i) => `<a href="#/c/${h.n}" class="${i ? "" : "active"}">${esc(h.label)}<small>${esc(h.sub)}</small></a>`).join("") : "<a>No matches</a>";
  sOut.hidden = false;
});
sIn.addEventListener("keydown", e => {
  const ls = sOut.querySelectorAll("a");
  if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + ls.length) % ls.length; ls.forEach((l, i) => l.classList.toggle("active", i === sel)); }
  if (e.key === "Enter" && hits[sel]) { location.hash = `#/c/${hits[sel].n}`; sOut.hidden = true; sIn.blur(); }
  if (e.key === "Escape") { sOut.hidden = true; sIn.blur(); }
});
sOut.addEventListener("click", () => sOut.hidden = true);
document.addEventListener("click", e => { if (!e.target.closest(".search-wrap")) sOut.hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "/" && document.activeElement !== sIn) { e.preventDefault(); sIn.focus(); } });
$("#menuBtn").onclick = () => document.body.classList.toggle("nav-open");
$("#scrim").onclick = () => document.body.classList.remove("nav-open");

function route() {
  document.body.classList.remove("nav-open");
  const p = location.hash.replace(/^#\/?/, "").split("/");
  if (p[0] === "c") renderNC(p[1]);
  else if (p[0] === "ch") { const c = NC.find(x => x.parts.some(q => q.ch === +p[1])); if (c) location.replace("#/c/" + c.id); else renderHome(); }
  else renderHome();
}
window.addEventListener("hashchange", route);
route();
})();
