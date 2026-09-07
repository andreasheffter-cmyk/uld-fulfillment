import { company, faqs, services, type Service } from "@/lib/site";

export const siteUrl = "https://uld-fulfillment.de";

export const geo = {
  lat: 53.5217,
  lng: 9.9084,
};

export type PageKey =
  | "home"
  | "leistungen"
  | "ablauf"
  | "standort"
  | "ueber-uns"
  | "kontakt"
  | "impressum"
  | "datenschutz";

export const pages: Record<
  PageKey,
  { path: string; title: string; description: string }
> = {
  home: {
    path: "/",
    title: "Fulfillment Hamburg | ULD – E-Commerce Logistik",
    description:
      "E-Commerce-Fulfillment im Hamburger Hafen: Lagerung, Pick & Pack, Versand und Retouren. Same-Day ab 12 Uhr, Shop-Anbindung, eigenes Zolllager. Jetzt anfragen.",
  },
  leistungen: {
    path: "/leistungen",
    title: "Fulfillment-Leistungen Hamburg | ULD",
    description:
      "Lagerhaltung, Pick & Pack, Versand, Retouren, Kitting und Import-Zoll – Fulfillment aus einer Halle im Hamburger Hafen. Scanbasiert und shopverbunden.",
  },
  ablauf: {
    path: "/ablauf",
    title: "Fulfillment-Ablauf & Onboarding | ULD Hamburg",
    description:
      "So startet Fulfillment bei ULD: Shop-Anbindung, Wareneingang, Pick & Pack, Versand und Retouren. Onboarding in Tagen, Same-Day-Cut-off 12 Uhr.",
  },
  standort: {
    path: "/standort",
    title: "Fulfillment-Lager Hamburger Hafen | ULD Standort",
    description:
      "ULD Fulfillment an der Dradenaustraße 20, 21129 Hamburg: 28.164 m², 43 Tore, eigenes Zolllager, direkter Terminalzugang. Kein Hinterland-Lager.",
  },
  "ueber-uns": {
    path: "/ueber-uns",
    title: "Über ULD | Fulfillment & Logistik Hamburg",
    description:
      "ULD United Logistics & Distribution GmbH: Fulfillment, Spedition und Zolllager seit 2008 im Hamburger Hafen. Operativ nah, ein Bestand für Shop und Handel.",
  },
  kontakt: {
    path: "/kontakt",
    title: "Fulfillment-Angebot anfragen | ULD Hamburg",
    description:
      "Unverbindliches Erstgespräch für E-Commerce-Fulfillment in Hamburg. Volumen, Kanäle, Starttermin – Antwort in der Regel innerhalb eines Werktags.",
  },
  impressum: {
    path: "/impressum",
    title: "Impressum | ULD United Logistics & Distribution",
    description:
      "Impressum der ULD United Logistics & Distribution GmbH, Dradenaustraße 20, 21129 Hamburg. HRB 104372, USt-IdNr. DE814951797.",
  },
  datenschutz: {
    path: "/datenschutz",
    title: "Datenschutz | ULD Fulfillment",
    description:
      "Datenschutzerklärung der ULD United Logistics & Distribution GmbH zur Nutzung der Website uld-fulfillment.de gemäß DSGVO.",
  },
};

export const serviceSeo: Record<
  string,
  { title: string; description: string; alt: string }
> = {
  lagerung: {
    title: "Lagerhaltung Hamburg Hafen | ULD Fulfillment",
    description:
      "Fulfillment-Lager im Hamburger Hafen: 28.164 m² Fachboden, Palette und Blocklager. Scanbasierte Bestände, Chargen und MHD – angebunden an Shop und ERP.",
    alt: "Schmalganglager im ULD-Fulfillment-Lager im Hamburger Hafen",
  },
  "pick-pack": {
    title: "Pick & Pack Fulfillment Hamburg | ULD",
    description:
      "Pick & Pack in Hamburg: scanbasierte Kommissionierung, Branded Packaging, B2B und B2C. Same-Day-Versand bis 12 Uhr, später nach Absprache.",
    alt: "Pick-and-Pack-Station: Kommissionierung und Versandfertigmachen bei ULD Hamburg",
  },
  versand: {
    title: "E-Commerce Versand ab Hamburg | ULD Fulfillment",
    description:
      "Versand aus dem Hamburger Hafen: Paket, Stückgut, Paletten. Tracking zurück in den Shop, DACH und EU, 43 Tore, eigener Speditionshof.",
    alt: "Warenausgang am ULD-Fulfillment: Cargo-Red LKW an den Laderampen im Hamburger Hafen",
  },
  retouren: {
    title: "Retourenmanagement Fulfillment Hamburg | ULD",
    description:
      "Retouren-Fulfillment in Hamburg: Annahme, Prüfung, Wiedereinlagerung. Status und Gründe zurück in den Shop – keine blinde Marge.",
    alt: "Retourenbearbeitung bei ULD: Prüfung und Wiedereinlagerung im Hamburger Lager",
  },
  "value-added": {
    title: "Kitting & Value Added Services Hamburg | ULD",
    description:
      "Value Added Services im Fulfillment: Etikettieren, Umpacken, Sets, Displays. Aktions- und Discounterlogistik direkt in der Halle im Hamburger Hafen.",
    alt: "Kitting und Konfektionierung: Setbildung am Arbeitstisch im ULD-Lager Hamburg",
  },
  "import-zoll": {
    title: "Import & Zolllager Hamburg Hafen | ULD",
    description:
      "Eigenes Zolllager im Hamburger Hafen: Container vom Terminal, ATLAS, NCTS, unverzollte Lagerung. Import und Fulfillment ohne zweites Lager.",
    alt: "Containerterminal im Hamburger Hafen mit Portalkränen, Anschluss an das ULD-Zolllager",
  },
};

export function canonical(path: string) {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: company.name,
        legalName: company.legal,
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        image: `${siteUrl}/og.jpg`,
        email: company.email,
        telephone: company.phone,
        faxNumber: company.fax,
        foundingDate: String(company.founded),
        vatID: company.vat,
        taxID: company.register,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          postalCode: "21129",
          addressLocality: "Hamburg",
          addressRegion: "Hamburg",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.lat,
          longitude: geo.lng,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        areaServed: ["DE", "AT", "CH", "EU"],
        sameAs: ["https://www.uld-hamburg.de"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: company.phone,
          email: company.email,
          contactType: "sales",
          availableLanguage: ["German", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: company.name,
        inLanguage: "de-DE",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function serviceJsonLd(service: Service) {
  const seo = serviceSeo[service.slug];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} – ULD Fulfillment Hamburg`,
    serviceType: service.title,
    description: seo?.description ?? service.teaser,
    url: canonical(`/leistungen/${service.slug}`),
    image: `${siteUrl}${service.image}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["DE", "AT", "CH", "EU"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: company.legal,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          postalCode: "21129",
          addressLocality: "Hamburg",
          addressCountry: "DE",
        },
      },
    },
  };
}

export function pageHead(
  key: PageKey,
  extraJsonLd: unknown[] = [],
) {
  const page = pages[key];
  const url = canonical(page.path);
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "de-DE",
  };
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: company.legal },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "de", href: url },
    ],
    scripts: [webpage, ...extraJsonLd].map(jsonLdScript),
  };
}

export function serviceHead(service: Service) {
  const seo = serviceSeo[service.slug];
  const path = `/leistungen/${service.slug}`;
  const url = canonical(path);
  const title = seo?.title ?? `${service.title} | ULD Fulfillment Hamburg`;
  const description = seo?.description ?? service.teaser;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: company.legal },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "de", href: url },
    ],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "de-DE",
      }),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: service.title, path },
        ]),
      ),
      jsonLdScript(serviceJsonLd(service)),
    ],
  };
}

export const sitemapPaths = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/leistungen", priority: "0.9", changefreq: "weekly" },
  ...services.map((s) => ({
    path: `/leistungen/${s.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  { path: "/ablauf", priority: "0.7", changefreq: "monthly" },
  { path: "/standort", priority: "0.8", changefreq: "monthly" },
  { path: "/ueber-uns", priority: "0.6", changefreq: "monthly" },
  { path: "/kontakt", priority: "0.8", changefreq: "monthly" },
  { path: "/impressum", priority: "0.3", changefreq: "yearly" },
  { path: "/datenschutz", priority: "0.3", changefreq: "yearly" },
] as const;
