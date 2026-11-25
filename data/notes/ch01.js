(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 1, short: "Units & Dimensions",
intro: R`Physics is the study of nature and its laws. Mathematics is its language. Measurement = <b>number × unit</b>.`,
sec: [
["1.1 – 1.3 Units, Fundamental & Derived Quantities", [
  P(R`Physical quantities are measured as a <b>numeric part × standard unit</b> (e.g. 2 hours). The units are decided internationally by <b>CGPM</b> (General Conference on Weights and Measures).`),
  P(R`<b>Fundamental (base) quantities</b> must be (a) independent of each other and (b) able to express every other quantity. Only <b>seven</b> are needed. All others are <b>derived</b> by multiplying and dividing them.`),
  T(["Base quantity", "SI unit", "Symbol"], [["Length", "metre", "m"], ["Mass", "kilogram", "kg"], ["Time", "second", "s"], ["Electric current", "ampere", "A"], ["Thermodynamic temperature", "kelvin", "K"], ["Amount of substance", "mole", "mol"], ["Luminous intensity", "candela", "cd"]]),
  P(R`Supplementary units: <b>plane angle → radian (rad)</b>, <b>solid angle → steradian (sr)</b>. Both are dimensionless.`, R`\theta = \frac{\text{arc}}{\text{radius}}\ (\text{rad}),\qquad \Omega = \frac{\text{area}}{r^2}\ (\text{sr}),\quad \Omega_{\text{full sphere}} = 4\pi`),
  S(s.arcm(50,90,60,0,50,'class="blue"') + s.line(50,90,112,90) + s.line(50,90,88.6,44) + s.arcm(50,90,18,0,50) + s.txt(72,84,"θ") + s.txt(78,106,"r") + s.txt(112,62,"s") + s.txt(10,135,"θ = s / r  (rad)") + s.path("M150 90 L230 52 M150 90 L230 128", 'class="thin"') + s.ell(230,90,10,38,'class="blue"') + s.dot(150,90) + s.txt(160,135,"Ω = A / r²  (sr)") + s.txt(244,94,"A"), 260, 145, "Plane angle and solid angle"),
  P(R`The choice of base quantities is not unique. One could take <i>speed and time</i> as fundamental; then length becomes derived. The SI system was adopted in 1971.`),
  J(R`"New system of units" questions use exactly this idea: choose $c$, $h$, $G$ (or $c$, $G$, $e$…) as base quantities and express length, mass and time through them. In 2026 this appeared as a match-the-list question (Planck length $\sqrt{hG/c^3}$, Planck time $\sqrt{hG/c^5}$, Planck mass $\sqrt{hc/G}$).`, "2026 · 5 Apr · Evening; 2023 · 1 Feb · Evening; 2021 · 31 Aug · Evening")
]],
["1.4 Definitions of Base Units (SI 2019)", [
  P(R`A standard unit must have <b>invariability</b> and <b>availability</b>. Since 20 May 2019, every SI base unit is defined by giving a <b>fixed numerical value to a universal constant</b>:`),
  T(["Unit", "Fixed constant"], [["second", "Cs-133 hyperfine frequency $\\Delta\\nu_{Cs} = 9192631770$ Hz"], ["metre", "speed of light $c = 299792458$ m s⁻¹"], ["kilogram", "Planck constant $h = 6.62607015\\times10^{-34}$ J s"], ["ampere", "elementary charge $e = 1.602176634\\times10^{-19}$ C"], ["kelvin", "Boltzmann constant $k = 1.380649\\times10^{-23}$ J K⁻¹"], ["mole", "Avogadro $N_A = 6.02214076\\times10^{23}$ mol⁻¹"], ["candela", "luminous efficacy $K_{cd} = 683$ lm W⁻¹ at 540 THz"]]),
  P(R`SI prefixes: pico $10^{-12}$, nano $10^{-9}$, micro $10^{-6}$, milli $10^{-3}$, centi $10^{-2}$, kilo $10^{3}$, mega $10^{6}$, giga $10^{9}$, tera $10^{12}$.`),
  J(R`Questions such as "a new unit of length equals the distance light travels in 1 s" come straight from this definition. The answer is just distance = $c \times$ time.`, "2026 · 8 Apr · Evening (uploaded paper)")
]],
["1.5 Dimension & Dimensional Formula", [
  P(R`The <b>dimension</b> of a quantity in a base is the <b>exponent</b> of that base quantity in its expression. Written in square brackets.`, R`[\text{force}] = [\text{mass}\times\text{length}\times\text{time}^{-2}] = MLT^{-2}`),
  P(R`Only the <b>type</b> of quantity matters, not magnitude. Change in velocity, average velocity and final velocity all have dimension $LT^{-1}$. Pure numbers (½, 2π) are dimensionless.`, R`[E] = [\tfrac12 mv^2] = ML^2T^{-2}`),
  T(["Quantity", "Formula", "Dimensions"], [
    ["Velocity, acceleration", "$x/t,\\ v/t$", "$LT^{-1},\\ LT^{-2}$"], ["Force, impulse/momentum", "$ma,\\ mv$", "$MLT^{-2},\\ MLT^{-1}$"], ["Work, energy, torque", "$Fs,\\ rF$", "$ML^2T^{-2}$"], ["Power", "$W/t$", "$ML^2T^{-3}$"],
    ["Pressure, stress, Y, B, η(rigidity), energy density", "$F/A$", "$ML^{-1}T^{-2}$"], ["Surface tension, spring constant", "$F/l$", "$MT^{-2}$"], ["Coefficient of viscosity", "$F/(A\\,dv/dx)$", "$ML^{-1}T^{-1}$"],
    ["Gravitational constant G", "$Fr^2/m^2$", "$M^{-1}L^3T^{-2}$"], ["Planck's constant h, angular momentum", "$E/\\nu$", "$ML^2T^{-1}$"], ["Moment of inertia", "$mr^2$", "$ML^2$"],
    ["Boltzmann k, entropy, heat capacity", "$E/T$", "$ML^2T^{-2}K^{-1}$"], ["Gas constant R", "$PV/nT$", "$ML^2T^{-2}K^{-1}mol^{-1}$"], ["Stefan's σ", "$P/(AT^4)$", "$MT^{-3}K^{-4}$"],
    ["Charge", "$It$", "$AT$ (written IT)"], ["Potential, emf", "$W/q$", "$ML^2T^{-3}A^{-1}$"], ["Resistance", "$V/I$", "$ML^2T^{-3}A^{-2}$"], ["Capacitance", "$q/V$", "$M^{-1}L^{-2}T^4A^2$"], ["Inductance", "$\\varepsilon/(dI/dt)$", "$ML^2T^{-2}A^{-2}$"],
    ["Magnetic field B", "$F/(qv)$", "$MT^{-2}A^{-1}$"], ["Magnetic flux", "$BA$", "$ML^2T^{-2}A^{-1}$"], ["Magnetic intensity H, magnetisation", "$B/\\mu_0$", "$L^{-1}A$"],
    ["Permittivity ε₀", "$q^2/(4\\pi Fr^2)$", "$M^{-1}L^{-3}T^4A^2$"], ["Permeability μ₀", "$B\\cdot2\\pi r/I$", "$MLT^{-2}A^{-2}$"]]),
  P(R`Useful <b>dimension shortcuts</b> (no need to expand):`, [R`[RC] = \left[\tfrac{L}{R}\right] = [\sqrt{LC}] = T,\qquad \left[\tfrac{1}{\sqrt{\mu_0\varepsilon_0}}\right] = \left[\tfrac EB\right] = LT^{-1}`, R`[\tfrac12\varepsilon_0E^2] = \left[\tfrac{B^2}{2\mu_0}\right] = \text{energy density} = ML^{-1}T^{-2}`]),
  J(R`Dimension questions with $\varepsilon_0$, $\mu_0$, $E$, $B$ (e.g. "dimension of $\frac12\varepsilon_0E^2$", "$B^2/\mu_0$", "$H = \varepsilon^pE^qx^rt^s$") are the most common single type in this chapter. Replace each group with a known physical quantity instead of expanding powers.`, "2026 · 2 Apr · Morning; 2022 · 28 Jul · Morning; 2026 · 8 Apr · Evening")
]],
["1.6 Uses of Dimension", [
  P(R`<b>A. Principle of homogeneity:</b> every term separated by $=,+,-$ must have identical dimensions. So a velocity can never be added to a force. A dimensionally <i>wrong</i> equation is surely wrong. A dimensionally <i>correct</i> one may still be wrong, e.g. $x = ut + at^2$ passes the check.`, R`x = ut + \tfrac12 at^2:\quad [x] = [ut] = [at^2] = L`),
  P(R`<b>B. Conversion of units:</b> since $n_1u_1 = n_2u_2$, a derived unit converts through the conversion factors of the base units.`, R`n_2 = n_1\left[\frac{M_1}{M_2}\right]^a\left[\frac{L_1}{L_2}\right]^b\left[\frac{T_1}{T_2}\right]^c`, S(s.txt(10, 30, "1 Pa = (1 kg)(1 m)⁻¹(1 s)⁻²") + s.txt(10, 60, "= (10³ g)(10² cm)⁻¹(1 s)⁻²") + s.txt(10, 90, "= 10 CGS units of pressure") + s.rect(4, 70, 200, 30, 'class="red"'), 210, 110, "Example: 1 pascal = 10 dyne cm⁻²")),
  P(R`<b>C. Deducing relations</b> (when the dependence is of product type). Simple pendulum: assume $t = k\,l^a m^b g^c$.`, R`T = L^{a+c}M^{b}T^{-2c}\ \Rightarrow\ a = \tfrac12,\ b = 0,\ c = -\tfrac12\ \Rightarrow\ t = k\sqrt{l/g}`),
  S(s.ceil(40,140,15) + s.line(90,15,130,105) + s.line(90,15,90,112, s.dash) + s.arcm(90,15,30,-90,-66) + s.circ(134,114,11,'class="fl"') + s.txt(94,62,"θ") + s.txt(118,58,"l") + s.txt(129,118,"m") + s.arr(134,126,134,160,'class="red"') + s.txt(140,156,"g"), 180, 168, "T = k lᵃ mᵇ gᶜ ⇒ T ∝ √(l/g)"),
  P(R`<b>Limitations</b> of the dimensional method:`),
  L([R`You must know beforehand which quantities it depends on, and the dependence must be a <b>product of powers</b>. It fails for sums like $ut + \frac12at^2$.`,
     R`Dimensionless constants ($k = 2\pi$ above) cannot be found.`,
     R`In mechanics there are only 3 equations (M, L, T), so at most 3 unknown exponents can be found.`,
     R`It cannot handle trigonometric, exponential or log functions. Their <b>arguments must be dimensionless</b>.`]),
  J(R`"Find $a$, $b$, $c$" type: write the dimension of every base in the given formula and solve the simultaneous equations. In $y = A\sin(\omega t - kx)$ or $P = P_0e^{-\alpha t^2}$, first make the argument dimensionless. That gives one unknown immediately.`, "2024 · 30 Jan · Evening; 2024 · 31 Jan · Morning")
]],
["1.7 – 1.8 Order of Magnitude & Structure of the World", [
  P(R`Write a number as $a \times 10^b$ with $1 \le a < 10$. The <b>order of magnitude</b> is $b$ if $a \le \sqrt{10} \approx 3.16$, otherwise $b + 1$.`, R`\text{diameter of sun} = 1.39\times10^{9}\ \text{m}\ \Rightarrow\ \text{order } 10^{9}`),
  P(R`Basic forces (detail in Physical World): gravitational, electromagnetic, nuclear (strong), weak. Matter: molecules → atoms → electrons and nucleus (protons, neutrons) → quarks.`)
]]
],
pyq: {
  pat: [
    [R`Dimension of a combination of constants ($\varepsilon_0E^2$, $B^2/\mu_0$, $hc/G$, $RC$, $L/R$)`, "2026 · 2 Apr · Morning; 2022 · 28 Jul · Morning"],
    [R`Match List-I (constants $h$, $G$, $k_B$, $\sigma$, stopping potential…) with List-II (dimensions)`, "2023 · 25 Jan · Morning; 2025 · 7 Apr · Evening; 2026 · 6 Apr · Evening"],
    [R`Find exponents $p,q,r,s$ using homogeneity`, "2024 · 30 Jan · Evening; 2026 · 8 Apr · Evening"],
    [R`Express a quantity in a new base set ($c$, $h$, $G$ or $F$, $v$, $T$)`, "2023 · 1 Feb · Evening; 2021 · 31 Aug · Evening"]
  ],
  trap: [R`Torque and energy have the same dimensions $ML^2T^{-2}$ but are different quantities. Also: impulse & momentum; stress & pressure & energy density; angular impulse & angular momentum.`, R`Surface tension = surface energy per area ($MT^{-2}$), the same as a spring constant.`, R`Dimensionally correct ≠ physically correct.`],
  mist: [R`Mixing up $B$ ($MT^{-2}A^{-1}$) and $H$ ($L^{-1}A$).`, R`Treating radian/strain/refractive index as having dimensions.`]
}
});
})();
