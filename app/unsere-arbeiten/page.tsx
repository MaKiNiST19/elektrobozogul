import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unsere Arbeiten & Galerie – Elektro-Bozogul Wien',
  description: 'Einblicke in unsere abgeschlossenen Projekte: Elektroinstallationen, Verteilerkästen, Notdiensteinsätze und Sanierungen in Wien. Meisterbetrieb-Qualität im Bild.',
  alternates: { canonical: 'https://elektro-bozogul.at/unsere-arbeiten' },
  openGraph: {
    title: 'Unsere Arbeiten & Galerie – Elektro-Bozogul Wien',
    description: 'Bilder aus unserem Alltag als Elektriker-Meisterbetrieb in Wien. Vom Verteilerkastentausch bis zur Komplettsanierung.',
    url: 'https://elektro-bozogul.at/unsere-arbeiten',
    images: [{ url: '/images/gallery/wien elektriker notdienst1.jpg', alt: 'Elektro-Bozogul Galerie' }],
  },
};

const galleryImages = [
  { src: '/images/gallery/wien elektriker notdienst1.jpg',  caption: 'Verteilerkasten-Erneuerung', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst2.jpg',  caption: 'FI-Schalter Montage', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst3.jpg',  caption: 'Altbau-Elektrosanierung', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst4.jpg',  caption: 'Leitungssuche & Diagnose', category: 'Notdienst' },
  { src: '/images/gallery/wien elektriker notdienst5.jpg',  caption: 'Notdienst-Einsatz Wien', category: 'Notdienst' },
  { src: '/images/gallery/wien elektriker notdienst6.jpg',  caption: 'Stromausfall-Behebung', category: 'Notdienst' },
  { src: '/images/gallery/wien elektriker notdienst7.jpeg', caption: 'Sicherungskasten-Modernisierung', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst8.jpeg', caption: 'Kabelinstallation im Neubau', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst9.jpeg', caption: 'Steckdosen-Erweiterung', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst10.jpeg', caption: 'Elektroverteiler nach ÖNORM', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst11.jpeg', caption: 'Lichtinstallation Wohnraum', category: 'Beleuchtung' },
  { src: '/images/gallery/wien elektriker notdienst12.jpeg', caption: 'Komplettsanierung Zählerkasten', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst13.jpeg', caption: 'Elektrik im Altbau – Vorher/Nachher', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst14.jpeg', caption: 'Verteilerbau nach Maß', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst15.jpeg', caption: 'Hausverwaltungs-Projekt Wien', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst16.jpeg', caption: 'Fehlerstrom-Schutzschalter Einbau', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst17.jpeg', caption: 'Kabelmontage & Verlegung', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst18.jpeg', caption: 'Schaltschrankbau', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst19.jpeg', caption: 'Leitungsschutzschalter-Tausch', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst20.jpeg', caption: 'Elektroinstallation Gewerbe', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst21.jpeg', caption: 'Stiegenhaus-Beleuchtung', category: 'Beleuchtung' },
  { src: '/images/gallery/wien elektriker notdienst22.jpeg', caption: 'Erdung & Potentialausgleich', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst23.jpeg', caption: 'Zuleitung erneuern', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst24.jpeg', caption: 'Meisterarbeit im Detail', category: 'Installation' },
];

const categories = ['Alle', 'Installation', 'Sanierung', 'Notdienst', 'Sicherheit', 'Beleuchtung'];

export default function UnsereArbeitenPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb" style={{ position: 'relative', zIndex: 5 }}>
        <ol itemScope itemType="https://schema.org/BreadcrumbList" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="/"><span itemProp="name">Startseite</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Unsere Arbeiten</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="leistung-hero" style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--primary)',
        color: 'var(--white)',
        padding: '132px 0 80px',
        borderBottom: '4px solid var(--yellow)'
      }}>
        {/* Background collage effect */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.12 }}>
          <Image
            src="/images/gallery/wien elektriker notdienst1.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--primary) 0%, rgba(15,78,57,0.95) 100%)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--yellow)' }}>
            📷 {galleryImages.length} Projektbilder
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', maxWidth: '700px' }}>
            Unsere Arbeiten in Wien
          </h1>
          <p style={{ maxWidth: '650px', fontSize: '1.15rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.7 }}>
            Einblicke in unseren Alltag als Elektriker-Meisterbetrieb: Von der Verteilerkasten-Sanierung 
            im Wiener Altbau bis zum Notdienst-Einsatz – jedes Bild erzählt eine Geschichte von 
            Präzision und Qualität.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{
        background: 'var(--dark)',
        padding: '0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          textAlign: 'center'
        }}>
          {[
            { number: '24', label: 'Projektbilder' },
            { number: '23', label: 'Wiener Bezirke' },
            { number: '9', label: 'Fachbereiche' },
            { number: '100%', label: 'Meisterqualität' },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: '24px 16px',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ color: 'var(--yellow)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '4px' }}>{stat.number}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter Pills (visual only, shows all) */}
      <section style={{ background: 'var(--bg)', padding: '40px 0 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '24px' }}>
            {categories.map((cat, i) => (
              <span key={cat} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'default',
                background: i === 0 ? 'var(--primary)' : 'white',
                color: i === 0 ? 'white' : 'var(--mid)',
                border: i === 0 ? 'none' : '1px solid var(--border)',
                transition: 'all 0.2s',
              }}>
                {cat}
                {i === 0 && <span style={{ background: 'rgba(255,255,255,0.25)', padding: '1px 7px', borderRadius: '12px', fontSize: '11px' }}>{galleryImages.length}</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section" style={{ background: 'var(--bg)', padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {galleryImages.map((img, i) => (
              <div 
                key={i}
                className="gallery-card"
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid var(--border)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: '260px',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={img.src}
                    alt={`${img.caption} – Elektro-Bozogul Wien`}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15,78,57,0.8) 0%, transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px',
                  }} className="gallery-card__overlay">
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>
                      🔍 Details ansehen
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '14px', color: 'var(--dark)', margin: 0, marginBottom: '4px' }}>
                      {img.caption}
                    </p>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      background: 'var(--primary-light, rgba(15,78,57,0.08))',
                      padding: '2px 10px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}>
                      {img.category}
                    </span>
                  </div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                  }}>
                    ⚡
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--primary)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--yellow)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Ihr Projekt ist das Nächste
          </p>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 800, maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.3 }}>
            Planen Sie ein Elektroprojekt in Wien?<br />Wir freuen uns auf Ihre Anfrage.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+436601230073" className="btn-sparkle">
              <span className="text_button" style={{
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 800,
                background: 'var(--yellow)',
                color: 'var(--primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                ☎ +43 660 1230073
              </span>
            </a>
            <a href="/kontakt" className="btn-sparkle">
              <span className="text_button" style={{
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 800,
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                backdropFilter: 'blur(8px)',
              }}>
                Kontakt aufnehmen
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Hover Styles */}
      <style>{`
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important;
        }
        .gallery-card:hover img {
          transform: scale(1.08);
        }
        .gallery-card:hover .gallery-card__overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
