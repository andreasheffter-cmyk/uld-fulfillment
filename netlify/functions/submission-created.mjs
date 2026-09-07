const TO = "fulfillment@uld-hamburg.de";
const CC = "andreas.heffter@uld-hamburg.de";

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body || "{}").payload ?? {};
    const data = payload.data ?? {};
    if (!data.email && !data.message) {
      return { statusCode: 200, body: "ignored" };
    }

    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: data.name ?? "",
        Firma: data.company ?? "",
        Email: data.email ?? "",
        Telefon: data.phone ?? "",
        Shopsystem: data.shop ?? "",
        Volumen: data.volume ?? "",
        Vorhaben: data.message ?? "",
        _subject: `ULD Fulfillment: Angebotsanfrage von ${data.company || data.name || "Website"}`,
        _template: "box",
        _captcha: "false",
        _replyto: data.email ?? "",
        _cc: CC,
      }),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ mailed: res.ok, status: res.status }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({ mailed: false, error: String(err) }),
    };
  }
}
