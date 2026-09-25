"use client";

import { useState } from "react";
import type { Photo } from "@/lib/photos";
import GalleryItem from "./GalleryItem";
import PhotoLightbox from "./Lightbox";

export default function MasonryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-6 md:px-10">
        {photos.map((photo, i) => (
          <GalleryItem key={photo.slug} photo={photo} onOpen={() => setIndex(i)} />
        ))}
      </div>
      <PhotoLightbox photos={photos} index={index} setIndex={setIndex} />
    </>
  );
}
