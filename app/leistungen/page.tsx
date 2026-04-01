import Image from 'next/image';
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
      {/* 50vh Hero */}
      <section className="hero" style={{ height: '50vh', minHeight: '450px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/leistungen/elektriker-wien.jpg"
          alt="Elektriker Wien Leistungen"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,78,57,0.88) 0%, rgba(0,0,0,0.65) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb inside hero */}
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ background: 'transparent', border: 'none', padding: '0 0 24px 0' }}>
            <ol style={{ padding: 0 }}>
              <li><a href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Startseite</a></li>
              <li style={{ color: 'white' }}><span>Leistungen</span></li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: 'var(--yellow)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>Unsere Expertise</p>
          <h1 className="hero-title" style={{ marginBottom: '24px' }}>Meisterhafte Elektro-Services</h1>
          <p style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Von der schnellen Hilfe im Notfall bis hin zur zukunftssicheren Photovoltaik-Anlage. 
            Entdecken Sie unsere umfassenden Leistungen für Wien und Umgebung.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="service-grid">
            {LEISTUNGEN.map(l => (
              <MagicCard key={l.slug} className="service-magic-card">
                <a href={`/leistungen/${l.slug}`} className="service-card__inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="service-card__img-container" style={{ position: 'relative', height: '200px' }}>
                    <Image
                      src={l.image}
                      alt={l.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
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
