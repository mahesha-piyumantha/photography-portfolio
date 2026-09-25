import Link from "next/link";
import Image from "next/image";
import { categories, getPhotosByCategory } from "@/lib/photos";

const accentBorder: Record<string, string> = {
  travel: "group-hover:border-travel",
  wildlife: "group-hover:border-wildlife",
  street: "group-hover:border-street",
  macro: "group-hover:border-macro",
};

export default function CategoryShowcase() {
  return (
    <section className="px-6 py-24 md:px-10">
      <h2 className="font-display text-3xl text-ink md:text-4xl">Four ways of looking</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((c) => {
          const cover = getPhotosByCategory(c.key)[0];
          return (
            <Link
              key={c.key}
              href={`/${c.key}`}
              className={`group relative block aspect-[4/3] overflow-hidden rounded-sm border border-transparent transition-colors duration-500 ${accentBorder[c.key]}`}
            >
              {cover && (
                <Image
                  src={cover.src}
                  alt={c.label}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl text-ink">{c.label}</h3>
                <p className="mt-1 max-w-xs text-sm text-ink/80">{c.blurb}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
