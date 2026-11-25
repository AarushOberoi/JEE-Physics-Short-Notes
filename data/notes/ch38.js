(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 38, short: "Electromagnetic Induction",
intro: R`A changing magnetic flux induces an emf. Faraday gives the size, Lenz gives the direction, and energy conservation ties them together.`,
sec: [
["38.1 – 38.2 Faraday's & Lenz's Laws", [
  P(R`Flux $\Phi = \int\vec B\cdot d\vec S = BA\cos\theta$ (weber). Induced emf:`, [R`\varepsilon = -N\frac{d\Phi}{dt}`, R`i = \frac{\varepsilon}{R},\qquad q = \frac{N\Delta\Phi}{R}\ (\text{independent of time})`]),
  S(s.ell(110,100,60,18,'class="fl2"') + s.arr(110,100,110,30,'class="blue"') + s.txt(116,34,"n̂") + [60,110,160].map(x => s.arr(x-30,150,x+20,40,'class="red"')).join("") + s.txt(186,52,"B") + s.arcm(110,100,32,65,90) + s.txt(112,60,"θ"), 220, 158, "Φ = BA cos θ; ε = −dΦ/dt"),
  P(R`<b>Lenz's law</b>: the induced current opposes the <b>change</b> in flux that causes it. This follows from energy conservation: work must be done to move a magnet towards a coil.`, null, S(s.rect(20, 60, 60, 24, s.fill2) + s.txt(26, 77, "S") + s.txt(66, 77, "N") + s.arr(90, 72, 120, 72, 'class="red"') + s.path("M140 40 Q 125 72 140 104 M160 40 Q 145 72 160 104 M180 40 Q 165 72 180 104") + s.txt(118, 125, "coil repels approaching N"), 210, 135)),
  J(R`Induced current at time t from B(t) = at² + bt + c; maximum emf with an angle between the normal and B; charge flown = NΔΦ/R.`, "2026 · 5 Apr · Evening; 2026 · 6 Apr · Evening; 2023 · 13 Apr · Evening")
]],
["38.3 Origin of Induced EMF: Motional & Induced Electric Field", [
  P(R`<b>Motional emf</b>: the magnetic force on the charges in a moving conductor.`, [R`\varepsilon = \int(\vec v\times\vec B)\cdot d\vec l = Bvl\ (\perp\text{ case})`]),
  S(s.grid(20,20,200,120,30,(x,y) => s.into(x,y)) + s.line(110,15,110,125,'style="stroke-width:4"') + s.arr(114,70,170,70,'class="blue"') + s.txt(150,62,"v") + s.txt(96,30,"+") + s.txt(96,124,"−") + s.txt(84,76,"l"), 220, 132, "ε = Bvl (top end positive here)"),
  P(R`<b>Rod rotating</b> about one end in B (⊥): $\varepsilon = \frac12B\omega l^2$. For a non-uniform B(r), $\varepsilon = \int_0^l B(r)\,\omega r\,dr$. A rod rotating about its <b>midpoint</b> has zero emf between its ends. A disc of radius R: $\frac12B\omega R^2$.`),
  S(s.grid(20,20,200,140,30,(x,y) => s.into(x,y)) + s.dot(60,120) + s.line(60,120,170,50,'style="stroke-width:4"') + s.arcm(60,120,130,10,32.5,'class="red"') + s.txt(104,76,"l") + s.txt(46,138,"O") + s.txt(176,40,"ω"), 220, 150, "ε = ½Bωl²"),
  P(R`<b>Rod on rails</b> (resistance R): current $i = Bvl/R$, opposing force $F = \frac{B^2l^2v}{R}$, terminal speed when this force balances the applied force (or gravity component).`, null, S(s.line(20, 30, 200, 30) + s.line(20, 130, 200, 130) + s.line(20, 30, 20, 130) + s.txt(5, 85, "R") + s.line(130, 30, 130, 130, 'style="stroke-width:4"') + s.arr(135, 80, 180, 80, 'class="red"') + s.txt(160, 72, "v") + s.txt(60, 85, "⊗ B") + s.txt(135, 110, "l"), 210, 145)),
  P(R`A time-varying B produces an <b>induced electric field</b> (non-conservative, with closed field lines): $\oint\vec E\cdot d\vec l = -\frac{d\Phi}{dt}$. Inside a region of radius R: $E = \frac r2\frac{dB}{dt}$.`),
  S(s.circ(100,80,40,'class="fl2"') + s.grid(75,55,125,105,25,(x,y) => s.into(x,y)) + s.circ(100,80,62,'class="red"') + s.arr(162,84,162,74,'class="red"') + s.txt(140,16,"E (closed loops)") + s.txt(46,158,"B changing inside"), 210, 162, "∮E·dl = −dΦ/dt (non-conservative E)"),
  J(R`Motional emf (rods, rails, discs, rotating rod in non-uniform B) is the most asked EMI topic. A rod rotating about its midpoint gives zero emf (a trap).`, "2026 · 5 Apr · Evening; 2024 · 4 Apr · Evening; 2026 · 22 Jan · Morning")
]],
["38.4 Eddy Currents", [
  P(R`Currents induced inside bulk conductors. They cause heating and damping. Uses: electromagnetic brakes, induction furnaces, dead-beat galvanometers, speedometers. Reduced by laminating cores. A magnet falls slowly through a copper pipe.`),
  S(s.rect(110,20,90,110,'class="fl2"') + s.grid(120,30,190,120,22,(x,y) => s.into(x,y)) + s.ceil(40,100,12) + s.line(70,12,70,70) + s.rect(55,70,40,40,'style="fill:var(--b3)"') + s.circ(80,90,10,'class="red"') + s.arr(26,90,50,90,'class="blue"') + s.txt(4,138,"plate swinging into B"), 215, 146, "Eddy currents oppose the motion (damping, heating)"),
  J(R`Eddy-current braking in a pipe and why cores are laminated: assertion–reason style.`, "2023 · 11 Apr · Evening; 2023 · 10 Apr · Evening")
]],
["38.5 – 38.7 Self-Induction, LR Circuits, Energy", [
  P(R`Self-inductance: $\Phi = Li$, so $\varepsilon = -L\frac{di}{dt}$. For a long solenoid (L depends on geometry and on μ):`, R`L = \mu_0n^2Al = \frac{\mu_0N^2A}{l}`),
  P(R`<b>Growth and decay</b> of current in an LR circuit, with time constant τ = L/R:`, [R`i = \frac{\varepsilon}{R}(1 - e^{-t/\tau}),\qquad i = i_0e^{-t/\tau}`], G({ xl: "t/τ", yl: "i/i₀", xr: [0, 5], yr: [0, 1.1], fns: [x => 1 - Math.exp(-x), x => Math.exp(-x)], lab: ["growth", "decay"] })),
  P(R`At t = 0 an inductor acts as an <b>open circuit</b> (the current can't jump). In steady state it is a plain wire. Energy stored:`, [R`U = \tfrac12Li^2,\qquad u = \frac{B^2}{2\mu_0}`]),
  S(s.line(20,30,56,30) + s.cell(60,30,"E") + s.line(64,30,90,30) + s.res(90,30,160,"R") + s.line(160,30,190,30) + s.line(190,30,190,110) + s.line(190,110,140,110) + s.ind(80,110,140,"L") + s.line(80,110,20,110) + s.line(20,110,20,30), 210, 132, "t = 0: L acts as an open circuit · steady state: a plain wire"),
  J(R`L from emf and di/dt, energy ½Li², and the energy split among inductors in parallel and series.`, "2024 · 6 Apr · Evening; 2026 · 5 Apr · Morning; 2021 · 18 Mar · Evening")
]],
["38.8 – 38.9 Mutual Induction; Induction Coil", [
  P(R`$\Phi_2 = Mi_1$, $\varepsilon_2 = -M\frac{di_1}{dt}$. M is symmetric, and $M\le\sqrt{L_1L_2}$ (equal for perfect coupling, coefficient $k = M/\sqrt{L_1L_2}$).`, [R`M_{coaxial\ solenoids} = \mu_0n_1n_2\pi r_1^2l`, R`M_{\text{small loop } (a) \text{ at centre of large loop } (R)} = \frac{\mu_0\pi a^2}{2R}`]),
  S(Array.from({length: 6}, (_, i) => s.ell(30+i*12,75,7,28,'class="blue"')).join("") + Array.from({length: 6}, (_, i) => s.ell(130+i*12,75,7,28,'class="red"')).join("") + s.arr(100,75,124,75) + s.txt(30,128,"coil 1 (i₁)") + s.txt(134,128,"coil 2"), 220, 135, "ε₂ = −M di₁/dt"),
  P(R`Inductors in series (no coupling) $L = L_1 + L_2$, in parallel $\frac1L = \frac1{L_1} + \frac1{L_2}$. An induction coil gives high voltage by interrupting the primary current rapidly.`),
  J(R`A small loop inside a large square (side L): $B = \frac{2\sqrt2\mu_0i}{\pi L}$, so $M = \frac{2\sqrt2\mu_0a^2}{L}$. Asked repeatedly.`, "2026 · 2 Apr · Evening; 2023 · 29 Jan · Morning; 2021 · 31 Aug · Morning")
]]
],
pyq: {
  pat: [[R`Motional emf: BLv, ½BωL²`, "2023 · 25 Jan · Evening; 2024 · 4 Apr · Evening"], [R`Rod on rails: force, terminal speed`, "2026 · 22 Jan · Morning; 2026 · 21 Jan · Morning"], [R`Mutual inductance of a small loop inside a large one`, "2023 · 29 Jan · Morning; 2021 · 31 Aug · Morning"], [R`L from emf; RL energy, time constant`, "2024 · 6 Apr · Evening; 2021 · 26 Aug · Morning"], [R`Rotating coil emf = NBAω`, "2024 · 1 Feb · Evening; 2022 · 24 Jun · Evening"]],
  combo: [R`Faraday + Lenz + power ($P = \varepsilon^2/R$, R of the coil wire ∝ length/r²)`, R`Motional emf + magnetic force + mechanics`],
  trap: [R`A rotating coil's emf is maximum when the plane of the coil is parallel to B (flux zero).`, R`L ∝ μ, so "self-inductance is independent of permeability" is false.`]
}
});
})();
