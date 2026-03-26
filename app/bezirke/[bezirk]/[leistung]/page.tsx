import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BEZIRKE } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';
import { SERVICE_CONTENT } from '@/lib/service-content';
import { generateBezirkLeistungSchema, generateFAQSchema } from '@/lib/schema';
import { BadgeGroup } from '@/components/base/badges/badge-groups';
import { RatingBadge } from '@/components/foundations/rating-badge';
import { PolaroidCard } from '@/components/base/polaroid-card';
import BrandCarousel from '@/components/foundations/BrandCarousel';
import BezirkLeistungSeoText from '@/components/BezirkLeistungSeoText';
import path from 'path';
import fs from 'fs';

export async function generateStaticParams() {
  return BEZIRKE.flatMap(b => LEISTUNGEN.map(l => ({ bezirk: b.slug, leistung: l.slug })));
}

export async function generateMetadata({ params }: { params: { bezirk: string; leistung: string } }): Promise<Metadata> {
  const bezirk = BEZIRKE.find(b => b.slug === params.bezirk);
  const leistung = LEISTUNGEN.find(l => l.slug === params.leistung);
  if (!bezirk || !leistung) return {};
  return {
    title: `${leistung.title} ${bezirk.name} ${bezirk.plz} Wien`,
    description: `${leistung.shortTitle} im ${bezirk.shortName} Wien (${bezirk.plz}) von Elektro-Bozogul. Befugter Gewerbebetrieb. Gratis Kostenvoranschlag. ☎ +43 660 1230073`,
    alternates: { canonical: `https://elektro-bozogul.at/bezirke/${bezirk.slug}/${leistung.slug}` },
  };
}

function getCachedContent(bezirkSlug: string, leistungSlug: string) {
  try {
    const fp = path.join(process.cwd(), 'content', 'leistungen', `${bezirkSlug}--${leistungSlug}.json`);
    if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, 'utf-8'));
  } catch {}
  return null;
}

export default function BezirkLeistungPage({ params }: { params: { bezirk: string; leistung: string } }) {
  const bezirk = BEZIRKE.find(b => b.slug === params.bezirk);
  const leistung = LEISTUNGEN.find(l => l.slug === params.leistung);
  if (!bezirk || !leistung) notFound();

  const cached = getCachedContent(bezirk.slug, leistung.slug);
  const bezirkImgFile = `${bezirk.plz}-wien-elektriker.jpg`;
  const bezirkImgPath = path.join(process.cwd(), 'public', 'images', 'bezirke', bezirkImgFile);
  const hasBezirkImage = fs.existsSync(bezirkImgPath);
  const schema = generateBezirkLeistungSchema(bezirk, leistung);
  const otherBezirke  = BEZIRKE.filter(b => b.slug !== bezirk.slug).slice(0, 5);
  const otherLeistungen = LEISTUNGEN.filter(l => l.slug !== leistung.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb - Consistency with other pages */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="/"><span itemProp="name">Startseite</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="/bezirke"><span itemProp="name">Bezirke</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href={`/bezirke/${bezirk.slug}`}><span itemProp="name">{bezirk.name}</span></a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{leistung.shortTitle}</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* New Premium Hero */}
      <section className="leistung-hero" style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--primary)',
        color: 'var(--white)',
        padding: '132px 0 80px',
        borderBottom: '4px solid var(--yellow)'
      }}>
        {/* Background Image - bezirk-specific */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {hasBezirkImage && (
            <Image
              src={`/images/bezirke/${bezirkImgFile}`}
              alt={`${bezirk.name} Wien`}
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
              ? 'linear-gradient(135deg, rgba(15,78,57,0.88) 0%, rgba(0,0,0,0.65) 100%)'
              : 'linear-gradient(135deg, var(--primary) 0%, #0a3326 100%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--yellow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>📍 {bezirk.plz} {bezirk.name}</span>
            <span style={{ color: 'white opacity-40' }}>•</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>⚡ {leistung.shortTitle}</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              {leistung.title} <br/>
              <span style={{ color: 'var(--yellow)' }}>im {bezirk.name} – {bezirk.plz} Wien</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
              {bezirk.neighborhoods.slice(0, 8).map(n => (
                <div key={n} style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                  padding: '4px 12px', borderRadius: '30px', color: 'white', fontSize: '13px', 
                  fontWeight: 600, cursor: 'default'
                }}>
                  <span style={{ color: 'var(--yellow)' }}>📍</span>
                  {n}
                </div>
              ))}
            </div>
          </h1>
          <p style={{ maxWidth: '750px', fontSize: '1.25rem', color: 'rgba(255,255,255,.9)', lineHeight: 1.6, marginTop: '28px' }}>
            {leistung.description} Wir garantieren fachgerechte Ausführung nach ÖNORM und sind als Ihr lokaler Partner im {bezirk.shortName} rasch vor Ort.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="tel:+436601230073" className="btn-sparkle">
              <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', fontSize: '18px', padding: '14px 32px' }}>☎ +43 660 1230073</span>
            </a>
            <a href="mailto:office@elektro-bozogul.at" className="btn-text-fill">
              <span className="actual-text">E-Mail schreiben</span>
              <span aria-hidden="true" className="hover-text">E-Mail schreiben</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BADGE BAR (Consistency with Homepage)
      ═══════════════════════════════════════════════════ */}
      <div className="badge-bar">
        <a href="/notfall-elektriker" className="badge-item">
          <RatingBadge
            title="Schnelle Hilfe im Bezirk"
            subtitle={`Soforteinsatz in ${bezirk.name}`}
            rating={5}
            theme="dark"
          />
        </a>
        <a href="#leistungen" className="badge-item">
          <RatingBadge
            title={`${leistung.shortTitle} Profi`}
            subtitle="Meisterbetrieb in Wien"
            rating={5}
            theme="dark"
          />
        </a>
        <a href="/kontakt" className="badge-item">
          <RatingBadge
            title="Kostenlose Beratung"
            subtitle={`${bezirk.plz} & Umgebung`}
            rating={5}
            theme="dark"
          />
        </a>
      </div>

      <BrandCarousel />

      {/* ═══════════════════════════════════════════════════
          COMPACT BRAND GRID (Right below Badge Bar)
      ═══════════════════════════════════════════════════ */}

      {/* Inhalt */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '60px' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: '60px', alignItems: 'start' }}>
            <div>
              {cached ? (
                <article className="prose" dangerouslySetInnerHTML={{ __html: cached.content }} />
              ) : (
                <article className="prose">
                  <h2>{leistung.title} im {bezirk.name}</h2>
                  <p>
                    Elektro-Bozogul bietet <strong>{leistung.title.toLowerCase()}</strong> im {bezirk.name}
                    ({bezirk.plz} Wien) an. Als befugter Wiener Gewerbebetrieb arbeiten wir
                    nach <strong>ÖNORM E 8001</strong> und den geltenden ÖVE-Richtlinien.
                  </p>
                  <p>
                    Stadtteile &amp; Grätzl: {bezirk.neighborhoods.join(', ')}
                  </p>
                  <p>
                    Für einen gratis Kostenvoranschlag:
                    <a href="tel:+436601230073"> +43 660 1230073</a>
                  </p>
                </article>
              )}

              <div style={{ marginTop: '60px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>{leistung.shortTitle} in anderen Wiener Bezirken</h2>
                <div className="bezirk-grid">
                  {otherBezirke.map(b => (
                    <a key={b.slug} href={`/bezirke/${b.slug}/${leistung.slug}`} style={{ textDecoration: 'none' }}>
                      <BadgeGroup addonText={b.plz} color="brand" theme="modern">
                        {b.name}
                      </BadgeGroup>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div style={{ background: 'var(--primary)', borderRadius: 'var(--r-lg)', padding: '24px', marginBottom: '16px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: '14px' }}>
                  Anfrage stellen
                </p>
                <a href="tel:+436601230073" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', marginBottom: '10px', fontSize: '15px', fontWeight: 700 }}>
                  📞 +43 660 1230073
                </a>
                <a href="mailto:office@elektro-bozogul.at" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,.65)', fontSize: '13px', textDecoration: 'none' }}>
                  ✉ office@elektro-bozogul.at
                </a>
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,.12)', fontSize: '12px', color: 'rgba(255,255,255,.45)' }}>
                  Gratis Kostenvoranschlag · Befugter Gewerbebetrieb
                </div>
              </div>

              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '20px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '14px' }}>
                  Weitere Leistungen im {bezirk.name}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {otherLeistungen.map(l => (
                    <a key={l.slug} href={`/bezirke/${bezirk.slug}/${l.slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--mid)', textDecoration: 'none', padding: '7px 8px', borderRadius: 'var(--r-sm)', transition: 'background .15s' }}>
                      <span style={{ color: 'var(--primary)', fontSize: '14px' }}>⚡</span> {l.shortTitle}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION – 6 GRID GALLERY
      ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p className="eyebrow">Impressionen</p>
            <h2>Unsere Arbeit in {bezirk.name}</h2>
          </div>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '40px',
            alignItems: 'center',
            justifyItems: 'center'
          }}>
            <PolaroidCard imageUrl="/images/gallery/wien elektriker notdienst1.jpg" caption={`Projekt im ${bezirk.shortName} 1`} rotation={-2} />
            <PolaroidCard imageUrl="/images/gallery/wien elektriker notdienst2.jpg" caption={`Projekt im ${bezirk.shortName} 2`} rotation={3} />
            <PolaroidCard imageUrl="/images/gallery/wien elektriker notdienst3.jpg" caption={`Projekt im ${bezirk.shortName} 3`} rotation={-3} />
            <PolaroidCard imageUrl="/images/gallery/wien elektriker notdienst4.jpg" caption={`Projekt im ${bezirk.shortName} 4`} rotation={2} />
            <PolaroidCard imageUrl="/images/gallery/wien elektriker notdienst5.jpg" caption={`Projekt im ${bezirk.shortName} 5`} rotation={-1} />
            <PolaroidCard imageUrl="/images/gallery/wien elektriker notdienst6.jpg" caption={`Projekt im ${bezirk.shortName} 6`} rotation={4} />
          </div>
        </div>
      </section>

      {/* Unique SEO content (>1000 Words) */}
      <BezirkLeistungSeoText bezirk={bezirk} leistung={leistung} />
    </>
  );
}

export const revalidate = 2592000;
