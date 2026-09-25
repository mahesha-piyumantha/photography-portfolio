import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PhotoViewer from "@/components/gallery/PhotoViewer";
import { getPhotoBySlug, photos } from "@/lib/photos";

export function generateStaticParams() {
  return photos.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const photo = getPhotoBySlug(slug);

  if (!photo) return {};

  return {
    title: `${photo.title} — Mahesha Piyumantha`,
    description: photo.story ?? photo.location,
    openGraph: {
      images: [photo.src],
    },
  };
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const photo = getPhotoBySlug(slug);

  if (!photo) {
    notFound();
  }

  const collectionPhotos = photos.filter(
    (p) => p.category === photo.category
  );

  const currentIndex = collectionPhotos.findIndex(
    (p) => p.slug === photo.slug
  );

  const previous =
    currentIndex > 0
      ? collectionPhotos[currentIndex - 1]
      : undefined;

  const next =
    currentIndex < collectionPhotos.length - 1
      ? collectionPhotos[currentIndex + 1]
      : undefined;

  return (
    <main className="px-6 pb-24 pt-28 md:px-10">
      {/* Back */}
      <Link
        href={`/${photo.category}`}
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>

        Back to {photo.category}
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        {/* Photo */}
        <PhotoViewer
          photo={photo}
          previous={previous}
          next={next}
          currentIndex={currentIndex}
          total={collectionPhotos.length}
        />

        {/* Information */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            {photo.category}
          </p>

          <h1 className="mt-3 font-display text-4xl leading-tight text-ink">
            {photo.title}
          </h1>

          {photo.location && (
            <p className="mt-3 text-sm text-muted">
              {photo.location}
            </p>
          )}

          {photo.story && (
            <p className="mt-8 leading-relaxed text-ink/80">
              {photo.story}
            </p>
          )}

          {(photo.camera || photo.lens || photo.settings) && (
            <dl className="mt-10 border-t border-line pt-6 text-sm">
              {photo.camera && (
                <div className="flex justify-between gap-6 border-b border-line py-3">
                  <dt className="text-muted">Camera</dt>
                  <dd className="text-right text-ink">
                    {photo.camera}
                  </dd>
                </div>
              )}

              {photo.lens && (
                <div className="flex justify-between gap-6 border-b border-line py-3">
                  <dt className="text-muted">Lens</dt>
                  <dd className="text-right text-ink">
                    {photo.lens}
                  </dd>
                </div>
              )}

              {photo.settings && (
                <div className="flex justify-between gap-6 py-3">
                  <dt className="text-muted">Settings</dt>
                  <dd className="text-right text-ink">
                    {photo.settings}
                  </dd>
                </div>
              )}
            </dl>
          )}

          <Link
            href="/contact"
            className="group mt-8 flex items-center justify-between border border-line p-4 transition-all hover:border-ink hover:bg-bg-elevated"
          >
            <span className="text-sm text-ink">
              Interested in this photograph?
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </aside>
      </div>
    </main>
  );
}
