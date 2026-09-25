"use client";

import { useState } from "react";
import type { Photo } from "@/lib/photos";
import GalleryItem from "./GalleryItem";
import PhotoLightbox from "./Lightbox";

export default function MasonryGrid({
  photos,
}: {
  photos: Photo[];
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="columns-1 gap-5 px-6 sm:columns-2 md:px-10 lg:columns-3">
        {photos.map((photo, i) => (
          <div
            key={photo.slug}
            className="
              group
              relative
              mb-5
              break-inside-avoid
              overflow-hidden
              rounded-sm
              bg-bg-elevated
            "
          >
            <GalleryItem
              photo={photo}
              onOpen={() => setIndex(i)}
            />

            {/* Subtle hover overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/10
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Photo number */}
            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/0
                transition-all
                duration-500
                group-hover:text-white/70
              "
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Open indicator */}
            <div
              className="
                pointer-events-none
                absolute
                right-4
                top-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/0
                bg-black/0
                backdrop-blur-sm
                opacity-0
                transition-all
                duration-500
                group-hover:rotate-45
                group-hover:border-white/50
                group-hover:bg-black/20
                group-hover:opacity-100
              "
            >
              <span className="text-sm text-white">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>

      <PhotoLightbox
        photos={photos}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}
