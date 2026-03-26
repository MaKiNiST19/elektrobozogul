import type { Metadata } from 'next';
import { LEISTUNGEN } from '@/lib/leistungen';
import { MagicCard } from '@/components/base/magic-card';

export const metadata: Metadata = {
  title: 'Elektro-Dienstleistungen in Wien | Elektro-Bozogul',
  description: 'Unsere Elektro-Dienstleistungen in Wien: Installationen, Photovoltaik, Smart Home, E-Mobilität & Notdienst. Kompetent, zuverlässig und nach ÖNORM.',
  alternates: { canonical: 'https://elektro-bozogul.at/leistungen' },
};

export default function LeistungenPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Leistungen</span></li>
        </ol>
      </nav>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Unsere Expertise</p>
            <h1>Professionelle Elektro-Dienstleistungen in Wien</h1>
            <p>
              Von der einfachen Steckdosen-Montage bis zur komplexen Photovoltaik-Anlage
              oder Smart-Home-Lösung. Als befugter Wiener Fachbetrieb bieten wir
              maßgeschneiderte Lösungen für Privat- und Gewerbekunden.
            </p>
          </div>

          <div className="service-grid">
            {LEISTUNGEN.map(l => (
              <MagicCard key={l.slug} className="service-magic-card">
                <a href={`/leistungen/${l.slug}`} className="service-card__inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="service-card__img-container">
                    <img src={l.image} alt={l.title} />
                  </div>
                  <div className="service-card__body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 className="service-card__title" style={{ fontSize: '1.2rem' }}>{l.title}</h2>
                    <p className="service-card__desc" style={{ flexGrow: 1 }}>{l.description}</p>
                    <div style={{ marginTop: '16px' }}>
                      <span className="btn-sparkle" style={{ width: '100%' }}>
                        <span className="text_button" style={{ padding: '6px 16px', fontSize: '14px' }}>Mehr erfahren</span>
                      </span>
                    </div>
                  </div>
                </a>
              </MagicCard>
            ))}
          </div>

          {/* Qualitätsversprechen */}
          <div className="prose" style={{ marginTop: '80px', background: 'var(--white)', padding: '40px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
            <h2>Qualität nach österreichischen Standards</h2>
            <p>
              Sicherheit steht bei Elektro-Arbeiten an erster Stelle. Alle unsere Installationen
              erfolgen streng nach den geltenden Normen, insbesondere der <strong>ÖNORM E 8001</strong>
              {' '}und den <strong>ÖVE-Richtlinien</strong>.
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', listStyle: 'none', padding: 0, marginTop: '30px' }}>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--yellow)' }}>✔</span>
                <span>Befugter Gewerbebetrieb</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--yellow)' }}>✔</span>
                <span>Lokale Expertise in Wien</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--yellow)' }}>✔</span>
                <span>Transparente Fixpreise</span>
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--yellow)' }}>✔</span>
                <span>Schnelle Termine</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
