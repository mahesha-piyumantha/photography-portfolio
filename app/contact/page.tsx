// app/contact/page.tsx

import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        {/* Intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Contact
          </p>

          <h1 className="mt-4 max-w-xl font-display text-6xl leading-[0.9] text-ink md:text-7xl lg:text-8xl">
            Let&apos;s
            <br />
            talk.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Have a print in mind? Need images for a project? Want to
            collaborate or simply talk about photography?
          </p>

          <div className="mt-10 space-y-5 border-t border-line pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </p>

              <a
                href="mailto:hello@maheshapiyumantha.com"
                className="mt-2 inline-block text-sm text-ink transition-colors hover:text-muted"
              >
                hello@maheshapiyumantha.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Based in
              </p>

              <p className="mt-2 text-sm text-ink">
                Colombo, Sri Lanka
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Available for
              </p>

              <p className="mt-2 text-sm text-muted">
                Prints · Licensing · Collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </main>
  );
}
