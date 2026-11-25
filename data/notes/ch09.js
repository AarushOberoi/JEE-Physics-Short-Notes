(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 9, short: "Centre of Mass, Momentum & Collision",
intro: R`The centre of mass moves as if all the mass were concentrated there and all external forces acted there.`,
sec: [
["9.1 – 9.2 Centre of Mass", [
  P(R`For discrete particles:`, R`\vec r_{cm} = \frac{\sum m_i\vec r_i}{\sum m_i},\qquad x_{cm} = \frac{m_1x_1+m_2x_2}{m_1+m_2}`),
  P(R`For two particles the COM lies on the joining line and divides it in the <b>inverse ratio of the masses</b>: $r_1 = \frac{m_2d}{m_1+m_2}$.`),
  S(s.circ(30,60,16,'class="fl"') + s.circ(190,60,10,'class="fl2"') + s.line(46,60,180,60,'class="thin"') + s.path("M70 50 L78 62 L62 62Z",'class="redf"') + s.txt(22,65,"m₁") + s.txt(182,64,"m₂") + s.line(30,85,70,85,'class="red"') + s.line(70,90,190,90,'class="blue"') + s.txt(42,100,"r₁") + s.txt(126,106,"r₂") + s.txt(62,42,"cm") + s.txt(30,128,"m₁r₁ = m₂r₂ (nearer the heavier)"), 225, 135),
  P(R`<b>Continuous bodies</b>: $x_{cm} = \frac1M\int x\,dm$. Use symmetry wherever possible.`),
  T(["Body", "COM position"], [["Uniform rod", "midpoint"], ["Semicircular ring (radius R)", "$2R/\\pi$ from centre"], ["Semicircular disc", "$4R/3\\pi$ from centre"], ["Hemispherical shell", "$R/2$ from centre"], ["Solid hemisphere", "$3R/8$ from centre"], ["Solid cone (height h)", "$h/4$ from base"], ["Triangular lamina", "centroid ($h/3$ from base)"]]),
  P(R`<b>Body with a cavity</b>: treat the removed part as negative mass.`, R`x_{cm} = \frac{M_1x_1 - M_2x_2}{M_1 - M_2}`, S(s.circ(90, 75, 60, s.fill) + s.circ(120, 75, 25, 'style="fill:var(--paper)"') + s.circ(90, 75, 2, 'class="dot"') + s.circ(120, 75, 2, 'class="dot"') + s.txt(70, 90, "M₁") + s.txt(112, 80, "M₂"), 180, 150, "Disc with a hole: COM shifts away from hole")),
  J(R`Composite COM (disc with a hole, bent rod, L-shaped plate) is the commonest COM type recently.`, "2025 · 23 Jan · Morning; 2021 · 24 Feb · Evening")
]],
["9.3 – 9.4 Motion of COM, Linear Momentum Conservation", [
  P(R`Internal forces cancel in pairs, so only external forces accelerate the COM:`, [R`M\vec a_{cm} = \vec F_{ext},\qquad \vec P = M\vec v_{cm} = \sum m_i\vec v_i`]),
  P(R`If $\vec F_{ext} = 0$: $\vec v_{cm}$ is constant and the total linear momentum is conserved (explosions, recoil, a man walking on a boat).`, R`\sum m_i\vec v_i = \text{constant}`),
  P(R`A shell exploding in flight: the fragments' COM continues on the original parabola. Recoil of a gun: $MV = mv$.`),
  S(s.path("M15 140 Q105 -40 195 140",'class="thin" style="stroke-dasharray:4 3"') + s.path("M15 140 Q50 60 90 52",'class="blue"') + s.circ(90,52,5,'class="redf"') + s.path("M90 52 Q125 30 150 140",'class="blue"') + s.path("M90 52 Q190 50 240 140",'class="blue"') + s.dot(195,140) + s.txt(70,40,"explodes") + s.txt(182,134,"cm") + s.ground(5,250,140), 255, 155, "Internal forces only: the COM keeps the parabola"),
  P(R`<b>Path of the COM</b>: straight line if $\vec v_{cm}\parallel\vec a_{cm}$ (or $a_{cm} = 0$), otherwise parabolic.`),
  J(R`Explosion questions: the fragments share momentum equally and opposite, so $K\propto 1/m$. Splitting into equal parts at rest gives equal and opposite velocities.`, "2024 · 8 Apr · Morning; 2024 · 31 Jan · Morning")
]],
["9.5 Rocket Propulsion (Variable Mass)", [
  P(R`Gas ejected at relative speed $u$ at rate $|dm/dt|$ gives a thrust $u\left|\frac{dm}{dt}\right|$.`, [R`F_{thrust} = u\left|\frac{dm}{dt}\right|,\qquad v = v_0 + u\ln\frac{m_0}{m}\ (\text{no gravity})`]),
  S(s.path("M80 20 L100 50 L100 120 L60 120 L60 50 Z",'class="fl2"') + s.path("M60 120 L48 136 L60 130 M100 120 L112 136 L100 130") + s.path("M70 124 Q80 160 90 124",'class="red"') + s.arr(80,140,80,172,'class="red"') + s.arr(125,100,125,40,'class="blue"') + s.txt(86,170,"u (gases)") + s.txt(131,72,"v"), 180, 178, "Thrust = u |dm/dt|")
]],
["9.6 – 9.10 Collisions", [
  P(R`In any collision, <b>momentum is conserved</b> (the impulsive forces are internal). KE is conserved only in <b>elastic</b> collisions.`),
  P(R`<b>Coefficient of restitution</b> (along the line of impact): $e = 1$ elastic, $0 < e < 1$ inelastic, $e = 0$ perfectly inelastic (bodies stick).`, R`e = \frac{\text{velocity of separation}}{\text{velocity of approach}} = \frac{v_2 - v_1}{u_1 - u_2}`),
  P(R`<b>1-D elastic collision</b>:`, [R`v_1 = \frac{m_1-m_2}{m_1+m_2}u_1 + \frac{2m_2}{m_1+m_2}u_2,\qquad v_2 = \frac{2m_1}{m_1+m_2}u_1 + \frac{m_2-m_1}{m_1+m_2}u_2`]),
  S(s.txt(5,25,"before") + s.circ(60,36,12,'class="fl"') + s.arr(74,36,104,36,'class="red"') + s.circ(140,39,9,'class="fl2"') + s.txt(80,28,"u₁") + s.txt(5,85,"after") + s.circ(60,96,12,'class="fl"') + s.arr(74,96,90,96,'class="red"') + s.circ(150,99,9,'class="fl2"') + s.arr(161,99,198,99,'class="blue"') + s.txt(74,88,"v₁") + s.txt(172,90,"v₂") + s.ground(5,205,48) + s.ground(5,205,108), 210, 122, "Momentum conserved; e = (v₂ − v₁)/(u₁ − u₂)"),
  L([R`Equal masses <b>exchange velocities</b>.`, R`Heavy body hits a light one at rest: the light one moves off with ≈ $2u$.`, R`Light body hits a heavy one at rest: it rebounds with ≈ the same speed.`, R`Fraction of KE transferred to $m_2$ (at rest): $\frac{4m_1m_2}{(m_1+m_2)^2}$.`]),
  P(R`<b>Perfectly inelastic</b>: common velocity and KE loss:`, [R`v = \frac{m_1u_1+m_2u_2}{m_1+m_2},\qquad \Delta K = \frac{m_1m_2}{2(m_1+m_2)}(u_1-u_2)^2`]),
  P(R`<b>Ballistic pendulum</b>: a bullet embeds in the block (momentum conserved), then the block rises (energy conserved): $h = \frac{1}{2g}\left(\frac{mv}{m+M}\right)^2$.`),
  S(s.ceil(40,170,12) + s.line(80,12,80,90) + s.line(130,12,130,90) + s.block(70,90,70,30,"M") + s.rect(100,78,70,30,'class="thin" style="stroke-dasharray:4 3"') + s.path("M80 12 L110 78 M130 12 L160 78",'class="thin" style="stroke-dasharray:4 3"') + s.circ(26,105,4,'class="redf"') + s.arr(32,105,64,105,'class="red"') + s.txt(16,96,"m, v") + s.line(185,120,185,108,'class="thin"') + s.txt(189,118,"h"), 210, 132, "Collision (momentum), then swing (energy)"),
  P(R`<b>2-D elastic collision</b>: conserve momentum along both axes. Equal masses with one at rest move off at <b>90°</b> to each other.`),
  S(s.circ(40,80,10,'class="fl"') + s.arr(52,80,96,80,'class="red"') + s.circ(110,80,10,'class="fl2"') + s.txt(64,72,"u") + s.arr(110,80,170,45,'class="blue"') + s.arr(110,80,150,150,'class="blue"') + s.arcm(110,80,22,-60,30) + s.txt(136,98,"90°") + s.txt(166,40,"v₁") + s.txt(152,152,"v₂"), 210, 162, "Equal masses, one at rest: they move off at 90°"),
  P(R`Ball dropped from height $h$ with restitution $e$: rebound height $e^2h$, after $n$ bounces $e^{2n}h$.`),
  G({ xl: "t", yl: "h", xr: [0, 4], yr: [0, 1.1], fns: [x => { let t = x, h = 1; if (t < 1) return h - t * t; t -= 1; let hh = 0.49; while (hh > 1e-3) { const T = 2 * Math.sqrt(hh); if (t < T) { const u = t - T / 2; return hh - u * u; } t -= T; hh *= 0.49; } return 0; }], lab: ["heights h, e²h, e⁴h …"] }),
  J(R`A spring between two blocks is compressed most when they share a <b>common velocity</b>, not when one is at rest.`, "2025 · 3 Apr · Evening; 2021 · 17 Mar · Evening")
]],
["9.11 Impulse & Impulsive Force", [
  P(R`Impulse = change in momentum = area under the F–t graph. Impulsive forces are large forces acting for a very short time (bat on ball). During such short times, finite forces like gravity can be ignored.`, [R`\vec J = \int\vec F\,dt = \Delta\vec p`]),
  G({ xl: "t", yl: "F", xr: [0, 3], yr: [0, 1.2], fns: [x => x < 2 ? Math.sin(Math.PI * x / 2) : 0], lab: ["area under F–t = impulse = Δp"] }),
  P(R`Ball hitting a wall normally and rebounding with the same speed: $\Delta p = 2mv$. Average force $= 2mv/\Delta t$. Machine gun: $F = n\,mv$ (n bullets per second).`),
  S(s.rect(170,20,14,110,'class="fl2"') + s.circ(155,75,10,'class="fl"') + s.arr(60,60,135,60,'class="red"') + s.arr(135,92,60,92,'class="blue"') + s.txt(78,52,"+mv (in)") + s.txt(78,110,"−mv (out)"), 200, 130, "Δp = 2mv, average F = 2mv/Δt"),
  J(R`Impulse is asked often: F–t graph area, wall rebound ($2mv$), machine-gun recoil ($F = nmv$).`, "2023 · 1 Feb · Evening; 2023 · 31 Jan · Morning; 2023 · 11 Apr · Morning")
]]
],
pyq: {
  pat: [
    [R`Impulse from F–t graph or rebound`, "2023 · 1 Feb · Evening; 2023 · 31 Jan · Morning"],
    [R`Gun recoil / bullets per second ($F = nmv$)`, "2023 · 11 Apr · Morning; 2023 · 30 Jan · Evening"],
    [R`Elastic 1-D exchange, fraction of KE transferred`, "2025 · 29 Jan · Morning; 2022 · 27 Jun · Morning"],
    [R`Ballistic pendulum height`, "2024 · 1 Feb · Morning; 2021 · 16 Mar · Evening"],
    [R`COM of composite bodies; COM of an Atwood system`, "2025 · 23 Jan · Morning; 2026 · 2 Apr · Evening"]
  ],
  trap: [R`KE of a system = KE of the COM + KE relative to the COM.`, R`Velocity of separation uses the components <b>along the line of impact</b>.`],
  mist: [R`Conserving KE in an inelastic collision.`, R`Conserving momentum when an external impulsive force acts (e.g. a pivot or a rigid string).`]
},
aprFilter: "centre of mass|COM"
});
})();
