"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Photo } from "@/lib/photos";

export default function PhotoViewer({
  photo,
  previous,
  next,
  currentIndex,
  total,
}: {
  photo: Photo;
  previous?: Photo;
  next?: Photo;
  currentIndex: number;
  total: number;
}) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setZoomed(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Image */}
      <div
        className={`group relative w-full overflow-hidden rounded-sm bg-bg-elevated ${
          zoomed
            ? "fixed inset-0 z-50 flex items-center justify-center rounded-none bg-black p-4 md:p-10"
            : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setZoomed((value) => !value)}
          aria-label={zoomed ? "Close enlarged image" : "Enlarge image"}
          className={`relative block w-full ${
            zoomed ? "h-full" : ""
          }`}
        >
          <div
            className={`relative w-full ${
              zoomed ? "h-full" : ""
            }`}
            style={
              zoomed
                ? undefined
                : {
                    aspectRatio: `${photo.width} / ${photo.height}`,
                  }
            }
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              priority
              sizes={
                zoomed
                  ? "100vw"
                  : "(max-width: 1024px) 100vw, 70vw"
              }
              className={`transition-transform duration-700 ${
                zoomed
                  ? "object-contain"
                  : "object-cover group-hover:scale-[1.015]"
              }`}
            />
          </div>

          {!zoomed && (
            <span className="absolute bottom-5 right-5 rounded-full bg-black/50 px-4 py-2 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              Click to enlarge
            </span>
          )}
        </button>

        {zoomed && (
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label="Close image"
          >
            ×
          </button>
        )}
      </div>

      {/* Image counter */}
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs uppercase tracking-[0.2em] text-muted">
        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>

        <span>Click image to enlarge</span>
      </div>

      {/* Navigation */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {previous ? (
          <Link
            href={`/${previous.category}/${previous.slug}`}
            className="group border border-line p-4 transition-colors hover:border-ink"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Previous
            </span>

            <span className="mt-2 flex items-center gap-2 text-sm text-ink">
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {previous.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/${next.category}/${next.slug}`}
            className="group border border-line p-4 text-right transition-colors hover:border-ink"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Next
            </span>

            <span className="mt-2 flex items-center justify-end gap-2 text-sm text-ink">
              {next.title}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
