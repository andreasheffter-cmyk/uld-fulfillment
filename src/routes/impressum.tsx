import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/impressum")({
  head: () =>
    pageHead("impressum", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Impressum", path: "/impressum" },
      ]),
    ]),
  component: Impressum,
});

function Impressum() {
  return (
    <main>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Impressum" },
        ]}
      />
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-5 text-[0.95rem] leading-relaxed md:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Anbieter</h2>
            <p className="mt-2">
              {company.legal}
              <br />
              {company.address}
              <br />
              {company.zip}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Vertreten durch</h2>
            <p className="mt-2">{company.directors.join(", ")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Kontakt</h2>
            <p className="mt-2">
              Telefon: {company.phone}
              <br />
              Telefax: {company.fax}
              <br />
              E-Mail: {company.infoEmail}
              <br />
              Fulfillment: {company.email}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Registereintrag</h2>
            <p className="mt-2">
              Eintragung im Handelsregister.
              <br />
              Registergericht: {company.court}
              <br />
              Registernummer: {company.register}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Umsatzsteuer-ID</h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              {company.vat}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Redaktionell verantwortlich
            </h2>
            <p className="mt-2">
              {company.editorial}
              <br />
              {company.address}
              <br />
              {company.zip}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-2">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Allgemeine Geschäftsbedingungen
            </h2>
            <p className="mt-2">
              Wir arbeiten ausschließlich auf Grundlage der Allgemeinen Deutschen
              Spediteurbedingungen (ADSp), jeweils in der neuesten Fassung. Ziffer 23 ADSp
              begrenzt die gesetzliche Haftung für Güterschäden nach § 431 HGB bei
              Obhutsschäden auf 5 EUR/kg; bei einem Frachtvertrag über eine
              multimodal beförderte Sendung auf 2 SZR/kg und ferner je Schadenfall auf 1
              Million bzw. 2 Millionen EUR oder 2 SZR/kg, je nachdem, welcher Betrag höher ist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
