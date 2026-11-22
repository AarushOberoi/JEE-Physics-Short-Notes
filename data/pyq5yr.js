// JEE Main Physics PYQ counts per year (2021–2026), from ExamSIDE chapter-wise per-year tables (MCQ + numerical, all shifts).
// Sub-topic shares are approximate classifications of the questions (see analysis/pyq-5yr-part1.md & part2.md).
window.PYQ_YEARS = [2021, 2022, 2023, 2024, 2025, 2026];
window.PYQ5 = {
  units:        { name: "Units & Measurements", n: [38, 32, 25, 39, 32, 33], top: "Dimensions ~34% · Errors ~21% · Vernier/screw gauge ~18% · Match-list of dimensions ~16% · New unit systems ~6% · Sig. figs ~3%" },
  straight:     { name: "Motion in a Straight Line", n: [20, 18, 19, 17, 8, 9], top: "Graphs ~24% · Free fall ~20% · Calculus x(t), v(t) ~17% · Average speed ~14% · Equations/nth second ~12% · Relative ~12%" },
  plane:        { name: "Motion in a Plane", n: [10, 19, 15, 9, 12, 7], top: "Projectile ~58% · r(t) 2D kinematics ~11% · Launch from height/moving platform ~11% · River/rain ~9%" },
  circular:     { name: "Circular Motion", n: [10, 13, 14, 12, 6, 6], top: "Banking/drum/disc friction ~24% · Vertical circle ~18% · Angular kinematics ~18% · Conical/car pendulum ~8% · Spring + circular ~8%" },
  lom:          { name: "Laws of Motion", n: [24, 28, 15, 22, 7, 14], top: "Pulleys ~21% · Incline friction ~17% · Strings/equilibrium ~14% · Friction ~11% · Pseudo force ~9% · Variable force ~8%" },
  wpe:          { name: "Work, Power & Energy", n: [18, 18, 24, 18, 13, 12], top: "Resistive work/penetration ~24% · Power ~18% · Variable force ~14% · U(x), F = −dU/dx ~12% · Conservation ~12%" },
  com:          { name: "Centre of Mass & Collisions", n: [21, 16, 12, 9, 6, 7], top: "Impulse ~24% · COM position ~20% · Elastic collisions ~18% · Inelastic/ballistic ~18% · Explosion ~10%" },
  rotation:     { name: "Rotational Motion", n: [37, 23, 27, 23, 29, 27], top: "Moment of inertia ~27% · Rolling ~25% · Angular momentum ~16% · Torque ~12% · Angular kinematics ~10%" },
  gravitation:  { name: "Gravitation", n: [34, 25, 38, 22, 12, 10], top: "Escape/energy ~32% · g variation ~29% · Satellites ~28% · Superposition ~9% · Kepler ~3%" },
  elasticity:   { name: "Mechanical Properties of Solids", n: [18, 16, 19, 15, 10, 15], top: "Elongation ΔL = FL/AY ~38% · Young's modulus concept ~21% · Bulk modulus ~13% · Breaking stress ~8% · Thermal stress ~4%" },
  fluids:       { name: "Mechanical Properties of Fluids", n: [14, 24, 22, 26, 21, 20], top: "Viscosity/terminal velocity ~27% · Surface energy ~22% · Bernoulli/efflux ~21% · Capillarity ~13% · Hydrostatics/flotation ~13%" },
  thermalprop:  { name: "Thermal Properties of Matter", n: [11, 16, 11, 3, 13, 7], top: "Calorimetry/latent heat ~31% · Conduction ~20% · Expansion ~15% · Newton's cooling ~15% · Scales ~11% · Radiation ~3%" },
  thermo:       { name: "Thermodynamics", n: [33, 26, 22, 18, 23, 19], top: "Adiabatic ~28% · Carnot/engines ~17% · Cp, Cv, isobaric ~17% · Cyclic PV ~15% · Statements ~12% · Process graphs ~9%" },
  ktg:          { name: "Kinetic Theory of Gases", n: [25, 19, 22, 20, 12, 11], top: "Molecular speeds ~24% · KE & U ~19% · Mixtures ~16% · Degrees of freedom/γ ~15% · Gas laws ~14% · Mean free path ~9%" },
  shm:          { name: "Oscillations (SHM)", n: [36, 18, 24, 13, 10, 14], top: "Pendulum (lift, height, planet) ~25% · Kinematics/phase ~22% · Spring ~20% · Energy ~17% · Damping ~3%" },
  waves:        { name: "Waves", n: [16, 19, 20, 10, 12, 9], top: "Wave equation ~28% · Organ pipes ~16% · Superposition/beats ~16% · Doppler ~16% (now out of syllabus) · Strings ~9%" },
  electrostatics:{ name: "Electrostatics", n: [32, 28, 35, 32, 35, 26], top: "Dipoles · Conductors & shells · Gauss flux · Work/energy · E from V · Equilibrium of charges" },
  capacitor:    { name: "Capacitors", n: [22, 26, 18, 14, 15, 13], top: "Dielectrics ~37% · Steady-state circuits ~26% · Charge sharing ~16% · Charging/discharging ~11%" },
  current:      { name: "Current Electricity", n: [48, 51, 48, 49, 18, 28], top: "Instruments (galvanometer, meter bridge) ~26% · Networks ~26% · Cells ~16% · Joule heating ~16% · R(T) ~11% · Drift ~5%" },
  magnetics:    { name: "Moving Charges & Magnetism", n: [20, 33, 31, 29, 22, 18], top: "Field of current configurations ~42% · Charged particle in B ~32% · Moment & torque ~11% · Force between wires ~5%" },
  magmatter:    { name: "Magnetism & Matter", n: [13, 11, 10, 6, 6, 4], top: "Solenoid core/χ ~22% · Dia/para/ferro ~22% · Earth's field ~20% · Dipole energy ~20%" },
  emi:          { name: "Electromagnetic Induction", n: [16, 13, 23, 16, 9, 17], top: "Motional emf ~32% · Flux change ~28% · Self-inductance & LR ~17% · Mutual inductance ~12%" },
  ac:           { name: "Alternating Current", n: [37, 35, 27, 25, 10, 12], top: "Series LCR ~44% · RMS/power ~19% · Reactance/phasors ~14% · Transients ~7% · Transformer ~5%" },
  emw:          { name: "Electromagnetic Waves", n: [24, 24, 24, 19, 12, 17], top: "E–B relations ~28% · Intensity/energy ~19% · Speed in medium ~14% · Spectrum ~12% · Displacement current ~8% · Pressure ~8%" },
  rayoptics:    { name: "Ray (Geometrical) Optics", n: [32, 28, 29, 20, 42, 34], top: "Lenses ~32% · Spherical refraction/TIR ~24% · Mirrors & silvered lens ~19% · Prisms ~17% · Instruments ~4%" },
  waveoptics:   { name: "Wave Optics", n: [18, 20, 19, 22, 20, 24], top: "Interference (YDSE) ~45% · Polarisation ~20% · Diffraction & resolution ~20%" },
  dual:         { name: "Dual Nature of Radiation", n: [35, 24, 26, 21, 21, 16], top: "Photoelectric effect ~40% · de Broglie ~35% · Photon energy/count/momentum ~13%" },
  atomsnuclei:  { name: "Atoms & Nuclei", n: [36, 37, 45, 41, 19, 24], top: "Nuclear ~57% (decay, BE/Q-value, radius) · Atomic ~43% (Bohr r, v, E; spectral lines)" },
  semi:         { name: "Semiconductors", n: [43, 31, 26, 22, 19, 21], top: "Logic gates ~38% · Diode circuits ~20% · Zener ~14% · Device physics ~16% · (transistors ~12%, now out of syllabus)" }
};
