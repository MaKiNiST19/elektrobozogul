export interface NÖLocation {
  slug: string;
  name: string;
  region: string;
  zip: string;
  description: string;
}

export const NIEDEROESTERREICH_LOCATIONS: NÖLocation[] = [
  // Süd / Südwest
  { slug: "voesendorf", name: "Vösendorf", region: "Süd / Südwest", zip: "2331", description: "Elektriker Notdienst in Vösendorf. Schnelle Hilfe bei Stromausfall und Elektroinstallationen." },
  { slug: "brunn-am-gebirge", name: "Brunn am Gebirge", region: "Süd / Südwest", zip: "2345", description: "Ihr Elektriker in Brunn am Gebirge. Professionelle Elektroinstallationen und E-Befunde." },
  { slug: "perchtoldsdorf", name: "Perchtoldsdorf", region: "Süd / Südwest", zip: "2380", description: "Elektro-Notdienst 24/7 in Perchtoldsdorf. Zertifizierte Elektrotechnik für Haushalt und Gewerbe." },
  { slug: "maria-enzersdorf", name: "Maria Enzersdorf", region: "Süd / Südwest", zip: "2344", description: "Sicher und zuverlässig: Ihr Elektriker in Maria Enzersdorf." },
  { slug: "moedling", name: "Mödling", region: "Süd / Südwest", zip: "2340", description: "Kompetente Elektrotechnik in Mödling. Notdienst, Sanierung und E-Check." },
  { slug: "gumpoldskirchen", name: "Gumpoldskirchen", region: "Süd / Südwest", zip: "2352", description: "Elektriker-Leistungen in Gumpoldskirchen. Wir sind schnell vor Ort." },
  { slug: "guntramsdorf", name: "Guntramsdorf", region: "Süd / Südwest", zip: "2353", description: "Elektrik-Probleme in Guntramsdorf? Unser Notdienst hilft sofort." },
  { slug: "laxenburg", name: "Laxenburg", region: "Süd / Südwest", zip: "2361", description: "Fachmännische Elektroinstallationen in Laxenburg." },
  { slug: "hinterbruehl", name: "Hinterbrühl", region: "Süd / Südwest", zip: "2371", description: "Ihr Elektriker-Partner in Hinterbrühl für alle Fälle." },
  { slug: "gaaden", name: "Gaaden", region: "Süd / Südwest", zip: "2531", description: "Elektro-Service in Gaaden: Zuverlässig und fair." },

  // West
  { slug: "purkersdorf", name: "Purkersdorf", region: "West", zip: "3002", description: "Elektriker Notdienst Purkersdorf. 24h erreichbar für Ihre Sicherheit." },
  { slug: "pressbaum", name: "Pressbaum", region: "West", zip: "3021", description: "Elektrotechnik in Pressbaum. Von der Steckdose bis zum E-Befund." },
  { slug: "gablitz", name: "Gablitz", region: "West", zip: "3003", description: "Ihr Fachmann für Elektroinstallationen in Gablitz." },
  { slug: "mauerbach", name: "Mauerbach", region: "West", zip: "3001", description: "Elektro-Service Mauerbach: Schnell, sauber, sicher." },
  { slug: "klosterneuburg", name: "Klosterneuburg", region: "West", zip: "3400", description: "Umfassende Elektro-Leistungen in Klosterneuburg. Notdienst rund um die Uhr." },

  // Nord / Nordost
  { slug: "gerasdorf-bei-wien", name: "Gerasdorf bei Wien", region: "Nord / Nordost", zip: "2201", description: "Elektriker in Gerasdorf. Notdienst und Installationen direkt vor den Toren Wiens." },
  { slug: "wolkersdorf-im-weinviertel", name: "Wolkersdorf im Weinviertel", region: "Nord / Nordost", zip: "2120", description: "Ihr Elektrotechnik-Experte in Wolkersdorf." },
  { slug: "korneuburg", name: "Korneuburg", region: "Nord / Nordost", zip: "2100", description: "Elektriker Notdienst Korneuburg. Wir beheben jeden Defekt schnellstmöglich." },
  { slug: "langenzersdorf", name: "Langenzersdorf", region: "Nord / Nordost", zip: "2103", description: "Professionelle Elektroarbeiten in Langenzersdorf." },
  { slug: "bisamberg", name: "Bisamberg", region: "Nord / Nordost", zip: "2102", description: "Elektro-Service Bisamberg: Wir bringen Licht ins Dunkel." },

  // Ost / Südost
  { slug: "schwechat", name: "Schwechat", region: "Ost / Südost", zip: "2320", description: "Elektriker Notdienst Schwechat. Soforthilfe bei Stromausfall und Kurzschluss." },
  { slug: "fischamend", name: "Fischamend", region: "Ost / Südost", zip: "2401", description: "Zuverlässige Elektrotechnik in Fischamend." },
  { slug: "rauchenwarth", name: "Rauchenwarth", region: "Ost / Südost", zip: "2320", description: "Ihr Elektriker in Rauchenwarth. Sicher ans Netz." },
  { slug: "himberg", name: "Himberg", region: "Ost / Südost", zip: "2325", description: "Elektroinstallationen und Reparaturen in Himberg." },
  { slug: "ebergassing", name: "Ebergassing", region: "Ost / Südost", zip: "2435", description: "Elektro-Fachbetrieb Ebergassing. Wir sind für Sie da." }
];
