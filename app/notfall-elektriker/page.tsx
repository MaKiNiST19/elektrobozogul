import type { Metadata } from 'next';
import { BEZIRKE } from '@/lib/bezirke';
import { BadgeGroup } from '@/components/base/badges/badge-groups';

export const metadata: Metadata = {
  title: '24h Elektriker Notdienst Wien | +43 660 1230073',
  description: '🔴 24/7 Elektriker Notdienst in allen 23 Wiener Bezirken. Soforthilfe bei Stromausfall, Defekten & Kurzschluss. Schnell vor Ort! ☎ +43 660 1230073',
  alternates: { canonical: 'https://elektro-bozogul.at/notfall-elektriker' },
};

export default function NotfallElektrikerPage() {
  const notfallSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "24h Elektriker Notdienst Wien",
        "serviceType": "Emergency Electrician",
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
        "url": "https://elektro-bozogul.at/notfall-elektriker",
        "description": "24/7 Elektriker Notdienst in allen 23 Wiener Bezirken. Soforthilfe bei Stromausfall, Defekten & Kurzschluss.",
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+436601230073",
            "contactType": "emergency",
            "availableLanguage": ["de", "tr"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://elektro-bozogul.at" },
          { "@type": "ListItem", "position": 2, "name": "24/7 Notdienst" }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(notfallSchema) }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>24/7 Notdienst</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="hero--notfall">
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.1)', padding: '6px 14px', borderRadius: '30px', fontSize: '13px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '24px' }}>
            🔴 Akute Hilfe in allen 23 Bezirken und Umgebung
          </div>
          <h1>
            24/7 Elektriker Notdienst Wien
          </h1>
          <p style={{ maxWidth: '700px', margin: '30px auto', fontSize: '1.25rem', color: 'rgba(255,255,255,.8)' }}>
            Haben Sie einen Stromausfall, Defekte oder einen Kurzschluss? Rufen Sie uns jetzt an. Wir sind Ihr verlässlicher Notfall-Elektriker – Tag & Nacht, auch an Sonn- und Feiertagen.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            <a href="tel:+436601230073" className="btn-sparkle" style={{ transform: 'scale(1.2)' }}>
              <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', fontSize: '1.2rem', padding: '16px 32px' }}>
                ☎ +43 660 1230073
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Service-Highlights */}
      <section className="section" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div className="feature-card" style={{ background: 'white', padding: '40px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>⚡</div>
              <h3>Schnelle Hilfe</h3>
              <p style={{ color: 'var(--mid)', marginTop: '12px' }}>Wir sind in kürzester Zeit bei Ihnen in jedem Wiener Gemeindebezirk – egal ob Favoriten, Donaustadt oder Döbling.</p>
            </div>
            <div className="feature-card" style={{ background: 'white', padding: '40px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🕒</div>
              <h3>24/7 Erreichbar</h3>
              <p style={{ color: 'var(--mid)', marginTop: '12px' }}>Wir stehen Ihnen rund um die Uhr zur Verfügung. Notfälle halten sich nicht an Geschäftszeiten – wir auch nicht.</p>
            </div>
            <div className="feature-card" style={{ background: 'white', padding: '40px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>⚖️</div>
              <h3>Faire Preise</h3>
              <p style={{ color: 'var(--mid)', marginTop: '12px' }}>Keine versteckten Kosten. Transparente Preisgestaltung auch im Notdienst – Vertrauen ist uns wichtig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail-Info Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', alignItems: 'start' }}>
            <article className="prose">
              <h2>Wann sollten Sie den Elektro-Notdienst rufen?</h2>
              <p>
                Elektrizität kann lebensgefährlich sein. Bei folgenden Anzeichen sollten Sie umgehend einen Fachbetrieb kontaktieren:
              </p>
              <ul>
                <li>Totaler oder teilweiser Stromausfall in Ihrer Wohnung/Ihrem Haus.</li>
                <li>Sicherungen fliegen ständig raus (Kurzschlussverdacht).</li>
                <li>Verschmorter Geruch an Steckdosen, Schaltern oder Sicherungskästen.</li>
                <li>Funkenbildung oder lautes Knistern in elektrischen Anlagen.</li>
                <li>Defekte FI-Schutzschalter (FI-Schalter löst aus und lässt sich nicht reaktivieren).</li>
                <li>Gefahr durch Wasser (z.B. Rohrbruch in der Nähe von Stromleitungen).</li>
              </ul>

              <h2 style={{ marginTop: '48px' }}>Einsatzgebiete in ganz Wien</h2>
              <p>
                Wir decken alle 23 Wiener Bezirke ab. Durch unsere zentrale Lage und mobile Einheiten sind wir in der Regel innerhalb kürzester Zeit an Ihrem Standort.
              </p>

              <div className="bezirk-grid" style={{ marginTop: '40px' }}>
                {BEZIRKE.map(b => (
                  <a key={b.slug} href={`/bezirke/${b.slug}`} style={{ textDecoration: 'none' }}>
                    <BadgeGroup addonText={b.plz} color="brand" theme="modern">
                      {b.name}
                    </BadgeGroup>
                  </a>
                ))}
              </div>
            </article>

            {/* Checklist/Sidebar */}
            <aside>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '32px', borderRadius: 'var(--r-lg)' }}>
                <h3 style={{ color: 'white', marginBottom: '20px' }}>Checkiste für den Notfall</h3>
                <ol style={{ paddingLeft: '20px', color: 'rgba(255,255,255,.85)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li> Ruhe bewahren und keine blinkenden oder rauchenden Geräte berühren.</li>
                  <li> Trennen Sie gefährdete Geräte vom Stromnetz, falls dies sicher möglich ist.</li>
                  <li> Überprüfen Sie kurz Ihren FI-Schalter und die Hauptsicherungen.</li>
                  <li> Versuchen Sie nicht, elektrische Defekte selbst zu reparieren.</li>
                  <li> Rufen Sie uns unter <a href="tel:+436601230073" style={{ color: 'white', fontWeight: 700 }}>+43 660 1230073</a> an.</li>
                </ol>
              </div>

              <div style={{ marginTop: '24px', border: '1px solid var(--border)', padding: '24px', borderRadius: 'var(--r-lg)', background: 'var(--bg)' }}>
                <h3>Kontaktinfos</h3>
                <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '14px' }}>
                  <strong>Firma:</strong> Elektro-Bozogul<br />
                  <strong>Hotline:</strong> +43 660 1230073<br />
                  <strong>E-Mail:</strong> office@elektro-bozogul.at<br />
                  <strong>Dienstzeiten:</strong> 24 Stunden, 7 Tage die Woche
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
