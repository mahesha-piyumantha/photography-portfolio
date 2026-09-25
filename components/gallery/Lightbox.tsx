"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import type { Photo } from "@/lib/photos";

export default function PhotoLightbox({
  photos,
  index,
  setIndex,
}: {
  photos: Photo[];
  index: number;
  setIndex: (i: number) => void;
}) {
  return (
    <Lightbox
      open={index >= 0}
      close={() => setIndex(-1)}
      index={index}
      slides={photos.map((p) => ({
        src: p.src,
        width: p.width,
        height: p.height,
        title: p.title,
        description: p.location,
      }))}
      plugins={[Zoom, Captions]}
      carousel={{ finite: false }}
      styles={{ container: { backgroundColor: "rgba(20,19,15,0.97)" } }}
    />
  );
}
