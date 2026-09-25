"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/lib/photos";

export default function Navbar() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = `transition-colors ${
    solid ? "text-ink/70 hover:text-ink" : "text-ink hover:text-ink/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
  }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        solid ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 h-24 md:h-28">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/brand/photo-logo-removebg-3.png"
            alt="Mahesha Piyumantha Photography"
            width={160}
            height={160}
            priority
            className="h-20 w-auto md:h-28"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {categories.map((c) => (
            <li key={c.key}>
              <Link
                href={`/${c.key}`}
                className={`${linkClass} ${pathname === `/${c.key}` ? "text-ink font-medium" : ""}`}
              >
                {c.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/about" className={linkClass}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`rounded-full border px-4 py-1.5 transition-colors ${
                solid
                  ? "border-line text-ink hover:border-ink"
                  : "border-ink/60 text-ink hover:border-ink [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <MobileMenu pathname={pathname} solid={solid} />
      </nav>
    </header>
  );
}

function MobileMenu({ pathname, solid }: { pathname: string; solid: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className={`text-sm rounded-full border px-4 py-1.5 transition-colors ${
          solid ? "text-ink border-line" : "text-ink border-ink/60 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
        }`}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="absolute top-20 left-0 w-full bg-bg border-b border-line px-6 py-6 flex flex-col gap-4">
          {categories.map((c) => (
            <Link
              key={c.key}
              href={`/${c.key}`}
              onClick={() => setOpen(false)}
              className={`text-lg font-display ${
                pathname === `/${c.key}` ? "text-ink" : "text-muted"
              }`}
            >
              {c.label}
            </Link>
          ))}
          <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-display text-muted">
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-display text-muted">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}