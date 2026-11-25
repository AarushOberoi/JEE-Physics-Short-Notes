(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 24, short: "Kinetic Theory of Gases",
intro: R`The pressure and temperature of a gas come from the random motion of its molecules.`,
sec: [
["24.1 – 24.2 Assumptions of Kinetic Theory", [
  L([R`A gas is a very large number of identical molecules. Their size is negligible compared with the separation.`, R`They move randomly. There are no forces except during collisions, which are perfectly elastic and of negligible duration.`, R`Gravity is ignored, and Newton's laws apply.`])
]],
["24.3 – 24.5 Pressure, RMS Speed, Kinetic Interpretation of Temperature", [
  P(R`Pressure from momentum transfer at the walls:`, R`p = \frac13\rho\overline{v^2} = \frac{1}{3}\frac{mN}{V}v_{rms}^2 = \frac23\,\frac{E_{trans}}{V}`),
  S(s.rect(40,30,110,110,'class="fl2"') + s.circ(90,80,5,'class="fl"') + s.arr(95,80,144,80,'class="red"') + s.arr(144,96,100,96,'class="blue"') + s.txt(154,84,"Δp = 2mv_x") + s.txt(92,156,"l") + s.txt(26,90,"l"), 235, 160, "p = ⅓ ρ v²_rms"),
  D("p = ⅓ρv²", [R`A molecule hitting a wall normal to x changes momentum by $2mv_x$, and returns after $2l/v_x$.`, R`Force on that wall $= \sum\frac{mv_x^2}{l}$, so pressure $= \frac{m}{V}\sum v_x^2$.`, R`By symmetry $\overline{v_x^2} = \frac13\overline{v^2}$ ⇒ $p = \frac13\rho\overline{v^2}$.`]),
  P(R`Comparing with $pV = nRT$, the average translational KE depends <b>only on T</b>:`, [R`\tfrac12m\overline{v^2} = \tfrac32k_BT`, R`v_{rms} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3p}{\rho}}`]),
  P(R`Other speeds: $v_{av} = \sqrt{\frac{8RT}{\pi M}}$, $v_{mp} = \sqrt{\frac{2RT}{M}}$. Order: $v_{rms} > v_{av} > v_{mp}$ (ratio $\sqrt3 : \sqrt{8/\pi} : \sqrt2$).`),
  J(R`Same average KE ⇒ same T (true). Same T ⇒ same $v_{rms}$ for H₂ and O₂ (false, since $v\propto 1/\sqrt M$). The temperature at which one gas's $v_{rms}$ equals another's: $T_1/M_1 = T_2/M_2$.`, "2026 · 4 Apr · Evening; 2023 · 12 Apr · Morning; 2024 · 30 Jan · Morning")
]],
["24.6 – 24.7 Deductions & Ideal Gas Equation", [
  P(R`Kinetic theory gives Boyle's, Charles', Avogadro's and Graham's laws ($v\propto 1/\sqrt\rho$) and <b>Dalton's law of partial pressures</b> $p = p_1 + p_2 + \ldots$.`),
  P(R`<b>Mean free path</b> (average distance between collisions) for molecules of diameter d and number density n:`, R`\lambda = \frac{1}{\sqrt2\,\pi d^2 n} = \frac{k_BT}{\sqrt2\,\pi d^2p}`),
  S(s.poly([[20,100],[60,60],[90,110],[140,40],[170,90],[210,70]],'class="blue"') + [[60,60],[90,110],[140,40],[170,90]].map(([x,y]) => s.circ(x,y,6,'class="fl2"')).join("") + s.txt(30,140,"λ = 1 / (√2 π d² n)"), 220, 150, "Average distance between collisions"),
  J(R`Mean free path ∝ 1/d² and ∝ T/p. Collision frequency = $v_{av}/\lambda$.`, "2026 · 28 Jan · Evening; 2023 · 13 Apr · Evening; 2024 · 8 Apr · Evening")
]],
["24.8 – 24.10 Maxwell Distribution, State, Brownian Motion", [
  P(R`<b>Maxwell's speed distribution</b>: few molecules are very slow or very fast. At higher T the peak shifts right and the curve flattens. The area (total number) stays the same.`, null, G({ xl: "v", yl: "dN/dv", xr: [0, 4], yr: [0, 1], fns: [x => 1.6 * x * x * Math.exp(-x * x), x => 0.8 * x * x * Math.exp(-x * x / 2)], lab: ["T₁", "T₂ > T₁"] })),
  P(R`The <b>thermodynamic state</b> is fixed by p, V, T. <b>Brownian motion</b> (random motion of suspended particles) is direct evidence of molecular motion. It increases with T and decreases with particle size and viscosity.`)
]],
["24.11 – 24.19 Vapour, Humidity, Phase Diagram", [
  P(R`<b>Saturated vapour pressure (SVP)</b> depends only on temperature, not on volume. <b>Boiling</b>: SVP = external pressure, so water boils at a lower temperature at high altitude.`),
  P(R`<b>Relative humidity</b> = (vapour pressure present) / (SVP at the same temperature). <b>Dew point</b>: the temperature at which the present vapour becomes saturated.`, R`RH = \frac{\text{SVP at dew point}}{\text{SVP at air temperature}}`),
  P(R`<b>Phase diagram</b>: the triple point (water: 273.16 K, 4.58 mm Hg) is where solid, liquid and vapour coexist. The critical point is the temperature above which a gas can't be liquefied by pressure alone.`),
  S(s.arr(20,140,210,140) + s.arr(20,140,20,10) + s.txt(196,156,"T") + s.txt(4,16,"p") + s.path("M40 135 Q80 110 100 95",'class="blue"') + s.path("M100 95 Q150 70 195 30",'class="red"') + s.path("M100 95 L92 15") + s.dot(100,95) + s.txt(106,110,"triple point") + s.txt(36,50,"solid") + s.txt(118,40,"liquid") + s.txt(150,110,"vapour"), 220, 160, "Water: the fusion line leans back")
]],
["Equipartition & Mixtures", [
  P(R`Each degree of freedom carries $\frac12k_BT$ per molecule. Internal energy of n moles:`, R`U = \frac f2nRT\qquad (f = 3\ \text{mono},\ 5\ \text{dia},\ 6\ \text{non-linear poly};\ +2\ \text{per vibrational mode})`),
  S(s.circ(30,60,9,'class="fl"') + s.txt(14,100,"f = 3") + s.circ(90,60,9,'class="fl"') + s.circ(130,60,9,'class="fl"') + s.line(99,60,121,60) + s.txt(94,100,"f = 5") + s.circ(190,45,9,'class="fl"') + s.circ(170,78,9,'class="fl"') + s.circ(210,78,9,'class="fl"') + s.line(186,53,174,70) + s.line(194,53,206,70) + s.txt(176,110,"f = 6") + s.txt(4,130,"mono") + s.txt(80,130,"diatomic") + s.txt(166,130,"non-linear"), 230, 138, "U = (f/2) nRT, γ = 1 + 2/f"),
  P(R`<b>Mixing gases</b> in an insulated vessel keeps U constant:`, [R`T_{mix} = \frac{n_1f_1T_1 + n_2f_2T_2}{n_1f_1 + n_2f_2}`, R`\frac{n_1+n_2}{\gamma_{mix} - 1} = \frac{n_1}{\gamma_1 - 1} + \frac{n_2}{\gamma_2 - 1}`]),
  J(R`Gas mixtures (frequently asked): the mixture temperature, γ or Cv weighted by <b>moles</b> (not mass), and the moles of each gas from the total mass.`, "2026 · 6 Apr · Evening; 2026 · 2 Apr · Evening; 2024 · 1 Feb · Morning; 2024 · 29 Jan · Evening")
]]
],
pyq: {
  pat: [[R`Equal-rms temperature / speed ratios`, "2023 · 12 Apr · Morning; 2024 · 30 Jan · Morning"], [R`KE ratio of two gases at the same T`, "2025 · 7 Apr · Evening"], [R`Mixture γ, Cv, T`, "2024 · 1 Feb · Morning; 2023 · 10 Apr · Evening"], [R`Degrees of freedom with a vibrational mode`, "2023 · 25 Jan · Evening; 2021 · 17 Mar · Evening"], [R`Mean free path / collision frequency`, "2026 · 28 Jan · Evening"], [R`Connected vessels, $\frac{pV}{T}$ conserved`, "2025 · 4 Apr · Evening; 2021 · 26 Aug · Evening"]],
  trap: [R`The average KE depends only on T, not on the type of gas.`, R`Doubling T gives √2 times $v_{rms}$.`],
  mist: [R`Using T in °C, or M in g/mol inside SI formulas.`]
}
});
})();
