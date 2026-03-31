"use client";
import React, { useState } from 'react';

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
                Elektrotechnik-Ratgeber: Häufige Störungen erkennen und richtig handeln
              </h2>
              <p>
                Die Elektrik in einem Gebäude ist vergleichbar mit dem Nervensystem des menschlichen Körpers: Sie muss jederzeit fehlerfrei, sicher und leistungsstark funktionieren. 
                Damit Sie im Alltag elektrische Probleme besser einschätzen können, haben wir die wichtigsten Störungen und Fachbegriffe für Sie zusammengestellt.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Häufige elektrische Störungen und Fachbegriffe (Glossar)</h3>
              <p>
                Technische Probleme erkennen und verstehen ist der erste Schritt zur Lösung. Zu den klassischen Fehlerquellen gehören:
              </p>
              <ul>
                <li><strong>Der FI-Schutzschalter (Fehlerstromschutzschalter) löst ständig aus:</strong> Wenn der FI-Schalter fliegt, liegt meist ein Fehlerstrom vor. Versuchen Sie niemals, den Schalter mit Gewalt dauerhaft einzuklemmen – Lebensgefahr! Ein Fachbetrieb lokalisiert den defekten Stromkreis mit speziellen Messgeräten (z.B. nach ÖVE/ÖNORM E 8001).</li>
                <li><strong>Kurzschluss und Leitungsschutzschalter (sogenannte &quot;Sicherung&quot;):</strong> Kommt es zu einem direkten Kontakt zwischen Nullleiter und Außenleiter, fließt ein extrem hoher Strom. Die Sicherung unterbricht den Stromkreis sofort, um einen potenziellen Kabelbrand zu verhindern.</li>
                <li><strong>Steckdose &quot;zischt&quot; oder Kabelbrand-Geruch:</strong> Besteht akute Brandgefahr. Schalten Sie umgehend den Hauptschalter ab und rufen Sie einen Elektriker-Notdienst.</li>
                <li><strong>Nullleiter-Unterbruch (Sternpunktverschiebung):</strong> Ein hochgradig gefährlicher Fehler im Drehstromnetz mit Überspannungen bis 400 Volt. Sofort den Hauptschalter betätigen und Fachmann rufen.</li>
                <li><strong>Phasenausfall:</strong> Meist beim Herdanschluss oder bei Kraftstrom-Geräten festzustellen. Die Fehlersuche beginnt bei den Vorzählersicherungen im Zählerkasten.</li>
              </ul>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Zertifizierte Sicherheit durch den E-Befund</h3>
              <p style={{ marginBottom: '16px' }}>
                Für Vermieter, Hausverwaltungen und Gewerbetreibende ist ein regelmäßiger <a href="/leistungen/e-befund-wien">E-Befund (Anlagenbuch)</a> essenziell und oft gesetzlich vorgeschrieben (laut Elektrotechnikverordnung ETV 2020 und Mietrechtsgesetz MRG § 1090). Ohne gültigen Befund besteht bei einem Stromunfall keine Deckung durch die Versicherung.
              </p>
              <p>
                Bei der Prüfung werden unter anderem der Isolationswiderstand, die Auslösezeit der FI-Schutzschalter und die Schleifenimpedanz gemessen. Diese Messwerte geben Aufschluss über den Gesamtzustand der elektrischen Anlage und sind im Anlagenbuch lückenlos zu dokumentieren.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Zukunftstechnologien: Photovoltaik & E-Mobilität</h3>
              <p>
                Moderne <a href="/leistungen/photovoltaik-solar-wien">Photovoltaikanlagen</a> kombiniert mit einem intelligenten Energiemanager und Batteriespeicher sind die optimale Lösung für nachhaltige Energieversorgung. Wer zusätzlich eine <a href="/leistungen/e-mobilitaet-wallbox-wien">Wallbox (11kW / 22kW)</a> installiert, kann überschüssigen Solarstrom direkt ins Elektroauto laden. Wichtig: Für die Wallbox-Installation ist ein FI-Schutzschalter Typ B oder Typ EV vorgeschrieben – dies wird leider häufig übersehen.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Wann sollte eine Elektroanlage kontrolliert werden?</h3>
              <p>
                Viele Altbauwohnungen in Wien verfügen noch über Elektroanlagen aus den 1960er oder 70er Jahren. Typische Warnsignale für eine veraltete Anlage sind:
              </p>
              <ul>
                <li>Regelmäßig auslösende Sicherungen bei normalem Verbrauch</li>
                <li>Flackernde Lampen ohne erkennbaren Grund</li>
                <li>Bräunliche Verfärbungen oder Schmelzspuren an Steckdosen</li>
                <li>Alte Drehsicherungen (Schraubsicherungen) statt moderner LS-Schalter</li>
                <li>Fehlende FI-Schutzschalter im Verteilerkasten</li>
              </ul>
              <p>
                In solchen Fällen empfiehlt sich eine fachmännische Begutachtung. Eine frühzeitige <a href="/leistungen/sanierung-modernisierung-wien">Elektrosanierung</a> kann kostspielige Folgeschäden und vor allem lebensgefährliche Situationen verhindern.
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px' }}>Normen & Qualitätsstandards in Österreich</h3>
              <p>
                In Österreich gelten strenge Vorschriften für Elektroinstallationen. Die wichtigsten Normen im Überblick:
              </p>
              <ul>
                <li><strong>ÖVE/ÖNORM E 8101:</strong> Errichtung und Betrieb von Niederspannungsanlagen – die zentrale Installationsnorm</li>
                <li><strong>ETV 2020 (Elektrotechnikverordnung):</strong> Regelt die Überprüfungspflichten für elektrische Anlagen</li>
                <li><strong>MRG § 1090 (Mietrechtsgesetz):</strong> Verpflichtet Vermieter zur Gewährleistung sicherer Elektroinstallationen</li>
                <li><strong>TAEV (Technische Anschlussbedingungen):</strong> Regeln für den Anschluss an das öffentliche Stromnetz</li>
              </ul>
              <p>
                Nur ein konzessionierter Meisterbetrieb, der als Mitglied der <a href="https://www.wko.at/ooe/gewerbe-handwerk/elektro-gebaeude-alarm-kommunikation/" target="_blank" rel="noopener noreferrer">Wirtschaftskammer Österreich (WKO)</a> eingetragen ist, darf Elektroinstallationsarbeiten in Österreich ausführen und Befunde ausstellen.
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
            {isOpen ? 'Weniger anzeigen ↑' : 'Ratgeber weiterlesen ↓'}
          </button>
        </div>

      </div>
    </section>
  );
}
