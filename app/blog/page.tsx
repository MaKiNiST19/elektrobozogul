import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog - Elektrotechnik Aktuell in Wien',
  description: 'Aktuelle Themen rund um Elektrik, Technik und Innovationen in Wien. Wir informieren Sie \u00fcber Trends und Neuigkeiten.',
  alternates: { canonical: 'https://elektro-bozogul.at/blog' },
};

export default function BlogIndex() {
  const posts = getAllPosts('blog');

  return (
    <main>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Blog</span></li>
        </ol>
      </nav>

      <section className="leistung-hero" style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary)', color: 'var(--white)', padding: '132px 0 80px', borderBottom: '4px solid var(--yellow)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', fontSize: '2.8rem', fontWeight: 800 }}>Elektro-Blog Wien</h1>
          <p style={{ maxWidth: '750px', fontSize: '1.2rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6, marginTop: '20px' }}>
            Neuigkeiten, Trends und fachliche Beitr\u00e4ge aus der Welt der Elektrotechnik.
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
                  <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, marginBottom: '12px' }}>{new Date(post.date).toLocaleDateString('de-AT')}</p>
                  <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: '15px', color: 'var(--mid)', marginBottom: '24px', flexGrow: 1 }}>{post.excerpt}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <a href={`/blog/${post.slug}`} className="btn-sparkle" style={{ transform: 'scale(0.95)', transformOrigin: 'left' }}>
                      <span className="text_button" style={{ background: 'var(--primary)', color: 'white', padding: '10px 24px' }}>Weiterlesen</span>
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
