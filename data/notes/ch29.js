(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 29, short: "Electric Field and Potential",
intro: R`Electrostatics is asked in every shift. The key ideas are Coulomb's law, superposition, field, potential, the dipole, and conductors.`,
sec: [
["29.1 – 29.2 Charge & Coulomb's Law", [
  P(R`Charge is <b>quantised</b> ($q = ne$, $e = 1.6\times10^{-19}$ C), <b>conserved</b>, additive and invariant. Bodies are charged by friction, conduction or induction.`),
  P(R`<b>Coulomb's law</b> (in vacuum; divide by the dielectric constant K in a medium):`, [R`\vec F = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}\hat r = \frac{kq_1q_2}{r^3}\vec r`, R`k = 9\times10^9\ \text{N m}^2\text{C}^{-2},\quad \varepsilon_0 = 8.85\times10^{-12}\ \text{C}^2\text{N}^{-1}\text{m}^{-2}`]),
  S(s.circ(60,40,12,'class="fl2"') + s.txt(55,45,"+") + s.circ(150,40,12,'class="fl2"') + s.txt(145,45,"+") + s.arr(48,40,14,40,'class="red"') + s.arr(162,40,196,40,'class="red"') + s.circ(60,100,12,'class="fl2"') + s.txt(55,105,"+") + s.circ(150,100,12,'class="fl2"') + s.txt(146,105,"−") + s.arr(72,100,100,100,'class="red"') + s.arr(138,100,110,100,'class="red"') + s.txt(70,72,"like: repel") + s.txt(64,132,"unlike: attract"), 210, 140, "F = kq₁q₂/r², along the joining line"),
  P(R`Forces obey <b>superposition</b>. Electric force ≫ gravitational force (≈ 10³⁹ times between two electrons).`),
  J(R`Coulomb force in vector form from position vectors (2026). Also: three charges in equilibrium (stable/unstable) and two hanging charged balls ($\tan\theta = F/mg$).`, "2026 · 8 Apr · Evening; 2026 · 2 Apr · Evening")
]],
["29.3 – 29.4 Electric Field & Field Lines", [
  P(R`Field = force per unit positive test charge. A point charge gives:`, R`\vec E = \frac{\vec F}{q_0},\qquad E = \frac{kq}{r^2}`),
  P(R`<b>Uniformly charged ring</b> (charge Q, radius a), point P on the axis at distance x. Components ⊥ to the axis cancel in pairs; only the axial parts add.`, [R`E = \frac{kQx}{(a^2+x^2)^{3/2}},\qquad V = \frac{kQ}{\sqrt{a^2+x^2}}`, R`E_{centre} = 0,\qquad V_{centre} = \frac{kQ}{a}`, R`E_{max} = \frac{2kQ}{3\sqrt3\,a^2}\ \text{at}\ x = \pm\frac{a}{\sqrt2}`], S(
    s.path("M60 30 A18 50 0 1 0 60 130 A18 50 0 1 0 60 30", 'class="blue"') + s.line(60, 80, 185, 80, s.dash) + s.line(60, 30, 180, 80, s.dash) + s.line(60, 130, 180, 80, s.dash) +
    s.circ(60, 30, 3, 'class="dot"') + s.circ(60, 130, 3, 'class="dot"') + s.circ(180, 80, 3, 'class="dot"') + s.line(60, 80, 60, 30, 'class="thin"') +
    s.arr(180, 80, 214, 94) + s.arr(180, 80, 214, 66) + s.arr(180, 80, 232, 80, 'class="red"') +
    s.txt(44, 58, "a") + s.txt(115, 96, "x") + s.txt(172, 102, "P") + s.txt(52, 20, "dq") + s.txt(208, 60, "dE") + s.txt(214, 112, "dE") + s.txt(222, 74, "E") + s.txt(18, 85, "+Q"),
    250, 150, "Ring: ⊥ parts cancel, E along the axis")),
  G({ xl: "x", yl: "E", xr: [-3, 3], yr: [-0.45, 0.45], fns: [x => x / Math.pow(1 + x * x, 1.5)], lab: ["E on ring axis: 0 at centre, peaks at x = ±a/√2"] }),
  P(R`<b>Infinite line charge</b> (λ C/m), point at perpendicular distance r. Field is radial (away for +λ) and $\propto 1/r$. Easiest by Gauss's law with a cylinder of length l: $E(2\pi rl) = \lambda l/\varepsilon_0$.`, [R`E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}`, R`V_A - V_B = \frac{\lambda}{2\pi\varepsilon_0}\ln\frac{r_B}{r_A}`], S(
    s.line(50, 8, 50, 152, 'style="stroke-width:3"') + [20, 45, 70, 95, 120, 145].map(y => s.txt(55, y, "+")).join("") +
    s.path("M30 45 L30 120 M70 45 L70 120", s.dash) + s.path("M30 45 A20 6 0 0 0 70 45 A20 6 0 0 0 30 45", s.dash) + s.path("M30 120 A20 6 0 0 0 70 120", s.dash) +
    s.line(50, 82, 160, 82, s.dash) + s.circ(160, 82, 3, 'class="dot"') + s.arr(160, 82, 210, 82, 'class="red"') + s.arr(50, 60, 22, 60, 'class="thin"') + s.arr(50, 105, 22, 105, 'class="thin"') +
    s.txt(98, 76, "r") + s.txt(156, 102, "P") + s.txt(200, 74, "E") + s.txt(4, 150, "λ") + s.txt(76, 140, "Gaussian cylinder"),
    220, 160, "Infinite line: E radial, ∝ 1/r")),
  P(R`<b>Finite line charge</b>: angles $\theta_1$, $\theta_2$ measured at P from the perpendicular to the two ends.`, [R`E_\perp = \frac{k\lambda}{r}(\sin\theta_1 + \sin\theta_2),\qquad E_\parallel = \frac{k\lambda}{r}(\cos\theta_2 - \cos\theta_1)`], S(
    s.line(50, 20, 50, 140, 'style="stroke-width:3"') + s.line(50, 80, 170, 80, s.dash) + s.line(50, 20, 170, 80, s.dash) + s.line(50, 140, 170, 80, s.dash) + s.circ(170, 80, 3, 'class="dot"') +
    s.path("M140 80 A30 30 0 0 0 143 66", 'class="thin"') + s.path("M140 80 A30 30 0 0 1 143 94", 'class="thin"') + s.arr(170, 80, 215, 80, 'class="red"') +
    s.txt(120, 68, "θ₁") + s.txt(120, 102, "θ₂") + s.txt(105, 76, "r") + s.txt(166, 100, "P") + s.txt(205, 72, "E⊥") + s.txt(30, 84, "λ"),
    225, 155, "Finite line: angles from the perpendicular")),
  L([R`Infinite line: $\theta_1 = \theta_2 = 90^\circ$ ⇒ $E = 2k\lambda/r$, $E_\parallel = 0$.`, R`Semi-infinite line, P opposite one end: $E_\perp = E_\parallel = k\lambda/r$, so the net field is at <b>45°</b> to the line.`, R`P on the perpendicular bisector: $E_\parallel = 0$.`]),
  P(R`<b>Charged arc</b> (radius r, λ, subtending angle θ at the centre O). By symmetry the field at O lies along the bisector, pointing away from the arc for +λ.`, [R`E_O = \frac{2k\lambda}{r}\sin\frac{\theta}{2},\qquad V_O = \frac{kQ}{r} = \frac{k\lambda r\theta}{r} = k\lambda\theta`], S(
    s.path("M40.7 80 A80 80 0 0 1 179.3 80", 'class="blue" style="stroke-width:3"') + s.line(110, 120, 40.7, 80, s.dash) + s.line(110, 120, 179.3, 80, s.dash) + s.line(110, 120, 110, 40, 'class="thin"') +
    s.path("M92 110 A20 20 0 0 1 128 110", 'class="thin"') + s.circ(110, 120, 3, 'class="dot"') + s.arr(110, 120, 110, 168, 'class="red"') +
    s.txt(103, 102, "θ") + s.txt(96, 136, "O") + s.txt(116, 165, "E") + s.txt(150, 112, "r") + s.txt(100, 32, "+λ"),
    220, 175, "Arc: E at centre along the bisector, away from the arc")),
  L([R`Semicircle ($\theta = \pi$): $E = \frac{2k\lambda}{r} = \frac{2kQ}{\pi r^2}$.`, R`Full ring ($\theta = 2\pi$): $E = 0$ at the centre, but $V = kQ/r$.`, R`Quarter circle ($\theta = \pi/2$): $E = \frac{\sqrt2\,k\lambda}{r}$.`]),
  J(R`Ring-axis field (maximum at $a/\sqrt2$, small oscillations of a charge on the axis), semicircle/arc field at the centre, and line-charge fields with Gauss's law are asked repeatedly.`),
  T(["Quick summary", "Field"], [["Ring (charge Q, radius a), on axis at x", "$\\frac{kQx}{(a^2+x^2)^{3/2}}$, max at $x = a/\\sqrt2$, zero at centre"], ["Infinite line charge λ", "$\\frac{\\lambda}{2\\pi\\varepsilon_0 r}$"], ["Finite line, ⊥ distance r", "$\\frac{k\\lambda}{r}(\\sin\\theta_1 + \\sin\\theta_2)$"], ["Infinite sheet σ", "$\\frac{\\sigma}{2\\varepsilon_0}$"], ["Arc subtending θ at centre", "$\\frac{2k\\lambda}{r}\\sin\\frac\\theta2$"]]),
  P(R`<b>Field lines</b> start on + charges and end on − charges. They never cross, are perpendicular to conductor surfaces, and their density ∝ |E|. Electrostatic field lines never form closed loops.`),
  S(s.circ(60,80,10,'class="fl2"') + s.txt(55,85,"+") + s.circ(160,80,10,'class="fl2"') + s.txt(156,85,"−") + s.path("M70 80 L150 80",'class="red"') + s.path("M68 72 Q110 40 152 72",'class="red"') + s.path("M68 88 Q110 120 152 88",'class="red"') + s.path("M64 70 Q110 0 156 70",'class="red"') + s.path("M64 90 Q110 160 156 90",'class="red"') + s.path("M51 75 L18 60 M51 85 L18 100 M169 75 L202 60 M169 85 L202 100",'class="red"') + s.arr(106,56,114,56,'class="red"') + s.arr(106,104,114,104,'class="red"') + s.arr(106,35,114,35,'class="red"') + s.arr(106,125,114,125,'class="red"') + s.arr(106,80,114,80,'class="red"'), 220, 160, "Lines leave + and end on −; they never cross"),
  P(R`A charge q (mass m) in a uniform field: $a = qE/m$. It follows a parabolic path when projected ⊥ to E. A <b>charged oil drop balanced</b> between plates: $qE = mg$ (Millikan).`),
  S(s.line(20,30,200,30,'style="stroke-width:3"') + s.line(20,130,200,130,'style="stroke-width:3"') + [40,80,120,160].map(x => s.arr(x,34,x,58,'class="thin"')).join("") + s.txt(204,34,"+") + s.txt(204,134,"−") + s.circ(20,80,4,'class="redf"') + s.path("M20 80 Q110 80 200 122",'class="red"') + s.arr(24,70,60,70,'class="blue"') + s.txt(30,64,"u") + s.txt(170,56,"E"), 215, 145, "Like a projectile: a = qE/m"),
  J(R`Symmetric charges at polygon vertices give zero field (but non-zero potential) at the centre. One charge removed: the field equals that of the removed charge, reversed.`, "2026 · 22 Jan · Evening; 2026 · 22 Jan · Morning")
]],
["29.5 – 29.8 Potential Energy, Potential & E–V Relation", [
  P(R`PE of two charges, and potential (work per unit charge from infinity):`, [R`U = \frac{kq_1q_2}{r},\qquad V = \frac{kq}{r},\qquad W_{A\to B} = q(V_A - V_B)`]),
  G({ xl: "r", yl: "U", xr: [0.2, 4], yr: [-3, 3], fns: [x => 1 / x, x => -1 / x], lab: ["like charges: U > 0", "unlike: U < 0"] }),
  P(R`Potential is a <b>scalar</b>: just add the values for several charges. For a system of charges, add $U$ over <b>every pair</b>.`),
  P(R`<b>Field from potential</b>:`, [R`\vec E = -\left(\frac{\partial V}{\partial x}\hat i + \frac{\partial V}{\partial y}\hat j + \frac{\partial V}{\partial z}\hat k\right),\qquad V_B - V_A = -\int_A^B\vec E\cdot d\vec r`]),
  P(R`<b>Equipotential surfaces</b> are ⊥ to field lines. No work is done moving a charge along them.`),
  S([25,45,65].map(r => s.circ(70,80,r,'class="blue" style="stroke-dasharray:4 3"')).join("") + [0,45,90,135,180,225,270,315].map(a => { const c = Math.cos(a * Math.PI / 180), d = Math.sin(a * Math.PI / 180); return s.line(70 + 9 * c,80 - 9 * d,70 + 72 * c,80 - 72 * d,'class="red"'); }).join("") + s.circ(70,80,7,'class="fl2"') + [165,190,215].map(x => s.line(x,20,x,140,'class="blue" style="stroke-dasharray:4 3"')).join("") + [40,80,120].map(y => s.arr(152,y,232,y,'class="red"')).join(""), 240, 160, "Equipotentials (dashed) ⊥ field lines"),
  J(R`$V(x,y)$ → $\vec E$ (watch the signs) and the work done moving charges in a system appear every year.`, "2026 · 6 Apr · Evening; 2026 · 28 Jan · Morning; 2026 · 23 Jan · Evening")
]],
["29.9 – 29.11 Electric Dipole", [
  P(R`Dipole moment $\vec p = q\vec d$ (from −q to +q). Far-field potential and field at $(r, \theta)$:`, [R`V = \frac{kp\cos\theta}{r^2},\qquad E = \frac{kp}{r^3}\sqrt{1 + 3\cos^2\theta}`, R`E_{axial} = \frac{2kp}{r^3},\qquad E_{equatorial} = \frac{kp}{r^3}\ (\text{opposite to } \vec p)`], S(s.circ(70, 80, 8) + s.circ(130, 80, 8, s.fill) + s.txt(66, 85, "−") + s.txt(126, 85, "+") + s.arr(80, 80, 120, 80, 'class="red"') + s.line(100, 80, 100, 20, s.dash) + s.line(130, 80, 200, 80, s.dash) + s.txt(160, 74, "axial") + s.txt(104, 30, "equatorial") + s.txt(92, 100, "p"), 210, 120)),
  P(R`In a <b>uniform field</b>: net force zero, torque $\vec\tau = \vec p\times\vec E$, PE $U = -\vec p\cdot\vec E$. Stable equilibrium at θ = 0, unstable at 180°. Work to rotate: $pE(\cos\theta_1 - \cos\theta_2)$. Small oscillations: $T = 2\pi\sqrt{I/pE}$.`, R`\tau = pE\sin\theta,\qquad U = -pE\cos\theta`),
  S([30,70,110,150].map(y => s.arr(10,y,210,y,'class="thin"')).join("") + s.line(80,110,140,50,'style="stroke-width:3"') + s.circ(140,50,7,'class="fl2"') + s.circ(80,110,7,'class="fl2"') + s.txt(136,55,"+") + s.txt(77,114,"−") + s.arr(147,50,192,50,'class="red"') + s.arr(73,110,28,110,'class="red"') + s.txt(176,44,"qE") + s.txt(30,104,"qE") + s.arcm(110,80,26,0,45) + s.txt(140,78,"θ") + s.txt(200,24,"E"), 220, 158, "τ = pE sin θ, U = −pE cos θ"),
  P(R`In a non-uniform field the dipole also feels a net force, $F = p\,\frac{dE}{dx}$ (along the field gradient).`),
  J(R`Dipoles are asked often: the resultant field of 2–3 dipoles, perpendicular dipoles, and dipole SHM frequency when a second field is added.`, "2026 · 2 Apr · Morning; 2026 · 23 Jan · Evening; 2026 · 4 Apr · Evening")
]],
["29.12 – 29.13 Conductors, Insulators & Field Inside a Conductor", [
  P(R`In electrostatic equilibrium a conductor has: E = 0 inside, all excess charge on the outer surface, the surface is an <b>equipotential</b>, and E just outside is ⊥ to the surface with magnitude $\sigma/\varepsilon_0$.`),
  S(s.path("M50 40 Q120 10 170 50 Q200 90 150 125 Q90 150 50 115 Q20 80 50 40Z",'class="fl2"') + [[60,38],[110,22],[160,45],[184,88],[150,124],[90,138],[42,100],[34,64]].map(([x,y]) => s.txt(x-4,y+4,"+")).join("") + s.txt(76,85,"E = 0 inside") + s.arr(172,48,196,30,'class="red"') + s.arr(190,90,220,94,'class="red"') + s.arr(46,40,26,22,'class="red"'), 230, 158, "Charge on the surface; E ⊥ surface outside"),
  P(R`Charge density is larger where the curvature is larger (sharp points), which causes corona discharge. Two connected spheres share the same potential: $\frac{q_1}{r_1} = \frac{q_2}{r_2}$ ⇒ $\frac{\sigma_1}{\sigma_2} = \frac{E_1}{E_2} = \frac{r_2}{r_1}$.`),
  P(R`<b>Dielectrics</b> (insulators) polarise and reduce the field inside them by the factor K.`),
  J(R`Connected or concentric conductors, and charged drops merging ($V\propto n^{2/3}$, $Q\propto n$), are asked often.`, "2026 · 2 Apr · Morning; 2026 · 24 Jan · Morning; 2026 · 22 Jan · Evening")
]]
],
pyq: {
  pat: [[R`Resultant field of several dipoles`, "2026 · 2 Apr · Morning; 2026 · 23 Jan · Evening"], [R`Connected/concentric conductors, merging drops`, "2026 · 2 Apr · Morning; 2026 · 24 Jan · Morning"], [R`Field/potential at the centre of symmetric charges`, "2026 · 22 Jan · Evening"], [R`Work/energy of a charge system`, "2026 · 28 Jan · Morning"], [R`E from V(x,y)`, "2026 · 6 Apr · Evening"], [R`Charged particle in equilibrium / pendulum in a field`, "2026 · 2 Apr · Evening"], [R`Assertion–reason and statement questions on conductors and field lines`, "2026 · 4 Apr · Evening; 2026 · 28 Jan · Evening"]],
  combo: [R`Dipole + SHM`, R`Electrostatics + Newton's laws (oil drop, charged pendulum)`, R`Field energy + dimensions`],
  trap: [R`Zero field doesn't mean zero potential (and the other way round).`, R`Connected conductors share potential, not charge.`],
  mist: [R`Adding potentials as vectors, or fields as scalars.`]
}
});
})();
