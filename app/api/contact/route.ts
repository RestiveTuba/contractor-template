import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, phone, address, service, message } = body;
  if (!name || !phone || !service) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const html = `
    <table style="font-family:sans-serif;font-size:15px;line-height:1.6;border-collapse:collapse;width:100%;max-width:560px">
      <tr><td style="padding:20px 0;border-bottom:2px solid #e5e7eb;font-size:20px;font-weight:700">
        New estimate request
      </td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f3f4f6"><b>Name:</b> ${esc(name)}</td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f3f4f6"><b>Phone:</b> ${esc(phone)}</td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f3f4f6"><b>Service:</b> ${esc(service)}</td></tr>
      ${address ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f3f4f6"><b>Address:</b> ${esc(address)}</td></tr>` : ""}
      ${message ? `<tr><td style="padding:12px 0"><b>Message:</b><br>${esc(message)}</td></tr>` : ""}
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Website Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New estimate request — ${esc(service)}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
