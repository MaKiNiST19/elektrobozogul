export interface Bezirk {
  plz: string;
  slug: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
  neighborhoods: string[];
  keywords: string[];
  description: string;
}

export const BEZIRKE: Bezirk[] = [
  {
    plz: "1010", slug: "1010-innere-stadt", name: "Innere Stadt", shortName: "1. Bezirk",
    lat: 48.2093, lng: 16.3725,
    neighborhoods: ["Bermuda Dreieck", "Graben", "Kärntner Straße", "Am Hof", "Judenplatz", "Schottengasse", "Wollzeile"],
    keywords: ["Elektriker Innere Stadt", "Elektriker 1010 Wien", "Elektroinstallation Stephansplatz", "Elektriker Altbau 1. Bezirk Wien"],
    description: "Als Elektriker im 1. Bezirk kennen wir die historischen Altbauten rund um den Stephansplatz und Graben genau. Denkmalschutz und moderne Elektrotechnik sind bei uns kein Widerspruch."
  },
  {
    plz: "1020", slug: "1020-leopoldstadt", name: "Leopoldstadt", shortName: "2. Bezirk",
    lat: 48.2214, lng: 16.3913,
    neighborhoods: ["Prater", "Karmelitermarkt", "Augarten", "Heinestraße", "Nordbahnhof Viertel", "Taborstraße", "Mexikoplatz"],
    keywords: ["Elektriker Leopoldstadt", "Elektriker 1020 Wien", "Elektroinstallation Prater", "Elektriker 2. Bezirk Wien"],
    description: "Im 2. Bezirk – vom Karmelitermarkt bis zum Nordbahnhof Viertel – bieten wir rasche Elektroinstallation für Altbau, Gastronomie und Neubauprojekte."
  },
  {
    plz: "1030", slug: "1030-landstrasse", name: "Landstraße", shortName: "3. Bezirk",
    lat: 48.1991, lng: 16.3896,
    neighborhoods: ["Erdberg", "Schlachthausgasse", "Rennweg", "Fasangasse", "Botanischer Garten", "Weißgerberviertel"],
    keywords: ["Elektriker Landstraße", "Elektriker 1030 Wien", "Elektroinstallation 3. Bezirk", "Elektriker Erdberg Wien"],
    description: "Elektriker im 3. Bezirk Wien – von der Landstraßer Hauptstraße über Erdberg bis zum Rennweg für alle Elektroarbeiten in Wohn- und Gewerbeobjekten."
  },
  {
    plz: "1040", slug: "1040-wieden", name: "Wieden", shortName: "4. Bezirk",
    lat: 48.1955, lng: 16.3680,
    neighborhoods: ["Naschmarkt", "Theresianumgasse", "Favoritenstraße", "Paulanergasse", "Schikanedergasse"],
    keywords: ["Elektriker Wieden", "Elektriker 1040 Wien", "Elektroinstallation Naschmarkt", "Elektriker 4. Bezirk Wien"],
    description: "Elektriker im 4. Bezirk Wieden – rund um den Naschmarkt und die Theresianumgasse erledigen wir alle Elektroarbeiten verlässlich und zügig."
  },
  {
    plz: "1050", slug: "1050-margareten", name: "Margareten", shortName: "5. Bezirk",
    lat: 48.1879, lng: 16.3558,
    neighborhoods: ["Reinprechtsdorfer Straße", "Stiegergasse", "Bacherplatz", "Pilgramgasse", "Margaretengürtel"],
    keywords: ["Elektriker Margareten", "Elektriker 1050 Wien", "Elektroinstallation 5. Bezirk", "Elektriker Bacherplatz Wien"],
    description: "Elektriker im 5. Bezirk Margareten – Altbausanierung, Gewerbeanlagen und moderne Beleuchtungslösungen rund um die Reinprechtsdorfer Straße."
  },
  {
    plz: "1060", slug: "1060-mariahilf", name: "Mariahilf", shortName: "6. Bezirk",
    lat: 48.1970, lng: 16.3538,
    neighborhoods: ["Mariahilfer Straße", "Webgasse", "Liniengasse", "Gumpendorfer Straße", "Esterhazygasse"],
    keywords: ["Elektriker Mariahilf", "Elektriker 1060 Wien", "Elektroinstallation Mariahilfer Straße", "Elektriker 6. Bezirk Wien"],
    description: "Elektriker im 6. Bezirk Wien – entlang der Mariahilfer Straße und im Grätzl für Handel, Gastronomie und Wohnhäuser."
  },
  {
    plz: "1070", slug: "1070-neubau", name: "Neubau", shortName: "7. Bezirk",
    lat: 48.2027, lng: 16.3496,
    neighborhoods: ["Spittelberg", "Burggasse", "Westbahnstraße", "Siebensterngasse", "Kirchengasse"],
    keywords: ["Elektriker Neubau", "Elektriker 1070 Wien", "Elektroinstallation Spittelberg", "Elektriker 7. Bezirk Wien"],
    description: "Im 7. Bezirk Wien – rund um Spittelberg und Burggasse – installieren wir Beleuchtung für Geschäfte, Galerien und Wohnungen im kreativen Grätzl."
  },
  {
    plz: "1080", slug: "1080-josefstadt", name: "Josefstadt", shortName: "8. Bezirk",
    lat: 48.2107, lng: 16.3479,
    neighborhoods: ["Laudongasse", "Florianigasse", "Josefstädter Straße", "Piaristengasse", "Albertgasse"],
    keywords: ["Elektriker Josefstadt", "Elektriker 1080 Wien", "Elektroinstallation 8. Bezirk", "Elektriker Josefstädter Straße"],
    description: "Elektriker im 8. Bezirk Josefstadt – Altbauten, Büros und das Grätzl rund um die Josefstädter Straße gehören zu unserem täglichen Einsatzgebiet."
  },
  {
    plz: "1090", slug: "1090-alsergrund", name: "Alsergrund", shortName: "9. Bezirk",
    lat: 48.2225, lng: 16.3582,
    neighborhoods: ["Währinger Straße", "Spitalgasse", "Volksoper", "Liechtensteinstraße", "Alser Straße"],
    keywords: ["Elektriker Alsergrund", "Elektriker 1090 Wien", "Elektroinstallation 9. Bezirk", "Elektriker Volksoper Wien"],
    description: "Elektriker im 9. Bezirk Alsergrund – Universitätsviertel, Kliniken und Gründerzeit-Zinshäuser zwischen Alser Straße und Volksoper."
  },
  {
    plz: "1100", slug: "1100-favoriten", name: "Favoriten", shortName: "10. Bezirk",
    lat: 48.1706, lng: 16.3727,
    neighborhoods: ["Reumannplatz", "Quellenstraße", "Keplerplatz", "Absberggasse", "Laaer Berg", "Oberlaa", "Inzersdorf", "Gudrunstraße", "Sonnwendviertel"],
    keywords: ["Elektriker Favoriten", "Elektriker 1100 Wien", "Elektroinstallation Favoriten", "Elektriker 10. Bezirk Wien", "Notfall Elektriker Favoriten", "Elektriker Reumannplatz"],
    description: "Favoriten ist der bevölkerungsreichste Bezirk Wiens – vom Reumannplatz bis Oberlaa sind wir als lokaler Elektriker für Altbau, Neubau und Gewerbeobjekte vor Ort."
  },
  {
    plz: "1110", slug: "1110-simmering", name: "Simmering", shortName: "11. Bezirk",
    lat: 48.1700, lng: 16.4200,
    neighborhoods: ["Enkplatz", "Kaiserebersdorf", "Gasometer City", "Simmeringer Hauptstraße", "Fickeysstraße"],
    keywords: ["Elektriker Simmering", "Elektriker 1110 Wien", "Elektroinstallation Simmering", "Elektriker Gasometer Wien"],
    description: "Elektriker im 11. Bezirk Simmering – Gewerbegebiet, Gasometer City und Wohnviertel in Kaiserebersdorf sind unser vertrautes Terrain."
  },
  {
    plz: "1120", slug: "1120-meidling", name: "Meidling", shortName: "12. Bezirk",
    lat: 48.1758, lng: 16.3323,
    neighborhoods: ["Meidlinger Hauptstraße", "Am Schöpfwerk", "Längenfeldgasse", "Niederhofstraße", "Wilhelmsdorf"],
    keywords: ["Elektriker Meidling", "Elektriker 1120 Wien", "Elektroinstallation 12. Bezirk", "Elektriker Meidlinger Hauptstraße"],
    description: "Elektriker im 12. Bezirk Meidling – von der Meidlinger Hauptstraße bis zur Wohnhausanlage Am Schöpfwerk für Wohnbau und Gewerbebetriebe."
  },
  {
    plz: "1130", slug: "1130-hietzing", name: "Hietzing", shortName: "13. Bezirk",
    lat: 48.1842, lng: 16.2980,
    neighborhoods: ["Schönbrunn", "Auhof", "Ober Sankt Veit", "Unter Sankt Veit", "Lainz", "Hacking"],
    keywords: ["Elektriker Hietzing", "Elektriker 1130 Wien", "Smart Home Hietzing Wien", "Elektriker Schönbrunn Umgebung"],
    description: "Elektriker im 13. Bezirk Hietzing – Villen, Einfamilienhäuser und Altbauten rund um Schönbrunn und Ober Sankt Veit mit Smart-Home-Expertise."
  },
  {
    plz: "1140", slug: "1140-penzing", name: "Penzing", shortName: "14. Bezirk",
    lat: 48.2013, lng: 16.2864,
    neighborhoods: ["Breitensee", "Baumgarten", "Hütteldorf", "Linzer Straße", "Hadersdorf"],
    keywords: ["Elektriker Penzing", "Elektriker 1140 Wien", "Elektroinstallation 14. Bezirk", "Elektriker Hütteldorf Wien"],
    description: "Elektriker im 14. Bezirk Penzing – von Breitensee bis Hütteldorf für alle Elektroarbeiten in Wohn- und Gewerbegebäuden."
  },
  {
    plz: "1150", slug: "1150-rudolfsheim", name: "Rudolfsheim-Fünfhaus", shortName: "15. Bezirk",
    lat: 48.1965, lng: 16.3274,
    neighborhoods: ["Mariahilfer Gürtel", "Gasgasse", "Reindorfgasse", "Schwendergasse", "Rosinagasse"],
    keywords: ["Elektriker Rudolfsheim", "Elektriker 1150 Wien", "Elektroinstallation Fünfhaus", "Elektriker 15. Bezirk Wien"],
    description: "Elektriker im 15. Bezirk Rudolfsheim-Fünfhaus – dichtes Grätzl, viele Altbauten und Gewerbeflächen am Mariahilfer Gürtel."
  },
  {
    plz: "1160", slug: "1160-ottakring", name: "Ottakring", shortName: "16. Bezirk",
    lat: 48.2117, lng: 16.3143,
    neighborhoods: ["Ottakringer Straße", "Brunnenmarkt", "Thaliastraße", "Hasnerstraße", "Wilhelminenberg"],
    keywords: ["Elektriker Ottakring", "Elektriker 1160 Wien", "Elektroinstallation Brunnenmarkt", "Elektriker 16. Bezirk Wien"],
    description: "Elektriker im 16. Bezirk Ottakring – vom lebhaften Brunnenmarkt bis zum Wilhelminenberg für Wohnen, Gastronomie und Handel."
  },
  {
    plz: "1170", slug: "1170-hernals", name: "Hernals", shortName: "17. Bezirk",
    lat: 48.2205, lng: 16.2988,
    neighborhoods: ["Hernalser Hauptstraße", "Jörgerstraße", "Kalvarienberg", "Rosensteingasse", "Dornbach"],
    keywords: ["Elektriker Hernals", "Elektriker 1170 Wien", "Elektroinstallation 17. Bezirk", "Elektriker Dornbach Wien"],
    description: "Elektriker im 17. Bezirk Hernals – von der Hernalser Hauptstraße bis Dornbach für Altbau-Sanierungen und Neuinstallationen."
  },
  {
    plz: "1180", slug: "1180-waehring", name: "Währing", shortName: "18. Bezirk",
    lat: 48.2307, lng: 16.3244,
    neighborhoods: ["Gersthof", "Währinger Straße", "Volksoper", "Kutschkermarkt", "Sternwartepark"],
    keywords: ["Elektriker Währing", "Elektriker 1180 Wien", "Elektroinstallation Gersthof", "Smart Home Währing Wien"],
    description: "Elektriker im 18. Bezirk Währing – gehobenes Wohnviertel rund um Gersthof und Kutschkermarkt mit Fokus auf Smart Home und Qualitätsinstallationen."
  },
  {
    plz: "1190", slug: "1190-doebling", name: "Döbling", shortName: "19. Bezirk",
    lat: 48.2499, lng: 16.3425,
    neighborhoods: ["Heiligenstadt", "Grinzing", "Sievering", "Nußdorf", "Kahlenbergerdorf", "Oberdöbling"],
    keywords: ["Elektriker Döbling", "Elektriker 1190 Wien", "Smart Home Döbling Wien", "Elektriker Grinzing", "KNX Döbling Wien"],
    description: "Elektriker im 19. Bezirk Döbling – exklusives Villenviertel zwischen Heiligenstadt und Grinzing mit Premium-Installationen und KNX-Smart-Home."
  },
  {
    plz: "1200", slug: "1200-brigittenau", name: "Brigittenau", shortName: "20. Bezirk",
    lat: 48.2381, lng: 16.3741,
    neighborhoods: ["Dresdner Straße", "Wallensteinplatz", "Meldemannstraße", "Marchfeldkanal", "Handelskai"],
    keywords: ["Elektriker Brigittenau", "Elektriker 1200 Wien", "Elektroinstallation 20. Bezirk", "Elektriker Wallensteinplatz"],
    description: "Elektriker im 20. Bezirk Brigittenau – vom Wallensteinplatz bis zum Handelskai für Wohnbau, Büros und Gewerbeanlagen."
  },
  {
    plz: "1210", slug: "1210-floridsdorf", name: "Floridsdorf", shortName: "21. Bezirk",
    lat: 48.2574, lng: 16.4002,
    neighborhoods: ["Floridsdorfer Hauptstraße", "Strebersdorf", "Stammersdorf", "Leopoldau", "Jedlersdorf"],
    keywords: ["Elektriker Floridsdorf", "Elektriker 1210 Wien", "Photovoltaik Floridsdorf Wien", "E-Auto Ladestation Floridsdorf"],
    description: "Elektriker im 21. Bezirk Floridsdorf – Einfamilienhäuser, Neubauprojekte und großzügige Dachflächen ideal für Photovoltaik und E-Ladeinfrastruktur."
  },
  {
    plz: "1220", slug: "1220-donaustadt", name: "Donaustadt", shortName: "22. Bezirk",
    lat: 48.2264, lng: 16.4620,
    neighborhoods: ["Kagran", "Aspern", "Donau City", "Seestadt Aspern", "Hirschstetten", "Stadlau"],
    keywords: ["Elektriker Donaustadt", "Elektriker 1220 Wien", "Smart Home Seestadt Wien", "Photovoltaik Donaustadt", "Elektriker Kagran"],
    description: "Elektriker im 22. Bezirk Donaustadt – Wiens Wachstumsbezirk von der Donau City bis zur Seestadt Aspern mit Smart Home und PV-Installationen."
  },
  {
    plz: "1230", slug: "1230-liesing", name: "Liesing", shortName: "23. Bezirk",
    lat: 48.1408, lng: 16.3116,
    neighborhoods: ["Liesing", "Atzgersdorf", "Mauer", "Rodaun", "Kalksburg", "Inzersdorf-Stadt"],
    keywords: ["Elektriker Liesing", "Elektriker 1230 Wien", "Photovoltaik Liesing Wien", "Wallbox Liesing", "Elektriker 23. Bezirk Wien"],
    description: "Elektriker im 23. Bezirk Liesing – Wiens südlichster Bezirk mit vielen Einfamilienhäusern, ideal für Photovoltaik, Wallbox-Montage und Smart Home."
  },
];

export const UMGEBUNG = [
  { slug: "moedling",          name: "Mödling",              plz: "2340", keywords: ["Elektriker Mödling", "Elektrotechniker Mödling NÖ"] },
  { slug: "klosterneuburg",    name: "Klosterneuburg",        plz: "3400", keywords: ["Elektriker Klosterneuburg", "Elektroinstallation Klosterneuburg"] },
  { slug: "schwechat",         name: "Schwechat",             plz: "2320", keywords: ["Elektriker Schwechat", "Elektriker Flughafen Wien Umgebung"] },
  { slug: "perchtoldsdorf",    name: "Perchtoldsdorf",        plz: "2380", keywords: ["Elektriker Perchtoldsdorf NÖ"] },
  { slug: "traiskirchen",      name: "Traiskirchen",          plz: "2514", keywords: ["Elektriker Traiskirchen NÖ"] },
  { slug: "voesendorf",        name: "Vösendorf",             plz: "2331", keywords: ["Elektriker Vösendorf", "Elektriker SCS Umgebung"] },
  { slug: "brunn-am-gebirge",  name: "Brunn am Gebirge",      plz: "2345", keywords: ["Elektriker Brunn am Gebirge NÖ"] },
  { slug: "laxenburg",         name: "Laxenburg",             plz: "2361", keywords: ["Elektriker Laxenburg NÖ"] },
  { slug: "maria-enzersdorf",  name: "Maria Enzersdorf",      plz: "2344", keywords: ["Elektriker Maria Enzersdorf"] },
  { slug: "guntramsdorf",      name: "Guntramsdorf",          plz: "2353", keywords: ["Elektriker Guntramsdorf NÖ"] },
  { slug: "ebergassing",       name: "Ebergassing",           plz: "2435", keywords: ["Elektriker Ebergassing NÖ"] },
  { slug: "himberg",           name: "Himberg bei Wien",      plz: "2325", keywords: ["Elektriker Himberg bei Wien"] },
  { slug: "leopoldsdorf",      name: "Leopoldsdorf bei Wien", plz: "2333", keywords: ["Elektriker Leopoldsdorf bei Wien NÖ"] },
  { slug: "pressbaum",         name: "Pressbaum",             plz: "3021", keywords: ["Elektriker Pressbaum NÖ"] },
  { slug: "baden",             name: "Baden bei Wien",        plz: "2500", keywords: ["Elektriker Baden bei Wien", "Elektriker Baden NÖ"] },
];
