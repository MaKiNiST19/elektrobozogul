"use client";

import React, { useState } from 'react';
import { type Bezirk } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';

export default function BezirkSeoText({ bezirk }: { bezirk: Bezirk }) {
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
          
          <div className="seo-columns" style={{ paddingBottom: '20px' }}>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
                Ihr verlässlicher Elektriker in {bezirk.name} ({bezirk.plz} Wien): Umfassende Elektroinstallation & Notdienst
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Willkommen bei Elektro-Bozogul, Ihrem geprüften und lokalen <strong>Elektriker Meisterbetrieb für {bezirk.name}</strong> und Umgebung. 
                Die Elektrik in einem Gebäude ist das Herzstück für Komfort und Sicherheit. Unser Team ist darauf spezialisiert, in allen Grätzln wie <strong>{bezirk.neighborhoods.join(', ')}</strong> 
                herausragende Dienstleistungen im Bereich der Elektrotechnik anzubieten. Ob Sie eine dringende Reparatur benötigen, einen kompletten Neubau planen oder 
                einen rechtssicheren E-Befund für Ihre Anlage in {bezirk.plz} Wien anfordern – wir sind Ihr kompetenter Partner. 
                Unsere kurzen Anfahrtswege innerhalb Wiens ermöglichen es uns, besonders bei Notfällen schnell und effizient zu reagieren. Die Kombination aus jahrelanger Erfahrung, 
                permanenter Schulung unserer Mitarbeiter und dem Einsatz modernster Prüf- und Messtechnik garantiert Ihnen höchste Qualität bei jedem Auftrag.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Herausforderungen an moderne <a href="/leistungen/elektroinstallation" style={{ fontWeight: 600, color: 'var(--primary)' }}>Elektroinstallationen in {bezirk.name}</a> wachsen stetig. 
                Durch die zunehmende Elektrifizierung unseres Alltags, von Smart-Home-Systemen über leistungsstarke Küchengeräte bis hin zur Elektromobilität, stoßen alte Stromnetze oft an ihre Grenzen. 
                Wir analysieren Ihre bestehende Installation präzise und erarbeiten zukunftssichere Konzepte, die nicht nur den aktuellen Normen (wie der ÖVE/ÖNORM E 8001) entsprechen, sondern auch Reserven für künftige Entwicklungen bieten. 
                Dabei legen wir größten Wert auf eine transparente Preisgestaltung und klare Kommunikation – von der ersten Beratung bis zur finalen Abnahme.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>24/7 Elektriker Notdienst {bezirk.name} – Schnelle Hilfe, wenn jede Sekunde zählt</h3>
              <p style={{ marginBottom: '16px' }}>
                Ein plötzlicher Stromausfall oder ein Kurzschluss hält sich nicht an Bürozeiten. Besonders in einem dicht besiedelten Wiener Bezirk wie {bezirk.name} kann ein Defekt an der Elektrik erhebliche Auswirkungen auf den privaten Alltag oder den laufenden Geschäftsbetrieb haben. 
                Genau aus diesem Grund betreiben wir einen hochverfügbaren <a href="/notfall-elektriker" style={{ fontWeight: 600, color: 'var(--primary)' }}>Notfall-Elektriker Service für den {bezirk.shortName}</a>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Unsere voll ausgestatteten Servicefahrzeuge sind strategisch so in Wien positioniert, dass wir Notfälle in {bezirk.name} (inklusive {bezirk.neighborhoods[0]} und {bezirk.neighborhoods[1] || 'Umgebung'}) in kürzester Zeit erreichen können. 
                Typische Notfälle umfassen:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Herausgesprungener FI-Schalter:</strong> Oft das Resultat eines gefährlichen Fehlerstroms. Wir lokalisieren das defekte Gerät oder den beschädigten Stromkreis professionell.</li>
                <li style={{ marginBottom: '8px' }}><strong>Kabelbrand oder Schmorgeruch:</strong> Höchste Gefahr! Wir unterbrechen die Stromzufuhr sicher und beheben die Brandursache sofort.</li>
                <li style={{ marginBottom: '8px' }}><strong>Teilausfall der Stromversorgung:</strong> Wenn nur die halbe Wohnung Strom hat, muss oft die Vorzählersicherung oder der Hauptverteiler im Haus überprüft werden.</li>
                <li style={{ marginBottom: '8px' }}><strong>Ausfall von essenziellen Systemen:</strong> Heizungspumpen, Serverräume in Büros oder Kühlanlagen in der Gastronomie.</li>
              </ul>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Rechtssicherheit und Schutz: Der E-Befund im {bezirk.shortName}</h3>
              <p style={{ marginBottom: '16px' }}>
                Die Sicherheit elektrischer Anlagen ist gesetzlich streng geregelt. Für Vermieter, Hausverwaltungen und Gewerbetreibende in {bezirk.plz} Wien ist der sogenannte 
                <a href="/leistungen/e-befund" style={{ fontWeight: 600, color: 'var(--primary)' }}> Anlagenbefund (E-Befund)</a> nicht nur eine Formsache, sondern ein essenzieller Nachweis. 
                Gemäß dem Mietrechtsgesetz (MRG § 1090) muss bei jeder Neuvermietung einer Wohnung in {bezirk.name} sichergestellt sein, dass sich die Elektrik in einem ordnungsgemäßen Zustand befindet.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Unsere zertifizierten Prüftechniker führen in {bezirk.name} präzise Messungen durch. Dabei prüfen wir den Isolationswiderstand, die Auslösezeit und den Auslösestrom der FI-Schalter sowie die Schleifenimpedanz. 
                Eventuelle Mängel, wie unzureichende Erdung oder veraltete Schutzeinrichtungen, werden lückenlos im Anlagenbuch dokumentiert. Bei Bedarf führen wir die notwendigen Sanierungsarbeiten nach <a href="https://www.wko.at" target="_blank" rel="noopener noreferrer">WKO-Richtlinien</a> direkt durch, um die Anlage schnellstmöglich wieder in einen gesetzmäßigen Zustand zu versetzen. Ein gültiger Prüfbefund schützt Sie im Schadensfall (z.B. Brand) vor Haftungsansprüchen der Versicherungen.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Zukunftssichere Technologien: Photovoltaik und Smart Home in {bezirk.name}</h3>
              <p style={{ marginBottom: '16px' }}>
                Die Energiewende macht auch vor {bezirk.name} keinen Halt. Immer mehr Hausbesitzer und Unternehmen investieren in grüne Technologien. Wir planen und installieren hochmoderne 
                <a href="/leistungen/photovoltaik" style={{ fontWeight: 600, color: 'var(--primary)' }}> Photovoltaikanlagen</a>, die optimal auf die Dachflächen und Sonneneinstrahlungsverhältnisse in {bezirk.plz} Wien abgestimmt sind. Von der ersten Machbarkeitsstudie über die Montage der Module bis hin zur komplexen Einbindung von Batteriespeichern und der Anmeldung beim Netzbetreiber (Wien Energie) bieten wir alles aus einer Hand.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Ergänzend zur PV-Anlage errichten wir immer häufiger <a href="/leistungen/e-mobilitaet" style={{ fontWeight: 600, color: 'var(--primary)' }}>Ladeinfrastruktur (Wallboxen)</a> für Elektroautos. Wir prüfen die Anschlussleistung Ihres Hausanschlusses in {bezirk.name} und installieren normgerechte Ladestationen (11kW oder 22kW), die sich auf Wunsch dynamisch an den verfügbaren Solarstrom anpassen. Für maximalen Komfort integrieren wir all diese Systeme in ein intelligentes <a href="/leistungen/smart-home" style={{ fontWeight: 600, color: 'var(--primary)' }}>Smart Home Konzept</a> (z.B. KNX-Technologie), mit dem Sie Beleuchtung, Beschattung, Heizung und Energieerfassung zentral per App steuern können – für ein zukunftssicheres und energieeffizientes Wohnen in {bezirk.name}.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Detailliertes Leistungsportfolio für Wien {bezirk.name}</h3>
              <p style={{ marginBottom: '16px' }}>Wir bieten im gesamten {bezirk.shortName} sämtliche elektrotechnischen Dienste an:</p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
                {LEISTUNGEN.map((leistung) => (
                  <li key={leistung.slug}>
                    <a href={`/bezirke/${bezirk.slug}/${leistung.slug}`} style={{ fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
                      ⚡ {leistung.title}
                    </a>
                    <p style={{ fontSize: '13px', marginTop: '4px', color: 'var(--muted)' }}>{leistung.description}</p>
                  </li>
                ))}
              </ul>
              <p style={{ marginBottom: '16px' }}>
                Speziell für <strong>Hausverwaltungen in {bezirk.name}</strong> bieten wir Rahmenverträge an, die regelmäßige Wartungsarbeiten, die Kontrolle der Stiegenhausbeleuchtung und die rasche Behebung von Gebrechen in Wohnanlagen umfassen. So entlasten wir Verwalter und sichern die Zufriedenheit der Mieter.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Häufige Suchanfragen und lokale Fachbegriffe im {bezirk.shortName}</h3>
              <p style={{ marginBottom: '16px' }}>Unsere Kunden in {bezirk.name} suchen häufig nach spezifischen Lösungen. Hier einige klassische Themen, bei denen wir täglich helfen:</p>
              <ul style={{ color: 'var(--mid)', fontStyle: 'italic', fontSize: '14px', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span> &quot;Elektriker {bezirk.name} Notdienst&quot; - Wir sind in allen Grätzln wie {bezirk.neighborhoods.join(', ')} rasch vor Ort.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span> &quot;Sicherungskasten erneuern {bezirk.plz} Wien Kosten&quot; - Der Austausch alter Schraubsicherungen gegen moderne Leitungsschutzschalter (LS) und FI-Schalter ist unsere Spezialität.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span> &quot;E-Befund Wohnung {bezirk.name} Vermietung&quot; - Wir stellen die erforderlichen Gutachten schnell und unkompliziert aus.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span> &quot;Wallbox Installation Wohnungseigentum Wien {bezirk.shortName}&quot; - Wir beraten Sie zu Fördermöglichkeiten (z.B. durch den Klima- und Energiefonds) und übernehmen die technische Planung.
                </li>
              </ul>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Warum Elektro-Bozogul Ihr idealer Partner in {bezirk.name} ist</h3>
              <p style={{ marginBottom: '16px' }}>
                Als lokal verwurzelter Meisterbetrieb in Wien verstehen wir die besonderen Herausforderungen der städtischen Architektur – von jahrhundertealten Zinshäusern bis hin zu modernen Bürokomplexen. 
                Unsere Monteure setzen ausschließlich auf hochwertiges Material von namhaften Herstellern (wie Schrack, Eaton, Legrand oder Busch-Jaeger). Pfusch oder improvisierte Übergangslösungen gibt es bei uns nicht. Wir arbeiten nach dem Grundsatz: Jede Installation muss sicher, langlebig und optisch einwandfrei sein. 
                Vertrauen Sie auf unsere Expertise und unsere strengen Qualitätskontrollen. 
              </p>
              <p style={{ marginBottom: '16px' }}>
                Haben Sie ein konkretes Projekt im <strong>{bezirk.shortName} ({bezirk.plz})</strong> oder benötigen Sie sofortige Hilfe aufgrund eines Defekts? Zögern Sie nicht und nehmen Sie Kontakt mit uns auf. 
                Wir bieten Ihnen eine kostenlose Erstberatung und erstellen Ihnen gerne einen ehrlichen, transparenten Kostenvoranschlag. 
                Rufen Sie uns unter <strong style={{ color: 'var(--primary)' }}>+43 660 1230073</strong> an oder nutzen Sie unser Online-Kontaktformular. 
                Ihr Team von Elektro-Bozogul – Meisterhafte Qualität für {bezirk.name} und ganz Wien.
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
              background: 'linear-gradient(to bottom, rgba(248,250,252,0) 0%, #f8fafc 90%)',
              pointerEvents: 'none',
              zIndex: 1
            }} />
          )}

        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', position: 'relative', zIndex: 2 }}>
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
            {isOpen ? 'Weniger anzeigen ↑' : 'Ganzen Text für ' + bezirk.name + ' lesen ↓'}
          </button>
        </div>

      </div>
    </section>
  );
}
