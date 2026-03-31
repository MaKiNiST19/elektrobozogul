"use client";

import React, { useState } from 'react';
import { type Bezirk } from '@/lib/bezirke';

export default function BezirkSeoText({ bezirk }: { bezirk: Bezirk }) {
  const [isOpen, setIsOpen] = useState(false);

  // Bezirk-specific unique angle based on characteristics
  const isInnerBezirk = parseInt(bezirk.plz) <= 1090;
  const isOuterBezirk = parseInt(bezirk.plz) >= 1200;
  const hasGreenAreas = ['1130', '1140', '1190', '1210', '1220', '1230'].includes(bezirk.plz);

  const getLocalChallenge = (): string => {
    if (isInnerBezirk) {
      return `Die historische Bausubstanz im ${bezirk.shortName} stellt besondere Anforderungen an die Elektrotechnik. In Gründerzeit-Zinshäusern rund um ${bezirk.neighborhoods[0]} treffen wir häufig auf veraltete Stoffleitungen, fehlende Erdung und unterdimensionierte Sicherungskästen. Eine behutsame Modernisierung unter Rücksichtnahme auf denkmalgeschützte Fassaden und Stuckdecken erfordert sowohl technisches Know-how als auch handwerkliches Fingerspitzengefühl.`;
    }
    if (hasGreenAreas) {
      return `Der ${bezirk.shortName} mit seinen vielen Ein- und Mehrfamilienhäusern bietet ideale Voraussetzungen für moderne Energielösungen. Von Photovoltaikanlagen auf den großen Dachflächen in ${bezirk.neighborhoods[0]} bis zur Wallbox-Installation in der Eigenheim-Garage – hier setzen wir zukunftsweisende Projekte um, die Wohnkomfort und Nachhaltigkeit verbinden.`;
    }
    if (isOuterBezirk) {
      return `In den wachsenden Stadtteilen des ${bezirk.shortName}s – von ${bezirk.neighborhoods[0]} bis ${bezirk.neighborhoods[1] || 'den angrenzenden Vierteln'} – begleiten wir sowohl Neubauprojekte als auch die Sanierung bestehender Wohnanlagen. Die Mischung aus Neubau, Gewerbegebiet und gewachsenen Wohnvierteln erfordert flexible Lösungsansätze in der Elektrotechnik.`;
    }
    return `Im ${bezirk.shortName} betreuen wir eine breite Palette an Gebäudetypen – von sanierten Altbauten in ${bezirk.neighborhoods[0]} bis hin zu modernen Wohnanlagen. Diese Vielfalt verlangt ein Höchstmaß an Flexibilität und Erfahrung in der Elektroinstallation.`;
  };

  const getLocalTip = (): string => {
    if (isInnerBezirk) {
      return `Tipp für Bewohner im ${bezirk.shortName}: In vielen Altbauwohnungen rund um ${bezirk.neighborhoods[0]} und ${bezirk.neighborhoods[1] || bezirk.name} sind die Elektroanlagen über 40 Jahre alt. Achten Sie auf Warnsignale wie flackernde Lampen, bräunliche Verfärbungen an Steckdosen oder regelmäßig auslösende Sicherungen. Ein frühzeitiger E-Befund kann kostspielige Folgeschäden verhindern.`;
    }
    if (hasGreenAreas) {
      return `Tipp für Hausbesitzer im ${bezirk.shortName}: Die sonnige Lage vieler Objekte in ${bezirk.neighborhoods[0]} und Umgebung eignet sich hervorragend für Photovoltaik. Prüfen Sie, ob Ihr Dach nach Süden ausgerichtet ist und ob der Hausanschluss genügend Kapazität für eine PV-Anlage mit Batteriespeicher bietet. Wir beraten Sie gerne zu den aktuellen Fördermöglichkeiten der Stadt Wien.`;
    }
    return `Tipp für Bewohner im ${bezirk.shortName}: Bei einem plötzlichen Stromausfall überprüfen Sie zunächst den FI-Schalter im Verteilerkasten. Lässt er sich nicht mehr hochschalten, liegt ein Fehlerstrom vor – ein Fall für den Elektriker. Notieren Sie sich am besten unsere Nummer (+43 660 1230073) für den Ernstfall.`;
  };

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
                Elektrotechnik im {bezirk.shortName}: Lokale Expertise für {bezirk.name}
              </h2>
              <p style={{ marginBottom: '16px' }}>
                {getLocalChallenge()}
              </p>
              <p style={{ marginBottom: '16px' }}>
                Als konzessionierter Meisterbetrieb mit Einsatzgebiet in {bezirk.plz} Wien kennen wir die baulichen Gegebenheiten 
                in allen Grätzln – von <strong>{bezirk.neighborhoods.slice(0, 3).join(', ')}</strong> bis{' '}
                <strong>{bezirk.neighborhoods.slice(-2).join(' und ')}</strong>. 
                Diese lokale Verankerung ermöglicht uns kurze Reaktionszeiten und eine Anfahrt innerhalb von typisch 30–60 Minuten.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Notfall-Hilfe in {bezirk.plz} Wien – Worauf Sie achten sollten</h3>
              <p style={{ marginBottom: '16px' }}>
                Ein elektrischer Notfall im {bezirk.shortName} erfordert schnelles und überlegtes Handeln. 
                Hier die wichtigsten Schritte bei den häufigsten Störungen:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Kompletter Stromausfall:</strong> Prüfen Sie zunächst den FI-Schalter und die Hauptsicherung im Verteilerkasten. Wenn das gesamte Haus betroffen ist, könnte eine Störung des Netzbetreibers (Wiener Netze) vorliegen.</li>
                <li style={{ marginBottom: '8px' }}><strong>Teilausfall (halbe Wohnung dunkel):</strong> Häufig ist eine einzelne Phase oder ein Leitungsschutzschalter betroffen. Schalten Sie angeschlossene Geräte von der betroffenen Leitung ab und kontaktieren Sie uns.</li>
                <li style={{ marginBottom: '8px' }}><strong>Brandgeruch aus dem Verteiler:</strong> Sofort den Hauptschalter betätigen und die Wohnung verlassen. Nicht selbst am Sicherungskasten arbeiten – Lebensgefahr!</li>
                <li style={{ marginBottom: '8px' }}><strong>FI-Schalter lässt sich nicht einschalten:</strong> Ein Fehlerstrom liegt vor. Alle Geräte ausstecken und schrittweise wieder einstecken, um den Verursacher zu finden. Im Zweifelsfall den Fachmann rufen.</li>
              </ul>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>E-Befund für Vermieter und Hausverwaltungen in {bezirk.name}</h3>
              <p style={{ marginBottom: '16px' }}>
                Bei jeder Neuvermietung einer Wohnung in {bezirk.plz} Wien muss gemäß Mietrechtsgesetz (MRG) ein gültiger E-Befund vorliegen. 
                Dieser dokumentiert den ordnungsgemäßen Zustand der Elektroanlage und schützt Vermieter vor Haftungsansprüchen im Schadensfall.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wir prüfen systematisch den Isolationswiderstand, die Schleifenimpedanz, die Auslösezeiten der FI-Schutzschalter 
                sowie den Zustand der Schutzleiter. Eventuelle Mängel dokumentieren wir transparent im Prüfbefund und bieten 
                eine direkte Sanierung aus einer Hand an – besonders wichtig bei zeitkritischen Mieterwechseln im {bezirk.shortName}.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Praxistipp: Vorsorge im {bezirk.shortName}</h3>
              <p style={{ marginBottom: '16px' }}>
                {getLocalTip()}
              </p>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Kontakt für {bezirk.name}</h3>
              <p style={{ marginBottom: '16px' }}>
                Haben Sie ein Projekt oder eine Frage zu Elektroinstallationen im <strong>{bezirk.shortName} ({bezirk.plz})</strong>? 
                Kontaktieren Sie uns für eine kostenlose Erstberatung unter <strong style={{ color: 'var(--primary)' }}>+43 660 1230073</strong> oder 
                per E-Mail an <a href="mailto:office@elektro-bozogul.at" style={{ color: 'var(--primary)' }}>office@elektro-bozogul.at</a>.
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
