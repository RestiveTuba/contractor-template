import { NextRequest, NextResponse } from "next/server";

const N8N_URL = "http://167.172.131.244:5678/webhook/contact";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  try {
    const upstream = await fetch(N8N_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ ok: upstream.ok }, { status: upstream.status });
  } catch (err) {
    console.error("contact proxy: upstream unreachable", err);
    return NextResponse.json({ error: "upstream unreachable" }, { status: 502 });
  }
}
