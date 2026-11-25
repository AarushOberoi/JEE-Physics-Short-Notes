(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 8, short: "Work and Energy",
intro: R`The work–energy theorem replaces force–time analysis with force–displacement analysis. Use it whenever speed at a position is asked.`,
sec: [
["8.1 – 8.2 Kinetic Energy & Work–Energy Theorem", [
  P(R`<b>Kinetic energy</b> $K = \frac12mv^2$ (scalar, ≥ 0). <b>Work</b> by a constant force: $W = \vec F\cdot\vec d = Fd\cos\theta$. Positive if $\theta < 90^\circ$, zero if ⊥, negative if $\theta > 90^\circ$.`, R`K = \tfrac12mv^2 = \frac{p^2}{2m},\qquad W = Fd\cos\theta`),
  S(s.ground(10,210,100) + s.block(40,60,50,40,"m") + s.arr(90,75,140,45,'class="red"') + s.line(90,75,140,75,s.dash) + s.arcm(90,75,22,0,31) + s.txt(116,71,"θ") + s.txt(134,40,"F") + s.arr(40,122,170,122,'class="blue"') + s.txt(100,138,"d"), 215, 145, "W = F d cos θ"),
  P(R`<b>Work–energy theorem</b>: the work done by <b>all</b> forces (conservative, non-conservative, pseudo) equals the change in KE.`, R`W_{total} = \Delta K = \tfrac12mv^2 - \tfrac12mu^2`),
  D("work–energy theorem (constant force)", [R`$v^2 = u^2 + 2ad$, multiply by $m/2$: $\frac12mv^2 - \frac12mu^2 = mad = Fd$.`, R`For a variable force, $F = mv\frac{dv}{dx}$ ⇒ $\int F\,dx = \int mv\,dv = \Delta K$.`])
]],
["8.3 – 8.4 Calculation of Work; Variable Forces", [
  P(R`Variable force: work = $\int\vec F\cdot d\vec r$ = <b>area under the F–x graph</b>.`, R`W = \int_{x_1}^{x_2}F(x)\,dx`, G({ xl: "x", yl: "F", xr: [0, 4], yr: [0, 4], fns: [x => 1 + 0.6 * x], lab: ["W = area"] })),
  P(R`<b>Spring force</b> $F = -kx$. Work done by the spring from $x_1$ to $x_2$:`, R`W_{spring} = \tfrac12k(x_1^2 - x_2^2)`),
  S(s.wall(20,40,110) + s.spring(20,80,110,7,8) + s.block(110,60,40,40,"m") + s.ground(10,210,100) + s.line(90,45,90,110,s.dash) + s.arr(90,125,110,125,'class="red"') + s.txt(96,140,"x") + s.arr(110,70,72,70,'class="blue"') + s.txt(60,62,"kx") + s.txt(64,40,"natural length"), 215, 148, "Spring pulls back: F = −kx"),
  P(R`Work done by gravity is $mg\times$(fall in height), whatever the path. Work done by a normal force or tension can be non-zero when the surface or support moves.`),
  S(s.dot(30,30) + s.dot(170,120) + s.path("M30 30 Q40 120 170 120",'class="blue"') + s.path("M30 30 L170 120",'class="red"') + s.path("M30 30 Q150 20 170 120",'class="thin"') + s.line(192,30,192,120,'class="thin"') + s.txt(197,80,"h") + s.txt(18,24,"A") + s.txt(160,140,"B") + s.txt(30,158,"W_gravity = mgh on every path"), 220, 165, "Conservative force: path does not matter"),
  J(R`Given $v = f(x)$, the work done between two points is just $\Delta K$. You don't need the force (2026 shift). Penetration/resistive-force questions: $mg(h + d) = F_{av}d$ for a ball falling into sand.`, "2026 · 6 Apr · Evening; 2026 · 2 Apr · Evening; 2022 · 25 Jul · Evening; 2024 · 27 Jan · Evening")
]],
["8.5 – 8.8 Potential Energy, Conservative Forces", [
  P(R`A force is <b>conservative</b> if its work is independent of path (equivalently, zero work around any closed path): gravity, spring, electrostatic. Friction and air drag are <b>non-conservative</b>.`),
  P(R`Potential energy is defined only for conservative forces:`, [R`\Delta U = U_f - U_i = -W_{conservative}`, R`F = -\frac{dU}{dx}\qquad \vec F = -\nabla U`]),
  P(R`<b>Equilibrium</b> where $dU/dx = 0$. <b>Stable</b>: U is minimum ($d^2U/dx^2 > 0$), restoring. <b>Unstable</b>: U is maximum. <b>Neutral</b>: U is constant.`, null, G({ xl: "x", yl: "U", xr: [0, 6], yr: [-2, 2.5], fns: [x => 1.5 * Math.sin(x) + 0.15 * x - 0.4], lab: ["U(x)"] })),
  P(R`<b>Conservation of mechanical energy</b>: if only conservative forces do work, $K + U$ = constant. With non-conservative forces:`, R`W_{nc} = \Delta(K + U)`)
]],
["8.9 – 8.11 Gravitational & Spring PE, Forms of Energy, Power", [
  P(R`Near the earth $U = mgh$. A spring stretched or compressed by $x$ stores $U = \frac12kx^2$.`, R`U_g = mgh,\qquad U_{spring} = \tfrac12kx^2`),
  G({ xl: "x", yl: "", xr: [-2, 2], yr: [-2, 2.2], fns: [x => 0.5 * x * x, x => -x], lab: ["U = ½kx²", "F = −kx = −dU/dx"] }),
  P(R`<b>Power</b>: rate of doing work. Unit: watt (1 hp = 746 W). Efficiency = output power / input power.`, R`P = \frac{dW}{dt} = \vec F\cdot\vec v,\qquad P_{av} = \frac{W}{t}`),
  P(R`<b>Constant power</b> engine starting from rest: $Pt = \frac12mv^2$ ⇒ $v\propto t^{1/2}$, $x\propto t^{3/2}$. For uniform acceleration from rest, instantaneous power = 2 × average power.`),
  G({ xl: "t", yl: "", xr: [0, 4], yr: [0, 8], fns: [x => 2 * Math.sqrt(x), x => Math.pow(x, 1.5)], lab: ["v ∝ t^½", "x ∝ t^3/2"] }),
  P(R`Energy has many forms (mechanical, thermal, electrical, chemical, nuclear, mass-energy $E = mc^2$). The <b>total energy</b> of an isolated system is always conserved.`),
  J(R`Power with a time-dependent force: find $v(t)$ from $\int F\,dt/m$, then $P = \vec F\cdot\vec v$. Also common: $p = \sqrt{2mK}$ ratio questions ("KE increased by 300% → momentum doubles").`, "2025 · 7 Apr · Morning; 2026 · 4 Apr · Morning; 2024 · 8 Apr · Morning; 2021 · 20 Jul · Evening")
]]
],
pyq: {
  pat: [
    [R`Resistive force / penetration / stopping distance`, "2022 · 25 Jul · Evening; 2024 · 27 Jan · Evening"],
    [R`$p = \sqrt{2mK}$ relations (% change in KE vs momentum)`, "2024 · 8 Apr · Morning; 2021 · 20 Jul · Evening"],
    [R`Constant power: $x\propto t^{3/2}$`, "2024 · 5 Apr · Evening; 2021 · 18 Mar · Morning"],
    [R`U(x) graph, $F = -dU/dx$, equilibrium type`, "2026 · 21 Jan · Morning; 2024 · 29 Jan · Morning"],
    [R`Spring–block energy (compression, speed)`, "2025 · 8 Apr · Evening; 2024 · 8 Apr · Evening"],
    [R`Assertion–reason on conservative forces`, "2025 · 7 Apr · Evening; 2025 · 28 Jan · Morning"]
  ],
  combo: [R`Spring + incline + friction`, R`Projectile + KE`, R`Collision + energy loss (collisions)`, R`Energy + Lorentz force (magnetic force does no work, see Moving Charges and Magnetism)`],
  trap: [R`Work by friction on an incline is $-\mu mg\cos\theta\cdot d$.`, R`Kinetic friction does negative work on the system as a whole (it produces heat), but static friction can do positive work on a body.`],
  mist: [R`Using $mgh$ for heights comparable to the earth's radius (use $-GMm/r$).`]
}
});
})();
