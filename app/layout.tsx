import Image from 'next/image';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LEISTUNGEN } from '../lib/leistungen';
import { generateOrganizationSchema } from '../lib/schema';
import FooterBadge from '../components/FooterBadge';
import MobileNav from '../components/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f4e39',
};

export const metadata: Metadata = {
  title: 'Elektro-Bozogul | Ihr Elektriker in Wien – 24h Notdienst',
  description: 'Ihr zuverlässiger Elektriker in Wien. 24h Notdienst, Elektroinstallationen, E-Befund, Photovoltaik und Smart Home. Schnell & kompetent in allen Bezirken.',
  metadataBase: new URL('https://elektro-bozogul.at'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://elektro-bozogul.at',
    siteName: 'Elektro-Bozogul',
    title: 'Elektro-Bozogul | Ihr Elektriker in Wien – 24h Notdienst',
    description: 'Ihr zuverlässiger Elektriker in Wien. 24h Notdienst, Elektroinstallationen, E-Befund, Photovoltaik und Smart Home. Meisterbetrieb für alle 23 Bezirke.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elektro-Bozogul – Ihr Elektriker in Wien',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elektro-Bozogul | Elektriker Wien – 24h Notdienst',
    description: 'Meisterbetrieb für Elektroinstallation, E-Befund & Notdienst in allen 23 Wiener Bezirken.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="de">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <header className="navbar-wrap">
          <div className="navbar">
            <div className="navbar__inner">
               <a href="/" className="navbar__logo">
                  <Image
                    src="/images/logo.png"
                    alt="Elektro-Bozogul"
                    width={180}
                    height={40}
                    style={{ height: '40px', width: 'auto', objectFit: 'contain', display: 'block' }}
                    priority
                  />
               </a>

               <div className="navbar__links">
                  <a href="/" className="navbar__link">Startseite</a>
                  <div className="navbar__item-drop">
                    <a href="/leistungen" className="navbar__link navbar__link--drop">Leistungen</a>
                    <div className="navbar__dropdown">
                      {LEISTUNGEN.slice(0, 9).map((l) => (
                        <a key={l.slug} href={`/leistungen/${l.slug}`}>{l.shortTitle}</a>
                      ))}
                    </div>
                  </div>
                  <a href="/bezirke" className="navbar__link">Bezirke</a>
                  <a href="/ratgeber" className="navbar__link">Ratgeber</a>
                  <a href="/ueber-uns" className="navbar__link">Über uns</a>
                  <a href="/unsere-arbeiten" className="navbar__link">Galerie</a>
                  <a href="/kontakt" className="navbar__link">Kontakt</a>
               </div>

               <div className="navbar__right">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/elektro.bozogul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar__icon-btn"
                    aria-label="Instagram"
                    style={{
                      background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                      border: 'none',
                      borderRadius: '10px',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* Hamburger - mobile only */}
                  <MobileNav />
                  {/* CTA */}
                  <a href="tel:+436601230073" className="btn-sparkle desktop-only">
                    <span className="text_button" style={{ padding: '10px 20px', fontSize: '14px', fontWeight: 800 }}>Jetzt anrufen</span>
                  </a>
               </div>
            </div>
          </div>
        </header>

        {children}

        {/* Mobile nav drawer renders here */}

        <footer className="footer" style={{ background: 'var(--dark)', color: 'white', padding: '80px 0' }}>
          <div className="container">
            {/* Footer Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>
              {/* Brand Section */}
              <div>
                <div style={{ marginBottom: '20px' }}>
                  <Image
                    src="/images/logo.png"
                    alt="Elektro-Bozogul"
                    width={180}
                    height={40}
                    style={{ height: '40px', width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                  Ihr zuverlässiger Meisterbetrieb für Elektrotechnik in Wien. 24h Notdienst in allen 23 Bezirken.
                </p>
                {/* Trust Badge - Laurel Wreath Style */}
                <div style={{ marginTop: '20px' }}>
                  <FooterBadge />
                </div>
              </div>

              {/* Leistungen Column */}
              <div>
                <h4 style={{ color: 'white', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', marginBottom: '16px', textTransform: 'uppercase' }}>Leistungen</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Notdienst', href: '/notfall-elektriker' },
                    { label: 'E-Befund', href: '/leistungen/e-befund-wien' },
                    { label: 'Installation', href: '/leistungen/elektroinstallation-wien' },
                    { label: 'Beleuchtung', href: '/leistungen/beleuchtung-licht-wien' },
                    { label: 'Smart Home', href: '/leistungen/smart-home-wien' },
                  ].map((item) => (
                    <li key={item.label}><a href={item.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>{item.label}</a></li>
                  ))}
                </ul>
              </div>

              {/* Bezirke Column */}
              <div>
                <h4 style={{ color: 'white', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', marginBottom: '16px', textTransform: 'uppercase' }}>Wien</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Alle Bezirke', href: '/bezirke' },
                    { label: '1010 Innere Stadt', href: '/bezirke/1010-innere-stadt' },
                    { label: '1020 Leopoldstadt', href: '/bezirke/1020-leopoldstadt' },
                    { label: '1030 Landstraße', href: '/bezirke/1030-landstrasse' },
                    { label: 'Alle anzeigen', href: '/bezirke' },
                  ].map((item) => (
                    <li key={item.label}><a href={item.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>{item.label}</a></li>
                  ))}
                </ul>
              </div>

              {/* Unternehmen Column */}
              <div>
                <h4 style={{ color: 'white', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', marginBottom: '16px', textTransform: 'uppercase' }}>Unternehmen</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Über uns', href: '/ueber-uns' },
                    { label: 'Galerie', href: '/unsere-arbeiten' },
                    { label: 'Ratgeber', href: '/ratgeber' },
                    { label: 'Blog', href: '/blog' },
                    { label: 'Kontakt', href: '/kontakt' },
                    { label: 'WKO Profil', href: 'https://firmen.wko.at/elektro-bozogul/wien' },
                  ].map((item) => (
                    <li key={item.label}><a href={item.href} target={item.label === 'WKO Profil' ? '_blank' : undefined} rel={item.label === 'WKO Profil' ? 'noopener noreferrer' : undefined} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>{item.label}</a></li>
                  ))}
                </ul>
              </div>

              {/* Rechtliches Column */}
              <div>
                <h4 style={{ color: 'white', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', marginBottom: '16px', textTransform: 'uppercase' }}>Rechtliches</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Impressum', href: '/impressum' },
                    { label: 'Datenschutz', href: '/datenschutz' },
                    { label: 'AGB', href: '/agb' },
                    { label: 'Cookies', href: '/cookies' },
                  ].map((item) => (
                    <li key={item.label}><a href={item.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>{item.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Niederösterreich Regions Row */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '40px', marginTop: '40px', marginBottom: '60px' }}>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>Einsatzgebiete Niederösterreich</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                {[
                  { title: 'Süd / Südwest', towns: ['Vösendorf', 'Brunn am Gebirge', 'Perchtoldsdorf', 'Maria Enzersdorf', 'Mödling', 'Gumpoldskirchen', 'Guntramsdorf', 'Laxenburg', 'Hinterbrühl', 'Gaaden'] },
                  { title: 'West', towns: ['Purkersdorf', 'Pressbaum', 'Gablitz', 'Mauerbach', 'Klosterneuburg'] },
                  { title: 'Nord / Nordost', towns: ['Gerasdorf bei Wien', 'Wolkersdorf im Weinviertel', 'Korneuburg', 'Langenzersdorf', 'Bisamberg'] },
                  { title: 'Ost / Südost', towns: ['Schwechat', 'Fischamend', 'Rauchenwarth', 'Himberg', 'Ebergassing'] }
                ].map(group => (
                  <div key={group.title}>
                    <p style={{ color: 'var(--yellow)', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>{group.title}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px' }}>
                      {group.towns.map(town => (
                        <a 
                          key={town} 
                          href={`/niederoesterreich/${town.toLowerCase().replace(/ /g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`} 
                          style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }}
                          onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                        >
                          {town}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Bottom */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: 0 }}>
                © {new Date().getFullYear()} Elektro-Bozogul. Alle Rechte vorbehalten.
              </p>
              {/* Instagram only */}
              <style>{`
                .footer-instagram { color: rgba(255,255,255,0.7); transition: color 0.2s; }
                .footer-instagram:hover { color: rgba(255,255,255,1); }
              `}</style>
              <a href="https://www.instagram.com/elektro.bozogul" target="_blank" rel="noopener noreferrer" className="footer-instagram" style={{
                fontSize: '16px',
                textDecoration: 'none',
              }}>
                📷
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
