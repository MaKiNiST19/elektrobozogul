import Image from 'next/image';
import type { Metadata } from 'next';
import { PolaroidCard } from '@/components/base/polaroid-card';

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
  // Newly added Wien-Elektriker-Bozogul images
  { src: '/images/gallery/wien-elektriker-bozogul2.jpeg', caption: 'Meisterbetrieb-Installation', category: 'Installation' },
  { src: '/images/gallery/wien-elektriker-bozogul3.jpeg', caption: 'Elektro-Anlage Wien', category: 'Installation' },
  { src: '/images/gallery/wien-elektriker-bozogul4.jpeg', caption: 'Notdienst Service', category: 'Notdienst' },
  { src: '/images/gallery/wien-elektriker-bozogul5.jpeg', caption: 'Verteilerkasten Projekt', category: 'Installation' },
  { src: '/images/gallery/wien-elektriker-bozogul6.jpeg', caption: 'Sicherheits-Überprüfung', category: 'Sicherheit' },
  { src: '/images/gallery/wien-elektriker-bozogul7.jpeg', caption: 'Elektrowerkstatt Wien', category: 'Installation' },
  { src: '/images/gallery/wien-elektriker-bozogul8.jpeg', caption: 'Komplettverkabelung', category: 'Installation' },
  { src: '/images/gallery/wien-elektriker-bozogul9.jpeg', caption: 'Elektro-Sanierung Projekt', category: 'Sanierung' },
  { src: '/images/gallery/wien-elektriker-bozogul10.jpeg', caption: 'Schaltschrankbau Wien', category: 'Installation' },
  { src: '/images/gallery/wien-elektriker-bozogul11.jpeg', caption: 'FI-Schutzschalter Montage', category: 'Sicherheit' },
  { src: '/images/gallery/wien-elektriker-bozogul12.jpeg', caption: 'Professionelle Elektroinstallation', category: 'Installation' },

  // Newly added Notdienst images
  { src: '/images/gallery/elektro-bozogul-wien-elektriker-notdienst1.jpeg', caption: 'Notdienst Einsatz', category: 'Notdienst' },
  { src: '/images/gallery/elektro-bozogul-wien-elektriker-notdienst2.jpeg', caption: 'Stromausfall Behebung', category: 'Notdienst' },
  { src: '/images/gallery/elektro-bozogul-wien-elektriker-notdienst3.jpeg', caption: 'Notsicherung', category: 'Notdienst' },
  { src: '/images/gallery/elektro-bozogul-wien-elektriker-notdienst4.jpeg', caption: 'Fehlersuche', category: 'Notdienst' },
  { src: '/images/gallery/elektro-bozogul-wien-elektriker-notdienst5.jpeg', caption: 'Sicherheits-Check', category: 'Notdienst' },

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
  { src: '/images/gallery/wien elektriker notdienst13.jpeg', caption: 'Elektrik im Altbau', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst14.jpeg', caption: 'Verteilerbau nach Maß', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst15.jpeg', caption: 'Hausverwaltungs-Projekt', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst16.jpeg', caption: 'FI-Schutzschalter Einbau', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst17.jpeg', caption: 'Kabelmontage & Verlegung', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst18.jpeg', caption: 'Schaltschrankbau', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst19.jpeg', caption: 'Leitungsschutz-Tausch', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst20.jpeg', caption: 'Gewerbe Installation', category: 'Installation' },
  { src: '/images/gallery/wien elektriker notdienst21.jpeg', caption: 'Stiegenhaus-Beleuchtung', category: 'Beleuchtung' },
  { src: '/images/gallery/wien elektriker notdienst22.jpeg', caption: 'Erdung & Potentialausgleich', category: 'Sicherheit' },
  { src: '/images/gallery/wien elektriker notdienst23.jpeg', caption: 'Zuleitung erneuern', category: 'Sanierung' },
  { src: '/images/gallery/wien elektriker notdienst24.jpeg', caption: 'Meisterarbeit im Detail', category: 'Installation' },
  
  // New images: elektro bozogul wien elektriker 3-33
  { src: '/images/gallery/elektro bozogul wien elektriker3.jpeg', caption: 'Installation Wien', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker4.jpeg', caption: 'Elektro-Sanierung', category: 'Sanierung' },
  { src: '/images/gallery/elektro bozogul wien elektriker5.jpeg', caption: 'Sicherungs-Tausch', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker6.jpeg', caption: 'Prüf-Befund', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker7.jpeg', caption: 'Neuinstallation', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker8.jpeg', caption: 'Elektro-Service', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker9.jpeg', caption: 'Verteiler-Check', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker10.jpeg', caption: 'Fachmontage', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker11.jpeg', caption: 'Elektrik Altbau', category: 'Sanierung' },
  { src: '/images/gallery/elektro bozogul wien elektriker12.jpeg', caption: 'ÖNORM Installation', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker13.jpeg', caption: 'Kabelweg-Bau', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker14.jpeg', caption: 'Zählerkasten-Umbau', category: 'Sanierung' },
  { src: '/images/gallery/elektro bozogul wien elektriker15.jpeg', caption: 'Fehlerdiagnose', category: 'Notdienst' },
  { src: '/images/gallery/elektro bozogul wien elektriker16.jpeg', caption: 'Blitzschutz-Vorsorge', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker17.jpeg', caption: 'Sicherheits-Messung', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker18.jpeg', caption: 'Industrie-Anlage', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker19.jpeg', caption: 'Steuerungsbau', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker20.jpeg', caption: 'E-Befund Wien', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker21.jpeg', caption: 'Verkabelung-Meister', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker22.jpeg', caption: 'Moderne Elektrik', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker23.jpeg', caption: 'Komplett-Installation', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker24.jpeg', caption: 'Notfall-Behebung', category: 'Notdienst' },
  { src: '/images/gallery/elektro bozogul wien elektriker25.jpeg', caption: 'Störungssuche', category: 'Notdienst' },
  { src: '/images/gallery/elektro bozogul wien elektriker26.jpeg', caption: 'Gebäude-Technik', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker27.jpeg', caption: 'Erdungs-Anlage', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker28.jpeg', caption: 'PV-Anschluss', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker29.jpeg', caption: 'Haus-Sanierung', category: 'Sanierung' },
  { src: '/images/gallery/elektro bozogul wien elektriker30.jpeg', caption: 'Gewerbe-Elektrik', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker31.jpeg', caption: 'Sicherungskasten', category: 'Installation' },
  { src: '/images/gallery/elektro bozogul wien elektriker32.jpeg', caption: 'Brandschutz-Elektro', category: 'Sicherheit' },
  { src: '/images/gallery/elektro bozogul wien elektriker33.jpeg', caption: 'Meisterqualität', category: 'Installation' },
];

const categories = ['Alle', 'Installation', 'Sanierung', 'Notdienst', 'Sicherheit', 'Beleuchtung'];

export default function UnsereArbeitenPage() {
  return (
    <>
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

      <section className="leistung-hero" style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--primary)',
        color: 'var(--white)',
        padding: '132px 0 80px',
        borderBottom: '4px solid var(--yellow)'
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}>
          <Image
            src="/images/gallery/wien elektriker notdienst1.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--primary) 0%, rgba(15,78,57,0.92) 100%)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: 'var(--yellow)', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--primary)' }}>
            📷 {galleryImages.length} Projektbilder
          </div>
          <h1 className="hero-title">
            Unsere Arbeiten <br/><span style={{ color: 'var(--yellow)' }}>& Projekte</span>
          </h1>
          <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'rgba(255,255,255,.9)', lineHeight: 1.7 }}>
            Willkommen in unserer Projektgalerie. Hier finden Sie echte Einblicke in unsere tägliche Arbeit als Elektriker-Meisterbetrieb in Wien. 
            Von der Altbau-Sanierung bis zum 24/7 Notdienst – wir stehen für Qualität und Sicherheit.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section style={{ background: 'var(--white)', padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat, i) => (
              <span key={cat} className="category-pill" style={{
                background: i === 0 ? 'var(--primary)' : 'var(--bg)',
                color: i === 0 ? 'white' : 'var(--mid)',
                border: '1px solid ' + (i === 0 ? 'var(--primary)' : 'var(--border)'),
              }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Polaroid Gallery Grid */}
      <section className="section" style={{ background: 'var(--bg)', paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, i) => {
               // Pseudo-random rotation between -3 and 3 degrees for organic feel
               const rotation = ( (i * 13) % 7 ) - 3;
               return (
                <PolaroidCard 
                  key={i}
                  imageUrl={img.src}
                  caption={img.caption}
                  rotation={rotation}
                />
               );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--primary)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '32px' }}>
            Planen Sie Ihr nächstes Projekt?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 48px' }}>
            Kontaktieren Sie uns für eine unverbindliche Beratung oder ein Angebot in Wien und Umgebung.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+436601230073" className="btn-sparkle">
              <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', padding: '16px 40px', fontSize: '18px' }}>
                ☎ +43 660 1230073
              </span>
            </a>
            <a href="/kontakt" className="btn-sparkle">
              <span className="text_button" style={{ background: 'transparent', border: '2px solid white', padding: '16px 40px', fontSize: '18px' }}>
                Jetzt anfragen
              </span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .category-pill {
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .category-pill:hover {
          background: var(--primary-light) !important;
          color: var(--primary) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
      `}</style>
    </>
  );
}
