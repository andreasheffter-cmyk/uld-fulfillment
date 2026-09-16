import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { de, type Dictionary } from "./de";
import { en } from "./en";
import { es } from "./es";
import { zh } from "./zh";
import {
  detectLocale,
  localeMeta,
  locales,
  STORAGE_KEY,
  type Locale,
} from "./locale";

const dictionaries: Record<Locale, Dictionary> = { de, en, es, zh };

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].html;
    document.documentElement.classList.toggle("locale-zh", locale === "zh");
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function interpolate(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] === undefined ? `{${key}}` : String(vars[key]),
  );
}

export { locales, localeMeta };
export type { Locale, Dictionary };
