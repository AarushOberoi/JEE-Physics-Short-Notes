(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 5, short: "Newton's Laws of Motion",
intro: R`Draw the free-body diagram, choose a frame, write $\sum F = ma$ for each body, then add the constraint relations.`,
sec: [
["5.1 First Law & Inertial Frames", [
  P(R`<b>First law</b>: if the net external force on a body is zero, its acceleration is zero. A frame in which the first law holds is an <b>inertial frame</b>. Any frame moving with constant velocity relative to it is also inertial.`),
  P(R`The earth is only approximately inertial (rotation and revolution are small effects). An accelerating car or a rotating table is <b>non-inertial</b>.`)
]],
["5.2 – 5.3 Second Law & Working with Newton's Laws", [
  P(R`<b>Second law</b> (in an inertial frame): acceleration ∝ net force, in the direction of the force. The unit is the newton: 1 N = 1 kg m s⁻².`, [R`\vec F_{net} = m\vec a = \frac{d\vec p}{dt}`, R`F_x = ma_x,\quad F_y = ma_y,\quad F_z = ma_z`]),
  P(R`<b>Method</b>: (1) choose the system, (2) list the forces on it (the free-body diagram), (3) choose axes, (4) write the component equations, (5) add constraints (inextensible string means equal acceleration magnitudes; a light string has the same tension throughout).`, null, S(s.rect(70, 50, 60, 40, s.fill) + s.arr(100, 70, 100, 140) + s.arr(100, 50, 100, 10) + s.arr(130, 70, 190, 70, 'class="red"') + s.arr(70, 70, 20, 70) + s.txt(106, 138, "mg") + s.txt(106, 18, "N") + s.txt(160, 62, "F") + s.txt(20, 62, "f"), 210, 150, "Free-body diagram")),
  P(R`<b>Atwood machine</b> (light pulley, $m_1 > m_2$):`, R`a = \frac{(m_1-m_2)g}{m_1+m_2},\qquad T = \frac{2m_1m_2g}{m_1+m_2}`, S(s.circ(110, 25, 15) + s.line(95, 25, 95, 100) + s.line(125, 25, 125, 70) + s.rect(80, 100, 30, 30, s.fill) + s.rect(110, 70, 30, 24, s.fill2) + s.txt(84, 120, "m₁") + s.txt(114, 87, "m₂") + s.line(110, 0, 110, 10), 200, 140)),
  P(R`<b>Block on a smooth incline</b>: $a = g\sin\theta$ down the incline, $N = mg\cos\theta$. Normal force on a body in a lift: $N = m(g + a)$ going up with acceleration $a$ ("apparent weight").`),
  S(s.path("M20 140 L200 140 L200 40 Z",'class="fl2"') + '<g transform="rotate(-29.05 120 84.4)">' + s.block(100,58.4,40,26,"m") + '</g>' + s.arr(126,73,126,125) + s.txt(130,122,"mg") + s.arr(126,73,104,34,'class="blue"') + s.txt(92,34,"N") + s.arcm(20,140,30,0,29) + s.txt(54,134,"θ") + s.arr(126,73,91,92,'class="red"') + s.txt(48,100,"mg sin θ"), 215, 150, "Smooth incline: a = g sin θ, N = mg cos θ"),
  P(R`<b>Momentum form</b>: $\vec F = d\vec p/dt$ also covers variable mass. Impulse $= \int F\,dt = \Delta p$ (area under the F–t graph). A machine gun firing $n$ bullets per second at speed $v$ feels a force $F = nmv$.`),
  J(R`Most common question types here: pulley/Atwood and tension in multi-block strings. For "force on the pulley/clamp" add the string tensions as vectors ($2T$ for vertical strings).`, "2024 · 31 Jan · Evening; 2022 · 26 Jul · Evening; 2025 · 2 Apr · Evening")
]],
["5.4 Third Law", [
  P(R`<b>Third law</b>: if A exerts $\vec F$ on B, then B exerts $-\vec F$ on A. They act on <b>different bodies</b>, so they never cancel in one FBD. They are of the same type and act at the same time.`),
  S(s.ground(10,200,100) + s.block(40,50,50,50,"A") + s.block(90,60,40,40,"B") + s.arr(90,80,122,80,'class="red"') + s.arr(90,70,58,70,'class="blue"') + s.txt(112,74,"F") + s.txt(48,64,"−F") + s.arr(4,75,38,75) + s.txt(6,68,"P"), 200, 112, "Action and reaction act on different bodies"),
  P(R`5.6 <b>Horse and cart</b>: the cart moves because the <i>ground's friction on the horse</i> exceeds the cart's backward pull on the horse. Action–reaction pairs don't cancel because they act on different bodies.`)
]],
["5.5 Pseudo Forces (Non-inertial Frames)", [
  P(R`In a frame moving with acceleration $\vec a_0$, Newton's laws can be used if a <b>pseudo force</b> $-m\vec a_0$ is added to every body.`, R`\vec F_{pseudo} = -m\vec a_{frame}`, S(s.rect(30, 60, 150, 50) + s.circ(60, 115, 8) + s.circ(150, 115, 8) + s.line(105, 60, 105, 75) + s.line(105, 75, 85, 100) + s.circ(85, 100, 6, 'class="dot"') + s.arr(190, 85, 230, 85, 'class="blue"') + s.arr(80, 100, 50, 100, 'class="red"') + s.txt(195, 78, "a₀") + s.txt(30, 96, "ma₀") + s.txt(110, 92, "θ"), 240, 135, "Pendulum in accelerating car: tanθ = a₀/g")),
  P(R`Accelerating lift: $g_{eff} = g + a$ (going up with acceleration) or $g - a$ (accelerating down). In free fall $g_{eff} = 0$: weightlessness.`),
  S(s.rect(50,20,90,120) + s.line(95,0,95,20) + s.rect(70,118,50,8,'class="fl2"') + s.circ(95,52,9) + s.line(95,61,95,95) + s.line(95,95,85,118) + s.line(95,95,105,118) + s.line(80,72,110,72) + s.arr(165,110,165,50,'class="red"') + s.txt(171,84,"a") + s.txt(122,154,"scale reads N"), 200, 162, "Going up with a: N = m(g + a)"),
  J(R`Wedge or accelerating-incline problems: go to the wedge frame, add $ma_0$ opposite to the wedge's acceleration, then resolve along the incline. In 2026 a pulled wedge with a block on it appeared.`, "2026 · 5 Apr · Morning; 2026 · 28 Jan · Evening; 2022 · 27 Jul · Evening")
]],
["5.7 Inertia & Mass", [
  P(R`<b>Inertia</b>: a body's tendency to resist a change in its state of rest or uniform motion. <b>Mass</b> is its quantitative measure (inertial mass), and it equals gravitational mass (see Gravitation).`)
]]
],
pyq: {
  pat: [
    [R`Atwood / multi-pulley acceleration and tension`, "2024 · 31 Jan · Evening; 2022 · 26 Jul · Evening; 2026 · 5 Apr · Morning"],
    [R`Pseudo force: wedge, lift, pendulum in a car`, "2026 · 28 Jan · Evening; 2022 · 27 Jul · Evening"],
    [R`Time-dependent force → velocity/position (integrate $F/m$)`, "2026 · 21 Jan · Morning; 2023 · 11 Apr · Evening"],
    [R`Impulse when catching a ball / bouncing off a wall`, "2024 · 8 Apr · Morning; 2024 · 1 Feb · Evening"],
    [R`Variable mass (balloon releasing gas, conveyor belt, rocket thrust $v_r\,dm/dt$)`, "2025 · 28 Jan · Evening; 2022 · 28 Jul · Morning"]
  ],
  combo: [R`Pulley + incline (two inclines and one string)`, R`Pseudo force + friction`, R`Pulley + energy conservation (speed on hitting the ground)`],
  trap: [R`The spring force cannot change instantly, but string tension can. Just after a string is cut, the spring forces are unchanged.`, R`The normal force is not always $mg\cos\theta$: pseudo or applied forces change it.`],
  mist: [R`Adding a pseudo force while working in the ground (inertial) frame.`, R`Wrong constraint relation for movable pulleys (a block on a movable pulley moves at half the speed of the free end).`]
}
});
})();
