(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 46, short: "The Nucleus",
intro: R`Most asked: radioactive decay, binding energy and Q-value, radius and density.`,
sec: [
["46.1 Properties of a Nucleus", [
  P(R`Nucleus $^A_ZX$: Z protons, N = A − Z neutrons. Isotopes (same Z), isobars (same A), isotones (same N). Atomic mass unit 1 u = 1.66 × 10⁻²⁷ kg = 931.5 MeV/c².`),
  P(R`Size and density (the density ≈ 2.3 × 10¹⁷ kg/m³ is <b>independent of A</b>):`, R`R = R_0A^{1/3},\qquad R_0\approx1.1\text{–}1.2\ \text{fm}`),
  G({ xl: "A", yl: "R (fm)", xr: [0, 240], yr: [0, 7.5], fns: [x => 1.2 * Math.cbrt(x)], lab: ["R = R₀A^⅓"] })
]],
["46.2 – 46.3 Nuclear Forces & Binding Energy", [
  P(R`Nuclear forces are strong, short-range (~2 fm), charge-independent and saturating.`),
  G({ xl: "r (fm)", yl: "", xr: [0.05, 4], yr: [-1.5, 3], fns: [x => 8 * Math.exp(-5 * x) - 3 * Math.exp(-1.5 * x)], lab: ["attractive near 1 fm, repulsive core, ≈ 0 beyond 3 fm"] }),
  P(R`<b>Mass defect</b> and <b>binding energy</b>:`, [R`\Delta m = [Zm_p + (A - Z)m_n] - M_{nucleus}`, R`BE = \Delta m\,c^2 = \Delta m(\text{u})\times931.5\ \text{MeV}`]),
  P(R`<b>BE per nucleon</b> vs A: rises steeply for light nuclei, peaks around 8.8 MeV near A ≈ 56 (Fe), and slowly falls for heavy nuclei. Fusion of light nuclei and fission of heavy ones both release energy. The curve is nearly flat over A ≈ 30–170 because the nuclear force is short-range and saturates.`, null, G({ xl: "A", yl: "BE/A (MeV)", xr: [1, 240], yr: [0, 9.5], fns: [x => Math.max(0, 8.8 - 7.8 * Math.exp(-(x - 1) / 9) - 0.0062 * Math.max(0, x - 56))], lab: ["peak near Fe-56"] })),
  P(R`<b>Q-value</b> of a reaction:`, R`Q = (\textstyle\sum m_{initial} - \sum m_{final})c^2 = \sum BE_{products} - \sum BE_{reactants}`),
  J(R`Mass defect and BE per nucleon from given masses, Q from BE/A (multiply by A for each nucleus), fusion energy.`, "2026 · 5 Apr · Evening; 2024 · 8 Apr · Evening; 2026 · 2 Apr · Evening; 2026 · 4 Apr · Morning")
]],
["46.4 – 46.6 Radioactive Decay", [
  P(R`<b>α-decay</b>: A → A − 4, Z → Z − 2. The α particle takes most of the energy: $K_\alpha = Q\frac{A-4}{A}$. <b>β⁻</b>: n → p + e⁻ + ν̄ (continuous β spectrum, which is why the neutrino was proposed). <b>β⁺</b>: p → n + e⁺ + ν. <b>γ</b>: de-excitation, no change in A or Z.`),
  S(s.circ(40,60,24,'class="fl2"') + s.txt(26,64,"²³⁸U") + s.arr(70,60,92,60) + s.circ(130,60,22,'class="fl2"') + s.txt(115,64,"²³⁴Th") + s.arr(112,90,92,90,'class="blue"') + s.circ(190,60,8,'class="fl"') + s.txt(185,64,"α") + s.arr(200,60,232,60,'class="red"') + s.txt(40,116,"equal and opposite momenta: K ∝ 1/m"), 240, 124, "The α takes most of the energy"),
  P(R`<b>Decay law</b>:`, [R`N = N_0e^{-\lambda t},\qquad A = \lambda N = A_0e^{-\lambda t}`, R`T_{1/2} = \frac{\ln2}{\lambda} = 0.693\tau,\qquad \tau = \frac1\lambda`], G({ xl: "t (half-lives)", yl: "N/N₀", xr: [0, 5], yr: [0, 1.1], fns: [x => Math.pow(0.5, x)], lab: ["N₀/2ⁿ"] })),
  P(R`After n half-lives $N = N_0/2^n$. Activity unit: becquerel (1 decay/s), 1 Ci = 3.7 × 10¹⁰ Bq. Two decay modes in parallel: $\lambda = \lambda_1 + \lambda_2$, so $\frac1T = \frac1{T_1} + \frac1{T_2}$.`),
  J(R`Half-life fraction, effective half-life for two decay modes, and T½ vs mean life.`, "2023 · 15 Apr · Morning; 2022 · 26 Jun · Evening; 2021 · 1 Sep · Evening")
]],
["46.7 – 46.11 Fission, Reactor, Fusion", [
  P(R`<b>Fission</b>: $^{235}$U + n → fragments + 2–3 n + about 200 MeV. Chain reaction, critical mass. <b>Reactor</b>: moderator (heavy water or graphite slows neutrons), control rods (cadmium or boron absorb neutrons), coolant.`),
  S(s.circ(15,60,4,'class="fl"') + s.arr(20,60,46,60,'class="blue"') + s.circ(70,60,20,'class="fl2"') + s.txt(56,64,"²³⁵U") + s.arr(92,60,116,60) + s.circ(146,35,14,'class="fl2"') + s.circ(146,90,14,'class="fl2"') + [[200,20],[208,60],[200,100]].map(([x,y]) => s.circ(x,y,4,'class="fl"') + s.arr(164,62,x-6,y,'class="red"')).join("") + s.txt(90,132,"≈ 200 MeV + 2–3 neutrons"), 220, 138, "Released neutrons sustain a chain reaction"),
  P(R`<b>Fusion</b>: light nuclei combine (4 ¹H → ⁴He in the sun, about 26.7 MeV). It needs about 10⁷ K to overcome the Coulomb barrier. Energy per nucleon is larger than in fission.`),
  S(s.circ(30,40,9,'class="fl2"') + s.circ(30,90,9,'class="fl2"') + s.arr(40,46,82,60,'class="blue"') + s.arr(40,84,82,70,'class="blue"') + s.circ(105,65,14,'class="fl"') + s.txt(97,69,"He") + s.arr(122,65,170,65,'class="red"') + s.txt(128,56,"energy") + s.txt(4,128,"needs ~10⁷ K to beat Coulomb repulsion"), 230, 134, "Light nuclei fuse"),
  J(R`Energy from fission of a given mass of U-235 (number of nuclei × 200 MeV) and fusion/fission energy ratios.`, "2026 · 23 Jan · Evening; 2024 · 9 Apr · Evening")
]]
],
pyq: {
  pat: [[R`Half-life / fraction remaining`, "2023 · 15 Apr · Morning; 2023 · 8 Apr · Evening"], [R`Two decay modes, effective half-life`, "2021 · 18 Mar · Morning; 2022 · 26 Jun · Evening"], [R`BE, mass defect, Q-value`, "2026 · 5 Apr · Evening; 2024 · 8 Apr · Evening"], [R`α-decay KE sharing`, "2026 · 8 Apr · Evening; 2021 · 22 Jul · Evening"], [R`Fission/fusion energy`, "2026 · 23 Jan · Evening"]],
  trap: [R`Nuclear density doesn't depend on A.`, R`A free neutron decays because $m_n > m_p + m_e$.`, R`Check the sign of Q: negative means endothermic.`]
}
});
})();
