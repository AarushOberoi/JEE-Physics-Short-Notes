(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: 3, short: "Rest and Motion: Kinematics",
intro: R`Rest and motion are always <b>relative to a frame</b>. Kinematics describes motion without asking what causes it.`,
sec: [
["3.1 – 3.2 Rest, Motion, Distance & Displacement", [
  P(R`A body is at rest or in motion only <b>with respect to a chosen frame of reference</b>. Its position is given by the position vector $\vec r$ from the origin of that frame.`),
  P(R`<b>Distance</b> = actual path length (scalar, never decreases). <b>Displacement</b> = change in position vector $\Delta\vec r = \vec r_2 - \vec r_1$ (vector, depends only on the end points).`, R`|\Delta\vec r| \le \text{distance}`, S(s.path("M20 120 C 60 20, 140 20, 190 110", 'class="blue"') + s.arr(20, 120, 190, 110, 'class="red"') + s.circ(20, 120, 3, 'class="dot"') + s.circ(190, 110, 3, 'class="dot"') + s.txt(70, 40, "path (distance)") + s.txt(70, 138, "displacement"), 210, 150))
]],
["3.3 – 3.5 Speed, Velocity, Acceleration", [
  P(R`<b>Average speed</b> = distance / time. <b>Instantaneous speed</b> = $\frac{ds}{dt}$ = slope of the distance–time graph.`),
  P(R`<b>Average velocity</b> = displacement / time. <b>Instantaneous velocity</b> is the derivative of position. Its magnitude equals the instantaneous speed.`, R`\vec v_{av} = \frac{\Delta\vec r}{\Delta t},\qquad \vec v = \frac{d\vec r}{dt}`),
  P(R`<b>Acceleration</b> = rate of change of velocity (a change in magnitude <i>or</i> direction).`, R`\vec a = \frac{d\vec v}{dt} = \frac{d^2\vec r}{dt^2};\qquad a = v\frac{dv}{dx}\ (\text{1-D})`),
  W(R`Average speed ≥ |average velocity|. They are equal only for straight-line motion without turning back. Average velocity = $(u+v)/2$ <b>only</b> for constant acceleration.`),
  J(R`Rebound/round-trip questions: average velocity = 0 but average speed ≠ 0. Use total path / total time.`, "2021 · 17 Mar · Evening; 2023 · 1 Feb · Morning")
]],
["3.6 Motion in a Straight Line", [
  P(R`<b>Uniform acceleration</b> along a line (take one direction as positive, keep signs):`, [R`v = u + at,\qquad x = ut + \tfrac12at^2,\qquad v^2 = u^2 + 2ax`, R`x = \frac{u+v}{2}t,\qquad s_{n^{th}} = u + \frac a2(2n-1)`]),
  D("equations of motion by integration", [R`$a = \frac{dv}{dt}$ ⇒ $\int_u^v dv = \int_0^t a\,dt$ ⇒ $v = u + at$`, R`$v = \frac{dx}{dt}$ ⇒ $x = \int_0^t (u + at)dt = ut + \frac12at^2$`, R`$a = v\frac{dv}{dx}$ ⇒ $\int_u^v v\,dv = \int_0^x a\,dx$ ⇒ $v^2 = u^2 + 2ax$`]),
  P(R`<b>Graphs</b>: slope of $x$–$t$ = velocity. Slope of $v$–$t$ = acceleration. <b>Area under $v$–$t$ = displacement</b> (area of $|v|$ = distance). Area under $a$–$t$ = change in velocity.`, null, G({ xl: "t", yl: "v", xr: [0, 6], yr: [-2, 3], fns: [x => 2.5 - x], lab: ["v = u − at"] })),
  P(R`<b>Free fall</b> (near the earth, no air resistance): $a = g$ downward ≈ 9.8 m s⁻². Thrown up with $u$:`, [R`H_{max} = \frac{u^2}{2g},\qquad t_{up} = t_{down} = \frac ug`]),
  P(R`<b>Displacement in the last 1 s</b> of a time $t$. The short form $u + \frac a2(2n-1)$ only looks dimensionally wrong because the "1 s" is hidden:`, R`s_t - s_{t-1} = u(1\,\text{s}) + \tfrac a2(2t - 1\,\text{s})(1\,\text{s})`),
  P(R`<b>Free fall sign conventions</b>: upward positive gives $v = u - gt$, $y = ut - \frac12gt^2$, $v^2 = u^2 - 2gy$. Downward positive gives $a = +g$. Pick one and keep it for the whole problem.`),
  P(R`From rest, distances in successive equal intervals are in the ratio <b>1 : 3 : 5 : 7 …</b> (Galileo's law of odd numbers).`),
  S([0,1,4,9,16].map(k => s.circ(50,15+k*7,5,'class="fl"')).join("") + [[0,1,"1"],[1,4,"3"],[4,9,"5"],[9,16,"7"]].map(([a,b,l]) => s.line(70,15+a*7,70,15+b*7,'class="thin"') + s.line(66,15+b*7,74,15+b*7,'class="thin"') + s.txt(80,19+(a+b)*3.5,l+" units")).join("") + s.txt(120,30,"t = 0, 1, 2, 3, 4"), 210, 135, "Free fall from rest: 1 : 3 : 5 : 7"),
  W(R`At the top point, $v = 0$ but $a = g \ne 0$. A body released from a rising balloon or lift starts with the balloon's <b>upward</b> velocity.`),
  J(R`Variable acceleration: when $a$ depends on $x$ use $a = v\,dv/dx$, when it depends on $t$ use $dv = a\,dt$. Converting a $v$–$x$ graph to an $a$–$x$ graph uses $a = v\,dv/dx$.`, "2026 · 24 Jan · Evening; 2021 · 24 Feb · Morning")
]],
["Motion Graphs: x–t, v–t, a–t", [
  P(R`<b>Reading graphs</b>: slope of $x$–$t$ = $v$; slope of $v$–$t$ = $a$; area under $v$–$t$ = displacement; area under $a$–$t$ = $\Delta v$. Curvature of $x$–$t$ tells the sign of $a$: bending <b>up</b> means $a > 0$, bending <b>down</b> means $a < 0$.`),
  GR("① At rest", [
    { xl: "t", yl: "x", xr: [0, 4], yr: [0, 3], fns: [x => 1.5], t: "x–t: horizontal line" },
    { xl: "t", yl: "v", xr: [0, 4], yr: [-1, 1], fns: [x => 0], t: "v–t: v = 0" },
    { xl: "t", yl: "a", xr: [0, 4], yr: [-1, 1], fns: [x => 0], t: "a–t: a = 0" }]),
  GR("② Uniform velocity (a = 0)", [
    { xl: "t", yl: "x", xr: [0, 4], yr: [0, 3], fns: [x => 0.4 + 0.5 * x, x => 2.6 - 0.5 * x], lab: ["v > 0", "v < 0"], t: "x–t: straight line, slope = v" },
    { xl: "t", yl: "v", xr: [0, 4], yr: [-1.5, 1.5], fns: [x => 1, x => -1], lab: ["v > 0", "v < 0"], t: "v–t: horizontal line" },
    { xl: "t", yl: "a", xr: [0, 4], yr: [-1, 1], fns: [x => 0], t: "a–t: a = 0" }]),
  GR("③ Uniform acceleration, speeding up (a > 0)", [
    { xl: "t", yl: "x", xr: [0, 4], yr: [0, 4], fns: [x => 0.3 * x + 0.16 * x * x], t: "x–t: parabola bending up" },
    { xl: "t", yl: "v", xr: [0, 4], yr: [0, 3], fns: [x => 0.5 + 0.55 * x], lab: ["slope = a, intercept = u"], t: "v–t: straight line" },
    { xl: "t", yl: "a", xr: [0, 4], yr: [-0.5, 1.5], fns: [x => 1], t: "a–t: horizontal line" }]),
  GR("④ Uniform retardation / ball thrown up (a = −g)", [
    { xl: "t", yl: "y", xr: [0, 3], yr: [0, 2.6], fns: [x => 3 * x - x * x], lab: ["top at t = u/g"], t: "x–t: parabola bending down" },
    { xl: "t", yl: "v", xr: [0, 3], yr: [-3.5, 3.5], fns: [x => 3 - 2 * x], lab: ["v = 0 at the top"], t: "v–t: line crossing the t-axis" },
    { xl: "t", yl: "a", xr: [0, 3], yr: [-3, 1], fns: [x => -2], lab: ["a = −g throughout"], t: "a–t: constant, negative" }]),
  GR("⑤ v–x and a–v graphs (constant a)", [
    { xl: "x", yl: "v", xr: [0, 2], yr: [0, 2.6], fns: [x => Math.sqrt(1 + 2 * x), x => Math.sqrt(Math.max(0, 4 - 2 * x))], lab: ["a > 0", "a < 0"], t: "v–x: parabola, v² = u² + 2ax" },
    { xl: "v", yl: "a", xr: [0, 2], yr: [-2, 1.5], fns: [x => 1, x => -0.9 * x], lab: ["constant a", "a = −kv (drag)"], t: "a–v: flat line for constant a" },
    { xl: "t", yl: "s", xr: [0, 3], yr: [0, 4.6], fns: [x => x <= 1.5 ? 3 * x - x * x : 4.5 - 3 * x + x * x], lab: ["distance never decreases"], t: "distance–t for a ball thrown up" }]),
  W(R`Impossible graphs: $x$–$t$ with two $x$ values at one $t$; a vertical part in $x$–$t$ or $v$–$t$ (infinite $v$ or $a$); speed or distance going negative; a sharp corner in $x$–$t$ (sudden change of $v$ needs infinite force, except in idealised collisions).`),
  J(R`Graph conversion is a favourite: given $v$–$t$, draw $a$–$t$ or $x$–$t$; given $v$–$x$, find $a$ using $a = v\,dv/dx$; displacement vs distance from the area of a $v$–$t$ graph that crosses the axis.`, "2023 · 11 Apr · Morning; 2023 · 24 Jan · Evening")
]],
["3.7 – 3.8 Motion in a Plane & Projectile Motion", [
  P(R`Plane motion splits into <b>two independent 1-D motions</b> along $x$ and $y$. With constant $\vec a$, the vector equations hold component-wise.`, R`\vec v = \vec u + \vec at,\qquad \vec r = \vec ut + \tfrac12\vec at^2`),
  P(R`<b>Projectile</b> thrown with speed $u$ at angle $\theta$ above the horizontal: $a_x = 0$, $a_y = -g$.`, [R`T = \frac{2u\sin\theta}{g},\qquad H = \frac{u^2\sin^2\theta}{2g},\qquad R = \frac{u^2\sin2\theta}{g}`, R`y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}\ \ (\text{parabola})`], G({ xl: "x", yl: "y", xr: [0, 1.05], yr: [0, 0.6], fns: [x => x * (1 - x), x => 1.732 * x * (1 - x / 0.866), x => 0.577 * x * (1 - x / 0.866)], lab: ["45°", "60°", "30°"] })),
  P(R`Results: $R_{max} = u^2/g$ at $45^\circ$. Angles $\theta$ and $90^\circ - \theta$ give the <b>same range</b>. At the highest point $v = u\cos\theta$ (horizontal) and KE $= K\cos^2\theta$.`, [R`R = 4H\cot\theta,\qquad T_1T_2 = \frac{2R}{g}\ (\text{complementary angles})`]),
  P(R`<b>Projected horizontally</b> from height $h$: $t = \sqrt{2h/g}$, range $= u\sqrt{2h/g}$. On an inclined plane (angle $\alpha$), resolve $g$ along and perpendicular to the incline.`),
  S(s.rect(10,40,40,100,'class="fl2"') + s.path("M50 40 Q120 40 170 138",'class="blue" style="stroke-dasharray:5 4"') + s.arr(50,40,92,40,'class="red"') + s.txt(64,32,"u") + s.line(50,140,190,140) + s.line(28,40,28,140,'class="thin"') + s.txt(14,95,"h") + s.txt(80,156,"R = u√(2h/g)") + s.arr(150,95,150,125) + s.txt(155,116,"g"), 200, 162, "Horizontal launch: x uniform, y free fall"),
  J(R`Most asked in this topic: range ratios for two angles, $R = nH$, flight-time product for equal ranges, angle of velocity at time $t$. Some questions measure the angle <b>from the vertical</b>, so read carefully.`, "2026 · 4 Apr · Morning; 2025 · 3 Apr · Evening; 2026 · 8 Apr · Evening; 2023 · 6 Apr · Morning")
]],
["3.9 Change of Frame (Relative Motion)", [
  P(R`If frame S′ moves with velocity $\vec v_{S'S}$ relative to S, then for particle P:`, R`\vec v_{P,S} = \vec v_{P,S'} + \vec v_{S',S}\qquad\Leftrightarrow\qquad \vec v_{AB} = \vec v_A - \vec v_B`),
  S(s.block(20,40,50,22,"A") + s.arr(72,51,122,51,'class="red"') + s.txt(84,44,"v_A") + s.block(20,88,50,22,"B") + s.arr(72,99,105,99,'class="blue"') + s.txt(76,92,"v_B") + s.ground(10,210,112) + s.txt(125,82,"v_AB = v_A − v_B"), 215, 128, "Velocity of A as seen from B"),
  P(R`<b>River crossing</b> (river width $d$, river speed $u$, swimmer speed $v$ relative to water). Minimum time: swim straight across, $t = d/v$, drift $= ud/v$. Shortest path (if $v > u$): head upstream at $\sin\theta = u/v$, $t = \frac{d}{\sqrt{v^2-u^2}}$.`, null, S(s.rect(10, 30, 200, 100, s.fill) + s.arr(60, 130, 60, 40) + s.arr(60, 130, 120, 40, 'class="red"') + s.arr(150, 80, 200, 80, 'class="blue"') + s.txt(64, 90, "v") + s.txt(100, 76, "resultant") + s.txt(165, 74, "u"), 220, 150, "Crossing in minimum time")),
  P(R`Differentiating again gives <b>relative acceleration</b>. If S′ moves with uniform velocity, $\vec a_{S'S} = 0$ and the acceleration is the same in both frames.`, R`\vec a_{P,S} = \vec a_{P,S'} + \vec a_{S',S}`),
  W(R`Assumption: time and length mean the same in both frames. This holds only when the relative speed is much less than c; otherwise relativity applies.`),
  P(R`<b>Rain–man problems</b>: the umbrella is held along $\vec v_{rain} - \vec v_{man}$.`),
  S(s.arr(120,20,120,120,'class="blue"') + s.arr(120,120,60,120) + s.arr(120,20,62,118,'class="red"') + s.txt(126,70,"v_rain") + s.txt(66,138,"−v_man") + s.txt(4,62,"v_rain, man") + s.arcm(120,20,26,-121,-90) + s.txt(106,60,"θ"), 180, 145, "tan θ = v_man / v_rain: tilt the umbrella forward"),
  J(R`Relative-velocity questions (cars overtaking, stone thrown between moving cars, river crossing) appear 1–2 times a year. Convert km/h to m/s by multiplying by 5/18.`, "2026 · 21 Jan · Evening; 2025 · 2 Apr · Morning; 2026 · 4 Apr · Evening")
]]
],
pyq: {
  pat: [
    [R`Graph conversion and areas (v–t to a–t, v–x to a–x, distance/displacement ratio)`, "2023 · 11 Apr · Morning; 2023 · 24 Jan · Evening"],
    [R`Staggered drops / free fall from height`, "2026 · 28 Jan · Morning; 2021 · 25 Feb · Evening"],
    [R`nth-second displacement`, "2024 · 29 Jan · Morning; 2024 · 4 Apr · Morning"],
    [R`Projectile: range ratio, $R = nH$, $T$ from equal ranges`, "2026 · 4 Apr · Morning; 2022 · 25 Jul · Evening; 2025 · 7 Apr · Morning"],
    [R`Given $x(t)$, $y(t)$: velocity direction / acceleration`, "2024 · 27 Jan · Morning; 2026 · 4 Apr · Evening"],
    [R`River crossing and relative velocity`, "2026 · 21 Jan · Evening; 2025 · 2 Apr · Morning"]
  ],
  combo: [R`Projectile + energy (KE at top, $K\cos^2\theta$)`, R`Projectile + Torricelli's efflux (Fluids)`, R`Kinematics + de Broglie wavelength in a field (Dual Nature)`],
  trap: [R`Direction of velocity at time $t$: $\tan\alpha = \frac{u\sin\theta - gt}{u\cos\theta}$.`, R`For $x = at$, $y = bt - ct^2$: $g = 2c$, $u_x = a$, $u_y = b$.`, R`A turning point has $v = 0$ but $a \ne 0$.`],
  mist: [R`Using $v^2 = u^2 + 2as$ when $a$ is not constant.`, R`Forgetting the release velocity of an object dropped from a moving balloon.`]
}
});
})();
