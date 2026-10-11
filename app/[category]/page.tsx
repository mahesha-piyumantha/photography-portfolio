import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { categories, type Category } from "@/lib/photos";
import { getPhotosByCategory } from "@/lib/photo-queries";

const valid = categories.map((c) => c.key);

export function generateStaticParams() {
  return valid.map((key) => ({ category: key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.key === category);

  if (!cat) return {};

  return {
    title: `${cat.label} Photography — Mahesha Piyumantha`,
    description: cat.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryParam } = await params;

  if (!valid.includes(categoryParam as Category)) {
    notFound();
  }

  const category = categories.find((c) => c.key === categoryParam)!;
  const categoryPhotos = await getPhotosByCategory(category.key);

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Collection
            </p>

            <h1 className="mt-3 font-display text-6xl leading-[0.9] text-ink md:text-8xl">
              {category.label}
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              {category.blurb}
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-display text-4xl text-ink">
              {String(categoryPhotos.length).padStart(2, "0")}
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
              Photographs
            </p>
          </div>
        </div>
      </section>

      <nav
        aria-label="Photography collections"
        className="mt-12 overflow-x-auto border-y border-line px-6 md:px-10"
      >
        <div className="flex min-w-max">
          {categories.map((item) => {
            const active = item.key === category.key;

            return (
              <Link
                key={item.key}
                href={`/${item.key}`}
                className={`border-r border-line px-5 py-4 text-xs uppercase tracking-[0.18em] transition-colors first:border-l ${
                  active
                    ? "bg-ink text-bg"
                    : "text-muted hover:bg-bg-elevated hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <section className="mt-12">
        <MasonryGrid photos={categoryPhotos} />
      </section>
    </div>
  );
}