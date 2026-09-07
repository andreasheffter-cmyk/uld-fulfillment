import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { company, nav, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-mid text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <Logo inverted variant="horizontal" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-cream/70">
            E-Commerce-Fulfillment, Lager und Import aus einer Halle. Mitten im
            Hamburger Hafen – scanbasiert und an Ihren Shop angebunden.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-bold tracking-[0.14em] text-cream/45 uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-cream/75 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/kontakt" className="text-cream/75 hover:text-cream">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-[0.14em] text-cream/45 uppercase">
            Leistungen
          </p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/leistungen/$slug"
                  params={{ slug: s.slug }}
                  className="text-cream/75 hover:text-cream"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-[0.14em] text-cream/45 uppercase">
            Standort
          </p>
          <address className="mt-4 not-italic text-[0.95rem] leading-relaxed text-cream/75">
            {company.legal}
            <br />
            {company.address}
            <br />
            {company.zip}
            <br />
            <a href={company.phoneHref} className="mt-3 inline-block hover:text-cream">
              {company.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-cream">
              {company.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-cream/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {company.legal}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/impressum" className="hover:text-cream">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-cream">
              Datenschutz
            </Link>
            <a href="https://www.uld-hamburg.de" className="hover:text-cream">
              uld-hamburg.de
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
