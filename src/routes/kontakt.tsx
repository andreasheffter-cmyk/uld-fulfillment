import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { AiImage } from "@/components/ai-image";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { useI18n } from "@/lib/i18n";
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
  const { t } = useI18n();
  const p = t.pages.contact;
  return (
    <main>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        lead={p.lead}
        image="/images/inbound.jpg?v=2"
        imageAlt={p.imageAlt}
        crumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.contact },
        ]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
              {p.teamTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{t.company.team}</p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-crimson" />
                <div>
                  <a href={company.phoneHref} className="font-semibold text-navy">
                    {company.phone}
                  </a>
                  <p className="text-sm text-muted">{t.company.hours}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-crimson" />
                <div>
                  <a href={`mailto:${company.email}`} className="font-semibold text-navy">
                    {company.email}
                  </a>
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
              <AiImage
                src="/images/wms.jpg?v=2"
                alt={p.officeAlt}
                wrapperClassName="mt-10 hidden md:block"
                className="h-56 w-full object-cover"
              />
            </BrandBox>
          </div>

          <div className="md:col-span-7">
            <BrandBox size="lg">
              <div className="bg-paper p-6 md:p-10">
                <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
                  {p.formTitle}
                </h2>
                <p className="mt-2 mb-8 text-muted">{p.formLead}</p>
                <QuoteForm />
              </div>
            </BrandBox>
          </div>
        </div>
      </section>
    </main>
  );
}
