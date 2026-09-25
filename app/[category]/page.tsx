import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { categories, getPhotosByCategory, type Category } from "@/lib/photos";

const valid = categories.map((c) => c.key);

export function generateStaticParams() {
  return valid.map((key) => ({ category: key }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = categories.find((c) => c.key === params.category);
  if (!cat) return {};
  return {
    title: `${cat.label} Photography — Ashan Perera`,
    description: cat.blurb,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  if (!valid.includes(params.category as Category)) notFound();

  const category = categories.find((c) => c.key === params.category)!;
  const photos = getPhotosByCategory(category.key);

  return (
    <div className="pt-32 pb-24">
      <div className="px-6 md:px-10 mb-12">
        <h1 className="font-display text-5xl text-ink md:text-6xl">{category.label}</h1>
        <p className="mt-3 max-w-md text-muted">{category.blurb}</p>
      </div>
      <MasonryGrid photos={photos} />
    </div>
  );
}
