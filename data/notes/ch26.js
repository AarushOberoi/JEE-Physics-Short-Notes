(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 26, short: "Laws of Thermodynamics",
intro: R`The first law is energy conservation including heat. The second law sets the direction of natural processes and the limit on engine efficiency.`,
sec: [
["26.1 First Law of Thermodynamics", [
  P(R`Heat given to a system = increase in internal energy + work done <b>by</b> the system.`, R`\Delta Q = \Delta U + \Delta W`),
  S(s.path("M40 30 L40 130 L140 130 L140 30") + s.rect(41,70,98,59,'class="fl2"') + s.rect(41,60,98,10,'class="fl"') + s.line(90,60,90,20) + s.arr(155,64,155,22,'class="blue"') + s.txt(161,46,"W") + s.path("M70 152 Q80 142 70 134 M90 152 Q100 142 90 134 M110 152 Q120 142 110 134",'class="red"') + s.txt(126,152,"Q") + s.txt(76,104,"ΔU"), 190, 158, "Q = ΔU + W"),
  P(R`<b>Internal energy</b> U is a <b>state function</b> (depends only on the state). For an ideal gas it depends only on T: $\Delta U = nC_v\Delta T$ for <b>any</b> process. Q and W depend on the path.`),
  S(s.arr(20,140,200,140) + s.arr(20,140,20,10) + s.txt(190,156,"V") + s.txt(4,16,"p") + s.dot(50,40) + s.dot(170,110) + s.path("M50 40 L170 40 L170 110",'class="red"') + s.path("M50 40 L50 110 L170 110",'class="blue"') + s.path("M50 40 Q90 100 170 110",'class="thin"') + s.txt(36,34,"A") + s.txt(176,126,"B"), 210, 160, "ΔU same for every path; W and Q differ"),
  T(["Process", "Condition", "W", "ΔU", "Q"], [["Isochoric", "V const", "0", "$nC_v\\Delta T$", "$nC_v\\Delta T$"], ["Isobaric", "p const", "$p\\Delta V = nR\\Delta T$", "$nC_v\\Delta T$", "$nC_p\\Delta T$"], ["Isothermal", "T const", "$nRT\\ln\\frac{V_2}{V_1}$", "0", "= W"], ["Adiabatic", "Q = 0", "$\\frac{p_1V_1 - p_2V_2}{\\gamma-1}$", "= −W", "0"], ["Cyclic", "returns to start", "enclosed area", "0", "= W"], ["Free expansion", "into vacuum", "0", "0", "0"]]),
  J(R`Isobaric heating: ΔQ : ΔU : ΔW = $C_p : C_v : R$ = 7 : 5 : 2 for a diatomic gas (5 : 3 : 2 monatomic). Free expansion is adiabatic and irreversible, with ΔT = 0 for an ideal gas (assertion–reason).`, "2026 · 2 Apr · Morning; 2024 · 8 Apr · Evening; 2025 · 24 Jan · Evening")
]],
["26.2 Work Done by a Gas", [
  P(R`For a quasi-static process the work is the <b>area under the p–V curve</b>. It is positive for expansion. In a cycle the net work = enclosed area (clockwise on p–V means work done by the gas, as in an engine).`, R`W = \int_{V_1}^{V_2}p\,dV`, G({ xl: "V", yl: "p", xr: [0.5, 4], yr: [0, 2.2], fns: [x => 1 / x, x => Math.pow(x, -1.4)], lab: ["isothermal", "adiabatic (steeper)"] })),
  J(R`Net work or heat over a cycle drawn on p–V or V–T axes. Convert other graphs to p–V first.`, "2023 · 15 Apr · Morning; 2024 · 5 Apr · Morning")
]],
["26.3 – 26.5 Heat Engines, Second Law, Reversibility", [
  P(R`A <b>heat engine</b> takes $Q_1$ from the source, does work W, and rejects $Q_2$ to the sink:`, R`\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1}`),
  S(s.rect(60,10,100,26,'class="fl2"') + s.txt(70,28,"source T₁") + s.circ(110,80,22,'class="fl"') + s.txt(104,85,"E") + s.rect(60,124,100,26,'class="fl2"') + s.txt(70,142,"sink T₂") + s.arr(110,36,110,58,'class="red"') + s.arr(110,102,110,124,'class="blue"') + s.arr(132,80,190,80) + s.txt(116,50,"Q₁") + s.txt(116,116,"Q₂") + s.txt(172,72,"W"), 210, 155, "η = W/Q₁ = 1 − Q₂/Q₁"),
  P(R`<b>Second law</b>. Kelvin–Planck: no engine can convert heat completely into work in a cycle. Clausius: heat cannot flow from cold to hot by itself (without work). The two statements are equivalent.`),
  P(R`<b>Refrigerator</b> (heat pump): coefficient of performance $\beta = \frac{Q_2}{W} = \frac{Q_2}{Q_1 - Q_2}$.`),
  S(s.rect(60,10,100,26,'class="fl2"') + s.txt(70,28,"hot T₁") + s.circ(110,80,22,'class="fl"') + s.txt(104,85,"R") + s.rect(60,124,100,26,'class="fl2"') + s.txt(70,142,"cold T₂") + s.arr(110,58,110,36,'class="red"') + s.arr(110,124,110,102,'class="blue"') + s.arr(190,80,132,80) + s.txt(116,50,"Q₁") + s.txt(116,116,"Q₂") + s.txt(172,72,"W"), 210, 155, "β = Q₂/W"),
  P(R`<b>Reversible process</b>: quasi-static, no friction or dissipation. It can be retraced exactly. All real processes (heat flow across a finite ΔT, free expansion, friction) are <b>irreversible</b>.`)
]],
["26.6 – 26.7 Entropy & Carnot Engine", [
  P(R`<b>Entropy</b>: $dS = \frac{dQ_{rev}}{T}$. For an isolated system, S never decreases (it stays constant only for reversible processes).`),
  P(R`<b>Carnot cycle</b>: two isotherms + two adiabats between $T_1$ and $T_2$. It is the most efficient engine possible between those temperatures, and its efficiency is independent of the working substance (Carnot's theorem).`, [R`\eta_{Carnot} = 1 - \frac{T_2}{T_1},\qquad \frac{Q_2}{Q_1} = \frac{T_2}{T_1}`, R`\beta_{Carnot} = \frac{T_2}{T_1 - T_2}`], S(s.arr(20, 150, 210, 150) + s.arr(20, 150, 20, 10) + s.path("M50 30 Q 90 50 140 60", 'class="red"') + s.path("M140 60 Q 160 90 185 120") + s.path("M185 120 Q 130 112 90 100", 'class="blue"') + s.path("M90 100 Q 70 65 50 30") + s.txt(80, 35, "T₁") + s.txt(120, 125, "T₂") + s.txt(196, 166, "V") + s.txt(4, 20, "p"), 220, 170, "Carnot cycle")),
  J(R`Carnot questions: efficiency changes when one reservoir temperature is changed, and an irreversible engine is always less efficient than Carnot.`, "2022 · 28 Jul · Morning; 2021 · 25 Jul · Evening; 2023 · 12 Apr · Morning")
]]
],
pyq: {
  pat: [[R`Carnot efficiency change with reservoir temperature`, "2022 · 28 Jul · Morning; 2021 · 25 Jul · Evening"], [R`Net work/heat over a cycle`, "2023 · 15 Apr · Morning; 2024 · 5 Apr · Morning"], [R`Match-list: processes with signs of W, Q, ΔU`, "2025 · 7 Apr · Evening; 2023 · 25 Jan · Evening"], [R`Statements: zeroth/first law, intensive/extensive variables`, "2026 · 5 Apr · Morning"], [R`Isobaric heat split into ΔU and W`, "2024 · 8 Apr · Evening; 2026 · 8 Apr · Evening"]],
  trap: [R`Isothermal: ΔU = 0 but Q ≠ 0 (Q = W).`, R`(Extensive variable)/mass is intensive, e.g. specific heat.`, R`ΔU = nCvΔT holds for every process, not only isochoric.`],
  mist: [R`Sign of W (by the gas or on the gas).`, R`Using the net heat instead of the heat absorbed in η = W/Q_in.`]
},
aprFilter: "law|intensive|cycle"
});
})();
