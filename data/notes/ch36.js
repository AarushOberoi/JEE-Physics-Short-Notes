(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 36, short: "Permanent Magnets",
intro: R`A bar magnet is a magnetic dipole, the same as a current loop or a short solenoid. The chapter also covers the earth's field and the moving-coil galvanometer.`,
sec: [
["36.1 – 36.4 Bar Magnet as a Dipole", [
  P(R`A magnet has poles of strength m separated by the magnetic length 2l (≈ 0.85 × the geometric length). Magnetic moment $M = m\cdot2l$ (A m² = J/T), from S to N. Poles always come in pairs (no monopoles).`),
  S(s.rect(70,65,40,22,'style="fill:var(--b2)"') + s.rect(110,65,40,22,'style="fill:var(--b4)"') + s.txt(84,81,"S") + s.txt(124,81,"N") + [1,2,3].map(k => s.path("M150 " + (76-k*3) + " Q110 " + (76-30*k) + " 70 " + (76-k*3),'class="red"') + s.path("M150 " + (76+k*3) + " Q110 " + (76+30*k) + " 70 " + (76+k*3),'class="red"')).join("") + s.arr(114,59.5,106,59.5,'class="red"') + s.line(76,150,144,150,'class="thin"') + s.txt(60,164,"2l (magnetic length)"), 220, 168, "Outside the magnet lines go N → S"),
  P(R`In a uniform B:`, [R`\vec\tau = \vec M\times\vec B,\qquad U = -MB\cos\theta`, R`W_{\theta_1\to\theta_2} = MB(\cos\theta_1 - \cos\theta_2)`]),
  P(R`Field of a short magnet: axial (end-on) and equatorial (broadside-on), and at a general point.`, [R`B_{axial} = \frac{\mu_0}{4\pi}\frac{2M}{d^3},\qquad B_{eq} = \frac{\mu_0}{4\pi}\frac{M}{d^3}`, R`B(r,\theta) = \frac{\mu_0}{4\pi}\frac{M}{r^3}\sqrt{1 + 3\cos^2\theta}`], S(s.rect(60, 70, 80, 20, s.fill2) + s.txt(65, 85, "S") + s.txt(126, 85, "N") + s.path("M140 75 C 200 20, 0 20, 60 75", 'class="blue"') + s.path("M140 85 C 200 140, 0 140, 60 85", 'class="blue"'), 200, 140)),
  P(R`Magnetic scalar potential $V = \frac{\mu_0}{4\pi}\frac{M\cos\theta}{r^2}$, $B = -\frac{dV}{dr}$.`),
  J(R`Work to rotate a magnet (turning it from parallel to antiparallel costs $2MB$, not $MB$). Field at the midpoint of two perpendicular magnets (one axial, one equatorial).`, "2022 · 26 Jun · Evening; 2023 · 31 Jan · Morning; 2026 · 4 Apr · Evening")
]],
["36.5 – 36.7 Terrestrial Magnetism, Dip, Neutral Point", [
  P(R`The earth's field at a place is described by the <b>declination</b> (angle between the geographic and magnetic meridians), the <b>dip</b> δ (angle of B with the horizontal) and the horizontal component $B_H$:`, [R`B_H = B\cos\delta,\quad B_V = B\sin\delta,\quad \tan\delta = \frac{B_V}{B_H}`]),
  S(s.line(20,40,210,40) + s.arr(60,40,180,110,'class="red"') + s.arr(60,40,180,40,'class="blue"') + s.arr(180,40,180,110,'class="blue"') + s.arcm(60,40,32,-30,0) + s.txt(98,54,"δ") + s.txt(110,32,"B_H") + s.txt(186,80,"B_V") + s.txt(96,100,"B"), 215, 120, "Dip δ: tan δ = B_V/B_H"),
  P(R`<b>Apparent dip</b> in a vertical plane at angle θ to the meridian: $\tan\delta' = \frac{\tan\delta}{\cos\theta}$. In two perpendicular planes: $\cot^2\delta = \cot^2\delta_1 + \cot^2\delta_2$.`),
  P(R`<b>Neutral point</b>: where the magnet's field cancels $B_H$ (on the axial line when N points south, on the equatorial line when N points north).`)
]],
["36.8 – 36.10 Tangent Galvanometer, Moving-Coil Galvanometer, Shunt", [
  P(R`<b>Tangent galvanometer</b>: the coil's field ⊥ $B_H$, so $\frac{\mu_0ni}{2r} = B_H\tan\theta$.`),
  S(s.line(100,20,100,140,'style="stroke-width:4;stroke:var(--accent)"') + s.arr(100,80,100,30) + s.txt(106,34,"B_H (N)") + s.arr(100,80,160,80,'class="red"') + s.txt(140,98,"B_coil") + s.line(100,80,140,30,'style="stroke-width:3"') + s.arcm(100,80,26,51,90) + s.txt(106,56,"θ") + s.txt(24,150,"coil in the meridian (top view)"), 200, 158, "B_coil = B_H tan θ"),
  P(R`<b>Moving-coil galvanometer</b>: a radial field keeps the torque $niAB$ independent of θ. It is balanced by the spring torque $k\theta$:`, [R`niAB = k\theta\ \Rightarrow\ i = \frac{k}{nAB}\theta`, R`\text{current sensitivity } \frac\theta i = \frac{nAB}{k},\qquad \text{voltage sensitivity } \frac{\theta}{V} = \frac{nAB}{kG}`]),
  S(s.path("M10 30 L60 30 Q40 80 60 130 L10 130 Z",'style="fill:var(--b4)"') + s.path("M210 30 L160 30 Q180 80 160 130 L210 130 Z",'style="fill:var(--b2)"') + s.circ(110,80,28,'class="fl2"') + [150,170,190,210,-30,-10,10,30].map(a => { const c = Math.cos(a * Math.PI / 180), d = Math.sin(a * Math.PI / 180); return s.line(110+30*c,80-30*d,110+52*c,80-52*d,'class="red"'); }).join("") + s.txt(22,84,"N") + s.txt(184,84,"S") + s.txt(96,84,"core"), 220, 140, "Radial field: τ = niAB at every angle"),
  P(R`Increasing the number of turns raises the current sensitivity, but the voltage sensitivity may not change (G rises too). <b>Shunt</b>: $S = \frac{i_gG}{i - i_g}$ (low resistance in parallel → ammeter).`),
  J(R`Galvanometer conversion with two data points (shunted full-scale current + series voltmeter range) gives G. Figure of merit and half-deflection method (Experimental Skill).`, "2026 · 6 Apr · Evening; 2026 · 4 Apr · Morning")
]],
["36.11 – 36.15 Magnetometers & Gauss's Law for Magnetism", [
  P(R`<b>Tangent law</b>: a needle in two perpendicular fields settles at $\tan\theta = B/B_H$. <b>Deflection magnetometer</b> compares magnetic moments. <b>Oscillation (vibration) magnetometer</b>:`, R`T = 2\pi\sqrt{\frac{I}{MB_H}}\quad(\text{oscillation rate}\propto\sqrt{B})`),
  P(R`<b>Gauss's law for magnetism</b>: no isolated poles exist, and field lines are closed loops.`, R`\oint\vec B\cdot d\vec S = 0`)
]]
],
pyq: {
  pat: [[R`Work/energy to rotate a magnet`, "2022 · 26 Jun · Evening; 2023 · 31 Jan · Morning"], [R`Apparent vs true dip; total field from dip`, "2022 · 27 Jul · Morning; 2022 · 29 Jun · Morning"], [R`Oscillation magnetometer rate ratio`, "2022 · 27 Jul · Evening; 2023 · 12 Apr · Morning"], [R`Galvanometer conversions`, "2026 · 6 Apr · Evening; 2024 · 6 Apr · Evening"]],
  trap: [R`Parallel → antiparallel costs 2MB.`, R`The equatorial field is opposite in direction to M.`]
},
aprFilter: "bar magnet|Galvanometer|galvanometer|Voltmeter|voltmeter"
});
})();
