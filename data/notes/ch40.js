(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 40, short: "Electromagnetic Waves",
intro: R`A short chapter, asked in almost every shift. E₀ = cB₀, the direction of E × B, intensity, pressure, and the spectrum.`,
sec: [
["40.1 – 40.3 Displacement Current & Continuity", [
  P(R`Ampere's law fails between the plates of a charging capacitor. Maxwell added the <b>displacement current</b>:`, [R`i_d = \varepsilon_0\frac{d\Phi_E}{dt} = C\frac{dV}{dt}`, R`\oint\vec B\cdot d\vec l = \mu_0(i_c + i_d)`]),
  S(s.line(10,80,80,80) + s.line(80,30,80,130,'style="stroke-width:4"') + s.line(130,30,130,130,'style="stroke-width:4"') + s.line(130,80,210,80) + s.arr(20,72,60,72,'class="blue"') + s.txt(30,64,"i_c") + [45,65,95,115].map(y => s.arr(86,y,124,y,'class="red" style="stroke-dasharray:3 3"')).join("") + s.txt(80,152,"i_d = ε₀ dΦ_E/dt") + s.arr(150,72,190,72,'class="blue"'), 220, 158, "The displacement current fills the gap"),
  P(R`$i_c + i_d$ is continuous everywhere. Between the plates of a charging capacitor, $i_d$ equals the current in the connecting wires.`),
  J(R`Displacement current $C\,dV/dt$ appears in most years.`, "2026 · 5 Apr · Morning; 2025 · 23 Jan · Evening")
]],
["40.4 Maxwell's Equations & Plane EM Waves", [
  L([R`$\oint\vec E\cdot d\vec S = q/\varepsilon_0$ (Gauss)`, R`$\oint\vec B\cdot d\vec S = 0$ (no monopoles)`, R`$\oint\vec E\cdot d\vec l = -\frac{d\Phi_B}{dt}$ (Faraday)`, R`$\oint\vec B\cdot d\vec l = \mu_0i + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$ (Ampere–Maxwell)`]),
  P(R`They predict transverse waves with $\vec E\perp\vec B\perp\vec k$, in phase, moving along $\vec E\times\vec B$:`, [R`c = \frac{1}{\sqrt{\mu_0\varepsilon_0}},\qquad \frac{E_0}{B_0} = c,\qquad v = \frac{c}{\sqrt{\mu_r\varepsilon_r}} = \frac cn`, R`\vec B = \frac{\hat k\times\vec E}{c} = \frac{\vec k\times\vec E}{\omega}`], S(s.arr(20, 80, 210, 80) + s.path("M20 80 Q 45 20 70 80 T 120 80 T 170 80", 'class="red"') + s.path("M20 80 Q 45 120 70 80 T 120 80 T 170 80", 'class="blue"') + s.txt(40, 25, "E") + s.txt(40, 120, "B") + s.txt(195, 72, "k"), 220, 135)),
  P(R`EM waves are produced by <b>accelerated charges</b> (an oscillating charge radiates at its own frequency). They need no medium.`),
  S(s.line(30,30,30,130,'style="stroke-width:4"') + s.arr(40,60,40,100,'class="blue"') + s.arr(48,100,48,60,'class="blue"') + [40,70,100].map(r => s.arcm(30,80,r,-50,50,'class="red"')).join("") + s.txt(4,148,"oscillating charges"), 160, 155, "Accelerated charges radiate"),
  J(R`Direction questions (find $\vec E$ from $\vec B$, or the reverse, using $\vec E\times\vec B\parallel\vec k$), matching Maxwell's equations, and speed in a medium from μᵣ, εᵣ.`, "2026 · 4 Apr · Evening; 2025 · 23 Jan · Morning; 2023 · 25 Jan · Evening; 2026 · 23 Jan · Evening")
]],
["40.5 – 40.6 Energy Density, Intensity & Momentum", [
  P(R`Electric and magnetic energy densities are equal. Average total energy density and intensity:`, [R`u_{av} = \tfrac12\varepsilon_0E_0^2 = \frac{B_0^2}{2\mu_0}`, R`I = u_{av}c = \tfrac12c\varepsilon_0E_0^2 = \frac{P}{4\pi r^2}\ (\text{point source})`]),
  P(R`Momentum carried, and radiation pressure on a surface:`, [R`p = \frac Uc`, R`P_{rad} = \frac Ic\ (\text{absorbed}),\qquad \frac{2I}{c}\ (\text{reflected})`]),
  S(s.rect(90,20,12,60,'class="fl"') + [30,50,70].map(y => s.arr(20,y,86,y,'class="red"')).join("") + s.txt(108,54,"absorbed: I/c") + s.rect(90,100,12,60,'class="fl2"') + [110,130,150].map(y => s.arr(20,y,86,y,'class="red"') + s.arr(86,y+6,40,y+6,'class="blue"')).join("") + s.txt(108,134,"reflected: 2I/c"), 210, 168, "Radiation pressure on a surface"),
  P(R`Ratio of maximum electric to magnetic force on a charge moving with v ⊥ B: $\frac{qE}{qvB} = \frac{c}{v}$.`),
  J(R`Radiation pressure / force on a surface, intensity–field conversions, and the assertion "EM waves carry momentum although they have no mass".`, "2024 · 8 Apr · Morning; 2021 · 26 Aug · Morning; 2026 · 5 Apr · Evening; 2025 · 29 Jan · Morning")
]],
["40.7 Electromagnetic Spectrum", [
  T(["Wave", "Wavelength", "Source / use"], [["Radio", "> 0.1 m", "oscillating circuits; communication"], ["Microwave", "1 mm – 0.1 m", "klystron, magnetron; radar, ovens"], ["Infrared", "700 nm – 1 mm", "hot bodies; remote, greenhouse effect"], ["Visible", "400 – 700 nm", "atoms; vision"], ["Ultraviolet", "1 – 400 nm", "sun, arcs; sterilisation (absorbed by ozone)"], ["X-rays", "0.01 – 10 nm", "X-ray tubes; medical imaging"], ["Gamma", "< 0.01 nm", "nuclei; cancer therapy"]]),
  P(R`Frequency and photon energy increase down the table. Photon energy $E = hc/\lambda$, i.e. $E(\text{eV}) = 1240/\lambda(\text{nm})$.`),
  S(["radio","micro","IR","vis","UV","X","γ"].map((l,i) => s.rect(5+i*33,40,33,30,i === 3 ? 'style="fill:var(--b1)"' : 'class="fl2"') + s.txt(8+i*33,60,l)).join("") + s.arr(10,95,235,95,'class="red"') + s.txt(50,112,"ν and photon energy increase →") + s.arr(235,20,10,20,'class="blue"') + s.txt(80,14,"← λ increases"), 240, 120, "The EM spectrum"),
  J(R`Spectrum order and match-the-list (wave ↔ use/source), and finding the region from photon energy or the photon count per second.`, "2025 · 24 Jan · Evening; 2024 · 4 Apr · Evening; 2026 · 8 Apr · Evening")
]]
],
pyq: {
  pat: [[R`E₀ = cB₀; B from $\hat k\times\vec E$`, "2026 · 4 Apr · Evening; 2025 · 23 Jan · Morning"], [R`Intensity ½cε₀E₀², inverse-square law`, "2022 · 24 Jun · Evening; 2021 · 25 Feb · Evening"], [R`Radiation pressure / force`, "2024 · 8 Apr · Morning; 2022 · 28 Jul · Evening"], [R`Displacement current`, "2026 · 5 Apr · Morning"], [R`Speed and n in a medium`, "2026 · 23 Jan · Evening"], [R`Maxwell-equation and spectrum match-lists`, "2023 · 25 Jan · Evening; 2025 · 24 Jan · Evening"]],
  trap: [R`Intensity uses the ½ (average). Watch peak vs rms values.`, R`Reflection doubles the pressure.`, R`ε₀ × (electric flux) has the dimensions of charge.`]
}
});
})();
