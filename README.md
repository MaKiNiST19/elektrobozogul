# Elektro-Bozogul – Next.js SEO-Projekt

**elektro-bozogul.at** · Wien · Österreichisches Deutsch · Next.js 14 · SSG/ISR

---

## Sprache

Das gesamte Projekt verwendet **österreichisches Deutsch (de-AT)**:
- "Erdgeschoß" (nicht Erdgeschoss)
- "Objekt" (nicht Gebäude)
- "rasch" (nicht schnell, als Stilvariation)
- "Grätzl" für Stadtteil
- "Stiege" (nicht Treppenhaus)
- Österreichische Normen: ÖNORM E 8001, ÖVE-Richtlinien
- Österreichische Behörden: Wien Energie, MA 37, WKO
- Österreichische Förderungen: Klima- und Energiefonds, aws, wohnfonds_wien
- `<html lang="de-AT">`

---

## Kurz-Setup

```bash
npm install

# .env.local erstellen:
echo "ANTHROPIC_API_KEY=sk-ant-xxxx" > .env.local

# Inhalte generieren (österr. Deutsch Prompts):
npm run generate

# Entwicklungsserver:
npm run dev
# → http://localhost:3000

# Produktions-Build:
npm run build && npm run start
```

---

## Seitenstruktur

| URL | Inhalt | Priorität |
|-----|--------|-----------|
| `/` | Startseite | 1.0 |
| `/bezirke` | Alle 23 Gemeindebezirke | 0.9 |
| `/bezirke/1100-favoriten` | Bezirks-Hauptseite | 0.85 |
| `/bezirke/1100-favoriten/photovoltaik` | Bezirk × Leistung | 0.75 |
| `/leistungen/photovoltaik` | Leistungs-Hauptseite | 0.85 |
| `/notfall-elektriker` | 24-Stunden-Notdienst | 0.95 |
| `/umgebung/moedling` | Niederösterreich-Umgebung | 0.70 |

**Gesamt: 187 statische Seiten**

---

## Inhaltsgenerierung

```bash
# Alle Inhalte (23 Bezirke + 138 Kombinationen):
npm run generate

# Nur fehlende Seiten:
npm run generate:missing

# Einzelner Bezirk:
npx tsx scripts/generate-content.ts --bezirk=1100-favoriten
```

---

## Österreichische SEO-Besonderheiten

- **Wien Energie** Netzanmeldung (Photovoltaik-Seiten)
- **Klima- und Energiefonds** Förderung (Wallbox, PV)
- **ÖNORM E 8001** als Qualitätssignal auf allen Seiten
- **Befugter Gewerbebetrieb** nach österr. Gewerbeordnung
- **WKO**-Mitgliedschaft als Vertrauenssignal
- Lokale Begriffe: Grätzl, Stiege, Objekt, Hausbesorger

---

## Firma

- **Name:** Elektro-Bozogul
- **Web:** elektro-bozogul.at
- **Tel:** +43 660 1230073
- **E-Mail:** office@elektro-bozogul.at
