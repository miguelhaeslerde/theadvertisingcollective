# GitHub Push & Cloudflare Deployment Guide

## 1. GitHub Code Push (Manuell im Replit Shell ausführen)

Da Ihr Repository bereits konfiguriert ist, führen Sie diese Befehle im Replit Shell aus:

```bash
# Git lock entfernen (falls vorhanden)
rm -f .git/index.lock

# Alle Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Complete TAC website with blog, contact forms, and legal compliance"

# Zu GitHub pushen
git push origin main
```

## 2. Cloudflare Pages Setup

### Schritt 1: Cloudflare Pages Projekt erstellen
1. Gehen Sie zu [dash.cloudflare.com](https://dash.cloudflare.com)
2. Klicken Sie "Pages" im linken Menü
3. "Create a project" → "Connect to Git"
4. Wählen Sie Ihr Repository: `miguelhaeslerde/theadvertisingcollective`

### Schritt 2: Build-Konfiguration
**Wichtige Einstellungen:**
- Framework preset: **Vite**
- Build command: **`npm run build`**
- Build output directory: **`dist/public`**
- Root directory: **`/`** (leer lassen)

### Schritt 3: Umgebungsvariablen
Fügen Sie diese in den Cloudflare Pages Einstellungen hinzu:

**Erforderlich:**
- `NODE_VERSION` = `20`
- `DATABASE_URL` = Ihre Neon PostgreSQL URL

**Optional (für Contentful Blog):**
- `VITE_CONTENTFUL_SPACE_ID` = Ihre Contentful Space ID
- `VITE_CONTENTFUL_ACCESS_TOKEN` = Ihr Contentful Access Token

## 3. Produktions-Database (Neon)

### Neue Produktionsdatenbank erstellen:
1. Gehen Sie zu [neon.tech](https://neon.tech)
2. Erstellen Sie neues Projekt: "TAC Website Production"
3. Kopieren Sie die Connection String
4. Fügen Sie sie als `DATABASE_URL` in Cloudflare Pages hinzu

### Schema zu Produktionsdatenbank pushen:
```bash
# Im Replit Shell mit neuer DATABASE_URL
npm run db:push
```

## 4. Nach dem Deployment

Ihre Website wird verfügbar sein unter:
- `https://theadvertisingcollective.pages.dev`
- Oder eine ähnliche URL, die Cloudflare generiert

### Funktionen testen:
- [ ] Website lädt korrekt
- [ ] Blog-Beiträge werden angezeigt
- [ ] Kontaktformular funktioniert
- [ ] Impressum/Datenschutz sind erreichbar
- [ ] Light/Dark Mode funktioniert

## 5. Custom Domain (Optional)

Um Ihre eigene Domain zu verwenden:
1. In Cloudflare Pages → "Custom domains"
2. Domain hinzufügen (z.B. `theadvertisingcollective.de`)
3. DNS-Einstellungen nach Anweisung konfigurieren

## Troubleshooting

**Build Fehler:** Prüfen Sie die Build-Logs in Cloudflare Pages
**Database Fehler:** Stellen Sie sicher, dass DATABASE_URL korrekt ist
**Umgebungsvariablen:** Alle erforderlichen Variablen müssen gesetzt sein

Ihr Projekt ist bereit für das Deployment!