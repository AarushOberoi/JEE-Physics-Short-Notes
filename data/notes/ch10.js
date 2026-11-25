(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 10, short: "Rotational Mechanics",
intro: R`Every rotation formula is the translational one with $x\to\theta$, $m\to I$, $F\to\tau$, $p\to L$. Rotational Motion has 27–37 JEE questions every year.`,
sec: [
["10.1 – 10.2 Rigid Body Rotation & Kinematics", [
  P(R`A <b>rigid body</b> keeps all inter-particle distances fixed. In rotation about a fixed axis, every particle moves in a circle centred on the axis with the <b>same</b> $\omega$ and $\alpha$.`),
  P(R`Kinematics with constant $\alpha$ (same form as linear):`, [R`\omega = \omega_0 + \alpha t,\quad \theta = \omega_0t + \tfrac12\alpha t^2,\quad \omega^2 = \omega_0^2 + 2\alpha\theta`, R`v = \omega r,\quad a_t = \alpha r,\quad a_c = \omega^2r`]),
  J(R`From rest with uniform $\alpha$, the angles turned in successive equal intervals are in the ratio 1 : 3 : 5…`, "2026 · 5 Apr · Evening (uploaded paper)")
]],
["10.3 – 10.5 Torque & Γ = Iα", [
  P(R`<b>Torque</b> about a point: $\vec\tau = \vec r\times\vec F$. Magnitude = force × perpendicular distance of the line of action from the point. Torque about an axis = component along the axis.`, [R`\vec\tau = \vec r\times\vec F,\qquad |\tau| = rF\sin\theta = F\,r_\perp`]),
  S(s.dot(30,120) + s.txt(16,136,"O") + s.arr(30,120,128,61,'class="blue"') + s.arr(130,60,190,80,'class="red"') + s.line(50,33,130,60,s.dash) + s.line(30,120,58,36,'class="thin"') + s.txt(84,104,"r") + s.txt(184,98,"F") + s.txt(18,76,"r⊥") + s.txt(70,162,"τ = rF sin θ = F × r⊥"), 210, 170, "Torque = force × perpendicular distance"),
  P(R`<b>Moment of inertia</b> about an axis: $I = \sum m_ir_i^2$ (unit kg m²). It depends on the mass distribution <b>and the axis</b>.`, R`\Gamma_{net} = I\alpha`),
  D("Γ = Iα", [R`Tangential force on particle $i$: $F_{t,i} = m_ia_{t,i} = m_ir_i\alpha$.`, R`Torque: $\tau_i = r_iF_{t,i} = m_ir_i^2\alpha$. Sum (internal torques cancel): $\Gamma = (\sum m_ir_i^2)\alpha = I\alpha$.`]),
  P(R`<b>Pulley with mass</b> (disc, radius R) with a block of mass $m$ hanging from a light string:`, R`a = \frac{mg}{m + I/R^2},\qquad T = \frac{mg\,I/R^2}{m + I/R^2}`),
  S(s.ceil(70,130,12) + s.line(100,12,100,30) + s.circ(100,55,25,'class="fl2"') + s.dot(100,55) + s.line(75,55,100,55,'class="thin"') + s.txt(80,50,"R") + s.line(125,55,125,120) + s.block(110,120,30,26,"m") + s.arr(125,146,125,176) + s.txt(130,172,"mg") + s.txt(130,95,"T") + s.arcm(100,55,34,10,80,'class="red"') + s.txt(128,22,"α"), 200, 180, "a = mg / (m + I/R²)")
]],
["10.6 – 10.7 Equilibrium of Rigid Bodies", [
  P(R`Conditions: $\sum\vec F = 0$ (translational) and $\sum\vec\tau = 0$ about <b>any</b> point (rotational). Take torques about the point where unknown forces act, to eliminate them.`, R`\sum\vec F_{ext} = 0,\qquad \sum\vec\tau_{ext} = 0`),
  P(R`<b>Bending of a cyclist</b> on a turn: $\tan\theta = \frac{v^2}{rg}$ (from torque balance in the rotating frame).`),
  P(R`Ladder against a smooth wall, metre scale balanced with coins (Experimental Skill: principle of moments $m_1l_1 = m_2l_2$).`),
  S(s.ground(10,200,150) + s.rect(170,10,12,140,'class="fl2"') + s.line(60,150,170,30,'style="stroke-width:4"') + s.arr(170,30,130,30,'class="blue"') + s.txt(126,24,"N₂") + s.arr(60,150,60,98,'class="blue"') + s.txt(42,104,"N₁") + s.arr(60,150,98,150,'class="red"') + s.txt(84,166,"f") + s.arr(115,90,115,135) + s.txt(120,132,"mg") + s.arcm(60,150,26,0,47) + s.txt(90,136,"θ"), 200, 170, "Smooth wall: f = N₂, N₁ = mg")
]],
["10.8 – 10.11 Angular Momentum & its Conservation", [
  P(R`For a particle: $\vec L = \vec r\times\vec p$ (it depends on the chosen origin). For a rigid body about a fixed axis:`, [R`L = I\omega,\qquad \vec\tau_{ext} = \frac{d\vec L}{dt}`]),
  P(R`<b>Conservation</b>: if $\tau_{ext} = 0$, $L$ is constant ⇒ $I_1\omega_1 = I_2\omega_2$ (ice skater, diver, a person on a turntable folding the arms). KE is <b>not</b> conserved: $K = L^2/2I$.`, R`I_1\omega_1 = I_2\omega_2`),
  P(R`<b>Angular impulse</b> = $\int\tau\,dt = \Delta L$.`),
  J(R`Two discs brought into contact / a person jumping onto a platform: conserve $L$, then find the loss of KE. Earth shrinking at constant mass: $\omega\propto 1/R^2$, so the day becomes shorter.`, "2024 · 8 Apr · Evening; 2021 · 18 Mar · Morning")
]],
["10.12 – 10.13 Rotational KE, Work & Power", [
  P(R`For rotation about a fixed axis:`, [R`K = \tfrac12I\omega^2,\qquad W = \int\Gamma\,d\theta,\qquad P = \Gamma\omega`]),
  P(R`Work–energy theorem for rotation: $W = \frac12I\omega_2^2 - \frac12I\omega_1^2$.`)
]],
["10.14 – 10.15 Moment of Inertia & the Two Theorems", [
  T(["Body (mass M)", "Axis", "I"], [
    ["Thin ring, radius R", "through centre ⊥ plane", "$MR^2$"], ["Ring", "diameter", "$MR^2/2$"],
    ["Uniform disc", "through centre ⊥ plane", "$MR^2/2$"], ["Disc", "diameter", "$MR^2/4$"],
    ["Thin rod, length l", "through centre ⊥ rod", "$Ml^2/12$"], ["Rod", "through end ⊥ rod", "$Ml^2/3$"],
    ["Rectangular plate a×b", "through centre ⊥ plate", "$M(a^2+b^2)/12$"],
    ["Hollow cylinder", "its axis", "$MR^2$"], ["Solid cylinder", "its axis", "$MR^2/2$"], ["Solid cylinder", "⊥ axis through centre", "$M(R^2/4 + l^2/12)$"],
    ["Spherical shell", "diameter", "$2MR^2/3$"], ["Solid sphere", "diameter", "$2MR^2/5$"]]),
  P(R`<b>Radius of gyration</b>: $I = Mk^2$ ⇒ $k = \sqrt{I/M}$.`),
  P(R`<b>Parallel-axis theorem</b> (from an axis through the COM):`, R`I = I_{cm} + Md^2`, S(s.rect(30, 50, 140, 70, s.fill) + s.line(100, 20, 100, 150, s.dash) + s.line(40, 20, 40, 150, 'class="red"') + s.arr(100, 140, 42, 140) + s.txt(65, 158, "d") + s.txt(104, 30, "COM axis") + s.txt(0, 30, "axis"), 200, 165)),
  P(R`<b>Perpendicular-axis theorem</b> (plane laminae only): $I_z = I_x + I_y$, with $x$, $y$ in the plane.`, R`I_z = I_x + I_y`),
  S(s.path("M40 110 L120 140 L190 100 L110 70 Z",'class="fl2"') + s.arr(115,105,115,15,'class="red"') + s.arr(115,105,190,130) + s.arr(115,105,40,125) + s.txt(120,20,"z") + s.txt(186,146,"x") + s.txt(28,140,"y") + s.txt(4,30,"I_z = I_x + I_y"), 210, 155, "x, y in the lamina; z ⊥ to it"),
  W(R`The parallel-axis theorem must start from the COM axis. Never shift directly between two non-COM axes. The perpendicular-axis theorem does not work for 3-D bodies (spheres, cylinders).`),
  J(R`MI of composite bodies and point masses is the most asked rotation topic. Typical: a sphere melted into a disc + a sphere (mass conservation), ring with spokes, rod + spheres, square of masses about a diagonal.`, "2024 · 27 Jan · Morning; 2021 · 24 Feb · Morning; 2026 · 4 Apr · Morning")
]],
["10.16 – 10.20 Combined Rotation & Translation: Rolling", [
  P(R`General motion = translation of the COM + rotation about the COM. <b>Pure rolling</b> (no slipping): the contact point is momentarily at rest.`, [R`v_{cm} = \omega R,\qquad a_{cm} = \alpha R`], S(s.circ(100, 80, 50) + s.ground(20, 190, 130) + s.arr(100, 80, 140, 80) + s.arr(100, 30, 180, 30, 'class="red"') + s.circ(100, 130, 3, 'class="dot"') + s.txt(112, 75, "v") + s.txt(140, 22, "2v (top)") + s.txt(106, 125, "0")), ),
  P(R`<b>KE of a rolling body</b>:`, R`K = \tfrac12Mv^2 + \tfrac12I_{cm}\omega^2 = \tfrac12Mv^2\left(1 + \frac{k^2}{R^2}\right)`),
  T(["Body", "$k^2/R^2$", "$K_{rot}/K_{total}$", "$a$ down incline"], [["Ring / hollow cylinder", "1", "1/2", "$\\frac{g\\sin\\theta}{2}$"], ["Disc / solid cylinder", "1/2", "1/3", "$\\frac{2g\\sin\\theta}{3}$"], ["Hollow sphere", "2/3", "2/5", "$\\frac{3g\\sin\\theta}{5}$"], ["Solid sphere", "2/5", "2/7", "$\\frac{5g\\sin\\theta}{7}$"]]),
  P(R`<b>Rolling down an incline</b> (height h):`, [R`a = \frac{g\sin\theta}{1 + k^2/R^2},\qquad v = \sqrt{\frac{2gh}{1+k^2/R^2}},\qquad \mu_{min} = \frac{\tan\theta}{1 + R^2/k^2}`]),
  S(s.path("M20 140 L200 140 L20 50 Z",'class="fl2"') + s.circ(86.7,66.6,15,'class="fl"') + s.dot(86.7,66.6,2) + s.arr(86.7,66.6,124,85,'class="blue"') + s.txt(116,72,"v_cm") + s.arr(80,80,48,64,'class="red"') + s.txt(34,74,"f") + s.txt(166,134,"θ") + s.line(10,50,10,140,'class="thin"') + s.txt(0,98,"h"), 215, 150, "Static friction gives the torque; it does no work"),
  P(R`The solid sphere reaches the bottom first, then the disc, the hollow sphere, and the ring last (independent of mass and radius). Static friction does <b>no work</b> in pure rolling.`),
  P(R`<b>Angular momentum</b> of a rolling body about a point: $\vec L = \vec L_{cm} + M\vec r_{cm}\times\vec v_{cm}$. About the contact point, $L$ is conserved when friction is the only horizontal force (used in slipping → rolling).`),
  P(R`<b>Slipping → rolling</b>: kinetic friction decelerates translation and speeds up rotation until $v = \omega R$. For a body launched with $v_0$, $\omega_0 = 0$:`, R`v_f = \frac{v_0}{1 + k^2/R^2},\qquad t = \frac{v_0 - v_f}{\mu g}`),
  G({ xl: "t", yl: "", xr: [0, 4], yr: [0, 3.2], fns: [x => x < 2 ? 3 - 0.75 * x : 1.5, x => x < 2 ? 0.75 * x : 1.5], lab: ["v_cm falls", "Rω rises → equal: pure rolling"] }),
  P(R`10.20 A rolling sphere slows down in practice because of <b>rolling friction</b>: deformation shifts the normal force ahead of the centre and produces an opposing torque.`),
  J(R`Rolling ratios (speed, time, KE for ring/disc/sphere) and "identify the body from the height it rolls up to" ($h = \frac{v^2}{2g}(1 + k^2/R^2)$) are the most repeated rolling questions. A force applied at the top of a rolling body gives $a = \frac{2F}{M(1+k^2/R^2)}$.`, "2021 · 20 Jul · Evening; 2024 · 27 Jan · Evening; 2026 · 5 Apr · Evening; 2026 · 6 Apr · Evening")
]]
],
pyq: {
  pat: [
    [R`Rolling on an incline: ratios of speed, time, KE`, "2021 · 20 Jul · Evening; 2024 · 27 Jan · Evening"],
    [R`MI of composite bodies / parallel-axis`, "2024 · 27 Jan · Morning; 2021 · 24 Feb · Morning; 2026 · 2 Apr · Evening"],
    [R`Radius of gyration ratios`, "2024 · 5 Apr · Morning; 2023 · 15 Apr · Morning"],
    [R`Angular momentum conservation (discs merging, person on a platform)`, "2024 · 8 Apr · Evening; 2021 · 18 Mar · Morning"],
    [R`Torque $\vec r\times\vec F$ / $\vec L = \vec r\times\vec p$ in vector form`, "2022 · 25 Jun · Morning; 2026 · 2 Apr · Morning"],
    [R`String-driven rotation (pulley with mass)`, "2023 · 13 Apr · Evening; 2022 · 28 Jun · Evening"],
    [R`Angular momentum of a projectile about the launch point`, "2025 · 24 Jan · Morning; 2024 · 30 Jan · Morning"],
    [R`Slipping → pure rolling time`, "2026 · 8 Apr · Evening"]
  ],
  combo: [R`Rotation + SHM (physical pendulum, Oscillations)`, R`Rolling + string + block`, R`MI + torque (metre scale with coins)`],
  trap: [R`$K_{rot}/K_{total} = \frac{k^2}{k^2+R^2}$: 2/7 sphere, 1/3 disc, 1/2 ring.`, R`$L$ depends on the origin chosen. A particle moving in a straight line has constant non-zero $L$ about a point off the line.`, R`When $L$ is conserved, KE generally changes.`],
  mist: [R`Using $I_{cm}$ instead of $I$ about the pivot.`, R`Assuming friction acts backwards in every rolling case.`]
}
});
})();
