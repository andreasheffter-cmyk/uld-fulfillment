import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, shopSystems, volumes } from "@/lib/site";

const field =
  "h-11 w-full border-0 bg-paper px-3.5 text-[0.95rem] text-ink shadow-[0_0_0_1px_rgb(6_63_112_/_0.16)] outline-none transition-[box-shadow] placeholder:text-fog focus:shadow-[0_0_0_2px_#d13c22]";

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function QuoteForm({ inverted = false }: { inverted?: boolean }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/form-angebot.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "angebot",
          name: String(fd.get("name") ?? ""),
          company: String(fd.get("company") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          shop: String(fd.get("shop") ?? ""),
          volume: String(fd.get("volume") ?? ""),
          message: String(fd.get("message") ?? ""),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setError(
        `Senden nicht möglich. Bitte direkt an ${company.email} schreiben oder ${company.phone} anrufen.`,
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className={inverted ? "text-cream" : "text-ink"}>
        <div className="flex size-12 items-center justify-center bg-crimson text-cream">
          <Check className="size-6" strokeWidth={2.4} />
        </div>
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
          Anfrage ist raus.
        </h3>
        <p className={`mt-3 max-w-md leading-relaxed ${inverted ? "text-cream/70" : "text-muted"}`}>
          {company.fulfillmentLead.name}, {company.fulfillmentLead.role}, meldet sich in der Regel
          innerhalb eines Werktags unter {company.email}. Für dringende Fälle: {company.phone}.
        </p>
      </div>
    );
  }

  return (
    <form
      name="angebot"
      method="POST"
      action="/form-angebot.html"
      onSubmit={onSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value="angebot" />
      <p className="hidden">
        <label>
          Nicht ausfüllen
          <input name="bot-field" />
        </label>
      </p>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span className={inverted ? "text-cream/80" : "text-ink"}>Name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span className={inverted ? "text-cream/80" : "text-ink"}>Firma</span>
        <input name="company" required autoComplete="organization" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span className={inverted ? "text-cream/80" : "text-ink"}>E-Mail</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span className={inverted ? "text-cream/80" : "text-ink"}>Telefon</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span className={inverted ? "text-cream/80" : "text-ink"}>Shopsystem</span>
        <select name="shop" className={field} defaultValue="">
          <option value="" disabled>
            Bitte wählen
          </option>
          {shopSystems.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span className={inverted ? "text-cream/80" : "text-ink"}>Monatliches Volumen</span>
        <select name="volume" className={field} defaultValue="">
          <option value="" disabled>
            Bitte wählen
          </option>
          {volumes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
        <span className={inverted ? "text-cream/80" : "text-ink"}>Ihr Vorhaben</span>
        <textarea
          name="message"
          rows={4}
          required
          className={`${field} h-auto min-h-28 py-2.5`}
          placeholder="Sortiment, Kanäle, gewünschter Start…"
        />
      </label>
      <div className="sm:col-span-2">
        {error ? (
          <p className={`mb-3 text-sm ${inverted ? "text-cream" : "text-crimson"}`}>{error}</p>
        ) : null}
        <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
          {sending ? "Wird gesendet…" : "Unverbindlich anfragen"}
        </Button>
        <p className={`mt-3 text-xs leading-relaxed ${inverted ? "text-cream/45" : "text-fog"}`}>
          Die Anfrage geht an {company.email}. Hinweise in der{" "}
          <a href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </a>
          .
        </p>
      </div>
    </form>
  );
}
