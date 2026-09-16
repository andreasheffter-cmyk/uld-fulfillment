import { services as catalog } from "@/lib/site";
import type { Dictionary } from "./de";

export type ServiceSlug = keyof Dictionary["service"];

export const navLinks = [
  { href: "/leistungen", key: "services" },
  { href: "/ablauf", key: "process" },
  { href: "/standort", key: "location" },
  { href: "/ueber-uns", key: "about" },
] as const;

export function localizedServices(t: Dictionary) {
  return catalog.map((s) => ({
    slug: s.slug,
    image: s.image,
    ...t.service[s.slug as ServiceSlug],
  }));
}

export function localizedService(t: Dictionary, slug: string) {
  const meta = catalog.find((s) => s.slug === slug);
  if (!meta || !(slug in t.service)) return undefined;
  return {
    slug: meta.slug,
    image: meta.image,
    ...t.service[slug as ServiceSlug],
  };
}
