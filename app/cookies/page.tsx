import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie – Elektro-Bozogul',
  description: 'Cookie-Richtlinie der Elektro-Bozogul. Informationen über die Verwendung von Cookies auf unserer Website.',
  alternates: { canonical: 'https://elektro-bozogul.at/cookies' },
};

export default function CookiesPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Cookies</span></li>
        </ol>
      </nav>

      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '40px' }}>Cookie-Richtlinie</h1>
            <article className="prose">
              <h2>Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder
                Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden
                häufig verwendet, um Websites effizienter zu machen und den Betreibern
                bestimmte Informationen bereitzustellen.
              </p>

              <h2>Welche Cookies verwenden wir?</h2>

              <h3>Technisch notwendige Cookies</h3>
              <p>
                Diese Cookies sind für den Betrieb unserer Website unerlässlich. Ohne diese
                Cookies können bestimmte Funktionen der Website nicht bereitgestellt werden.
                Sie werden in der Regel als Reaktion auf von Ihnen getätigte Aktionen
                gesetzt, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen.
              </p>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '20px', marginBottom: '24px' }}>
                <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <th style={{ textAlign: 'left', padding: '8px', fontWeight: 600 }}>Cookie</th>
                      <th style={{ textAlign: 'left', padding: '8px', fontWeight: 600 }}>Zweck</th>
                      <th style={{ textAlign: 'left', padding: '8px', fontWeight: 600 }}>Dauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px', color: 'var(--mid)' }}>cookie_consent</td>
                      <td style={{ padding: '8px', color: 'var(--mid)' }}>Speichert Ihre Cookie-Präferenzen</td>
                      <td style={{ padding: '8px', color: 'var(--mid)' }}>1 Jahr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Analyse-Cookies (optional)</h3>
              <p>
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website
                interagieren, indem sie Informationen anonym sammeln und melden. Diese
                Cookies werden nur mit Ihrer Einwilligung gesetzt.
              </p>

              <h2>Wie können Sie Cookies kontrollieren?</h2>
              <p>
                Sie können Ihren Browser so einstellen, dass er alle Cookies oder nur
                bestimmte Cookies akzeptiert oder ablehnt. Die meisten Browser akzeptieren
                Cookies automatisch, aber Sie können diese Einstellung normalerweise
                in den Browser-Einstellungen ändern.
              </p>
              <p>
                Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität
                dieser Website beeinträchtigen kann.
              </p>

              <h3>Cookie-Einstellungen nach Browser</h3>
              <ul>
                <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies</li>
                <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
              </ul>

              <h2>Rechtsgrundlage</h2>
              <p>
                Technisch notwendige Cookies basieren auf unserem berechtigten Interesse
                (Art. 6 Abs. 1 lit. f DSGVO). Alle weiteren Cookies werden nur mit Ihrer
                ausdrücklichen Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO), die Sie
                jederzeit widerrufen können.
              </p>

              <h2>Weitere Informationen</h2>
              <p>
                Für weitergehende Informationen zum Umgang mit Ihren personenbezogenen Daten
                verweisen wir auf unsere <a href="/datenschutz">Datenschutzerklärung</a>.
              </p>

              <p style={{ marginTop: '40px', color: 'var(--muted)', fontSize: '14px' }}>
                Stand: März 2026
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
