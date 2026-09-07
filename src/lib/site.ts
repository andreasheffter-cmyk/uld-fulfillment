export const company = {
  name: "ULD Fulfillment",
  legal: "ULD United Logistics & Distribution GmbH",
  short: "ULD",
  tagline: "E-Commerce Logistik aus dem Hamburger Hafen",
  address: "Dradenaustraße 20",
  zip: "21129 Hamburg",
  country: "Deutschland",
  phone: "+49 40 3099775-0",
  phoneHref: "tel:+494030997750",
  fax: "+49 40 3099775-31",
  email: "fulfillment@uld-hamburg.de",
  infoEmail: "info@uld-hamburg.de",
  hours: "Mo–Fr 07:00–18:00 Uhr",
  register: "HRB 104372",
  court: "Amtsgericht Hamburg",
  vat: "DE814951797",
  directors: ["Cengiz Cevik", "Knut Dreyer", "Frank Mielke"],
  editorial: "Vivien Bartz",
  fulfillmentLead: {
    name: "Andreas Heffter",
    role: "Head of Fulfillment",
    email: "andreas.heffter@uld-hamburg.de",
    phone: "+49 40 3099775-41",
  },
  founded: 2008,
  sqm: "28.164",
  gates: 43,
  website: "https://uld-fulfillment.de",
  parentSite: "https://www.uld-hamburg.de",
};

export const nav = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Ablauf", href: "/ablauf" },
  { label: "Standort", href: "/standort" },
  { label: "Über uns", href: "/ueber-uns" },
] as const;

export const stats = [
  { value: "28.164 m²", label: "Lagerfläche im Hafen" },
  { value: "43 Tore", label: "Eigener Speditionshof" },
  { value: "12:00", label: "Same-Day Cut-off, später nach Absprache" },
  { value: "Seit 2008", label: "Operative Logistik" },
] as const;

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  teaser: string;
  image: string;
  imageAlt: string;
  lead: string;
  body: string[];
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "lagerung",
    title: "Lagerung",
    eyebrow: "Bestände steuern",
    teaser:
      "Fachboden, Palette, Blocklager – eingerichtet auf Ihre Artikelstruktur, nicht umgekehrt.",
    image: "/images/warehouse-aisle.jpg",
    imageAlt: "Schmalganglager im ULD-Fulfillment-Lager im Hamburger Hafen",
    lead: "Ihre Ware liegt im Hamburger Hafen. Scanbasiert, zonenklar, jederzeit auskunftsfähig.",
    body: [
      "ULD kombiniert kurz- und langfristige Einlagerung mit klar definierten Warenströmen. Jede Palette und jedes Packstück läuft über Scanner, damit Bestände, Chargen und Mindesthaltbarkeiten transparent bleiben.",
      "Lagerzonen, Prioritäten und Handlingregeln stimmen wir auf Ihre Artikelstruktur, das gewünschte Servicelevel und saisonale Peaks ab. Schmalgang- und Breitgangregale, induktiv geführte Stapler und digitalisierte Warenflüsse halten Wege kurz.",
      "Über Integrationen zu Onlineshops und ERP sehen Sie Bestände ohne Medienbruch. Sie wissen zu jedem Zeitpunkt, wo sich welche Ware befindet.",
    ],
    bullets: [
      "28.164 m² flexibel nutzbare Fläche",
      "Fachboden-, Paletten- und Blocklagerung",
      "Chargen- und MHD-Führung",
      "Scanbasierte Bestandsführung in Echtzeit",
      "Skalierung bei Aktionen und Saisongeschäft",
    ],
  },
  {
    slug: "pick-pack",
    title: "Pick & Pack",
    eyebrow: "Aufträge umsetzen",
    teaser:
      "Einzelstück, Karton oder Palette – kommissioniert, geprüft, versandfertig. Am selben Tag.",
    image: "/images/pick-pack.jpg",
    imageAlt:
      "Pick-and-Pack-Station: Kommissionierung und Versandfertigmachen bei ULD Hamburg",
    lead: "Jede Bestellung wird scanbasiert kommissioniert und nach Ihren Packregeln versandfertig gemacht.",
    body: [
      "Kommissionierung erfolgt je nach Auftrag als Einzelstück, Karton, Paket oder Palette – inklusive Handelsbelieferung, Aktionsware und Direktversand an Endkunden.",
      "Wir packen nach Ihren Vorgaben: Beilagen, Branding, Kartonagen, Füllmaterial. Qualitätssicherung sitzt im Prozess, nicht danach. Bestellungen bis 12:00 Uhr gehen in der Regel noch am selben Werktag raus – nach Absprache auch später.",
      "B2B- und B2C-Aufträge laufen in einem abgestimmten Setup. So bleiben Aktionsware, Filialbelieferung und Shop-Bestellungen in einem Bestand steuerbar.",
    ],
    bullets: [
      "Same-Day-Versand bis Cut-off 12:00 Uhr, später nach Absprache",
      "Einzel-, Multi-Item- und Palettenkommissionierung",
      "Branded Packaging und Beilagen",
      "Scanbasierte Fehlervermeidung",
      "B2B- und B2C-Aufträge aus einem Lager",
    ],
  },
  {
    slug: "versand",
    title: "Versand",
    eyebrow: "Zustellung steuern",
    teaser:
      "Carrier nach Laufzeit und Kosten. Tracking zurück in Ihren Shop. Europaweit ab Hamburg.",
    image: "/images/outbound.jpg",
    imageAlt:
      "ULD-Fulfillment im Hamburger Hafen: Sattelzüge vor der Halle, Containerbrücken und Terminal im Hintergrund",
    lead: "Vom Packplatz an die Rampe, vom Hafen in die Fläche – mit festen Zeitfenstern und klarem Tracking.",
    body: [
      "ULD verbindet Fulfillment mit einem eigenen Speditionshof und 43 Hallentoren. Paketdienste, Stückgut und Direktverkehre werden nach Sendungsprofil gewählt, nicht nach Standardtarif.",
      "Sendungsnummern schreiben wir in Ihr Shopsystem zurück. Abweichungen werden proaktiv gemeldet. Für B2B gelten vereinbarte Zeitfenster, für B2C gängige Next-Day- und Standardprodukte in DACH und der EU.",
      "Weil wir im Hafen sitzen, verkürzen sich Wege vom Importcontainer zum ersten Kundenpaket. Weniger Umfuhr, weniger Wartezeit, planbarere Laufzeiten.",
    ],
    bullets: [
      "Paket, Stückgut und Palettenversand",
      "Tracking-Rückspiel in Shop und ERP",
      "DACH und EU-Distribution ab Hamburg",
      "Eigener Hof, 43 Tore, kurze Wege",
      "Feste Zeitfenster für Handelsbelieferung",
    ],
  },
  {
    slug: "retouren",
    title: "Retouren",
    eyebrow: "Ware zurückführen",
    teaser:
      "Annahme, Prüfung, Wiedereinlagerung. Damit Retouren kein blinder Fleck in Ihrer Marge bleiben.",
    image: "/images/returns.jpg",
    imageAlt: "Retourenbearbeitung bei ULD: Prüfung und Wiedereinlagerung im Hamburger Lager",
    lead: "Retouren nehmen wir strukturiert an, prüfen Zustand und Inhalt und führen einlagerungsfähige Ware kontrolliert zurück.",
    body: [
      "Jede Retoure wird erfasst, fotografisch oder scanbasiert dokumentiert und nach Ihren Regeln bewertet: A-Ware zurück in den Bestand, B-Ware in Zweitverwertung, Ausschuss klar getrennt.",
      "Sie erhalten Status und Gründe, nicht nur Stückzahlen. So sehen Sie, welche Artikel, Größen oder Kanäle Ihre Retourenquote treiben – und können gegensteuern.",
      "Wiedereinlagerung läuft über denselben scanbasierten Warenfluss wie der Eingang. Verfügbarkeit im Shop aktualisiert sich, sobald die Ware wieder greifbar ist.",
    ],
    bullets: [
      "Strukturierte Annahme und Identifikation",
      "Qualitätsprüfung nach Ihren Regeln",
      "Wiedereinlagerung in den Live-Bestand",
      "Reporting zu Gründen und Quoten",
      "Anbindung an Shop-Retourenportale",
    ],
  },
  {
    slug: "value-added",
    title: "Value Added Services",
    eyebrow: "Ware vorbereiten",
    teaser:
      "Umpacken, Etikettieren, Displays, Sets. Damit Kampagnen ohne Extra-Umlagerung starten.",
    image: "/images/kitting.jpg",
    imageAlt: "Kitting und Konfektionierung: Setbildung am Arbeitstisch im ULD-Lager Hamburg",
    lead: "Konfektionierung sitzt bei uns im Prozess – nicht in einem zweiten Lager am anderen Ende der Stadt.",
    body: [
      "Etikettierung, Umpacken, Displayaufbau, Setbildung und Aktionsware integrieren wir direkt in Wareneingang oder Kommissionierung. Kampagnen starten, ohne dass Ware extra bewegt werden muss.",
      "Für Discounter- und Aktionslogistik ist das unser Alltag: enge Zeitfenster, hohe Stückzahlen, klare Qualitätsvorgaben. Dieselbe Disziplin gilt für E-Commerce-Bundles, Influencer-Mailings und Handelspacks.",
      "Spezialisierte Flächen für Umpackaktionen und 43 Tore halten den Durchsatz auch bei Peaks stabil.",
    ],
    bullets: [
      "Etikettierung und Relabeling",
      "Setbildung, Bundles, Displays",
      "Umpack- und Aktionsflächen",
      "Handels- und Discounter-Vorgaben",
      "Qualitätskontrolle im selben Durchlauf",
    ],
  },
  {
    slug: "import-zoll",
    title: "Import & Zoll",
    eyebrow: "Ware hereinholen",
    teaser:
      "Container vom Terminal ins eigene Zolllager. Verzollen, wenn Sie wollen – nicht wenn der Hafen drängt.",
    image: "/images/customs.jpg",
    imageAlt: "Containerterminal im Hamburger Hafen mit Anschluss an das ULD-Zolllager",
    lead: "Mit eigenem Zolllager im Hamburger Hafen senken Sie Terminalkosten und behalten den Takt.",
    body: [
      "Nach Ankunft können Container kurzfristig vom Terminal zu uns. Die Ware lagert unverzollt, aber rechtssicher. Den Zeitpunkt der Abfertigung bestimmen Sie.",
      "Wir übernehmen Importverzollung über ATLAS, NCTS-T1, Abschreibung auf unsere Aufschubkonten und die Überführung in das Zolllagerverfahren. Ergänzend: Fiskalverzollung in Rotterdam, Antwerpen, Koper und Leixoes.",
      "Seefracht, Vorlauf und Fulfillment laufen bei ULD über einen Steuerungspunkt. Vom Lieferanten in Fernost bis zum Paket an Ihren Kunden.",
    ],
    bullets: [
      "Eigenes Zolllager im Hafen Hamburg",
      "Importverzollung deutscher Seehäfen",
      "T-1 / NCTS und ATLAS-Abfertigung",
      "Aufschubkonten für Einfuhrabgaben",
      "Direktanschluss an Lager und Fulfillment",
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Anbindung",
    text: "Shop, Marktplatz oder ERP an unser WMS. Shopify, Shopware, WooCommerce, Amazon, individuelle API – in wenigen Tagen, nicht Monaten.",
  },
  {
    n: "02",
    title: "Wareneingang",
    text: "Anlieferung per Container, LKW oder Paket. Scannen, prüfen, einlagern. Abweichungen sehen Sie am selben Tag.",
  },
  {
    n: "03",
    title: "Bestellung",
    text: "Der Auftrag kommt automatisch. Kein CSV, kein manuelles Freigeben. Bestände und Reservierungen laufen live.",
  },
  {
    n: "04",
    title: "Pick & Pack",
    text: "Scanbasierte Kommissionierung, Packregeln Ihrer Marke, Beilagen und Kartonage. Qualitätssicherung im Durchlauf.",
  },
  {
    n: "05",
    title: "Versand",
    text: "Label, Übergabe, Tracking zurück in den Shop. Cut-off 12:00 Uhr – davor raus, danach am nächsten Werktag. Später nach Absprache.",
  },
  {
    n: "06",
    title: "Retouren",
    text: "Annahme, Prüfung, Wiedereinlagerung. Verfügbarkeit im Shop aktualisiert sich, sobald die Ware wieder greifbar ist.",
  },
] as const;

export const usps = [
  {
    title: "Hafen, nicht Hinterland",
    text: "Dradenaustraße 20, mitten im Hamburger Hafen. Container vom Terminal ins Lager, Pakete raus in die EU – ohne Umweg über ein drittes Depot.",
  },
  {
    title: "Ein Bestand, alle Kanäle",
    text: "Shop, Amazon, Handel, Aktionen. B2B und B2C aus derselben Fläche, denselben Beständen, einem Ansprechpartner.",
  },
  {
    title: "Operativ nah",
    text: "Entscheidungen fallen im Ablauf, nicht in einer fernen Zentrale. Büro und Halle sitzen zusammen. Seit 2008.",
  },
  {
    title: "Mitwachsen, nicht umziehen",
    text: "28.164 m², 43 Tore, eigener Hof. Peaks, Neueinführungen und Sortimentswechsel fangen wir in derselben Halle auf.",
  },
] as const;

export const integrations = [
  "Shopify",
  "Shopware",
  "WooCommerce",
  "Magento",
  "Amazon",
  "eBay",
  "OTTO",
  "Kaufland",
  "ERP / API",
] as const;

export const faqs = [
  {
    q: "Ab welcher Menge lohnt sich Fulfillment bei ULD?",
    a: "Wir arbeiten mit wachsenden Shops ebenso wie mit etablierten Marken und Handelsprogrammen. Entscheidend ist nicht eine Mindeststückzahl, sondern ob Prozesse, Sortiment und Kanäle zu einem scanbasierten Setup passen. Im Erstgespräch klären wir das anhand Ihrer aktuellen Zahlen.",
  },
  {
    q: "Welche Shopsysteme können Sie anbinden?",
    a: "Shopify, Shopware, WooCommerce, Magento, Amazon und gängige Marktplätze. Darüber hinaus REST- und individuelle ERP-Schnittstellen. Tracking und Bestände spielen wir zurück, damit Ihr Shop die Lagerwahrheit hält.",
  },
  {
    q: "Versenden Sie noch am selben Tag?",
    a: "Bestellungen, die bis 12:00 Uhr werktags vollständig und zahlungsbestätigt bei uns eintreffen, gehen in der Regel noch am selben Tag an den Carrier. Spätere Cut-offs – etwa für Aktionen oder Marktplatz-SLAs – vereinbaren wir nach Absprache.",
  },
  {
    q: "Können Sie auch Importe und Zoll übernehmen?",
    a: "Ja. ULD ist Spedition, Zolllager und Fulfillment in einem. Container kommen vom Terminal zu uns, lagern unverzollt und werden abgefertigt, wenn Sie es steuern. Danach liegt die Ware direkt im Fulfillment – ohne zweites Lager.",
  },
  {
    q: "Wie schnell ist das Onboarding?",
    a: "Technische Shop-Anbindung oft innerhalb weniger Tage. Der begrenzende Faktor ist die physische Erstbevorratung: saubere Artikelstammdaten, ASN und ein abgestimmtes Wareneingangsfenster. Einen verbindlichen Zeitplan erhalten Sie nach dem Erstgespräch.",
  },
  {
    q: "Arbeiten Sie nur für E-Commerce?",
    a: "Fulfillment ist ein eigener Schwerpunkt – neben Discounter- und Aktionslogistik. Viele Kunden nutzen beides: Direct-to-Consumer und Handelsbelieferung aus einem Bestand. Genau darin liegt der Vorteil des Hamburger Setups.",
  },
  {
    q: "Bieten Sie Fulfillment in Hamburg an?",
    a: "Ja. Das Fulfillment-Lager von ULD liegt an der Dradenaustraße 20 in 21129 Hamburg, mitten im Hafen. Lagerung, Pick & Pack, Versand, Retouren und Import laufen in derselben Halle – mit eigenem Zolllager und 43 Toren.",
  },
  {
    q: "Was kostet E-Commerce-Fulfillment bei ULD?",
    a: "Die Kosten hängen von Volumen, Artikelstruktur, Kanälen und Servicelevel ab. Wir kalkulieren transparent nach Ihren Zahlen – unverbindlich im Erstgespräch, in der Regel innerhalb eines Werktags.",
  },
] as const;

export const volumes = [
  "Unter 500 Bestellungen / Monat",
  "500–2.000 Bestellungen / Monat",
  "2.000–10.000 Bestellungen / Monat",
  "Über 10.000 Bestellungen / Monat",
  "Noch unklar / Start geplant",
] as const;

export const shopSystems = [
  "Shopify",
  "Shopware",
  "WooCommerce",
  "Magento",
  "Amazon",
  "Eigenes ERP / API",
  "Noch kein Shop",
  "Sonstiges",
] as const;

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
