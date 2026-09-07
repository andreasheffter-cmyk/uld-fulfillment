import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandBox } from "@/components/brand-box";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
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

const facts = [
  { k: "Fläche", v: "28.164 m² flexibel nutzbar" },
  { k: "Tore", v: "43 Hallentore, eigener Speditionshof" },
  { k: "Technik", v: "Schmalgang, Breitgang, induktiv geführte Stapler" },
  { k: "Zoll", v: "Eigenes Zolllager, ATLAS, NCTS" },
  { k: "Lage", v: "Dradenau, direkter Terminalzugang" },
  { k: "Kanäle", v: "B2C-Fulfillment, Handel, Aktionen, Amazon" },
];

function Standort() {
  return (
    <main>
      <PageHero
        eyebrow="Standort"
        title="Mitten im Hamburger Hafen."
        lead={`${company.address}, ${company.zip}. Kurze Wege vom Terminal ins Regal – und vom Packplatz in die Fläche.`}
        image="/images/hamburg-port.jpg"
        imageAlt="Containerschiff auf der Elbe vor Hamburg – Lage des ULD-Fulfillment-Lagers"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Standort" },
        ]}
      />

      <section className="bg-cream">
        <div className="grid md:grid-cols-2">
          <img
            src="/images/customs.jpg"
            alt="Containerbrücken im Hamburger Hafen, unmittelbarer Anschluss an das ULD-Fulfillment"
            className="h-72 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-center px-5 py-14 md:px-14">
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy">
              Lage, die Laufzeit spart.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Waltershof / Dradenau ist kein Gewerbegebiet irgendwo im Hinterland. Unser
              Fulfillment-Lager in Hamburg liegt an der Dradenaustraße 20: Container kommen
              vom Terminal, Pakete gehen ohne zweite Umfuhr raus. Für Importeure und
              Shopbetreiber ist das messbar: weniger Vorlauf, weniger Standgeld, planbarere
              Bestände.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 md:grid-cols-3 md:px-8">
          {facts.map((f) => (
            <article key={f.k}>
              <p className="text-sm font-bold text-navy">{f.k}</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-navy">
                {f.v}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-8">
          <BrandBox size="lg">
            <img
              src="/images/inbound.jpg"
              alt="Wareneingang im ULD-Lager Hamburg: Stapler an der Rampe"
              className="h-80 w-full object-cover"
            />
          </BrandBox>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy">
              Halle, Hof, Zoll – ein Betrieb.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Spezialisierte Flächen für Umpackaktionen, scanbasierte Zonen, gesicherte
              Bestände. Wer Ware aus Asien zieht und in DACH ausliefert, braucht keinen
              zweiten Dienstleister dazwischen.
            </p>
            <Link
              to="/kontakt"
              className={cn(buttonVariants({ variant: "navy", size: "lg" }), "mt-8 w-fit")}
            >
              Besuch oder Erstgespräch
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
