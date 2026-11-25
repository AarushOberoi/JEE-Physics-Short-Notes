(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 42, short: "Photoelectric Effect & Matter Waves",
intro: R`Light behaves as particles (photons) when it interacts with matter, and particles show wave properties. Photoelectric effect and de Broglie wavelength are the most asked topics.`,
sec: [
["42.1 Photon Theory of Light", [
  P(R`Light consists of <b>photons</b>, each with energy and momentum:`, [R`E = h\nu = \frac{hc}{\lambda},\qquad p = \frac{h}{\lambda} = \frac Ec`, R`E(\text{eV}) = \frac{1240}{\lambda(\text{nm})},\quad h = 6.63\times10^{-34}\ \text{J s}`]),
  P(R`A beam of power P carries $n = \frac{P}{h\nu} = \frac{P\lambda}{hc}$ photons per second. The force on a perfectly absorbing surface is $P/c$, and on a reflecting surface $2P/c$.`),
  J(R`Photon count from power (and finding the spectral region from it) is a frequent numerical.`, "2026 · 28 Jan · Evening; 2026 · 8 Apr · Evening; 2024 · 1 Feb · Evening")
]],
["42.2 Photoelectric Effect", [
  P(R`Experimental facts: (1) no emission below the <b>threshold frequency</b> ν₀, whatever the intensity; (2) emission is <b>instantaneous</b>; (3) the maximum KE depends on ν, not on intensity; (4) the photocurrent (number of electrons) ∝ intensity. The wave theory can't explain these.`),
  S(s.ell(110,70,90,50,'class="thin"') + s.line(50,40,50,100,'style="stroke-width:5"') + s.line(170,40,170,100,'style="stroke-width:4"') + s.arr(8,8,44,46,'class="red"') + s.txt(4,34,"hν") + [55,70,85].map(y => s.arr(56,y,96,y,'class="blue"')).join("") + s.line(50,100,50,140) + s.line(50,140,96,140) + s.cell(100,140) + s.line(104,140,170,140) + s.line(170,140,170,100) + s.txt(32,60,"C") + s.txt(176,60,"A"), 220, 150, "Light ejects electrons from the cathode"),
  P(R`<b>Einstein's equation</b> (φ = work function):`, [R`K_{max} = h\nu - \phi = eV_0,\qquad \phi = h\nu_0 = \frac{hc}{\lambda_0}`]),
  S(s.rect(20,20,40,110,'style="fill:var(--b3)"') + s.txt(28,80,"hν") + s.rect(90,70,40,60,'class="fl2"') + s.txt(104,104,"φ") + s.rect(90,20,40,50,'style="fill:var(--b1)"') + s.txt(92,50,"K_max") + s.txt(140,50,"= eV₀") + s.txt(64,80,"="), 200, 140, "hν = φ + K_max"),
  P(R`<b>Stopping potential</b> V₀ vs ν: a straight line of slope h/e (the <b>same for every metal</b>), with intercept ν₀ on the ν-axis and −φ/e on the V-axis.`, R`V_0 = \frac he\nu - \frac\phi e`, G({ xl: "ν", yl: "V₀", xr: [0, 3], yr: [0, 2.5], fns: [x => Math.max(0, x - 0.5), x => Math.max(0, x - 1.0), x => Math.max(0, x - 1.5)], lab: ["metal 1 (lowest φ)", "metal 2", "metal 3"] })),
  P(R`<b>Photocurrent vs anode potential</b>: saturation current ∝ intensity. The stopping potential is the same for the same ν, whatever the intensity. A higher ν gives a larger stopping potential.`, null, G({ xl: "V", yl: "i", xr: [-2, 4], yr: [0, 1.1], fns: [x => (x < -1 ? 0 : 1 - Math.exp(-2 * (x + 1))), x => (x < -1 ? 0 : 0.6 * (1 - Math.exp(-2 * (x + 1))))], lab: ["high intensity", "low intensity"] })),
  J(R`Two stopping potentials at two wavelengths give the threshold (e.g. 3V₀ at λ and V₀ at 2λ ⇒ λ₀ = 4λ); work function from data; which metal emits; V₀–ν graph comparisons.`, "2026 · 2 Apr · Morning; 2024 · 31 Jan · Morning; 2021 · 25 Jul · Evening; 2025 · 22 Jan · Morning; 2026 · 4 Apr · Morning")
]],
["42.3 Matter Waves (de Broglie)", [
  P(R`Every moving particle has a wavelength:`, [R`\lambda = \frac hp = \frac{h}{mv} = \frac{h}{\sqrt{2mK}} = \frac{h}{\sqrt{2mqV}}`, R`\lambda_{electron} = \frac{1.227}{\sqrt V}\ \text{nm}`]),
  G({ xl: "accelerating V", yl: "λ", xr: [0.2, 4], yr: [0, 2.3], fns: [x => 1 / Math.sqrt(x)], lab: ["λ = 12.27/√V Å (electron)"] }),
  P(R`Thermal particles: $\lambda = \frac{h}{\sqrt{3mkT}}$. Confirmed by the <b>Davisson–Germer</b> experiment (electron diffraction from a nickel crystal, peak at 54 V and 50°).`),
  P(R`Ratios: through the same V, $\lambda\propto\frac{1}{\sqrt{mq}}$, so $\lambda_e/\lambda_p = \sqrt{m_p/m_e}$. Equal λ means equal momentum, so KE ∝ 1/m.`),
  J(R`de Broglie wavelength changing with time for an electron accelerated by a field: $\lambda(t) = \frac{h}{m(v_0 + eEt/m)}$. Also the % change in λ when V or v changes.`, "2026 · 5 Apr · Morning; 2025 · 24 Jan · Morning; 2026 · 6 Apr · Evening; 2026 · 4 Apr · Evening")
]]
],
pyq: {
  pat: [[R`Two stopping potentials → threshold`, "2024 · 31 Jan · Morning; 2023 · 11 Apr · Morning"], [R`Work function from photon energy & V₀`, "2025 · 23 Jan · Evening; 2026 · 21 Jan · Morning"], [R`λ comparison for p, α, e`, "2023 · 12 Apr · Morning; 2024 · 9 Apr · Morning"], [R`Same λ ⇒ same momentum`, "2024 · 8 Apr · Evening; 2021 · 31 Aug · Morning"], [R`λ(t) in an E-field`, "2026 · 5 Apr · Morning; 2025 · 24 Jan · Morning"], [R`V₀–ν slope is the same for all metals`, "2023 · 6 Apr · Evening"]],
  combo: [R`de Broglie + kinematics in a field`, R`Photon energy + EM spectrum`, R`Photoelectron in B: $r = \frac{\sqrt{2mK}}{eB}$`],
  trap: [R`Intensity changes the current, not V₀.`, R`A photon and an electron with the same λ have different energies.`]
}
});
})();
