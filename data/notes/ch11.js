(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 11, short: "Gravitation",
intro: R`Newton's law of gravitation is universal. With field, potential and energy it explains g, satellites, escape and Kepler's laws.`,
sec: [
["11.1 – 11.2 Law of Gravitation & G", [
  P(R`Every particle attracts every other particle with a force along the line joining them:`, R`F = \frac{Gm_1m_2}{r^2},\qquad G = 6.67\times10^{-11}\ \text{N m}^2\text{kg}^{-2}`),
  P(R`Gravitational forces obey <b>superposition</b>. A uniform spherical shell or sphere attracts an external particle as if all its mass were at its centre. G was measured by Cavendish (torsion balance).`),
  G({ xl: "r / R", yl: "E", xr: [0, 4], yr: [0, 1.2], fns: [x => x < 1 ? 0 : 1 / (x * x), x => x < 1 ? x : 1 / (x * x)], lab: ["hollow shell: 0 inside", "solid sphere: ∝ r inside"] })
]],
["11.3 – 11.5 Gravitational PE & Potential", [
  P(R`PE of two particles (zero at infinity), and potential = PE per unit mass:`, [R`U = -\frac{Gm_1m_2}{r},\qquad V = -\frac{GM}{r}`]),
  G({ xl: "r / R", yl: "V", xr: [0, 4], yr: [-1.6, 0.2], fns: [x => x < 1 ? -(3 - x * x) / 2 : -1 / x], lab: ["V of a solid sphere: −1.5 GM/R at the centre"] }),
  T(["Distribution", "Potential V"], [["Point mass / outside sphere or shell", "$-GM/r$"], ["Ring on axis (distance x)", "$-\\frac{GM}{\\sqrt{a^2+x^2}}$"], ["Inside spherical shell", "$-GM/a$ (constant)"], ["Inside uniform solid sphere", "$-\\frac{GM}{2a^3}(3a^2 - r^2)$; centre $= -\\frac{3GM}{2a}$"]]),
  P(R`For several masses add the PE of <b>every pair</b>. Work done by an external agent = change in PE.`)
]],
["11.6 – 11.8 Gravitational Field", [
  P(R`Field = force per unit mass. Relation with potential:`, [R`\vec E = \frac{\vec F}{m},\qquad E = -\frac{dV}{dr}`]),
  T(["Distribution", "Field E"], [["Point mass / outside sphere", "$GM/r^2$"], ["Ring on axis", "$\\frac{GMx}{(a^2+x^2)^{3/2}}$ (max at $x = a/\\sqrt2$)"], ["Inside spherical shell", "0"], ["Inside uniform solid sphere", "$\\frac{GMr}{a^3}$ (∝ r)"]]),
  G({ xl: "r", yl: "E", xr: [0, 4], yr: [0, 1.1], fns: [x => (x <= 1 ? x : 1 / (x * x)), x => (x < 1 ? 0 : 1 / (x * x))], lab: ["solid sphere", "shell"] })
]],
["11.9 Variation of g", [
  P(R`At the surface $g = GM/R^2$. It varies with height, depth and latitude:`, [R`g_h = \frac{g}{(1+h/R)^2}\approx g\left(1 - \frac{2h}{R}\right)\ (h\ll R)`, R`g_d = g\left(1 - \frac dR\right),\qquad g' = g - \omega^2R\cos^2\lambda`], G({ xl: "r/R", yl: "g", xr: [0, 3.5], yr: [0, 1.1], fns: [x => (x <= 1 ? x : 1 / (x * x))], lab: ["g ∝ r inside, ∝ 1/r² outside"] })),
  P(R`$g$ is zero at the centre and maximum at the surface. $g$ at height $R$ is $g/4$, and at height $2R$ it is $g/9$.`),
  J(R`$g$ changes with height or depth (very frequently asked): "% change from depth d to height h", "height where g becomes g/n", "pendulum clock at altitude runs slow".`, "2023 · 31 Jan · Evening; 2024 · 29 Jan · Morning; 2026 · 5 Apr · Morning")
]],
["11.10 – 11.12 Planets, Satellites & Kepler's Laws", [
  P(R`<b>Orbital speed</b> and period of a satellite at distance $r$ from the centre (it does not depend on the satellite's mass):`, [R`v_o = \sqrt{\frac{GM}{r}},\qquad T = 2\pi\sqrt{\frac{r^3}{GM}}`]),
  S(s.circ(90,90,35,'class="fl2"') + s.circ(90,90,70,'class="thin" style="stroke-dasharray:4 3"') + s.circ(160,90,6,'class="fl"') + s.arr(160,90,160,40,'class="red"') + s.arr(160,90,128,90,'class="blue"') + s.line(90,90,90,55,'class="thin"') + s.txt(94,76,"R") + s.txt(96,108,"r = R + h") + s.txt(165,48,"v₀") + s.txt(130,82,"F"), 210, 178, "Gravity supplies mv²/r"),
  P(R`<b>Kepler's laws</b>: (1) orbits are ellipses with the sun at one focus; (2) a planet sweeps equal areas in equal times (conservation of angular momentum); (3) $T^2\propto a^3$.`, [R`\frac{dA}{dt} = \frac{L}{2m} = \text{const},\qquad T^2 = \frac{4\pi^2}{GM}a^3`]),
  S(s.ell(110,80,90,55) + s.path("M38.8 80 L32 52.5 A90 55 0 0 0 32 107.5 Z",'class="fl"') + s.path("M38.8 80 L197 66 A90 55 0 0 1 197 94 Z",'class="fl2"') + s.circ(38.8,80,7,'class="redf"') + s.txt(30,152,"equal areas in equal times") + s.txt(2,64,"fast") + s.txt(176,40,"slow") + s.txt(46,98,"Sun"), 215, 158, "Sun at a focus; T² ∝ a³"),
  P(R`<b>Energy of a satellite</b>: KE $= \frac{GMm}{2r}$, PE $= -\frac{GMm}{r}$, total $E = -\frac{GMm}{2r}$ (bound). Binding energy $= +\frac{GMm}{2r}$.`, R`E = -K = \tfrac12U`),
  G({ xl: "r", yl: "E", xr: [0.5, 4], yr: [-2, 1.1], fns: [x => 0.5 / x, x => -1 / x, x => -0.5 / x], lab: ["KE", "PE", "total = −KE"] }),
  P(R`<b>Geostationary satellite</b>: period 24 h, equatorial orbit at height about 36000 km. <b>Weightlessness</b> in a satellite: everything inside is in free fall with the same acceleration, so normal forces are zero.`),
  J(R`Kepler's 3rd law around <b>different</b> central masses: $T^2\propto r^3/M$. A satellite skimming the surface has $T = 2\pi\sqrt{R/g} = \sqrt{3\pi/G\rho}$, which depends only on density (2026 statement question).`, "2026 · 2 Apr · Morning; 2026 · 22 Jan · Evening; 2024 · 29 Jan · Evening")
]],
["11.13 – 11.17 Escape Velocity, Binding Energy, Black Holes", [
  P(R`<b>Escape velocity</b>: the minimum speed to reach infinity ($KE + PE \ge 0$). It is independent of the mass of the body and the direction of projection.`, [R`v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}\approx 11.2\ \text{km/s},\qquad v_e = \sqrt2\,v_o\ (\text{near surface})`]),
  P(R`A body falling from infinity reaches the earth with $v_e$ and KE $= mgR$. Energy needed to lift a body to height $h$: $\Delta U = \frac{mgh}{1 + h/R}$ (to height $nR$: $\frac{n}{n+1}mgR$).`),
  P(R`<b>Gravitational binding energy</b> of a uniform sphere: $\frac{3GM^2}{5R}$. A <b>black hole</b> has $v_e > c$ (Schwarzschild radius $2GM/c^2$).`),
  P(R`<b>Inertial mass</b> ($F = ma$) and <b>gravitational mass</b> ($F = GMm/r^2$) are found experimentally to be equal (the basis of general relativity).`),
  J(R`Escape/energy questions are the most asked group: energy to send a body to height $2R$ or to infinity, $v_e\propto\sqrt{M/R}$ for another planet, satellite energy when the orbit changes.`, "2024 · 31 Jan · Evening; 2023 · 25 Jan · Evening; 2026 · 2 Apr · Evening")
]]
],
pyq: {
  pat: [
    [R`$g$ with height/depth, % change, pendulum at altitude`, "2023 · 31 Jan · Evening; 2024 · 29 Jan · Morning; 2026 · 5 Apr · Morning"],
    [R`Escape velocity ratios for another planet`, "2024 · 31 Jan · Evening; 2023 · 12 Apr · Morning"],
    [R`Period change with radius ($T^2\propto r^3$)`, "2024 · 29 Jan · Evening; 2023 · 29 Jan · Evening"],
    [R`Satellite energy (KE, PE, total; orbit transfer)`, "2023 · 8 Apr · Morning; 2026 · 21 Jan · Morning"],
    [R`PE increase to height 2R ($\frac23mgR$)`, "2023 · 25 Jan · Evening; 2026 · 5 Apr · Evening"],
    [R`Field/force of masses at polygon corners (superposition)`, "2024 · 31 Jan · Morning; 2026 · 22 Jan · Morning"]
  ],
  combo: [R`Gravitation + SHM (tunnel through the earth: $T = 2\pi\sqrt{R/g}$, independent of the chord)`, R`Kepler + angular momentum ($L = m\sqrt{GMr}$)`],
  trap: [R`A pendulum clock at altitude runs <b>slow</b> (g decreases).`, R`Escape velocity doesn't depend on the angle of projection.`],
  mist: [R`Using $mgh$ for $h \sim R$.`, R`Using the approximation $1 - 2h/R$ when $h$ is not small.`]
}
});
})();
