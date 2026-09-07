import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-cream text-ink">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-crimson focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-cream"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <div id="inhalt" className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
