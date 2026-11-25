(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 39, short: "Alternating Current",
intro: R`Use phasors: R keeps V and i in phase, L makes V lead by 90°, C makes V lag by 90°. Series LCR is the most asked AC topic.`,
sec: [
["39.1 – 39.3 AC, Generator, RMS Values", [
  P(R`<b>AC generator</b>: a coil rotating in B gives $\varepsilon = NBA\omega\sin\omega t$, so $\varepsilon_0 = NBA\omega$.`),
  S(s.rect(10,40,30,80,'style="fill:var(--b4)"') + s.rect(180,40,30,80,'style="fill:var(--b2)"') + s.txt(20,84,"N") + s.txt(190,84,"S") + s.path("M80 40 L140 40 L140 110 L80 110 Z",'class="blue"') + s.line(110,110,110,140) + s.arcm(110,75,50,60,120,'class="red"') + s.txt(104,20,"ω"), 220, 145, "ε = NBAω sin ωt"),
  P(R`For a sinusoid, the average over a full cycle is 0 and the average over a half cycle is $\frac{2}{\pi}i_0$:`, R`i_{rms} = \frac{i_0}{\sqrt2},\qquad V_{rms} = \frac{V_0}{\sqrt2}`),
  G({ xl: "t", yl: "", xr: [0, 6.3], yr: [-1.2, 1.2], fns: [x => Math.sin(x), x => Math.sin(x) ** 2, x => 0.5], lab: ["i", "i²", "mean of i² = i₀²/2"] }),
  P(R`RMS by definition: $i_{rms} = \sqrt{\overline{i^2}}$. For a square wave $i_{rms} = i_0$. For $i = a + b\sin\omega t$: $\sqrt{a^2 + b^2/2}$. The time from a peak to the rms value is T/8.`),
  J(R`RMS from the definition for a non-sinusoidal or offset current, and "time to go from peak to rms".`, "2026 · 28 Jan · Morning; 2021 · 26 Feb · Morning; 2022 · 24 Jun · Morning")
]],
["39.4 – 39.6 Simple AC Circuits & Phasors", [
  T(["Element", "Opposition", "Phase of V w.r.t. i"], [["R", "R", "in phase"], ["L", "$X_L = \\omega L$", "V leads by 90°"], ["C", "$X_C = \\frac1{\\omega C}$", "V lags by 90°"]]),
  P(R`<b>Series LCR</b>:`, [R`Z = \sqrt{R^2 + (X_L - X_C)^2},\qquad \tan\phi = \frac{X_L - X_C}{R}`, R`i_0 = \frac{V_0}{Z}`], S(s.arr(30, 120, 140, 120) + s.arr(30, 120, 30, 30, 'class="red"') + s.arr(30, 120, 140, 50, 'class="blue"') + s.txt(100, 138, "V_R") + s.txt(0, 40, "V_L−V_C") + s.txt(90, 70, "V") + s.txt(60, 112, "φ"), 170, 145, "Phasor diagram")),
  P(R`RC circuit: $Z = \sqrt{R^2 + X_C^2}$, current leads. RL circuit: $Z = \sqrt{R^2 + X_L^2}$, current lags.`),
  S(s.arr(30,90,140,90,'class="blue"') + s.txt(60,108,"V_R (in phase with i)") + s.arr(30,90,30,20,'class="red"') + s.txt(36,28,"V_L") + s.arr(30,90,30,130) + s.txt(36,130,"V_C") + s.arr(30,90,140,50,'class="red"') + s.txt(144,50,"V") + s.arcm(30,90,32,0,20) + s.txt(68,84,"φ"), 200, 140, "Phasors: V² = V_R² + (V_L − V_C)²"),
  P(R`<b>Resonance</b> ($X_L = X_C$): Z = R is minimum, the current is maximum, φ = 0, power factor = 1.`, [R`\omega_0 = \frac1{\sqrt{LC}},\qquad Q = \frac{\omega_0L}{R} = \frac1R\sqrt{\frac LC} = \frac{\omega_0}{\Delta\omega}`], G({ xl: "ω/ω₀", yl: "i", xr: [0.2, 2.5], yr: [0, 1.1], fns: [x => 1 / Math.sqrt(1 + 25 * (x - 1 / x) ** 2), x => 0.6 / Math.sqrt(1 + 4 * (x - 1 / x) ** 2)], lab: ["small R (sharp)", "large R"] })),
  J(R`Resonance (L or C from ω₀, the current with R changed, X_L at resonance = √(L/C)), the phase angle when an element is switched out, and RC current change with frequency.`, "2025 · 22 Jan · Evening; 2024 · 8 Apr · Morning; 2026 · 5 Apr · Evening; 2026 · 2 Apr · Evening")
]],
["39.7 – 39.8 Power, Power Factor, Choke Coil", [
  P(R`Average power: only the resistor dissipates energy.`, [R`P = V_{rms}i_{rms}\cos\phi = i_{rms}^2R,\qquad \cos\phi = \frac RZ`]),
  G({ xl: "t", yl: "p", xr: [0, 9.4], yr: [-0.6, 1.1], fns: [x => Math.sin(x) * Math.sin(x - 0.8), x => 0.5 * Math.cos(0.8)], lab: ["p = vi", "average = V_rms i_rms cos φ"] }),
  P(R`<b>Wattless current</b> = $i_{rms}\sin\phi$ (the component ⊥ to V). Pure L or pure C: φ = 90°, P = 0.`),
  P(R`<b>Choke coil</b>: a large-L, small-R coil that limits AC through its reactance with almost no power loss (better than a resistor).`),
  J(R`Power factor R/Z (or from "power factor 0.5 ⇒ |X_L − X_C| = √3R"), and assertion–reason on the choke coil.`, "2026 · 6 Apr · Morning; 2026 · 4 Apr · Morning; 2025 · 29 Jan · Morning")
]],
["39.9 – 39.12 Hot-wire Meters, DC Motor, Transformer", [
  P(R`Hot-wire instruments read rms values (heating ∝ i²). DC motor: back emf $\varepsilon_b$, current $i = \frac{V - \varepsilon_b}{R}$, and maximum power when $\varepsilon_b = V/2$.`),
  P(R`<b>Transformer</b> (ideal, no losses):`, R`\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{i_p}{i_s},\qquad \eta = \frac{P_{out}}{P_{in}}`),
  S(s.path("M40 30 L180 30 L180 130 L40 130 Z M60 50 L160 50 L160 110 L60 110 Z",'class="fl2" style="fill-rule:evenodd"') + Array.from({length: 5}, (_, i) => s.line(30,52+i*12,52,56+i*12,'class="blue"')).join("") + Array.from({length: 9}, (_, i) => s.line(170,44+i*9,192,48+i*9,'class="red"')).join("") + s.txt(4,148,"primary N₁") + s.txt(140,148,"secondary N₂"), 220, 156, "V₂/V₁ = N₂/N₁ = i₁/i₂"),
  P(R`Losses: copper (i²R), eddy currents (laminated core), hysteresis (soft iron), flux leakage. Long-distance transmission uses high voltage to reduce the i²R loss.`),
  P(R`<b>LC oscillations</b>: $q = q_0\cos\omega t$, $\omega = 1/\sqrt{LC}$. Energy moves between C ($q^2/2C$) and L ($\frac12Li^2$). $i_{max} = \omega q_0$.`),
  G({ xl: "t", yl: "", xr: [0, 9.4], yr: [-1.2, 1.2], fns: [x => Math.cos(x), x => -Math.sin(x)], lab: ["q", "i (90° out of phase)"] }),
  J(R`Transformer efficiency or turns, and LC energy transfer / maximum current.`, "2024 · 1 Feb · Evening; 2026 · 21 Jan · Evening; 2022 · 29 Jul · Evening")
]]
],
pyq: {
  pat: [[R`Power factor R/Z`, "2026 · 6 Apr · Morning; 2024 · 27 Jan · Evening"], [R`Resonance: current, L or C, Q factor and bandwidth`, "2025 · 22 Jan · Evening; 2023 · 24 Jan · Morning"], [R`RMS by definition / peak-to-rms time`, "2026 · 28 Jan · Morning; 2022 · 24 Jun · Morning"], [R`RL transient`, "2026 · 6 Apr · Morning; 2022 · 29 Jul · Morning"], [R`LC oscillation energy`, "2026 · 21 Jan · Evening"], [R`Transformer`, "2024 · 1 Feb · Evening; 2021 · 24 Feb · Morning"]],
  trap: [R`Pure L or C ⇒ average power 0.`, R`Peak to rms takes T/8, not T/4.`],
  mist: [R`Mixing peak and rms values in $P = V I\cos\phi$.`]
}
});
})();
