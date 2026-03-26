"use client";
import React, { useState } from 'react';
import { BEZIRKE } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';

export default function SeoText() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section" style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid var(--border)', fontSize: '15px', lineHeight: '1.8', color: 'var(--mid)' }}>
      <div className="container">
        
        <div style={{
          maxHeight: isOpen ? '10000px' : '450px',
          overflow: 'hidden',
          transition: 'max-height 0.8s ease-in-out',
          position: 'relative'
        }}>
          
          <div className="seo-columns" style={{ columnCount: 2, columnGap: '60px', paddingBottom: '20px' }}>



            <div className="seo-content-block">
              <h2 style={{ fontSize: '28px' }}>
                Umfassende Elektroinstallation & Elektriker Notdienst in Wien: Ihr Experte für Sicherheit und moderne Elektrotechnik
              </h2>
              <p>
                Die Elektrik in einem Gebäude ist vergleichbar mit dem Nervensystem des menschlichen Körpers: Sie muss jederzeit fehlerfrei, sicher und leistungsstark funktionieren. In der heutigen, stark digitalisierten und stromabhängigen Welt sind professionelle <a href="/leistungen/elektroinstallation">Elektroinstallationen</a> wichtiger denn je. <strong>Elektro-Bozogul</strong> ist Ihr erfahrener, zertifizierter Elektriker-Meisterbetrieb in Wien und Umgebung. Wir bieten ein lückenloses Spektrum an Dienstleistungen, angefangen von präziser Neuinstallation über komplexe Sanierungsarbeiten im Altbau bis hin zur Implementierung zukunftssicherer Smart Home- und Photovoltaik-Systeme. Zudem stellen wir einen hochverfügbaren <a href="/notfall-elektriker">24/7 Elektriker Notdienst</a> bereit, der bei akuten Problemen wie Stromausfall, durchgebranntem FI-Schutzschalter, Kurzschluss oder Kabelbrand in Rekordzeit an jedem Ort in ganz Wien zur Stelle ist.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Häufige elektrische Störungen und Fachbegriffe (Glossar)</h3>
              <p>
                Technische Probleme erkennen und verstehen ist der erste Schritt zur Lösung. Oft suchen Kunden bei Google nach Begriffen, deren Bedeutung oder technische Hintergründe nicht direkt ersichtlich sind. Zu den klassischen Fehlerquellen gehören:
              </p>
              <ul>
                <li><strong>Der FI-Schutzschalter (Fehlerstromschutzschalter) löst ständig aus:</strong> Wenn der FI-Schalter fliegt, liegt meist ein Fehlerstrom vor. Versuchen Sie niemals, den Schalter mit Gewalt dauerhaft einzuklemmen – Lebensgefahr! Unser Notdienst lokalisiert den defekten Stromkreis mit speziellen Messgeräten (z.B. nach ÖVE/ÖNORM E 8001).</li>
                <li><strong>Kurzschluss und Leitungsschutzschalter (sogenannte &quot;Sicherung&quot;):</strong> Kommt es zu einem direkten Kontakt zwischen Nullleiter und Außenleiter, fließt ein extrem hoher Strom. Die Sicherung unterbricht den Stromkreis sofort, um einen potenziellen Kabelbrand zu verhindern.</li>
                <li><strong>Steckdose &quot;zischt&quot; oder Kabelbrand-Geruch:</strong> Besteht akute Brandgefahr. Schalten Sie umgehend den Hauptschalter ab und rufen Sie den Elektro-Bozogul Störungsdienst (+43 660 1230073).</li>
                <li><strong>Nullleiter-Unterbruch (Sternpunktverschiebung):</strong> Ein hochgradig gefährlicher Fehler im Drehstromnetz mit Überspannungen bis 400 Volt.</li>
                <li><strong>Phasenausfall:</strong> Meist beim Herdanschluss oder bei Kraftstrom-Geräten festzustellen. Die Fehlersuche beginnt bei den Vorzählersicherungen.</li>
              </ul>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Zertifizierte Sicherheit durch den E-Befund</h3>
              <p style={{ marginBottom: '16px' }}>
                Für Vermieter, Hausverwaltungen und Gewerbetreibende ist ein regelmäßiger <a href="/leistungen/e-befund">E-Befund (Anlagenbuch)</a> essenziell und oft gesetzlich vorgeschrieben (laut Elektrotechnikverordnung ETV 2020 und Mietrechtsgesetz MRG § 1090). Ohne gültigen Befund besteht bei einem Stromunfall keine Deckung durch die Versicherung.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Unsere Leistungen im Überblick</h3>
              <ul>
                {LEISTUNGEN.map((leistung) => (
                  <li key={leistung.slug}>
                    <a href={`/leistungen/${leistung.slug}`} style={{ fontWeight: 600 }}>{leistung.title}</a>: {leistung.description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Zukunftstechnologien: Photovoltaik & E-Mobilität</h3>
              <p>
                Wir realisieren zukunftsweisende Projekte im Bereich Solar/PV. Eine moderne <a href="/leistungen/photovoltaik">Photovoltaikanlage</a> kombiniert mit einem intelligenten Energiemanager und Batteriespeicher ist die optimale Lösung für nachhaltige Energieversorgung. Ergänzend installieren wir normgerecht <a href="/leistungen/e-mobilitaet">Elektroauto-Ladestationen (Wallboxen 11kW / 22kW)</a> für alle gängigen Marken.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Flächendeckend in ganz Wien</h3>
              <p style={{ marginBottom: '16px' }}>
                Unser Einsatzgebiet umfasst ausnahmslos jeden der 23 Wiener Gemeindebezirke:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
                {BEZIRKE.map((bezirk) => (
                  <a key={bezirk.slug} href={`/bezirke/${bezirk.slug}`} style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '6px 12px', borderRadius: '30px', textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>
                    Elektriker {bezirk.plz} {bezirk.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Beliebte Google-Suchanfragen</h3>
              <ul style={{ color: 'var(--mid)', fontStyle: 'italic', fontSize: '14px', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>— &quot;Was tun wenn der FI Schalter nicht mehr rauf geht?&quot;</li>
                <li style={{ marginBottom: '8px' }}>— &quot;Stromausfall halbe Wohnung trotz intakter Sicherung&quot;</li>
                <li style={{ marginBottom: '8px' }}>— &quot;Kosten E-Befund Wien 2026&quot;</li>
                <li style={{ marginBottom: '8px' }}>— &quot;Warum brummt der Verteilerkasten?&quot;</li>
                <li style={{ marginBottom: '8px' }}>— &quot;Wallbox Installation Pflicht RCD Type B&quot;</li>
                <li style={{ marginBottom: '8px' }}>— &quot;Alten Sicherungskasten erneuern Wien&quot;</li>
              </ul>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Warum der Meisterbetrieb die richtige Wahl ist</h3>
              <p>
                Wir setzen auf Normenkonformität nach ÖVE/ÖNORM, geprüfte Materialien von Premium-Herstellern (Schrack Technik, Legrand, Eaton, Hager, Siemens) und absolute Zuverlässigkeit. Die Einhaltung der Vorschriften der <a href="https://www.wko.at/ooe/gewerbe-handwerk/elektro-gebaeude-alarm-kommunikation/" target="_blank" rel="noopener noreferrer">Wirtschaftskammer Österreich (WKO)</a> ist für uns selbstverständlich. Rufen Sie den <a href="/kontakt" style={{ fontWeight: 600 }}>geprüften Elektriker Meisterbetrieb Elektro-Bozogul</a> an: <strong>+43 660 1230073</strong>.
              </p>
            </div>

          </div>

          {!isOpen && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '180px',
              background: 'linear-gradient(to bottom, rgba(248,250,252,0) 0%, rgba(248,250,252,1) 90%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />
          )}

        </div>

        <div style={{ textAlign: 'center', marginTop: '20px', position: 'relative', zIndex: 2 }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'var(--white)',
              color: 'var(--primary)',
              border: '2px solid var(--primary)',
              padding: '12px 30px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            className="seo-toggle-btn"
          >
            {isOpen ? 'Weniger anzeigen ↑' : 'Ganzen Text lesen ↓'}
          </button>
        </div>

      </div>
    </section>
  );
}
