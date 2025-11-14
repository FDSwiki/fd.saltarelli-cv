# 🔧 Git Commands Cheatsheet

Comandi Git utili per gestire il progetto.

## 🚀 Setup Iniziale

### Primo Commit
```bash
# Inizializza repository
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "🎉 Initial commit - CV website"

# Collega a GitHub (sostituisci USERNAME e REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push
git branch -M main
git push -u origin main
```

## 📝 Workflow Quotidiano

### Salvare Modifiche
```bash
# Vedi cosa è cambiato
git status

# Aggiungi file specifici
git add index.html
git add js/data.js
git add styles/main.css

# Oppure aggiungi tutto
git add .

# Commit con messaggio descrittivo
git commit -m "✨ Update contact information"

# Push su GitHub
git push
```

### Tipi di Commit Messages (Emoji Convention)
```bash
# Nuove features
git commit -m "✨ Add projects section"

# Bug fix
git commit -m "🐛 Fix mobile menu not closing"

# Style changes
git commit -m "💄 Update color scheme"

# Documentation
git commit -m "📝 Update README with setup guide"

# Performance
git commit -m "⚡ Optimize image loading"

# Refactoring
git commit -m "♻️ Refactor JavaScript modules"

# Configuration
git commit -m "🔧 Update GitHub Pages config"

# Deploy
git commit -m "🚀 Deploy version 1.0.0"

# Content
git commit -m "📄 Update CV content"

# Accessibility
git commit -m "♿ Improve keyboard navigation"
```

## 🌿 Branching

### Lavorare su Feature
```bash
# Crea nuovo branch per feature
git checkout -b feature/dark-mode

# Lavora sul branch...
git add .
git commit -m "✨ Add dark mode toggle"

# Torna a main
git checkout main

# Mergia feature
git merge feature/dark-mode

# Push
git push origin main

# (Opzionale) Elimina branch locale
git branch -d feature/dark-mode
```

### Branches Comuni
```bash
feature/nome-feature    # Nuove funzionalità
fix/bug-description     # Bug fix
docs/documentation      # Solo documentazione
style/ui-updates        # Modifiche UI/CSS
refactor/code-cleanup   # Refactoring
```

## 🔄 Aggiornamenti

### Pull Latest Changes
```bash
# Scarica e applica modifiche da GitHub
git pull origin main
```

### Vedi Storia
```bash
# Log compatto
git log --oneline

# Log con grafico
git log --graph --oneline --all

# Ultimi 5 commit
git log -5
```

## ↩️ Undo Changes

### Prima del Commit
```bash
# Scarta modifiche a file specifico
git checkout -- index.html

# Scarta tutte le modifiche
git checkout .

# Rimuovi file da staging
git reset HEAD index.html
```

### Dopo il Commit (locale)
```bash
# Undo ultimo commit (mantieni modifiche)
git reset --soft HEAD~1

# Undo ultimo commit (scarta modifiche)
git reset --hard HEAD~1

# Undo a commit specifico
git reset --hard abc123
```

### Dopo il Push (pubblico)
```bash
# Crea commit che inverte cambiamenti
git revert HEAD

# Revert commit specifico
git revert abc123

# Push
git push
```

## 🏷️ Tags & Releases

### Creare Release
```bash
# Tag per versione
git tag -a v1.0.0 -m "Version 1.0.0 - Initial release"

# Push tag
git push origin v1.0.0

# Push tutti i tags
git push origin --tags

# Lista tags
git tag -l
```

### Semantic Versioning
```
v1.0.0 = MAJOR.MINOR.PATCH

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes
```

## 🔍 Inspect & Compare

### Vedi Differenze
```bash
# Differenze non staged
git diff

# Differenze staged
git diff --staged

# Differenze tra commit
git diff abc123 def456

# Differenze file specifico
git diff index.html
```

### Info Repository
```bash
# Remote URLs
git remote -v

# Branch info
git branch -a

# Configurazione
git config --list
```

## 🗑️ Cleanup

### Rimuovere File
```bash
# Rimuovi file da Git (mantieni locale)
git rm --cached file.txt

# Rimuovi file da Git e disco
git rm file.txt

# Rimuovi directory
git rm -r directory/

# Commit removal
git commit -m "🗑️ Remove unused files"
git push
```

### Pulisci Repository
```bash
# Rimuovi file untracked
git clean -n  # Preview
git clean -f  # Execute

# Rimuovi anche directory
git clean -fd
```

## 🔐 GitHub Pages Specifici

### Deploy su GitHub Pages
```bash
# Assicurati di essere su main
git checkout main

# Pull latest
git pull origin main

# Commit e push
git add .
git commit -m "🚀 Deploy to GitHub Pages"
git push origin main

# GitHub Pages si aggiorna automaticamente!
# Aspetta 1-2 minuti, poi visita:
# https://USERNAME.github.io/REPO/
```

### Force Deploy
```bash
# Se GitHub Pages non si aggiorna
git commit --allow-empty -m "🔄 Force rebuild GitHub Pages"
git push
```

## 🆘 Emergency Fixes

### Fixing Mistakes

#### Cambio messaggio ultimo commit (non pushed)
```bash
git commit --amend -m "Nuovo messaggio corretto"
```

#### Ho committato sul branch sbagliato
```bash
# Su branch sbagliato
git log  # Copia hash commit (abc123)

# Vai al branch corretto
git checkout main

# Applica il commit
git cherry-pick abc123

# Torna al branch sbagliato
git checkout wrong-branch

# Undo commit
git reset --hard HEAD~1
```

#### Ho pushato cose sbagliate
```bash
# Undo locale
git reset --hard HEAD~1

# Force push (ATTENZIONE!)
git push origin main --force

# Meglio usare --force-with-lease (più sicuro)
git push origin main --force-with-lease
```

## 📊 Useful Aliases

Aggiungi al tuo `.gitconfig`:

```bash
# Crea aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'

# Uso:
git st        # invece di git status
git co main   # invece di git checkout main
git visual    # log grafico
```

## 🔗 Useful Links

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Fixing mistakes
- [Git Explorer](https://gitexplorer.com/) - Find commands
- [Conventional Commits](https://www.conventionalcommits.org/)

## 💡 Best Practices

1. ✅ **Commit spesso** - Piccoli commit sono meglio
2. ✅ **Messaggi descrittivi** - Spiega il "perché"
3. ✅ **Pull prima di push** - Evita conflitti
4. ✅ **Test prima di commit** - Verifica che funzioni
5. ✅ **Branch per feature** - Main sempre stabile
6. ✅ **Ignora file sensibili** - Usa .gitignore
7. ✅ **Tag le release** - Versioning semantico
8. ✅ **Backup regolari** - Push frequentemente

## 🎯 Quick Reference

```bash
# Most used commands
git status              # What changed?
git add .               # Stage all
git commit -m "msg"     # Commit
git push                # Push to GitHub
git pull                # Get updates
git checkout -b name    # New branch
git merge branch        # Merge branch
git log --oneline       # History
git diff                # See changes
git tag v1.0.0         # Create tag
```

---

**Happy Gitting! 🚀**
