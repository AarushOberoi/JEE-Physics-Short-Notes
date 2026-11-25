(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 16, short: "Sound Waves",
intro: R`Sound is a longitudinal mechanical wave. It can be described as a displacement wave or as a pressure wave.`,
sec: [
["16.1 – 16.2 Nature; Displacement & Pressure Waves", [
  P(R`Sound needs a medium (it can't travel through a vacuum). Audible range: about 20 Hz – 20 kHz. Below that is infrasonic, above it ultrasonic.`),
  P(R`If the displacement wave is $s = s_0\sin\omega(t - x/v)$, the pressure wave is $90^\circ$ out of phase with it:`, R`\delta P = -B\frac{\partial s}{\partial x},\qquad \delta P_0 = Bks_0 = \rho v\omega s_0`),
  G({ xl: "x", yl: "", xr: [0, 9.4], yr: [-1.3, 1.3], fns: [x => Math.sin(x), x => Math.cos(x)], lab: ["displacement s", "pressure δP (90° apart)"] }),
  P(R`Pressure nodes are displacement antinodes, and the other way round.`)
]],
["16.3 – 16.5 Speed of Sound", [
  P(R`In a medium with bulk modulus B (or Young's modulus Y for a solid rod) and density ρ:`, [R`v = \sqrt{\frac B\rho}\ (\text{fluid}),\qquad v = \sqrt{\frac Y\rho}\ (\text{rod})`]),
  P(R`<b>Newton's formula</b> assumed isothermal compression, $v = \sqrt{P/\rho}$ (≈ 280 m/s, too low). <b>Laplace's correction</b>: the compressions are adiabatic.`, R`v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma RT}{M}}`),
  P(R`<b>Effect of pressure</b>: none at constant T (P/ρ stays constant). <b>Temperature</b>: $v\propto\sqrt T$ (in K). <b>Humidity</b>: moist air is less dense, so sound is faster.`),
  G({ xl: "T (K)", yl: "v", xr: [0, 4], yr: [0, 2.2], fns: [x => Math.sqrt(x)], lab: ["v ∝ √T, independent of P"] }),
  J(R`Sound speed in an ideal gas depends on $\sqrt{\gamma RT/M}$, <b>not on pressure</b> (assertion–reason). Sound is faster in solids because B or Y is much larger, not because the density is smaller.`, "2023 · 6 Apr · Evening; 2025 · 28 Jan · Morning")
]],
["16.6 – 16.7 Intensity & Loudness", [
  P(R`Intensity $I = \frac{\delta P_0^2}{2\rho v}$ ∝ (amplitude)². <b>Sound level</b> in decibels:`, R`\beta = 10\log_{10}\frac{I}{I_0},\qquad I_0 = 10^{-12}\ \text{W m}^{-2}`),
  P(R`Pitch ↔ frequency, loudness ↔ intensity, quality (timbre) ↔ overtones (waveform). Point source: $I\propto 1/r^2$.`)
]],
["16.8 – 16.10 Interference, Standing Waves, Organ Pipes", [
  P(R`Two sources with path difference $\Delta x$: phase difference $\delta = \frac{2\pi}{\lambda}\Delta x$. Constructive for $\Delta x = n\lambda$, destructive for $(n+\frac12)\lambda$.`),
  S(s.rect(10,30,16,24,'class="fl2"') + s.rect(10,100,16,24,'class="fl2"') + s.txt(30,28,"S₁") + s.txt(30,142,"S₂") + s.line(26,42,190,80,'class="blue"') + s.line(26,112,190,80,'class="red"') + s.dot(190,80) + s.txt(194,84,"P") + s.txt(60,160,"Δx = S₂P − S₁P"), 210, 166, "Loud: Δx = nλ · Quiet: Δx = (n + ½)λ"),
  P(R`<b>Open (both ends) pipe</b>: antinodes at both ends, so all harmonics.`, R`\nu_n = \frac{nv}{2L},\quad n = 1,2,3\ldots`, S(s.rect(20, 40, 180, 40) + s.path("M20 45 Q65 75 110 45 Q155 15 200 45", 'class="red"') + s.path("M20 75 Q65 45 110 75 Q155 105 200 75", 'class="red"') + s.txt(70, 105, "open pipe, 2nd harmonic"), 220, 115)),
  P(R`<b>Closed (one end) pipe</b>: a node at the closed end and an antinode at the open end, so <b>only odd</b> harmonics.`, R`\nu = \frac{(2n+1)v}{4L},\quad n = 0,1,2\ldots`, S(s.rect(20, 40, 180, 40) + s.line(20, 35, 20, 85, 'style="stroke-width:5"') + s.path("M20 60 Q110 60 200 40", 'class="red"') + s.path("M20 60 Q110 60 200 80", 'class="red"') + s.txt(60, 105, "closed pipe, fundamental (λ/4)"), 220, 115)),
  P(R`<b>End correction</b>: the antinode is slightly outside the open end, $e\approx0.6r$. Effective length $L + e$ (closed) or $L + 2e$ (open).`),
  S(s.line(20,40,160,40) + s.line(20,90,160,90) + s.line(20,40,20,90,'style="stroke-width:3"') + s.path(Array.from({length:41},(_,k)=>(k?'L':'M')+(20+4*k)+' '+(65-25*Math.sin(Math.PI/2*k/40)).toFixed(1)).join(' '),'class="blue"') + s.path(Array.from({length:41},(_,k)=>(k?'L':'M')+(20+4*k)+' '+(65+25*Math.sin(Math.PI/2*k/40)).toFixed(1)).join(' '),'class="blue"') + s.line(180,30,180,100,'class="red" style="stroke-dasharray:3 3"') + s.txt(160,118,"e ≈ 0.6r") + s.txt(2,108,"closed"), 210, 124, "The antinode lies just outside the open end"),
  P(R`<b>Resonance tube</b> (Experimental Skill): successive resonance lengths $l_1$, $l_2$ give the speed without needing the end correction.`, [R`v = 2\nu(l_2 - l_1),\qquad e = \frac{l_2 - 3l_1}{2}`]),
  S(s.path("M76 0 L76 10 Q80 14 84 10 L84 0") + s.path("M60 20 L60 160 L100 160 L100 20") + s.rect(61,70,38,89,'class="fl2"') + s.line(56,110,104,110,s.dash) + s.txt(106,74,"water at l₁ (1st resonance)") + s.txt(106,114,"lowered to l₂ (2nd)") + s.line(50,20,50,70,'class="thin"') + s.txt(36,48,"l₁"), 290, 166, "l₂ − l₁ = λ/2 ⇒ v = 2ν(l₂ − l₁)"),
  P(R`<b>Kundt's tube</b> measures the speed of sound in a gas or rod from the spacing of the powder heaps (= λ/2).`),
  J(R`Closed vs open pipe questions ("the first overtone of an open pipe equals the fundamental of a closed pipe", harmonic ratios) are asked repeatedly.`, "2026 · 24 Jan · Evening; 2024 · 31 Jan · Morning; 2022 · 25 Jun · Morning")
]],
["16.11 – 16.12 Beats & Diffraction", [
  P(R`Two sounds with slightly different frequencies produce <b>beats</b>: the intensity rises and falls $|\nu_1 - \nu_2|$ times per second.`, R`\nu_{beat} = |\nu_1 - \nu_2|`, G({ xl: "t", yl: "y", xr: [0, 40], yr: [-2.2, 2.2], fns: [x => Math.sin(2 * x) + Math.sin(2.3 * x), x => 2 * Math.cos(0.15 * x)], lab: ["sum", "envelope"] })),
  P(R`<b>Loading</b> a tuning fork with wax lowers its frequency. <b>Filing</b> it raises the frequency. Use this to decide the sign of the unknown frequency.`),
  P(R`Sound diffracts easily around obstacles because its wavelength (cm to m) is comparable to everyday objects.`),
  J(R`Beats with a waxed or filed fork, and resonance-tube water levels, appear most years.`, "2026 · 28 Jan · Evening; 2021 · 26 Feb · Evening; 2022 · 29 Jun · Evening")
]],
["16.13 – 16.16 Doppler Effect, Sonic Boom, Musical Scale, Acoustics", [
  W(R`The <b>Doppler effect is not in the current JEE Main syllabus</b> (removed after 2023). Formula for reference: $\nu' = \nu\frac{v + v_o}{v - v_s}$ (observer moving towards, source moving towards).`),
  P(R`Sonic boom: a source faster than sound produces a shock-wave cone with $\sin\theta = v/v_s$ (Mach number $v_s/v$). Musical scale and acoustics of buildings (reverberation time, Sabine's formula $T = 0.16V/\sum a_iS_i$) are for reading only.`),
  S([20,45,70,95].map(x => s.circ(x,80,(130-x)*0.6,'class="thin"')).join("") + s.dot(130,80) + s.line(130,80,34,8,'class="red"') + s.line(130,80,34,152,'class="red"') + s.arr(136,80,176,80,'class="blue"') + s.txt(150,72,"v_s") + s.arcm(130,80,26,143,180) + s.txt(94,74,"θ"), 190, 160, "Shock cone: sin θ = v_sound / v_source")
]]
],
pyq: {
  pat: [[R`Closed vs open pipe harmonics`, "2026 · 24 Jan · Evening; 2024 · 31 Jan · Morning"], [R`Beats with loaded/filed fork`, "2026 · 28 Jan · Evening; 2021 · 26 Feb · Evening"], [R`Resonance tube, water level`, "2022 · 29 Jun · Evening; 2021 · 25 Feb · Morning"], [R`Speed of sound vs T, γ, M`, "2023 · 6 Apr · Evening"]],
  trap: [R`A closed pipe has only odd harmonics. Its first overtone is the 3rd harmonic.`, R`Speed of sound doesn't depend on pressure at constant T.`],
  mist: [R`Using T in °C in $v\propto\sqrt T$.`]
},
aprFilter: "^$"
});
})();
