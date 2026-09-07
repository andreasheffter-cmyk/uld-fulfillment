import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/leistungen/")({
  head: () =>
    pageHead("leistungen", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Leistungen", path: "/leistungen" },
      ]),
    ]),
  component: Leistungen,
});

function Leistungen() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        title="Fulfillment, das am Hafen beginnt."
        lead="Lagerung, Pick & Pack, Versand, Retouren, Value Added Services und Import – scanbasiert, in einer Halle, mit direktem Terminalzugang."
        image="/images/pick-pack.jpg"
        imageAlt="Pick-and-Pack im ULD-Fulfillment Hamburg: Kommissionierung am Packplatz"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen" },
        ]}
      />
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8">
            {services.map((s, i) => (
              <BrandBox key={s.slug} size="lg">
                <Link
                  to="/leistungen/$slug"
                  params={{ slug: s.slug }}
                  className="group grid bg-paper shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)] md:grid-cols-2"
                >
                  <div className={`relative min-h-[240px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <img src={s.image} alt={s.imageAlt} className="absolute inset-0 size-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-12">
                    <p className="text-sm font-bold text-navy">{s.eyebrow}</p>
                    <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-muted">{s.teaser}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy">
                      Details
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </BrandBox>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
