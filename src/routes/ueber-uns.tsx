import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
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

const focus = [
  {
    title: "Discounter- und Aktionslogistik",
    text: "Enge Fenster, hohe Stückzahlen, klare Vorgaben. Unser operativer Kern seit Jahren.",
  },
  {
    title: "Fulfillment als eigener Schwerpunkt",
    text: "Shop, Marktplatz, Handel – ein Bestand, scanbasiert, mit Retouren und VAS im selben Fluss.",
  },
  {
    title: "Projektlogistik",
    text: "Einführungen, Relocations, Peak-Programme. Belegt, dass die Fläche und das Team tragen.",
  },
];

function About() {
  return (
    <main>
      <PageHero
        eyebrow="Über uns"
        title="Wir denken Logistik als Gesamtprozess."
        lead="ULD steht für Abläufe, die vom Wareneingang bis zur Zustellung zusammenhängen. Fulfillment ist dabei kein Add-on – es ist ein eigener Betrieb im Hafen."
        image="/images/ops-manager.jpg"
        imageAlt="ULD-Team im Fulfillment-Lager Hamburg"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Über uns" },
        ]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy">
              Operativ nah. Seit {company.founded}.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {company.legal} verbindet Transport, Lager und Distribution zu einem
              abgestimmten System. Entscheidungen fallen dort, wo sie wirken – im echten
              Ablauf, nicht in einer fernen Zentrale. Büro und Halle sitzen zusammen.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Geschäftsführung: {company.directors.join(", ")}. Fulfillment verantwortet{" "}
              {company.fulfillmentLead.name}.
            </p>
          </div>
          <BrandBox size="lg">
            <img
              src="/images/wms.jpg"
              alt="Steuerung am Hafen: Blick aus dem ULD-Büro auf Terminal und Kräne in Hamburg"
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
          <h2 className="font-display text-4xl font-bold tracking-tight">Unser Fokus</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {focus.map((f) => (
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
            ULD Fulfillment ist die E-Commerce-Marke von {company.legal}. Spedition, Zoll,
            Lager und Versand bleiben im selben Unternehmen – unter uld-hamburg.de und
            uld-fulfillment.de.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/kontakt" className={cn(buttonVariants({ variant: "navy", size: "lg" }))}>
              Mit uns sprechen
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
