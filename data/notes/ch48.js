(function () {
const { R, P, B, J, W, D, T, L, G, S } = NB, s = NB.svg;
NB.ch({
n: 48, short: "Communication Systems",
intro: R`<b>Not in the current JEE Main syllabus.</b> Key ideas only, for reference.`,
sec: [
["Elements of a Communication System", [
  P(R`Every system has three parts: <b>transmitter</b> → <b>channel</b> → <b>receiver</b>. Noise enters mainly in the channel.`, null, S(s.block(5,40,60,34,"") + s.txt(9,62,"source") + s.arr(65,57,80,57) + s.block(80,40,66,34,"") + s.txt(82,62,"transmitter") + s.arr(146,57,160,57) + s.block(160,40,54,34,"") + s.txt(166,62,"channel") + s.arr(214,57,228,57) + s.block(228,40,60,34,"") + s.txt(232,62,"receiver") + s.arr(187,15,187,38,'class="red"') + s.txt(166,12,"noise"), 295, 90, "Basic communication system")),
  L([R`<b>Transducer</b>: converts one form of energy into another (microphone, loudspeaker).`, R`<b>Attenuation</b>: loss of signal strength in the channel. <b>Amplification</b>: increasing it with an amplifier. <b>Repeater</b>: receiver + amplifier + transmitter, to extend range.`, R`<b>Bandwidth</b>: range of frequencies a signal occupies or a channel passes. Speech ≈ 2800 Hz, music ≈ 20 kHz, video ≈ 4.2 MHz, TV ≈ 6 MHz.`])
]],
["Propagation of EM Waves", [
  T(["Mode", "Frequency", "Key point"], [["Ground wave", "< 2 MHz", "follows the earth's surface; absorbed more at higher f"], ["Sky wave", "2 – 30 MHz", "reflected by the ionosphere; long-distance radio"], ["Space wave (line of sight)", "> 40 MHz", "TV, microwave links, satellites"]]),
  P(R`Line-of-sight range of an antenna of height h (earth radius R), and between a transmitting and receiving antenna:`, [R`d = \sqrt{2Rh},\qquad d_{max} = \sqrt{2Rh_T} + \sqrt{2Rh_R}`], S(s.arcm(120,330,250,62,118,'style="stroke-width:3"') + s.line(80,83,80,52,'style="stroke-width:3"') + s.line(170,85,170,60,'style="stroke-width:3"') + s.line(80,52,170,60,'class="red" style="stroke-dasharray:4 3"') + s.txt(58,60,"h_T") + s.txt(174,66,"h_R") + s.txt(118,48,"d"), 240, 110, "Antennas must 'see' each other over the earth's curve")),
  P(R`Critical frequency of the ionosphere: $f_c \approx 9\sqrt{N_{max}}$ (N = electron density per m³). Higher frequencies pass through it.`)
]],
["Modulation", [
  P(R`Why modulate: (1) antenna size must be about λ/4, impossible for audio frequencies; (2) radiated power ∝ (l/λ)², so high frequency radiates better; (3) signals from many stations would mix.`),
  P(R`<b>Amplitude modulation</b>: the carrier's amplitude follows the message signal. Modulation index and side bands:`, [R`\mu = \frac{A_m}{A_c}\ (\le 1),\qquad f_{USB} = f_c + f_m,\quad f_{LSB} = f_c - f_m`, R`\text{bandwidth} = 2f_m,\qquad A_{max} = A_c + A_m,\ A_{min} = A_c - A_m`], G({ xl: "t", yl: "", xr: [0, 12.6], yr: [-1.8, 1.8], fns: [x => (1 + 0.5 * Math.sin(x)) * Math.sin(12 * x), x => 1 + 0.5 * Math.sin(x)], lab: ["AM wave", "envelope = message"] })),
  P(R`Detection (demodulation) of AM: rectifier + envelope detector (RC filter) recovers the message.`),
  P(R`Other types: <b>FM</b> (frequency changes) and <b>PM</b> (phase changes). FM is less affected by noise.`)
]]
],
pyq: {}
});
})();
