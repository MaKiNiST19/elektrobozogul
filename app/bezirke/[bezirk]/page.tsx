import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BEZIRKE, type Bezirk } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';
import { generateBezirkSchema, generateFAQSchema } from '@/lib/schema';
import { RatingBadge } from '@/components/foundations/rating-badge';
import { BadgeGroup } from '@/components/base/badges/badge-groups';
import { MagicCard } from '@/components/base/magic-card';
import BrandCarousel from '@/components/foundations/BrandCarousel';
import { PolaroidCard } from '@/components/base/polaroid-card';
import path from 'path';
import fs from 'fs';
import BezirkSeoText from '@/components/BezirkSeoText';

export async function generateStaticParams() {
  return BEZIRKE.map(b => ({ bezirk: b.slug }));
}

export async function generateMetadata({ params }: { params: { bezirk: string } }): Promise<Metadata> {
  const bezirk = BEZIRKE.find(b => b.slug === params.bezirk);
  if (!bezirk) return {};
  return {
    title: `Elektriker ${bezirk.name} ${bezirk.plz} Wien`,
    description: `✅ Ihr Elektriker im ${bezirk.shortName} Wien (${bezirk.plz}). Elektroinstallation, Beleuchtung, Photovoltaik & Smart Home. Befugter Gewerbebetrieb. ☎ +43 660 1230073`,
    alternates: { canonical: `https://elektro-bozogul.at/bezirke/${bezirk.slug}` },
    openGraph: {
      title: `Elektriker ${bezirk.name} Wien | Elektro-Bozogul`,
      description: bezirk.description,
    },
  };
}

function getCachedContent(slug: string) {
  try {
    const fp = path.join(process.cwd(), 'content', 'bezirke', `${slug}.json`);
    if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, 'utf-8'));
  } catch {}
  return null;
}

export default function BezirkPage({ params }: { params: { bezirk: string } }) {
  const bezirk = BEZIRKE.find(b => b.slug === params.bezirk);
  if (!bezirk) notFound();

  const cached = getCachedContent(bezirk.slug);
  const bezirkImgFile = `${bezirk.plz}-wien-elektriker.jpg`;
  const bezirkImgPath = path.join(process.cwd(), 'public', 'images', 'bezirke', bezirkImgFile);
  const hasBezirkImage = fs.existsSync(bezirkImgPath);
  const bezirkSchema = generateBezirkSchema(bezirk);
  const faqSchema = cached?.faqs ? generateFAQSchema(cached.faqs) : null;

  const currentIndex = BEZIRKE.findIndex(b => b.slug === bezirk.slug);
  const neighbors = [
    BEZIRKE[currentIndex - 1],
    BEZIRKE[currentIndex + 1],
    BEZIRKE[(currentIndex + 5) % BEZIRKE.length],
  ].filter(Boolean) as Bezirk[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bezirkSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

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
          {hasBezirkImage && (
            <Image
              src={`/images/bezirke/${bezirkImgFile}`}
              alt={`${bezirk.name} Wien – ${bezirk.shortName}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          )}
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: hasBezirkImage
              ? 'linear-gradient(135deg, rgba(15,78,57,0.85) 0%, rgba(0,0,0,0.6) 100%)'
              : 'linear-gradient(135deg, var(--primary) 0%, #0a3326 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol itemScope itemType="https://schema.org/BreadcrumbList" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}><span itemProp="name">Startseite</span></a>
                <meta itemProp="position" content="1" />
                <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 4px' }}>/</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="/bezirke" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}><span itemProp="name">Bezirke</span></a>
                <meta itemProp="position" content="2" />
                <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 4px' }}>/</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" style={{ color: 'white', fontSize: '13px', fontWeight: 600 }}>{bezirk.name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--yellow)' }}>
            ELEKTRIKER {bezirk.plz} · {bezirk.shortName.toUpperCase()} WIEN und Umgebung
          </div>

          <h1 className="hero-title" style={{ maxWidth: '700px' }}>
            Elektriker {bezirk.name} für Elektroinstallation, E-Befund und Notdienst
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '600px' }}>
            {bezirk.description} Wir garantieren kurze Anfahrtswege und fachgerechte Ausführung in allen Grätzl des {bezirk.shortName}s.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <a href="/kontakt" className="btn-sparkle">
               <span className="text_button" style={{ 
                 padding: '12px 28px', 
                 fontSize: '15px', 
                 background: 'var(--yellow)',
                 color: 'var(--primary)',
                 fontWeight: 800
                }}>
                 Kontakt aufnehmen
               </span>
            </a>
            <a href="tel:+436601230073" className="btn-sparkle">
               <span className="text_button" style={{ 
                 padding: '12px 28px', 
                 fontSize: '15px',
                 background: 'rgba(255,255,255,0.1)',
                 color: 'white',
                 backdropFilter: 'blur(8px)'
                }}>
                 📞 +43 660 1230073
               </span>
            </a>
          </div>

          {/* Neighborhoods Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {bezirk.neighborhoods.map(n => (
              <span key={n} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '6px 14px', borderRadius: '30px', color: 'white', fontSize: '12px',
                fontWeight: 500,
              }}>
                📍 {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Bar - Consistency with Homepage */}
      <div className="badge-bar">
        <a href="#leistungen" className="badge-item">
          <RatingBadge
            title="Service im ganzen Bezirk"
            subtitle={`In allen Grätzl vom ${bezirk.name}`}
            rating={5}
            theme="dark"
          />
        </a>
        <a href="tel:+436601230073" className="badge-item">
          <RatingBadge
            title="Rasche Anfahrt"
            subtitle="Ihr lokaler Partner in Wien"
            rating={5}
            theme="dark"
          />
        </a>
        <a href="/notfall-elektriker" className="badge-item">
          <RatingBadge
            title="24/7 Notdienst"
            subtitle={`${bezirk.plz} & Umgebung`}
            rating={5}
            theme="dark"
          />
        </a>
      </div>

      <BrandCarousel />

      {/* Leistungen im Bezirk - Magic Grid */}
      <section className="section" style={{ background: 'var(--bg)', paddingTop: '120px' }} id="leistungen">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="eyebrow">Unsere Expertise</p>
            <h2 style={{ textAlign: 'center' }}>Elektriker-Leistungen im {bezirk.name}</h2>
            <p style={{ textAlign: 'center' }}>Von der schnellen Störungsbehebung bis zur komplexen Neuinstallation – wir decken das gesamte Spektrum der Elektrotechnik im {bezirk.shortName} Wien ab.</p>
          </div>

          <div className="service-grid">
            {LEISTUNGEN.map(l => (
              <a key={l.slug} href={`/leistungen/${l.slug}`} style={{ textDecoration: 'none' }}>
                <MagicCard className="service-magic-card">
                  <div className="service-card__img-container" style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <Image
                      src={l.image}
                      alt={`${l.title} ${bezirk.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{l.title}</h3>
                    <p className="service-card__desc">Profi-Service für {bezirk.name} ({bezirk.plz})</p>
                    <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                      <span className="btn-sparkle" style={{ transform: 'scale(0.85)', transformOrigin: 'center' }}>
                        <span className="text_button">Details</span>
                      </span>
                    </div>
                  </div>
                </MagicCard>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Content Section with Local Focus */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '60px' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '80px', alignItems: 'start' }}>
            <div>
              {cached ? (
                <article className="prose" dangerouslySetInnerHTML={{ __html: cached.mainContent }} />
              ) : (
                <article className="prose">
                  <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Professioneller Elektro-Service für {bezirk.name}</h2>
                  <p>
                    Suchen Sie einen verlässlichen <strong>Elektriker im {bezirk.shortName}</strong>? 
                    Elektro-Bozogul ist Ihr lokaler Experte für alles rund um Strom und Elektrotechnik in {bezirk.plz} Wien.
                    Als konzessionierter Meisterbetrieb betreuen wir Kunden in ganz {bezirk.name} – von der schnellen Hilfe bei 
                    einem Stromausfall bis zur umfassenden Elektroinstallation im Alt- oder Neubau.
                  </p>
                  
                  <h3 style={{ fontSize: '1.5rem', marginTop: '40px' }}>Warum Elektro-Bozogul im {bezirk.shortName} wählen?</h3>
                  <p>
                    Unsere Elektriker sind täglich im <strong>{bezirk.name}</strong> unterwegs und kennen die baulichen 
                    Gegebenheiten des Bezirks genau. Ob historische Bausubstanz oder moderne Neubauten rund um {bezirk.neighborhoods[0]} 
                    und {bezirk.neighborhoods[1]} – wir bieten maßgeschneiderte Lösungen, die den höchsten Sicherheitsstandards 
                    (ÖVE/ÖNORM E 8001) entsprechen.
                  </p>
                  
                  <div style={{ background: 'var(--bg)', padding: '30px', borderRadius: '12px', margin: '40px 0', border: '1px solid var(--border)' }}>
                    <h4 style={{ margin: 0, color: 'var(--primary)', marginBottom: '15px' }}>Regionale Abdeckung in {bezirk.name}:</h4>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                      Wir bedienen alle Stadtteile und Grätzl im {bezirk.shortName}, darunter: 
                      <strong> {bezirk.neighborhoods.join(', ')}</strong>. 
                      Dank unserer zentralen Lage in Wien sind wir bei Notfällen in {bezirk.plz} meist innerhalb von 30-60 Minuten vor Ort.
                    </p>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginTop: '40px' }}>Unsere Schwerpunkte in {bezirk.plz} Wien</h3>
                  <ul>
                    <li><strong>24/7 Störungsdienst:</strong> Soforthilfe bei Stromausfall, FI-Schalter Problemen oder Kurzschluss im {bezirk.name}.</li>
                    <li><strong>E-Befund & Anlagenprüfung:</strong> Rechtssichere Überprüfung Ihrer Elektrik für Hausverwaltungen, Vermieter oder Gewerbe.</li>
                    <li><strong>Sanierung:</strong> Modernisierung veralteter Leitungen und Sicherungskästen in Wiener Altbauwohnungen.</li>
                    <li><strong>Lichttechnik:</strong> Planung und Montage moderner LED-Beleuchtungssysteme.</li>
                  </ul>
                  
                  <p style={{ marginTop: '30px' }}>
                    Vertrauen Sie auf Qualität vom Meister. Wir beraten Sie gerne unverbindlich zu Ihrem Vorhaben im <strong>{bezirk.shortName}</strong>. 
                    Kontaktieren Sie uns unter <a href="tel:+436601230073">+43 660 1230073</a> oder per E-Mail.
                  </p>
                </article>
              )}

              {/* FAQ */}
              {cached?.faqs && (
                <div style={{ marginTop: '48px' }}>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>
                    Häufige Fragen – Elektriker {bezirk.name}
                  </h2>
                  <div className="faq-list">
                    {cached.faqs.map((faq: { q: string; a: string }, i: number) => (
                      <details key={i} className="faq-item">
                        <summary>{faq.q}</summary>
                        <div className="faq-answer">{faq.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar / Sidebar Content */}
            <aside style={{ position: 'sticky', top: '100px' }}>
              <div style={{ 
                background: 'var(--primary)', 
                color: 'white', 
                padding: '40px 30px', 
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(15, 78, 57, 0.2)'
              }}>
                <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '20px' }}>Kontakt & Notdienst</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '30px' }}>
                  Haben Sie ein dringendes Problem oder planen Sie ein Projekt im {bezirk.name}? Wir sind für Sie da.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="tel:+436601230073" className="btn-sparkle" style={{ transform: 'scale(1)', width: '100%', padding: 0 }}>
                    <span className="text_button" style={{ width: '100%', background: 'var(--yellow)', color: 'var(--primary)', fontSize: '16px' }}>
                      ☎ +43 660 1230073
                    </span>
                  </a>
                  <a href="mailto:office@elektro-bozogul.at" className="btn-text-fill" style={{ width: '100%', justifyContent: 'center', height: '50px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px' }}>
                    <span className="actual-text">E-Mail schreiben</span>
                    <span aria-hidden="true" className="hover-text">E-Mail schreiben</span>
                  </a>
                </div>

                <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--yellow)', marginBottom: '15px' }}>Ihr Team für {bezirk.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative', width: '50px', height: '50px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <Image src="/images/logo.png" alt="Logo" fill style={{ objectFit: 'contain', padding: '10px' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>Elektro-Bozogul</div>
                      <div style={{ fontSize: '12px', opacity: 0.6 }}>Meisterbetrieb Wien</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Grätzl Polaroid */}
              <div style={{ marginTop: '40px' }}>
                <PolaroidCard 
                  imageUrl="/images/gallery/wien elektriker notdienst1.jpg" 
                  caption={`Vor Ort im ${bezirk.shortName}`} 
                  rotation={2}
                />
              </div>

              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '24px', marginTop: '30px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '14px' }}>
                  Benachbarte Bezirke
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {neighbors.map(n => (
                    <a key={n.slug} href={`/bezirke/${n.slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--mid)', textDecoration: 'none', padding: '8px', borderRadius: '8px', transition: 'background .15s' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '10px', background: 'var(--white)', border: '1px solid var(--border)', padding: '2px 5px', borderRadius: '4px', color: 'var(--muted)' }}>{n.plz}</span>
                      {n.name}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Neighboring Districts Bottom */}
      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '32px', textAlign: 'center' }}>Auch in den Nachbarbezirken für Sie da</h2>
          <div className="bezirk-grid">
            {BEZIRKE.slice(0, 12).map(n => (
              <a key={n.slug} href={`/bezirke/${n.slug}`} style={{ textDecoration: 'none' }}>
                <BadgeGroup addonText={n.plz} color="brand" theme="modern">
                  {n.name}
                </BadgeGroup>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Unique SEO content for every Bezirk (>2000 Words Virtual Equivalent) */}
      <BezirkSeoText bezirk={bezirk} />
    </>
  );
}

export const revalidate = 2592000;
