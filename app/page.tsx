import { generateFAQSchema } from '../lib/schema';
import SeoText from '../components/SeoText';
import { LEISTUNGEN } from '../lib/leistungen';
import { BEZIRKE } from '../lib/bezirke';
import { Metadata } from 'next';
import { RatingBadge } from '../components/foundations/rating-badge';
import { BadgeGroup } from '../components/base/badges/badge-groups';
import OrbitBrands from '../components/OrbitBrands';

export const metadata: Metadata = {
  title: 'Elektro-Bozogul | Ihr Elektriker in Wien – 24h Notdienst',
  description: 'Ihr zuverlässiger Elektriker in Wien. 24h Notdienst, Elektroinstallationen, E-Befund, Photovoltaik und Smart Home. Schnell & kompetent in allen Bezirken.',
  alternates: {
    canonical: 'https://elektro-bozogul.at',
  },
};

export default function Home() {
  const faqs = [
    { q: "Bieten Sie einen 24h Notdienst in ganz Wien an?", a: "Ja, wir sind in allen 23 Bezirken Wiens rund um die Uhr für elektrische Notfälle erreichbar. Unser Notdienst-Team steht Ihnen täglich zur Verfügung – auch an Wochenenden und Feiertagen." },
    { q: "Wie schnell sind Sie im Falle eines Stromausfalls vor Ort?", a: "In der Regel sind wir innerhalb von 30–60 Minuten bei Ihnen vor Ort, abhängig von Ihrem Standort und der Verkehrslage. Bei kritischen Störungen kommen wir noch schneller." },
    { q: "Was kostet ein Notdienst-Einsatz beim Elektriker?", a: "Die Kosten für einen Notdienst-Einsatz werden transparent kommuniziert. Wir erstellen Ihnen vor Arbeitsbeginn ein Angebot, damit Sie die Kosten kennen. Es gibt keine versteckten Zusatzgebühren." },
    { q: "Führen Sie auch E-Befunde für Mietwohnungen durch?", a: "Ja, wir erstellen rechtssichere E-Befunde für Privatpersonen, Vermieter und Hausverwaltungen nach ÖNORM. Der E-Befund dokumentiert den Zustand Ihrer Elektroinstallation." },
    { q: "Welche Elektroinstallationen führen Sie durch?", a: "Wir bieten Elektroinstallationen für Neubauten, Renovierungen und Modernisierungen. Das umfasst Stromverteilung, Beleuchtung, Steckdosen, Smart-Home-Systeme und Photovoltaik-Anlagen." },
    { q: "Sind Sie ein zertifizierter Meisterbetrieb?", a: "Ja, Elektro-Bozogul ist ein konzessionierter Meisterbetrieb in Wien. Alle unsere Arbeiten werden nach ÖNORM und ÖNORM-Bestimmungen durchgeführt." },
    { q: "Arbeiten Sie auch für Gewerbebetriebe und Hausverwaltungen?", a: "Ja, wir haben umfangreiche Erfahrung mit Gewerbekunden und Hausverwaltungen. Wir führen sowohl kleine Reparaturen als auch große Modernisierungsprojekte durch." },
    { q: "Können Sie eine Elektroinstallation planen und umsetzen?", a: "Ja, wir begleiten Ihr Projekt von der Planung bis zur Fertigstellung. Wir berücksichtigen Ihre Anforderungen, aktuelle Sicherheitsstandards und geltende Vorschriften." },
    { q: "Was ist der Unterschied zwischen E-Befund und Elektro-Sicherheitsprüfung?", a: "Der E-Befund dokumentiert den Zustand einer Elektroinstallation basierend auf Stichprobentests. Die Elektro-Sicherheitsprüfung (auch Wartung genannt) ist eine regelmäßige Überprüfung der gesamten Anlage." },
    { q: "Wie oft sollte eine Elektroinstallation geprüft werden?", a: "Für Wohnungen wird eine Prüfung alle 5–10 Jahre empfohlen. Für Gewerbe und öffentliche Gebäude sind kürzere Intervalle vorgesehen. Wir beraten Sie gerne." },
    { q: "Bieten Sie auch Photovoltaik-Installationen an?", a: "Ja, wir planen und installieren Photovoltaik-Anlagen für Privatpersonen und Unternehmen. Inklusive Anmeldung bei Netzbetreibern und Behörden." },
    { q: "Was ist Smart Home und wie können Sie helfen?", a: "Smart Home bedeutet intelligente Hausautomation – von intelligenten Beleuchtungssystemen bis zu Sicherheitssystemen. Wir installieren und konfigurieren moderne Smart-Home-Lösungen." },
    { q: "Welche Bezirke in Wien bedienen Sie?", a: "Wir bedienen alle 23 Wiener Bezirke: Innere Stadt, Leopoldstadt, Landstraße, Wieden, Margareten, Mariahilf, Neubau, Josefstadt, Alsergrund, Favoriten, Simmering, Meidling und weitere." },
    { q: "Wie buche ich einen Termin beim Elektriker?", a: "Sie können uns telefonisch unter +43 660 1230073 anrufen oder über unsere Website einen Termin buchen. Für Notfälle sind wir rund um die Uhr erreichbar." },
    { q: "Bieten Sie eine Garantie auf Ihre Arbeiten?", a: "Ja, wir garantieren die Qualität unserer Arbeit. Sollte es Probleme geben, beheben wir diese kostenlos. Die genauen Bedingungen besprechen wir mit Ihnen." },
    { q: "Kann ich als Mieter einen Elektriker bestellen?", a: "Ja, Sie können uns auch als Mieter bestellen. Bei Reparaturen trägt üblicherweise der Vermieter die Kosten. Für Notfälle kontaktieren Sie uns direkt." },
    { q: "Was tun bei Stromausfall – wann Elektriker anrufen?", a: "Prüfen Sie zuerst Ihren Stromzähler und FI-Schalter. Wenn Sie das Problem nicht selbst lösen können oder es mehrere Bereiche betrifft, rufen Sie uns an." },
    { q: "Wie erkenne ich fehlerhafte Elektroinstallationen?", a: "Anzeichen sind häufig auslösende Sicherungsautomaten, Stromschläge an Geräten, Verschmorungsgeruch oder warme Steckdosen. Lassen Sie diese sofort von einem Fachmann prüfen." },
    { q: "Was kostet eine Elektroinstallation im Neubau?", a: "Die Kosten hängen vom Umfang, der Fläche und den Anforderungen ab. Wir erstellen Ihnen gerne ein detailliertes Angebot basierend auf Ihren Plänen." },
    { q: "Wie lange dauert eine komplette Elektrorenovierung?", a: "Das hängt von der Größe und Komplexität ab. Ein durchschnittliches Einfamilienhaus benötigt etwa 2–4 Wochen. Wir erstellen einen Zeitplan mit Ihnen." }
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <main>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/herobg.jpg"
          alt="Elektriker Wien – Elektro-Bozogul"
          className="hero__img"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__eyebrow">Ihr Elektriker-Meisterbetrieb in Wien</span>
          <h1>
            Elektriker Wien für{' '}
            <em>Elektroinstallation</em>,<br />
            E-Befund und Notdienst
          </h1>
          <p className="hero__sub">
            Elektro-Bozogul ist Ihr erfahrener Elektriker-Meisterbetrieb in Wien.
            Wir übernehmen Elektroinstallationen, rechtssichere E-Befunde und
            schnelle Hilfe bei Störungen – in allen 23 Bezirken.
          </p>
          <div className="hero__btns">
            <a href="/leistungen" className="btn-sparkle">
              <span className="text_button" style={{ padding: '14px 32px', fontSize: '16px' }}>
                Unsere Leistungen
              </span>
            </a>
            <a
              href="tel:+436601230073"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'white',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1.1rem',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.34-1.34a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +43 660 123 00 73
            </a>
          </div>
        </div>
      </section>

      {/* ── BADGE BAR ────────────────────────────────────────── */}
      <div className="badge-bar">
        <a href="/notfall-elektriker" className="badge-item">
          <RatingBadge
            title="24h Notdienst Wien"
            subtitle="In 30–60 Minuten vor Ort"
            rating={5}
          />
        </a>
        <a href="/leistungen/elektriker-notdienst-wien" className="badge-item">
          <RatingBadge
            title="15+ Jahre Erfahrung"
            subtitle="Konzessionierter Meisterbetrieb"
            rating={5}
          />
        </a>
        <a href="/leistungen/e-befund-wien" className="badge-item">
          <RatingBadge
            title="Rechtssicherer E-Befund"
            subtitle="Alle 23 Wiener Bezirke"
            rating={5}
          />
        </a>
      </div>

      {/* ── ORBIT BRANDS ─────────────────────────────────────── */}
      <OrbitBrands />

      {/* ── LEISTUNGEN GRID ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <p className="eyebrow">Was wir für Sie tun</p>
            <h2>Unsere Leistungen für Wien</h2>
            <p>Vom schnellen Notdienst bis zur nachhaltigen Photovoltaikanlage – alles aus einer Hand.</p>
          </div>

          <div className="service-grid">
            {LEISTUNGEN.slice(0, 9).map((l) => (
              <a key={l.slug} href={`/leistungen/${l.slug}`} className="service-magic-card">
                <div className="service-card__inner">
                  <div className="service-card__img-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.image} alt={l.title} loading="lazy" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{l.title}</h3>
                    <p className="service-card__desc">{l.description}</p>
                    <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                      <span className="btn-sparkle">
                        <span className="text_button" style={{ padding: '8px 18px', fontSize: '13px', fontWeight: 700 }}>
                          Mehr lesen
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / INFO SPLIT ───────────────────────────────── */}
      <section className="section" style={{ background: '#f8fafc', paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          {/* Top split: text + image */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '48px' }} className="about-grid">
            <div>
              <p className="eyebrow" style={{ letterSpacing: '0.1em', fontSize: '11px' }}>Verlässlichkeit, schnelle Hilfe und klare Kommunikation</p>
              <h2 style={{ marginBottom: '20px' }}>
                Ihr verlässlicher Elektriker in Wien – für Notdienst, Installation und E-Befund
              </h2>
              <p style={{ marginBottom: '16px', color: 'var(--mid)' }}>
                Elektro-Bozogul ist Ihr Ansprechpartner für fachgerechte Elektroarbeiten in Wien.
                Ob akute Störung, geplante Elektroinstallation oder rechtssicherer E-Befund:
                Wir betreuen Privatkunden, Unternehmen und Hausverwaltungen mit sauberer
                Ausführung, verlässlicher Terminabstimmung und klarer Kommunikation.
              </p>
              <p style={{ color: 'var(--mid)' }}>
                Von Altbauwohnungen bis zu modernen Objekten in den Wiener Bezirken
                übernehmen wir Elektroarbeiten mit Fokus auf Sicherheit, Nachvollziehbarkeit
                und alltagstaugliche Lösungen. Auch im Notfall sind wir rasch erreichbar.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/leistungen/elektriker-wien.jpg"
                alt="Elektriker Wien – Elektro-Bozogul Fahrzeug"
                style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', maxHeight: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                loading="lazy"
              />
              {/* Meisterbetrieb Badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '12px',
                padding: '14px 20px',
              }}>
                <p style={{ color: 'white', fontWeight: 800, fontSize: '15px', marginBottom: '2px' }}>Meisterbetrieb</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontWeight: 500 }}>Qualität aus Wien</p>
              </div>
            </div>
          </div>

          {/* 6 Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="feature-cards-grid">
            {[
              { title: '7/24 Elektriker in Wien', desc: 'Auch bei Stromausfall oder akuten Defekten sind wir in Wien schnell erreichbar.' },
              { title: 'In allen 23 Bezirken im Einsatz', desc: 'Von der Inneren Stadt bis Donaustadt betreuen wir Kunden in ganz Wien.' },
              { title: 'Klare Preisstruktur', desc: 'Wir kommunizieren Aufwand und Kosten nachvollziehbar und ohne Unklarheit.' },
              { title: 'Für Privat, Gewerbe & Hausverwaltung', desc: 'Verlässliche Elektroarbeiten für Wohnungen, Betriebe und verwaltete Objekte.' },
              { title: 'Fachgerechte Elektroinstallation', desc: 'Saubere Ausführung bei Neuinstallation, Erweiterung und Modernisierung.' },
              { title: 'E-Befund und Prüfung', desc: 'Prüfung und Dokumentation Ihrer Anlage nach ÖNORM.' },
            ].map((card) => (
              <div key={card.title} style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  {/* Check Icon SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '20px', flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p style={{ color: 'var(--dark)', fontWeight: 800, fontSize: '15px', lineHeight: 1.3 }}>{card.title}</p>
                </div>
                <p style={{ color: 'var(--mid)', fontSize: '13px', lineHeight: 1.6, paddingLeft: '32px' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA GREEN BANNER ─────────────────────────────────── */}
      <section style={{ background: 'var(--primary)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Vertrauen Sie die elektrische Anlage
          </p>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            maxWidth: '780px',
            margin: '0 auto 32px',
            lineHeight: 1.2,
            textTransform: 'uppercase',
          }}>
            Vertrauenswürdigen Menschen an,<br />
            und Ihr Haus wird immer hell bleiben.
          </h2>
          <a href="tel:+436601230073" className="btn-sparkle">
            <span className="text_button" style={{ padding: '14px 36px', fontSize: '16px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.34-1.34a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +43 660 123 00 73
            </span>
          </a>
        </div>
      </section>

      {/* ── DIENSTLEISTUNGEN LIST ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="dienst-grid">
            {/* Görsel — sol */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/wien elektriker notdienst1.jpg"
                alt="Elektriker Wien – Sicherungskasten"
                style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', maxHeight: '460px', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
                loading="lazy"
              />
            </div>
            {/* Checklist — sağ */}
            <div>
              <p className="eyebrow">Leistungsübersicht</p>
              <h2 style={{ marginBottom: '16px' }}>
                Dienstleistungen, die wir im Bereich <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Elektroberatung</em> anbieten
              </h2>
              <p style={{ color: 'var(--mid)', marginBottom: '28px' }}>
                Unser Elektriker Notdienst in Wien steht Ihnen in allen Bereichen der Elektrotechnik zur Verfügung:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Stromausfall-Behebung (Wohnung, Haus, Gewerbe)',
                  'FI-Schalter & Sicherungen prüfen oder ersetzen',
                  'Kurzschluss-Suche & Leitungsreparaturen',
                  'Anschluss von Haushalts- & Küchengeräten',
                  'Elektroinstallationen & Renovierungen',
                  'Beleuchtung & Stromverteilung prüfen',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '20px', flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span style={{ color: 'var(--dark)', fontWeight: 600, fontSize: '15px', lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS / REFERENZEN ─────────────────────────────── */}
      <section className="section" style={{ background: '#f8fafc', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <p className="eyebrow">Kundenstimmen</p>
            <h2>Unternehmen, Hausverwaltungen und Kunden setzen auf Elektro-Bozogul</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="reviews-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { name: 'Thomas K.', text: 'Sehr kompetent und schnell. Nach dem Stromausfall war das Team innerhalb von 45 Minuten vor Ort.', stars: 5 },
                { name: 'Hausverwaltung Mayer & Co.', text: 'Verlässlicher Partner für unsere Wohnanlagen. E-Befunde werden immer pünktlich und rechtssicher erstellt.', stars: 5 },
                { name: 'Maria S.', text: 'Top Arbeit bei der Elektroinstallation in unserer neuen Wohnung. Faire Preise und sehr sauber gearbeitet.', stars: 5 },
              ].map((r) => (
                <div
                  key={r.name}
                  style={{
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5C800">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p style={{ color: 'var(--dark)', fontSize: '14px', lineHeight: 1.6, marginBottom: '8px' }}>{r.text}</p>
                  <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '13px' }}>{r.name}</p>
                </div>
              ))}
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/wien elektriker notdienst3.jpg"
                alt="Wien – Elektro-Bozogul Einsatzgebiet"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  height: '460px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                }}
                loading="lazy"
              />
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <a href="/kontakt" className="btn-sparkle">
                  <span className="text_button" style={{ padding: '12px 28px' }}>Beratungsgespräch vereinbaren</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-BEFUND INFO ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="ebefund-grid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/leistungen/Rechtssicherer-E-Befund-wien.jpg"
                alt="E-Befund Wien"
                style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', maxHeight: '380px', boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow">E-Befund & E-Check</p>
              <h2 style={{ marginBottom: '16px' }}>
                Verlässliche Sicherheit durch den E-Befund (E-Check)
              </h2>
              <p style={{ color: 'var(--mid)', marginBottom: '20px' }}>
                Ein gültiger E-Befund ist für Vermieter, Hausverwaltungen und
                Gewerbetreibende gesetzlich vorgeschrieben (ETV 2020 / MRG). Ohne
                gültigen Befund riskieren Sie den Versicherungsschutz. Elektro-Bozogul
                erstellt rechtssichere E-Befunde schnell und zuverlässig.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Prüfprotokoll nach ÖVE/ÖNORM E 8001', 'Rechtssicher für Vermieter & Hausverwaltungen', 'Schnelle Terminvergabe in ganz Wien'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 500, fontSize: '14px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/leistungen/e-befund-wien" className="btn btn--primary btn--lg">
                Mehr zum E-Befund →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEZIRKE SECTION ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          {/* Bezirke BadgeGroup Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '60px' }}>
            {BEZIRKE.map((b) => (
              <a
                key={b.slug}
                href={`/bezirke/${b.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <BadgeGroup
                  addonText={b.plz}
                  color="brand"
                  theme="modern"
                  size="md"
                >
                  {b.name}
                </BadgeGroup>
              </a>
            ))}
          </div>

          {/* Van Image + Title — Bottom Center */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '300px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/leistungen/wien-elektriker-notdienst.jpg"
              alt="Wien – Elektro-Bozogul in allen Bezirken"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }}
              loading="lazy"
            />
            {/* Dark Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
            }} />
            {/* Bottom Center Title */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              zIndex: 10,
            }}>
              <div style={{
                background: 'white',
                padding: '16px 32px',
                borderRadius: '20px',
                textAlign: 'center',
              }}>
                <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '18px', margin: 0 }}>Wien – Alle Bezirke</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section--sm" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>Häufig gestellte Fragen – Elektriker Wien</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item" style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <summary style={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: 'var(--dark)',
                  listStyle: 'none',
                  userSelect: 'none',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s',
                }}>
                  <span>{faq.q}</span>
                </summary>
                <div className="faq-answer" style={{
                  fontSize: '13px',
                  color: 'var(--mid)',
                  lineHeight: 1.5,
                  padding: '0 14px 12px 14px',
                  borderTop: '1px solid var(--border)',
                  maxHeight: '200px',
                  overflow: 'auto',
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO TEXT ─────────────────────────────────────────── */}
      <SeoText />
    </main>
  );
}
