(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 43, short: "Bohr's Model & the Atom",
intro: R`From Thomson's plum pudding to Rutherford's nucleus to Bohr's quantised orbits.`,
sec: [
["43.1 – 43.3 Early Models & Rutherford Scattering", [
  P(R`<b>Thomson</b>: positive sphere with embedded electrons. <b>Rutherford's α-scattering</b>: most α particles pass straight through, a few deflect by large angles, and about 1 in 8000 bounce back. So the atom is mostly empty, with a tiny, massive, positive <b>nucleus</b> (~10⁻¹⁵ m).`),
  S(s.circ(140,80,6,'class="redf"') + s.path("M10 30 L230 30",'class="blue"') + s.path("M10 55 Q140 55 230 38",'class="blue"') + s.path("M10 70 Q130 70 200 14",'class="blue"') + s.path("M10 80 L122 80",'class="blue"') + s.arr(122,84,40,100,'class="blue"') + s.path("M10 105 Q140 105 230 122",'class="blue"') + s.path("M10 130 L230 130",'class="blue"') + s.txt(150,92,"nucleus"), 240, 140, "Most α pass straight; a few bounce back"),
  P(R`Distance of closest approach (head-on, impact parameter b = 0) and the scattering relations:`, [R`r_0 = \frac{2kZe^2}{K_\alpha}`, R`b = \frac{kZe^2}{K}\cot\frac\theta2,\qquad N(\theta)\propto\frac{1}{\sin^4(\theta/2)}`]),
  S(s.circ(170,60,8,'class="redf"') + s.txt(160,40,"+Ze") + s.circ(40,60,5,'class="fl2"') + s.arr(48,60,90,60,'class="blue"') + s.line(120,48,120,72,'class="red" style="stroke-dasharray:3 3"') + s.line(120,85,170,85,'class="thin"') + s.txt(136,100,"r₀") + s.txt(20,48,"α, K"), 210, 108, "K = k(2e)(Ze)/r₀"),
  P(R`Difficulty: an accelerating orbiting electron should radiate and spiral in (unstable atom, continuous spectrum), but atoms are stable with line spectra.`),
  J(R`Statement question: "only a few α particles rebound because the nucleus is tiny, only a few hit nearly head-on (small impact parameter)". It is <b>not</b> because the charges are equal.`, "2026 · 4 Apr · Evening")
]],
["43.2 Hydrogen Spectra", [
  P(R`Rydberg formula (R = 1.097 × 10⁷ m⁻¹):`, R`\frac1\lambda = RZ^2\left(\frac1{n_f^2} - \frac1{n_i^2}\right)`),
  S([[1,140],[2,70],[3,45],[4,32],[5,25]].map(([n,y]) => s.line(30,y,210,y,n === 1 ? 'style="stroke-width:3"' : '') + s.txt(2,y+4,"n=" + n)).join("") + s.txt(214,144,"−13.6") + s.txt(214,74,"−3.4") + s.txt(214,49,"−1.51") + [70,45,32,25].map((y,i) => s.arr(46+i*12,y,46+i*12,138,'class="blue"')).join("") + [45,32,25].map((y,i) => s.arr(130+i*12,y,130+i*12,68,'class="red"')).join("") + s.line(30,14,210,14,s.dash) + s.txt(6,18,"∞") + s.txt(46,160,"Lyman (UV)") + s.txt(124,96,"Balmer (visible)"), 255, 166, "1/λ = RZ²(1/n₁² − 1/n₂²); energies in eV"),
  T(["Series", "n_f", "Region"], [["Lyman", "1", "ultraviolet"], ["Balmer", "2", "visible (Hα 656 nm, Hβ 486 nm)"], ["Paschen", "3", "infrared"], ["Brackett", "4", "infrared"], ["Pfund", "5", "far infrared"]]),
  P(R`Number of spectral lines from level n down to ground: $\frac{n(n-1)}{2}$. Series limit: $n_i\to\infty$.`)
]],
["43.4 Bohr's Model", [
  P(R`Postulates: (1) electrons move in certain stationary orbits without radiating; (2) angular momentum is quantised; (3) radiation is emitted or absorbed in jumps:`, [R`mvr = \frac{nh}{2\pi},\qquad h\nu = E_i - E_f`]),
  S([25,50,80].map(r => s.circ(90,85,r,'class="thin"')).join("") + s.circ(90,85,5,'class="redf"') + s.circ(170,85,5,'class="fl2"') + s.arr(166,85,144,85,'class="blue"') + s.wave(150,40,210,5,3,'class="red"') + s.txt(184,30,"hν") + s.txt(98,70,"n=1") + s.txt(120,44,"n=2") + s.txt(150,14,"n=3"), 215, 170, "mvr = nh/2π; hν = E₃ − E₂"),
  P(R`Results for hydrogen-like atoms (Z):`, [R`r_n = 0.529\frac{n^2}{Z}\ \text{Å},\qquad v_n = 2.18\times10^6\frac Zn\ \text{m/s} = \frac{c}{137}\frac Zn`, R`E_n = -13.6\frac{Z^2}{n^2}\ \text{eV},\qquad KE = -E,\ PE = 2E`], S(s.circ(100, 80, 6, s.fill) + [25, 45, 70].map(r => s.circ(100, 80, r)).join("") + s.circ(170, 80, 4, 'class="dot"') + s.path("M168 72 Q 150 60 140 78", 'class="red"') + s.txt(126, 54, "hν") + s.txt(92, 100, "+Ze"), 200, 160)),
  P(R`Ionisation energy of H = 13.6 eV, first excitation energy = 10.2 eV. The orbit acts as a current loop: $i\propto Z^2/n^3$, the field at the nucleus $B\propto Z^3/n^5$, and the magnetic moment $= \frac{neh}{4\pi m}$.`),
  P(R`Recoil of the atom on emission: $p = h/\lambda$. Reduced-mass correction for finite nuclear mass.`),
  J(R`Bohr scaling (r, v, E, L for n and Z, He⁺ vs H), the number of lines, the series-limit ratio, and KE/PE relations: the core of atomic questions.`, "2023 · 31 Jan · Evening; 2022 · 25 Jun · Morning; 2025 · 29 Jan · Evening; 2024 · 30 Jan · Morning; 2026 · 2 Apr · Morning")
]],
["43.5 – 43.9 Limitations, Wave Function, Quantum Numbers, Laser", [
  P(R`Bohr's model fails for many-electron atoms, can't explain line intensities or fine structure, and mixes classical and quantum ideas. de Broglie's view: an allowed orbit holds a whole number of wavelengths, $2\pi r = n\lambda$.`),
  P(R`Quantum mechanics: the wave function ψ, with $|\psi|^2$ the probability density. Quantum numbers n, l, m_l, m_s. Pauli exclusion principle. Nomenclature (K, L, M shells; s, p, d subshells).`),
  P(R`<b>Laser</b>: stimulated emission + population inversion (metastable state) gives coherent, monochromatic, directional, intense light.`),
  S(s.line(20,140,200,140,'style="stroke-width:3"') + s.line(20,30,200,30) + s.line(20,70,200,70,'class="blue" style="stroke-width:3"') + s.arr(40,138,40,34,'class="red"') + s.txt(46,100,"pump") + s.arr(80,32,80,68,'class="thin"') + s.arr(140,72,140,136,'class="red"') + s.txt(146,110,"stimulated emission") + s.txt(146,64,"metastable") + s.txt(146,156,"ground"), 240, 160, "Population inversion → coherent light")
]]
],
pyq: {
  pat: [[R`Bohr r, v, E vs n, Z`, "2023 · 31 Jan · Evening; 2023 · 30 Jan · Morning"], [R`Spectral line count & series limits`, "2025 · 29 Jan · Evening; 2021 · 27 Aug · Evening"], [R`KE/PE/total energy relations`, "2024 · 30 Jan · Morning; 2024 · 5 Apr · Morning"], [R`Transition from an r ratio → λ`, "2026 · 5 Apr · Morning"], [R`B at the nucleus ∝ n⁻⁵`, "2026 · 2 Apr · Evening"]],
  combo: [R`Bohr orbit + Biot–Savart`, R`Emitted photon + photoelectric effect`, R`Recoil + momentum conservation`],
  trap: [R`To emit a Balmer line from the ground state, at least 12.09 eV is needed (excite to n = 3).`]
}
});
})();
