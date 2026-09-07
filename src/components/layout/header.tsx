import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { company, nav } from "@/lib/site";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper shadow-[0_1px_0_0_rgb(6_63_112_/_0.1)]">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 md:h-[5.5rem] md:px-8">
        <span className="hidden xl:block">
          <Logo variant="horizontal" />
        </span>
        <span className="hidden md:block xl:hidden">
          <Logo variant="compact" />
        </span>
        <span className="md:hidden">
          <Logo variant="mark" />
        </span>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-[0.95rem] font-semibold tracking-tight transition-colors hover:text-navy",
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-navy"
                  : "text-ink/75",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-navy"
          >
            <Phone className="size-3.5" strokeWidth={2} />
            {company.phone}
          </a>
          <Link to="/kontakt" className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
            Angebot einholen
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobilnavigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-11 items-center font-display text-2xl font-bold tracking-tight text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="flex min-h-11 items-center font-display text-2xl font-bold tracking-tight text-navy"
            >
              Kontakt
            </Link>
          </nav>
          <a
            href={company.phoneHref}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
        </div>
      ) : null}
    </header>
  );
}
