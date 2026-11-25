(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 31, short: "Capacitors",
intro: R`A capacitor stores charge and energy. The most-tested ideas: dielectrics, steady-state DC circuits, charge sharing.`,
sec: [
["31.1 – 31.2 Capacitance & its Calculation", [
  P(R`$C = Q/V$ (farad). It depends only on geometry and the medium.`),
  S(s.line(60,20,60,130,'style="stroke-width:4"') + s.line(130,20,130,130,'style="stroke-width:4"') + [35,60,85,110].map(y => s.arr(64,y,126,y,'class="red"')).join("") + [25,50,75,100,125].map(y => s.txt(46,y+4,"+") + s.txt(136,y+4,"−")).join("") + s.line(60,145,130,145,'class="thin"') + s.txt(92,160,"d") + s.txt(20,80,"area A"), 180, 165, "C = ε₀A/d, uniform E = σ/ε₀"),
  T(["Capacitor", "C"], [["Parallel plates (A, d)", "$\\frac{\\varepsilon_0A}{d}$"], ["Isolated sphere (R)", "$4\\pi\\varepsilon_0R$"], ["Spherical (a < b)", "$4\\pi\\varepsilon_0\\frac{ab}{b - a}$"], ["Cylindrical (length l)", "$\\frac{2\\pi\\varepsilon_0l}{\\ln(b/a)}$"]]),
  P(R`Parallel-plate capacitor with a slab of thickness t and dielectric constant K (a metal slab means K → ∞):`, R`C = \frac{\varepsilon_0A}{d - t + t/K}`),
  S(s.line(40,20,40,130,'style="stroke-width:4"') + s.line(160,20,160,130,'style="stroke-width:4"') + s.rect(80,20,50,110,'class="fl2"') + s.txt(100,80,"K") + s.line(80,142,130,142,'class="thin"') + s.txt(102,156,"t") + s.line(40,10,160,10,'class="thin"') + s.txt(96,8,"d"), 200, 160, "C = ε₀A / (d − t + t/K); metal slab: K → ∞")
]],
["31.3 Combination of Capacitors", [
  P(R`<b>Series</b>: same Q, $\frac1C = \sum\frac1{C_i}$. <b>Parallel</b>: same V, $C = \sum C_i$.`, null, S(s.line(10, 40, 60, 40) + s.line(60, 25, 60, 55) + s.line(70, 25, 70, 55) + s.line(70, 40, 120, 40) + s.line(120, 25, 120, 55) + s.line(130, 25, 130, 55) + s.line(130, 40, 200, 40) + s.txt(60, 80, "series: same Q"), 210, 90)),
  P(R`<b>Partially filled</b> plates. Side by side (dielectric covering part of the area) → parallel: $C = \frac{\varepsilon_0}{d}(K_1A_1 + K_2A_2)$. Stacked (part of the thickness) → series. Half the area with K: $C' = C\frac{1+K}{2}$. Half the thickness with K: $C' = \frac{2KC}{K+1}$.`),
  S(s.line(20,20,20,110,'style="stroke-width:3"') + s.line(80,20,80,110,'style="stroke-width:3"') + s.rect(21,65,58,45,'class="fl2"') + s.txt(46,92,"K") + s.txt(4,132,"side by side → parallel") + s.line(140,20,140,110,'style="stroke-width:3"') + s.line(200,20,200,110,'style="stroke-width:3"') + s.rect(141,20,28,90,'class="fl2"') + s.txt(150,70,"K") + s.txt(138,132,"layered → series"), 245, 140),
  P(R`Bridge networks: if balanced ($C_1/C_2 = C_3/C_4$), drop the middle capacitor. Otherwise use symmetry or node potentials.`),
  J(R`A half-filled dielectric is a favourite. Check from the figure whether it is side-by-side (parallel) or stacked (series).`, "2026 · 2 Apr · Morning; 2026 · 4 Apr · Evening; 2025 · 4 Apr · Morning")
]],
["31.4 – 31.5 Force Between Plates & Stored Energy", [
  P(R`Energy stored and energy density of the field:`, [R`U = \frac{Q^2}{2C} = \tfrac12CV^2 = \tfrac12QV,\qquad u = \tfrac12\varepsilon_0E^2`]),
  P(R`Force between the plates (each plate is in the field of the other, $\sigma/2\varepsilon_0$):`, R`F = \frac{Q^2}{2\varepsilon_0A}`),
  P(R`<b>Charge sharing</b> (two capacitors joined): Q is conserved, there is a common potential, and energy is <b>lost</b> as heat or radiation:`, [R`V = \frac{C_1V_1 + C_2V_2}{C_1 + C_2},\qquad \Delta U = \frac{C_1C_2(V_1 - V_2)^2}{2(C_1 + C_2)}`]),
  S(s.line(30,40,96,40) + s.cap(100,40,"C₁, V₁") + s.line(104,40,170,40) + s.line(30,110,96,110) + s.cap(100,110,"") + s.txt(80,140,"C₂, V₂") + s.line(104,110,170,110) + s.line(30,40,30,110) + s.line(170,40,170,65) + s.line(170,85,180,66) + s.line(170,85,170,110) + s.txt(184,80,"S"), 210, 148, "Q conserved: V = (C₁V₁ + C₂V₂)/(C₁ + C₂); some energy is lost"),
  P(R`<b>Battery connected</b> (V constant) vs <b>isolated</b> (Q constant): inserting a dielectric with the battery on raises Q and U by K. Isolated, V and U drop by K. Pulling plates apart with the battery on: $U = \frac{\varepsilon_0AV^2}{2x}$, so $dU/dt\propto x^{-2}$.`),
  J(R`Charge sharing (energy lost) and battery-connected vs disconnected dielectric questions are repeated each year.`, "2026 · 22 Jan · Evening; 2024 · 30 Jan · Morning; 2024 · 31 Jan · Morning; 2026 · 4 Apr · Morning")
]],
["31.6 – 31.10 Dielectrics, Polarisation, Gauss's Law with Dielectrics", [
  P(R`A dielectric polarises: <b>non-polar</b> molecules get induced dipoles, <b>polar</b> molecules align. Bound surface charges reduce the field: $E = E_0/K$.`, [R`q_{bound} = q\left(1 - \frac1K\right)`, R`\oint K\vec E\cdot d\vec S = \frac{q_{free}}{\varepsilon_0}`]),
  S(s.line(20,20,20,130,'style="stroke-width:4"') + s.line(180,20,180,130,'style="stroke-width:4"') + s.rect(70,20,60,110,'class="fl2"') + [30,60,90,120].map(y => s.txt(6,y+4,"+") + s.txt(186,y+4,"−") + s.txt(74,y+4,"−") + s.txt(118,y+4,"+")).join("") + [45,105].map(y => s.arr(24,y,66,y,'class="red"') + s.arr(134,y,176,y,'class="red"') + s.arr(88,y,112,y,'class="red"')).join("") + s.txt(78,148,"E/K inside"), 200, 155, "Induced surface charges reduce the field: E = E₀/K"),
  P(R`Dielectric strength = the maximum field before breakdown (air ≈ 3 × 10⁶ V/m). Energy density in a dielectric: $\frac12K\varepsilon_0E^2$.`),
  J(R`Induced (bound) charge on a dielectric gives K. A leaky dielectric between the plates has $RC = \rho\varepsilon_0K$ (independent of geometry).`, "2025 · 7 Apr · Evening; 2026 · 8 Apr · Evening")
]],
["Charging & Discharging; DC Steady State", [
  P(R`RC circuit: time constant τ = RC.`, [R`\text{charging: } q = CE(1 - e^{-t/RC}),\qquad \text{discharging: } q = Q_0e^{-t/RC}`], G({ xl: "t/RC", yl: "q/q₀", xr: [0, 5], yr: [0, 1.1], fns: [x => 1 - Math.exp(-x), x => Math.exp(-x)], lab: ["charging", "discharging"] })),
  P(R`At t = 0 an uncharged capacitor acts like a wire. In <b>steady state</b> it is an open circuit: no current flows in its branch, and its voltage equals the voltage across whatever it is in parallel with.`),
  S(s.line(20,30,56,30) + s.cell(60,30,"E") + s.line(64,30,90,30) + s.res(90,30,160,"R") + s.line(160,30,190,30) + s.line(190,30,190,110) + s.line(190,110,114,110) + s.cap(110,110,"C") + s.line(106,110,20,110) + s.line(20,110,20,30), 210, 132, "t = 0: C acts like a wire · t → ∞: open circuit"),
  J(R`Steady-state charge on a capacitor in a resistor network, and constant-current charging (V = It/C), are common numericals.`, "2026 · 8 Apr · Evening; 2024 · 27 Jan · Morning; 2025 · 29 Jan · Evening")
]],
["31.11 – 31.12 Corona Discharge & Van de Graaff", [
  P(R`Very large fields near sharp points ionise the air (corona discharge, lightning conductors). A Van de Graaff generator builds up high voltage by carrying charge onto a large hollow sphere (charge always goes to the outer surface).`)
]]
],
pyq: {
  pat: [[R`Dielectric with battery connected/disconnected`, "2024 · 31 Jan · Morning; 2024 · 4 Apr · Evening"], [R`Dielectric + parallel combination`, "2025 · 8 Apr · Evening; 2026 · 23 Jan · Morning"], [R`Charge sharing energy loss`, "2026 · 22 Jan · Evening; 2024 · 30 Jan · Morning"], [R`Steady-state Q in DC circuits`, "2026 · 8 Apr · Evening; 2024 · 27 Jan · Morning"], [R`Leakage / RC with resistive dielectric`, "2024 · 5 Apr · Morning; 2026 · 8 Apr · Evening"]],
  combo: [R`Capacitor + current electricity (steady state, RC)`, R`Capacitor + diode (RC time constant depends on which diode conducts)`],
  trap: [R`Charge sharing always loses energy, even though Q is conserved.`, R`Battery on: V constant. Battery off: Q constant.`],
  mist: [R`Including a resistor in series with C in the steady-state voltage.`]
}
});
})();
