import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LEISTUNGEN } from '@/lib/leistungen';
import { BEZIRKE } from '@/lib/bezirke';
import { SERVICE_CONTENT } from '@/lib/service-content';

import { PolaroidCard } from '@/components/base/polaroid-card';
import { RatingBadge } from '@/components/foundations/rating-badge';
import { BadgeGroup } from '@/components/base/badges/badge-groups';
import BrandCarousel from '@/components/foundations/BrandCarousel';
import LeistungSeoText from '@/components/LeistungSeoText';

export async function generateStaticParams() {
  return LEISTUNGEN.map(l => ({ leistung: l.slug }));
}

export async function generateMetadata({ params }: { params: { leistung: string } }): Promise<Metadata> {
  const leistung = LEISTUNGEN.find(l => l.slug === params.leistung);
  if (!leistung) return {};
  return {
    title: leistung.title.includes('Wien') ? leistung.title : `${leistung.title} Wien | Elektro-Bozogul`,
    description: `${leistung.description} Befugter Elektriker in Wien. Installation & Beratung nach ÖNORM. ☎ +43 660 1230073`,
    alternates: { canonical: `https://elektro-bozogul.at/leistungen/${leistung.slug}` },
  };
}

export default function LeistungDetailPage({ params }: { params: { leistung: string } }) {
  const leistung = LEISTUNGEN.find(l => l.slug === params.leistung);
  if (!leistung) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": leistung.title.includes('Wien') ? leistung.title : `${leistung.title} Wien`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://elektro-bozogul.at/#business",
          "name": "Elektro-Bozogul",
          "telephone": "+436601230073",
        },
        "areaServed": {
          "@type": "City",
          "name": "Wien",
        },
        "url": `https://elektro-bozogul.at/leistungen/${leistung.slug}`,
        "description": leistung.description,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://elektro-bozogul.at" },
          { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://elektro-bozogul.at/leistungen" },
          { "@type": "ListItem", "position": 3, "name": leistung.shortTitle }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero with Background Image – 50vh, goes under navbar */}
      <section className="leistung-hero" style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--primary)',
        color: 'var(--white)',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 0 60px',
        marginTop: 'calc(-1 * var(--nav-h))',
        borderBottom: '4px solid var(--yellow)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <Image
            src={leistung.image}
            alt=""
            fill
            style={{
              objectFit: 'cover',
            }}
            priority
          />
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,78,57,0.92) 0%, rgba(15,78,57,0.8) 50%, rgba(15,78,57,0.7) 100%)',
            zIndex: 1
          }} />
        </div>

        {/* Breadcrumb inside hero */}
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ position: 'relative', zIndex: 2, marginTop: 'calc(var(--nav-h) + 16px)' }}>
          <ol>
            <li><a href="/">Startseite</a></li>
            <li><a href="/leistungen">Leistungen</a></li>
            <li><span>{leistung.shortTitle}</span></li>
          </ol>
        </nav>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h1 style={{ color: 'white', fontSize: '2.8rem', fontWeight: 800 }}>
              {leistung.title.includes('Wien') ? leistung.title : `${leistung.title} Wien`}
            </h1>
          </div>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6 }}>
            {leistung.description}
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+436601230073" className="btn-sparkle">
              <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', fontSize: '16px' }}>☎ +43 660 1230073</span>
            </a>
            <a href="mailto:office@elektro-bozogul.at" className="btn-text-fill">
              <span className="actual-text">E-Mail senden</span>
              <span aria-hidden="true" className="hover-text">E-Mail senden</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BADGE BAR
      ═══════════════════════════════════════════════════ */}
      <div className="badge-bar">
        <a href="/notfall-elektriker" className="badge-item">
          <RatingBadge
            title="Schnelle Hilfe in ganz Wien"
            subtitle="Soforteinsatz in allen 23 Bezirken"
            rating={5}
            theme="dark"
          />
        </a>
        <a href="#leistungen" className="badge-item">
          <RatingBadge
            title="E-Befund & Elektroinstallation"
            subtitle="Zertifizierter Meisterbetrieb"
            rating={5}
            theme="dark"
          />
        </a>
        <a href="/kontakt" className="badge-item">
          <RatingBadge
            title="Für Privat, Gewerbe & Hausverwaltung"
            subtitle="Ihr Partner für Wien & Umgebung"
            rating={5}
            theme="dark"
          />
        </a>
      </div>

      <BrandCarousel />

      {/* Content Section */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '60px' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="leistung-content-grid">
            <div>
              <article className="prose">
                {SERVICE_CONTENT[leistung.slug] ? (
                  <div dangerouslySetInnerHTML={{ __html: SERVICE_CONTENT[leistung.slug] }} />
                ) : (
                  <>
                    <h2>Professionelle {leistung.title} in allen 23 Bezirken</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                      Suchen Sie einen zuverlässigen Elektriker für <strong>{leistung.title} in Wien</strong>? 
                      Elektro-Bozogul ist Ihr befugter Fachbetrieb für alle Belange rund um {leistung.title}.
                      Unsere Fachleute beraten Sie umfassend und sorgen für eine normgerechte Ausführung nach ÖNORM E 8001 und ÖVE-Richtlinien.
                    </p>
                    
                    <div style={{ background: 'var(--primary-light)', padding: '32px', borderRadius: '12px', border: '1px solid rgba(15, 78, 57, 0.1)', marginBottom: '40px' }}>
                      <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Unsere Schwerpunkte für {leistung.shortTitle}</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {leistung.keywords.map((kw, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: 'var(--yellow)', borderRadius: '50%', color: 'var(--primary)', fontSize: '14px' }}>✓</span>
                            {kw}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p style={{ marginBottom: '24px' }}>
                      Egal ob privates Wohnobjekt, Gewerbebetrieb oder Hausverwaltung – wir bieten Ihnen maßgeschneiderte Lösungen und transparente Angebote. Bei jedem Projekt legen wir größten Wert auf Sicherheit, Langlebigkeit und modernste Technik.
                    </p>
                  </>
                )}

                <p style={{ marginTop: '40px' }}>
                  Wählen Sie unten Ihren Bezirk für lokale Informationen zu unseren Leistungen in Ihrer Nähe.
                </p>
              </article>

              {/* Bezirke Grid */}
              <div style={{ marginTop: '50px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '32px' }}>{leistung.shortTitle} in Ihrem Wiener Bezirk</h2>
                <div className="bezirk-grid">
                  {BEZIRKE.map(b => (
                    <a key={b.slug} href={`/bezirke/${b.slug}/${leistung.slug}`} style={{ textDecoration: 'none' }}>
                      <BadgeGroup addonText={b.plz} color="brand" theme="modern">
                        {b.name}
                      </BadgeGroup>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar – sticky until gallery */}
            <aside style={{ position: 'sticky', top: 'calc(var(--nav-h) + 24px)', alignSelf: 'start' }}>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '24px', borderRadius: 'var(--r-lg)' }}>
                <h3>Andere Leistungen</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                  {LEISTUNGEN.filter(l => l.slug !== leistung.slug).map(l => (
                    <a key={l.slug} href={`/leistungen/${l.slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--mid)', textDecoration: 'none', padding: '6px 8px', borderRadius: '4px', transition: 'background .15s' }}>
                      <span>⚡</span> {l.shortTitle}
                    </a>
                  ))}
                </div>
              </div>
              
              <div style={{ marginTop: '20px', background: 'var(--yellow)', padding: '24px', borderRadius: 'var(--r-lg)' }}>
                <h3>Notfall?</h3>
                <p style={{ marginTop: '10px', fontSize: '14px' }}>Haben Sie einen Stromausfall oder ein dringendes Problem mit {leistung.title}?</p>
                <a href="/notfall-elektriker" className="btn btn--primary" style={{ marginTop: '20px', width: '100%', display: 'inline-block', textAlign: 'center' }}>24/7 Notfall-Service</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Galeri ve Projeler - Polaroid */}
      <section className="section" style={{ background: 'var(--bg)', paddingTop: '100px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Vor Ort in ganz Wien</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 48px', color: 'var(--mid)' }}>Wir sind stolz auf unsere Arbeit. Hier finden Sie ein paar Eindrücke von unseren elektrotechnischen Arbeiten in verschiedenen Wiener Bezirken.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <PolaroidCard imageUrl="/images/gallery/wien-elektriker-notdienst.jpg" caption={`Elektro-Service in ${leistung.shortTitle}`} rotation={-2} />
            <PolaroidCard imageUrl="/images/gallery/wien-elektriker-notdienst1.jpg" caption="Meisterqualität vor Ort" rotation={1.5} />
            <PolaroidCard imageUrl="/images/gallery/wien-elektriker-notdienst2.jpg" caption="Sicher & Normgerecht" rotation={-1} />
            <PolaroidCard imageUrl="/images/gallery/wien-elektriker-notdienst3.jpg" caption="Ihr lokaler Partner" rotation={2} />
          </div>
        </div>
      </section>

      <BrandCarousel />

      {/* Authority SEO Content */}
      <LeistungSeoText leistung={leistung} />
    </>
  );
}
