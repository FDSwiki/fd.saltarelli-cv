# 🚀 Quick Start Guide

Guida rapida per mettere online il tuo CV in 5 minuti!

## ✅ Checklist Veloce

### 1️⃣ Personalizza i Dati (2 minuti)

Apri `js/data.js` e modifica:

```javascript
// ✏️ Cambia queste informazioni con le tue
const cvData = {
    personal: {
        name: "Il Tuo Nome",
        email: "tua@email.com",
        linkedin: "tuo-username",
        github: "tuousername"
    },
    // ... resto dei dati
};
```

### 2️⃣ Aggiungi la Foto (30 secondi)

1. Rinomina la tua foto in `profile.jpg`
2. Mettila nella cartella `assets/`
3. ✅ Fatto!

### 3️⃣ Verifica il PDF (30 secondi)

Il file PDF del tuo CV dovrebbe già essere nella root:
- ✅ `Francesco Domenico Saltarelli CV.pdf`

Se vuoi cambiare nome, aggiorna anche `index.html`:
```html
<a href="TUO-NOME-CV.pdf" download>
```

### 4️⃣ Testa in Locale (30 secondi)

Opzione 1 - Doppio click:
```
Apri index.html nel browser
```

Opzione 2 - Server locale:
```bash
# Python
python -m http.server 8000

# Node
npx serve

# Poi apri: http://localhost:8000
```

### 5️⃣ Pubblica su GitHub Pages (1 minuto)

```bash
# Se non hai ancora inizializzato git
git init
git add .
git commit -m "🎉 Il mio CV è pronto!"

# Crea il repo su GitHub e pusha
git remote add origin https://github.com/tuousername/tuorepo.git
git branch -M main
git push -u origin main

# Vai su GitHub.com → Settings → Pages → Abilita
```

🎉 **Il tuo sito sarà live in ~30 secondi!**

URL: `https://tuousername.github.io/tuorepo/`

---

## 🎨 Personalizzazioni Rapide

### Cambia Colori

`styles/main.css` → Cerca `:root` e modifica:

```css
:root {
    --color-primary: #6366f1;    /* 👈 Cambia questo */
    --color-secondary: #8b5cf6;  /* 👈 E questo */
}
```

### Rimuovi/Aggiungi Sezioni

`index.html` → Commenta/rimuovi la sezione:

```html
<!-- Commenta così per nascondere una sezione
<section id="projects">
    ...
</section>
-->
```

### Cambia Statistiche Hero

`index.html` → Cerca `.hero-stats` e modifica:

```html
<div class="stat-item">
    <div class="stat-value">5+</div>
    <div class="stat-label">Anni di Esperienza</div>
</div>
```

---

## 🐛 Problemi Comuni

### ❌ "La foto non si vede"
- ✅ Controlla che sia in `assets/profile.jpg`
- ✅ Refresh forzato: Cmd+Shift+R (Mac) o Ctrl+F5 (Win)

### ❌ "Il PDF non si scarica"
- ✅ Verifica che il file PDF sia nella root
- ✅ Controlla il nome file nell'HTML

### ❌ "GitHub Pages non funziona"
- ✅ Vai su Settings → Pages
- ✅ Source deve essere: `main` branch, `/ (root)` folder
- ✅ Aspetta 1-2 minuti per il deploy

---

## 📞 Hai Bisogno di Aiuto?

1. Leggi il [README.md](README.md) completo
2. Controlla [CONTRIBUTING.md](CONTRIBUTING.md) per idee
3. Guarda la console del browser (F12) per errori

---

## 🎯 Next Steps

Dopo aver pubblicato il sito:

- [ ] Condividi il link su LinkedIn
- [ ] Aggiungi il link al tuo GitHub profile
- [ ] Personalizza ulteriormente i colori
- [ ] Aggiungi più progetti
- [ ] Setup Google Analytics
- [ ] Ottimizza SEO con meta tags

---

**Congratulazioni! 🎉**

Il tuo CV è online e ha un aspetto professionale!

Made with ❤️ by Francesco Domenico Saltarelli
