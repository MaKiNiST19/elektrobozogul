import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – Elektro-Bozogul',
  description: 'Impressum der Elektro-Bozogul – Elektriker-Meisterbetrieb in Wien. Angaben gemäß § 5 E-Commerce-Gesetz (ECG).',
  alternates: { canonical: 'https://elektro-bozogul.at/impressum' },
};

export default function ImpressumPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>Impressum</span></li>
        </ol>
      </nav>

      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '40px' }}>Impressum</h1>
            <article className="prose">
              <h2>Angaben gemäß § 5 E-Commerce-Gesetz (ECG)</h2>

              <h3>Unternehmensbezeichnung</h3>
              <p>
                <strong>Elektro-Bozogul</strong><br />
                Elektrotechnik-Meisterbetrieb<br />
                Inhaber: Ramazan Bozogul
              </p>

              <h3>Kontakt</h3>
              <p>
                Telefon: <a href="tel:+436601230073">+43 660 1230073</a><br />
                E-Mail: <a href="mailto:office@elektro-bozogul.at">office@elektro-bozogul.at</a><br />
                Webseite: <a href="https://elektro-bozogul.at">www.elektro-bozogul.at</a>
              </p>

              <h3>Gewerberechtliche Angaben</h3>
              <p>
                Gewerbe: Elektrotechnik (reglementiertes Gewerbe)<br />
                Gewerbebehörde: Magistratisches Bezirksamt Wien<br />
                Mitglied der Wirtschaftskammer Wien (WKO)<br />
                Fachgruppe: Elektro-, Gebäude-, Alarm- und Kommunikationstechnik
              </p>

              <h3>Anwendbare Rechtsvorschriften</h3>
              <p>
                Gewerbeordnung (GewO 1994)<br />
                Elektrotechnikgesetz (ETG 1996)<br />
                Elektrotechnikverordnung (ETV 2020)<br />
                Zugänglich unter: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a>
              </p>

              <h3>Umsatzsteuer-Identifikationsnummer (UID)</h3>
              <p>Wird auf Anfrage mitgeteilt.</p>

              <h3>Haftungsausschluss</h3>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
                für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
                ausschließlich deren Betreiber verantwortlich. Diese Webseite wurde mit
                größtmöglicher Sorgfalt erstellt. Dennoch kann keine Gewähr für
                Vollständigkeit, Richtigkeit und Aktualität der bereitgestellten Inhalte
                übernommen werden.
              </p>

              <h3>Urheberrecht</h3>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>

              <h3>Online-Streitbeilegung</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                {' '}<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
