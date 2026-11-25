(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 32, short: "Electric Current in Conductors",
intro: R`Current Electricity had the most questions of any chapter in 2021–24 (48–51 a year). Kirchhoff's laws and the instruments are the core.`,
sec: [
["32.1 – 32.2 Current, Current Density & Drift Speed", [
  P(R`Current $i = dq/dt$ (scalar). Current density $\vec j = i/A$ (vector). Free electrons drift opposite to E with a small speed $v_d$ (~mm/s).`, [R`i = neAv_d,\qquad v_d = \frac{eE\tau}{m}`, R`\text{mobility } \mu = \frac{v_d}{E} = \frac{e\tau}{m}`]),
  S(s.rect(10,40,210,60,'class="fl2"') + s.poly([[30,80],[60,55],[75,90],[110,60],[130,85],[170,52],[195,75]],'class="blue"') + [[30,80],[195,75]].map(([x,y]) => s.circ(x,y,4,'class="redf"')).join("") + s.arr(200,120,40,120,'class="red"') + s.txt(64,138,"electrons drift opposite to E") + s.arr(40,22,200,22) + s.txt(110,16,"E, i"), 230, 145, "v_d = eEτ/m, i = neAv_d"),
  P(R`The signal travels at nearly the speed of light, but individual electrons drift slowly. τ is the relaxation time (mean time between collisions).`)
]],
["32.3 – 32.4 Ohm's Law, Resistivity & Temperature", [
  P(R`<b>Ohm's law</b> (microscopic and macroscopic forms):`, [R`\vec j = \sigma\vec E,\qquad V = iR,\qquad R = \frac{\rho l}{A}`, R`\rho = \frac{m}{ne^2\tau}`]),
  G({ xl: "V", yl: "I", xr: [0, 4], yr: [0, 4], fns: [x => x, x => 1.6 * Math.sqrt(x)], lab: ["ohmic: straight line", "filament bulb: R rises"] }),
  P(R`A wire stretched to n times its length (volume constant): $R' = n^2R$. Resistivity depends on the material and temperature, not on the shape.`),
  P(R`<b>Temperature dependence</b>: for metals ρ rises with T. For semiconductors it falls. Alloys (manganin, constantan, nichrome) have small α.`, R`R_T = R_0[1 + \alpha(T - T_0)]`, G({ xl: "T", yl: "ρ", xr: [0, 5], yr: [0, 3], fns: [x => 0.5 + 0.4 * x, x => 2.5 * Math.exp(-0.6 * x)], lab: ["metal", "semiconductor"] })),
  P(R`<b>Ohmic</b> conductors have a linear V–I graph. <b>Non-ohmic</b>: diodes, filament bulbs (R rises as the filament heats), thermistors.`),
  J(R`Temperature-coefficient questions (R at two temperatures, with T in K or °C) and V–I graph slopes.`, "2024 · 9 Apr · Evening; 2024 · 8 Apr · Morning")
]],
["32.5 – 32.6 Battery, EMF & Energy Transfer", [
  P(R`<b>EMF</b> = work done by the non-electric force per unit charge. Terminal voltage while supplying current (discharging), and while being charged:`, [R`V = \varepsilon - ir\ (\text{discharging}),\qquad V = \varepsilon + ir\ (\text{charging})`, R`i = \frac{\varepsilon}{R + r}`], G({ xl: "i", yl: "V", xr: [0, 5], yr: [0, 6], fns: [x => 5 - x], lab: ["V = ε − ir"] })),
  P(R`<b>Power</b> delivered to the load: $P = i^2R$. It is maximum when $R = r$: $P_{max} = \frac{\varepsilon^2}{4r}$ (efficiency 50%).`, R`P = Vi = i^2R = \frac{V^2}{R}`),
  G({ xl: "R / r", yl: "P", xr: [0, 5], yr: [0, 1.1], fns: [x => 4 * x / (1 + x) ** 2], lab: ["P_max at R = r"] }),
  J(R`Internal resistance from two load readings: $\varepsilon = i_1(R_1 + r) = i_2(R_2 + r)$.`, "2026 · 5 Apr · Evening")
]],
["32.7 – 32.9 Kirchhoff's Laws, Combinations, Grouping of Cells", [
  P(R`<b>Junction law</b> (charge conservation): $\sum i_{in} = \sum i_{out}$. <b>Loop law</b> (energy conservation): $\sum\Delta V = 0$ around any closed loop.`),
  S(s.dot(100,70) + s.arr(30,30,96,67,'class="red"') + s.arr(30,110,96,73,'class="red"') + s.arr(104,70,190,70,'class="blue"') + s.txt(30,24,"i₁") + s.txt(30,128,"i₂") + s.txt(140,62,"i₁ + i₂"), 210, 135, "Σ i_in = Σ i_out; ΣΔV = 0 around a loop"),
  P(R`Series $R = \sum R_i$. Parallel $\frac1R = \sum\frac1{R_i}$. A uniform wire bent into an equilateral triangle, measured across two vertices: $\frac{2R}{9}$. Points at equal potential can be joined. A resistor between equipotential points carries no current.`),
  S(s.res(10,30,80,"R₁") + s.res(80,30,150,"R₂") + s.txt(160,34,"series") + s.line(10,95,30,95) + s.line(30,80,30,110) + s.res(30,80,110,"R₁") + s.res(30,110,110,"") + s.txt(62,132,"R₂") + s.line(110,80,110,110) + s.line(110,95,130,95) + s.txt(145,99,"parallel"), 220, 140),
  P(R`<b>Cells</b>: n identical cells in series give $i = \frac{n\varepsilon}{R + nr}$. In parallel: $i = \frac{\varepsilon}{R + r/n}$. Non-identical cells in parallel:`, R`\varepsilon_{eq} = \frac{\varepsilon_1/r_1 + \varepsilon_2/r_2}{1/r_1 + 1/r_2},\qquad r_{eq} = \frac{r_1r_2}{r_1 + r_2}`),
  J(R`Two cells in parallel, then one reversed: replace $\varepsilon_2$ with $-\varepsilon_2$ in the same formula. Networks and Kirchhoff's laws are asked in almost every shift.`, "2026 · 6 Apr · Evening; 2025 · 3 Apr · Evening; 2026 · 28 Jan · Morning; 2025 · 24 Jan · Morning")
]],
["32.10 – 32.12 Wheatstone Bridge, Meters, Potentiometer", [
  P(R`<b>Wheatstone bridge</b> balanced (no galvanometer current) when:`, R`\frac PQ = \frac RS`, S(s.path("M30 80 L100 20 L170 80 L100 140 Z") + s.line(100, 20, 100, 140, 'class="red"') + s.txt(55, 42, "P") + s.txt(135, 42, "Q") + s.txt(55, 125, "R") + s.txt(135, 125, "S") + s.txt(106, 84, "G"), 200, 150)),
  P(R`<b>Metre bridge</b>: $\frac RS = \frac{l}{100 - l}$. It is most accurate when the null point is near the middle. Swapping R and S shifts the null point to $100 - l$. Used to find resistivity $\rho = \frac{S\pi r^2}{L}$ (Experimental Skill).`),
  S(s.line(20,100,220,100,'style="stroke-width:3"') + s.line(20,100,20,50) + s.line(220,100,220,50) + s.line(20,50,50,50) + s.res(50,50,100,"R") + s.line(100,50,140,50) + s.res(140,50,190,"S") + s.line(190,50,220,50) + s.line(120,50,120,64) + s.circ(120,73,9) + s.txt(116,78,"G") + s.line(120,82,120,96) + s.path("M116 96 L120 100 L124 96",'class="red"') + s.line(20,115,120,115,'class="thin"') + s.txt(64,130,"l") + s.txt(150,130,"100 − l"), 235, 138, "Null point: R/S = l/(100 − l)"),
  P(R`<b>Ammeter</b> = galvanometer with a <b>shunt</b> S in parallel. <b>Voltmeter</b> = galvanometer with a large series R:`, [R`S = \frac{i_gG}{i - i_g},\qquad R = \frac{V}{i_g} - G`]),
  S(s.circ(60,40,14) + s.txt(55,45,"G") + s.line(20,40,46,40) + s.line(74,40,110,40) + s.line(30,40,30,75) + s.res(30,75,100,"S") + s.line(100,75,100,40) + s.txt(6,105,"ammeter: small S in parallel") + s.circ(170,40,14) + s.txt(165,45,"G") + s.line(134,40,156,40) + s.res(184,40,250,"R") + s.txt(140,85,"voltmeter: big R in series"), 260, 112, "S = I_gG/(I − I_g); R = V/I_g − G"),
  P(R`To raise a voltmeter's range from V to nV, add $(n - 1)R_V$ in series. An ideal ammeter has R = 0, an ideal voltmeter R = ∞.`),
  P(R`<b>Potentiometer</b>: potential gradient $k = V/L$ along a uniform wire. It measures emf without drawing current: $\varepsilon_1/\varepsilon_2 = l_1/l_2$. Internal resistance: $r = R\left(\frac{l_1}{l_2} - 1\right)$.`),
  S(s.line(20,60,220,60,'style="stroke-width:3"') + s.txt(10,78,"A") + s.txt(222,78,"B") + s.line(20,60,20,20) + s.line(20,20,116,20) + s.cell(120,20,"E₀") + s.line(124,20,220,20) + s.line(220,20,220,60) + s.line(20,60,20,110) + s.line(20,110,76,110) + s.cell(80,110,"E") + s.line(84,110,131,110) + s.circ(140,110,9) + s.txt(136,115,"G") + s.line(149,110,160,110) + s.line(160,110,160,64) + s.path("M156 64 L160 60 L164 64",'class="red"') + s.txt(166,92,"jockey") + s.line(20,140,160,140,'class="thin"') + s.txt(80,154,"balancing length l"), 235, 160, "Null point: E = k l (draws no current)"),
  J(R`Instruments are asked very often: galvanometer shunt or series conversion (two-data-point questions), metre-bridge null-point shift, voltmeter range extension.`, "2026 · 6 Apr · Evening; 2024 · 6 Apr · Evening; 2026 · 24 Jan · Evening; 2026 · 4 Apr · Morning")
]],
["32.13 – 32.14 RC Circuits & Atmospheric Electricity", [
  P(R`Charging and discharging through R: $q = CE(1 - e^{-t/RC})$, $i = \frac{E}{R}e^{-t/RC}$ (see Electrostatic Potential and Capacitance). Atmospheric electricity: a fair-weather field of about 100 V/m downward, and thunderstorms recharge the earth.`)
]]
],
pyq: {
  pat: [[R`Galvanometer → ammeter/voltmeter`, "2026 · 6 Apr · Evening; 2025 · 3 Apr · Morning"], [R`Cells in series/parallel, reversed polarity`, "2026 · 6 Apr · Evening; 2025 · 3 Apr · Evening"], [R`Metre-bridge null shift`, "2026 · 24 Jan · Evening"], [R`Equivalent resistance, balanced networks`, "2026 · 28 Jan · Morning; 2025 · 28 Jan · Evening"], [R`Heat developed in a network`, "2026 · 6 Apr · Morning; 2026 · 21 Jan · Morning"], [R`Heater with a series resistor, bulb ratings`, "2024 · 8 Apr · Evening; 2026 · 2 Apr · Evening"]],
  combo: [R`Cells + Kirchhoff`, R`Joule heating + network`, R`R(T) + kelvin conversion`, R`Current + capacitor steady state`],
  trap: [R`Bulb resistance $= V_{rated}^2/P_{rated}$. In series, the lower-wattage bulb glows brighter.`, R`The shunt divides current inversely as the resistances.`],
  mist: [R`Ignoring internal resistance when it is given.`]
},
aprFilter: "^(?!.*(Joule)).*"
});
})();
