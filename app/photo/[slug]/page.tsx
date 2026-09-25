import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPhotoBySlug, photos } from "@/lib/photos";

export function generateStaticParams() {
  return photos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const photo = getPhotoBySlug(params.slug);
  if (!photo) return {};
  return {
    title: `${photo.title} — Ashan Perera`,
    description: photo.story ?? photo.location,
    openGraph: { images: [photo.src] },
  };
}

export default function PhotoPage({ params }: { params: { slug: string } }) {
  const photo = getPhotoBySlug(params.slug);
  if (!photo) notFound();

  return (
    <div className="pt-28 px-6 md:px-10 pb-24">
      <Link href={`/${photo.category}`} className="text-sm text-muted hover:text-ink transition-colors">
        &larr; Back to {photo.category}
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <div
          className="relative w-full overflow-hidden rounded-sm bg-bg-elevated"
          style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-3xl text-ink">{photo.title}</h1>
          {photo.location && <p className="mt-2 text-muted">{photo.location}</p>}
          {photo.story && <p className="mt-6 leading-relaxed text-ink/90">{photo.story}</p>}

          {(photo.camera || photo.lens || photo.settings) && (
            <dl className="mt-8 space-y-2 border-t border-line pt-6 text-sm">
              {photo.camera && (
                <div className="flex justify-between text-muted">
                  <dt>Camera</dt>
                  <dd className="text-ink">{photo.camera}</dd>
                </div>
              )}
              {photo.lens && (
                <div className="flex justify-between text-muted">
                  <dt>Lens</dt>
                  <dd className="text-ink">{photo.lens}</dd>
                </div>
              )}
              {photo.settings && (
                <div className="flex justify-between text-muted">
                  <dt>Settings</dt>
                  <dd className="text-ink">{photo.settings}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}
