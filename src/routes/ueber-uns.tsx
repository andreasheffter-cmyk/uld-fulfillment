import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { interpolate, useI18n } from "@/lib/i18n";
import { company } from "@/lib/site";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ueber-uns")({
  head: () =>
    pageHead("ueber-uns", [
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: "Über uns", path: "/ueber-uns" },
      ]),
    ]),
  component: About,
});

function About() {
  const { t } = useI18n();
  const p = t.pages.about;
  return (
    <main>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        lead={p.lead}
        image="/images/ops-manager.jpg"
        imageAlt={p.imageAlt}
        crumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.about },
        ]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy">
              {interpolate(p.sinceTitle, { year: company.founded })}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {interpolate(p.sinceLead, { legal: company.legal })}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {interpolate(p.directors, {
                names: company.directors.join(", "),
                team: t.company.team,
              })}
            </p>
          </div>
          <BrandBox size="lg">
            <img
              src="/images/wms.jpg"
              alt={p.officeAlt}
              className="h-[28rem] w-full object-cover object-top"
            />
          </BrandBox>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-cream md:py-24">
        <span
          className="pointer-events-none absolute -right-6 -bottom-6 size-40 border-[10px] border-crimson/40"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-4xl font-bold tracking-tight">{p.focusTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {p.focus.map((f) => (
              <article key={f.title}>
                <div className="mb-4 size-8 border-[3px] border-crimson" />
                <h3 className="font-display text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/70">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {interpolate(p.brand, { legal: company.legal })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/kontakt" className={cn(buttonVariants({ variant: "navy", size: "lg" }))}>
              {t.nav.talk}
            </Link>
            <a
              href="https://www.uld-hamburg.de"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "ring-1 ring-line")}
            >
              uld-hamburg.de
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
