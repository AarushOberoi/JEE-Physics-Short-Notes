(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 19, short: "Optical Instruments",
intro: R`Instruments increase the angle an object subtends at the eye. Magnifying power = angle with instrument ÷ angle without it.`,
sec: [
["19.1 – 19.2 The Eye & Apparent Size", [
  P(R`The eye lens focuses images on the retina. <b>Accommodation</b> (ciliary muscles change f) lets a normal eye see from the near point $D = 25$ cm to the far point at infinity. Persistence of vision ≈ 1/10 s.`),
  S(s.circ(120,75,55) + s.lens(78,75,25) + s.line(10,55,78,55,'class="red"') + s.line(10,95,78,95,'class="red"') + s.line(78,55,174,75,'class="red"') + s.line(78,95,174,75,'class="red"') + s.path("M168 40 Q180 75 168 110",'class="blue" style="stroke-width:3"') + s.txt(150,144,"retina") + s.txt(62,40,"lens"), 200, 150, "Image on the retina; D = 25 cm"),
  P(R`The apparent size is set by the visual angle. Seen unaided, the largest angle is when the object is at $D$: $\theta_0 = h/D$.`)
]],
["19.3 Simple Microscope (Magnifier)", [
  P(R`A convex lens with the object inside its focus gives a virtual magnified image.`, [R`\text{image at } D:\ m = 1 + \frac Df,\qquad \text{image at infinity: } m = \frac Df`]),
  S(s.lens(130,80,55) + s.line(10,80,220,80,'class="thin"') + s.dot(95,80) + s.dot(165,80) + s.txt(160,96,"F") + s.arr(110,80,110,62) + s.line(110,62,130,62,'class="red"') + s.line(130,62,200,98,'class="red"') + s.line(130,62,83,38,'class="red" style="stroke-dasharray:4 3"') + s.line(110,62,175,120,'class="blue"') + s.line(110,62,83,38,'class="blue" style="stroke-dasharray:4 3"') + s.arr(83,80,83,40,'class="blue"') + s.txt(40,30,"virtual image"), 225, 150, "Simple microscope: m = 1 + D/f")
]],
["19.4 Compound Microscope", [
  P(R`The objective (short $f_o$) forms a real magnified image, which the eyepiece magnifies further.`, [R`m = \frac{v_o}{u_o}\left(1 + \frac D{f_e}\right)\ (\text{final image at } D)`, R`m\approx\frac{L}{f_o}\cdot\frac{D}{f_e}\ \ (\text{image at infinity, } L\approx\text{tube length})`], S(s.line(10, 80, 210, 80, s.dash) + s.path("M50 50 Q60 80 50 110 Q40 80 50 50") + s.path("M170 30 Q185 80 170 130 Q155 80 170 30") + s.arr(30, 80, 30, 70) + s.arr(120, 80, 120, 115, 'class="red"') + s.txt(36, 65, "O") + s.txt(40, 128, "objective") + s.txt(150, 145, "eyepiece"), 220, 155)),
  J(R`Replacing the objective with a plano-convex half (f doubles) changes the tube length needed to keep the same magnification.`, "2026 · 5 Apr · Morning")
]],
["19.5 Telescopes", [
  P(R`<b>Astronomical (refracting)</b> telescope: large $f_o$, small $f_e$.`, [R`\text{normal adjustment: } m = -\frac{f_o}{f_e},\quad L = f_o + f_e`, R`\text{image at } D:\ m = -\frac{f_o}{f_e}\left(1 + \frac{f_e}{D}\right)`]),
  S(s.lens(40,70,50) + s.lens(170,70,25) + s.line(5,70,215,70,'class="thin"') + s.line(5,66,40,70,'class="red"') + s.line(40,70,170,85.6,'class="red"') + s.line(170,85.6,210,69.6,'class="red"') + s.line(5,46,40,50,'class="blue"') + s.line(40,50,140,82,'class="blue"') + s.line(140,82,170,70,'class="blue"') + s.line(170,70,210,54,'class="blue"') + s.line(40,135,170,135,'class="thin"') + s.txt(80,150,"L = f_o + f_e") + s.txt(14,14,"objective") + s.txt(146,38,"eyepiece"), 220, 156, "m = −f_o / f_e (normal adjustment)"),
  P(R`<b>Terrestrial</b> telescope: an extra erecting lens gives an upright image (length $f_o + f_e + 4f$). <b>Galilean</b>: concave eyepiece, $L = f_o - |f_e|$, erect image. <b>Reflecting</b> (Newtonian, Cassegrain): a mirror objective, no chromatic aberration, larger aperture, easier support.`)
]],
["19.6 – 19.7 Resolving Power & Defects of Vision", [
  P(R`Microscope: smallest separation resolved $d = \frac{1.22\lambda}{2\mu\sin\theta}$ (RP = 1/d). Telescope: $\Delta\theta = 1.22\lambda/D$. A bigger objective gives better resolution and more light.`),
  S(s.circ(55,60,35) + s.lens(25,60,16) + s.line(0,48,25,48,'class="red"') + s.line(0,72,25,72,'class="red"') + s.line(25,48,75,68,'class="red"') + s.line(25,72,75,52,'class="red"') + s.txt(4,116,"myopia → concave lens") + s.circ(170,60,35) + s.lens(140,60,16) + s.line(115,48,140,48,'class="red"') + s.line(115,72,140,72,'class="red"') + s.line(140,48,226,62,'class="red" style="stroke-dasharray:2 3"') + s.line(140,72,226,58,'class="red" style="stroke-dasharray:2 3"') + s.txt(118,116,"hypermetropia → convex"), 240, 124, "Defects: focus before / behind the retina"),
  T(["Defect", "Cause", "Correction"], [["Myopia (short-sight)", "far point < ∞", "concave lens, $f = -$(far point)"], ["Hypermetropia", "near point > 25 cm", "convex lens"], ["Presbyopia", "loss of accommodation with age", "bifocal lens"], ["Astigmatism", "unequal curvature of cornea", "cylindrical lens"]]),
  J(R`Instrument questions are rare, mostly magnification of a microscope or telescope, or the power of a correcting lens.`, "2023–25 (several)")
]]
],
pyq: { pat: [[R`Compound microscope / telescope magnification, tube length`, "2026 · 5 Apr · Morning"], [R`Resolving power of a telescope`, "2026 · 8 Apr · Evening; 2026 · 4 Apr · Morning"]], trap: [R`Normal adjustment means the final image is at infinity.`] },
aprFilter: "microscope|telescope"
});
})();
