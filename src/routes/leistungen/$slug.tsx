import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { BrandBox } from "@/components/brand-box";
import { Breadcrumb } from "@/components/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { serviceBySlug, services } from "@/lib/site";
import { serviceHead } from "@/lib/seo";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => (loaderData ? serviceHead(loaderData) : {}),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <section className="relative min-h-[70svh] overflow-hidden bg-navy-mid text-cream">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-mid via-navy-mid/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-navy/40 to-navy/25" />
        <span
          className="pointer-events-none absolute right-8 bottom-8 hidden size-24 border-[8px] border-crimson md:block"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 md:px-8">
          <Breadcrumb
            items={[
              { label: "Start", href: "/" },
              { label: "Leistungen", href: "/leistungen" },
              { label: service.title },
            ]}
          />
          <p className="text-sm font-bold text-navy-ice">{service.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold tracking-tight md:text-7xl">
            {service.title}.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">{service.lead}</p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="space-y-5 md:col-span-7">
            {service.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink/85">
                {p}
              </p>
            ))}
            <Link
              to="/kontakt"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-4 inline-flex")}
            >
              Angebot einholen
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <aside className="md:col-span-5">
            <BrandBox>
              <div className="bg-paper p-7">
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                  Im Setup enthalten
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[0.95rem]">
                      <Check className="mt-0.5 size-4 shrink-0 text-crimson" strokeWidth={2.4} />
                      <span className="text-ink/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BrandBox>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
            Weitere Leistungen
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((s) => (
              <BrandBox key={s.slug}>
                <Link
                  to="/leistungen/$slug"
                  params={{ slug: s.slug }}
                  className="block h-full bg-cream p-6"
                >
                  <p className="text-sm font-bold text-navy">{s.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.teaser}</p>
                </Link>
              </BrandBox>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
