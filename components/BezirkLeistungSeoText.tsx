"use client";

import React, { useState } from 'react';
import { type Bezirk } from '@/lib/bezirke';
import { type Leistung, LEISTUNGEN } from '@/lib/leistungen';

export default function BezirkLeistungSeoText({ bezirk, leistung }: { bezirk: Bezirk, leistung: { title: string, shortTitle: string, slug: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  // Simple stable hash to vary content across pages to avoid duplicate content flags
  const seed = (bezirk.slug.length + leistung.slug.length) % 3;

  const intros = [
    `Der Bedarf an professioneller und zuverlässiger <strong>${leistung.title.toLowerCase()}</strong> wächst in Wien stetig. Besonders in einem vielfältigen und dynamischen Bezirk wie ${bezirk.name} sind individuelle elektrischen Lösungen gefragt. Elektro-Bozogul ist Ihr regional verankerter Spezialist für alles rund um ${leistung.title.toLowerCase()} in ${bezirk.plz} Wien.`,
    `Suchen Sie einen Experten für <strong>${leistung.title.toLowerCase()}</strong> im Herzen vom ${bezirk.shortName}? Elektro-Bozogul ist Ihr zuverlässiger Partner für Elektrotechnik in ${bezirk.plz} Wien. Wir verstehen die lokalen Anforderungen im ${bezirk.name} genau und bieten maßgeschneiderte Konzepte, die Funktionalität und Sicherheit vereinen.`,
    `Wenn es um <strong>${leistung.title.toLowerCase()}</strong> im ${bezirk.name} geht, ist Fachkompetenz und lokale Präsenz entscheidend. Als Ihr Elektriker-Meisterbetrieb in ${bezirk.plz} Wien bieten wir Ihnen nicht nur technische Expertise, sondern auch die Verlässlichkeit eines in Wien ansässigen Fachbetriebs.`
  ];

  const safetyTexts = [
    `Als zertifizierter Elektriker-Meisterbetrieb arbeiten wir stets nach strengsten Sicherheitsstandards, allen voran der ÖVE/ÖNORM E 8001. Wenn Sie uns mit dem Thema ${leistung.shortTitle} in ${bezirk.name} beauftragen, können Sie sicher sein, dass nur hochwertigste Materialien von namhaften Herstellern wie Siemens oder Eaton zum Einsatz kommen.`,
    `Sicherheit steht bei uns an erster Stelle. Jede <strong>${leistung.title.toLowerCase()}</strong>, die wir im ${bezirk.shortName} durchführen, wird lückenlos dokumentiert und entspricht den aktuellsten gesetzlichen Vorgaben. Dies gibt Ihnen als Eigentümer oder Verwalter in ${bezirk.plz} Wien die nötige Rechtssicherheit gegenüber Versicherungen und Behörden.`,
    `Wir verstehen, dass elektrische Anlagen das unsichtbare Nervensystem jedes Objekts darstellen. Ein Ausfall bei der ${leistung.shortTitle} im ${bezirk.name} birgt oft erhebliche Sicherheitsrisiken. Deshalb setzen wir auf präzise Messtechnik und eine saubere Ausführung durch unsere erfahrenen Monteure.`
  ];

  const localContexts = [
    `Unsere Monteure sind täglich in allen Grätzln wie <strong>${bezirk.neighborhoods.join(', ')}</strong> im Einsatz. Diese lokale Nähe im ${bezirk.shortName} garantiert Ihnen besonders kurze Anfahrtswege und eine schnelle Reaktionszeit bei akuten Notfällen oder kurzfristigen Terminanfragen.`,
    `Ob historische Bausubstanz in <strong>${bezirk.neighborhoods[0]}</strong> oder moderne Neubauprojekte in <strong>${bezirk.neighborhoods[1] || 'den angrenzenden Vierteln'}</strong> – wir kennen die baulichen Gegebenheiten im ${bezirk.name} aus jahrelanger Praxis. Wir passen unsere Lösungen in ${bezirk.plz} Wien individuell an die Gegebenheiten vor Ort an.`,
    `Dank unserer tiefen Verwurzelung in ${bezirk.plz} Wien wissen wir genau, worauf es bei ${leistung.shortTitle} im ${bezirk.name} ankommt. Wir betreuen Privatkunden, Gewerbebetriebe und Hausverwaltungen mit Fokus auf Transparenz, Termintreue und meisterliche Qualität.`
  ];

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
              <h2 suppressHydrationWarning style={{ fontSize: '28px', marginBottom: '16px' }}>
                {seed === 0 ? `Erstklassige ${leistung.title} in ${bezirk.name}` : seed === 1 ? `${leistung.title} vom Profi in ${bezirk.name} (${bezirk.plz})` : `Ihr Partner für ${leistung.title} im ${bezirk.shortName} Wien`}
              </h2>
              <p suppressHydrationWarning style={{ marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: intros[seed] }} />
              <p suppressHydrationWarning style={{ marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: safetyTexts[seed] }} />
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 suppressHydrationWarning style={{ fontSize: '22px', marginBottom: '16px' }}>{seed === 0 ? `Fachkompetenz and Sicherheit bei ${leistung.shortTitle}` : `Warum wir Ihr Ansprechpartner für ${leistung.shortTitle} sind`}</h3>
              <p style={{ marginBottom: '16px' }}>
                Warum ist professionelle <strong>{leistung.title.toLowerCase()}</strong> so wichtig? Die Antwort ist simpel: Elektrische Anlagen verzeihen keine Improvisation. 
                Eine fachgerechte Installation oder Reparatur schützt Sie vor lebensgefährlichen Stromschlägen und Kabelbränden. 
                Unser Leistungsspektrum im Bereich {leistung.shortTitle} umfasst exakt abgestimmte Lösungen für Privatpersonen, Gastronomie, Büros und Hausverwaltungen in ganz {bezirk.name}.
              </p>
              <p suppressHydrationWarning style={{ marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: localContexts[seed] }} />
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Detaillierte Planung von {leistung.shortTitle} im {bezirk.shortName}</h3>
              <p style={{ marginBottom: '16px' }}>
                Bei jedem Projekt im Bereich <strong>{leistung.title.toLowerCase()}</strong> beginnen wir mit einer fundierten Analyse Ihres Standorts in {bezirk.plz} Wien. 
                Wir prüfen die Kapazitäten Ihres Verteilerkastens, die Beschaffenheit der Leitungen und die korrekte Absicherung durch FI-Schutzschalter. 
                Gerade in den Wiener Gemeindebezirken wie dem {bezirk.name} ist die Kombination aus Fachwissen über alte Bausubstanz und moderne Technik unerlässlich.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wir legen großen Wert darauf, dass unsere Kunden in {bezirk.name} genau verstehen, welche Maßnahmen wir ergreifen. Eine transparente Kostenaufstellung 
                und die Einhaltung vereinbarter Zeitpläne sind für uns als Wiener Meisterbetrieb selbstverständlich. Ob es sich um den Anschluss von Neugeräten, 
                eine komplette Sanierung oder die regelmäßige Wartung handelt – bei Elektro-Bozogul sind Sie in guten Händen.
              </p>
            </div>

            <div className="seo-content-block" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Regionale Synergien: Weitere Leistungen im {bezirk.name}</h3>
              <p style={{ marginBottom: '16px' }}>
                Oft ist die Anforderung an <strong>{leistung.title.toLowerCase()}</strong> nur ein Teil eines größeren Vorhabens. Wir bieten Ihnen im gesamten {bezirk.name} 
                einen umfassenden Rundum-Service. Benötigen Sie zusätzlich einen rechtssicheren E-Befund oder denken Sie über die Installation einer Photovoltaikanlage nach?
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {LEISTUNGEN.filter(l => l.slug !== leistung.slug).slice(0, 5).map((l) => (
                  <li key={l.slug}>
                    <a href={`/bezirke/${bezirk.slug}/${l.slug}`} style={{ fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
                      ⚡ {l.title} in {bezirk.name} ({bezirk.plz})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="seo-content-block">
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Ihr Team für Elektrotechnik im Herzens Wiens</h3>
              <p style={{ marginBottom: '16px' }}>
                Zusammenfassend lässt sich sagen: Vertrauen Sie bei <strong>{leistung.title} im {bezirk.name}</strong> auf einen Fachbetrieb, 
                der die Stadt Wien und ihre spezifischen Anforderungen kennt. Wir stehen für Qualität, Sicherheit und einen exzellenten Kundenservice in {bezirk.plz}. 
              </p>
              <p style={{ marginBottom: '16px' }}>
                Zögern Sie nicht, uns bei Fragen zu kontaktieren. Gerne erstellen wir Ihnen ein unverbindliches Angebot für Ihr Projekt im {bezirk.shortName}. 
                Rufen Sie uns unter <strong style={{ color: 'var(--primary)' }}>+43 660 1230073</strong> an oder schreiben Sie uns eine E-Mail an office@elektro-bozogul.at. 
                Wir freuen uns darauf, Sie bei Ihrem Vorhaben im {bezirk.name} tatkräftig zu unterstützen.
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
            {isOpen ? 'Weniger anzeigen ↑' : `Ganzen Text für ${leistung.shortTitle} in ${bezirk.name} lesen ↓`}
          </button>
        </div>

      </div>
    </section>
  );
}
