import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { AiImage } from "@/components/ai-image";
import { BrandBox } from "@/components/brand-box";
import { company } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

const card = {
  name: "Andreas Heffter",
  given: "Andreas",
  family: "Heffter",
  role: "Warehouse Manager",
  phone: "+49 40 30 99 775-41",
  phoneHref: "tel:+4940309977541",
  email: "andreas.heffter@uld-hamburg.de",
  portsId: "DE814951797000000",
};

export const Route = createFileRoute("/andreas-heffter")({
  head: () => ({
    meta: [
      { title: "Andreas Heffter | ULD Fulfillment" },
      {
        name: "description",
        content:
          "Andreas Heffter, Warehouse Manager, ULD United Logistics & Distribution GmbH, Hamburg.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/andreas-heffter` }],
  }),
  component: AndreasHeffter,
});

function AndreasHeffter() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy-mid pt-[4.5rem] md:pt-[5.5rem]">
        <AiImage
          src="/images/uld-dynamic.png"
          alt="ULD-Lager: Scanvorgang im Schmalgang – Andreas Heffter, Warehouse Manager"
          className="aspect-[16/9] w-full object-cover object-center md:aspect-[21/9] md:max-h-[70vh]"
        />
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <BrandBox size="lg">
            <div className="bg-paper px-6 py-10 md:px-12 md:py-14">
              <p className="text-sm font-bold tracking-[0.14em] text-navy uppercase">
                ULD Fulfillment
              </p>
              <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-navy md:text-6xl">
                {card.given}
                <br />
                {card.family}
              </h1>
              <p className="mt-3 text-lg font-semibold text-crimson">{card.role}</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 size-4 shrink-0 text-crimson" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">
                      Tel
                    </p>
                    <a
                      href={card.phoneHref}
                      className="font-semibold text-navy hover:text-crimson"
                    >
                      {card.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 size-4 shrink-0 text-crimson" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${card.email}`}
                      className="break-all font-semibold text-navy hover:text-crimson"
                    >
                      {card.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-10 border-t border-line pt-6">
                <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">
                  German Ports ID
                </p>
                <p className="mt-1 font-display text-xl font-bold tracking-tight text-navy">
                  {card.portsId}
                </p>
              </div>
            </div>
          </BrandBox>

          <p className="mt-8 text-center text-sm leading-relaxed text-muted">
            {company.legal}
            <br />
            {company.address}, {company.zip} / Germany
            <br />
            <a href={company.parentSite} className="font-semibold text-navy hover:text-crimson">
              www.uld-hamburg.de
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
