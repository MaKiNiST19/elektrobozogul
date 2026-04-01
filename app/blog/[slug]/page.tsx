import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug('blog', params.slug);
  if (!post) return {};
  return {
    title: `${post.title} – Elektro-Blog Wien`,
    description: post.excerpt,
    alternates: { canonical: `https://elektro-bozogul.at/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('blog', params.slug);
  if (!post) notFound();

  return (
    <main>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><span>{post.title}</span></li>
        </ol>
      </nav>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
             <p style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '13px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
               Ver\u00f6ffentlicht am {new Date(post.date).toLocaleDateString('de-AT')}
             </p>
             <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '40px', fontWeight: 800 }}>{post.title}</h1>
             <article className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
             
             <div style={{ marginTop: '80px', padding: '40px', background: 'var(--bg)', borderRadius: '20px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '1.4rem' }}>Haben Sie Fragen oder ein Projekt in Wien?</h3>
                <p style={{ marginBottom: '32px' }}>Wir beraten Sie gerne zu allen elektrotechnischen Anliegen im Bereich Wien und Umgebung.</p>
                <a href="/kontakt" className="btn-sparkle" style={{ transform: 'scale(1.1)' }}>
                   <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', padding: '12px 32px' }}>☎ +43 660 1230073</span>
                </a>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
