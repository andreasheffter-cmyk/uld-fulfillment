const TO = "fulfillment@uld-hamburg.de";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: cors, body: "POST only" };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Name: data.name ?? "",
        Firma: data.company ?? data.companyName ?? "",
        Email: data.email ?? "",
        Telefon: data.phone ?? "",
        Shopsystem: data.shop ?? "",
        Volumen: data.volume ?? "",
        Vorhaben: data.message ?? "",
        _subject: `ULD Fulfillment: Angebotsanfrage von ${data.company || data.companyName || data.name || "Website"}`,
        _template: "box",
        _captcha: "false",
        _replyto: data.email ?? "",
      }),
    });
    const text = await res.text();
    return {
      statusCode: res.ok ? 200 : 502,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: res.ok, detail: text.slice(0, 300) }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
}
