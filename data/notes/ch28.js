(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 28, short: "Heat Transfer",
intro: R`Heat moves by conduction (through matter, without bulk motion), convection (bulk motion of fluid) and radiation (electromagnetic waves, no medium needed).`,
sec: [
["28.1 – 28.3 Thermal Conduction", [
  P(R`Steady-state heat current through a rod of length $x$, area A, thermal conductivity K:`, [R`\frac{\Delta Q}{\Delta t} = KA\frac{T_1 - T_2}{x}`, R`R_{th} = \frac{x}{KA}\ \Rightarrow\ i = \frac{\Delta T}{R_{th}}`]),
  S(s.rect(10,40,20,50,'class="fl"') + s.rect(180,40,20,50,'class="fl2"') + s.rect(30,52,150,26,'class="fl2"') + s.line(30,46,180,46,'class="thin" style="stroke-dasharray:2 2"') + s.line(30,84,180,84,'class="thin" style="stroke-dasharray:2 2"') + s.arr(60,65,150,65,'class="red"') + s.txt(4,110,"T₁ (hot)") + s.txt(166,110,"T₂") + s.txt(66,36,"length x, area A"), 210, 118, "dQ/dt = KA(T₁ − T₂)/x"),
  P(R`This is the same as Ohm's law: <b>series</b> rods $R = R_1 + R_2$ (same heat current), <b>parallel</b> $\frac1R = \frac1{R_1} + \frac1{R_2}$ (same ΔT). Equivalent K in series (equal lengths): $\frac{2K_1K_2}{K_1+K_2}$. Parallel (equal areas): $\frac{K_1+K_2}{2}$.`, null, S(s.rect(20, 60, 90, 40, s.fill) + s.rect(110, 60, 90, 40, s.fill2) + s.txt(55, 85, "K₁") + s.txt(145, 85, "K₂") + s.txt(8, 55, "T₁") + s.txt(195, 55, "T₂") + s.txt(100, 120, "T_junction"), 220, 130)),
  P(R`Growth of ice on a pond: the time to thicken from $x_1$ to $x_2$ is $t = \frac{\rho L}{2K\theta}(x_2^2 - x_1^2)$. Measuring K: Searle's method.`),
  S(s.rect(10,40,200,22,'class="fl"') + s.rect(10,62,200,70,'class="fl2"') + s.txt(14,30,"air at −θ °C") + s.txt(60,56,"ice, thickness x") + s.txt(60,104,"water at 0 °C") + s.arr(180,110,180,26,'class="red"') + s.txt(186,60,"heat"), 220, 140, "t = ρL(x₂² − x₁²) / 2Kθ"),
  J(R`Junction temperature of series rods (equal heat current) and conduction + latent heat (ice melting rate).`, "2026 · 22 Jan · Morning; 2021 · 26 Feb · Morning; 2022 · 26 Jul · Evening")
]],
["28.4 Convection", [
  P(R`Natural convection: warmer, lighter fluid rises (sea breeze, land breeze, trade winds). Forced convection: a pump or fan moves the fluid. Convection needs gravity and a fluid.`),
  S(s.rect(10,110,100,30,'class="fl"') + s.rect(110,110,110,30,'class="fl2"') + s.txt(28,130,"land (hot)") + s.txt(134,130,"sea (cool)") + s.arr(60,100,60,30,'class="red"') + s.arr(60,30,170,30,'class="red"') + s.arr(170,30,170,100,'class="blue"') + s.arr(170,100,62,100,'class="blue"') + s.txt(66,50,"warm air rises") + s.txt(88,94,"sea breeze"), 230, 146, "Day time: breeze from sea to land")
]],
["28.5 – 28.10 Radiation, Kirchhoff, Stefan–Boltzmann", [
  P(R`<b>Prevost's theory</b>: every body above 0 K emits radiation all the time and also absorbs it. Equilibrium means emission = absorption.`),
  P(R`<b>Emissive power</b> E, <b>absorptivity</b> a. A <b>blackbody</b> has a = 1 (a cavity with a small hole). <b>Kirchhoff's law</b>: E/a is the same for all bodies at a given T, equal to $E_b$. Good absorbers are good emitters.`, R`\frac{E}{a} = E_{b}\ \Rightarrow\ e = a`),
  S(s.path("M154 70.4 A55 55 0 1 0 154 89.6",'style="stroke-width:5"') + s.poly([[220,80],[150,80],[70,40],[100,132],[60,100],[120,60]],'class="red"') + s.txt(150,30,"small hole"), 225, 145, "A small hole in a cavity ≈ perfect blackbody (a = 1)"),
  P(R`<b>Stefan–Boltzmann law</b> (emissivity e, absolute temperature T):`, [R`E = e\sigma T^4,\qquad P_{net} = e\sigma A(T^4 - T_0^4)`, R`\sigma = 5.67\times10^{-8}\ \text{W m}^{-2}\text{K}^{-4}`]),
  G({ xl: "T", yl: "E", xr: [0, 2.2], yr: [0, 1.6], fns: [x => x ** 4 / 16], lab: ["E = eσT⁴"] }),
  P(R`<b>Wien's displacement law</b>: $\lambda_mT = b = 2.9\times10^{-3}$ m K. A hotter body peaks at a shorter wavelength.`, null, G({ xl: "λ", yl: "E_λ", xr: [0.05, 3], yr: [0, 1.1], fns: [x => 0.04 / (Math.pow(x, 5) * (Math.exp(1.8 / x) - 1)), x => 0.012 / (Math.pow(x, 5) * (Math.exp(1.2 / x) - 1))], lab: ["T₁", "T₂ > T₁"] })),
  J(R`Stefan's-law ratios (doubling T gives 16 times the power, area and emissivity changes) are the usual radiation questions.`, "2025 · 22 Jan · Morning; 2025 · 7 Apr · Morning")
]],
["28.11 – 28.12 Newton's Law of Cooling", [
  P(R`For a small temperature difference, the rate of cooling ∝ excess temperature:`, [R`-\frac{dT}{dt} = k(T - T_0)\ \Rightarrow\ T - T_0 = (T_i - T_0)e^{-kt}`, R`\text{average form: } \frac{T_1 - T_2}{t} = k\left(\frac{T_1+T_2}{2} - T_0\right)`], G({ xl: "t", yl: "T", xr: [0, 5], yr: [0, 1.1], fns: [x => 0.2 + 0.8 * Math.exp(-0.8 * x)], lab: ["exponential approach to T₀"] })),
  P(R`Detection of radiation: thermopile, bolometer.`),
  J(R`Newton's law of cooling over two intervals is repeated. Always use the <b>excess</b> temperature $(T - T_0)$.`, "2021 · 27 Jul · Morning; 2023 · 29 Jan · Morning")
]]
],
pyq: { pat: [[R`Newton's cooling, two intervals`, "2021 · 27 Jul · Morning; 2023 · 29 Jan · Morning"], [R`Series conduction junction temperature`, "2026 · 22 Jan · Morning"], [R`Stefan's law with emissivity`, "2025 · 22 Jan · Morning; 2025 · 7 Apr · Morning"]], trap: [R`Stefan and Wien need absolute temperature (K).`] },
aprFilter: "^$"
});
})();
