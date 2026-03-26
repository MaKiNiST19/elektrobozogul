
export interface Leistung {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  keywords: string[];
  fullContent?: string;
}

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "elektriker-notdienst-wien",
    title: "Elektriker Notdienst Wien",
    shortTitle: "Notdienst",
    image: "/images/leistungen/24h-Elektro-Notdienst-wien.jpg",
    description: "Rund um die Uhr Hilfe bei Stromausfall und Notfällen. Schnell, kompetent und in ganz Wien vor Ort.",
    keywords: ["24h Elektriker Wien", "Notdienst Elektriker Wien", "Stromausfall Wien", "FI-Schalter Hilfe Wien", "Kurzschluss Elektriker Wien"],
  },
  {
    slug: "elektroinstallation-wien",
    title: "Elektroinstallation Wien",
    shortTitle: "Installation",
    image: "/images/leistungen/Elektroinstallation-wien.jpg",
    description: "Fachmännische Planung und Umsetzung Ihrer Elektroanlagen for Wohnungen, Häuser und Gewerbe.",
    keywords: ["Elektriker Wien Installation", "Elektroarbeiten Wien", "Steckdosen und Schalter Wien", "Elektrik Wohnung Wien", "Elektroinstallation Altbau Wien"],
  },
  {
    slug: "e-befund-wien",
    title: "E-Befund Wien",
    shortTitle: "E-Befund",
    image: "/images/leistungen/Rechtssicherer-E-Befund-wien.jpg",
    description: "Gesetzliche Überprüfung Ihrer elektrischen Anlagen inkl. Prüfprotokoll und rechtssicherem Befund.",
    keywords: ["Elektrobefund Wien", "Anlagenprüfung Wien", "Elektroprüfung Wien", "E-Befund Wohnung Wien", "E-Befund Hausverwaltung Wien"],
  },
  {
    slug: "photovoltaik-solar-wien",
    title: "Photovoltaik & Solar Wien",
    shortTitle: "Photovoltaik",
    image: "/images/leistungen/Photovoltaik-Solar-wien.jpg",
    description: "Saubere Energie für Wien. Wir installieren Ihre PV-Anlage und kümmern uns im die Netzanmeldung.",
    keywords: ["Solar Elektriker Wien", "PV Anlage Wien", "Photovoltaik Installation Wien", "Solaranlage Wien Elektrik", "Wechselrichter Installation Wien"],
  },
  {
    slug: "beleuchtung-licht-wien",
    title: "Beleuchtung & Licht Wien",
    shortTitle: "Lichttechnik",
    image: "/images/leistungen/Beleuchtung-Licht-wien.jpg",
    description: "Individuelle Beleuchtungskonzepte für stimmungsvolle Wohnräume und funktionale Arbeitsplätze.",
    keywords: ["Lichtinstallation Wien", "Lampenmontage Wien", "LED Beleuchtung Wien", "Innenbeleuchtung Wien", "Außenbeleuchtung Wien"],
  },
  {
    slug: "e-mobilitaet-wallbox-wien",
    title: "E-Mobilität & Wallbox Wien",
    shortTitle: "E-Mobilität",
    image: "/images/leistungen/E-Mobilität-Wallbox-wien.jpg",
    description: "Installation Ihrer E-Auto Ladestation. Wallbox-Montage und Prüfung nach ÖNORM.",
    keywords: ["Wallbox Installation Wien", "E-Mobilität Wien", "Ladestation Wien", "Wallbox Elektriker Wien", "E-Auto Ladestation Wien"],
  },
  {
    slug: "smart-home-knx-wien",
    title: "Smart Home & KNX Wien",
    shortTitle: "Smart Home",
    image: "/images/leistungen/Smart-Home-KNX-wien.jpg",
    description: "Intelligente Hausautomation für Komfort und Sicherheit. KNX und moderne Systeme.",
    keywords: ["KNX Wien", "Smart Home Elektriker Wien", "Hausautomation Wien", "Lichtsteuerung Wien", "KNX Installation Wien"],
  },
  {
    slug: "service-hausverwaltungen-wien",
    title: "Service für Hausverwaltungen Wien",
    shortTitle: "Hausverwaltung",
    image: "/images/leistungen/Service-für-Hausverwaltungen-wien.jpg",
    description: "Zuverlässige Betreuung von Zinshäusern und Wohnanlagen im Bereich Elektrotechnik.",
    keywords: ["Elektroservice Hausverwaltung Wien", "Zinshaus Elektriker Wien", "Störungsdienst Hausverwaltung Wien", "Elektroprüfung Hausverwaltung Wien", "Wartung Elektroanlage Wien"],
  },
  {
    slug: "sanierung-modernisierung-wien",
    title: "Sanierung & Modernisierung Wien",
    shortTitle: "Sanierung",
    image: "/images/leistungen/Sanierung-Modernisierung-wien.jpg",
    description: "Wir bringen veraltete Elektroleitungen auf den neuesten Stand der Technik – sicher, effizient und langlebig.",
    keywords: ["Modernisierung Elektrik Wien", "Altbau Elektrik Wien", "Sicherungskasten erneuern Wien", "Elektrik erneuern Wien", "Sanierung Wohnung Wien Elektrik"],
  },

];
