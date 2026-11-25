(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 6, short: "Friction",
intro: R`Friction is the component of the contact force <b>parallel</b> to the surface. It opposes <b>relative</b> sliding (or the tendency to slide).`,
sec: [
["6.1 Friction as Component of Contact Force", [
  P(R`The contact force $\vec F$ resolves into normal force $N$ (⊥ surface) and friction $f$ (∥ surface). The resultant contact force makes angle $\lambda$ with the normal.`, R`F_{contact} = \sqrt{N^2 + f^2},\qquad \tan\lambda = \frac fN`, S(s.ground(10, 210, 110) + s.rect(70, 60, 70, 50, s.fill) + s.arr(105, 110, 105, 30) + s.arr(105, 110, 40, 110, 'class="red"') + s.arr(105, 110, 60, 40, 'class="blue"') + s.txt(110, 40, "N") + s.txt(40, 104, "f") + s.txt(48, 36, "F") + s.txt(88, 84, "λ"), 220, 125))
]],
["6.2 – 6.4 Kinetic & Static Friction, Laws", [
  P(R`<b>Kinetic friction</b> (surfaces sliding): opposes relative velocity. Its magnitude is independent of the area of contact and, roughly, of speed.`, R`f_k = \mu_k N`),
  P(R`<b>Static friction</b> (no sliding): self-adjusting. It takes whatever value is needed to prevent slipping, up to a maximum (<b>limiting friction</b>).`, R`f_s \le \mu_s N,\qquad f_{s,max} = \mu_s N,\qquad \mu_s > \mu_k`, G({ xl: "applied F", yl: "f", xr: [0, 10], yr: [0, 6], fns: [x => (x < 5 ? x : (x < 5.05 ? 5 : 4))], lab: ["static f = F, then kinetic μₖN"] })),
  W(R`Never write $f = \mu N$ for static friction unless the body is <b>just about to slide</b>. First find the friction needed from Newton's laws and compare it with $\mu_sN$.`),
  P(R`<b>Angle of repose / friction</b>: a block just starts sliding on an incline when $\tan\theta = \mu_s$. The angle of friction $\lambda$ satisfies $\tan\lambda = \mu$.`, R`\theta_{repose}:\ \tan\theta = \mu_s`),
  S(s.path("M20 140 L200 140 L200 40 Z",'class="fl2"') + '<g transform="rotate(-29.05 120 84.4)">' + s.block(100,58.4,40,26,"m") + '</g>' + s.arr(126,73,126,125) + s.txt(130,122,"mg") + s.arr(126,73,104,34,'class="blue"') + s.txt(92,34,"N") + s.arcm(20,140,30,0,29) + s.txt(54,134,"θ") + s.arr(126,73,161,54,'class="red"') + s.txt(150,44,"f = μN"), 215, 150, "About to slide: tan θ = μs"),
  P(R`<b>Laws of friction</b>: (1) $f_k = \mu_kN$, nearly independent of area and speed; (2) $\mu_k < \mu_s$; (3) $\mu$ depends on the pair of surfaces (and their condition).`),
  G({ xl: "applied F", yl: "f", xr: [0, 4], yr: [0, 1.6], fns: [x => x < 2 ? 0.65 * x : (x < 2.05 ? 1.3 - (x - 2) * 8 : 0.9)], lab: ["static f rises to μsN, then kinetic μkN"] }),
  P(R`<b>Block on a rough incline</b>:`, [R`\text{sliding down: } a = g(\sin\theta - \mu_k\cos\theta)`, R`\text{projected up: } a = g(\sin\theta + \mu_k\cos\theta)\ \text{(retardation)}`]),
  P(R`<b>Pulling at angle $\theta$</b> to the horizontal reduces $N$: $N = mg - F\sin\theta$. The minimum force to move the block is $F_{min} = \frac{\mu mg}{\sqrt{1+\mu^2}}$ at $\tan\theta = \mu$.`),
  S(s.ground(10,210,110) + s.block(70,70,60,40,"m") + s.arr(130,80,185,45,'class="red"') + s.line(130,80,185,80,s.dash) + s.arcm(130,80,24,0,32) + s.txt(158,76,"θ") + s.txt(178,40,"F") + s.arr(100,90,100,145) + s.txt(105,142,"mg") + s.arr(84,110,84,45,'class="blue"') + s.txt(70,42,"N") + s.arr(70,106,30,106) + s.txt(28,98,"f"), 220, 155, "Pulling up at θ: N = mg − F sin θ"),
  J(R`"Time to slide down a rough incline is $n$ times that on the smooth one" ⇒ $\mu_k = \tan\theta\left(1 - \frac{1}{n^2}\right)$. This appeared in two of the April-2026 shifts you uploaded and in 2023–24 papers.`, "2026 · 4 Apr · Morning; 2026 · 6 Apr · Evening; 2024 · 8 Apr · Evening; 2023 · 29 Jan · Evening")
]],
["6.5 – 6.6 Atomic Picture & Measuring μ", [
  P(R`At the atomic level, real contact happens only at small points that form cold welds (electromagnetic bonds). Pressing harder increases the true contact area ∝ $N$, which is why $f \propto N$ and is independent of the apparent area.`),
  P(R`Lab method (Experimental Skills): increase the incline angle until the block just slides, then $\mu_s = \tan\theta$. For $\mu_k$, find the angle at which it slides with uniform velocity after a tap.`),
  P(R`<b>Two-block problems</b>: friction between blocks acts in opposite directions on each block (Newton's third law). Check for common motion first: $a = F/(m_1+m_2)$, then compare the friction needed with $\mu_sN$.`, null, S(s.ground(10, 210, 120) + s.rect(40, 80, 140, 40, s.fill2) + s.rect(70, 50, 60, 30, s.fill) + s.arr(180, 100, 215, 100, 'class="red"') + s.txt(195, 92, "F") + s.txt(90, 70, "m₁") + s.txt(100, 108, "m₂"), 220, 135, "Check common acceleration first")),
  J(R`Rotor/drum and rotating-disc questions combine friction with circular motion: the mass stays on the wall if $\mu\omega^2R \ge g$ (see circular motion).`, "2026 · 2 Apr · Evening")
]]
],
pyq: {
  pat: [
    [R`Rough vs smooth incline time ratio → $\mu_k$`, "2024 · 8 Apr · Evening; 2023 · 29 Jan · Evening; 2026 · 4 Apr · Morning"],
    [R`Minimum force to push up / hold a block on an incline`, "2023 · 25 Jan · Evening; 2024 · 31 Jan · Evening"],
    [R`Block–trolley / two-block friction, common acceleration`, "2021–24 (several)"],
    [R`Work done by friction (static friction can do work on a moving incline)`, "2026 · 5 Apr · Evening"]
  ],
  trap: [R`$F\cos\theta = \mu(mg - F\sin\theta)$ for a pull at an angle (the normal force is reduced).`, R`Friction can act <b>along</b> the direction of motion (walking, a block on an accelerating truck).`],
  mist: [R`Taking friction $= \mu N$ when the block is at rest below the limiting value.`]
},
aprFilter: "friction|incline|rotor|drum"
});
})();
