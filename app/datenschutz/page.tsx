import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Elektro-Bozogul',
  description: 'Datenschutzerklärung der Elektro-Bozogul gemäß DSGVO. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
  alternates: { canonical: 'https://elektro-bozogul.at/datenschutz' },
};

export default function DatenschutzPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Datenschutz</span></li>
        </ol>
      </nav>

      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px' }}>
            <h1 style={{ marginBottom: '40px' }}>Datenschutzerklärung</h1>
            <article className="prose">
              <h2>1. Verantwortlicher</h2>
              <p>
                <strong>Elektro-Bozogul</strong><br />
                Inhaber: Ramazan Bozogul<br />
                Telefon: <a href="tel:+436601230073">+43 660 1230073</a><br />
                E-Mail: <a href="mailto:office@elektro-bozogul.at">office@elektro-bozogul.at</a>
              </p>

              <h2>2. Grundsätze der Datenverarbeitung</h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
                Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen
                Bestimmungen der EU-Datenschutzgrundverordnung (DSGVO), des österreichischen
                Datenschutzgesetzes (DSG) sowie des Telekommunikationsgesetzes (TKG 2021).
              </p>

              <h2>3. Erfassung und Speicherung personenbezogener Daten</h2>
              <h3>3.1 Beim Besuch der Website</h3>
              <p>
                Beim Aufrufen unserer Website werden durch den Browser automatisch
                Informationen an den Server unserer Website gesendet. Diese Informationen
                werden temporär in einem sogenannten Logfile gespeichert. Folgende
                Informationen werden dabei ohne Ihr Zutun erfasst und bis zur
                automatisierten Löschung gespeichert:
              </p>
              <ul>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p>
                Die genannten Daten werden zu folgenden Zwecken verarbeitet:
                Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
                Gewährleistung einer komfortablen Nutzung unserer Website,
                Auswertung der Systemsicherheit und -stabilität.
              </p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>

              <h3>3.2 Bei Kontaktaufnahme</h3>
              <p>
                Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren,
                werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse,
                Telefonnummer, Nachrichteninhalt) zum Zwecke der Bearbeitung Ihrer
                Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).</p>

              <h2>4. Cookies</h2>
              <p>
                Unsere Website verwendet sogenannte Cookies. Dabei handelt es sich um
                kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
                abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies, um
                unser Angebot nutzerfreundlich zu gestalten.
              </p>
              <p>
                Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
                löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch
                wiederzuerkennen. Wenn Sie dies nicht wünschen, können Sie Ihren
                Browser so einrichten, dass er Sie über das Setzen von Cookies
                informiert und Sie dies nur im Einzelfall erlauben.
              </p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>

              <h2>5. Ihre Rechte</h2>
              <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu:</p>
              <ul>
                <li><strong>Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger personenbezogener Daten zu verlangen.</li>
                <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen.</li>
              </ul>

              <h2>6. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das
                Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren:
              </p>
              <p>
                Österreichische Datenschutzbehörde<br />
                Barichgasse 40-42, 1030 Wien<br />
                Telefon: +43 1 52 152-0<br />
                E-Mail: dsb@dsb.gv.at<br />
                Website: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>
              </p>

              <h2>7. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets
                den aktuellen rechtlichen Anforderungen entspricht. Die jeweils aktuelle
                Datenschutzerklärung gilt für Ihren Besuch auf unserer Website.
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
