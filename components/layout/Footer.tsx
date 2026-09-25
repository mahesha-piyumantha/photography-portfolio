"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/photos";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-24 border-t border-line">
      {/* Creative CTA */}
      {/* <div className="px-6 py-20 md:px-10 md:py-28">
        <div className="group relative overflow-hidden">
          <Link href="/contact" className="block">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">
                  Have a story worth photographing?
                </p>

                <h2 className="max-w-4xl font-display text-[12vw] leading-[0.85] text-ink transition-transform duration-700 group-hover:translate-x-2 md:text-[7vw]">
                  Let&apos;s make
                  <br />
                  something memorable.
                </h2>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ink/30 text-2xl text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-bg md:h-20 md:w-20">
                ↗
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-line">
              <div className="h-px w-0 bg-ink transition-all duration-700 group-hover:w-full" />
            </div>
          </Link>
        </div>
      </div> */}

      {/* Main footer */}
      <div className="border-t border-line px-6 pb-8 pt-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-block"
              aria-label="Mahesha Piyumantha Photography home"
            >
              <Image
                src="/images/brand/photo-logo-removebg-3.png"
                alt="Mahesha Piyumantha Photography"
                width={160}
                height={160}
                className="h-20 w-auto transition-transform duration-500 group-hover:scale-105 md:h-28"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Travel, wildlife, street and macro photography, shot on the
              ground, in the field, and up close.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/40">
              Colombo · Sri Lanka
            </p>
          </div>

          {/* Explore */}
          <FooterColumn title="Explore">
            {categories.map((c) => (
              <FooterLink key={c.key} href={`/${c.key}`}>
                {c.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Site */}
          <FooterColumn title="Site">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>

            <button
              type="button"
              onClick={scrollToTop}
              className="group mt-2 flex w-fit items-center gap-2 text-left text-muted transition-colors hover:text-ink"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </FooterColumn>

          {/* Connect */}
          <FooterColumn title="Connect">
            <div className="flex items-center gap-3">
              <SocialLink
                href="https://www.instagram.com/mahi.lens_/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink
                href="https://www.facebook.com/"
                label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>

              <SocialLink
                href="https://www.tiktok.com/"
                label="TikTok"
              >
                <TikTokIcon />
              </SocialLink>
            </div>

            {/* <a
              href="mailto:hello@maheshapiyumantha.com"
              className="mt-3 block w-fit text-muted transition-colors hover:text-ink"
            >
              hello@maheshapiyumantha.com
            </a> */}
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Mahesha Piyumantha Photography.
            All rights reserved.
          </p>

          <p className="transition-colors hover:text-ink">
            Prints and licensing available on request.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-5 text-xs uppercase tracking-[0.2em] text-ink/50">
        {title}
      </p>

      <div className="flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex w-fit items-center gap-2 text-muted transition-colors hover:text-ink"
    >
      <span>{children}</span>

      <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-bg"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.2"
        cy="6.8"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M15 8.5h2.5V5h-2.5c-2.2 0-4 1.8-4 4v2H9v3.5h2v7h3.5v-7H17l.5-3.5h-3v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M14 4v9.5a3 3 0 1 1-2.2-2.9" />
      <path d="M14 4c.4 2.2 2 3.8 4.2 4.1V10c-1.6 0-3-.5-4.2-1.4" />
    </svg>
  );
}
