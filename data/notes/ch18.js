(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 18, short: "Geometrical Optics",
intro: R`Ray optics is one of the <b>most asked JEE Physics topics</b>. Use one sign convention throughout: distances measured from the pole/optical centre, positive along the incident light.`,
sec: [
["18.1 Reflection at Smooth Surfaces", [
  P(R`Laws of reflection: the incident ray, the reflected ray and the normal are coplanar, and $\angle i = \angle r$. A plane mirror forms a virtual, erect, same-size, laterally inverted image as far behind as the object is in front.`),
  S(s.line(20,120,200,120,'style="stroke-width:3"') + s.ground(20,200,120) + s.line(110,120,110,20,s.dash) + s.arr(30,40,108,118,'class="red"') + s.arr(110,120,190,40,'class="red"') + s.arcm(110,120,30,90,135) + s.arcm(110,120,36,45,90) + s.txt(92,82,"i") + s.txt(118,80,"r"), 215, 140, "i = r; incident, reflected ray and normal in one plane"),
  P(R`Rotating a plane mirror by θ rotates the reflected ray by 2θ. Two mirrors inclined at θ form $n = \frac{360^\circ}{\theta} - 1$ images (when 360/θ is even).`)
]],
["18.2 – 18.4 Spherical Mirrors & Magnification", [
  P(R`<b>Mirror formula</b> (paraxial rays), with $f = R/2$:`, [R`\frac1v + \frac1u = \frac1f,\qquad m = \frac{h_2}{h_1} = -\frac vu`], S(s.path("M60 15 Q 40 85 60 155") + s.line(10, 85, 210, 85, s.dash) + s.circ(130, 85, 2, 'class="dot"') + s.circ(200, 85, 2, 'class="dot"') + s.txt(126, 100, "F") + s.txt(196, 100, "C") + s.arr(180, 85, 180, 55, 'class="red"') + s.line(180, 55, 52, 55) + s.line(52, 55, 210, 130, 'class="blue"') + s.txt(184, 60, "object"), 220, 165, "Concave mirror: f negative")),
  T(["Object position (concave)", "Image"], [["Beyond C", "between F and C, real, inverted, diminished"], ["At C", "at C, real, inverted, same size"], ["Between F and C", "beyond C, real, inverted, magnified"], ["At F", "at infinity"], ["Between P and F", "behind mirror, virtual, erect, magnified"]]),
  P(R`A convex mirror always gives a virtual, erect, diminished image (rear-view mirror).`),
  S(s.path("M118 20 Q102 80 118 140",'style="stroke-width:3"') + s.line(10,80,225,80,'class="thin"') + s.arr(40,80,40,50) + s.line(40,50,111,50,'class="red"') + s.line(111,50,170,26,'class="red"') + s.line(111,50,165,80,'class="red" style="stroke-dasharray:4 3"') + s.line(40,50,108,61,'class="blue"') + s.line(108,61,220,80,'class="blue" style="stroke-dasharray:4 3"') + s.arr(141,80,141,68,'class="blue"') + s.dot(165,80) + s.txt(160,96,"F") + s.dot(220,80) + s.txt(214,96,"C") + s.txt(24,98,"object") + s.txt(120,116,"image"), 230, 150, "Convex mirror: virtual, erect, diminished"),
  P(R`For a small object lying along the axis, the <b>longitudinal magnification</b> is $-m^2$. For a long rod, image each end separately.`),
  J(R`Concave mirror with $|m|$ given at two object positions (one real, one virtual image): $|u| = |f|(1 \pm 1/|m|)$. Also common: m with a given object–image separation.`, "2026 · 6 Apr · Evening; 2025 · 28 Jan · Evening; 2025 · 7 Apr · Evening; 2026 · 4 Apr · Morning")
]],
["18.5 – 18.7 Refraction at Plane Surfaces, Critical Angle, Fibre", [
  P(R`<b>Snell's law</b> and refractive index:`, [R`\mu_1\sin i = \mu_2\sin r,\qquad \mu = \frac cv`]),
  S(s.rect(10,80,200,70,'class="fl2"') + s.line(10,80,210,80) + s.line(110,10,110,150,s.dash) + s.arr(50,20,108,78,'class="red"') + s.arr(110,80,140,148,'class="red"') + s.arcm(110,80,26,90,135) + s.arcm(110,80,26,-90,-66) + s.txt(94,48,"i") + s.txt(116,118,"r") + s.txt(14,74,"μ₁") + s.txt(14,100,"μ₂ (denser)"), 215, 155, "μ₁ sin i = μ₂ sin r: bends towards the normal"),
  P(R`<b>Apparent depth</b> (viewing near-normally from a rarer medium) and <b>normal shift</b> through a slab of thickness t:`, [R`\text{apparent depth} = \frac{\text{real depth}}{\mu}`, R`\text{shift} = t\left(1 - \frac1\mu\right)`]),
  S(s.rect(10,40,200,110,'class="fl2"') + s.line(10,40,210,40) + s.dot(100,130) + s.dot(100,90) + s.line(100,130,120,40,'class="red"') + s.line(120,40,134,5,'class="red"') + s.line(120,40,100,90,'class="red" style="stroke-dasharray:4 3"') + s.txt(106,140,"O (real)") + s.txt(30,94,"I (seen)") + s.line(190,40,190,130,'class="thin"') + s.txt(194,90,"h") + s.txt(14,58,"μ"), 220, 152, "Apparent depth = h / μ"),
  P(R`<b>Critical angle</b> C (light going from denser to rarer): beyond C there is <b>total internal reflection</b>. Uses: optical fibre, prisms in binoculars, sparkle of diamond, mirage.`, R`\sin C = \frac{\mu_{rarer}}{\mu_{denser}} = \frac1\mu`, S(s.line(10, 80, 210, 80) + s.rect(10, 80, 200, 70, s.fill) + s.arr(60, 150, 110, 80) + s.arr(110, 80, 160, 150, 'class="red"') + s.line(110, 20, 110, 150, s.dash) + s.txt(90, 115, "i > C") + s.txt(130, 40, "rarer") + s.txt(140, 140, "denser"), 220, 160)),
  P(R`A source at depth h under water lights up a circle on the surface of radius $r = h\tan C = \frac{h}{\sqrt{\mu^2-1}}$.`),
  S(s.rect(10,40,220,110,'class="fl2"') + s.line(10,40,230,40) + s.dot(120,130) + s.line(120,130,40,40,'class="red"') + s.line(120,130,200,40,'class="red"') + s.line(120,130,120,40,s.dash) + s.arcm(120,130,26,90,131.6) + s.txt(100,100,"C") + s.line(40,28,200,28,'class="blue"') + s.txt(96,22,"r = h tan C") + s.txt(126,90,"h"), 240, 150, "Light escapes only inside the critical cone"),
  J(R`Critical angle from speeds or indices, apparent depth in layered liquids, lateral shift through a slab.`, "2026 · 23 Jan · Morning; 2025 · 29 Jan · Morning; 2023 · 13 Apr · Morning; 2025 · 23 Jan · Morning")
]],
["18.8 Prism", [
  P(R`For a prism of angle A, deviation δ:`, [R`r_1 + r_2 = A,\qquad \delta = i + e - A`]),
  S(s.path("M110 15 L40 140 L180 140 Z",'class="fl2"') + s.line(10,100,74.7,78,'class="red"') + s.line(74.7,78,145.3,78,'class="red"') + s.line(145.3,78,215,100,'class="red"') + s.line(74.7,78,200,35,s.dash) + s.txt(104,40,"A") + s.txt(196,62,"δ") + s.txt(10,128,"δ = i + e − A"), 225, 150, "At minimum deviation the ray inside is parallel to the base"),
  P(R`<b>Minimum deviation</b> when $i = e$, $r_1 = r_2 = A/2$, and the ray inside is parallel to the base:`, R`\mu = \frac{\sin\frac{A + \delta_m}{2}}{\sin\frac A2}`, G({ xl: "i", yl: "δ", xr: [30, 80], yr: [35, 60], fns: [x => 38 + 0.022 * (x - 50) ** 2], lab: ["δ–i curve (Experimental skill)"] })),
  P(R`<b>Thin prism</b> (small A): $\delta = (\mu - 1)A$, independent of $i$.`),
  P(R`<b>Grazing emergence</b> ($e = 90^\circ$) happens when $r_2 = C$. No emergence at all if $A > 2C$. Equilateral prism with $\delta_m = A/2$ ⇒ $\mu = \sqrt2$. $\delta_m = A$ ⇒ $\mu = 2\cos(A/2)$.`),
  J(R`Prism questions are common: grazing emergence, δ_min conditions (statements A–E), TIR at the second face, thin-prism ratio i : δ.`, "2026 · 22 Jan · Morning; 2026 · 28 Jan · Evening; 2025 · 3 Apr · Morning; 2026 · 2 Apr · Morning")
]],
["18.9 – 18.10 Refraction at Spherical Surfaces", [
  P(R`Single spherical surface (μ₁ object side, μ₂ refracted side):`, [R`\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}`, R`m = \frac{\mu_1v}{\mu_2u}`]),
  S(s.path("M120 10 Q90 75 120 140 L220 140 L220 10 Z",'class="fl2"') + s.line(10,75,225,75,'class="thin"') + s.dot(30,75) + s.txt(24,92,"O") + s.line(30,75,108,45,'class="red"') + s.line(108,45,190,75,'class="red"') + s.dot(190,75) + s.txt(186,92,"I") + s.txt(40,30,"μ₁") + s.txt(196,30,"μ₂"), 230, 150, "μ₂/v − μ₁/u = (μ₂ − μ₁)/R"),
  P(R`Special cases: a fish in a spherical bowl, an air bubble in glass, a glass sphere (two refractions). A plane surface ($R\to\infty$) gives the apparent-depth result.`)
]],
["18.11 – 18.14 Thin Lenses, Lens Maker's Formula, Power", [
  P(R`<b>Lens maker's formula</b> (lens μ₂ in medium μ₁):`, R`\frac1f = \left(\frac{\mu_2}{\mu_1} - 1\right)\left(\frac1{R_1} - \frac1{R_2}\right)`),
  S(s.lens(110,75,60) + s.line(10,75,215,75,'class="thin"') + s.dot(30,75) + s.dot(190,75) + s.txt(24,92,"C₂") + s.txt(184,92,"C₁") + s.txt(60,40,"R₂") + s.txt(148,40,"R₁") + s.txt(104,152,"μ"), 220, 158, "1/f = (μ₂/μ₁ − 1)(1/R₁ − 1/R₂)"),
  P(R`<b>Thin lens formula</b> and magnification:`, [R`\frac1v - \frac1u = \frac1f,\qquad m = \frac vu`, R`P = \frac1{f\,(\text{m})}\ \text{dioptre}`], S(s.path("M110 15 Q 135 85 110 155 Q 85 85 110 15") + s.line(10, 85, 210, 85, s.dash) + s.arr(40, 85, 40, 55) + s.line(40, 55, 110, 55) + s.line(110, 55, 200, 125, 'class="red"') + s.line(40, 55, 200, 117, 'class="blue"') + s.txt(150, 100, "F") + s.circ(155, 85, 2, 'class="dot"'), 220, 165, "Convex lens")),
  L([R`Equiconvex lens with μ = 1.5: $f = R$. Plano-convex: $f = \frac{R}{\mu - 1}$ (twice the equiconvex value).`, R`In a liquid the focal length increases. If $\mu_{liquid} > \mu_{lens}$, a convex lens becomes <b>diverging</b>. If they are equal, the lens disappears (f → ∞).`, R`Cutting a lens <b>along the axis</b> into two halves leaves f the same for each. Cutting <b>across</b> (perpendicular to the axis) into two plano-convex halves doubles f.`, R`Displacement method: $f = \frac{D^2 - d^2}{4D}$, needs $D\ge4f$.`]),
  J(R`Lens in another medium, power equality of lenses, lens maker for given curvatures: the most asked ray-optics group.`, "2025 · 7 Apr · Morning; 2026 · 28 Jan · Morning; 2026 · 4 Apr · Evening")
]],
["18.15 – 18.16 Lens Combinations; Silvered Lens", [
  P(R`Thin lenses in contact: powers add. Separated by d:`, [R`\frac1F = \frac1{f_1} + \frac1{f_2},\qquad P = P_1 + P_2`, R`\frac1F = \frac1{f_1} + \frac1{f_2} - \frac{d}{f_1f_2}`]),
  S(s.lens(95,70,50) + s.lens(117,70,50,true) + s.line(10,70,210,70,'class="thin"') + s.txt(60,140,"P = P₁ + P₂") + s.line(30,40,95,40,'class="red"') + s.line(95,40,190,70,'class="red"'), 215, 148, "Powers add: 1/F = 1/f₁ + 1/f₂"),
  P(R`Convex + concave in contact: the combination is converging if $|f_{convex}| < |f_{concave}|$.`),
  P(R`<b>Silvered lens</b> behaves as a mirror. Light passes through the lens twice and reflects once:`, R`P_{eq} = 2P_{lens} + P_{mirror},\qquad f_{eq} = -\frac1{P_{eq}}`),
  S(s.lens(110,75,55) + s.path("M110 20 Q126 75 110 130",'style="stroke-width:4"') + s.line(10,75,200,75,'class="thin"') + s.arr(30,50,104,50,'class="red"') + s.arr(108,56,30,96,'class="red"') + s.txt(126,30,"silvered"), 210, 140, "Acts as a mirror: P = 2P_lens + P_mirror"),
  P(R`Coaxial lens + mirror systems: image formed by the first element is the object for the next (successive imaging).`),
  J(R`Silvered-lens questions are repeated (object and image coincide when the object is at the centre of curvature of the equivalent mirror, $u = 2f_{eq}$).`, "2026 · 8 Apr · Evening; 2025 · 22 Jan · Morning")
]],
["18.17 Defects of Images", [
  P(R`<b>Spherical aberration</b>: marginal rays focus closer than paraxial rays. Reduce it with stops, plano-convex lenses (curved side facing the incident parallel beam) or parabolic mirrors. <b>Chromatic aberration</b>: f differs for different colours (see dispersion). Removed by an achromatic doublet: $\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0$. Others: coma, astigmatism, distortion. Mirrors have no chromatic aberration.`),
  S(s.lens(60,75,55) + [[25,200],[40,185],[55,170]].map(([d,f]) => s.line(10,75-d,60,75-d,'class="red"') + s.line(60,75-d,f,75,'class="red"')).join("") + s.line(10,75,215,75,'class="thin"') + s.txt(140,100,"marginal") + s.txt(190,100,"paraxial"), 220, 115, "Marginal rays focus nearer the lens")
]]
],
pyq: {
  pat: [[R`Lens power/focal length in another medium`, "2025 · 7 Apr · Morning; 2026 · 28 Jan · Morning"], [R`Silvered lens as a mirror`, "2026 · 8 Apr · Evening; 2025 · 22 Jan · Morning"], [R`Grazing emergence, δ_min conditions`, "2026 · 22 Jan · Morning; 2026 · 28 Jan · Evening"], [R`Mirror magnification with object–image separation`, "2025 · 28 Jan · Evening; 2025 · 7 Apr · Evening"], [R`Single spherical surface`, "2026 · 6 Apr · Morning; 2025 · 2 Apr · Morning"], [R`Apparent depth / lateral shift / critical angle`, "2023 · 13 Apr · Morning; 2026 · 23 Jan · Morning"], [R`Snell's law with direction vectors`, "2026 · 8 Apr · Evening"]],
  combo: [R`Prism + TIR at the exit face`, R`Lens + mirror (silvered lens)`, R`Lens + spherical refraction`, R`Snell's law + vector geometry`],
  trap: [R`Lens power changes sign when μ_lens < μ_medium.`, R`At δ_min the ray inside is parallel to the base.`, R`A thin prism's δ doesn't depend on i.`],
  mist: [R`Sign errors in R₂ for biconvex lenses (R₂ is negative).`, R`Using the thin-prism formula for a 60° prism.`]
}
});
})();
