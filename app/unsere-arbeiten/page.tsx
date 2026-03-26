import type { Metadata } from 'next';
import { PolaroidCard } from '@/components/base/polaroid-card';

export const metadata: Metadata = {
  title: 'Unsere Arbeiten & Galerie – Elektro-Bozogul',
  description: 'Einblicke in unsere abgeschlossenen Projekte, Elektroinstallationen und Notdiensteinsätze in Wien.',
  alternates: { canonical: 'https://elektro-bozogul.at/unsere-arbeiten' },
};

export default function UnsereArbeitenPage() {
  const images = [
    { src: '/images/gallery/wien elektriker notdienst1.jpg', caption: 'Verteiler Erneuerung' },
    { src: '/images/gallery/wien elektriker notdienst2.jpg', caption: 'FI-Schalter Tausch' },
    { src: '/images/gallery/wien elektriker notdienst3.jpg', caption: 'Altbausanierung' },
    { src: '/images/gallery/wien elektriker notdienst4.jpg', caption: 'Leitungssuche' },
    { src: '/images/gallery/wien elektriker notdienst5.jpg', caption: 'Notdienst 24/7' },
    { src: '/images/gallery/wien elektriker notdienst6.jpg', caption: 'Stromausfall Behebung' },
  ];

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Unsere Arbeiten</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="leistung-hero" style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary)', color: 'var(--white)', padding: '132px 0 80px', borderBottom: '4px solid var(--yellow)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', fontSize: '2.8rem', fontWeight: 800 }}>Unsere Arbeiten</h1>
          <p style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6, marginTop: '20px' }}>
            Bilder aus unserem Alltag als konzessionierter Elektriker-Meisterbetrieb in Wien. 
            Vom Verteilerkastentausch bis hin zu komplexen Installationen.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
            gap: '40px',
            alignItems: 'center',
            justifyItems: 'center',
            padding: '40px 0'
          }}>
            {images.map((img, i) => (
              <div key={i} style={{ transform: `translateY(${i % 2 === 0 ? '-10px' : '10px'})` }}>
                <PolaroidCard 
                  imageUrl={img.src} 
                  caption={img.caption} 
                  rotation={i % 3 === 0 ? -3 : (i % 3 === 1 ? 4 : -1)} 
                />
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '80px', textAlign: 'center' }}>
             <a href="/kontakt" className="btn-sparkle" style={{ display: 'inline-flex', padding: 0 }}>
               <span className="text_button" style={{ padding: '16px 32px', fontSize: '16px' }}>Jetzt Termin vereinbaren</span>
             </a>
          </div>
        </div>
      </section>
    </>
  );
}
