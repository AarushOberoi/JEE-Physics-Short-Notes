(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 4, short: "The Forces",
intro: R`A short theory chapter. All forces in nature come from four basic interactions. JEE asks only small theory points from it.`,
sec: [
["4.1 – 4.5 Fundamental Forces", [
  P(R`<b>Gravitational force</b> acts between any two masses. It is always attractive and the weakest of the four.`, R`F = \frac{Gm_1m_2}{r^2},\quad G = 6.67\times10^{-11}\ \text{N m}^2\text{kg}^{-2}`),
  S(s.circ(40,60,20,'class="fl"') + s.circ(170,60,14,'class="fl2"') + s.arr(60,60,100,60,'class="red"') + s.arr(156,60,116,60,'class="red"') + s.line(40,95,170,95,'class="thin"') + s.txt(100,110,"r") + s.txt(31,65,"m₁") + s.txt(161,65,"m₂") + s.txt(76,52,"F") + s.txt(128,52,"F"), 210, 118, "Equal and opposite, along the joining line"),
  P(R`<b>Electromagnetic force</b> acts between charges (Coulomb's law plus magnetic forces). Contact forces (normal force, friction, tension, spring force) are all electromagnetic in origin.`, R`F = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2},\quad \frac{1}{4\pi\varepsilon_0} = 9\times10^9\ \text{N m}^2\text{C}^{-2}`),
  P(R`<b>Nuclear (strong) force</b> holds protons and neutrons together. It is the strongest, very short-range (~fm), and charge-independent.`),
  P(R`<b>Weak force</b> acts in β-decay (n → p + e⁻ + ν̄). It is short-range.`),
  T(["Force", "Relative strength", "Range"], [["Strong (nuclear)", "1", "~10⁻¹⁵ m"], ["Electromagnetic", "~10⁻²", "infinite"], ["Weak", "~10⁻¹³", "< 10⁻¹⁷ m"], ["Gravitational", "~10⁻³⁸", "infinite"]]),
  P(R`<b>Contact forces</b>: the force between surfaces in contact. Its component perpendicular to the surface is the <b>normal force</b> $N$, and its component parallel to the surface is <b>friction</b> $f$. Tension in a string and spring force $F = -kx$ are electromagnetic too.`),
  S(s.ground(10,200,110) + s.block(70,60,70,50,"m") + s.arr(105,110,105,40,'class="blue"') + s.arr(105,110,62,110,'class="blue"') + s.arr(105,110,68,46,'class="red"') + s.arr(140,85,185,85) + s.txt(110,46,"N") + s.txt(54,126,"f") + s.txt(18,40,"contact F") + s.txt(156,78,"pull"), 210, 132, "Contact force = N (⊥) + f (∥)"),
  P(R`4.6 Classical (Newtonian) physics works for speeds ≪ c and sizes ≫ atomic. Otherwise relativity or quantum mechanics is needed.`),
  J(R`Assertion–reason questions on nuclear forces ("BE/A is constant over a range because nuclear forces are short-range and saturate") come from this chapter combined with Nuclei.`, "2025 · 23 Jan · Evening")
]]
],
pyq: {}
});
})();
