(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 15, short: "Waves on a String",
intro: R`A wave carries energy and momentum without carrying matter. Strings are the model system for travelling and standing waves.`,
sec: [
["15.1 – 15.3 Wave Motion & Sine Waves", [
  P(R`A disturbance travelling with speed $v$ along +x keeps its shape: $y = f(t - x/v)$ (or $f(x - vt)$). Along −x: $f(t + x/v)$.`),
  S(s.line(10,100,230,100,'class="thin"') + s.path("M20 100 L50 100 Q65 40 80 100",'class="blue"') + s.path("M120 100 Q135 40 150 100",'class="red"') + s.arr(70,50,125,50) + s.txt(88,44,"vt") + s.txt(40,120,"t = 0") + s.txt(118,120,"time t"), 240, 128, "y = f(x − vt): the shape just shifts"),
  P(R`<b>Sine wave</b> travelling along +x:`, [R`y = A\sin(\omega t - kx + \phi) = A\sin\omega\left(t - \frac xv\right)`, R`k = \frac{2\pi}{\lambda},\quad \omega = 2\pi\nu,\quad v = \nu\lambda = \frac\omega k`], G({ xl: "x", yl: "y", xr: [0, 12.6], yr: [-1.2, 1.2], fns: [x => Math.sin(x), x => Math.sin(x - 0.8)], lab: ["t = 0", "slightly later"] })),
  P(R`If the signs of $\omega t$ and $kx$ are opposite, the wave moves along +x. If they are the same, along −x. <b>Particle velocity</b> $\frac{\partial y}{\partial t}$ (max $A\omega$) is different from the wave speed $v$:`, R`v_{particle} = -v\,\frac{\partial y}{\partial x}`),
  J(R`Reading $v$, $\lambda$, $f$ from $y(x,t)$ is the most common wave question. Bring it to the standard form first and watch the units (x in cm).`, "2023 · 11 Apr · Morning; 2026 · 2 Apr · Morning; 2026 · 5 Apr · Morning")
]],
["15.4 – 15.5 Speed on a String & Power", [
  P(R`Speed of a transverse wave on a string with tension F and linear mass density μ (independent of amplitude and frequency):`, R`v = \sqrt{\frac F\mu},\qquad \mu = \frac ml = \rho\pi r^2`),
  S(s.wall(20,30,90) + s.wave(20,60,180,8,2.5,'class="blue"') + s.line(180,60,190,60) + s.pulley(190,70,10) + s.line(200,70,200,110) + s.block(188,110,24,22,"M") + s.txt(90,40,"μ") + s.txt(120,146,"tension F = Mg") + s.arr(60,92,110,92,'class="red"') + s.txt(64,110,"v = √(F/μ)"), 225, 150),
  D("v = √(F/μ)", [R`In the frame moving with the pulse, a small element $\Delta l$ at the crest moves in a circle of radius R with speed v.`, R`Net inward tension force $= F\Delta l/R = (\mu\Delta l)v^2/R$ ⇒ $v = \sqrt{F/\mu}$.`]),
  P(R`<b>Power</b> transmitted and intensity:`, R`P = 2\pi^2\mu v A^2\nu^2,\qquad P\propto A^2\nu^2`),
  J(R`$\mu\propto r^2$: halving the wire radius doubles the wave speed (same tension).`, "2025 · 8 Apr · Evening")
]],
["15.6 – 15.8 Superposition, Interference, Reflection", [
  P(R`<b>Principle of superposition</b>: the net displacement is the algebraic sum. Two waves with the same ω and k and phase difference δ:`, [R`A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\delta}`, R`\text{constructive: } \delta = 2n\pi;\qquad \text{destructive: } \delta = (2n+1)\pi`]),
  G({ xl: "x", yl: "y", xr: [0, 9.4], yr: [-1.8, 1.8], fns: [x => Math.sin(x), x => 0.6 * Math.sin(x + 1), x => Math.sin(x) + 0.6 * Math.sin(x + 1)], lab: ["y₁", "y₂", "y₁ + y₂"] }),
  P(R`<b>Reflection</b> at a fixed end (or denser string): the wave is inverted (phase change π). At a free end (or rarer string): no phase change. The transmitted wave is never inverted.`),
  S(s.rect(200,20,10,50,'class="fl2"') + s.path("M10 45 L60 45 Q75 15 90 45 L200 45",'class="blue"') + s.arr(70,20,110,20) + s.rect(200,85,10,50,'class="fl2"') + s.path("M10 110 L110 110 Q125 140 140 110 L200 110",'class="red"') + s.arr(160,142,120,142) + s.txt(120,14,"incident") + s.txt(10,140,"reflected: inverted"), 220, 150, "Fixed end (or denser string): phase change π")
]],
["15.9 – 15.13 Standing Waves on Strings", [
  P(R`Two identical waves moving in opposite directions form a <b>standing wave</b>. Nodes are at $\sin kx = 0$, antinodes at $|\sin kx| = 1$. Node–node distance = λ/2, node–antinode = λ/4. No net energy flows.`, R`y = 2A\sin kx\cos\omega t`, G({ xl: "x", yl: "y", xr: [0, 3.1416], yr: [-1.1, 1.1], fns: [x => Math.sin(3 * x), x => -Math.sin(3 * x)], lab: ["3rd harmonic", ""] })),
  P(R`<b>String fixed at both ends</b> (length L): all harmonics are present.`, R`L = \frac{n\lambda}{2}\ \Rightarrow\ \nu_n = \frac{n}{2L}\sqrt{\frac F\mu},\quad n = 1, 2, 3\ldots`),
  S(s.line(10,25,190,25,'class="thin"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(25-14*Math.sin(Math.PI*1*k/60)).toFixed(1)).join(' '),'class="blue"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(25+14*Math.sin(Math.PI*1*k/60)).toFixed(1)).join(' '),'class="red"')+s.txt(196,29,"n = 1")+s.line(10,70,190,70,'class="thin"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(70-14*Math.sin(Math.PI*2*k/60)).toFixed(1)).join(' '),'class="blue"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(70+14*Math.sin(Math.PI*2*k/60)).toFixed(1)).join(' '),'class="red"')+s.txt(196,74,"n = 2")+s.line(10,115,190,115,'class="thin"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(115-14*Math.sin(Math.PI*3*k/60)).toFixed(1)).join(' '),'class="blue"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(115+14*Math.sin(Math.PI*3*k/60)).toFixed(1)).join(' '),'class="red"')+s.txt(196,119,"n = 3"), 230, 145, "Both ends nodes: ν = nv/2L, all harmonics"),
  P(R`<b>String fixed at one end</b> (other end free): only odd harmonics, $\nu = \frac{(2n+1)}{4L}\sqrt{F/\mu}$.`),
  S(s.line(10,30,190,30,'class="thin"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(30-16*Math.sin(Math.PI*1*k/120)).toFixed(1)).join(' '),'class="blue"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(30+16*Math.sin(Math.PI*1*k/120)).toFixed(1)).join(' '),'class="red"')+s.txt(196,34,"ν₁")+s.line(10,85,190,85,'class="thin"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(85-16*Math.sin(Math.PI*3*k/120)).toFixed(1)).join(' '),'class="blue"')+s.path(Array.from({length:61},(_,k)=>(k?'L':'M')+(10+3*k)+' '+(85+16*Math.sin(Math.PI*3*k/120)).toFixed(1)).join(' '),'class="red"')+s.txt(196,89,"3ν₁"), 230, 115, "One end free: only odd harmonics"),
  P(R`<b>Laws of transverse vibration</b> (sonometer): $\nu\propto 1/L$ (at fixed F, μ), $\nu\propto\sqrt F$, $\nu\propto 1/\sqrt\mu$. Resonance shows when the paper rider on the sonometer wire flies off.`),
  S(s.rect(10,70,190,30,'class="fl2"') + s.line(10,60,200,60) + s.path("M40 70 L48 60 L56 70",'class="fl"') + s.path("M150 70 L158 60 L166 70",'class="fl"') + s.pulley(205,66,6) + s.line(211,66,211,110) + s.block(200,110,22,20,"M") + s.line(48,48,158,48,'class="thin"') + s.txt(98,44,"L") + s.txt(70,90,"sonometer"), 230, 136, "ν = (1/2L)√(F/μ)"),
  J(R`Sonometer questions (change length or tension, find the new frequency or number of loops) appear each year. Hanging a mass in water reduces the tension: $\nu'/\nu = \sqrt{1 - \sigma/\rho}$.`, "2023 · 13 Apr · Evening; 2023 · 8 Apr · Evening")
]],
["15.14 – 15.15 Transverse/Longitudinal Waves & Polarisation", [
  P(R`<b>Transverse</b>: particles vibrate ⊥ to propagation (strings, light). <b>Longitudinal</b>: parallel (sound in gases). Only transverse waves can be <b>polarised</b> (vibrations confined to one plane). A slit allows only the component along it.`),
  S(s.wave(10,35,200,14,2,'class="blue"') + s.txt(10,70,"transverse: particles ⊥ to motion") + Array.from({length: 40}, (_, i) => { const x = 10 + i * 5 + 6 * Math.sin(i * 0.6); return s.line(x,86,x,116,'class="thin"'); }).join("") + s.txt(10,138,"longitudinal: compressions & rarefactions"), 240, 146)
]]
],
pyq: {
  pat: [[R`Wave equation → v, λ, f, particle velocity`, "2023 · 11 Apr · Morning; 2021 · 24 Feb · Evening"], [R`Superposition: resultant amplitude/phase`, "2023 · 31 Jan · Evening; 2023 · 29 Jan · Morning"], [R`Sonometer / string harmonics`, "2023 · 13 Apr · Evening; 2023 · 8 Apr · Evening"]],
  trap: [R`Maximum particle speed $A\omega$ ≠ wave speed $\omega/k$.`, R`Distance between successive crests = λ = 2π/k.`],
  mist: [R`Forgetting the π inside the bracket, e.g. $y = A\cos\pi(200t - x/150)$.`]
},
aprFilter: "wave|crest"
});
})();
