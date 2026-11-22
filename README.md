# Φ JEE Physics Short Notes

Chapter-wise **JEE Main Physics short notes** with JEE Main PYQ (previous year question) focus points, covering the Class 11 and Class 12 syllabus.

🔗 **Read online:** https://jeephysicsshortnotes.aarushoberoi.workers.dev

---

## ✨ Features

- **Chapter-wise notes** for Class 11 and Class 12 Physics (30 chapters)
- **JEE Main PYQ focus points** in each chapter
- **Weightage tags** on every chapter: Low, Medium, High or Very high, so you know where to spend your time
- **"Not in JEE Main syllabus" label** so you can skip chapters that aren't examined
- **Revision tracker** (*Revised X / 29 chapters*) to mark chapters as done
- **Light and dark theme** toggle
- **Beautifully typeset formulas** rendered with KaTeX
- **Single-page app** with hash-based routing (e.g. `/#/c/12-3`), so every chapter has its own shareable link
- **Mobile-friendly** with a collapsible chapter menu
- **No sign-up, no backend**, just open and revise

## 📚 Chapters

### Class 11

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | Physical World | Low |
| 2 | Units and Measurement | Very high |
| 3 | Motion in a Straight Line | Very high |
| 4 | Motion in a Plane | Very high |
| 5 | Laws of Motion | High |
| 6 | Work Energy and Power | High |
| 7 | System of Particles and Rotational Motion | Very high |
| 8 | Gravitation | High |
| 9 | Mechanical Properties of Solids | High |
| 10 | Mechanical Properties of Fluids | High |
| 11 | Thermal Properties of Matter | Medium |
| 12 | Thermodynamics | High |
| 13 | Kinetic Theory | High |
| 14 | Oscillations | High |
| 15 | Waves | Medium |

### Class 12

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | Electric Charges and Fields | Very high |
| 2 | Electrostatic Potential and Capacitance | Very high |
| 3 | Current Electricity | Very high |
| 4 | Moving Charges and Magnetism | Very high |
| 5 | Magnetism and Matter | Very high |
| 6 | Electromagnetic Induction | High |
| 7 | Alternating Current | High |
| 8 | Electromagnetic Waves | High |
| 9 | Ray Optics and Optical Instruments | Very high |
| 10 | Wave Optics | High |
| 11 | Dual Nature of Radiation and Matter | High |
| 12 | Atoms | Very high |
| 13 | Nuclei | Very high |
| 14 | Semiconductor Electronics: Materials, Devices and Simple Circuits | Very high |
| 15 | Communication Systems | Not in JEE Main syllabus |

## 🗂️ Project Structure

```
JEE-Physics-Short-Notes/
├── index.html                 # App shell
├── css/                       # Stylesheets
├── js/                        # App logic (routing, rendering, revision tracker)
├── data/                      # Chapter notes content
├── ajax:libs:KaTeX:0.16.9/    # KaTeX (maths rendering)
├── s:inter:v20/               # Inter font files
├── css2                       # Font stylesheet
└── README.md
```

## 🚀 Run Locally

No build tools needed. Clone the repo and serve the folder with any static server:

```bash
git clone https://github.com/AarushOberoi/JEE-Physics-Short-Notes.git
cd JEE-Physics-Short-Notes

# Option 1: Python
python -m http.server 8000

# Option 2: Node
npx serve .
```

Then open `http://localhost:8000`.

## ☁️ Deployment

Deployed as static assets on **Cloudflare Workers**:

```bash
npx wrangler deploy
```

## 🛠️ Built With

- HTML / CSS / JavaScript
- [KaTeX](https://katex.org/) for formula typesetting
- [Inter](https://rsms.me/inter/) typeface
- Cloudflare Workers (hosting)

## 🔗 Related

- [JEE Maths Short Notes](https://jeemathsshortnotes.aarushoberoi.workers.dev)
- [JEE Formula Sheet](https://jee-formula-sheet.aarushoberoi.workers.dev)

## 🤝 Contributing

Found a typo or a wrong formula? Contributions are welcome:

1. Fork the repository
2. Create a branch: `git checkout -b fix/chapter-name`
3. Commit your changes and open a pull request

## ⚠️ Disclaimer

These are unofficial study notes. Chapter weightage labels are indicative, based on JEE Main trends. Always cross-check with your textbooks and the official NTA syllabus.

## 👤 Author

Made by [Aarush Oberoi](https://github.com/AarushOberoi)
