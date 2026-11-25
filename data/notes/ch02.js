(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 2, short: "Physics & Mathematics",
intro: R`Vectors, calculus, significant digits and errors: the tools used in every later chapter.`,
sec: [
["2.1 – 2.5 Vectors & Scalars", [
  P(R`<b>Scalar</b>: magnitude only, added by ordinary algebra (mass, time, energy). <b>Vector</b>: magnitude + direction <i>and</i> obeys the triangle (parallelogram) law of addition (displacement, force, velocity).`),
  W(R`Current has magnitude and direction but is <b>not a vector</b>, because currents meeting at a junction don't add by the triangle rule. Finite rotations are not vectors either.`),
  P(R`<b>Equality</b>: two vectors are equal if both magnitude and direction are the same. A vector can be shifted parallel to itself.`),
  P(R`<b>Addition (triangle / parallelogram law)</b>. Magnitude and direction of the resultant for angle $\theta$ between $\vec a$ and $\vec b$:`, [R`|\vec a+\vec b| = \sqrt{a^2+b^2+2ab\cos\theta}`, R`\tan\alpha = \frac{b\sin\theta}{a + b\cos\theta}`], S(s.arr(20, 130, 150, 130) + s.arr(150, 130, 200, 50) + s.arr(20, 130, 200, 50, 'class="red"') + s.txt(80, 148, "a") + s.txt(185, 95, "b") + s.txt(90, 80, "a + b") + s.txt(40, 124, "α") + s.txt(158, 122, "θ"), 220, 160, "Triangle law")),
  P(R`Addition is <b>commutative</b> and <b>associative</b>. Subtraction: $\vec a - \vec b = \vec a + (-\vec b)$.`, R`|\vec a-\vec b| = \sqrt{a^2+b^2-2ab\cos\theta}`),
  S(s.arr(30,120,130,120) + s.arr(30,120,70,50) + s.arr(70,50,128,118,'class="red"') + s.txt(75,138,"a") + s.txt(34,82,"b") + s.txt(106,78,"a − b"), 170, 145, "a − b runs from the tip of b to the tip of a"),
  P(R`Special cases of the resultant: maximum $a+b$ at $\theta = 0$, minimum $|a-b|$ at $\theta = 180^\circ$, $\sqrt{a^2+b^2}$ at $90^\circ$. For two equal vectors: $R = 2a\cos(\theta/2)$ (so $R = a$ when $\theta = 120^\circ$).`),
  P(R`Multiplying a vector by a number $k$ multiplies its magnitude by $|k|$ and reverses the direction if $k < 0$.`),
  S(s.arr(20,30,70,30) + s.txt(40,22,"a") + s.arr(20,70,120,70,'class="blue"') + s.txt(60,62,"2a") + s.arr(70,110,20,110,'class="red"') + s.txt(36,102,"−a"), 140, 122)
]],
["2.6 Resolution of Vectors", [
  P(R`Any vector can be written along mutually perpendicular unit vectors $\hat i,\hat j,\hat k$. The component of $\vec a$ along a direction at angle $\theta$ is $a\cos\theta$.`, [R`\vec a = a_x\hat i + a_y\hat j + a_z\hat k,\qquad |\vec a| = \sqrt{a_x^2 + a_y^2 + a_z^2}`, R`a_x = a\cos\theta,\quad a_y = a\sin\theta`], S(s.arr(30, 140, 190, 140) + s.arr(30, 140, 30, 20) + s.arr(30, 140, 160, 50, 'class="red"') + s.line(160, 50, 160, 140, s.dash) + s.line(160, 50, 30, 50, s.dash) + s.txt(150, 158, "aₓ = a cosθ") + s.txt(-2, 54, "a_y") + s.txt(100, 80, "a") + s.txt(55, 133, "θ"), 210, 165)),
  P(R`<b>Unit vector</b> along $\vec a$: $\hat a = \vec a/|\vec a|$. Direction cosines: $\cos\alpha = a_x/a$, etc., with $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.`),
  S(s.arr(60,110,180,110) + s.arr(60,110,60,12) + s.arr(60,110,18,150) + s.txt(182,116,"y") + s.txt(48,14,"z") + s.txt(8,150,"x") + s.arr(60,110,140,40,'class="red"') + s.line(140,40,140,110,s.dash) + s.arcm(60,110,24,41,90) + s.txt(66,78,"γ") + s.txt(146,38,"a") + s.txt(70,150,"cos²α + cos²β + cos²γ = 1"), 215, 160, "Angles with the three axes")
]],
["2.7 – 2.8 Dot and Cross Products", [
  P(R`<b>Scalar (dot) product</b>: commutative and distributive. $\vec a\cdot\vec b = 0$ for perpendicular vectors. Work $W = \vec F\cdot\vec s$, power $P = \vec F\cdot\vec v$.`, [R`\vec a\cdot\vec b = ab\cos\theta = a_xb_x + a_yb_y + a_zb_z`, R`\cos\theta = \frac{\vec a\cdot\vec b}{ab},\qquad \text{projection of } \vec a \text{ on } \vec b = \vec a\cdot\hat b`]),
  S(s.arr(20,120,200,120) + s.arr(20,120,120,40,'class="blue"') + s.line(120,40,120,120,s.dash) + s.line(20,126,120,126,'class="red" style="stroke-width:3"') + s.arcm(20,120,26,0,38.7) + s.txt(50,113,"θ") + s.txt(190,138,"a") + s.txt(60,70,"b") + s.txt(46,143,"b cos θ"), 210, 150, "a·b = a × (projection of b on a)"),
  P(R`<b>Vector (cross) product</b>: magnitude $ab\sin\theta$, direction ⊥ to both by the right-hand screw rule. $\vec a\times\vec b = -\vec b\times\vec a$ (anticommutative). $\vec a\times\vec a = 0$. $|\vec a\times\vec b|$ = area of the parallelogram.`, R`\vec a\times\vec b = \begin{vmatrix}\hat i&\hat j&\hat k\\ a_x&a_y&a_z\\ b_x&b_y&b_z\end{vmatrix}`, S(s.arr(40, 120, 180, 120) + s.arr(40, 120, 100, 60) + s.arr(40, 120, 40, 15, 'class="red"') + s.txt(150, 138, "a") + s.txt(104, 58, "b") + s.txt(48, 22, "a × b") + s.path("M70 120 A 30 30 0 0 0 62 98"), 200, 150, "Right-hand screw rule")),
  P(R`Cyclic unit vectors: $\hat i\times\hat j = \hat k$, $\hat j\times\hat k = \hat i$, $\hat k\times\hat i = \hat j$ (reverse order gives a minus sign).`),
  J(R`Cross-product determinants are used in Lorentz force $q\vec v\times\vec B$, torque $\vec r\times\vec F$, angular momentum $\vec r\times\vec p$ and EM-wave direction $\vec E\times\vec B$. Practise these: many PYQs depend on them.`, "2026 · 2 Apr · Morning (uploaded paper); 2026 · 8 Apr · Evening")
]],
["2.9 – 2.11 Calculus", [
  P(R`<b>Differentiation</b> gives the rate of change, which is the slope of the $y$–$x$ graph: $\frac{dy}{dx} = \lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}$.`, R`\frac{d}{dx}x^n = nx^{n-1},\ \frac{d}{dx}\sin x = \cos x,\ \frac{d}{dx}\cos x = -\sin x,\ \frac{d}{dx}e^x = e^x,\ \frac{d}{dx}\ln x = \frac1x`),
  G({ xl: "x", yl: "y", xr: [0, 4], yr: [0, 4], fns: [x => 0.25 * x * x, x => x - 1], lab: ["y(x)", "tangent: slope = dy/dx"] }),
  P(R`Rules: product $(uv)' = u'v + uv'$, quotient $(u/v)' = \frac{u'v - uv'}{v^2}$, chain $\frac{dy}{dx} = \frac{dy}{dz}\frac{dz}{dx}$.`),
  P(R`<b>Maxima and minima</b>: at an extremum $\frac{dy}{dx} = 0$. Maximum if $\frac{d^2y}{dx^2} < 0$, minimum if $> 0$.`, R`\frac{dy}{dx} = 0;\qquad \frac{d^2y}{dx^2} \lessgtr 0`, G({ xl: "x", yl: "y", xr: [0, 6.3], yr: [-1.2, 1.2], fns: [x => Math.sin(x)], lab: ["max: slope 0, y'' < 0"] })),
  P(R`<b>Integration</b> is the reverse of differentiation (summing small pieces). The <b>definite integral is the area under the curve</b> between the limits.`, [R`\int x^n dx = \frac{x^{n+1}}{n+1} + C\ (n\ne-1),\quad \int\frac{dx}{x} = \ln x,\quad \int\sin x\,dx = -\cos x`, R`\int_a^b f(x)\,dx = F(b) - F(a) = \text{area under } y=f(x)`], G({ xl: "x", yl: "y", xr: [0, 4], yr: [0, 4], fns: [x => 0.25 * x * x + 0.5, x => (x > 1 && x < 3 ? 0.25 * x * x + 0.5 : NaN)], lab: ["f(x)", "area a→b"] })),
  J(R`Calculus questions are increasing: $v(x)$ → $a = v\,dv/dx$, B varying with r → $\varepsilon = \int B\omega r\,dr$, magnetic moment of a flat spiral → $\int dN\,\pi r^2$, work $\int F\,dx$.`, "2026 · 5 Apr · Evening; 2026 · 4 Apr · Morning (uploaded papers)")
]],
["2.12 – 2.13 Significant Digits", [
  P(R`A reading has all the certain digits plus <b>one doubtful digit</b> (eye estimate within the least count). Together these are the <b>significant digits</b>. Example: 10.46 cm with a mm scale gives 4 significant digits.`),
  P(R`Rules for counting significant figures:`),
  L([R`All non-zero digits are significant. Zeros between non-zero digits are significant (1.0023 → 5).`,
     R`If the integer part is zero, leading zeros after the decimal point are <b>not</b> significant (0.0023 → 2).`,
     R`Trailing zeros in a number without a decimal point are ambiguous. Use powers of 10: $6\times10^2$ (1), $6.0\times10^2$ (2), $6.00\times10^2$ (3).`]),
  P(R`<b>× and ÷</b>: the answer has as many significant digits as the factor with the <b>fewest significant digits</b>.`, R`\frac{25.2\times1374}{33.3} = 1039.78\ldots \to 1040\ (3\ \text{s.f.})`),
  P(R`<b>+ and −</b>: line up the decimal points, find the first column (from the left) with a doubtful digit, and round everything to that column.`, R`24.36 + 0.0623 + 256.2 = 24.4 + 0.1 + 256.2 = 280.7`),
  P(R`<b>Rounding</b>: next digit > 5, round up. < 5, leave. Exactly 5: round up if the digit being rounded is <b>odd</b>, leave it if <b>even</b>. Example: 14.750 → 14.8, 14.650 → 14.6.`),
  J(R`Significant-figure questions (sums or means of readings) appear from 2024 onwards. Apply the addition rule (decimal places), not the multiplication rule.`, "2025 · 3 Apr · Morning; 2026 · 21 Jan · Evening")
]],
["2.14 Errors in Measurement", [
  P(R`Errors come from faulty equipment and carelessness (<b>systematic</b>, can be removed once the cause is found) and from <b>random</b> causes (can't be removed, but averaging reduces them).`),
  P(R`For $N$ repeated readings, the best value is the <b>mean</b> and the uncertainty is the <b>standard deviation</b> $\sigma$. The true value lies within $\bar x \pm 1.96\sigma$ with 95% chance, and within $\bar x \pm 3\sigma$ with more than 99% chance (valid for $N > 8$ roughly).`, R`\bar x = \frac1N\sum x_i,\qquad \sigma = \sqrt{\frac1N\sum(x_i - \bar x)^2}`),
  P(R`<i>JEE syllabus supplement (NCERT, Unit 1):</i> mean absolute error and propagation of errors. Absolute errors <b>add</b> in sums and differences. Relative errors add, weighted by the power, in products and quotients.`, [R`\Delta\bar a = \frac1N\sum|a_i - \bar a|,\quad \delta = \frac{\Delta a}{\bar a},\quad \% = \delta\times100`, R`Z = A\pm B:\ \Delta Z = \Delta A + \Delta B;\qquad Z = \frac{A^pB^q}{C^r}:\ \frac{\Delta Z}{Z} = p\frac{\Delta A}{A}+q\frac{\Delta B}{B}+r\frac{\Delta C}{C}`]),
  W(R`Errors never cancel. Even in $A - B$ or $A/B$, add the errors. And remember the power: a 2% error in the diameter gives a 6% error in the volume of a sphere.`),
  J(R`Error in Young's modulus $Y = \frac{4FL}{\pi d^2\Delta L}$: $\frac{\Delta Y}{Y} = \frac{\Delta L}{L} + 2\frac{\Delta d}{d} + \frac{\Delta(\Delta L)}{\Delta L}$ (least counts used as errors). Similar questions use $g = 4\pi^2L/T^2$, $\rho = m/V$, and $R = V/I$.`, "2026 · 2 Apr · Morning; 2026 · 5 Apr · Evening; 2022 · 27 Jun · Morning; 2024 · 1 Feb · Morning")
]],
["Experimental Skills: Vernier & Screw Gauge (JEE Unit 20 supplement)", [
  P(R`<b>Vernier calipers</b>: $N$ vernier divisions = $(N-1)$ main-scale divisions.`, [R`LC = 1\,\text{MSD} - 1\,\text{VSD} = \frac{1\,\text{MSD}}{N}`, R`\text{Reading} = \text{MSR} + n\times LC - (\text{zero error with sign})`], S(s.rect(10, 40, 200, 30) + Array.from({ length: 21 }, (_, i) => s.line(10 + i * 10, 40, 10 + i * 10, i % 5 ? 50 : 56)).join("") + s.rect(40, 70, 90, 26, s.fill) + Array.from({ length: 11 }, (_, i) => s.line(40 + i * 9, 70, 40 + i * 9, 80)).join("") + s.txt(60, 30, "main scale") + s.txt(52, 112, "vernier scale"), 220, 120)),
  P(R`<b>Screw gauge</b>: pitch = distance moved in one full turn.`, [R`LC = \frac{\text{pitch}}{\text{number of circular divisions}}`, R`\text{Reading} = \text{MSR} + \text{CSR}\times LC - (\text{zero error})`]),
  S(s.path("M20 45 L20 115 Q20 130 35 130 L105 130 Q120 130 120 115 L120 72", 'style="stroke-width:6"') + s.rect(22,50,8,22,'class="fl2"') + s.rect(44,56,26,10,'class="fl"') + s.rect(70,50,50,22,'class="fl2"') + s.line(70,61,120,61,'class="thin"') + [74,80,86,92,98,104,110,116].map(x => s.line(x,61,x,55,'class="thin"')).join("") + s.rect(120,44,40,34,'class="fl"') + [50,56,62,68,74].map(y => s.line(120,y,128,y,'class="thin"')).join("") + s.txt(4,40,"anvil") + s.txt(60,44,"main scale") + s.txt(124,38,"thimble") + s.txt(28,96,"object") + s.arr(36,62,42,62,'class="red"'), 180, 145, "LC = pitch ÷ circular divisions"),
  P(R`Zero-error sign: vernier zero to the <b>right</b> of main zero → positive. Screw gauge: circular-scale zero <b>below</b> the reference line → positive. Always <b>subtract</b> the signed zero error.`),
  J(R`Least count / zero-error questions appeared in 4 of the 8 April-2026 shifts you uploaded, and they are the most common 2024 sub-topic. Also asked: "n MSD = (n+1) VSD" type least counts.`, "2026 · 4 Apr · Morning; 2022 · 30 Jun · Morning; 2024 · 1 Feb · Morning")
]]
],
pyq: {
  pat: [
    [R`% error in a derived quantity ($Y$, $g$, $\rho$, $R$, sphere volume) from least counts`, "2026 · 2 Apr · Morning; 2026 · 6 Apr · Evening; 2022 · 27 Jun · Morning"],
    [R`Vernier/screw gauge reading with zero error`, "2026 · 2 Apr · Evening; 2026 · 5 Apr · Morning; 2021 · 17 Mar · Morning"],
    [R`Significant figures in addition/mean`, "2025 · 3 Apr · Morning; 2026 · 21 Jan · Evening"],
    [R`Vector algebra: resultant, angle between vectors, cross-product area`, "2021–23 (several shifts)"]
  ],
  trap: [R`Subtraction doesn't reduce the error: $\Delta(A-B) = \Delta A + \Delta B$.`, R`"Ignore the error in the load" means drop $\Delta F/F$.`, R`Leading zeros are never significant. Trailing zeros after a decimal point are.`],
  mist: [R`Using the pitch as the least count.`, R`Adding the zero error instead of subtracting it (or getting its sign wrong).`]
}
});
})();
