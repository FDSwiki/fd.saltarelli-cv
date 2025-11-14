# 🧪 Testing Guide

Guida per testare il sito prima del deployment.

## 🎯 Pre-Flight Checklist

### ✅ Contenuti

- [ ] **Dati personali corretti** in `js/data.js`
  - Nome completo
  - Email funzionante
  - Link social validi
  
- [ ] **Foto profilo presente**
  - File: `assets/profile.jpg`
  - Dimensioni: 500x500px (circa)
  - Peso: < 500KB
  
- [ ] **CV PDF disponibile**
  - Nome file corretto nell'HTML
  - File presente nella root
  - Dimensione ragionevole (< 5MB)

### ✅ Funzionalità

- [ ] **Navigazione**
  - Tutti i link del menu funzionano
  - Smooth scroll attivo
  - Menu mobile si apre/chiude
  
- [ ] **Download CV**
  - Pulsante "Scarica CV" funziona
  - File scaricato correttamente
  
- [ ] **Link esterni**
  - Email apre client di posta
  - LinkedIn si apre in nuova tab
  - GitHub si apre in nuova tab
  
- [ ] **Animazioni**
  - Elementi appaiono scrollando
  - Skill bars si riempiono
  - Hover effects funzionano

### ✅ Responsive

Testa su diverse dimensioni:

- [ ] **Desktop** (1920x1080)
  - Layout corretto
  - Tutti gli elementi visibili
  - Parallax funziona
  
- [ ] **Laptop** (1366x768)
  - Nessun overflow
  - Testo leggibile
  
- [ ] **Tablet** (768x1024)
  - Timeline mobile
  - Menu hamburger
  - Cards in colonna
  
- [ ] **Mobile** (375x667)
  - Menu hamburger funziona
  - Font size appropriato
  - Tutte le sezioni accessibili
  - Pulsanti cliccabili

### ✅ Browser Compatibility

Testa su:

- [ ] **Chrome** (ultima versione)
- [ ] **Firefox** (ultima versione)
- [ ] **Safari** (ultima versione)
- [ ] **Edge** (ultima versione)
- [ ] **Mobile Safari** (iOS)
- [ ] **Chrome Mobile** (Android)

### ✅ Performance

- [ ] **Caricamento veloce** (< 3 secondi)
- [ ] **Nessun lag** durante scroll
- [ ] **Animazioni fluide** (60fps)
- [ ] **Console pulita** (no errori)

### ✅ SEO & Accessibility

- [ ] **Title tag** presente e descrittivo
- [ ] **Meta description** presente
- [ ] **Alt text** per immagini
- [ ] **Heading hierarchy** corretta (h1, h2, h3)
- [ ] **Focus states** visibili
- [ ] **Keyboard navigation** funzionante

---

## 🔍 Come Testare

### 1. Test Locale Base

```bash
# Apri il file HTML direttamente
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### 2. Test con Server Locale

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000

# Apri: http://localhost:8000
```

### 3. Test Responsive

**Usando DevTools:**
1. Apri il sito in Chrome
2. Premi `F12` o `Cmd+Opt+I` (Mac)
3. Click sull'icona device toolbar (📱)
4. Testa diverse dimensioni:
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - iPad (768x1024)
   - Desktop (1920x1080)

**Usando BrowserStack (opzionale):**
- Vai su [BrowserStack](https://www.browserstack.com/)
- Test gratuito su device reali

### 4. Test Performance

**Lighthouse (Chrome DevTools):**
1. Apri DevTools (F12)
2. Tab "Lighthouse"
3. Click "Generate report"
4. Obiettivi:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

**PageSpeed Insights:**
1. Vai su [PageSpeed Insights](https://pagespeed.web.dev/)
2. Inserisci l'URL (dopo deploy)
3. Analizza risultati

### 5. Test Cross-Browser

**Manuale:**
- Apri in Chrome, Firefox, Safari, Edge
- Verifica che tutto funzioni

**Automatico (opzionale):**
```bash
# Install BrowserSync
npm install -g browser-sync

# Run
browser-sync start --server --files "**/*"
```

### 6. Test Accessibility

**Wave Tool:**
1. Vai su [Wave](https://wave.webaim.org/)
2. Inserisci l'URL
3. Correggi eventuali errori

**Keyboard Navigation:**
- Usa solo `Tab` per navigare
- Verifica che tutto sia accessibile
- `Enter` deve attivare link/pulsanti

### 7. Test Console

Apri la console e verifica:
- ✅ Nessun errore rosso
- ✅ Nessun warning critico
- ⚠️ Warning minori OK

### 8. Test Link

**Manuale:**
- Click su ogni link
- Verifica che funzioni
- Email deve aprire client
- Social in nuova tab

**Automatico (opzionale):**
```bash
# Install broken-link-checker
npm install -g broken-link-checker

# Check
blc http://localhost:8000 -ro
```

---

## 🐛 Common Issues & Fixes

### Issue: Foto non caricata
**Fix:**
- Verifica path: `assets/profile.jpg`
- Controlla nome file (case sensitive)
- Refresh cache: Cmd+Shift+R

### Issue: Animazioni non funzionano
**Fix:**
- Controlla console per errori JS
- Verifica che tutti i file JS siano caricati
- Disabilita adblock temporaneamente

### Issue: Menu mobile non si chiude
**Fix:**
- Verifica JS in `js/main.js`
- Controlla event listeners
- Test in incognito mode

### Issue: Skill bars ferme a 0%
**Fix:**
- Scrolla fino alla sezione skills
- Aspetta l'animazione (Intersection Observer)
- Verifica dati in `js/data.js`

### Issue: Layout rotto su mobile
**Fix:**
- Verifica `responsive.css` caricato
- Controlla viewport meta tag
- Test con DevTools mobile

---

## 📊 Test Results Template

Usa questa checklist per tracciare i test:

```
=== TEST RESULTS ===
Date: __________
Tester: __________

FUNCTIONALITY:
[ ] Navigation: ___/5
[ ] Links: ___/5
[ ] Download CV: ___/5
[ ] Animations: ___/5

RESPONSIVE:
[ ] Desktop: ___/5
[ ] Tablet: ___/5
[ ] Mobile: ___/5

BROWSERS:
[ ] Chrome: ___/5
[ ] Firefox: ___/5
[ ] Safari: ___/5
[ ] Edge: ___/5

PERFORMANCE:
[ ] Load Time: ___ sec
[ ] Lighthouse Score: ___/100
[ ] Console Errors: ___

NOTES:
___________________
___________________
```

---

## 🚀 Ready for Deploy?

Se tutti i test passano:

1. ✅ Commit finale
2. ✅ Push to GitHub
3. ✅ Enable GitHub Pages
4. ✅ Test live URL
5. ✅ Share! 🎉

---

## 📚 Risorse Testing

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Wave Accessibility](https://wave.webaim.org/)
- [Can I Use](https://caniuse.com/)

---

**Happy Testing! 🧪**
