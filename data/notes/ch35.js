(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 35, short: "Magnetic Field due to a Current",
intro: R`Biot–Savart for any shape, Ampere's law for symmetric shapes. Field configurations are the most asked magnetics topic.`,
sec: [
["35.1 – 35.2 Biot–Savart Law; Straight Wire", [
  P(R`Field of a current element:`, [R`d\vec B = \frac{\mu_0}{4\pi}\frac{i\,d\vec l\times\vec r}{r^3},\qquad \mu_0 = 4\pi\times10^{-7}\ \text{T m A}^{-1}`]),
  S(s.line(40,10,40,150,'style="stroke-width:3"') + s.arr(40,90,40,60,'class="blue"') + s.txt(46,96,"i dl") + s.line(40,75,170,40,'class="thin"') + s.dot(170,40) + s.txt(174,36,"P") + s.into(170,60) + s.txt(178,64,"dB") + s.txt(100,52,"r") + s.arcm(40,75,22,15,90) + s.txt(54,60,"θ"), 210, 158, "dB = (μ₀/4π) i dl sin θ / r²"),
  P(R`<b>Straight wire</b> segment at perpendicular distance d (angles measured from the perpendicular):`, [R`B = \frac{\mu_0i}{4\pi d}(\sin\theta_1 + \sin\theta_2)`, R`\text{infinite: } \frac{\mu_0i}{2\pi d},\qquad \text{semi-infinite (at the end): } \frac{\mu_0i}{4\pi d}`], S(s.line(30, 10, 30, 150, 'class="red"') + s.arr(30, 100, 30, 60, 'class="red"') + s.line(30, 80, 140, 80, s.dash) + s.circ(140, 80, 3, 'class="dot"') + s.line(30, 20, 140, 80) + s.line(30, 140, 140, 80) + s.txt(80, 74, "d") + s.txt(112, 70, "θ₁") + s.txt(112, 100, "θ₂") + s.txt(36, 60, "i"), 180, 160)),
  P(R`Direction by the right-hand thumb rule: field lines are circles around the wire. Points on the line of the wire (extended) have B = 0.`),
  S(s.line(100,10,100,150,'style="stroke-width:3"') + s.arr(100,140,100,20,'class="blue"') + s.txt(106,22,"i") + [50,85,120].map(y => s.ell(100,y,45,10,'class="red"')).join("") + [50,85,120].map(y => s.arr(96,y+10,104,y+10,'class="red"')).join(""), 200, 160, "Thumb along i, fingers curl along B")
]],
["35.3 Force Between Parallel Currents", [
  P(R`Force per unit length. Like currents <b>attract</b>, unlike currents <b>repel</b>. This defines the ampere (2 × 10⁻⁷ N/m for 1 A, 1 m apart).`, R`\frac Fl = \frac{\mu_0i_1i_2}{2\pi d}`),
  S(s.line(60,10,60,140,'style="stroke-width:3"') + s.line(140,10,140,140,'style="stroke-width:3"') + s.arr(60,120,60,30,'class="blue"') + s.arr(140,120,140,30,'class="blue"') + s.arr(64,75,96,75,'class="red"') + s.arr(136,75,104,75,'class="red"') + s.txt(44,30,"i₁") + s.txt(146,30,"i₂") + s.line(60,150,140,150,'class="thin"') + s.txt(96,165,"d"), 200, 170, "Parallel currents attract: F/l = μ₀i₁i₂/2πd"),
  J(R`Two antiparallel currents: the fields <b>add</b> at the midpoint. Parallel currents: they cancel at the midpoint.`, "2026 · 6 Apr · Evening; 2026 · 28 Jan · Morning")
]],
["35.4 Field due to a Circular Current", [
  P(R`At the centre of a loop (N turns), on its axis at distance x, and at the centre of an arc subtending angle θ:`, [R`B_{centre} = \frac{\mu_0Ni}{2a},\qquad B_{axis} = \frac{\mu_0Nia^2}{2(a^2 + x^2)^{3/2}}`, R`B_{arc} = \frac{\mu_0i}{4\pi a}\theta\ \ (\text{semicircle: } \frac{\mu_0i}{4a})`]),
  S(s.ell(60,80,18,50,'class="blue"') + s.arr(56,30,66,30,'class="blue"') + s.line(60,80,210,80,s.dash) + s.arr(60,80,100,80,'class="red"') + s.arr(160,80,200,80,'class="red"') + s.dot(160,80) + s.txt(156,98,"P") + s.txt(110,96,"x") + s.line(60,80,60,30,'class="thin"') + s.txt(64,58,"R"), 215, 140, "B = μ₀NiR² / 2(R² + x²)^3/2"),
  P(R`Far along the axis the loop behaves as a dipole: $B = \frac{\mu_0}{4\pi}\frac{2\mu}{x^3}$, with $\mu = i\pi a^2$.`),
  G({ xl: "x / R", yl: "B", xr: [-3, 3], yr: [0, 1.1], fns: [x => 1 / Math.pow(1 + x * x, 1.5)], lab: ["B on the loop axis: maximum at the centre"] }),
  J(R`Field at the centre of shapes made of arcs and straight parts (semicircle + two semi-infinite wires, loops and polygons) is the most repeated type. Add the contributions with signs (⊙ / ⊗).`, "2026 · 2 Apr · Morning; 2026 · 21 Jan · Evening; 2025 · 8 Apr · Evening")
]],
["35.5 – 35.8 Ampere's Law; Cylinder, Solenoid, Toroid", [
  P(R`For any closed loop:`, R`\oint\vec B\cdot d\vec l = \mu_0 i_{enclosed}`),
  S(s.circ(100,80,50,'class="red" style="stroke-dasharray:5 4"') + s.outof(100,80) + s.txt(108,76,"i (out)") + s.arr(150,84,150,70,'class="red"') + s.txt(156,60,"B, dl") + s.txt(30,152,"∮B·dl = μ₀ i_enclosed"), 210, 158, "Amperian loop around the current"),
  P(R`<b>Long cylindrical wire</b> (radius R, uniform current): B ∝ r inside, ∝ 1/r outside. For a hollow tube, B = 0 inside.`, R`B_{in} = \frac{\mu_0ir}{2\pi R^2},\qquad B_{out} = \frac{\mu_0i}{2\pi r}`, G({ xl: "r/R", yl: "B", xr: [0, 4], yr: [0, 1.1], fns: [x => (x < 1 ? x : 1 / x)], lab: ["solid wire"] })),
  P(R`<b>Long solenoid</b> (n turns per metre): uniform field inside, ≈ 0 outside. At the ends it is half: $\frac12\mu_0ni$. <b>Toroid</b> (N turns): field only inside the core.`, [R`B = \mu_0ni`, R`B_{toroid} = \frac{\mu_0Ni}{2\pi r}`]),
  S(Array.from({length: 10}, (_, i) => s.ell(30+i*16,75,8,30,'class="blue"')).join("") + s.arr(20,75,200,75,'class="red"') + s.path("M200 75 Q235 10 110 22 Q-10 22 20 60",'class="red" style="stroke-dasharray:3 4"') + s.txt(60,128,"B = μ₀ n i inside") + s.txt(204,96,"N"), 240, 136, "Uniform inside; at the ends B = μ₀ni/2"),
  P(R`A rotating charged disc or ring is equivalent to a current loop ($i = q\omega/2\pi$).`),
  J(R`Current distributed in a cylinder (Ampere's law) and fields of solenoids with cores (Magnetism and Matter).`, "2026 · 28 Jan · Evening; 2026 · 4 Apr · Evening")
]]
],
pyq: {
  pat: [[R`Field at the centre of a loop/polygon/arc combination`, "2026 · 28 Jan · Morning; 2026 · 23 Jan · Evening; 2025 · 8 Apr · Evening"], [R`Bent wires and arcs`, "2026 · 21 Jan · Evening; 2026 · 2 Apr · Morning"], [R`Two-wire force/field`, "2026 · 6 Apr · Evening"], [R`Ampere's law in a cylinder`, "2026 · 28 Jan · Evening"]],
  trap: [R`B is zero on the axis of a solid wire and maximum at its surface.`, R`An n-sided polygon has field $\frac{\mu_0 i n}{2\pi R}\tan\frac{\pi}{n}$ at its centre (R = distance to a side).`],
  mist: [R`Missing the semi-infinite straight parts, or getting their direction wrong.`]
},
aprFilter: "field|B at|wires|semicircular|spiral|moment"
});
})();
