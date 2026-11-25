(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 27, short: "Specific Heat Capacities of Gases",
intro: R`A gas has many specific heats (it depends on the process). Cp and Cv, and the adiabatic process, are the core of most thermodynamics numericals.`,
sec: [
["27.1 – 27.2 Cp, Cv & Mayer's Relation", [
  P(R`Molar heat capacity at constant volume $C_v = \frac{1}{n}\left(\frac{dQ}{dT}\right)_V$ and at constant pressure $C_p$. At constant p, extra heat goes into doing work, so $C_p > C_v$.`, [R`C_p - C_v = R`, R`\gamma = \frac{C_p}{C_v}`]),
  S(s.path("M20 30 L20 120 L90 120 L90 30") + s.line(20,30,90,30,'style="stroke-width:4"') + s.rect(21,31,68,88,'class="fl2"') + s.txt(18,142,"C_v: V fixed") + s.path("M120 30 L120 120 L190 120 L190 30") + s.rect(121,60,68,59,'class="fl2"') + s.rect(121,52,68,8,'class="fl"') + s.arr(155,52,155,20,'class="blue"') + s.txt(118,142,"C_p: piston free"), 210, 150, "C_p − C_v = R (the extra heat does work)"),
  D("Cp − Cv = R", [R`At constant p: $dQ = dU + p\,dV = nC_vdT + nR\,dT$.`, R`So $nC_pdT = nC_vdT + nRdT$ ⇒ $C_p = C_v + R$.`])
]],
["27.3 – 27.4 Determination of Cp, Cv", [
  P(R`Regnault's method (Cp: gas flowing through a heated coil into a calorimeter) and Joly's differential steam calorimeter (Cv). For reading only.`)
]],
["27.5 – 27.7 Isothermal & Adiabatic Processes", [
  P(R`<b>Isothermal</b>: $pV$ = const (slow, in a diathermic container). <b>Adiabatic</b>: Q = 0 (fast, or in an insulated container):`, [R`pV^\gamma = \text{const},\quad TV^{\gamma-1} = \text{const},\quad T^\gamma p^{1-\gamma} = \text{const}`]),
  P(R`The adiabatic curve is steeper than the isotherm through the same point:`, R`\left(\frac{dp}{dV}\right)_{adia} = \gamma\left(\frac{dp}{dV}\right)_{iso} = -\gamma\frac pV`),
  G({ xl: "V", yl: "p", xr: [0.4, 3], yr: [0, 3], fns: [x => 1 / x, x => Math.pow(x, -1.4)], lab: ["isothermal", "adiabatic (steeper, slope γ times)"] }),
  P(R`<b>Work in an adiabatic process</b> (depends only on γ and ΔT):`, R`W = \frac{p_1V_1 - p_2V_2}{\gamma - 1} = \frac{nR(T_1 - T_2)}{\gamma - 1}`),
  P(R`<b>Polytropic</b> $pV^x$ = const: $W = \frac{nR\Delta T}{1 - x}$, molar heat capacity $C = C_v + \frac{R}{1 - x}$.`),
  J(R`Adiabatic processes are the most asked thermodynamics topic: p–V–T ratios, finding γ from "$p\propto T^3$" ($\frac{\gamma}{\gamma-1} = 3$ ⇒ γ = 3/2), work when the volume doubles, ΔU in adiabatic expansion to 27V.`, "2025 · 8 Apr · Evening; 2024 · 5 Apr · Evening; 2024 · 4 Apr · Evening; 2026 · 8 Apr · Evening")
]],
["27.8 Equipartition of Energy", [
  P(R`Each quadratic degree of freedom gets $\frac12k_BT$. Therefore:`, [R`C_v = \frac f2R,\qquad C_p = \left(\frac f2 + 1\right)R,\qquad \gamma = 1 + \frac2f`]),
  T(["Gas", "f", "Cv", "Cp", "γ"], [["Monatomic (He, Ar)", "3", "3R/2", "5R/2", "5/3 ≈ 1.67"], ["Diatomic rigid (O₂, N₂)", "5", "5R/2", "7R/2", "7/5 = 1.4"], ["Diatomic with vibration", "7", "7R/2", "9R/2", "9/7"], ["Non-linear polyatomic", "6", "3R", "4R", "4/3"]]),
  P(R`Solids (Dulong–Petit): molar heat capacity ≈ 3R.`),
  J(R`"Diatomic gas with rotational modes only" means f = 5. An extra vibrational mode adds R to Cv. Insulated cylinder with a piston: the unheated side is compressed adiabatically.`, "2026 · 8 Apr · Evening; 2023 · 25 Jan · Evening; 2026 · 6 Apr · Evening")
]]
],
pyq: {
  pat: [[R`Adiabatic ratios / γ from a p–T relation`, "2024 · 5 Apr · Evening; 2024 · 27 Jan · Evening"], [R`Adiabatic work`, "2024 · 4 Apr · Evening; 2023 · 1 Feb · Morning; 2026 · 2 Apr · Morning"], [R`Isothermal vs adiabatic assertion–reason`, "2025 · 29 Jan · Evening; 2023 · 10 Apr · Morning"], [R`Cp − Cv = R, f and γ statements`, "2026 · 5 Apr · Morning"]],
  combo: [R`Adiabatic + first law + KTG`, R`Thermodynamics + mechanics (piston displacement, $W = p\,A\,x$)`],
  trap: [R`For expansion between the same volumes, isothermal work > adiabatic work.`, R`Adiabatic ≠ isothermal even though both can be "slow". Adiabatic just means Q = 0.`],
  mist: [R`Using γ = 1.4 for a monatomic gas.`]
},
aprFilter: "adiabatic|diatomic|γ|Cp|C_v|constant"
});
})();
