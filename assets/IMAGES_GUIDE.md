# 📸 Guida alle Immagini

## 🎨 Immagini dei Progetti

### Dove inserirle
Inserisci le immagini dei progetti nella cartella:
```
assets/projects/
```

### Come chiamarle
- **Diary Ally**: `diary-ally.jpg`
- **GrowIN**: `growin.jpg`
- **Emerals**: `emerals.jpg`

### Dimensioni consigliate
- **Larghezza**: 700-1000px
- **Altezza**: 400-600px
- **Aspect Ratio**: 16:9 o 3:2
- **Formato**: JPG o PNG
- **Peso**: Max 500KB (comprimi se necessario)

### Suggerimenti
- Usa immagini di alta qualità ma ottimizzate per il web
- Puoi usare screenshot dell'app, mockup, o immagini rappresentative
- Considera di aggiungere un overlay o filtro per uniformare lo stile
- Strumenti consigliati per ottimizzare: TinyPNG, Squoosh.app

---

## 🎓 Loghi delle Certificazioni

### Dove inserirli
Inserisci i loghi degli enti certificanti nella cartella:
```
assets/certifications/
```

### Come chiamarli
Per ora tutte le certificazioni sono di H-Farm College, quindi serve solo:
- **H-Farm College**: `hfarm.png`

Se in futuro aggiungi altre certificazioni, usa nomi descrittivi:
- Es: `google.png`, `meta.png`, `coursera.png`, etc.

### Dimensioni consigliate
- **Larghezza**: 200-400px
- **Altezza**: 200-400px (quadrato preferito)
- **Formato**: PNG con trasparenza
- **Peso**: Max 100KB

### Suggerimenti
- Usa PNG con sfondo trasparente quando possibile
- Il logo verrà visualizzato in un quadrato di 80x80px
- Mantieni proporzioni 1:1 (quadrato) per miglior risultato
- Scarica i loghi ufficiali dai siti degli enti certificanti

---

## 🖼️ Immagine Profilo

### Dove inserirla
```
assets/profile.png
```

### Dimensioni consigliate
- **Larghezza e Altezza**: 500x500px (quadrata)
- **Formato**: PNG o JPG
- **Peso**: Max 200KB

---

## 📝 Note Importanti

1. **Nomi file**: Usa sempre minuscole e trattini `-` invece di spazi
2. **Formati**: Preferisci JPG per foto e PNG per loghi
3. **Ottimizzazione**: Comprimi sempre le immagini prima di caricarle
4. **Fallback**: Se un'immagine non viene trovata, verrà mostrato un placeholder con gradiente
5. **Git**: Assicurati di fare `git add assets/` per includere le nuove immagini

---

## 🔄 Aggiungere Nuovi Progetti

Per aggiungere un nuovo progetto con immagine:

1. Aggiungi l'immagine in `assets/projects/nome-progetto.jpg`
2. Modifica `js/data.js` nella sezione `projects`:
```javascript
{
    title: "Nome Progetto",
    description: "Descrizione del progetto...",
    image: "assets/projects/nome-progetto.jpg",
    status: "In Sviluppo", // o "Completato"
    technologies: ["Tech1", "Tech2"],
    links: [
        { type: "website", url: "https://..." }
        // oppure { type: "github", url: "https://github.com/..." }
        // oppure lascia [] per nessun link
    ]
}
```

---

## 🆕 Aggiungere Nuove Certificazioni

Per aggiungere una nuova certificazione:

1. Aggiungi il logo in `assets/certifications/nome-ente.png`
2. Modifica `js/data.js` nella sezione `certifications`:
```javascript
{
    name: "Nome Certificazione",
    issuer: "Nome Ente",
    logo: "assets/certifications/nome-ente.png"
}
```

---

## 🎯 Checklist Post-Upload

- [ ] Tutte le immagini sono state caricate nelle cartelle corrette?
- [ ] I nomi dei file corrispondono a quelli in `data.js`?
- [ ] Le immagini sono ottimizzate (<500KB per progetti, <100KB per loghi)?
- [ ] Hai testato il sito in locale per verificare che le immagini si carichino?
- [ ] Hai fatto commit e push su GitHub?

---

**Buon lavoro! 🚀**
