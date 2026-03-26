import Image from 'next/image';
import type { Metadata } from 'next';
import { BEZIRKE } from '@/lib/bezirke';
import { BadgeGroup } from '@/components/base/badges/badge-groups';
import { RatingBadge } from '@/components/foundations/rating-badge';
import BrandCarousel from '@/components/foundations/BrandCarousel';

export const metadata: Metadata = {
  title: 'Elektriker Wien – Alle 23 Gemeindebezirke | Elektro-Bozogul',
  description: 'Elektro-Bozogul ist Ihr Elektriker in allen 23 Wiener Gemeindebezirken – vom 1. bis zum 23. Bezirk. Bezirk wählen und direkt anfragen!',
  alternates: { canonical: 'https://elektro-bozogul.at/bezirke' },
};

export default function BezirkePage() {
  return (
    <>
      {/* Hero - Full Width with Background Image & Overlay */}
      <section className="hero" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
      }}>
        {/* Background Image + Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/leistungen/wien-elektriker-notdienst.jpg"
            alt="Elektriker Wien – Alle 23 Bezirke"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,78,57,0.85) 0%, rgba(0,0,0,0.6) 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>Startseite</a>
                <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 4px' }}>/</span>
              </li>
              <li>
                <span style={{ color: 'white', fontSize: '13px', fontWeight: 600 }}>Bezirke</span>
              </li>
            </ol>
          </nav>

          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--yellow)' }}>
            EINSATZGEBIET · GANZ WIEN
          </div>

          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', maxWidth: '700px' }}>
            Elektriker Wien – Alle 23 Gemeindebezirke
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '600px' }}>
            Elektro-Bozogul ist in allen 23 Wiener Gemeindebezirken tätig.
            Wählen Sie Ihren Bezirk für lokale Informationen, typische Stadtteile
            und direkte Kontaktmöglichkeit.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/kontakt" className="btn-sparkle">
              <span className="text_button" style={{ 
                background: 'var(--yellow)', 
                color: 'var(--primary)', 
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 700
              }}>
                Kontakt aufnehmen
              </span>
            </a>
            <a href="tel:+436601230073" className="btn-sparkle">
              <span className="text_button" style={{
                color: 'white', 
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 600,
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(8px)',
              }}>
                📞 +43 660 1230073
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Badge Bar */}
      <div className="badge-bar">
        <a href="/notfall-elektriker" className="badge-item">
          <RatingBadge
            title="Schnelle Hilfe in ganz Wien"
            subtitle="Soforteinsatz in allen 23 Bezirken"
            rating={5}
            theme="dark"
          />
        </a>
        <a href="#bezirke" className="badge-item">
          <RatingBadge
            title="Zertifizierter Meisterbetrieb"
            subtitle="Ihr Partner für Wien & Umgebung"
            rating={5}
            theme="dark"
          />
        </a>
        <a href="/kontakt" className="badge-item">
          <RatingBadge
            title="Kostenlose Beratung"
            subtitle="E-Befund & Elektroinstallation"
            rating={5}
            theme="dark"
          />
        </a>
      </div>

      <BrandCarousel />

      <section className="section">
        <div className="container">

          <div className="bezirk-grid">
            {BEZIRKE.map(b => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} style={{ textDecoration: 'none' }}>
                <BadgeGroup addonText={b.plz} color="brand" theme="modern">
                  {b.name}
                </BadgeGroup>
              </a>
            ))}
          </div>

          {/* SEO-Text */}
          <div className="prose" style={{ marginTop: '56px', maxWidth: '760px' }}>
            <h2>Ihr Elektriker in ganz Wien</h2>
            <p>
              Als befugter Wiener Gewerbebetrieb sind wir in allen 23 Gemeindebezirken
              der Bundeshauptstadt unterwegs – von der Inneren Stadt (1010) bis nach
              Liesing (1230). Ob Altbau-Sanierung in Ottakring, Smart-Home-Installation
              in Döbling oder Photovoltaik in Floridsdorf: Wir kennen die Besonderheiten
              jedes Bezirks.
            </p>
            <p>
              Unsere Arbeiten entsprechen den geltenden österreichischen Normen –
              insbesondere der <strong>ÖNORM E 8001</strong> und den
              <strong> ÖVE-Richtlinien</strong>. Bei Bedarf übernehmen wir auch
              die Anmeldung bei Wien Energie und die Abwicklung von Förderanträgen
              (Klima- und Energiefonds, aws).
            </p>
            <p>
              Für ein unverbindliches Angebot rufen Sie uns an:
              <a href="tel:+436601230073"> +43 660 1230073</a> oder schreiben Sie an
              <a href="mailto:office@elektro-bozogul.at"> office@elektro-bozogul.at</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
