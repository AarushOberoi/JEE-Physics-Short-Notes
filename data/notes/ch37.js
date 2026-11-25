(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 37, short: "Magnetic Properties of Matter",
intro: R`Materials respond to a field by magnetising. Questions here are mostly theory (statements, match-the-list), so learn the properties table well.`,
sec: [
["37.1 – 37.5 Magnetisation, H, Susceptibility, Permeability", [
  P(R`<b>Magnetisation</b> I (or M) = magnetic moment per unit volume (A/m). <b>Magnetic intensity</b> H (A/m) is set by the free currents (in a solenoid H = ni).`, [R`\vec B = \mu_0(\vec H + \vec I)`, R`I = \chi H,\qquad \mu = \mu_0(1 + \chi) = \mu_0\mu_r,\qquad B = \mu H`]),
  P(R`Filling a solenoid with a material changes B by the fraction χ: $\frac{\Delta B}{B} = \chi$.`),
  J(R`Questions such as $H = B/\mu_0\mu_r$, $\mu = \mu_0(1+\chi)$, and the field change in a core-filled solenoid or toroid.`, "2026 · 4 Apr · Evening; 2022 · 28 Jun · Evening; 2023 · 11 Apr · Morning; 2022 · 27 Jun · Morning")
]],
["37.6 – 37.7 Curie's Law & Dia/Para/Ferro", [
  T(["Property", "Diamagnetic", "Paramagnetic", "Ferromagnetic"], [["χ", "small, negative", "small, positive", "very large, positive"], ["μᵣ", "< 1", "slightly > 1", "≫ 1"], ["In a non-uniform field", "moves to weaker field (repelled)", "moves to stronger field", "strongly attracted"], ["Temperature effect", "independent of T", "χ ∝ 1/T (Curie law)", "χ = C/(T − T_c) above T_c; becomes paramagnetic"], ["Origin", "induced moments oppose B", "permanent atomic moments align", "domains"], ["Examples", "Bi, Cu, Ag, water, N₂, superconductors (χ = −1)", "Al, Na, O₂, Pt", "Fe, Co, Ni, alloys"]]),
  P(R`<b>Curie's law</b> (paramagnets): $\chi = \frac{C}{T}$. <b>Curie temperature</b> $T_c$: above it a ferromagnet becomes paramagnetic (Fe 1043 K).`),
  G({ xl: "T", yl: "χ", xr: [0.2, 4], yr: [0, 5], fns: [x => 1 / x], lab: ["paramagnet: χ = C/T"] }),
  P(R`A superconductor expels the field completely (<b>Meissner effect</b>), so it is a perfect diamagnet with B = 0 inside.`),
  S(s.circ(60,75,24,'class="fl2"') + [35,55,95,115].map(y => s.path("M5 " + y + " Q60 " + (y < 75 ? y - 30 : y + 30) + " 115 " + y,'class="red"')).join("") + s.txt(20,142,"diamagnetic") + s.circ(180,75,24,'class="fl2"') + [45,65,85,105].map(y => s.path("M125 " + y + " Q180 " + (75 + (y - 75) * 0.2) + " 235 " + y,'class="red"')).join("") + s.txt(140,142,"para / ferro"), 240, 150, "Dia pushes field lines out; para/ferro pull them in"),
  J(R`Statement and match questions on dia/para/ferro, the temperature dependence of χ, and "χ = −1 ⇒ B = 0 inside" appear almost every year.`, "2022 · 25 Jun · Evening; 2023 · 10 Apr · Evening; 2025 · 29 Jan · Evening; 2024 · 6 Apr · Evening")
]],
["37.8 – 37.9 Hysteresis; Soft Iron & Steel", [
  P(R`For ferromagnets, B lags behind H. The B–H loop gives the <b>retentivity</b> (B at H = 0) and the <b>coercivity</b> (reverse H needed to make B = 0). The loop area = energy lost per cycle per unit volume.`, null, G({ xl: "H", yl: "B", xr: [-3, 3], yr: [-1.2, 1.2], fns: [x => Math.tanh(1.5 * (x + 0.8)), x => Math.tanh(1.5 * (x - 0.8))], lab: ["descending", "ascending"] })),
  T(["Use", "Need", "Material"], [["Permanent magnet", "high retentivity and high coercivity", "steel, alnico"], ["Electromagnet, transformer core", "high permeability, low coercivity, thin loop (low hysteresis loss)", "soft iron"]]),
  J(R`Assertion–reason: "soft iron is used for electromagnets because of its low coercivity and high permeability".`, "2023 · 8 Apr · Evening; 2022 · 24 Jun · Evening; 2026 · 23 Jan · Morning")
]]
],
pyq: {
  pat: [[R`ΔB/B = χ for a core-filled solenoid`, "2022 · 28 Jun · Evening; 2023 · 11 Apr · Morning"], [R`μ = μ₀(1 + χ)`, "2022 · 27 Jun · Morning; 2021 · 20 Jul · Evening"], [R`Dia/para/ferro statements and match-lists`, "2022 · 25 Jun · Evening; 2025 · 29 Jan · Evening"], [R`Soft iron vs steel assertion–reason`, "2023 · 8 Apr · Evening"]],
  trap: [R`Diamagnetic χ doesn't depend on T. Paramagnetic χ rises as T falls.`]
},
aprFilter: "μ|permeab|H ="
});
})();
