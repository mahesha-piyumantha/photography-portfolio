"use client";

import Image from "next/image";
import type { Photo } from "@/lib/photos";

const accent: Record<Photo["category"], string> = {
  travel: "text-travel",
  wildlife: "text-wildlife",
  street: "text-street",
  macro: "text-macro",
};

export default function GalleryItem({
  photo,
  onOpen,
}: {
  photo: Photo;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-bg-elevated text-left"
    >
      <div style={{ aspectRatio: `${photo.width} / ${photo.height}` }} className="relative overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-display text-lg text-ink">{photo.title}</p>
          {photo.location && (
            <p className={`text-xs ${accent[photo.category]}`}>{photo.location}</p>
          )}
        </div>
      </div>
    </button>
  );
}
