import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { jsonLdScript, organizationGraph, pages } from "@/lib/seo";
import { company } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: pages.home.title },
      { name: "description", content: pages.home.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: company.legal },
      { name: "theme-color", content: "#063F70" },
      { name: "geo.region", content: "DE-HH" },
      { name: "geo.placename", content: "Hamburg" },
      { name: "geo.position", content: "53.5217;9.9084" },
      { name: "ICBM", content: "53.5217, 9.9084" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anybody:wght@500;600;700;800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap",
      },
    ],
    scripts: [jsonLdScript(organizationGraph())],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="de-DE" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="bg-navy px-5 pt-36 pb-24 text-cream md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold text-navy-ice">404</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-7xl">
          Seite nicht gefunden.
        </h1>
        <p className="mt-5 max-w-lg text-lg text-cream/70">
          Die Adresse existiert nicht. Zurück zur Startseite oder direkt ein Angebot einholen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-crimson px-7 font-display font-bold text-cream"
          >
            Zur Startseite
          </a>
          <a
            href="/kontakt"
            className="inline-flex h-12 items-center rounded-full px-7 font-display font-bold text-cream ring-1 ring-cream/30"
          >
            Kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
