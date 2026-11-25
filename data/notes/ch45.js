(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 45, short: "Semiconductors & Devices",
intro: R`Asked in every JEE shift. Logic gates, diodes and Zener are the most asked. <b>Transistors (45.9) are no longer in the JEE Main syllabus.</b>`,
sec: [
["45.1 – 45.3 Energy Bands; Semiconductors", [
  P(R`In solids, atomic levels spread into <b>bands</b>. The valence band and conduction band are separated by the band gap $E_g$.`, null, S(s.rect(10, 20, 55, 30, s.fill) + s.rect(10, 60, 55, 30, s.fill2) + s.rect(80, 15, 55, 30, s.fill) + s.rect(80, 105, 55, 30, s.fill2) + s.rect(150, 15, 55, 30, s.fill) + s.rect(150, 70, 55, 30, s.fill2) + s.txt(10, 150, "conductor") + s.txt(82, 150, "insulator") + s.txt(145, 150, "semicond.") + s.txt(92, 80, "Eg > 3 eV") + s.txt(152, 62, "Eg ~1 eV"), 215, 160)),
  P(R`Conductors: overlapping bands. Insulators: $E_g$ > 3 eV. Semiconductors: $E_g$ ~ 1 eV (Si 1.1 eV, Ge 0.7 eV). Their resistivity <b>falls</b> with temperature (negative temperature coefficient).`),
  P(R`<b>Intrinsic</b> (pure): $n_e = n_h = n_i$. Holes behave as positive carriers.`),
  S(s.grid(30,30,190,110,40,(x,y) => s.circ(x,y,10,'class="fl2"') + s.txt(x-7,y+4,"Si")) + s.grid(30,30,150,110,40,(x,y) => s.line(x+10,y,x+30,y,'class="thin"')) + s.grid(30,30,190,70,40,(x,y) => s.line(x,y+10,x,y+30,'class="thin"')) + s.circ(130,50,4,'class="redf"') + s.arr(134,48,160,40,'class="red"') + s.circ(110,70,5,'class="thin"') + s.txt(150,32,"free e⁻") + s.txt(86,92,"hole"), 220, 125, "Thermal energy breaks a bond: e⁻ + hole")
]],
["45.4 – 45.5 Extrinsic Semiconductors & Carrier Density", [
  P(R`<b>n-type</b>: pentavalent donor (P, As, Sb), electrons are the majority carriers. <b>p-type</b>: trivalent acceptor (B, Al, In, Ga), holes are the majority. Both are electrically <b>neutral</b>.`, [R`n_en_h = n_i^2`, R`\sigma = e(n_e\mu_e + n_h\mu_h)`]),
  S(s.grid(20,30,100,110,40,(x,y) => s.circ(x,y,9,'class="fl2"')) + s.circ(60,70,9,'style="fill:var(--b2)"') + s.txt(56,74,"P") + s.circ(78,56,3.5,'class="redf"') + s.txt(10,138,"n-type: extra e⁻") + s.grid(140,30,220,110,40,(x,y) => s.circ(x,y,9,'class="fl2"')) + s.circ(180,70,9,'style="fill:var(--b4)"') + s.txt(176,74,"B") + s.circ(199,70,4,'class="thin"') + s.txt(140,138,"p-type: hole"), 235, 146, "Doping with group-15 or group-13 atoms"),
  P(R`Donor levels lie just below the conduction band, acceptor levels just above the valence band.`),
  S(s.rect(10,10,90,25,'class="fl"') + s.rect(10,110,90,25,'class="fl2"') + s.line(15,45,95,45,'class="red" style="stroke-dasharray:4 3"') + s.txt(14,28,"CB") + s.txt(14,128,"VB") + s.txt(18,62,"donor level") + s.rect(130,10,90,25,'class="fl"') + s.rect(130,110,90,25,'class="fl2"') + s.line(135,100,215,100,'class="blue" style="stroke-dasharray:4 3"') + s.txt(134,94,"acceptor level") + s.txt(30,154,"n-type") + s.txt(150,154,"p-type"), 230, 160, "Impurity levels sit inside the band gap")
]],
["45.6 – 45.8 p-n Junction & Diode Characteristics", [
  P(R`Diffusion of majority carriers across the junction leaves immobile ions, creating the <b>depletion region</b> and the <b>barrier potential</b> (Si ≈ 0.7 V, Ge ≈ 0.3 V). The depletion region extends further into the <b>lightly doped</b> side ($N_Ax_p = N_Dx_n$).`),
  S(s.rect(10,30,100,60,'style="fill:var(--b4)"') + s.rect(110,30,100,60,'style="fill:var(--b2)"') + s.rect(90,30,40,60,'style="fill:var(--paper)"') + s.rect(90,30,40,60,'class="thin" style="stroke-dasharray:3 3"') + [[20,45],[40,65],[60,50],[30,80],[70,75]].map(([x,y]) => s.circ(x,y,3,'class="thin"')).join("") + [[150,45],[170,65],[190,50],[160,80],[200,75]].map(([x,y]) => s.circ(x,y,3,'class="redf"')).join("") + [48,66,84].map(y => s.txt(94,y,"−") + s.txt(118,y,"+")).join("") + s.txt(40,22,"p") + s.txt(160,22,"n") + s.txt(64,108,"depletion layer") + s.arr(124,116,98,116,'class="red"') + s.txt(128,124,"E (barrier)"), 220, 130, "Holes ○ in p, electrons ● in n, fixed ions in the gap"),
  P(R`<b>Forward bias</b> (p to +): the barrier lowers and the current rises sharply beyond the knee voltage (mA, majority carriers). <b>Reverse bias</b>: a tiny current (μA) due to <b>minority</b> carriers, almost independent of voltage until breakdown.`, null, G({ xl: "V", yl: "I", xr: [-5, 1.2], yr: [-0.3, 1.2], fns: [x => (x > 0 ? Math.min(1.2, 0.002 * (Math.exp(x * 8) - 1)) : (x > -4 ? -0.02 : -0.02 - 3 * (-4 - x)))], lab: ["I–V: knee ≈ 0.7 V, breakdown"] })),
  P(R`Diode current with a forward drop: $i = \frac{V - 0.7}{R}$. An ideal diode is a short when forward biased and an open circuit when reverse biased.`),
  S(s.line(20,40,80,40) + s.path("M80 30 L80 50 L98 40 Z",'class="fl"') + s.line(98,30,98,50,'style="stroke-width:3"') + s.line(98,40,130,40) + s.res(130,40,200,"R") + s.line(200,40,200,100) + s.line(200,100,114,100) + s.cell(110,100,"V") + s.line(106,100,20,100) + s.line(20,100,20,40) + s.txt(70,22,"Si diode"), 215, 120, "Forward bias: i = (V − 0.7)/R"),
  P(R`<b>Rectifiers</b>: half-wave (output frequency f) and full-wave (centre-tap or bridge, output frequency 2f). A capacitor filter smooths the ripple.`),
  G({ xl: "t", yl: "", xr: [0, 12.6], yr: [-1.4, 1.1], fns: [x => Math.max(0, Math.sin(x)), x => Math.abs(Math.sin(x)) - 1.3], lab: ["half-wave (top)", "full-wave (bottom, shifted)"] }),
  T(["Device", "Bias", "Key point"], [["LED", "forward", "heavily doped; light emitted when e and h recombine; $\\lambda = hc/E_g$"], ["Photodiode", "reverse", "current ∝ light intensity; detects light"], ["Solar cell", "none (4th quadrant)", "generates emf; large area, $E_g\\approx1.5$ eV"], ["Zener diode", "reverse (breakdown)", "heavily doped; voltage regulator"]]),
  P(R`<b>Zener regulator</b>: a series resistor $R_s$ takes up the extra voltage.`, [R`I_{Z,max} = \frac{P_{max}}{V_Z},\qquad R_s = \frac{V_{in} - V_Z}{I_Z + I_L}`]),
  S(s.line(20,30,50,30) + s.res(50,30,110,"R_s") + s.line(110,30,190,30) + s.line(140,30,140,60) + s.path("M130 80 L150 80 L140 62 Z",'class="fl"') + s.path("M126 56 L130 60 L150 60 L154 64",'style="stroke-width:2.5"') + s.line(140,80,140,110) + s.vres(190,30,110,"R_L") + s.line(20,110,190,110) + s.txt(2,74,"V_in") + s.txt(112,76,"Z"), 235, 122, "Reverse-biased Zener holds V_Z: I_s = I_Z + I_L"),
  J(R`Depletion width with unequal doping (wider on the lightly doped side), reverse current due to minority carriers (assertion–reason), the minimum Zener series resistor, a Zener clipper from waveforms, LED/photodiode bias and the λ = hc/E_g threshold.`, "2026 · 5 Apr · Evening; 2026 · 4 Apr · Evening; 2023 · 10 Apr · Morning; 2026 · 2 Apr · Morning; 2024 · 9 Apr · Morning; 2023 · 25 Jan · Morning")
]],
["45.9 Junction Transistors (not in current syllabus)", [
  W(R`Transistors were removed from the JEE Main syllabus. Only for reference: $I_E = I_B + I_C$, $\beta = I_C/I_B$, $\alpha = I_C/I_E$, $\beta = \frac{\alpha}{1-\alpha}$.`)
]],
["45.10 Logic Gates", [
  T(["Gate", "Boolean", "Output 1 when…"], [["OR", "Y = A + B", "any input is 1"], ["AND", "Y = A·B", "all inputs are 1"], ["NOT", "Y = Ā", "input is 0"], ["NAND", "Y = $\\overline{AB}$", "not all inputs are 1"], ["NOR", "Y = $\\overline{A+B}$", "all inputs are 0"], ["XOR", "Y = $A\\bar B + \\bar AB$", "inputs differ"]]),
  P(R`<b>De Morgan's theorems</b>. NAND and NOR are <b>universal gates</b>: any gate can be built from them.`, [R`\overline{A + B} = \bar A\cdot\bar B,\qquad \overline{AB} = \bar A + \bar B`]),
  S(s.path("M10 10 L30 10 A20 20 0 0 1 30 50 L10 50 Z",'class="fl2"') + s.txt(14,66,"AND") + s.path("M70 10 Q100 10 115 30 Q100 50 70 50 Q82 30 70 10Z",'class="fl2"') + s.txt(80,66,"OR") + s.path("M140 12 L140 48 L168 30 Z",'class="fl2"') + s.circ(172,30,4) + s.txt(140,66,"NOT") + s.path("M10 80 L30 80 A20 20 0 0 1 30 120 L10 120 Z",'class="fl2"') + s.circ(54,100,4) + s.txt(10,136,"NAND") + s.path("M70 80 Q100 80 115 100 Q100 120 70 120 Q82 100 70 80Z",'class="fl2"') + s.circ(119,100,4) + s.txt(76,136,"NOR") + s.path("M146 80 Q176 80 191 100 Q176 120 146 120 Q158 100 146 80Z",'class="fl2"') + s.path("M140 80 Q152 100 140 120") + s.txt(150,136,"XOR"), 205, 142, "Gate symbols (bubble = NOT)"),
  L([R`NAND with both inputs joined = NOT. NOR with both inputs joined = NOT.`, R`NOR fed with inverted inputs = AND. NAND fed with inverted inputs = OR.`, R`NAND followed by NOT = AND. NOR followed by NOT = OR.`]),
  J(R`Logic gates are the most asked group: truth tables of combinations, the equivalent single gate, waveform output, and 4-bit inputs. Write the Boolean expression, simplify with De Morgan, then evaluate.`, "2026 · 22 Jan · Evening; 2025 · 29 Jan · Morning; 2026 · 2 Apr · Evening; 2026 · 8 Apr · Evening; 2026 · 4 Apr · Morning")
]]
],
pyq: {
  pat: [[R`Truth table / equivalent gate`, "2026 · 22 Jan · Evening; 2025 · 3 Apr · Evening; 2025 · 29 Jan · Morning"], [R`Zener series resistance`, "2023 · 10 Apr · Morning; 2025 · 2 Apr · Morning; 2026 · 4 Apr · Evening"], [R`Diode current with 0.7 V drop; forward/reverse identification`, "2026 · 28 Jan · Morning; 2025 · 22 Jan · Morning"], [R`Clipping / ideal-diode output`, "2025 · 8 Apr · Evening; 2026 · 2 Apr · Morning"], [R`LED/photodiode threshold λ = hc/E_g`, "2024 · 9 Apr · Morning"]],
  combo: [R`Diode + RC time constant`, R`Logic gates + LED circuits`],
  trap: [R`An LED works only in forward bias, a photodiode in reverse bias.`, R`Doped semiconductors are electrically neutral.`],
  mist: [R`Missing an inversion bubble when reading gate symbols.`]
}
});
})();
