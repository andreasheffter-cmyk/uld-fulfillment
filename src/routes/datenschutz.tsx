import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () =>
    pageHead("datenschutz", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Datenschutz", path: "/datenschutz" },
      ]),
    ]),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <main>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Datenschutz" },
        ]}
      />
      <section className="bg-cream py-16">
        <article className="mx-auto max-w-3xl space-y-8 px-5 text-[0.95rem] leading-relaxed md:px-8">
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren
            wir gemäß Art. 13, 14 DSGVO über die Verarbeitung auf dieser Website.
          </p>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">1. Verantwortlicher</h2>
            <p className="mt-2">
              {company.legal}
              <br />
              {company.address}
              <br />
              {company.zip}
              <br />
              Telefon: {company.phone}
              <br />
              E-Mail: {company.infoEmail}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              2. Hosting und Logfiles
            </h2>
            <p className="mt-2">
              Beim Aufruf dieser Seiten verarbeitet der Hosting-Anbieter technisch notwendige
              Server-Logfiles (IP-Adresse, Zeitpunkt, aufgerufene Ressource, User-Agent). Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur
              Bereitstellung und Absicherung des Angebots. Die Daten werden nach kurzer Frist
              gelöscht, soweit keine gesetzliche Aufbewahrung greift.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">3. Anfrageformular</h2>
            <p className="mt-2">
              Wenn Sie das Kontaktformular nutzen, verarbeiten wir Name, Firma, E-Mail,
              Telefonnummer, Shopsystem, Mengenangaben und Ihre Nachricht, um die Anfrage zu
              beantworten (Art. 6 Abs. 1 lit. b DSGVO, vorvertragliche Maßnahmen; hilfsweise
              Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nur intern an das Fulfillment- und
              Vertriebsteam weitergegeben und gelöscht, sobald die Anfrage erledigt ist und
              keine Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              4. Schriftarten
            </h2>
            <p className="mt-2">
              Zur Darstellung werden Schriftarten von Google Fonts geladen. Dabei kann Ihre
              IP-Adresse an Google Ireland Limited übermittelt werden. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO (einheitliche, performante Darstellung). Alternativ können
              Sie das Laden Dritter in Ihrem Browser unterbinden; dann greifen Systemschriften.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">5. Cookies</h2>
            <p className="mt-2">
              Diese Website setzt keine Tracking- oder Marketing-Cookies. Technisch notwendige
              Speicherung im Browser (z. B. eine lokale Kopie Ihrer Anfrage zur Bestätigung)
              erfolgt ausschließlich auf Ihrem Gerät.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">6. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
              Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage
              berechtigter Interessen. Außerdem besteht ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere der Hamburgischen Beauftragten für Datenschutz und
              Informationsfreiheit.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">7. Pflichtangaben</h2>
            <p className="mt-2">
              Die Bereitstellung der Formulardaten ist freiwillig, für eine belastbare
              Fulfillment-Einschätzung jedoch erforderlich. Eine automatisierte
              Entscheidungsfindung einschließlich Profiling findet nicht statt.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
