(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 33, short: "Thermal & Chemical Effects of Current",
intro: R`Only <b>Joule heating</b> is in the JEE Main syllabus (with electrical energy and power). The thermoelectric effects and electrolysis are for reading only.`,
sec: [
["33.1 – 33.2 Joule's Laws of Heating", [
  P(R`Heat developed in a resistor:`, [R`H = i^2Rt = \frac{V^2}{R}t = Vit`]),
  G({ xl: "i", yl: "H", xr: [0, 2], yr: [0, 4.2], fns: [x => x * x], lab: ["H = i²Rt ∝ i²"] }),
  P(R`For the same current (series), more heat is produced in the larger R. For the same voltage (parallel), more heat in the smaller R. Two heaters of powers $P_1$, $P_2$ (rated at the same V): in series $\frac1P = \frac1{P_1} + \frac1{P_2}$, in parallel $P = P_1 + P_2$.`),
  P(R`A fuse wire (low melting point, high resistivity) melts when the current exceeds its rating. Commercial unit: 1 kWh = 3.6 × 10⁶ J.`),
  J(R`Heat in a network, heater with a series resistor, time to boil water ($Pt = ms\Delta T$) and electrical energy cost.`, "2026 · 6 Apr · Morning; 2024 · 8 Apr · Evening")
]],
["33.3 – 33.6 Thermoelectric Effects (not in syllabus)", [
  P(R`<b>Seebeck</b>: two different metals in a loop with junctions at different temperatures produce an emf, $\varepsilon = aT + \frac12bT^2$ (thermocouple). Neutral temperature $-a/b$. <b>Peltier</b>: current through a junction absorbs or releases heat. <b>Thomson</b>: heat absorbed or released along a conductor with a temperature gradient.`),
  S(s.path("M40 40 Q110 10 180 40",'class="red" style="stroke-width:3"') + s.path("M40 40 Q110 90 180 40",'class="blue" style="stroke-width:3"') + s.circ(40,40,6,'class="redf"') + s.circ(180,40,6,'class="fl2"') + s.txt(14,80,"hot") + s.txt(170,80,"cold") + s.txt(96,16,"Cu") + s.txt(100,82,"Fe"), 210, 96, "Thermo-emf when the junctions differ in T")
]],
["33.7 – 33.12 Electrolysis & Cells (not in syllabus)", [
  P(R`<b>Faraday's laws</b>: $m = Zit$, and $Z\propto$ chemical equivalent. Faraday constant F = 96485 C/mol. Primary cells (Daniell, Leclanché) and secondary cells (lead accumulator).`),
  S(s.path("M40 50 L40 140 L170 140 L170 50") + s.rect(41,70,128,69,'class="fl2"') + s.rect(65,40,10,80,'class="fl"') + s.rect(135,40,10,80,'class="fl"') + s.line(70,40,70,20) + s.line(70,20,100,20) + s.cell(104,20) + s.line(108,20,140,20) + s.line(140,20,140,40) + s.txt(40,158,"cathode") + s.txt(124,158,"anode"), 210, 164, "Electrolysis: m = Zit")
]]
],
pyq: {},
aprFilter: "^$"
});
})();
