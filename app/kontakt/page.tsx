import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt – Elektriker Wien',
  description: 'Kontaktieren Sie Elektro-Bozogul – Ihren Elektriker in Wien. Telefon, E-Mail oder Kontaktformular. ☎ +43 660 1230073. Wir sind für Sie da!',
  alternates: { canonical: 'https://elektro-bozogul.at/kontakt' },
};

export default function KontaktPage() {
  return (
    <>
      {/* 50vh Hero */}
      <section className="hero" style={{ height: '50vh', minHeight: '450px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/leistungen/wien-elektriker-notdienst.jpg"
          alt="Elektriker Wien Kontakt"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,78,57,0.88) 0%, rgba(0,0,0,0.65) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb inside hero */}
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ background: 'transparent', border: 'none', padding: '0 0 24px 0' }}>
            <ol style={{ padding: 0 }}>
              <li><a href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Startseite</a></li>
              <li style={{ color: 'white' }}><span>Kontakt</span></li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: 'var(--yellow)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>Immer für Sie da</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '24px' }}>Kontakt aufnehmen</h1>
          <p style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Sie haben eine Frage, benötigen ein Angebot oder einen dringenden Notdienst? 
            Wir sind in ganz Wien schnell für Sie erreichbar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
            gap: '40px', 
            alignItems: 'start' 
          }}>

            {/* Contact Info Side */}
            <div>
              <h2 style={{ marginBottom: '30px' }}>So erreichen Sie uns</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Telefon</h3>
                    <a href="tel:+436601230073" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none' }}>+43 660 1230073</a>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Mo–Fr 07:00–18:00 Uhr | Notdienst 24/7</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>E-Mail</h3>
                    <a href="mailto:office@elektro-bozogul.at" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>office@elektro-bozogul.at</a>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Antwort innerhalb von 24 Stunden</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Einsatzgebiet</h3>
                    <p style={{ color: 'var(--mid)', fontWeight: 500 }}>Alle 23 Wiener Gemeindebezirke</p>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Sowie nahe Umlandgemeinden</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '1.5rem' }}>🕐</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Bürozeiten</h3>
                    <p style={{ color: 'var(--mid)' }}>Montag – Freitag: 07:00 – 18:00 Uhr</p>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Notdienst: 24 Stunden / 7 Tage die Woche</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px', background: '#ca0000', color: 'white', padding: '32px 24px', borderRadius: 'var(--r-lg)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--yellow)', marginBottom: '8px' }}>Elektrischer Notfall?</h3>
                <p style={{ fontSize: '14px', marginBottom: '24px', color: 'rgba(255,255,255,.85)' }}>Stromausfall, Kabelbrand oder FI-Schutzschalter löst aus?</p>
                <a href="tel:+436601230073" className="btn-sparkle" style={{ transform: 'scale(1.1)' }}>
                  <span className="text_button" style={{ background: 'var(--yellow)', color: 'var(--primary)', padding: '12px 32px', fontSize: '1.1rem' }}>☎ +43 660 1230073</span>
                </a>
              </div>
            </div>

            {/* Contact Form Side */}
            <div>
              <h2 style={{ marginBottom: '30px' }}>Anfrage senden</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--mid)' }}>Name *</label>
                  <input id="name" type="text" placeholder="Ihr vollständiger Name" required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', fontSize: '15px', background: 'var(--bg)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--mid)' }}>E-Mail *</label>
                  <input id="email" type="email" placeholder="ihre@email.at" required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', fontSize: '15px', background: 'var(--bg)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--mid)' }}>Telefon</label>
                  <input id="phone" type="tel" placeholder="+43 ..."
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', fontSize: '15px', background: 'var(--bg)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label htmlFor="service" style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--mid)' }}>Leistung</label>
                  <select id="service"
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', fontSize: '15px', background: 'var(--bg)', outline: 'none' }}>
                    <option value="">Bitte wählen...</option>
                    <option value="notdienst">Notdienst</option>
                    <option value="elektroinstallation">Elektroinstallation</option>
                    <option value="e-befund">E-Befund</option>
                    <option value="photovoltaik">Photovoltaik</option>
                    <option value="beleuchtung">Beleuchtung</option>
                    <option value="e-mobilitaet">E-Mobilität / Wallbox</option>
                    <option value="smart-home">Smart Home / KNX</option>
                    <option value="sanierung">Sanierung</option>
                    <option value="sonstig">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--mid)' }}>Nachricht *</label>
                  <textarea id="message" placeholder="Beschreiben Sie Ihr Anliegen..." rows={5} required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', fontSize: '15px', background: 'var(--bg)', outline: 'none', resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn-sparkle" style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
                  <span className="text_button" style={{ padding: '16px 32px', fontSize: '16px', display: 'flex', width: '100%', justifyContent: 'center' }}>Anfrage absenden</span>
                </button>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5 }}>
                  Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" style={{ color: 'var(--primary)' }}>Datenschutzerklärung</a> zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
