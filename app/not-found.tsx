import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px',
      background: 'var(--bg)'
    }}>
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '600px', 
        padding: '60px 40px',
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
        border: '1px solid var(--border)'
      }}>
        <div style={{ 
          fontSize: '120px', 
          fontWeight: 900, 
          lineHeight: 1,
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px'
        }}>
          404
        </div>
        <h1 style={{ fontSize: '24px', color: 'var(--dark)', marginBottom: '16px' }}>
          Seite nicht gefunden
        </h1>
        <p style={{ color: 'var(--mid)', lineHeight: 1.6, marginBottom: '32px' }}>
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben. 
          Unser Team hilft Ihnen gerne weiter, falls Sie etwas Bestimmtes suchen.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/" className="btn-sparkle">
            <span className="text_button" style={{ padding: '12px 28px' }}>
              Zur Startseite
            </span>
          </Link>
          <Link href="/kontakt" className="btn-sparkle">
            <span className="text_button" style={{ 
                padding: '12px 28px', 
                background: 'white', 
                color: 'var(--primary)',
                border: '1px solid var(--border)' 
            }}>
              Kontakt
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
