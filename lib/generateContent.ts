import type { Bezirk } from './bezirke';
import type { Leistung } from './leistungen';

// ============================================================
// PROMPT 1: Bezirk-Hauptseite
// ============================================================
export function buildBezirkPagePrompt(bezirk: Bezirk): string {
  return `
Du bist ein erfahrener SEO-Texter f  r einen Wiener Elektroinstallationsbetrieb.
Schreibe einzigartigen, lokal verankerten  nhalt f  r die Webseite   ber den ${bezirk.name}.

Verwende   sterreichisches Deutsch (nicht bundesdeutsches):
- "Erdgescho  " (nicht "Erdgeschoss")
- " nstallateur" / "Gewerbebetrieb" (nicht "Handwerksbetrieb")
- "Objekt" (nicht "Geb  ude" als erstes Wort)
- "J  nner" (nicht "Januar")
- "heuer" statt "dieses Jahr"
- "Stiege" (nicht "Treppenhaus")
- "Gr  tzl" f  r Stadtteil
- "rasch" statt "schnell" (manchmal)
- "Kosten" / "Aufwand" (nicht "Kosten" ausschlie  lich)
-   sterreichische Beh  rden: "Wien Energie", "MA 37 (Baupolizei)", "WKO"

F RMA:
- Name: Elektro-Bozogul
- Tel: +43 660 1230073
- E-Mail: office@elektro-bozogul.at
- Website: elektro-bozogul.at
- Befugter Gewerbebetrieb nach   sterreichischer Gewerbeordnung

BEZ RK: ${bezirk.name} (${bezirk.plz} Wien)
GR  TZL / STADTTE LE: ${bezirk.neighborhoods.join(", ")}

SEO-KEYWORDS (nat  rlich einbauen, max. 2 % Dichte):
${bezirk.keywords.join(", ")}

SCHRE BE GENAU D ESE ABSCHN TTE (Markdown, H2):

## Elektriker im ${bezirk.name}      hr lokaler Gewerbebetrieb
(120   150 W  rter. Kein "Wir sind der Beste"-Einstieg. Beschreibe den Bezirk aus
Sicht eines Elektrikers, der dort t  glich arbeitet. Lokale Landmarks, typische
Bausubstanz, Atmosph  re.)

## Gr  tzl f  r Gr  tzl: ${bezirk.name} aus Elektriker-Sicht
(180   220 W  rter. Gehe auf jeden Stadtteil ein: typische Elektro-Herausforderungen    
Altbau vs. Neubau, Gewerbeobjekt vs. Wohnung, Gr  nderzeit vs. 70er-Jahre-Bau.)

## H  ufige Fragen     Elektriker ${bezirk.name}
Exakt 3 FAQ im JSON-Format (kein Markdown):
[
  { "q": "Frage 1?", "a": "Antwort 1 (2   3 S  tze, lokal und spezifisch,   sterreichisches Deutsch)" },
  { "q": "Frage 2?", "a": "Antwort 2" },
  { "q": "Frage 3?", "a": "Antwort 3" }
]

REGELN:
1.   sterreichisches Deutsch durchgehend
2. Keine Kopie anderer Bezirksseiten
3. Lokale Details sind Pflicht
4.   sterreichische Normen erw  hnen:   NORM E 8001,   VE-Richtlinien
5.   sterreichische F  rderstellen wenn passend: aws, Klima- und Energiefonds, wohnfonds_wien
`;
}

// ============================================================
// PROMPT 2: Bezirk    Leistung Kombination
// ============================================================
export function buildBezirkLeistungPrompt(bezirk: Bezirk, leistung: Leistung): string {
  const context = getBezirkLeistungContext(bezirk, leistung);

  return `
Schreibe SEO-optimierten, E NZ GART GEN  nhalt auf   sterreichischem Deutsch f  r:
"${leistung.title} im ${bezirk.name} (${bezirk.plz} Wien)     Elektro-Bozogul"

  sterreichisches Deutsch: "Erdgescho  ", "Objekt", "rasch", "heuer", "Gr  tzl",
"Stiege", "F  rderung" (nicht "Subvention"), Beh  rden "Wien Energie", "MA 37".

LE STUNG: ${leistung.description}
BEZ RK: ${bezirk.name}     Stadtteile: ${bezirk.neighborhoods.join(", ")}
LOKALER KONTEXT: ${context}

SCHRE BE (350   400 W  rter):

## Einleitung (80   100 W  rter)
Warum ist ${leistung.shortTitle} SPEZ ELL im ${bezirk.name} relevant?

## Leistungsumfang im ${bezirk.name}
(100   120 W  rter als Flie  text, keine Aufz  hlung)

## ${bezirk.name}     Gr  tzl f  r Gr  tzl
(100   120 W  rter, auf ${bezirk.neighborhoods.slice(0,3).join(", ")} eingehen)

## N  chste Schritte
(40   50 W  rter, CTA mit +43 660 1230073)

REGELN:
1.   sterreichisches Deutsch durchgehend
2. Keine generischen Phrasen
3.   sterreichische Normen:   NORM E 8001
4. F  rderprogramme wenn relevant: Klima- und Energiefonds, aws F  rderung
`;
}

// ============================================================
// PROMPT 3: Umgebung / Nieder  sterreich
// ============================================================
export function buildUmgebungPrompt(ort: { name: string; plz: string; keywords: string[] }): string {
  return `
Schreibe SEO-optimierten  nhalt auf   sterreichischem Deutsch f  r:
"Elektriker ${ort.name} (${ort.plz})     Elektro-Bozogul Wien"

F RMA: Elektro-Bozogul, Wien, Tel +43 660 1230073
ORT: ${ort.name}, ${ort.plz} Nieder  sterreich (direkt an Wien angrenzend)
KEYWORDS: ${ort.keywords.join(", ")}

SCHRE BE (250   300 W  rter):

## Elektriker in ${ort.name}     Rasch aus Wien vor Ort
(80 W  rter: Warum Elektro-Bozogul aus Wien die richtige Wahl f  r ${ort.name}?
N  he zu Wien, typische Objekte in ${ort.name}.)

## Unsere Leistungen in ${ort.name}
(100 W  rter: Elektroinstallation, Photovoltaik, Wallbox, Smart Home    
bezogen auf typische Geb  ude in ${ort.name}.   NORM E 8001 erw  hnen.)

## Kontakt f  r ${ort.name}
(40 W  rter: CTA mit +43 660 1230073)

REGEL:   sterreichisches Deutsch, kein Copy-Paste von Wien-Seiten.
`;
}

// ============================================================
// PROMPT 4: Notfall-Elektriker Wien
// ============================================================
export const NOTFALL_PROMPT = `
Schreibe den Hauptinhalt f  r die Seite:
"Notfall-Elektriker Wien     24-Stunden-Notdienst     Elektro-Bozogul"

F RMA: Elektro-Bozogul, Wien, Tel +43 660 1230073, office@elektro-bozogul.at

  sterreichisches Deutsch: "rasch", "Objekt", "Stiege", "Erdgescho  ",
"Gemeindebezirk", "Gewerbebetrieb".

SCHRE BE (400   500 W  rter):

## Notfall-Elektriker Wien     Sofort zur Stelle
(120 W  rter: Typische Elektro-Notf  lle in Wien     Sicherung fliegt raus,
Kurzschluss, Stromausfall, defekte F -Schutzschalter. Wann ruft man an?)

##  n welchen Wiener Bezirken sind wir im Notfall erreichbar?
(100 W  rter: Alle 23 Gemeindebezirke, durchschnittliche Anfahrtszeit)

## Ablauf eines Notfalleinsatzes
(100 W  rter: Schritt f  r Schritt vom Anruf bis zur Behebung)

## H  ufige Fragen zum Notdienst
3 FAQs im JSON-Format:
[
  { "q": "...", "a": "..." },
  { "q": "...", "a": "..." },
  { "q": "...", "a": "..." }
]

REGEL: Vertrauensw  rdig und beruhigend     kein   bertriebenes Werben.
  sterreichische Normen:   VE-Richtlinien,   NORM E 8001.
`;

// ============================================================
// Lokaler Kontext-Helper (Bezirk    Leistung)
// ============================================================
function getBezirkLeistungContext(bezirk: Bezirk, leistung: Leistung): string {
  const map: Record<string, Record<string, string>> = {
    "elektroinstallation": {
      " nnere Stadt":          "Historische Substanz, Denkmalschutz, aufw  ndige Leitungsverlegung in Gr  nderzeitobjekten, enge Stiegen",
      "Leopoldstadt":          "Mix aus Altbau am Karmelitermarkt und modernem Neubau im Nordbahnhof-Viertel",
      "Favoriten":             "Bev  lkerungsreichster Bezirk     viele Altbau-Zinsh  user, aktive Geb  udesanierung, gemischte Nutzung",
      "D  bling":               "Villen und hochwertige Einfamilienh  user, anspruchsvolle  nstallationen, teils Denkmalschutz",
      "Floridsdorf":           "Viel Neubau, gro  fl  chige Wohnhausanlagen, Gewerbegebiet",
      "Donaustadt":            "Wachstumsbezirk, Neubau-Dominanz, Seestadt Aspern als Spezialfall",
      "Liesing":               "Einfamilienh  user im S  den Wiens, Eigenheime mit Garten",
    },
    "photovoltaik": {
      "Liesing":               "Optimale Flachd ä cher und Schr ä gd ä cher bei Einfamilienh ä usern, viel Sonneneinstrahlung im Sü den; Klima- und Energiefonds F ö rderung abrufbar",
      "Floridsdorf":           "Gro ß e Dachfl ä chen bei Mehrfamilienh ä usern und Gewerbeobjekten",
      "Donaustadt":            "Neubaugebiet Seestadt bietet moderne PV-Integration; F ö rderung ü ber wohnfonds_wien m ö glich",
      "Hietzing":              "Villen mit gro ß en Sü dd ä chern, hohes Budget fü r hochwertige Anlagen",
      "D ö bling":             "Steile Villend ä cher, ä sthetische Integration wichtig, Abstimmung mit Baupolizei MA 37",
    },
    "smart-home": {
      "D  bling":               "Premium-Villenviertel, KNX-Standard, Licht- und Jalousiensteuerung sehr gefragt",
      "Hietzing":              "Gehobenes Wohnviertel, hohe  nvestitionsbereitschaft in Hausautomation",
      "W  hring":               "B  rgerliches Wohnviertel, wachsende Smart-Home-Nachfrage",
      "Donaustadt":            "Seestadt als Vorzeige-Smartcity, digitale  nfrastruktur bereits vorhanden",
      " nnere Stadt":          "Luxus-Penthouse-Umbau, hochwertige B  rogeb  ude, repr  sentative L  sungen",
    },
    "e-mobilitaet": {
      "Donaustadt":            "Viele Tiefgaragen in Neubauten, Wallbox-F  rderung des Klima- und Energiefonds leicht abrufbar",
      "Floridsdorf":           "Gro  e Garagenanlagen, Gewerbeflotte auf E-Mobilit  t umstellen",
      "Liesing":               "Einfamilienh  user mit eigenem Parkplatz     ideale Voraussetzung f  r Wallbox-Montage",
      "Hietzing":              "Villen mit Garage, Premium-Wallbox-L  sungen, Marke und Optik wichtig",
    },
  };

  const leistungCtx = map[leistung.slug];
  if (leistungCtx?.[bezirk.name]) return leistungCtx[bezirk.name];
  return `Typische ${bezirk.name}-Besonderheiten: ${bezirk.description}`;
}
