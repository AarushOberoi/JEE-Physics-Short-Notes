(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 13, short: "Fluid Mechanics",
intro: R`Fluids at rest (pressure, Pascal, Archimedes) and fluids in motion (continuity, Bernoulli). Surface tension and viscosity are covered below.`,
sec: [
["13.1 – 13.3 Pressure in a Fluid & Pascal's Law", [
  P(R`A fluid at rest exerts force only <b>perpendicular</b> to any surface. Pressure = normal force per unit area (a scalar; 1 Pa = 1 N m⁻², 1 atm = 1.013 × 10⁵ Pa).`, R`P = \frac{dF}{dA}`),
  P(R`Pressure increases with depth. Points at the same level in the same continuous liquid have the same pressure, whatever the shape of the vessel.`, R`P = P_0 + \rho gh`, S(s.path("M30 20 L30 140 L170 140 L170 20", "") + s.rect(30, 40, 140, 100, s.fill) + s.line(100, 40, 100, 110, s.dash) + s.circ(100, 110, 3, 'class="dot"') + s.txt(104, 80, "h") + s.txt(106, 125, "P = P₀ + ρgh") + s.txt(60, 34, "P₀"), 200, 150)),
  P(R`<b>Pascal's law</b>: a pressure change applied to an enclosed liquid is transmitted <b>undiminished</b> to every point. Hydraulic lift / press: $\frac{F_1}{A_1} = \frac{F_2}{A_2}$.`),
  S(s.path("M20 60 L50 60 L50 110 L120 110 L120 80 L200 80 L200 140 L20 140 Z",'class="fl2"') + s.path("M20 30 L20 140 L200 140 L200 40 M50 30 L50 110 L120 110 L120 40") + s.rect(20,52,30,8,'class="fl"') + s.rect(120,72,80,8,'class="fl"') + s.arr(35,14,35,50,'class="red"') + s.arr(160,72,160,30,'class="blue"') + s.txt(40,26,"F₁") + s.txt(166,46,"F₂") + s.txt(24,78,"A₁") + s.txt(150,100,"A₂"), 215, 150, "Hydraulic lift: F₂ = F₁ A₂/A₁"),
  P(R`In a container accelerating up with $a$: $P = P_0 + \rho(g + a)h$. Accelerating horizontally: the free surface tilts, $\tan\theta = a/g$.`)
]],
["13.4 Atmospheric Pressure & Barometer", [
  P(R`A mercury barometer holds a column of height $h$ where $P_0 = \rho_{Hg}gh$ (76 cm at 1 atm). Manometer: pressure difference = $\rho gh$ (gauge pressure). Absolute pressure = atmospheric + gauge.`),
  S(s.path("M30 120 L30 150 L170 150 L170 120") + s.rect(31,125,138,24,'class="fl2"') + s.path("M90 20 L90 140 M110 20 L110 140") + s.line(90,20,110,20) + s.rect(91,46,18,94,'class="fl2"') + s.txt(114,34,"vacuum") + s.line(130,46,130,125,'class="thin"') + s.txt(135,90,"h = 76 cm") + s.arr(60,98,60,123,'class="red"') + s.txt(48,94,"P₀"), 210, 158, "P₀ = ρ_Hg g h")
]],
["13.5 – 13.6 Archimedes' Principle & Buoyancy", [
  P(R`A body (wholly or partly) immersed in a fluid feels an upward <b>buoyant force</b> equal to the weight of the fluid displaced, acting at the centre of buoyancy.`, R`F_B = \rho_{fluid}\,V_{sub}\,g`),
  S(s.path("M20 40 L20 140 L190 140 L190 40") + s.rect(21,70,168,69,'class="fl2"') + s.line(20,70,190,70,'class="blue"') + s.block(80,55,50,45,"") + s.arr(95,78,95,128) + s.txt(70,124,"mg") + s.arr(115,96,115,30,'class="red"') + s.txt(121,36,"B = ρ_l V_sub g"), 215, 150, "Buoyant force = weight of liquid displaced"),
  P(R`<b>Floating</b>: weight = buoyant force ⇒ fraction submerged $= \rho_{body}/\rho_{liquid}$. Apparent weight in a liquid $= mg - F_B$. Relative density = weight in air / loss of weight in water.`, R`\frac{V_{sub}}{V} = \frac{\rho_{body}}{\rho_{liquid}}`),
  P(R`Extra load $m$ on a floating body sinks it further by a volume $m/\rho_{liquid}$.`),
  J(R`Floating cube + coin: the extra submerged depth × area × ρ gives the coin's mass (2026). Hydraulic lift and flotation are also asked.`, "2026 · 2 Apr · Morning; 2023 · 8 Apr · Evening; 2025 · 28 Jan · Evening")
]],
["13.7 – 13.10 Fluid Flow & Equation of Continuity", [
  P(R`<b>Steady (streamline)</b> flow: the velocity at a point doesn't change with time, and streamlines never cross. <b>Turbulent</b> flow is irregular (above the critical velocity). Ideal fluid: incompressible, non-viscous, irrotational.`),
  S(s.path("M10 30 L80 30 Q120 30 140 55 L210 55 M10 130 L80 130 Q120 130 140 105 L210 105") + [55,80,105].map(y => s.path("M10 " + y + " L80 " + y + " Q120 " + y + " 140 " + (80 + (y - 80) * 0.6) + " L210 " + (80 + (y - 80) * 0.6),'class="blue"')).join("") + s.arr(25,44,60,44,'class="red"') + s.arr(160,68,206,68,'class="red"') + s.txt(30,40,"v₁") + s.txt(170,64,"v₂ > v₁"), 220, 145, "Streamlines crowd where the flow is faster: A₁v₁ = A₂v₂"),
  P(R`<b>Continuity</b> (mass conservation, incompressible fluid):`, R`A_1v_1 = A_2v_2 = \text{volume flow rate}`, S(s.path("M10 30 L80 30 L130 55 L200 55 M10 130 L80 130 L130 105 L200 105") + s.arr(25, 80, 65, 80) + s.arr(150, 80, 210, 80, 'class="red"') + s.txt(30, 72, "v₁") + s.txt(170, 72, "v₂ > v₁") + s.txt(20, 148, "A₁") + s.txt(170, 125, "A₂"), 220, 155, "Narrow section: faster flow")),
  J(R`A spray gun with $n$ holes: $Av = n\,a\,v'$. Check cm² and mm² conversions.`, "2026 · 4 Apr · Evening")
]],
["13.11 – 13.12 Bernoulli's Equation & Applications", [
  P(R`Along a streamline of an ideal fluid (energy conservation per unit volume):`, R`P + \tfrac12\rho v^2 + \rho gh = \text{constant}`),
  S(s.path("M10 110 L70 110 Q110 110 130 60 L210 60 M10 150 L70 150 Q118 150 140 100 L210 100") + s.arr(18,130,58,130,'class="red"') + s.arr(155,80,205,80,'class="red"') + s.txt(16,124,"P₁, v₁") + s.txt(155,52,"P₂, v₂") + s.line(214,80,214,130,'class="thin"') + s.txt(217,110,"h"), 230, 160, "P + ½ρv² + ρgh = constant"),
  D("Bernoulli's equation", [R`Work done by pressure on a small volume $\Delta V$ moving from 1 to 2: $(P_1 - P_2)\Delta V$.`, R`This equals $\Delta KE + \Delta PE = \frac12\rho\Delta V(v_2^2 - v_1^2) + \rho\Delta Vg(h_2 - h_1)$. Rearranging gives the equation.`]),
  P(R`<b>Torricelli's theorem</b>: speed of efflux from a hole at depth $h$ below the free surface:`, [R`v = \sqrt{2gh}`, R`\text{range on ground} = 2\sqrt{h(H - h)}\ (\text{max } H \text{ at } h = H/2)`], S(s.path("M30 20 L30 150 L120 150 L120 20") + s.rect(30, 35, 90, 115, s.fill) + s.path("M120 90 Q 160 92 185 150", 'class="red"') + s.line(125, 35, 125, 90, s.dash) + s.txt(130, 65, "h") + s.txt(150, 100, "v = √2gh"), 200, 160)),
  P(R`<b>Venturimeter</b>: the pressure difference across the throat gives the flow rate $v_1 = A_2\sqrt{\frac{2\Delta P}{\rho(A_1^2 - A_2^2)}}$. Other uses: the Pitot tube, the lift on an aeroplane wing, an atomiser, a roof blown off in a storm, the Magnus effect.`),
  S(s.path("M10 40 L70 40 L100 60 L130 60 L160 40 L220 40 M10 100 L70 100 L100 80 L130 80 L160 100 L220 100") + s.path("M40 100 L40 140 L115 140 L115 80",'class="blue"') + s.rect(36,124,8,16,'class="fl2"') + s.rect(111,108,8,32,'class="fl2"') + s.line(60,124,104,124,s.dash) + s.line(60,108,104,108,s.dash) + s.txt(74,120,"h") + s.arr(15,70,55,70,'class="red"') + s.arr(98,70,132,70,'class="red"') + s.txt(18,64,"v₁") + s.txt(104,58,"") + s.txt(140,75,"v₂ (faster, lower P)"), 260, 148, "Throat: higher speed, lower pressure"),
  J(R`Bernoulli + continuity (same level: $\Delta P = \frac12\rho(v_2^2 - v_1^2)$) and Torricelli + projectile range appear 3–5 times a year.`, "2026 · 8 Apr · Evening; 2026 · 6 Apr · Evening; 2023 · 13 Apr · Morning; 2022 · 28 Jul · Evening")
]]
],
pyq: {
  pat: [
    [R`Bernoulli in a horizontal tube with continuity`, "2023 · 13 Apr · Morning; 2026 · 8 Apr · Evening"],
    [R`Torricelli efflux and range`, "2026 · 6 Apr · Evening; 2022 · 28 Jul · Evening"],
    [R`Pascal / hydraulic lift / flotation, relative density`, "2023 · 8 Apr · Evening; 2025 · 28 Jan · Evening"],
    [R`Assertion–reason: toothpaste tube (Pascal)`, "2023 · 6 Apr · Evening"]
  ],
  trap: [R`Efflux with extra pressure on top: $v = \sqrt{2(\Delta P/\rho + gh)}$.`, R`The buoyant force depends on the displaced volume, not on the body's density.`],
  mist: [R`Using gauge pressure where absolute pressure is needed (and the other way round).`]
},
aprFilter: "buoyan|Bernoulli|Continuity|Torricelli|Archimedes|float"
});
})();
