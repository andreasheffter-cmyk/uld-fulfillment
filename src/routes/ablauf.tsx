import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { processSteps } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ablauf")({
  head: () =>
    pageHead("ablauf", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Ablauf", path: "/ablauf" },
      ]),
    ]),
  component: Ablauf,
});

function Ablauf() {
  return (
    <main>
      <PageHero
        eyebrow="Ablauf"
        title="Onboarding in Tagen, nicht Quartalen."
        lead="Technische Anbindung, Erstbevorratung, Live-Gang. Danach läuft jede Bestellung scanbasiert durch dieselbe Kette."
        image="/images/warehouse-aisle.jpg"
        imageAlt="Fulfillment-Ablauf im Schmalganglager von ULD Hamburg"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ablauf" },
        ]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <ol className="relative border-l border-line pl-8 md:pl-10">
            {processSteps.map((step) => (
              <li key={step.n} className="relative pb-12 last:pb-0">
                <span className="absolute top-0 -left-[2.55rem] grid size-8 place-items-center bg-navy font-display text-sm font-bold text-cream md:-left-[3.05rem]">
                  {step.n}
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
                  {step.title}
                </h2>
                <p className="mt-2 text-lg leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <BrandBox size="lg">
              <img
                src="/images/ops-manager.jpg"
                alt="ULD-Team mit Scanner im Fulfillment-Lager Hamburg"
                className="aspect-video w-full object-cover"
              />
            </BrandBox>
          </div>

          <div className="mt-8">
            <BrandBox size="lg">
              <div className="relative overflow-hidden bg-navy p-8 text-cream md:p-10">
                <span
                  className="pointer-events-none absolute right-6 bottom-6 size-16 border-[6px] border-crimson/70"
                  aria-hidden
                />
                <h2 className="font-display text-3xl font-bold tracking-tight">
                  Was wir von Ihnen brauchen
                </h2>
                <ul className="mt-5 space-y-2 text-[0.95rem] leading-relaxed text-cream/75">
                  <li>Saubere Artikelstammdaten inkl. Maße, Gewicht, EAN/SKU</li>
                  <li>Zugang zum Shop oder API-Dokumentation</li>
                  <li>Packregeln, Beilagen, Carrier-Vorgaben</li>
                  <li>Ein erstes Wareneingangsfenster</li>
                </ul>
                <Link
                  to="/kontakt"
                  className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8 inline-flex")}
                >
                  Onboarding starten
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </BrandBox>
          </div>
        </div>
      </section>
    </main>
  );
}
