"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md space-y-5">
      <Field label="Name" name="name" />
      <Field label="Email" name="email" type="email" />
      <div>
        <label className="text-sm text-muted" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink resize-none transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-line rounded-full px-6 py-2 text-sm text-ink hover:border-ink transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && <p className="text-sm text-wildlife">Sent — I&apos;ll reply soon.</p>}
      {status === "error" && <p className="text-sm text-travel">Something went wrong. Try again.</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm text-muted" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1 w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-ink transition-colors"
      />
    </div>
  );
}
