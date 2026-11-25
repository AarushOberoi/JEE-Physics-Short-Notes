(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 20, short: "Dispersion and Spectra",
intro: R`The refractive index depends on wavelength, so white light splits into colours. In the JEE syllabus only prism dispersion and chromatic ideas are needed.`,
sec: [
["20.1 – 20.3 Dispersion & Dispersive Power", [
  P(R`μ decreases with λ (Cauchy: $\mu = A + B/\lambda^2$), so violet bends most and red least: $\mu_v > \mu_r$, $\delta_v > \delta_r$.`, null, S(s.path("M60 140 L110 30 L160 140 Z", s.fill) + s.line(10, 90, 85, 85) + s.line(85, 85, 210, 70, 'class="red"') + s.line(85, 85, 210, 115, 'class="blue"') + s.txt(190, 64, "red") + s.txt(180, 130, "violet"), 220, 150)),
  P(R`For a thin prism, angular dispersion and dispersive power:`, [R`\delta_v - \delta_r = (\mu_v - \mu_r)A`, R`\omega = \frac{\delta_v - \delta_r}{\delta} = \frac{\mu_v - \mu_r}{\mu - 1},\quad \mu = \frac{\mu_v+\mu_r}2`]),
  S(s.path("M110 15 L40 140 L180 140 Z",'class="fl2"') + s.line(5,100,74.7,78) + s.line(74.7,78,147,76,'class="red"') + s.line(74.7,78,150,84,'class="blue"') + s.line(147,76,218,92,'class="red"') + s.line(150,84,210,125,'class="blue"') + s.txt(206,86,"R") + s.txt(198,138,"V") + s.txt(10,92,"white"), 225, 150, "Violet deviates most: θ = (μ_v − μ_r)A"),
  P(R`<b>Dispersion without deviation</b> and <b>deviation without dispersion</b> (achromatic prism) use two prisms of different glass:`, [R`\text{no net deviation: } (\mu-1)A + (\mu'-1)A' = 0`, R`\text{no net dispersion: } (\mu_v-\mu_r)A + (\mu_v'-\mu_r')A' = 0`])
]],
["20.4 – 20.8 Spectra, Spectrometer & Rainbow", [
  P(R`Pure spectrum needs a narrow slit and a parallel beam. Kinds: continuous (hot solids), line (excited atoms), band (molecules). Absorption spectra: <b>Fraunhofer lines</b> in sunlight.`),
  P(R`Beyond visible: UV (detected by fluorescence and photographic plates) and IR (thermopile, bolometer). A spectrometer (collimator, prism table, telescope) measures A and δ_m, which gives μ.`),
  P(R`<b>Rainbow</b>: dispersion + total internal reflection in water drops. Primary bow (one internal reflection, ~42°, red outside). Secondary bow (two reflections, ~52°, colours reversed).`),
  S(s.circ(100,80,50,'class="fl2"') + s.line(5,55,56.7,55) + s.line(56.7,55,143.3,105,'class="red"') + s.line(143.3,105,70,120.6,'class="red"') + s.line(70,120.6,10,142,'class="red"') + s.txt(4,48,"sunlight") + s.txt(144,128,"reflection") + s.txt(4,128,"to observer"), 200, 150, "Primary bow: 2 refractions + 1 internal reflection"),
  J(R`Dispersion is rarely asked directly. Prism μ and δ_min are the tested parts. Achromatism and dispersive power appear occasionally in statement questions.`)
]]
],
pyq: {}
});
})();
