(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 17, short: "Light Waves (Wave Optics)",
intro: R`Interference, diffraction and polarisation show that light is a transverse electromagnetic wave. Wave optics is asked in almost every shift.`,
sec: [
["17.1 – 17.3 Nature of Light & Huygens' Principle", [
  P(R`Newton's corpuscular theory couldn't explain interference. Huygens/Young/Fresnel's wave theory could, and Maxwell showed light is an EM wave with $c = 1/\sqrt{\mu_0\varepsilon_0}$.`),
  P(R`In a medium of refractive index μ, the speed and wavelength are reduced and the frequency is unchanged:`, R`v = \frac c\mu,\qquad \lambda_{medium} = \frac{\lambda}{\mu}`),
  P(R`<b>Huygens' principle</b>: every point on a wavefront acts as a source of secondary wavelets. The new wavefront is their forward envelope. It gives the laws of reflection and refraction ($\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \mu$).`, null, S(s.line(30, 20, 30, 140) + [40, 80, 120].map(y => s.path(`M30 ${y - 20} A 25 25 0 0 1 30 ${y + 20}`, 'class="blue"')).join("") + s.line(55, 20, 55, 140, 'class="red"') + s.txt(60, 80, "new wavefront"), 160, 150))
]],
["17.4 – 17.6 Young's Double Slit Experiment & Optical Path", [
  P(R`Two coherent slits a distance $d$ apart, screen at distance $D$. Path difference at height $y$:`, [R`\Delta x = d\sin\theta\approx\frac{yd}{D}`, R`\text{bright: } y_n = \frac{n\lambda D}{d},\qquad \text{dark: } y = \left(n+\tfrac12\right)\frac{\lambda D}{d}`], S(s.line(30, 20, 30, 60) + s.line(30, 70, 30, 90) + s.line(30, 100, 30, 140) + s.line(30, 65, 190, 40, 'class="blue"') + s.line(30, 95, 190, 40, 'class="blue"') + s.line(190, 10, 190, 150) + s.line(30, 80, 190, 80, s.dash) + s.txt(8, 85, "d") + s.txt(100, 150, "D") + s.txt(194, 40, "y"), 220, 160)),
  P(R`<b>Fringe width</b> (equal, bright and dark):`, R`\beta = \frac{\lambda D}{d},\qquad \text{angular width} = \frac\lambda d`),
  G({ xl: "y", yl: "I", xr: [-9.5, 9.5], yr: [0, 4.4], fns: [x => 4 * Math.cos(x / 2) ** 2], lab: ["equally spaced fringes, I_max = 4I₀"] }),
  P(R`<b>Intensity</b>. With equal slits, $I_{max} = 4I_0$:`, [R`I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\delta,\qquad \delta = \frac{2\pi}{\lambda}\Delta x`, R`I = 4I_0\cos^2\frac\delta2,\qquad \frac{I_{max}}{I_{min}} = \left(\frac{\sqrt{I_1}+\sqrt{I_2}}{\sqrt{I_1}-\sqrt{I_2}}\right)^2`], G({ xl: "δ", yl: "I", xr: [-12.6, 12.6], yr: [0, 1.1], fns: [x => Math.cos(x / 2) ** 2], lab: ["cos²(δ/2)"] })),
  P(R`<b>Optical path</b> = μ × geometric path. A thin film (thickness t, index μ) over one slit shifts the whole pattern <b>towards that slit</b> by:`, R`\Delta y = \frac{(\mu - 1)tD}{d}\quad[\text{= } n\beta \text{ if } (\mu-1)t = n\lambda]`),
  S(s.line(30,10,30,52) + s.line(30,62,30,98) + s.line(30,108,30,150) + s.rect(33,48,6,18,'class="fl2"') + s.line(190,10,190,150) + s.line(39,57,190,55,'class="red"') + s.line(30,103,190,55,'class="red"') + s.line(30,80,190,80,s.dash) + s.dot(190,80) + s.dot(190,55) + s.txt(194,84,"O") + s.txt(194,58,"O′") + s.txt(40,40,"film t, μ") + s.txt(40,140,"shift = (μ−1)tD/d"), 215, 152, "Fringes shift towards the covered slit"),
  P(R`Whole apparatus immersed in a liquid of index μ: $\beta' = \beta/\mu$. White light gives a white central fringe with coloured fringes on both sides. Intensity is ∝ amplitude² and the amplitude ∝ √(slit width).`),
  J(R`YDSE is the most asked wave-optics topic: intensity ↔ path difference ($I = I_0$ ⇒ $\Delta x = \lambda/3$), thin-sheet shift, fringe width in a medium, coincidence of two wavelengths ($n_1\lambda_1 = n_2\lambda_2$), $I_{max}/I_{min}$ from slit widths.`, "2026 · 21 Jan · Morning; 2026 · 28 Jan · Evening; 2026 · 5 Apr · Morning; 2025 · 23 Jan · Evening; 2026 · 6 Apr · Evening")
]],
["17.7 – 17.9 Thin Films, Biprism, Coherence", [
  P(R`<b>Thin film</b> (thickness d, index μ) in reflected light. Reflection from the denser surface adds a phase of π.`, R`\text{bright (reflected): } 2\mu d = \left(n+\tfrac12\right)\lambda;\qquad \text{dark: } 2\mu d = n\lambda`),
  S(s.rect(10,60,200,40,'class="fl2"') + s.line(40,10,80,60,'class="blue"') + s.line(80,60,120,10,'class="red"') + s.line(80,60,100,100,'class="blue"') + s.line(100,100,120,60,'class="blue"') + s.line(120,60,160,10,'class="red"') + s.txt(176,86,"d, μ") + s.txt(110,26,"1") + s.txt(160,26,"2"), 220, 108, "Two reflected rays interfere (colours of soap films)"),
  P(R`<b>Fresnel biprism</b>: creates two virtual coherent sources from one slit. Then $\beta = \lambda D/d$ as in YDSE.`),
  P(R`<b>Coherent sources</b> have a constant phase difference. Two independent bulbs are incoherent (their phase changes randomly in ~10⁻⁸ s), so their intensities simply add: $I = I_1 + I_2$.`)
]],
["17.10 – 17.13 Diffraction", [
  P(R`<b>Fraunhofer single slit</b> (width b): minima where`, [R`b\sin\theta = n\lambda\quad(n = \pm1, \pm2\ldots)`, R`\text{central max width} = \frac{2\lambda D}{b},\qquad \text{angular width} = \frac{2\lambda}{b}`], G({ xl: "β", yl: "I", xr: [-10, 10], yr: [0, 1.1], fns: [x => (Math.abs(x) < 1e-6 ? 1 : (Math.sin(x) / x) ** 2)], lab: ["(sin β/β)²"] })),
  P(R`The central maximum is twice as wide as the others. Secondary maxima ≈ midway between minima, with rapidly falling intensity. Distance between the 1st and 3rd minima $= 2\lambda D/b$.`),
  G({ xl: "sin θ", yl: "I", xr: [-10, 10], yr: [0, 1.1], fns: [x => Math.abs(x) < 1e-6 ? 1 : (Math.sin(x) / x) ** 2], lab: ["single slit: central max is twice as wide"] }),
  P(R`<b>Circular aperture</b>: the first dark ring is at $\sin\theta = 1.22\lambda/b$. <b>Fresnel</b> diffraction: source or screen at a finite distance.`),
  J(R`Single slit: angular width in degrees, distance between minima, and "the central max of the single slit contains n YDSE fringes" (= 2d/b).`, "2026 · 2 Apr · Morning; 2026 · 4 Apr · Morning; 2024 · 29 Jan · Evening; 2025 · 2 Apr · Morning")
]],
["17.14 – 17.15 Limit of Resolution & Scattering", [
  P(R`<b>Rayleigh criterion</b>: two point images are just resolved when the central max of one falls on the first minimum of the other. For a telescope with objective diameter b:`, R`\Delta\theta = \frac{1.22\lambda}{b}`),
  G({ xl: "θ", yl: "I", xr: [-8, 8], yr: [0, 1.15], fns: [x => { const y = x + 1.57; return Math.abs(y) < 1e-6 ? 1 : (Math.sin(y) / y) ** 2; }, x => { const y = x - 1.57; return Math.abs(y) < 1e-6 ? 1 : (Math.sin(y) / y) ** 2; }], lab: ["image 1", "image 2: max on the first min of 1"] }),
  P(R`A larger aperture and a shorter wavelength give better resolution. The resolving power of a microscope is (in Ray Optics and Optical Instruments).`),
  P(R`<b>Scattering</b> by small particles is ∝ $1/\lambda^4$ (Rayleigh): the sky is blue and the sunset is red.`),
  J(R`Telescope resolution $1.22\lambda/D$ appeared in two of the April-2026 shifts you uploaded.`, "2026 · 8 Apr · Evening; 2026 · 4 Apr · Morning")
]],
["17.16 Polarisation of Light", [
  P(R`Light is transverse. A <b>polaroid</b> passes only the E-component along its axis. Unpolarised light → $I_0/2$ after the first polaroid. Then <b>Malus' law</b>:`, R`I = I_0\cos^2\theta`),
  S([0,45,90,135].map(a => { const c = Math.cos(a * Math.PI / 180) * 10, d = Math.sin(a * Math.PI / 180) * 10; return s.line(25 - c,80 - d,25 + c,80 + d,'class="thin"'); }).join("") + s.ell(70,80,10,36,'class="fl2"') + s.line(70,52,70,108) + s.line(100,68,100,92,'class="blue"') + s.ell(140,80,10,36,'class="fl2"') + s.line(128,58,152,102) + s.line(182,70,190,90,'class="red"') + s.line(10,80,215,80,'class="thin" style="stroke-dasharray:3 4"') + s.txt(14,40,"I₀") + s.txt(88,40,"I₀/2") + s.txt(156,40,"(I₀/2) cos²θ") + s.txt(46,136,"polariser") + s.txt(118,136,"analyser"), 230, 145, "Malus: I = I₀ cos²θ"),
  P(R`<b>Brewster's law</b>: at the polarising angle the reflected light is completely polarised (⊥ to the plane of incidence), and the reflected and refracted rays are at 90°.`, R`\tan\theta_B = \mu,\qquad \theta_B + r = 90^\circ`, S(s.line(20, 80, 200, 80) + s.arr(40, 20, 110, 80) + s.arr(110, 80, 180, 20, 'class="red"') + s.arr(110, 80, 140, 150, 'class="blue"') + s.line(110, 10, 110, 150, s.dash) + s.txt(84, 40, "θB") + s.txt(150, 40, "polarised") + s.txt(124, 130, "90°"), 220, 160)),
  J(R`Malus chains (3 polaroids, crossed polaroids with a third one in between) and Brewster angle from μ or from dielectric constants: asked regularly.`, "2023 · 10 Apr · Morning; 2024 · 27 Jan · Evening; 2026 · 23 Jan · Evening; 2026 · 4 Apr · Evening")
]]
],
pyq: {
  pat: [[R`Thin sheet → fringe shift`, "2026 · 21 Jan · Morning; 2024 · 9 Apr · Evening"], [R`Coincidence of fringes of two wavelengths`, "2026 · 28 Jan · Evening; 2023 · 31 Jan · Evening"], [R`$I_{max}/I_{min}$ from slit widths`, "2025 · 23 Jan · Evening; 2024 · 4 Apr · Evening"], [R`Malus law chains`, "2023 · 10 Apr · Morning; 2026 · 4 Apr · Evening"], [R`Brewster angle`, "2026 · 23 Jan · Evening; 2023 · 29 Jan · Evening"], [R`Single-slit minima / angular width`, "2024 · 29 Jan · Evening; 2025 · 2 Apr · Morning"]],
  trap: [R`$I_{max} = 4I_0$ (not $2I_0$) for equal slits.`, R`Unpolarised light is halved by the first polaroid, whatever its orientation.`, R`Angular fringe width λ/d also reduces by μ in a medium.`],
  mist: [R`Using the YDSE formula (d) for single-slit minima (b), or the other way round.`]
}
});
})();
