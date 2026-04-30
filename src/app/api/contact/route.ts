import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  /** Honeypot — bots fill this. Real submissions leave it empty. */
  website?: string;
};

const TRIM_MAX = 2000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, TRIM_MAX);
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Simple in-memory rate limit per IP. Resets on cold start; acceptable for
// a low-volume contact form. Swap for Redis if traffic warrants.
const submissions = new Map<string, number[]>();
function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const arr = submissions.get(key) || [];
  const recent = arr.filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    submissions.set(key, recent);
    return false;
  }
  recent.push(now);
  submissions.set(key, recent);
  return true;
}

function clientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 },
    );
  }

  const ip = clientIp(req.headers);
  if (!rateLimit(`services-contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many submissions. Try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — silently accept and drop
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const message = clean(body.message);

  if (!name || !email || !company || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: "Planara Services <hello@planara.com>",
      to: "hello@planara.com",
      replyTo: email,
      subject: `New consultation request — ${company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; color: #131820;">
          <h2 style="font-weight: 500; letter-spacing: -0.01em; margin: 0 0 24px;">
            New consultation request
          </h2>
          <table style="font-size: 14px; line-height: 1.6;" cellspacing="0" cellpadding="0">
            <tr><td style="color: #627084; padding-right: 16px;">Name</td><td>${escape(name)}</td></tr>
            <tr><td style="color: #627084; padding-right: 16px;">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
            <tr><td style="color: #627084; padding-right: 16px;">Company</td><td>${escape(company)}</td></tr>
          </table>
          <p style="font-size: 13px; color: #627084; margin: 24px 0 8px;">Message</p>
          <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escape(message)}</p>
          <p style="font-size: 12px; color: #8B94A3; margin-top: 32px; padding-top: 16px; border-top: 1px solid #E2E5EA;">
            services.planara.com · ${new Date().toISOString()}
          </p>
        </div>
      `,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
