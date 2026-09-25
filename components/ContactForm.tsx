"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subjects = [
  "Print",
  "Licensing",
  "Collaboration",
  "Just saying hello",
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const [subject, setSubject] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      e.currentTarget.reset();
      setSubject("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[500px] flex-col justify-center border-t border-line"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-bg">
          ✓
        </div>

        <h2 className="mt-8 font-display text-4xl text-ink md:text-5xl">
          Message received.
        </h2>

        <p className="mt-4 max-w-md leading-relaxed text-muted">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 w-fit rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="border-t border-line pt-8"
    >
      {/* Subject */}
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-muted">
          I&apos;m getting in touch about
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {subjects.map((item) => {
            const active = subject === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setSubject(item)}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  active
                    ? "border-ink bg-ink text-bg"
                    : "border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <input type="hidden" name="subject" value={subject} />
      </div>

      {/* Name */}
      <div className="mt-12">
        <Field
          label="Your name"
          name="name"
          placeholder="What should I call you?"
        />
      </div>

      {/* Email */}
      <div className="mt-8">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="Where can I reply?"
        />
      </div>

      {/* Message */}
      <div className="mt-8">
        <label
          className="text-sm text-muted"
          htmlFor="message"
        >
          Your message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me a little about what you're thinking..."
          className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-ink"
        />
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 text-sm text-travel"
          >
            Something went wrong. Please try again or email me directly.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit */}
      <div className="mt-8 flex items-center justify-between gap-6">
        <p className="hidden max-w-xs text-xs leading-relaxed text-muted sm:block">
          I usually reply as soon as possible.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group ml-auto flex items-center gap-4 rounded-full bg-ink px-7 py-3.5 text-sm text-bg transition-all duration-300 hover:gap-6 hover:bg-ink/90 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="text-sm text-muted"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-ink"
      />
    </div>
  );
}
