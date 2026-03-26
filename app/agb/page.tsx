import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen',
  description: 'Allgemeine Geschäftsbedingungen (AGB) der Elektro-Bozogul – Elektriker-Meisterbetrieb in Wien.',
  alternates: { canonical: 'https://elektro-bozogul.at/agb' },
};

export default function AGBPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li><span>AGB</span></li>
        </ol>
      </nav>

      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '40px' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
            <article className="prose">
              <h2>§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Aufträge und
                Verträge zwischen Elektro-Bozogul (nachfolgend „Auftragnehmer") und dem
                Kunden (nachfolgend „Auftraggeber") über die Erbringung von
                Elektrotechnik-Dienstleistungen. Abweichende Bedingungen des Auftraggebers,
                die nicht ausdrücklich schriftlich anerkannt werden, sind unverbindlich.
              </p>

              <h2>§ 2 Vertragsabschluss</h2>
              <p>
                Angebote des Auftragnehmers sind freibleibend und unverbindlich.
                Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des
                Auftragnehmers oder durch Beginn der Leistungserbringung zustande.
                Bei Notdienst-Einsätzen gilt der telefonische Auftrag als verbindlich.
              </p>

              <h2>§ 3 Leistungsumfang</h2>
              <p>
                Der Umfang der Leistungen ergibt sich aus dem Angebot bzw. der
                Auftragsbestätigung. Änderungen und Ergänzungen bedürfen der
                schriftlichen Vereinbarung beider Vertragsparteien. Zusätzlich
                erforderliche Leistungen, die sich erst während der Ausführung ergeben,
                werden gesondert nach Aufwand abgerechnet, sofern keine anderslautende
                Vereinbarung getroffen wurde.
              </p>

              <h2>§ 4 Preise und Zahlung</h2>
              <p>
                Alle Preise verstehen sich, sofern nicht anders angegeben, in Euro inklusive
                der gesetzlichen Mehrwertsteuer von 20 %. Rechnungen sind innerhalb von
                14 Tagen nach Rechnungsstellung ohne Abzug fällig. Bei Zahlungsverzug
                werden Verzugszinsen gemäß § 1333 ABGB berechnet (aktuell 4 % p.a. für
                Verbraucher). Bei Notdienst-Einsätzen außerhalb der regulären Geschäftszeiten
                können Zuschläge gemäß vorheriger Vereinbarung anfallen.
              </p>

              <h2>§ 5 Gewährleistung und Haftung</h2>
              <p>
                Die Gewährleistung richtet sich nach den gesetzlichen Bestimmungen des
                ABGB (§§ 922 ff). Die Gewährleistungsfrist beträgt 2 Jahre ab
                Abnahme der Leistung (für Unternehmer 1 Jahr, sofern vereinbart).
                Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, es sei denn,
                es handelt sich um Personenschäden. Diese Einschränkung gilt nicht
                gegenüber Verbrauchern im Sinne des KSchG.
              </p>

              <h2>§ 6 Normen und Vorschriften</h2>
              <p>
                Alle Arbeiten werden nach den jeweils geltenden Normen und Vorschriften
                ausgeführt, insbesondere:
              </p>
              <ul>
                <li>ÖVE/ÖNORM E 8001 – Errichtung elektrischer Anlagen</li>
                <li>ÖVE/ÖNORM E 8101 – Überprüfung elektrischer Anlagen</li>
                <li>Elektrotechnikgesetz (ETG 1996)</li>
                <li>Elektrotechnikverordnung (ETV 2020)</li>
                <li>TAEV (Technische Anschlussbedingungen für Elektrische Verteilernetze)</li>
              </ul>

              <h2>§ 7 Stornierung</h2>
              <p>
                Bereits vereinbarte Termine können bis zu 24 Stunden vorher kostenfrei
                storniert werden. Bei späteren Absagen oder Nichtantreffbarkeit wird
                eine Anfahrtspauschale in Rechnung gestellt.
              </p>

              <h2>§ 8 Eigentumsvorbehalt</h2>
              <p>
                Bis zur vollständigen Bezahlung behält der Auftragnehmer das
                Eigentum an den gelieferten Materialien und Geräten, sofern diese
                noch nicht fest mit dem Gebäude verbunden sind.
              </p>

              <h2>§ 9 Datenschutz</h2>
              <p>
                Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
                <a href="/datenschutz">Datenschutzerklärung</a> und im Einklang mit der
                EU-Datenschutzgrundverordnung (DSGVO) sowie dem österreichischen
                Datenschutzgesetz (DSG).
              </p>

              <h2>§ 10 Streitbeilegung und Gerichtsstand</h2>
              <p>
                Es gilt ausschließlich österreichisches Recht unter Ausschluss des
                UN-Kaufrechts. Gerichtsstand ist Wien. Für Verbraucher im Sinne des
                KSchG gelten die zwingenden Zuständigkeitsregelungen.
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
