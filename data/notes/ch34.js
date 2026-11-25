(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 34, short: "Magnetic Field",
intro: R`A magnetic field acts only on <b>moving</b> charges, always perpendicular to the velocity. So it can never change a particle's speed or KE.`,
sec: [
["34.1 – 34.3 Definition of B & Lorentz Force", [
  P(R`The magnetic field $\vec B$ (tesla; 1 G = 10⁻⁴ T) is defined through the force on a moving charge. With an electric field as well (Lorentz force):`, [R`\vec F = q\vec v\times\vec B,\qquad |F| = qvB\sin\theta`, R`\vec F = q(\vec E + \vec v\times\vec B)`]),
  S(s.grid(20,20,200,120,30,(x,y) => s.into(x,y)) + s.circ(80,90,8,'class="fl2"') + s.txt(76,94,"+") + s.arr(90,90,150,90,'class="blue"') + s.arr(80,80,80,32,'class="red"') + s.txt(152,84,"v") + s.txt(86,44,"F = qv × B") + s.txt(140,146,"B into page"), 225, 152, "F ⊥ v and ⊥ B"),
  P(R`The force is ⊥ to both $\vec v$ and $\vec B$, so it does <b>no work</b> and the KE is constant. For a negative charge the direction reverses. $\vec a\cdot\vec B = 0$ and $\vec a\cdot\vec v = 0$.`),
  J(R`Computing $q\vec v\times\vec B$ with vectors, using $\vec a\cdot\vec B = 0$ to find an unknown component, and combined E + B where only E changes the KE.`, "2026 · 2 Apr · Morning; 2026 · 5 Apr · Morning; 2026 · 5 Apr · Evening; 2026 · 2 Apr · Evening")
]],
["34.4 Motion of a Charged Particle in a Uniform B", [
  P(R`$\vec v\perp\vec B$: uniform circular motion.`, [R`r = \frac{mv}{qB} = \frac{p}{qB} = \frac{\sqrt{2mK}}{qB},\qquad T = \frac{2\pi m}{qB}\ (\text{independent of } v)`]),
  S(s.grid(20,20,200,140,30,(x,y) => s.into(x,y)) + s.circ(110,80,50,'class="red"') + s.circ(160,80,6,'class="fl2"') + s.arr(160,80,160,38,'class="blue"') + s.arr(154,80,124,80) + s.txt(166,50,"v") + s.txt(128,74,"F") + s.txt(124,104,"r"), 220, 158, "r = mv/qB, T = 2πm/qB (independent of v)"),
  P(R`$\vec v$ at angle θ to $\vec B$: a <b>helix</b> with radius $\frac{mv\sin\theta}{qB}$ and pitch:`, R`\text{pitch} = v\cos\theta\cdot\frac{2\pi m}{qB}`, S(s.path("M10 80 C 30 30, 50 30, 60 80 S 90 130, 110 80 S 140 30, 160 80 S 190 130, 210 80", 'class="blue"') + s.arr(10, 140, 210, 140, 'class="red"') + s.txt(190, 132, "B") + s.txt(80, 25, "helix"), 220, 150)),
  P(R`<b>Velocity selector</b> (crossed E and B): the particle goes straight if $v = E/B$. Cyclotron frequency $\nu = \frac{qB}{2\pi m}$. Charge accelerated through V: $r = \frac{1}{B}\sqrt{\frac{2mV}{q}}$.`),
  S(s.line(20,30,200,30,'style="stroke-width:3"') + s.line(20,130,200,130,'style="stroke-width:3"') + s.txt(204,34,"+") + s.txt(204,134,"−") + s.grid(50,55,170,105,40,(x,y) => s.into(x,y)) + s.arr(10,80,200,80,'class="red"') + s.arr(110,74,110,48,'class="blue"') + s.arr(110,86,110,114) + s.txt(116,56,"qvB") + s.txt(116,110,"qE"), 215, 145, "Goes straight when qE = qvB ⇒ v = E/B"),
  J(R`Radius and KE in B (same momentum ⇒ same r for a proton and an electron), helix pitch, and crossing a field boundary. Charged particle in B is the most asked topic here.`, "2025 · 7 Apr · Morning; 2025 · 3 Apr · Evening; 2026 · 8 Apr · Evening")
]],
["34.5 Force on a Current-Carrying Wire", [
  P(R`For a straight wire of length l carrying current i:`, R`\vec F = i\vec l\times\vec B`),
  S(s.grid(20,20,200,120,30,(x,y) => s.into(x,y)) + s.line(10,75,210,75,'style="stroke-width:4"') + s.arr(60,66,140,66,'class="blue"') + s.txt(92,60,"i") + s.arr(170,75,170,24,'class="red"') + s.txt(176,36,"F = ilB"), 220, 132, "F = i l × B"),
  P(R`For any shaped wire in a <b>uniform</b> B, the force equals that on the straight line joining its ends. A closed loop in a uniform field feels zero net force.`),
  S(s.path("M20 100 Q60 20 110 70 T 200 60",'class="blue" style="stroke-width:3"') + s.line(20,100,200,60,'class="red" style="stroke-dasharray:5 4"') + s.dot(20,100) + s.dot(200,60) + s.txt(8,118,"A") + s.txt(200,80,"B") + s.txt(60,128,"F = i (AB) × B"), 215, 135, "Same force as the straight wire AB")
]],
["34.6 Torque on a Current Loop", [
  P(R`A loop is a <b>magnetic dipole</b> $\vec\mu = ni\vec A$ (direction by the right-hand rule). In a uniform B:`, [R`\vec\tau = \vec\mu\times\vec B,\qquad \tau = niAB\sin\theta`, R`U = -\vec\mu\cdot\vec B`]),
  S([30,130].map(y => s.arr(10,y,210,y,'class="thin"')).join("") + s.txt(198,22,"B") + s.line(80,110,140,50,'style="stroke-width:4"') + s.outof(140,50) + s.into(80,110) + s.arr(110,80,146,116,'class="red"') + s.txt(150,116,"μ") + s.line(110,80,170,80,s.dash) + s.arcm(110,80,26,-45,0) + s.txt(140,96,"θ") + s.txt(30,70,"loop (edge-on)"), 220, 140, "τ = μ × B, |τ| = niAB sin θ"),
  P(R`θ is the angle between the <b>normal</b> to the loop and B. The torque is maximum when the plane of the loop is parallel to B.`),
  J(R`Torque on a coil (θ given with the axis or with the plane: read carefully) and vector torque $\vec\mu\times\vec B$.`, "2026 · 4 Apr · Evening; 2026 · 8 Apr · Evening")
]]
],
pyq: {
  pat: [[R`r, KE in a magnetic field`, "2025 · 7 Apr · Morning; 2025 · 3 Apr · Evening"], [R`Charge in combined E and B`, "2026 · 5 Apr · Evening; 2026 · 2 Apr · Evening"], [R`Coil magnetic moment / torque`, "2026 · 8 Apr · Evening; 2026 · 4 Apr · Morning"], [R`Helix pitch`, "2026 · 8 Apr · Evening"]],
  combo: [R`Lorentz force + work–energy`, R`EM wave fields + Lorentz force ($F_E/F_B = c/v$)`, R`Bohr orbit as a current loop`],
  trap: [R`$r = p/qB$: equal momentum and equal charge give equal radius.`, R`A charge moving along a solenoid's axis feels no magnetic force.`],
  mist: [R`Using the angle with the plane instead of with the normal.`]
},
aprFilter: "Lorentz|crossed|v × B|velocity|Torque|torque|acceleration|Helical"
});
})();
