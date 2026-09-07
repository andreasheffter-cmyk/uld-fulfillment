import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { company } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    pageHead("kontakt", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Kontakt", path: "/kontakt" },
      ]),
    ]),
  component: Kontakt,
});

function Kontakt() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Unverbindliches Erstgespräch."
        lead="Volumen, Kanäle, Starttermin – wir sagen Ihnen klar, ob und wie das Setup trägt."
        image="/images/inbound.jpg"
        imageAlt="Wareneingang im ULD-Fulfillment Hamburg"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt" },
        ]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
              Fulfillment-Team
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {company.fulfillmentLead.name}, {company.fulfillmentLead.role}
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-crimson" />
                <div>
                  <a href={company.phoneHref} className="font-semibold text-navy">
                    {company.phone}
                  </a>
                  <p className="text-sm text-muted">{company.hours}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-crimson" />
                <div>
                  <a href={`mailto:${company.email}`} className="font-semibold text-navy">
                    {company.email}
                  </a>
                  <p className="text-sm text-muted">{company.fulfillmentLead.email}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-crimson" />
                <address className="not-italic">
                  <span className="font-semibold text-navy">{company.legal}</span>
                  <br />
                  {company.address}
                  <br />
                  {company.zip}
                </address>
              </li>
            </ul>

            <BrandBox>
              <img
                src="/images/wms.jpg"
                alt="Büro von ULD Fulfillment mit Blick auf den Hamburger Hafen"
                className="mt-10 hidden h-56 w-full object-cover md:block"
              />
            </BrandBox>
          </div>

          <div className="md:col-span-7">
            <BrandBox size="lg">
              <div className="bg-paper p-6 md:p-10">
                <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
                  Angebot anfordern
                </h2>
                <p className="mt-2 mb-8 text-muted">
                  Kein Online-Konfigurator, kein Bot. Eine operative Einschätzung.
                </p>
                <QuoteForm />
              </div>
            </BrandBox>
          </div>
        </div>
      </section>
    </main>
  );
}
