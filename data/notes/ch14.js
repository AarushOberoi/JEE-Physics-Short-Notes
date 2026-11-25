(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 14, short: "Mechanical Properties of Matter",
intro: R`Elasticity of solids, surface tension and viscosity of liquids. Together these are some of the most repeated JEE topics in 2024–26.`,
sec: [
["14.1 – 14.4 Elasticity, Stress & Strain", [
  P(R`Interatomic forces act like springs. <b>Elasticity</b> is the property of regaining shape when the deforming force is removed. Perfectly plastic bodies don't regain it.`),
  P(R`<b>Stress</b> = internal restoring force per unit area. Types: longitudinal (tensile/compressive), shearing, bulk (volume).`, R`\text{stress} = \frac FA\ \ (\text{N m}^{-2})`),
  S(s.rect(20,30,50,16,'class="fl2"') + s.arr(20,38,2,38,'class="red"') + s.arr(70,38,88,38,'class="red"') + s.txt(22,70,"tensile") + s.path("M110 70 L160 70 L172 30 L122 30 Z",'class="fl2"') + s.arr(130,22,170,22,'class="red"') + s.arr(155,80,115,80,'class="red"') + s.txt(118,100,"shear") + s.circ(225,52,18,'class="fl2"') + s.arr(225,12,225,30,'class="red"') + s.arr(225,92,225,74,'class="red"') + s.arr(185,52,203,52,'class="red"') + s.arr(265,52,247,52,'class="red"') + s.txt(210,108,"bulk"), 275, 114, "Longitudinal, shear and volume stress"),
  P(R`<b>Strain</b> (dimensionless): longitudinal $\Delta l/l$, shearing $\theta\approx x/l$, volume $\Delta V/V$.`)
]],
["14.5 – 14.6 Hooke's Law & Elastic Moduli", [
  P(R`<b>Hooke's law</b>: within the elastic limit, stress ∝ strain. The constant is the <b>modulus of elasticity</b>.`, [R`Y = \frac{F/A}{\Delta l/l}\ \Rightarrow\ \Delta l = \frac{Fl}{AY}`, R`B = -\frac{\Delta P}{\Delta V/V},\qquad \eta = \frac{F/A}{\theta}`]),
  S(s.ceil(30,110,12) + s.line(70,12,70,100) + s.block(55,100,30,24,"M") + s.line(95,12,95,90,'class="thin"') + s.txt(100,56,"l") + s.line(95,90,95,102,'class="red" style="stroke-width:3"') + s.txt(100,102,"Δl") + s.arr(70,124,70,152) + s.txt(76,148,"Mg"), 160, 156, "Y = (Mg/A) / (Δl/l)"),
  P(R`<b>Compressibility</b> $= 1/B$. For gases: isothermal $B = P$, adiabatic $B = \gamma P$. <b>Poisson's ratio</b> $\sigma = -\frac{\Delta d/d}{\Delta l/l}$ (theory: −1 to 0.5).`, R`Y = 2\eta(1+\sigma) = 3B(1 - 2\sigma)`),
  P(R`<b>Stress–strain curve</b>: proportional limit → elastic limit → yield point → plastic region → ultimate strength → fracture. Ductile materials have a long plastic region, brittle ones break soon after the elastic limit. Elastomers (rubber) have no linear region.`, null, G({ xl: "strain", yl: "stress", xr: [0, 1], yr: [0, 1.1], fns: [x => (x < 0.25 ? 3 * x : x < 0.3 ? 0.75 : 0.75 + 0.5 * Math.sin(Math.PI * (x - 0.3) / 0.8))], lab: ["slope of linear part = Y"] })),
  P(R`<b>Breaking stress</b> depends only on the material. Max load = breaking stress × area.`),
  P(R`Wire hanging under its own weight: $\Delta l = \frac{Mgl}{2AY}$ (half of a load $Mg$ at the end). <b>Thermal stress</b> in a clamped rod heated by $\Delta T$: $Y\alpha\Delta T$.`),
  W(R`Y, B and η are <b>material constants</b>. Doubling the length or radius changes $\Delta l$, not Y. Y decreases with temperature.`),
  J(R`Elongation questions (series wires, two wires with blocks, own weight, ratio when L and d change) are the most asked elasticity questions. Breaking stress with a lift accelerating, and bulk modulus with depth ($\Delta V/V = \rho gh/B$) are also asked.`, "2025 · 7 Apr · Morning; 2026 · 4 Apr · Evening; 2026 · 6 Apr · Morning; 2025 · 29 Jan · Morning")
]],
["14.7 – 14.8 Elastic Potential Energy & Measuring Y", [
  P(R`Energy stored in a stretched wire:`, [R`U = \tfrac12F\Delta l = \tfrac12\,\text{stress}\times\text{strain}\times\text{volume}`, R`u = \frac{U}{V} = \tfrac12Y(\text{strain})^2 = \frac{(\text{stress})^2}{2Y}`]),
  G({ xl: "extension Δl", yl: "F", xr: [0, 2], yr: [0, 2.2], fns: [x => x], lab: ["area = ½ F Δl = stored energy"] }),
  P(R`<b>Searle's method</b> (Experimental Skill): $Y = \frac{Mgl}{\pi r^2\Delta l}$. Plot load vs extension, take the slope, and use a reference wire to cancel temperature and sag effects.`)
]],
["14.9 – 14.12 Surface Tension & Excess Pressure", [
  P(R`<b>Surface tension</b> T: force per unit length acting along the surface, perpendicular to an imaginary line on it. It equals the <b>surface energy</b> per unit area.`, R`T = \frac Fl = \frac{\Delta W}{\Delta A}\quad(\text{N m}^{-1} = \text{J m}^{-2})`),
  S(s.path("M150 30 L30 30 L30 110 L150 110") + s.rect(30,30,90,80,'class="fl2"') + s.line(120,24,120,116,'style="stroke-width:4"') + s.arr(124,70,170,70,'class="red"') + s.arr(116,50,84,50,'class="blue"') + s.txt(150,62,"F") + s.txt(60,46,"2Tl") + s.txt(124,130,"l") + s.txt(52,84,"film"), 190, 136, "Film has two surfaces: F = 2Tl"),
  P(R`<b>Soap film / bubble has two surfaces</b>: the work to increase the film area by $\Delta A$ is $2T\Delta A$.`, R`W_{bubble} = 2T\cdot4\pi(r_2^2 - r_1^2) = 8\pi T(r_2^2 - r_1^2)`),
  P(R`<b>Excess pressure</b> inside a curved surface:`, [R`\text{drop: } \Delta P = \frac{2T}{R},\qquad \text{bubble (2 surfaces): } \Delta P = \frac{4T}{R}`], S(s.circ(60, 75, 45, s.fill) + s.circ(160, 75, 45) + s.circ(160, 75, 41) + s.txt(40, 80, "2T/R") + s.txt(140, 80, "4T/R") + s.txt(40, 140, "drop") + s.txt(135, 140, "bubble"), 220, 150)),
  P(R`<b>Splitting a drop</b> of radius R into $n$ equal droplets: $r = R/n^{1/3}$. The energy needed equals the increase in surface area × T. Merging releases the same energy (and heats the drop).`, R`\Delta E = 4\pi R^2T\,(n^{1/3} - 1)`),
  J(R`Surface energy (splitting/merging drops, blowing bubbles) is a top fluid topic: 5 of the 8 April-2026 shifts you uploaded had one. Remember the factor 2 for bubbles.`, "2026 · 2 Apr · Morning; 2026 · 5 Apr · Evening; 2022 · 28 Jun · Morning; 2025 · 2 Apr · Evening; 2023 · 1 Feb · Morning")
]],
["14.13 – 14.14 Contact Angle & Capillary Rise", [
  P(R`<b>Contact angle</b> θ (measured inside the liquid): acute → the liquid wets the solid and rises (water–glass ≈ 0°). Obtuse → it doesn't wet and falls (mercury–glass ≈ 135°). It depends on the solid–liquid <b>pair</b>, not on the tube radius.`),
  S(s.ground(10,110,90) + s.path("M25 90 Q60 40 95 90",'class="fl2"') + s.line(95,90,78,66,'class="red"') + s.arcm(95,90,18,125,180) + s.txt(68,84,"θ") + s.txt(10,116,"θ < 90°: wets (water)") + s.ground(130,240,90) + s.path("M150 90 Q140 40 185 40 Q230 40 220 90",'class="fl2"') + s.txt(140,116,"θ > 90°: mercury"), 245, 124, "Measured inside the liquid"),
  P(R`<b>Capillary rise</b> (Jurin's law):`, R`h = \frac{2T\cos\theta}{r\rho g}\qquad (hr = \text{constant})`, S(s.rect(20, 100, 180, 50, s.fill) + s.line(90, 20, 90, 120) + s.line(110, 20, 110, 120) + s.rect(90, 45, 20, 75, s.fill) + s.path("M90 45 Q100 55 110 45") + s.txt(118, 75, "h") + s.line(115, 45, 115, 100, s.dash), 220, 160)),
  P(R`In a tube shorter than $h$ the liquid does <b>not</b> overflow: the meniscus radius adjusts so that $R'h' = Rh$. Detergents lower T, so the rise is smaller (Experimental Skill).`),
  J(R`Capillary questions: change in rise with radius or T, mercury depression, A-R on why oil spreads (contact angle).`, "2025 · 7 Apr · Evening; 2023 · 30 Jan · Morning; 2022 · 29 Jul · Morning")
]],
["14.15 – 14.20 Viscosity, Stokes' Law, Terminal Velocity", [
  P(R`<b>Viscosity</b>: internal friction between fluid layers moving relative to each other. Newton's law:`, R`F = -\eta A\frac{dv}{dx}\qquad (\eta\ \text{in Pa s};\ 1\ \text{poise} = 0.1\ \text{Pa s})`),
  S(s.ground(10,200,130) + [0,1,2,3,4].map(i => s.arr(20,125-i*24,40+i*30,125-i*24,'class="blue"')).join("") + s.line(10,22,200,22,'style="stroke-width:3"') + s.arr(150,12,190,12,'class="red"') + s.txt(126,16,"F") + s.txt(160,90,"dv/dy"), 210, 140, "F = −ηA dv/dy (layers slide over each other)"),
  P(R`<b>Poiseuille's equation</b> (flow through a narrow tube of radius r, length l):`, R`Q = \frac{\pi Pr^4}{8\eta l}`),
  S(s.line(10,30,200,30) + s.line(10,110,200,110) + [40,55,70,85,100].map(y => { const v = 1 - ((y - 70) / 40) ** 2; return s.arr(40,y,40+v*130,y,'class="blue"'); }).join("") + s.txt(60,130,"Q = πPr⁴ / 8ηl"), 210, 136, "Parabolic velocity profile, fastest on the axis"),
  P(R`<b>Stokes' law</b>: viscous drag on a sphere moving slowly: $F = 6\pi\eta rv$.`),
  S(s.path("M30 10 L30 150 L170 150 L170 10") + s.rect(31,20,138,129,'class="fl2"') + s.circ(100,75,16,'class="fl"') + s.arr(100,91,100,138) + s.txt(106,132,"mg") + s.arr(92,59,92,22,'class="blue"') + s.txt(78,32,"B") + s.arr(108,59,108,26,'class="red"') + s.txt(114,36,"6πηrv"), 200, 156, "At terminal speed: mg = B + 6πηrv_t"),
  P(R`<b>Terminal velocity</b>: weight = buoyancy + drag.`, R`v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}`, G({ xl: "t", yl: "v", xr: [0, 5], yr: [0, 1.1], fns: [x => 1 - Math.exp(-1.2 * x)], lab: ["v → vₜ"] })),
  P(R`$v_t\propto r^2$. An air bubble rising through a liquid uses $(\rho_{liquid} - 0)$. Drops merging into one big drop: $v_t$ increases by $n^{2/3}$.`),
  P(R`<b>Critical velocity & Reynolds number</b>: flow is streamline when $R_e = \frac{\rho vD}{\eta}$ is small (< ~2000) and turbulent when large (> ~3000).`),
  J(R`Viscosity / terminal velocity is the most asked fluid topic: drop broken into 64 droplets ($v_t$ falls by 16), bubble rising, viscosity from steady fall.`, "2026 · 8 Apr · Evening; 2026 · 2 Apr · Evening; 2024 · 31 Jan · Evening; 2025 · 3 Apr · Evening")
]]
],
pyq: {
  pat: [
    [R`Elongation ratios / series wires / own weight`, "2025 · 7 Apr · Morning; 2023 · 30 Jan · Evening; 2021 · 31 Aug · Morning"],
    [R`Bulk modulus: % volume change, compression at depth`, "2026 · 4 Apr · Morning; 2025 · 29 Jan · Morning"],
    [R`Breaking stress / safe load`, "2026 · 6 Apr · Morning; 2021 · 26 Aug · Evening"],
    [R`Surface energy of drops/bubbles`, "2022 · 28 Jun · Morning; 2025 · 2 Apr · Evening"],
    [R`Terminal velocity scaling`, "2024 · 31 Jan · Evening; 2023 · 11 Apr · Evening"],
    [R`Capillary rise changes`, "2025 · 7 Apr · Evening; 2023 · 30 Jan · Morning"]
  ],
  combo: [R`Elasticity + thermal expansion (thermal stress)`, R`Elasticity + error analysis (error in Y)`, R`Surface tension + heat (temperature rise on merging)`, R`Stokes + buoyancy`],
  trap: [R`A soap bubble has two surfaces: $4T/R$ and $2T\Delta A$.`, R`Stress at a point in a heavy wire = (load + weight of the part <b>below</b>)/A.`, R`Isothermal bulk modulus of a gas = P.`],
  mist: [R`Forgetting 1 poise = 0.1 Pa s.`, R`Using diameter instead of radius in Stokes' law.`]
},
aprFilter: "surface|drop|bubble|Stokes|viscosity|stress|Young|modulus|elastic|wire|terminal|Shear|Bulk"
});
})();
