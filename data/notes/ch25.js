(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 25, short: "Calorimetry",
intro: R`Heat is energy in transit because of a temperature difference. Calorimetry is energy bookkeeping: heat lost = heat gained.`,
sec: [
["25.1 – 25.3 Heat as Energy, Units, Principle of Calorimetry", [
  P(R`Unit: joule. 1 calorie = 4.186 J (the heat to raise 1 g of water from 14.5 to 15.5 °C).`),
  P(R`<b>Principle of calorimetry</b>: in an isolated system, heat lost by the hot bodies = heat gained by the cold bodies.`, R`\sum\text{heat lost} = \sum\text{heat gained}`),
  S(s.path("M40 50 L40 140 L160 140 L160 50") + s.path("M30 40 L30 150 L170 150 L170 40",'class="thin"') + s.rect(41,80,118,59,'class="fl2"') + s.line(90,10,90,118) + s.circ(90,123,5,'class="redf"') + s.path("M130 20 L130 125 L115 125") + s.txt(96,22,"thermometer") + s.txt(134,40,"stirrer"), 230, 158, "Heat lost by hot = heat gained by cold")
]],
["25.4 – 25.5 Specific Heat & Heat Capacity", [
  P(R`<b>Specific heat capacity</b> s, molar heat capacity C, heat capacity (thermal capacity) $ms$, <b>water equivalent</b> $W = ms/s_{water}$.`, R`Q = ms\Delta T,\qquad C = \frac{1}{n}\frac{dQ}{dT}`),
  P(R`Water: s = 4200 J kg⁻¹K⁻¹ (1 cal g⁻¹°C⁻¹). Ice ≈ 2100 J kg⁻¹K⁻¹. Specific heat is measured by the <b>method of mixtures</b> (Experimental Skill).`)
]],
["25.6 – 25.8 Latent Heat", [
  P(R`During a phase change the temperature stays constant. Heat is used to change the state:`, [R`Q = mL`, R`L_{fusion,ice} = 336\ \text{kJ/kg}\ (80\ \text{cal/g}),\quad L_{vap,water} = 2256\ \text{kJ/kg}\ (540\ \text{cal/g})`], G({ xl: "Q", yl: "T", xr: [0, 10], yr: [-20, 120], fns: [x => (x < 1 ? -20 + 20 * x : x < 2.5 ? 0 : x < 4.5 ? 50 * (x - 2.5) : x < 9 ? 100 : 100 + 20 * (x - 9))], lab: ["heating curve of ice → steam"] })),
  P(R`Slopes of the heating curve ∝ 1/(ms). The lengths of the flat parts ∝ mL.`),
  W(R`Ice–water mixing: first check whether the heat available can melt all the ice. If not, the final temperature is 0 °C and some ice remains. Ice at −10 °C first has to warm to 0 °C, using the specific heat of ice.`),
  J(R`Ice–water mixing, heating curves and "heat extracted from x g of water evaporates (1000−x) g" appear most years.`, "2026 · 28 Jan · Morning; 2026 · 5 Apr · Evening; 2022 · 25 Jul · Evening; 2024 · 30 Jan · Evening")
]],
["25.9 Mechanical Equivalent of Heat", [
  P(R`Joule's experiment: work W produces heat H with $W = JH$, J = 4.186 J/cal. Falling water or a bullet stopping converts KE or PE into heat:`, R`mgh = ms\Delta T\ \ (\text{or a fraction of it})`),
  S(s.rect(40,60,90,80,'class="fl2"') + s.line(85,20,85,130) + [95,110,125].map(y => s.line(65,y,105,y,'style="stroke-width:4"')).join("") + s.pulley(160,20,10) + s.line(85,20,160,10) + s.line(170,20,170,90) + s.block(158,90,24,22,"m") + s.arr(170,112,170,140,'class="red"'), 200, 150, "Work by falling mass → heat: W = JH"),
  J(R`Energy to heat: "a body falls through h and a fraction of its PE heats it", "a bullet melts on impact".`, "2025 · 8 Apr · Evening; 2021 · 27 Aug · Evening")
]]
],
pyq: { pat: [[R`Ice–water mixing with fusion`, "2026 · 28 Jan · Morning; 2022 · 25 Jul · Evening"], [R`Heating curves`, "2024 · 30 Jan · Evening"], [R`mgh = ms ΔT`, "2025 · 8 Apr · Evening"]], trap: [R`During melting or boiling, T is constant even though heat is being supplied.`] },
aprFilter: "calorim|evaporat|latent"
});
})();
