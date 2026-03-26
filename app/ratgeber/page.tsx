import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Ratgeber - Tipps & Tricks vom Elektriker Wien',
  description: 'Ihr umfassender Ratgeber f\u00fcr Elektrotechnik, Sicherheit und Energieeffizienz in Wien. Wir geben Experten-Tipps f\u00fcr Haus- und Wohnungseigent\u00fcmer.',
  alternates: { canonical: 'https://elektro-bozogul.at/ratgeber' },
};

export default function RatgeberIndex() {
  const posts = getAllPosts('ratgeber');

  return (
    <main>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Ratgeber</span></li>
        </ol>
      </nav>

      <section className="leistung-hero" style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary)', color: 'var(--white)', padding: '132px 0 80px', borderBottom: '4px solid var(--yellow)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', fontSize: '2.8rem', fontWeight: 800 }}>Elektro-Ratgeber Wien</h1>
          <p style={{ maxWidth: '750px', fontSize: '1.2rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6, marginTop: '20px' }}>
            Praktische Tipps, rechtliche Anforderungen und Experten-Wissen f\u00fcr Ihre Elektroinstallation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
            {posts.map(post => (
              <article key={post.slug} style={{ 
                background: 'white', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', 
                boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' 
              }}>
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, marginBottom: '12px' }}>Ratgeber & Expertenwissen</p>
                  <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: '15px', color: 'var(--mid)', marginBottom: '24px', flexGrow: 1 }}>{post.excerpt}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <a href={`/ratgeber/${post.slug}`} className="btn-sparkle" style={{ transform: 'scale(0.95)', transformOrigin: 'left' }}>
                      <span className="text_button" style={{ background: 'var(--primary)', color: 'white', padding: '10px 24px' }}>Zum Artikel</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
