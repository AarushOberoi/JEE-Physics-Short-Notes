(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 23, short: "Heat and Temperature",
intro: R`Temperature is what two bodies have equal when they are in thermal equilibrium. This chapter covers how to measure it and how matter expands with it.`,
sec: [
["23.1 – 23.2 Hot & Cold Bodies; Zeroth Law", [
  P(R`Heat flows from the hotter to the colder body until <b>thermal equilibrium</b>. <b>Zeroth law</b>: if A and B are each in equilibrium with C, then A and B are in equilibrium with each other. This defines <b>temperature</b>.`),
  J(R`Statement questions: "the zeroth law gives the concept of temperature, the first law gives the concept of internal energy" (both true).`, "2026 · 5 Apr · Morning")
]],
["23.3 – 23.6 Temperature Scales & Thermometers", [
  P(R`A scale uses a thermometric property (length of a liquid column, resistance, gas pressure) that varies linearly with temperature between two fixed points.`, R`t = \frac{X_t - X_0}{X_{100} - X_0}\times100^\circ`),
  P(R`Conversions (for temperature <b>differences</b>: $\Delta F = \frac95\Delta C$, $\Delta K = \Delta C$):`, R`\frac{C}{100} = \frac{F - 32}{180} = \frac{K - 273.15}{100}`),
  S([["°C",0,100],["°F",32,212],["K",273,373]].map(([u,a,b],i) => { const x = 30 + i * 70; return s.rect(x,20,14,110,'class="fl2"') + s.line(x-6,30,x+20,30,'class="red"') + s.line(x-6,120,x+20,120,'class="blue"') + s.txt(x+22,34,""+b) + s.txt(x+22,124,""+a) + s.txt(x,148,u); }).join(""), 235, 155, "(C − 0)/100 = (F − 32)/180 = (K − 273)/100"),
  P(R`<b>Platinum resistance thermometer</b>: $R_t = R_0(1 + \alpha t)$, read with a Wheatstone bridge. <b>Constant-volume gas thermometer</b>: $T = 273.16\,\frac{p}{p_{tr}}$ K (triple point of water = 273.16 K). The <b>ideal-gas scale</b> takes the limit as the gas pressure → 0. It agrees with the absolute (Kelvin) scale.`),
  P(R`$-40^\circ$C $= -40^\circ$F. Callendar's compensated thermometer cancels the effect of the connecting wires.`),
  J(R`Scale-conversion questions: two arbitrary scales with different fixed points (use linear interpolation), and differences on °F vs °C.`, "2024 · 4 Apr · Morning; 2023 · 25 Jan · Evening")
]],
["23.7 Ideal Gas Equation", [
  P(R`Boyle's law ($pV$ = const at fixed T) and Charles' law ($V\propto T$ at fixed p) combine into:`, [R`pV = nRT = Nk_BT`, R`R = 8.314\ \text{J mol}^{-1}\text{K}^{-1},\quad k_B = \frac{R}{N_A} = 1.38\times10^{-23}\ \text{J K}^{-1}`]),
  G({ xl: "V", yl: "p", xr: [0.3, 4], yr: [0, 5], fns: [x => 1 / x, x => 2 / x], lab: ["T₁", "T₂ > T₁"] })
]],
["23.9 – 23.10 Adiabatic/Diathermic Walls & Thermal Expansion", [
  P(R`<b>Adiabatic</b> walls don't let heat through. <b>Diathermic</b> walls do.`),
  P(R`<b>Thermal expansion</b> (coefficients α, β, γ):`, [R`\Delta l = l\alpha\Delta T,\quad \Delta A = A\beta\Delta T,\quad \Delta V = V\gamma\Delta T`, R`\beta = 2\alpha,\qquad \gamma = 3\alpha`]),
  S(s.rect(10,30,80,14,'class="fl2"') + s.rect(10,30,94,14,'class="thin" style="stroke-dasharray:3 3"') + s.txt(10,66,"ΔL = LαΔT") + s.rect(130,22,50,40,'class="fl2"') + s.rect(130,18,58,48,'class="thin" style="stroke-dasharray:3 3"') + s.txt(124,86,"ΔA = Aβ ΔT, β = 2α") + s.txt(10,110,"ΔV = Vγ ΔT, γ = 3α"), 220, 120, "Length, area and volume expansion"),
  P(R`A <b>hole</b> in a plate or a cavity expands exactly as if it were filled with the same material.`),
  S(s.rect(20,20,120,90,'class="fl2"') + s.circ(80,65,22,'style="fill:var(--paper)"') + s.circ(80,65,27,'class="red" style="stroke-dasharray:4 3"') + s.rect(14,15,132,100,'class="thin" style="stroke-dasharray:4 3"') + s.txt(150,70,"heated") , 210, 122, "The hole grows like the material"),
  P(R`<b>Liquids</b>: real expansion = apparent expansion + expansion of the container: $\gamma_{real} = \gamma_{app} + \gamma_{vessel}$. Density falls with temperature: $\rho_T = \frac{\rho_0}{1 + \gamma\Delta T}$.`),
  P(R`<b>Anomalous expansion of water</b>: between 0 and 4 °C water contracts on heating. Its density is maximum at 4 °C, which is why lakes freeze from the top.`, null, G({ xl: "T (°C)", yl: "ρ", xr: [0, 10], yr: [0.9996, 1.0001], fns: [x => 1 - 0.000008 * (x - 4) ** 2], lab: ["max at 4 °C"] })),
  P(R`<b>Applications</b>: <b>bimetallic strip</b> (bends towards the metal with lower α when heated), <b>pendulum clock</b> (loses $\frac12\alpha\Delta T$ fraction of time when heated), measuring-scale errors, gaps in railway tracks. <b>Thermal stress</b> in a clamped rod: $Y\alpha\Delta T$.`),
  S(s.rect(8,30,12,34,'class="fl2"') + s.path("M20 40 Q110 32 200 72",'style="stroke-width:7;stroke:var(--red);fill:none"') + s.path("M20 50 Q110 43 198 81",'style="stroke-width:7;stroke:var(--accent);fill:none"') + s.txt(50,24,"brass (larger α)") + s.txt(40,84,"iron (smaller α)"), 215, 100, "Heated: bends towards the smaller-α metal"),
  P(R`<b>Gas</b> at constant pressure: $\gamma = 1/T$. For a process $PT^n$ = const, $V\propto T^{n+1}$, so $\gamma = (n+1)/T$.`),
  J(R`Expansion questions: linear expansion over two temperature intervals, a hole in a sheet, the volume-expansion coefficient of a gas in a given process (PT² = const ⇒ 3/T).`, "2026 · 4 Apr · Evening; 2026 · 5 Apr · Evening; 2022 · 29 Jun · Evening; 2023 · 24 Jan · Morning")
]]
],
pyq: {
  pat: [[R`Linear/areal expansion, hole expands`, "2022 · 29 Jun · Evening; 2023 · 24 Jan · Morning"], [R`Temperature scale conversion`, "2024 · 4 Apr · Morning; 2023 · 25 Jan · Evening"], [R`Expansion coefficient of a gas in a polytropic process`, "2026 · 5 Apr · Evening; 2021 · 27 Aug · Morning"]],
  combo: [R`Expansion + elasticity (thermal stress)`, R`Expansion + ideal gas law`],
  trap: [R`ΔF = 9/5 ΔC (no +32 for differences).`, R`A hole expands like the material, it doesn't shrink.`]
},
aprFilter: "expansion|PT"
});
})();
