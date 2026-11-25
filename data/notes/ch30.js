(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 30, short: "Gauss's Law",
intro: R`Gauss's law turns symmetric field problems into one line. Flux depends only on the charge enclosed.`,
sec: [
["30.1 – 30.2 Flux & Solid Angle", [
  P(R`<b>Electric flux</b> through a surface:`, R`\Phi = \int\vec E\cdot d\vec S = ES\cos\theta\ (\text{uniform E, flat S})`),
  S([30,60,90,120].map(y => s.arr(10,y,200,y,'class="thin"')).join("") + s.path("M90 30 L120 50 L120 130 L90 110 Z",'class="fl2"') + s.arr(105,80,152,50,'class="red"') + s.txt(152,44,"dS") + s.arcm(105,80,22,0,32) + s.txt(130,78,"θ") + s.txt(196,24,"E"), 215, 145, "Φ = E·S = ES cos θ"),
  P(R`<b>Solid angle</b> $d\Omega = \frac{dS\cos\theta}{r^2}$ (steradian). A full sphere subtends 4π. A cone of half-angle α subtends $2\pi(1 - \cos\alpha)$.`)
]],
["30.3 Gauss's Law", [
  P(R`The total flux through any <b>closed</b> surface = (charge enclosed)/ε₀. Charges outside contribute zero net flux, although they do change $\vec E$ at points of the surface.`, R`\oint\vec E\cdot d\vec S = \frac{q_{enc}}{\varepsilon_0}`, S(s.circ(100, 80, 60, 'class="blue"') + s.circ(90, 80, 5, s.fill) + s.txt(84, 100, "+q") + s.circ(190, 40, 5) + s.txt(180, 30, "q′ (outside)") + s.txt(30, 150, "Φ = q/ε₀ only"), 220, 160)),
  P(R`Charge q at the centre of a cube: $q/6\varepsilon_0$ through each face. At a corner: $q/8\varepsilon_0$ through the cube ($q/24\varepsilon_0$ through each of the 3 far faces). At the centre of a face: $q/2\varepsilon_0$ through the cube.`),
  S(s.rect(20,50,70,70,'class="thin"') + s.rect(40,30,70,70,'class="thin"') + s.path("M20 50 L40 30 M90 50 L110 30 M20 120 L40 100 M90 120 L110 100",'class="thin"') + s.circ(65,75,4,'class="redf"') + s.txt(18,145,"centre: q/6ε₀ per face") + s.rect(140,50,70,70,'class="thin"') + s.rect(160,30,70,70,'class="thin"') + s.path("M140 50 L160 30 M210 50 L230 30 M140 120 L160 100 M210 120 L230 100",'class="thin"') + s.circ(140,120,4,'class="redf"') + s.txt(140,145,"corner: q/8ε₀ total"), 240, 152, "Use symmetry: imagine the charge inside a bigger cube"),
  J(R`Flux through spheres containing different charges, or through a cube or hemisphere, appears every year.`, "2026 · 2 Apr · Evening; 2026 · 23 Jan · Morning; 2026 · 2 Apr · Evening")
]],
["30.4 – 30.5 Applications: Line, Plane, Spherical Distributions", [
  P(R`Method: pick a <b>Gaussian surface</b> that follows the symmetry, so E is constant on it and either ⊥ or ∥ to it. Then $E\times(\text{area}) = q_{enc}/\varepsilon_0$.`),
  P(R`<b>Infinite line charge</b> (λ): Gaussian cylinder of radius r, length l. Flux passes only through the curved side: $E(2\pi rl) = \lambda l/\varepsilon_0$.`, R`E = \frac{\lambda}{2\pi\varepsilon_0 r}\quad(\propto 1/r)`, S(
    s.line(70,8,70,152,'style="stroke-width:3"') + [25,50,75,100,125,145].map(y => s.txt(74,y,"+")).join("") + s.ell(70,40,30,7,'class="blue" style="stroke-dasharray:4 3"') + s.ell(70,120,30,7,'class="blue" style="stroke-dasharray:4 3"') + s.line(40,40,40,120,'class="blue" style="stroke-dasharray:4 3"') + s.line(100,40,100,120,'class="blue" style="stroke-dasharray:4 3"') +
    s.arr(100,60,150,60,'class="red"') + s.arr(100,100,150,100,'class="red"') + s.arr(40,80,6,80,'class="red"') + s.line(70,80,100,80,'class="thin"') + s.txt(80,94,"r") + s.txt(152,56,"E") + s.txt(106,124,"l") + s.txt(52,12,"λ"),
    170, 160, "E radial; no flux through the flat ends")),
  P(R`<b>Infinite plane sheet</b> (σ): Gaussian pillbox through the sheet. Flux leaves through both flat ends: $2EA = \sigma A/\varepsilon_0$. The field does <b>not</b> depend on distance.`, R`E = \frac{\sigma}{2\varepsilon_0}\quad(\text{uniform, both sides})`, S(
    s.path("M80 20 L130 40 L130 150 L80 130 Z",'class="fl2"') + [[92,60],[110,98],[94,122],[112,70]].map(([x,y]) => s.txt(x,y,"+")).join("") + s.ell(60,85,6,16,'class="blue" style="stroke-dasharray:4 3"') + s.ell(150,85,6,16,'class="blue" style="stroke-dasharray:4 3"') + s.line(60,69,150,69,'class="blue" style="stroke-dasharray:4 3"') + s.line(60,101,150,101,'class="blue" style="stroke-dasharray:4 3"') +
    s.arr(156,85,204,85,'class="red"') + s.arr(54,85,8,85,'class="red"') + s.txt(178,78,"E") + s.txt(22,78,"E") + s.txt(98,14,"σ"),
    210, 160, "Pillbox: flux through both ends = 2EA")),
  P(R`<b>Two oppositely charged sheets</b> (±σ): each gives σ/2ε₀. Between them the fields add; outside they cancel. This is the field of a parallel-plate capacitor.`, R`E_{between} = \frac{\sigma}{\varepsilon_0},\qquad E_{outside} = 0`, S(
    s.line(60,15,60,145,'style="stroke-width:4"') + s.line(140,15,140,145,'style="stroke-width:4"') + [30,60,90,120].map(y => s.txt(46,y+4,"+") + s.txt(147,y+4,"−")).join("") + [40,80,120].map(y => s.arr(64,y,136,y,'class="red"')).join("") +
    s.txt(4,84,"E = 0") + s.txt(160,84,"E = 0") + s.txt(76,158,"E = σ/ε₀"),
    210, 165, "Fields add between, cancel outside")),
  P(R`<b>Just outside a charged conductor</b>: E = 0 inside the metal, so a pillbox gets flux only through its outer face: $EA = \sigma A/\varepsilon_0$. E is ⊥ to the surface. (Twice the value for an isolated sheet.)`, R`E = \frac{\sigma}{\varepsilon_0}`, S(
    s.rect(10,80,200,70,'class="fl2"') + [20,40,60,80,140,160,180,200].map(x => s.txt(x-4,94,"+")).join("") + s.rect(92,58,36,44,'class="blue" style="stroke-dasharray:4 3"') + s.arr(110,58,110,12,'class="red"') + s.txt(116,26,"E = σ/ε₀") + s.txt(40,134,"conductor: E = 0 inside") + s.txt(96,94,"+"),
    220, 156, "Pillbox half inside the metal")),
  P(R`<b>Spherical shell</b> (Q, radius R). Gaussian sphere inside (r < R) encloses no charge, so E = 0. Outside, the shell acts like a point charge at its centre.`, [R`E_{in} = 0,\qquad E_{out} = \frac{kQ}{r^2}`, R`V_{in} = \frac{kQ}{R}\ (\text{constant}),\qquad V_{out} = \frac{kQ}{r}`], S(
    s.circ(90,85,45,'style="stroke-width:3"') + [0,45,90,135,180,225,270,315].map(a => { const c = Math.cos(a * Math.PI / 180), d = Math.sin(a * Math.PI / 180); return s.txt(90 + 45 * c - 4,85 - 45 * d + 4,"+"); }).join("") + s.circ(90,85,22,'class="blue" style="stroke-dasharray:4 3"') + s.circ(90,85,66,'class="blue" style="stroke-dasharray:4 3"') + s.txt(72,89,"E = 0") +
    [20,160,-60,-120].map(a => { const c = Math.cos(a * Math.PI / 180), d = Math.sin(a * Math.PI / 180); return s.arr(90 + 66 * c,85 - 66 * d,90 + 84 * c,85 - 84 * d,'class="red"'); }).join("") + s.txt(140,30,"r > R") + s.txt(4,24,"Q on the surface"),
    190, 172, "Inside: q_enc = 0 ⇒ E = 0")),
  P(R`<b>Uniformly charged solid sphere</b> (Q, radius R, density ρ). A Gaussian sphere of radius r < R encloses $Q\frac{r^3}{R^3}$, so E grows linearly inside and is maximum at the surface.`, [R`E_{in} = \frac{kQr}{R^3} = \frac{\rho r}{3\varepsilon_0},\qquad E_{out} = \frac{kQ}{r^2}`, R`V_{in} = \frac{kQ(3R^2 - r^2)}{2R^3}\ \ (V_{centre} = 1.5\,V_{surface})`], S(
    s.circ(90,85,45,'class="fl2"') + [[70,60],[105,55],[80,100],[115,95],[95,75],[62,88],[110,115],[75,120]].map(([x,y]) => s.circ(x,y,2.5,'class="redf"')).join("") + s.circ(90,85,24,'class="blue" style="stroke-dasharray:4 3"') + s.circ(90,85,66,'class="blue" style="stroke-dasharray:4 3"') + s.line(90,85,114,85,'class="thin"') + s.txt(98,80,"r") + s.line(90,85,90,40,'class="thin"') + s.txt(94,52,"R") +
    [20,160,-60,-120].map(a => { const c = Math.cos(a * Math.PI / 180), d = Math.sin(a * Math.PI / 180); return s.arr(90 + 66 * c,85 - 66 * d,90 + 84 * c,85 - 84 * d,'class="red"'); }).join(""),
    190, 172, "Inside: q_enc = Q r³/R³ ⇒ E ∝ r")),
  P(R`<b>Long charged cylinder</b> (solid, radius R, uniform ρ). Coaxial Gaussian cylinder of radius r, length l: inside it encloses $\rho\pi r^2l$, outside $\rho\pi R^2l$ (same as a line charge with $\lambda = \rho\pi R^2$).`, R`E_{in} = \frac{\rho r}{2\varepsilon_0},\qquad E_{out} = \frac{\rho R^2}{2\varepsilon_0 r} = \frac{\lambda}{2\pi\varepsilon_0 r}`, S(
    s.ell(80,30,40,9,'class="fl2"') + s.line(40,30,40,130) + s.line(120,30,120,130) + s.path("M40 130 A40 9 0 0 0 120 130") + s.ell(80,60,20,5,'class="blue" style="stroke-dasharray:4 3"') + s.ell(80,110,20,5,'class="blue" style="stroke-dasharray:4 3"') + s.line(60,60,60,110,'class="blue" style="stroke-dasharray:4 3"') + s.line(100,60,100,110,'class="blue" style="stroke-dasharray:4 3"') +
    s.line(80,85,100,85,'class="thin"') + s.txt(84,80,"r") + s.arr(100,85,118,85,'class="red"') + s.arr(120,85,170,85,'class="red"') + s.txt(160,78,"E") + s.line(80,30,120,30,'class="thin"') + s.txt(96,24,"R") + s.txt(4,150,"uniform ρ"),
    185, 158, "E ∝ r inside, ∝ 1/r outside")),
  G({ xl: "r / R", yl: "E", xr: [0, 4], yr: [0, 1.1], fns: [x => (x < 1 ? x : 1 / x)], lab: ["long solid cylinder: peak at the surface"] }),
  T(["Quick summary", "Field"], [["Infinite line, λ", "$\\frac{\\lambda}{2\\pi\\varepsilon_0r}$"], ["Infinite plane sheet, σ", "$\\frac{\\sigma}{2\\varepsilon_0}$ (uniform)"], ["Two oppositely charged sheets", "$\\sigma/\\varepsilon_0$ between, 0 outside"], ["Near a conductor surface", "$\\sigma/\\varepsilon_0$"], ["Spherical shell, Q", "0 inside; $kQ/r^2$ outside"], ["Uniform solid sphere, Q", "$\\frac{kQr}{R^3}$ inside; $kQ/r^2$ outside"], ["Long charged cylinder (solid)", "$\\frac{\\rho r}{2\\varepsilon_0}$ inside"]]),
  G({ xl: "r/R", yl: "E", xr: [0, 4], yr: [0, 1.1], fns: [x => (x < 1 ? 0 : 1 / (x * x)), x => (x < 1 ? x : 1 / (x * x))], lab: ["shell / conductor", "uniform solid sphere"] }),
  P(R`Potentials: shell $V_{in} = kQ/R$ (constant). Solid sphere $V_{in} = \frac{kQ(3R^2 - r^2)}{2R^3}$ (centre: $1.5kQ/R$).`),
  G({ xl: "r / R", yl: "V", xr: [0, 4], yr: [0, 1.7], fns: [x => x < 1 ? 1 : 1 / x, x => x < 1 ? (3 - x * x) / 2 : 1 / x], lab: ["shell: constant inside", "solid sphere: 1.5 V_surface at centre"] })
]],
["30.6 Earthing a Conductor", [
  P(R`Earthing makes the conductor's potential zero. Charge flows to or from the earth until V = 0. For an earthed inner sphere inside a charged shell, the induced charge is $q' = -\frac{r_{in}}{r_{out}}Q$.`),
  J(R`Concentric spheres with one earthed: set its potential to zero and solve for the induced charge.`, "2026 · 24 Jan · Morning")
]]
],
pyq: { pat: [[R`Flux through spheres/cube for given charges`, "2026 · 2 Apr · Evening; 2026 · 23 Jan · Morning"], [R`Fields of sheets, shells, spheres`, "2021–25 (several)"]], trap: [R`Outside charges change E but not the net flux.`] },
aprFilter: "Gauss|flux"
});
})();
