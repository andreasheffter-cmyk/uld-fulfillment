import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { BrandBox } from "@/components/brand-box";
import { QuoteForm } from "@/components/quote-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  company,
  faqs,
  integrations,
  processSteps,
  services,
  stats,
  usps,
} from "@/lib/site";
import { faqJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead("home", [faqJsonLd()]),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Split />
      <Process />
      <Integrations />
      <Usps />
      <Faq />
      <Cta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-mid text-cream">
      <img
        src="/images/hero-dock.jpg"
        alt="Fulfillment-Lager mit Laderampen im Hamburger Hafen – ULD United Logistics"
        className="absolute inset-0 size-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-mid/95 via-navy-mid/55 to-navy/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/85 via-transparent to-navy-mid/30" />
      <span
        className="pointer-events-none absolute right-8 bottom-8 hidden size-28 border-[10px] border-crimson md:block"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 md:justify-center md:px-8 md:pb-24">
        <p className="text-sm font-bold text-navy-ice">{company.tagline}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[3.1rem] font-bold tracking-tight sm:text-6xl md:text-8xl">
          Fulfillment mit Hafenanschluss.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
          E-Commerce-Fulfillment aus dem Hamburger Hafen: wir lagern, kommissionieren und
          versenden Ihre Bestellungen – scanbasiert, shopverbunden, europaweit.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link to="/kontakt" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            Angebot einholen
            <ArrowRight className="size-4" />
          </Link>
          <Link to="/leistungen" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-8 md:px-8 md:py-10">
            <p className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold text-navy">Leistungen</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-navy md:text-6xl">
              Vom Container bis zum Kundenpaket.
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              ULD Fulfillment in Hamburg übernimmt Lagerung, Pick & Pack, Versand, Retouren
              und Import in einer Halle an der Dradenaustraße 20 – mit eigenem Zolllager.
            </p>
          </div>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy"
          >
            Alle Leistungen
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <BrandBox key={s.slug}>
              <Link
                to="/leistungen/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col bg-paper shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold text-navy">{s.eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{s.teaser}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy">
                    Mehr erfahren
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </BrandBox>
          ))}
        </div>
      </div>
    </section>
  );
}

function Split() {
  return (
    <section className="bg-navy text-cream">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <img
            src="/images/warehouse-aisle.jpg"
            alt="Bewegung im Schmalganglager der ULD-Halle im Hamburger Hafen"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden px-5 py-16 md:px-16 md:py-24">
          <span
            className="pointer-events-none absolute right-6 bottom-6 size-24 border-[8px] border-crimson"
            aria-hidden
          />
          <p className="text-sm font-bold text-navy-ice">Standortvorteil</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Ware kommt im Hafen an. Und bleibt im Hafen.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/80">
            Container vom Terminal, eigene Zollfläche, Fulfillment in derselben Halle.
            Kein zweites Lager, keine zusätzliche Umfuhr. 28.164 m², 43 Tore, eigener
            Speditionshof – Dradenaustraße 20.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Eigenes Zolllager direkt am Terminalzugang",
              "Amazon-, Shop- und ERP-Anbindung",
              "B2B-Handelsbelieferung und B2C aus einem Bestand",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem]">
                <Check className="mt-0.5 size-4 shrink-0 text-crimson" strokeWidth={2.4} />
                <span className="text-cream/90">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/standort"
            className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-8 w-fit")}
          >
            Den Standort ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-sm font-bold text-navy">Ablauf</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-navy md:text-6xl">
          So kommt die Bestellung raus.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <BrandBox key={step.n}>
              <article className="h-full bg-paper p-6 md:p-8">
                <p className="font-display text-2xl font-bold text-navy">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
              </article>
            </BrandBox>
          ))}
        </div>
        <Link
          to="/ablauf"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy"
        >
          Ablauf im Detail
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="border-y border-line bg-paper py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-sm font-semibold text-muted">
          Anbindung an die Systeme, mit denen Sie schon arbeiten
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {integrations.map((name) => (
            <li
              key={name}
              className="font-display text-xl font-bold tracking-tight text-navy/50 md:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Usps() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-sm font-bold text-navy">Warum ULD</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-navy md:text-6xl">
          Kein Standard-3PL. Ein Hafenbetrieb.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {usps.map((u) => (
            <BrandBox key={u.title}>
              <article className="h-full bg-paper p-7 md:p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight text-navy">
                  {u.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{u.text}</p>
              </article>
            </BrandBox>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="text-sm font-bold text-navy">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Häufige Fragen.
          </h2>
        </div>
        <div className="md:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-5 first:pt-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold tracking-tight text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center bg-cream text-lg leading-none text-navy transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-cream md:py-28">
      <span
        className="pointer-events-none absolute -right-10 -bottom-10 size-56 border-[14px] border-crimson/30"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8 md:gap-16">
        <div>
          <p className="text-sm font-bold text-navy-ice">Einstieg</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Lassen Sie uns über Ihr Volumen sprechen.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/75">
            Unverbindlich, in der Regel innerhalb eines Werktags. {company.fulfillmentLead.name},{" "}
            {company.fulfillmentLead.role}.
          </p>
          <p className="mt-8 text-sm text-cream/55">
            {company.address}, {company.zip}
            <br />
            {company.phone} · {company.email}
          </p>
        </div>
        <QuoteForm inverted />
      </div>
    </section>
  );
}
