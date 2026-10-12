import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AiImage } from "@/components/ai-image";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { interpolate, useI18n } from "@/lib/i18n";
import { company } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/standort")({
  head: () =>
    pageHead("standort", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Standort", path: "/standort" },
      ]),
    ]),
  component: Standort,
});

function Standort() {
  const { t } = useI18n();
  const p = t.pages.location;
  return (
    <main>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        lead={interpolate(p.lead, { address: company.address, zip: company.zip })}
        image="/images/hamburg-port.jpg?v=4"
        imageAlt={p.imageAlt}
        crumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.location },
        ]}
      />

      <section className="bg-cream">
        <div className="grid md:grid-cols-2">
          <AiImage
            src="/images/customs.jpg?v=4"
            alt={p.customsAlt}
            wrapperClassName="h-72 w-full md:h-full"
            className="size-full object-cover"
          />
          <div className="flex flex-col justify-center px-5 py-14 md:px-14">
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy">{p.saveTitle}</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">{p.saveLead}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 md:grid-cols-3 md:px-8">
          {p.facts.map((f) => (
            <article key={f.k}>
              <p className="text-sm font-bold text-navy">{f.k}</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-navy">{f.v}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-8">
          <BrandBox size="lg">
            <AiImage
              src="/images/inbound.jpg?v=4"
              alt={p.inboundAlt}
              className="h-80 w-full object-cover"
            />
          </BrandBox>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy">{p.hallTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{p.hallLead}</p>
            <Link
              to="/kontakt"
              className={cn(buttonVariants({ variant: "navy", size: "lg" }), "mt-8 w-fit")}
            >
              {t.nav.visit}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
