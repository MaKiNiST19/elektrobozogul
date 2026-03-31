"use client";

import React, { useState } from 'react';
import { type Leistung } from '@/lib/leistungen';

interface SeoSection {
  title: string;
  content: string;
  list?: string[];
}

interface SeoData {
  mainTitle: string;
  intro: string;
  sections: SeoSection[];
  faqs: { q: string; a: string }[];
}

const SEO_CONTENT: Record<string, SeoData> = {
  "elektriker-notdienst-wien": {
    mainTitle: "24h Elektriker Notdienst Wien: Schnelle Hilfe bei Stromausfall & Defekten",
    intro: "Ein plötzlicher Stromausfall oder ein Kurzschluß kann den Alltag massiv stören oder sogar Sicherheitsrisiken bergen. Als Ihr zuverlässiger Elektriker Notdienst in Wien sind wir in allen 23 Gemeindebezirken rund um die Uhr für Sie erreichbar. Unsere erfahrenen Meistertechniker spüren Fehlerquellen präzise auf und sorgen für eine fachgerechte Instandsetzung Ihrer Elektroanlage.",
    sections: [
      {
        title: "Warum Elektro-Bozogul Ihr Retter in der Not ist",
        content: "In einem elektrischen Notfall zählt jede Minute. Wir haben unsere Einsatzfahrzeuge strategisch in Wien (von Favoriten bis Floridsdorf) positioniert, um innerhalb von 30 bis 60 Minuten bei Ihnen vor Ort zu sein. Unsere Expertise umfasst alle Arten von elektrischen Gebrechen in Wiener Alt- und Neubauten.",
        list: [
          "Soforthilfe bei Stromausfall und Sicherungsauslösung",
          "Lokalisierung und Behebung von Kurzschlüssen",
          "FI-Schalter (FI) Instandsetzung und Austausch",
          "Behebung von Brandgeruch im Sicherungskasten",
          "Reparatur von defekten Zuleitungen und Steckdosen"
        ]
      },
      {
        title: "Transparente Kosten ohne böse Überraschungen",
        content: "Wir wissen, dass viele Menschen im Notfall Angst vor überhöhten Rechnungen haben. Bei Elektro-Bozogul setzen wir auf Wiener Handschlagqualität und transparente Fixpreise. Wir kommunizieren Anfahrtspauschalen und Stundensätze bereits klar am Telefon, damit Sie genau wissen, was auf Sie zukommt."
      },
      {
        title: "Sicherheit an erster Stelle: Was Sie tun sollten",
        content: "Wenn Sie Brandgeruch bemerken oder Funken aus einer Steckdose sprühen, bewahren Sie Ruhe. Schalten Sie, sofern gefahrlos möglich, den Hauptschalter (FI) aus und berühren Sie keine metallischen Gegenstände. Rufen Sie umgehend unseren Notdienst unter +43 660 1230073 an."
      }
    ],
    faqs: [
      { q: "Wie schnell ist der Elektriker Notdienst bei mir?", a: "In der Regel sind wir innerhalb von 30 bis 60 Minuten in ganz Wien vor Ort." },
      { q: "Was kostet ein Elektriker Notdienst in Wien?", a: "Die Kosten hängen vom Zeitpunkt (Tag/Nacht/Feiertag) und dem Aufwand ab. Wir nennen Ihnen faire Fixpreise direkt bei der Anfrage." },
      { q: "Bieten Sie den Notdienst auch am Wochenende an?", a: "Ja, wir sind 24 Stunden am Tag, 7 Tage die Woche und an allen Feiertagen für Sie da." }
    ]
  },
  "elektroinstallation-wien": {
    mainTitle: "Professionelle Elektroinstallation Wien: Sicherheit für Ihr Zuhause",
    intro: "Ob Neubau, Sanierung oder kleine Erweiterungen – eine fachgerechte Elektroinstallation ist die Basis für Sicherheit und Komfort in Ihrer Immobilie. Wir planen und realisieren moderne Elektroanlagen in ganz Wien, die den höchsten österreichischen Sicherheitsstandards entsprechen.",
    sections: [
      {
        title: "Individuelle Planung für Wiener Wohnungen & Häuser",
        content: "Jede Immobilie hat spezifische Anforderungen. Wir beraten Sie umfassend zur optimalen Platzierung von Steckdosen, Lichtauslässen und Multimedia-Anschlüssen. In Wien arbeiten wir sowohl in historischen Altbauten (z.B. 1010, 1070, 1080) als auch in modernen Neubauprojekten.",
        list: [
          "Komplette Neuinstallation für Einfamilienhäuser und Wohnungen",
          "Elektrosanierung von veralteten Leitungen im Wiener Altbau",
          "Installation von Schalterprogrammen namhafter Hersteller",
          "Strukturierte Netzwerkverkabelung (LAN/WLAN Optimierung)",
          "Anschluss von E-Herden und Starkstromgeräten"
        ]
      },
      {
        title: "Normgerechte Ausführung nach ÖNORM",
        content: "Sicherheit ist bei Strom kein Spielplatz. Alle unsere Arbeiten werden strikt nach der geltenden ÖNORM E 8101 durchgeführt. Wir verwenden ausschließlich hochwertiges Material, um eine lange Lebensdauer und maximale Ausfallsicherheit Ihrer Anlage zu garantieren."
      }
    ],
    faqs: [
      { q: "Wie lange dauert eine komplette Elektroinstallation in einer Wohnung?", a: "Je nach Größe und Zustand der Wohnung dauert eine Standard-Installation meist zwischen 3 und 7 Werktagen." },
      { q: "Übernehmen Sie auch kleine Aufträge wie Lampenmontagen?", a: "Selbstverständlich. Wir betreuen Privatkunden auch bei kleineren elektrotechnischen Anliegen im Haushalt." }
    ]
  },
  "e-befund-wien": {
    mainTitle: "Rechtssicherer E-Befund Wien: Gesetzliche Prüfung & Sicherheit",
    intro: "Ein E-Befund ist der offizielle Nachweis über die Sicherheit Ihrer elektrischen Anlage. In Wien ist dieser Befund bei jedem Mieterwechsel gesetzlich vorgeschrieben. Wir prüfen Ihre Anlage auf Herz und Nieren und stellen Ihnen ein rechtssicheres Anlagenbuch aus.",
    sections: [
      {
        title: "Warum ein E-Befund für Wiener Vermieter essenziell ist",
        content: "Das Mietrechtsgesetz (MRG) verpflichtet Vermieter, bei Neuvermietung sicherzustellen, dass die Elektrizitätsanlage den Sicherheitsvorschriften entspricht. Ein gültiger E-Befund schützt Sie im Schadensfall vor Haftungsansprüchen und gibt Ihren Mietern Sicherheit.",
        list: [
          "Detaillierte Prüfung nach ÖNORM E 8101",
          "Messung des Isolationswiderstands und der Schleifenimpedanz",
          "Funktionsprüfung aller FI-Schutzschalter",
          "Sichtprüfung der gesamten Installation auf Mängel",
          "Erstellung eines offiziell anerkannten Prüfprotokolls"
        ]
      },
      {
        title: "Prüfung für Hausverwaltungen & Gewerbe",
        content: "Auch für Gewerbebetriebe und Hausverwaltungen (Allgemeinanlagen) führen wir die periodisch vorgeschriebenen Überprüfungen durch. Wir kümmern uns um die Terminschiene und sorgen dafür, dass Ihre Objekte stets rechtssicher dokumentiert sind."
      }
    ],
    faqs: [
      { q: "Wie lange ist ein E-Befund gültig?", a: "Bei Privatwohnungen wird eine Überprüfung alle 5 bis 10 Jahre empfohlen, bei Mieterwechsel ist sie in Wien verpflichtend." },
      { q: "Was passiert, wenn Mängel festgestellt werden?", a: "In diesem Fall listen wir die Mängel auf und erstellen Ihnen direkt ein Angebot für die fachgerechte Behebung, um den positiven Befund zu ermöglichen." }
    ]
  },
  "photovoltaik-solar-wien": {
    mainTitle: "Photovoltaik Wien: Saubere Energie & Unabhängigkeit vom eigenen Dach",
    intro: "Machen Sie sich unabhängig von steigenden Strompreisen. Wir planen und installieren maßgeschneiderte Photovoltaikanlagen für Ein- und Mehrfamilienhäuser in ganz Wien. Von der ersten Machbarkeitsstudie bis zur Netzanmeldung bei den Wiener Netzen.",
    sections: [
      {
        title: "Effiziente Sonnenstrom-Lösungen für urbane Gebiete",
        content: "In den Wiener Außenbezirken wie Donaustadt, Liesing oder Floridsdorf gewinnen PV-Anlagen massiv an Bedeutung. Wir nutzen jede verfügbare Fläche optimal aus – ob auf dem Dach, dem Carport oder als Balkonkraftwerk.",
        list: [
          "Individuelle Planung und Ertragsberechnung",
          "Montage modernster Glas-Glas Module",
          "Installation von Batteriespeichern für maximale Eigenverbrauchquote",
          "Einbindung von Smart-Home Energiemanagement",
          "Abwicklung aller Förderanträge und Behördenwege"
        ]
      }
    ],
    faqs: [
      { q: "Lohnt sich eine PV-Anlage in Wien?", a: "Ja, dank moderner Module und attraktiver Förderungen amortisieren sich Anlagen in Wien meist nach 8-12 Jahren." },
      { q: "Wie lange dauert die Installation einer PV-Anlage?", a: "Die reine Montage auf dem Dach dauert meist nur 1-2 Tage, die behördliche Anmeldung kann etwas mehr Zeit in Anspruch nehmen." }
    ]
  },
  "beleuchtung-licht-wien": {
    mainTitle: "Beleuchtung & Licht Wien: Atmosphäre und Energieeffizienz",
    intro: "Licht gestaltet Räume. Wir entwickeln für Sie kreative Beleuchtungskonzepte, die Ästhetik mit Funktionalität und Energieeffizienz verbinden. Ob Privatwohnung, Bürozentrum oder Außenbeleuchtung – wir rücken Ihr Objekt ins rechte Licht.",
    sections: [
      {
        title: "Moderne LED-Technik für Wien",
        content: "Sparen Sie Energiekosten ohne auf Lichtqualität zu verzichten. Durch eine professionelle Umrüstung auf LED-Technik amortisieren sich die Investitionskosten oft sehr schnell. In Wiener Gewerbebetrieben planen wir normgerechte Arbeitsplatzbeleuchtung, die die Konzentration fördert.",
        list: [
          "Indirekte Beleuchtung und LED-Strip Lösungen",
          "Smarte Lichtsteuerung per App oder KNX",
          "Außen- und Gartenbeleuchtung mit Bewegungsmeldern",
          "Lampenmontage an empfindlichen Stuckdecken",
          "Lichtplanung für Büros, Shops und Gastronomie"
        ]
      }
    ],
    faqs: [
      { q: "Können Sie auch dimmbare LED-Systeme in Altbauten nachrüsten?", a: "Ja, es gibt heute hervorragende Lösungen, um auch in älteren Installationen moderne Dimmeffekte zu erzielen." }
    ]
  },
  "e-mobilitaet-wallbox-wien": {
    mainTitle: "E-Mobilität & Wallbox Wien: Komfortables Laden zu Hause",
    intro: "Laden Sie Ihr Elektroauto sicher und bequem direkt in Ihrer Garage oder auf dem Stellplatz. Wir sind spezialisiert auf die Installation von Wallboxen in Wien – vom Einfamilienhaus bis zur komplexen Lösung in Tiefgaragen von Wohnhausanlagen.",
    sections: [
      {
        title: "Sicherer Anschluss Ihrer Ladestation",
        content: "Eine Wallbox benötigt eine fachgerechte Zuleitung und spezifische Schutzmaßnahmen (FI Typ B). Wir prüfen die Belastbarkeit Ihres Hausanschlusses und führen die notwendigen Installationen normgerecht durch.",
        list: [
          "Installation von 11kW und 22kW Wallboxen",
          "Lastmanagement-Lösungen für Mehrparteienhäuser",
          "Integration in bestehende PV-Anlagen (Überschussladen)",
          "Beratung zu Förderungen für Ladeinfrastruktur",
          "Gesetzliche Prüfung und Abnahme der Ladestation"
        ]
      }
    ],
    faqs: [
      { q: "Benötige ich für eine Wallbox eine Genehmigung?", a: "In Wien müssen Wallboxen bei den Wiener Netzen angemeldet werden. Wir übernehmen diesen Behördenweg komplett für Sie." }
    ]
  },
  "smart-home-knx-wien": {
    mainTitle: "Smart Home & KNX Wien: Intelligentes Wohnen mit Komfort",
    intro: "Die Zukunft des Wohnens ist vernetzt. Ein Smart Home sorgt für mehr Sicherheit, spart Energie und bietet einen unvergleichlichen Komfort. Wir realisieren herstellerunabhängige Lösungen basierend auf dem bewährten KNX-Standard oder modernen Funk-basierten Systemen.",
    sections: [
      {
        title: "Ganzheitliche Hausautomation in Wien",
        content: "Stellen Sie sich vor, Ihr Haus regelt die Heizung automatisch herunter, wenn Sie es verlassen, oder fährt bei Sonneneinstrahlung die Beschattung aus. In Wien statten wir exklusive Penthäuser und moderne Wohnungen mit intelligenten Steuerungen aus.",
        list: [
          "Zentrale Steuerung von Licht, Heizung und Jalousien",
          "Multi-Room Audio und Heimkino-Einbindung",
          "Smarte Zutrittskontrolle und Videoüberwachung",
          "KNX-Programmierung und Wartung",
          "Szenarien-Steuerung (z.B. 'Kino-Abend' oder 'Haus verlassen')"
        ]
      }
    ],
    faqs: [
      { q: "Kann ich Smart Home auch in einer bestehenden Wohnung nachrüsten?", a: "Ja, es gibt hervorragende kabellose Lösungen, die ohne Stemmarbeiten in bestehende Unterputzdosen eingebaut werden können." }
    ]
  },
  "service-hausverwaltungen-wien": {
    mainTitle: "Elektro-Service für Hausverwaltungen Wien: Zuverlässig & Kompetent",
    intro: "Hausverwaltungen benötigen Partner, auf die sie sich verlassen können. Wir betreuen zahlreiche Liegenschaften in ganz Wien und übernehmen sämtliche elektrotechnischen Belange – von der schnellen Störungsbehebung im Stiegenhaus bis zum großen E-Befund der Allgemeinanlagen.",
    sections: [
      {
        title: "Partnerschaft auf Augenhöhe",
        content: "Wir verstehen die Abläufe einer Hausverwaltung. Kurze Kommunikationswege, zeitnahe Terminvereinbarungen direkt mit den Mietern und eine saubere Dokumentation sind für uns selbstverständlich. Wir betreuen Zinshäuser in klassischen Wiener Bezirken ebenso wie moderne Wohnanlagen.",
        list: [
          "24/7 Notdienst für Mieter bei Allgemeinstörungen",
          "Wartung und Reparatur der Stiegenhausbeleuchtung",
          "Sprechanlagen-Service und Erneuerung",
          "Periodische E-Befunde für Allgemeinflächen",
          "Zählerplatz-Sanierungen und Steigleitungs-Modernisierung"
        ]
      }
    ],
    faqs: [
      { q: "Rechnen Sie auch direkt mit Versicherungen ab?", a: "Bei versicherten Schäden erstellen wir gerne die notwendigen Berichte für eine reibungslose Abwicklung." }
    ]
  },
  "sanierung-modernisierung-wien": {
    mainTitle: "Sanierung & Modernisierung Wien: Elektrik am Puls der Zeit",
    intro: "Veraltete Elektroanlagen sind nicht nur unpraktisch, sondern oft brandgefährlich. Viele Wiener Altbauten verfügen noch über Anlagen aus den 1960er oder 70er Jahren. Wir bringen Ihre Elektrik auf den aktuellen Stand der Technik – sicher, effizient und wertsteigernd.",
    sections: [
      {
        title: "Vom FI-Schalter bis zur Steigleitung",
        content: "Eine Elektrosanierung ist eine Investition in die Zukunft. Wir tauschen alte Sicherungskästen gegen moderne Verteiler aus, ziehen neue Drähte ein (wo nötig) und sorgen für eine normgerechte Erdung. Besonders bei Wohnungssanierungen in Bezirken wie 1020, 1050 oder 1150 sind wir Ihr erfahrener Partner.",
        list: [
          "Austausch alter Stoffleitungen gegen moderne Kupferkabel",
          "Erneuerung von Sicherungsverteilern und FI-Schutzschaltern",
          "Nachrüstung von zusätzlichen Steckdosen (Staubarm)",
          "Modernisierung von Telekommunikations-Zuleitungen",
          "Schimmelschonende und strukturierte Arbeitsweise"
        ]
      }
    ],
    faqs: [
      { q: "Muss bei einer Sanierung die ganze Wand aufgestemmt werden?", a: "Nicht zwingend. Wir versuchen so viel wie möglich bestehende Leerverrohrungen zu nutzen, um die Belastung durch Staub und Lärm minimal zu halten." }
    ]
  }
};

export default function LeistungSeoText({ leistung }: { leistung: Leistung }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = SEO_CONTENT[leistung.slug];

  if (!data) return null;

  // Schema Generation
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.mainTitle,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Elektro-Bozogul",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wien",
        "addressCountry": "AT"
      }
    },
    "areaServed": "Wien"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <section className="section" style={{ background: '#fcfcfc', padding: '100px 0', borderTop: '1px solid var(--border)', fontSize: '15px', lineHeight: '1.8', color: 'var(--mid)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container">
        <div style={{
          maxHeight: isOpen ? '15000px' : '650px',
          overflow: 'hidden',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}>
          
          <div className="seo-content" style={{ paddingBottom: '20px' }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                {data.mainTitle}
              </h2>
              <p style={{ fontSize: '17px', fontWeight: 500, color: 'var(--dark)', marginBottom: '32px', lineHeight: 1.6 }}>
                {data.intro}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
              {data.sections.map((section, idx) => (
                <div key={idx} className="seo-section">
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: 'var(--primary)' }}>
                    {section.title}
                  </h3>
                  <p style={{ marginBottom: '20px' }}>{section.content}</p>
                  {section.list && (
                    <ul style={{ paddingLeft: '20px', listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                      {section.list.map((item, i) => (
                        <li key={i} style={{ position: 'relative', paddingLeft: '24px' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--yellow)', fontWeight: 800 }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '64px', padding: '40px', background: 'var(--bg)', borderRadius: '24px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '24px' }}>Warum Elektro-Bozogul für {leistung.shortTitle}?</h3>
              <p style={{ marginBottom: '16px' }}>
                Als konzessionierter Meisterbetrieb und Mitglied der Wirtschaftskammer Wien (WKO) setzen wir bei {leistung.title.toLowerCase()} auf höchste Qualitätsstandards. 
                Alle Arbeiten werden nach ÖVE/ÖNORM dokumentiert, und wir verwenden ausschließlich Material von namhaften Herstellern wie Schrack Technik, Legrand, Hager und Eaton.
              </p>
              <p>
                Kontaktieren Sie uns für ein kostenfreies Beratungsgespräch zu Ihrem {leistung.shortTitle}-Projekt:
                {' '}<strong style={{ color: 'var(--primary)' }}>+43 660 1230073</strong> oder{' '}
                <a href="mailto:office@elektro-bozogul.at" style={{ color: 'var(--primary)' }}>office@elektro-bozogul.at</a>
              </p>
            </div>
          </div>

          {!isOpen && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '250px',
              background: 'linear-gradient(to bottom, rgba(252,252,252,0) 0%, #fcfcfc 95%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="btn-sparkle"
            style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
          >
            <span className="text_button" style={{ background: 'white', color: 'var(--primary)', border: '2px solid var(--primary)', padding: '14px 40px', fontSize: '15px', fontWeight: 800 }}>
              {isOpen ? 'Expertentext einklappen ↑' : 'Vollständigen Ratgeber für ' + leistung.shortTitle + ' lesen ↓'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
