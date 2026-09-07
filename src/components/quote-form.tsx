import { useState } from "react";
import { Button } from "@/components/ui/button";
import { company, shopSystems, volumes } from "@/lib/site";

const field =
  "h-11 w-full border-0 bg-paper px-3.5 text-[0.95rem] text-ink shadow-[0_0_0_1px_rgb(6_63_112_/_0.16)] outline-none transition-[box-shadow] placeholder:text-fog focus:shadow-[0_0_0_2px_#d13c22]";

/** Registered Netlify form endpoint — must be the live origin so preview and production both send. */
const FORM_ACTION = "https://uld-fulfillment.netlify.app/form-angebot.html";

export function QuoteForm({ inverted = false }: { inverted?: boolean }) {
  const [sending, setSending] = useState(false);

  return (
    <form
      name="angebot"
      method="POST"
      action={FORM_ACTION}
      onSubmit={() => setSending(true)}
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
