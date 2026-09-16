import { cn } from "@/lib/cn";
import { localeMeta, locales, useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ inverted = false }: { inverted?: boolean }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.meta.language}
      className="flex items-center gap-0.5"
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={localeMeta[code].label}
            className={cn(
              "min-h-9 min-w-9 px-1.5 text-[0.7rem] font-bold tracking-wide transition-colors",
              inverted
                ? active
                  ? "text-cream"
                  : "text-cream/45 hover:text-cream"
                : active
                  ? "text-navy"
                  : "text-fog hover:text-navy",
            )}
          >
            {localeMeta[code].native}
          </button>
        );
      })}
    </div>
  );
}
