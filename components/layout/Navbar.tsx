"use client";

import Link from "next/link";
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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        solid ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 h-20">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          Ashan Perera
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {categories.map((c) => (
            <li key={c.key}>
              <Link
                href={`/${c.key}`}
                className={`hover:text-ink transition-colors ${
                  pathname === `/${c.key}` ? "text-ink" : ""
                }`}
              >
                {c.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/about" className="hover:text-ink transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-ink border border-line rounded-full px-4 py-1.5 hover:border-ink transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="text-ink text-sm border border-line rounded-full px-4 py-1.5"
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
