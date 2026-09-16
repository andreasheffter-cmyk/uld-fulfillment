export const locales = ["de", "en", "es", "zh"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { html: string; native: string; label: string }
> = {
  de: { html: "de-DE", native: "DE", label: "Deutsch" },
  en: { html: "en", native: "EN", label: "English" },
  es: { html: "es", native: "ES", label: "Español" },
  zh: { html: "zh-CN", native: "中文", label: "中文" },
};

export const STORAGE_KEY = "uld-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "de";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  const lang = (navigator.language || "de").toLowerCase();
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";
  return "de";
}
