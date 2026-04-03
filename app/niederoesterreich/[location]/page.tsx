import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NIEDEROESTERREICH_LOCATIONS, type NÖLocation } from '@/data/niederoesterreich';
import { LEISTUNGEN } from '@/lib/leistungen';
import { MagicCard } from '@/components/base/magic-card';
import { RatingBadge } from '@/components/foundations/rating-badge';

export async function generateStaticParams() {
  return NIEDEROESTERREICH_LOCATIONS.map(l => ({ location: l.slug }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const loc = NIEDEROESTERREICH_LOCATIONS.find(l => l.slug === params.location);
  if (!loc) return {};
  return {
    title: `Elektriker ${loc.name} ${loc.zip} | 24h Notdienst & Installation`,
    description: `✅ Ihr Elektriker in ${loc.name} (${loc.zip}). Elektro-Notdienst, E-Befund, Installationen & Sanierung. Zertifizierter Meisterbetrieb. ☎ +43 660 1230073`,
    alternates: { canonical: `https://elektro-bozogul.at/niederoesterreich/${loc.slug}` },
  };
}

export default function NÖLocationPage({ params }: { params: { location: string } }) {
  const loc = NIEDEROESTERREICH_LOCATIONS.find(l => l.slug === params.location);
  if (!loc) notFound();

  return (
    <>
      <section className="hero" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'linear-gradient(135deg, var(--primary) 0%, #0a3326 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>Startseite</a><span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 4px' }}>/</span></li>
              <li><span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>Niederösterreich</span><span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 4px' }}>/</span></li>
              <li><span style={{ color: 'white', fontSize: '13px', fontWeight: 600 }}>{loc.name}</span></li>
            </ol>
          </nav>

          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--yellow)' }}>
            ELEKTRIKER {loc.zip} · {loc.name} & UMGEBUNG
          </div>

          <h1 className="hero-title" style={{ maxWidth: '800px', color: 'white' }}>
            Ihr Elektriker in {loc.name} für Notdienst, E-Befund & Montage
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '650px' }}>
            {loc.description} Wir garantieren kurze Anfahrtszeiten und fachgerechte Elektrotechnik aus Meisterhand – direkt in {loc.name}.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="tel:+436601230073" className="btn-sparkle">
               <span className="text_button" style={{ padding: '12px 28px', fontSize: '15px', background: 'var(--yellow)', color: 'var(--primary)', fontWeight: 800 }}>
                 ☎ +43 660 1230073
               </span>
            </a>
            <a href="/kontakt" className="btn-sparkle">
               <span className="text_button" style={{ padding: '12px 28px', fontSize: '15px', background: 'rgba(255,255,255,0.1)', color: 'white', backdropFilter: 'blur(8px)' }}>
                 Kontakt aufnehmen
               </span>
            </a>
          </div>
        </div>
      </section>

      <div className="badge-bar">
        <div className="badge-item">
          <RatingBadge title="Vor Ort Service" subtitle={`Elektriker für ${loc.name}`} rating={5} theme="dark" />
        </div>
        <div className="badge-item">
          <RatingBadge title="Rasche Hilfe" subtitle="Auch in Niederösterreich" rating={5} theme="dark" />
        </div>
        <div className="badge-item">
          <RatingBadge title="24/7 Notdienst" subtitle={`${loc.zip} Notfall-Hotline`} rating={5} theme="dark" />
        </div>
      </div>

      <section className="section" style={{ background: 'var(--white)', paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '80px', alignItems: 'start' }}>
            <div>
              <article className="prose">
                <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>Meisterbetrieb Elektro-Bozogul in {loc.name}</h2>
                <p>
                  Suchen Sie einen verlässlichen <strong>Elektriker in {loc.name}</strong>? 
                  Obwohl wir unseren Hauptstandort in Wien haben, betreuen wir als regionaler Partner zahlreiche Kunden in <strong>{loc.zip} {loc.name}</strong> und Umgebung. 
                  Unser Team versteht sich auf alle Disziplinen der modernen Elektrotechnik – vom schnellen Störungsdienst bis zur Planung komplexer Anlagen.
                </p>
                
                <h3 style={{ fontSize: '1.6rem', marginTop: '40px' }}>Notdienst & Störungsbehebung rund um die Uhr</h3>
                <p>
                  Ein Stromausfall oder ein defekter FI-Schalter hält sich nicht an Geschäftszeiten. 
                  Deshalb bieten wir unseren <strong>24h Elektro-Notdienst auch für {loc.name}</strong> an. 
                  Dank unserer mobilen Techniker sind wir bei dringenden Notfällen oft innerhalb von 30 bis 60 Minuten vor Ort, um die Sicherheit Ihrer elektrischen Anlage wiederherzustellen.
                </p>

                <div style={{ background: 'var(--bg)', padding: '35px', borderRadius: '16px', margin: '40px 0', border: '1px solid var(--border)' }}>
                  <h4 style={{ margin: 0, color: 'var(--primary)', marginBottom: '15px', fontSize: '1.2rem' }}>Warum wir in {loc.name} der richtige Partner sind:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: 1.8 }}>
                    <li><strong>Kurze Anfahrtswege:</strong> Schnelle Erreichbarkeit über die Tangente oder Bundesstraßen.</li>
                    <li><strong>Transparente Kosten:</strong> Faire Preise ohne versteckte Gebühren.</li>
                    <li><strong>Zertifizierte Qualität:</strong> Arbeiten gemäß ÖVE/ÖNORM Normen für maximale Sicherheit.</li>
                    <li><strong>Vollservice:</strong> Von der Steckdose bis zum E-Befund alles aus einer Hand.</li>
                  </ul>
                </div>

                <h3 style={{ fontSize: '1.6rem', marginTop: '40px' }}>E-Befund & Anlagenprüfung in {loc.zip}</h3>
                <p>
                  Benötigen Sie einen rechtssicheren E-Befund für Ihre Immobilie in <strong>{loc.name}</strong>? 
                  Wir führen umfassende Anlagenprüfungen gemäß ETG 1992/ETV 2002 durch. 
                  Dies ist besonders wichtig bei Vermietung, Verkauf oder für Versicherungszwecke, um den ordnungsgemäßen Zustand der Elektrik nachzuweisen.
                </p>
              </article>

              <div className="service-grid" style={{ marginTop: '60px' }}>
                {LEISTUNGEN.slice(0, 3).map(l => (
                  <MagicCard key={l.slug} className="service-magic-card">
                    <div style={{ padding: '24px' }}>
                      <h4 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{l.shortTitle}</h4>
                      <p style={{ fontSize: '13px', opacity: 0.7, margin: 0 }}>Profi-Service für {loc.name}</p>
                    </div>
                  </MagicCard>
                ))}
              </div>
            </div>

            <aside style={{ position: 'sticky', top: '100px' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(15, 78, 57, 0.15)' }}>
                <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '15px' }}>24h Hotline</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '30px' }}>
                  Notdienst in {loc.name} benötigt? Rufen Sie uns direkt an:
                </p>
                <a href="tel:+436601230073" className="btn-sparkle" style={{ transform: 'scale(1)', width: '100%', padding: 0 }}>
                  <span className="text_button" style={{ width: '100%', background: 'var(--yellow)', color: 'var(--primary)', fontSize: '16px' }}>
                    ☎ +43 660 1230073
                  </span>
                </a>
                <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.5, marginTop: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Soforthilfe in {loc.zip}
                </p>
              </div>

              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginTop: '30px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '15px' }}>
                  Weitere Orte in der Region
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {NIEDEROESTERREICH_LOCATIONS.filter(l => l.region === loc.region && l.slug !== loc.slug).slice(0, 5).map(l => (
                    <a key={l.slug} href={`/niederoesterreich/${l.slug}`} style={{ fontSize: '12px', color: 'var(--primary)', textDecoration: 'none', background: 'white', padding: '5px 12px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                      {l.name}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
