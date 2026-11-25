(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 12, short: "Simple Harmonic Motion",
intro: R`SHM: the restoring force is proportional to the displacement, $F = -kx$. Find $k$ (or the torque constant), and $\omega = \sqrt{k/m}$ follows.`,
sec: [
["12.1 – 12.3 SHM & its Equation of Motion", [
  P(R`A particle executes <b>SHM</b> if the resultant force is directed towards a fixed point and is proportional to the displacement from it.`, [R`F = -kx\ \Rightarrow\ \frac{d^2x}{dt^2} = -\omega^2x,\qquad \omega = \sqrt{\frac km}`]),
  S(s.wall(20,40,110) + s.spring(20,85,100,7,8) + s.block(100,65,40,40,"m") + s.ground(10,230,105) + s.line(120,30,120,122,s.dash) + s.line(70,40,70,122,'class="thin" style="stroke-dasharray:2 3"') + s.line(170,40,170,122,'class="thin" style="stroke-dasharray:2 3"') + s.txt(60,36,"−A") + s.txt(110,24,"x = 0") + s.txt(164,36,"+A") + s.arr(160,58,140,58,'class="red"') + s.txt(150,50,"F = −kx"), 240, 130, "Restoring force always points to the mean position"),
  P(R`General solution (A = amplitude, $\delta$ = phase constant):`, [R`x = A\sin(\omega t + \delta)`, R`v = A\omega\cos(\omega t + \delta) = \omega\sqrt{A^2 - x^2},\qquad a = -\omega^2x`]),
  P(R`<b>Periodic</b> motion repeats after time T. <b>Oscillatory</b> motion goes to and fro. Every SHM is periodic, but not every periodic motion is SHM. SHM needs a single sinusoid (or a sum of sin and cos with the same ω).`)
]],
["12.4 Terms: Amplitude, Period, Phase", [
  P(R`Time period, frequency and angular frequency:`, R`T = \frac{2\pi}\omega = 2\pi\sqrt{\frac mk},\qquad \nu = \frac1T`),
  P(R`<b>Phase</b> $(\omega t + \delta)$ fixes the state of motion. Velocity leads displacement by $\pi/2$, and acceleration is opposite to displacement (phase $\pi$).`, null, G({ xl: "t", yl: "x,v,a", xr: [0, 6.3], yr: [-1.1, 1.1], fns: [x => Math.sin(x), x => 0.8 * Math.cos(x), x => -0.6 * Math.sin(x)], lab: ["x", "v", "a"] })),
  P(R`Max speed $A\omega$ (at the mean position), max acceleration $A\omega^2$ (at the extremes).`),
  G({ xl: "x", yl: "", xr: [-1.2, 1.2], yr: [-1.3, 1.3], fns: [x => Math.sqrt(1 - x * x), x => -Math.sqrt(1 - x * x), x => -x], lab: ["v–x: ellipse", "", "a–x: line, slope −ω²"] }),
  J(R`If $v^2 = a - bx^2$, compare with $v^2 = \omega^2(A^2 - x^2)$: $\omega^2 = b$, $A^2 = a/b$. The particle is at rest at the extremes and has zero acceleration at the mean position.`, "2026 · 4 Apr · Morning; 2026 · 2 Apr · Evening")
]],
["12.5 SHM as Projection of Circular Motion", [
  P(R`The projection on a diameter of a point moving uniformly on a circle (the <b>reference circle</b>) performs SHM with the same $\omega$. Use this for time taken between two positions: from $x = 0$ to $x = A/2$ takes $T/12$, from $A/2$ to $A$ takes $T/6$.`, null, S(s.circ(90, 80, 55) + s.line(20, 80, 160, 80) + s.circ(129, 41, 4, 'class="dot"') + s.line(90, 80, 129, 41) + s.line(129, 41, 129, 80, s.dash) + s.circ(129, 80, 4, 'class="dot"') + s.txt(100, 72, "ωt") + s.txt(133, 96, "x = A cos ωt"), 200, 150))
]],
["12.6 Energy in SHM", [
  P(R`Total energy is constant. KE and PE interchange, each oscillating with frequency $2\nu$.`, [R`K = \tfrac12m\omega^2(A^2 - x^2),\quad U = \tfrac12m\omega^2x^2,\quad E = \tfrac12kA^2`], G({ xl: "x", yl: "E", xr: [-1, 1], yr: [0, 1.1], fns: [x => x * x, x => 1 - x * x, x => 1], lab: ["U", "K", "E"] })),
  P(R`$K = U$ at $x = A/\sqrt2$. At $x = A/2$, $U : K = 1 : 3$. The average KE over a cycle equals the average PE, $= E/2$.`),
  J(R`KE oscillates at angular frequency $2\omega$. If the question gives the KE frequency, the SHM frequency is half of it.`, "2026 · 21 Jan · Evening; 2023 · 13 Apr · Evening")
]],
["12.7 – 12.10 Angular SHM & Pendulums", [
  P(R`<b>Angular SHM</b>: $\Gamma = -k\theta$ ⇒ $\omega = \sqrt{k/I}$.`),
  P(R`<b>Simple pendulum</b> (small amplitude):`, R`T = 2\pi\sqrt{\frac lg}`, S(s.line(40, 15, 140, 15) + s.line(90, 15, 130, 110) + s.line(90, 15, 90, 120, s.dash) + s.circ(130, 115, 8, s.fill) + s.txt(96, 50, "θ") + s.txt(118, 70, "l"), 180, 140)),
  L([R`In a lift accelerating up: $g\to g+a$. Accelerating down: $g-a$. In free fall: T → ∞.`, R`In a car with horizontal acceleration $a$: $g_{eff} = \sqrt{g^2+a^2}$.`, R`Very long pendulum: $T = 2\pi\sqrt{\frac{1}{g(1/l + 1/R)}}$, maximum 84.6 min.`, R`A bob of density $\rho$ in a liquid of density $\sigma$: $g_{eff} = g(1 - \sigma/\rho)$.`]),
  P(R`<b>Physical (compound) pendulum</b>, pivot at distance $d$ from the COM:`, R`T = 2\pi\sqrt{\frac{I}{mgd}} = 2\pi\sqrt{\frac{k^2 + d^2}{gd}}`),
  S(s.path("M60 20 Q140 10 150 70 Q160 140 90 130 Q30 120 40 60 Q45 25 60 20Z",'class="fl2"') + s.dot(80,30) + s.txt(64,26,"O") + s.dot(100,85) + s.txt(106,90,"C") + s.line(80,30,100,85,'class="thin"') + s.txt(78,64,"d") + s.arr(100,85,100,132,'class="red"') + s.txt(104,128,"mg"), 190, 150, "T = 2π√(I/mgd), I about the pivot O"),
  P(R`<b>Torsional pendulum</b>: $\Gamma = -k\theta$ (wire's torsion constant) ⇒ $T = 2\pi\sqrt{I/k}$.`),
  S(s.ceil(60,140,12) + s.line(100,12,100,90) + s.ell(100,100,55,14,'class="fl"') + s.arcm(100,100,64,200,340,'class="red"') + s.txt(108,50,"wire (k)") + s.txt(156,136,"θ"), 210, 145, "Γ = −kθ ⇒ T = 2π√(I/k)"),
  J(R`Pendulum in a lift, at altitude or on another planet (frequently asked). Physical pendulum: a disc pivoted at its rim has $T = 2\pi\sqrt{3R/2g}$.`, "2022 · 30 Jul · Evening; 2025 · 22 Jan · Evening; 2026 · 4 Apr · Evening")
]],
["Springs", [
  P(R`Vertical spring: at equilibrium $kx_0 = mg$, and the period is the same as horizontal: $T = 2\pi\sqrt{m/k} = 2\pi\sqrt{x_0/g}$.`),
  S(s.ceil(40,120,12) + s.vspring(80,12,80,6,8) + s.block(62,80,36,30,"m") + s.line(100,50,150,50,s.dash) + s.line(100,80,150,80,s.dash) + s.line(140,50,140,80,'class="thin"') + s.txt(146,70,"x₀ = mg/k") + s.txt(104,44,"natural length"), 220, 120, "Mean position shifts; T stays 2π√(m/k)"),
  P(R`<b>Combinations</b>: series $\frac1k = \frac1{k_1} + \frac1{k_2}$, parallel $k = k_1 + k_2$. A spring cut into $n$ equal parts gives each part $nk$ ($k\propto 1/l$).`, R`\text{two blocks on a spring: } T = 2\pi\sqrt{\frac{\mu}{k}},\ \mu = \frac{m_1m_2}{m_1+m_2}`),
  S(s.wall(20,20,60) + s.spring(20,40,70,4,6) + s.spring(70,40,120,4,6) + s.block(120,28,26,24,"m") + s.txt(40,22,"k₁") + s.txt(88,22,"k₂") + s.txt(160,44,"series") + s.wall(20,85,135) + s.spring(20,95,110,5,6) + s.spring(20,125,110,5,6) + s.line(110,90,110,130) + s.block(110,98,26,24,"m") + s.txt(50,88,"k₁") + s.txt(50,144,"k₂") + s.txt(160,114,"parallel"), 215, 150, "Series: 1/k = 1/k₁ + 1/k₂ · Parallel: k = k₁ + k₂"),
  J(R`Cut or combined springs appear every year: half the spring gives $k\to2k$ and $\nu\to\sqrt2\nu$.`, "2026 · 24 Jan · Morning; 2026 · 8 Apr · Evening; 2021 · 26 Feb · Morning")
]],
["12.11 – 12.13 Composition, Damping, Resonance", [
  P(R`<b>Two SHMs in the same direction</b> (same ω): the result is SHM with`, R`A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\delta},\quad \tan\epsilon = \frac{A_2\sin\delta}{A_1 + A_2\cos\delta}`),
  S(s.arr(30,120,140,120,'class="blue"') + s.arr(140,120,180,50,'class="blue"') + s.arr(30,120,178,52,'class="red"') + s.txt(80,138,"A₁") + s.txt(168,94,"A₂") + s.txt(90,78,"A") + s.arcm(140,120,18,0,60) + s.txt(158,112,"δ"), 200, 145, "Phasor sum: A² = A₁² + A₂² + 2A₁A₂ cos δ"),
  P(R`Perpendicular SHMs with the same ω: a line ($\delta = 0,\pi$), a circle ($\delta = \pi/2$, equal A), or an ellipse in general.`),
  S(s.line(15,75,65,25,'class="blue"') + s.txt(18,100,"δ = 0") + s.ell(115,50,22,32,'class="blue"') + s.txt(86,100,"δ = π/2") + s.circ(185,50,25,'class="blue"') + s.txt(158,100,"δ = π/2, A = B"), 230, 108, "x = A sin ωt, y = B sin(ωt + δ)"),
  P(R`<b>Damped oscillation</b> (drag $-bv$): the amplitude decays exponentially and the energy decays twice as fast.`, [R`A(t) = A_0e^{-bt/2m},\qquad E(t) = E_0e^{-bt/m}`], G({ xl: "t", yl: "x", xr: [0, 20], yr: [-1.1, 1.1], fns: [x => Math.exp(-0.12 * x) * Math.cos(1.6 * x), x => Math.exp(-0.12 * x)], lab: ["x(t)", "envelope"] })),
  P(R`<b>Forced oscillation</b>: the body finally oscillates at the driving frequency. <b>Resonance</b>: the amplitude is maximum when the driving frequency ≈ the natural frequency. Less damping gives a sharper and higher peak.`),
  G({ xl: "driving ω / ω₀", yl: "A", xr: [0, 2.2], yr: [0, 4.4], fns: [x => 1 / Math.sqrt((1 - x * x) ** 2 + (0.25 * x) ** 2), x => 1 / Math.sqrt((1 - x * x) ** 2 + (0.6 * x) ** 2)], lab: ["low damping", "high damping"] }),
  P(R`<b>Classifying functions</b>: $\sin\omega t + \cos\omega t$ is SHM. $\sin^2\omega t$ is SHM about ½ (period π/ω). $\sin^3\omega t$ and $\sin\omega t + \cos2\omega t$ are periodic, not SHM. $e^{-\omega t}$ and $\log\omega t$ are non-periodic.`),
  J(R`A match-list question on periodic / SHM / non-periodic functions appeared in 2026. Simple pendulum damping (amplitude² vs time graph) is in Experimental Skills.`, "2026 · 5 Apr · Evening")
]]
],
pyq: {
  pat: [
    [R`Pendulum in a lift / at height / on a planet`, "2022 · 30 Jul · Evening; 2023 · 25 Jan · Morning"],
    [R`Cut/combined springs`, "2026 · 24 Jan · Morning; 2021 · 26 Feb · Morning"],
    [R`KE = PE position, energy fractions`, "2023 · 13 Apr · Evening; 2021 · 17 Mar · Morning"],
    [R`Phase/time from the displacement equation`, "2022 · 27 Jun · Morning; 2023 · 10 Apr · Evening"],
    [R`Damping: time for the amplitude to halve`, "2021 · 16 Mar · Evening; 2021 · 17 Mar · Evening"],
    [R`Assertion–reason on SHM / pendulum`, "2025 · 28 Jan · Evening; 2025 · 29 Jan · Morning"]
  ],
  combo: [R`SHM + rotation (physical pendulum)`, R`SHM + electrostatics (dipole in a field: $T = 2\pi\sqrt{I/pE}$)`, R`SHM + buoyancy (floating cylinder: $T = 2\pi\sqrt{h/g}$)`],
  trap: [R`Mass–spring T doesn't depend on g (same on the moon). Pendulum T does.`, R`Energy ∝ A², so when the amplitude halves, the energy becomes 1/4.`],
  mist: [R`Measuring the energy of a vertical spring from the natural length instead of the equilibrium position.`]
}
});
})();
