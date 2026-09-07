import { createServerFn } from "@tanstack/react-start";
import { company } from "./site";

export type InquiryInput = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  shop: string;
  volume: string;
  message: string;
};

export const sendInquiry = createServerFn({ method: "POST" })
  .validator((input: InquiryInput) => {
    const name = input.name?.trim() ?? "";
    const companyName = input.companyName?.trim() ?? "";
    const email = input.email?.trim() ?? "";
    const message = input.message?.trim() ?? "";
    if (!name || !companyName || !email || !message) {
      throw new Error("Bitte Name, Firma, E-Mail und Vorhaben angeben.");
    }
    return {
      name,
      companyName,
      email,
      phone: (input.phone ?? "").trim(),
      shop: (input.shop ?? "").trim(),
      volume: (input.volume ?? "").trim(),
      message,
    };
  })
  .handler(async ({ data }) => {
    const body = {
      Name: data.name,
      Firma: data.companyName,
      Email: data.email,
      Telefon: data.phone,
      Shopsystem: data.shop,
      Volumen: data.volume,
      Vorhaben: data.message,
      _subject: `ULD Fulfillment: Angebotsanfrage von ${data.companyName}`,
      _template: "box" as const,
      _captcha: "false",
      _replyto: data.email,
      _cc: company.fulfillmentLead.email,
    };

    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(company.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      },
    );
    const text = await res.text();
    if (!res.ok) {
      throw new Error(`Mailversand fehlgeschlagen (${res.status}): ${text.slice(0, 200)}`);
    }
    return { ok: true as const };
  });
