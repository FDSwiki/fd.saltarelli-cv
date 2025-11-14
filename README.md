# 🎨 Francesco Domenico Saltarelli - CV Website

Sito web professionale per curriculum vitae, progettato per essere pubblicato su GitHub Pages.

## ✨ Caratteristiche

- **Design Moderno**: UI contemporanea con gradient animati e effetti visuali
- **Completamente Responsive**: Ottimizzato per desktop, tablet e mobile
- **Animazioni Fluide**: Scroll animations, parallax effects e transizioni smooth
- **Performance**: Codice ottimizzato, niente framework pesanti
- **GitHub Pages Ready**: Pronto per il deployment immediato

## 🚀 Quick Start

### 1. Personalizza i Dati

Modifica il file `js/data.js` per inserire le tue informazioni:

```javascript
const cvData = {
    personal: { ... },      // Info personali
    experience: [ ... ],    // Esperienze lavorative
    education: [ ... ],     // Formazione
    skills: { ... },        // Competenze tecniche
    projects: [ ... ]       // Progetti in evidenza
};
```

### 2. Aggiungi la Tua Foto

1. Posiziona la tua foto profilo in `assets/profile.jpg`
2. Dimensioni consigliate: 500x500px (quadrata)
3. Formato: JPG o PNG, max 500KB

### 3. Aggiungi il PDF del CV

Inserisci il file PDF del tuo curriculum nella root del progetto con il nome che hai specificato nell'HTML (es. `Francesco Domenico Saltarelli CV.pdf`)

### 4. Testa in Locale

Apri semplicemente `index.html` nel browser, oppure usa un server locale:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Visita: `http://localhost:8000`

## 📦 Struttura del Progetto

```
fd.saltarelli-cv/
├── index.html                    # Pagina principale
├── assets/                       # Risorse grafiche
│   ├── profile.jpg              # Foto profilo
│   └── README.md                # Istruzioni per assets
├── styles/                       # Fogli di stile CSS
│   ├── main.css                 # Stili base e variabili
│   ├── header.css               # Stili per header/hero
│   ├── sections.css             # Stili per sezioni
│   ├── animations.css           # Animazioni e transizioni
│   └── responsive.css           # Media queries
├── js/                          # JavaScript
│   ├── data.js                  # Dati del CV
│   ├── animations.js            # Classi per animazioni
│   └── main.js                  # Logica principale
├── Francesco Domenico Saltarelli CV.pdf  # CV in PDF
└── README.md                    # Questo file
```

## 🌐 Deployment su GitHub Pages

### Metodo 1: Via GitHub.com (Più Semplice)

1. Crea un nuovo repository su GitHub
2. Pusha tutto il codice:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. Vai su **Settings** → **Pages**
4. In "Source", seleziona `main` branch e cartella `/ (root)`
5. Clicca **Save**
6. Il sito sarà disponibile su: `https://tuousername.github.io/fd.saltarelli-cv/`

### Metodo 2: Con GitHub CLI

```bash
gh repo create fd.saltarelli-cv --public --source=. --remote=origin
git add .
git commit -m "Initial commit"
git push origin main
gh browse --settings
# Abilita Pages nelle impostazioni
```

### Custom Domain (Opzionale)

1. Aggiungi un file `CNAME` nella root con il tuo dominio:
   ```
   cv.tuodominio.com
   ```
2. Configura il DNS del tuo dominio:
   ```
   Type: CNAME
   Name: cv
   Value: tuousername.github.io
   ```

## 🎨 Personalizzazione

### Colori

Modifica le variabili CSS in `styles/main.css`:

```css
:root {
    --color-primary: #6366f1;      /* Colore primario */
    --color-secondary: #8b5cf6;    /* Colore secondario */
    --color-accent: #ec4899;       /* Colore accent */
    --color-bg: #0a0a0f;          /* Background */
}
```

### Font

I font utilizzati sono Google Fonts (già inclusi):
- **Inter**: Font principale
- **Space Grotesk**: Titoli e display text

Per cambiarli, modifica il link nel `<head>` di `index.html` e le variabili in CSS.

### Sezioni

Per aggiungere o rimuovere sezioni:
1. Modifica la struttura HTML in `index.html`
2. Aggiungi i dati corrispondenti in `js/data.js`
3. Crea la logica di popolamento in `js/main.js`

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Markup semantico
- **CSS3**: Variabili CSS, Flexbox, Grid, Animations
- **JavaScript (Vanilla)**: Nessun framework, solo JS puro
- **Google Fonts**: Inter & Space Grotesk
- **SVG**: Icone e elementi grafici

## 📱 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers

## 🔧 Troubleshooting

### La foto profilo non si carica

- Verifica che il file sia in `assets/profile.jpg` (o `.png`)
- Controlla le dimensioni del file (max 500KB consigliati)
- Se manca, verrà mostrato un placeholder con le iniziali

### Le animazioni non funzionano

- Assicurati che JavaScript sia abilitato nel browser
- Verifica la console per eventuali errori
- Controlla che tutti i file JS siano caricati correttamente

### Il CV PDF non si scarica

- Verifica che il file PDF sia nella root del progetto
- Controlla che il nome file nell'HTML corrisponda al nome effettivo
- Su GitHub Pages, verifica che il file sia stato committato

### Gli stili non vengono applicati

- Verifica che tutti i file CSS siano nella cartella `styles/`
- Controlla i path nel `<head>` di `index.html`
- Usa gli strumenti di sviluppo del browser (F12) per debug

## 📝 To-Do / Migliorie Future

- [ ] Tema chiaro/scuro toggle
- [ ] Multilingua (IT/EN)
- [ ] Form di contatto funzionante
- [ ] Blog section
- [ ] Analytics integration
- [ ] PWA support

## 📄 Licenza

Questo progetto è creato per uso personale. Sentiti libero di usarlo come template per il tuo CV!

## 👨‍💻 Autore

**Francesco Domenico Saltarelli**
- Email: fdsaltarelli@gmail.com
- LinkedIn: [francesco-saltarelli](https://linkedin.com/in/francesco-saltarelli)
- GitHub: [@FDSwiki](https://github.com/FDSwiki)

---

⭐ Se ti è piaciuto questo template, lascia una stella su GitHub!

Made with ❤️ and ☕
curriculum 
