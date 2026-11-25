(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 7, short: "Circular Motion",
intro: R`Any curved path is locally a circle. A body moving in a circle always needs a net force towards the centre.`,
sec: [
["7.1 Angular Variables", [
  P(R`Angular position $\theta$ (rad), angular velocity $\omega = d\theta/dt$, angular acceleration $\alpha = d\omega/dt$. Linear and angular quantities are related by:`, [R`s = r\theta,\qquad v = r\omega,\qquad a_t = r\alpha`]),
  P(R`For constant $\alpha$ the equations look like linear kinematics.`, R`\omega = \omega_0 + \alpha t,\quad \theta = \omega_0t + \tfrac12\alpha t^2,\quad \omega^2 = \omega_0^2 + 2\alpha\theta`),
  P(R`Uniform circular motion: $T = 2\pi/\omega$, frequency $\nu = 1/T$, $\omega = 2\pi\nu$.`)
]],
["7.2 – 7.3 Unit Vectors & Acceleration in Circular Motion", [
  P(R`Use the radial unit vector $\hat e_r$ (outward) and the tangential unit vector $\hat e_t$ (direction of motion). Differentiating $\vec v = v\hat e_t$ gives two components:`, [R`\vec a = -\frac{v^2}{r}\hat e_r + \frac{dv}{dt}\hat e_t`, R`a_c = \frac{v^2}{r} = \omega^2r,\quad a_t = \frac{dv}{dt},\quad a = \sqrt{a_c^2+a_t^2}`], S(s.circ(100, 85, 65) + s.circ(146, 39, 4, 'class="dot"') + s.arr(146, 39, 120, 65, 'class="red"') + s.arr(146, 39, 175, 68, 'class="blue"') + s.txt(110, 80, "a_c") + s.txt(170, 85, "a_t") + s.line(100, 85, 146, 39, s.dash) + s.txt(105, 60, "r"), 210, 165, "Centripetal and tangential components")),
  P(R`In <b>uniform</b> circular motion $a_t = 0$, the speed is constant, and the acceleration $v^2/r$ always points to the centre (its direction keeps changing).`),
  W(R`Uniform circular motion is accelerated motion. The velocity changes in direction even though the speed is constant. The magnitude of the average acceleration over half a circle is $2v^2/(\pi r)$, not $v^2/r$.`)
]],
["7.4 – 7.5 Dynamics: Circular Turnings & Banked Roads", [
  P(R`The net force towards the centre must equal $mv^2/r$. This is not a new force: it is supplied by tension, friction, gravity, normal force, etc.`, R`\sum F_{\text{towards centre}} = \frac{mv^2}{r}`),
  P(R`<b>Level road</b> (friction supplies $mv^2/r$):`, R`v_{max} = \sqrt{\mu_s rg}`),
  S(s.circ(100,85,60,'class="thin" style="stroke-dasharray:4 3"') + s.dot(100,85) + s.block(150,73,20,24,"") + s.arr(158,85,112,85,'class="red"') + s.arr(160,70,160,28,'class="blue"') + s.txt(126,78,"f") + s.txt(166,40,"v") + s.txt(84,100,"O") + s.txt(16,168,"f = mv²/r ≤ μmg ⇒ v ≤ √(μrg)"), 215, 175, "Level road (top view): friction points to the centre"),
  P(R`<b>Banked road</b> at angle $\theta$: without friction, $N\sin\theta$ supplies $mv^2/r$.`, [R`v_0 = \sqrt{rg\tan\theta}\ (\text{no friction needed})`, R`v_{max} = \sqrt{rg\frac{\mu+\tan\theta}{1-\mu\tan\theta}},\quad v_{min} = \sqrt{rg\frac{\tan\theta-\mu}{1+\mu\tan\theta}}`], S(s.path("M20 140 L200 140 L200 70 Z", s.fill) + s.rect(100, 92, 30, 20, 'transform="rotate(-21 115 102)"') + s.arr(118, 98, 95, 40) + s.arr(118, 102, 118, 150, 'class="red"') + s.txt(84, 40, "N") + s.txt(122, 155, "mg") + s.txt(170, 132, "θ"), 220, 165, "N sinθ = mv²/r, N cosθ = mg")),
  P(R`Friction acts <b>down</b> the slope if $v > v_0$ and <b>up</b> the slope if $v < v_0$.`),
  P(R`<b>Conical pendulum</b> / pendulum in a turning car: $\tan\theta = \frac{v^2}{rg}$, $T = 2\pi\sqrt{\frac{l\cos\theta}{g}}$. A cyclist on a turn leans by the same angle.`),
  S(s.ceil(60,140,15) + s.line(100,15,150,105) + s.line(100,15,100,105,s.dash) + s.ell(100,105,50,12,'class="thin" style="stroke-dasharray:4 3"') + s.circ(150,105,8,'class="fl"') + s.arr(150,105,108,105,'class="red"') + s.arr(150,105,150,150) + s.arr(150,105,131,70,'class="blue"') + s.arcm(100,15,26,-90,-61) + s.txt(103,54,"θ") + s.txt(155,148,"mg") + s.txt(120,62,"T") + s.txt(110,124,"r"), 200, 158, "T cos θ = mg, T sin θ = mv²/r"),
  P(R`<b>Vertical circle</b> (string, length $r$): the speed needed at the bottom to complete the circle is $\sqrt{5gr}$, at the top it is $\sqrt{gr}$, and $T_{bottom} - T_{top} = 6mg$. For a rod or a tube: $\sqrt{4gr}$ at the bottom (it can be zero at the top).`),
  S(s.circ(100,90,60,'class="thin"') + s.dot(100,90) + s.circ(100,30,7,'class="fl"') + s.circ(100,150,7,'class="fl"') + s.arr(108,30,150,30,'class="red"') + s.arr(108,150,165,150,'class="red"') + s.line(100,90,100,37,'class="thin"') + s.txt(124,22,"v ≥ √(gr)") + s.txt(118,170,"v ≥ √(5gr)") + s.txt(104,70,"r") + s.txt(2,96,"T_b − T_t = 6mg"), 210, 178, "Minimum speeds to complete the circle"),
  J(R`Rotor/drum, rotating disc and banking-with-friction questions are the most common in circular motion. Conical pendulum / pendulum-in-car questions came in 2023 and 2026.`, "2026 · 2 Apr · Evening; 2024 · 31 Jan · Morning; 2025 · 24 Jan · Morning; 2026 · 8 Apr · Evening")
]],
["7.6 Centrifugal Force", [
  P(R`In a frame <b>rotating</b> with angular speed $\omega$, a pseudo force $m\omega^2r$ acts <b>outward</b> on every body. This is the centrifugal force. Use it <b>only</b> in the rotating frame, never together with "centripetal force" in the ground frame.`, R`F_{cf} = m\omega^2 r\ (\text{outward, rotating frame only})`),
  J(R`Spring + circular motion: a mass on a spring whirled on a table satisfies $kx = m\omega^2(L_0 + x)$.`, "2023 · 24 Jan · Evening; 2022 · 30 Jul · Evening")
]],
["7.7 Effect of Earth's Rotation on Apparent Weight", [
  P(R`At latitude $\lambda$ the rotation reduces the apparent weight. The effect is maximum at the equator and zero at the poles.`, R`g' \approx g - \omega^2R\cos^2\lambda`),
  S(s.circ(90,90,60,'class="fl2"') + s.line(90,20,90,160,s.dash) + s.line(90,90,140,58) + s.line(30,90,150,90,'class="thin"') + s.line(90,58,140,58,s.dash) + s.arcm(90,90,22,0,33) + s.txt(116,86,"λ") + s.arr(140,58,178,58,'class="red"') + s.txt(140,48,"mω²R cos λ") + s.txt(78,14,"axis") + s.txt(112,70,"R"), 215, 168, "g′ = g − ω²R cos²λ: least at the equator"),
  P(R`If the earth spun fast enough that $\omega^2R = g$ (about 17 times faster), bodies at the equator would feel weightless.`)
]]
],
pyq: {
  pat: [
    [R`Friction limit on a rotating drum/disc/coin ($\mu\omega^2R \ge g$; $\mu g \ge \omega^2r$)`, "2026 · 2 Apr · Evening; 2024 · 31 Jan · Morning"],
    [R`Banking with friction, maximum speed`, "2025 · 24 Jan · Morning; 2024 · 6 Apr · Evening"],
    [R`Vertical circle: tension, speed, KE ratios at different points`, "2025 · 29 Jan · Morning; 2024 · 29 Jan · Evening"],
    [R`Conical pendulum / pendulum in a turning car`, "2026 · 8 Apr · Evening; 2023 · 25 Jan · Morning"],
    [R`Arc vs chord displacement, clock hands, angular kinematics`, "2024 · 8 Apr · Morning; 2024 · 4 Apr · Evening"]
  ],
  trap: [R`Chord displacement $2R\sin(\theta/2)$ is not the arc length $R\theta$.`, R`String goes slack (T = 0) before the top if $\sqrt{2gr} < v_{bottom} < \sqrt{5gr}$.`],
  mist: [R`Adding "centripetal force" as an extra force in the FBD.`]
}
});
})();
