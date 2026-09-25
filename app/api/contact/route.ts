import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Wire up Resend, Formspree, or your provider of choice here.
  // Example (Resend): await resend.emails.send({ ... })
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
