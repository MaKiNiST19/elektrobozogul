import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts('ratgeber');
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug('ratgeber', params.slug);
  if (!post) return {};
  return {
    title: `${post.title} – Ratgeber Elektriker Wien`,
    description: post.excerpt,
    alternates: { canonical: `https://elektro-bozogul.at/ratgeber/${post.slug}` },
  };
}

export default function RatgeberPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('ratgeber', params.slug);
  if (!post) notFound();

  return (
    <main>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><a href="/ratgeber">Ratgeber</a></li>
          <li><span>{post.slug}</span></li>
        </ol>
      </nav>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
             <p style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '13px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
               Experten-Tipp f\u00fcr Wien
             </p>
             <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '40px', fontWeight: 800 }}>{post.title}</h1>
             <article className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
             
             <div style={{ marginTop: '80px', padding: '40px', background: 'var(--primary)', color: 'white', borderRadius: '20px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '1.4rem', color: 'white' }}>Pers\u00f6nliche Beratung in Wien</h3>
                <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)' }}>Gerne informieren wir Sie pers\u00f6nlich zu rechtlichen oder technischen Fragen rund um Ihre Immobilie.</p>
                <a href="tel:+436601230073" className="btn-sparkle" style={{ transform: 'scale(1.1)' }}>
                   <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', padding: '12px 32px' }}>☎ +43 660 1230073</span>
                </a>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
