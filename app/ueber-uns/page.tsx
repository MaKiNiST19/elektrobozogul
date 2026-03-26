import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns – Ihr Elektriker-Meisterbetrieb',
  description: 'Elektro-Bozogul – Ihr Elektriker-Meisterbetrieb in Wien. Erfahren Sie mehr über unser Team, unsere Qualifikationen und warum wir der richtige Partner für Ihre Elektroinstallation sind.',
  alternates: { canonical: 'https://elektro-bozogul.at/ueber-uns' },
};

export default function UeberUnsPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Über uns</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="leistung-hero" style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary)', color: 'var(--white)', padding: '132px 0 80px', borderBottom: '4px solid var(--yellow)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', fontSize: '2.8rem', fontWeight: 800 }}>Über Elektro-Bozogul</h1>
          <p style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6, marginTop: '20px' }}>
            Ihr konzessionierter Elektriker-Meisterbetrieb in Wien – kompetent, verlässlich und nah am Kunden.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <article className="prose">
              <h2>Wer wir sind</h2>
              <p>
                Elektro-Bozogul ist ein konzessionierter Elektriker-Meisterbetrieb mit Sitz in Wien.
                Wir bieten höchste Qualität in allen Bereichen der Elektrotechnik – von der klassischen
                Elektroinstallation über den gesetzlich vorgeschriebenen E-Befund bis hin zu modernen
                Zukunftstechnologien wie Smart Home, Photovoltaik und E-Mobilität.
              </p>

              <h2>Unsere Qualifikationen</h2>
              <p>
                Als in Wien etablierter Meisterbetrieb erfüllen wir alle gesetzlichen Anforderungen und setzen auf höchste Sicherheitsstandards.
                Besonders wichtig ist uns die Mitgliedschaft in der Wirtschaftskammer Wien (WKO) und die ständige Weiterbildung unseres Teams.
              </p>
              <ul>
                <li><strong>Konzessionierter Meisterbetrieb</strong> – gemäß Elektrotechnikgesetz (ETG) und Gewerbeordnung</li>
                <li><strong>Zertifizierte Fachkräfte</strong> – ausgebildet nach ÖVE/ÖNORM-Standards</li>
                <li><strong>WKO-Mitglied</strong> – Innung der Elektrotechniker</li>
                <li><strong>Laufende Weiterbildung</strong> – zu aktuellen Normen, Produkten und Technologien</li>
              </ul>

              <h2>Unsere Werte</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '30px' }}>
                {[
                  { title: 'Sicherheit', desc: 'Alle Arbeiten streng nach ÖNORM E 8001 und ÖVE-Richtlinien.' },
                  { title: 'Zuverlässigkeit', desc: 'Pünktlich, termingerecht und verfügbar – auch im 24/7 Notdienst.' },
                  { title: 'Transparenz', desc: 'Klare Kommunikation, faire Preise und keine versteckten Kosten.' },
                  { title: 'Qualität', desc: 'Premium-Materialien von Markenherstellern wie Schrack, Legrand und Hager.' },
                ].map((item, i) => (
                  <div key={i} className="badge-group" style={{ 
                    whiteSpace: 'normal', height: '100%', padding: '24px', borderRadius: '12px',
                    background: 'var(--white)', border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.4 }}>
                      <div style={{ marginBottom: '12px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>{item.title}</span>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 500, opacity: 0.9, color: 'var(--primary)', lineHeight: 1.6 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '60px' }}>Einsatzgebiet</h2>
              <p>
                Wir betreuen Privat- und Gewerbekunden in <strong>allen 23 Wiener Gemeindebezirken</strong> sowie im
                näheren Umland (Bezirk Mödling, Korneuburg, etc.). Dank effizienter Routenplanung sind wir schnell vor Ort – ob für geplante
                Projekte oder akute Notfälle.
              </p>

              <div style={{ marginTop: '50px', background: 'var(--primary)', color: 'white', padding: '60px 40px', borderRadius: 'var(--r-lg)', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--yellow)', marginBottom: '16px' }}>Jetzt Kontakt aufnehmen</h2>
                <p style={{ color: 'rgba(255,255,255,.8)', marginBottom: '32px' }}>
                  Sie haben ein Anliegen oder benötigen ein unverbindliches Angebot? Wir beraten Sie gerne telefonisch oder per E-Mail.
                </p>
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
                  <a href="tel:+436601230073" className="btn-sparkle" style={{ transform: 'scale(1.1)' }}>
                    <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', padding: '12px 32px' }}>☎ +43 660 1230073</span>
                  </a>
                  <a href="/kontakt" className="btn-sparkle" style={{ transform: 'scale(1.1)' }}>
                    <span className="text_button" style={{ background: 'var(--white)', color: 'var(--primary)', padding: '12px 32px' }}>Zum Kontaktformular</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
