"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Photo } from "@/lib/photos";

export default function Hero({ photos }: { photos: Photo[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % photos.length), 5500);
    return () => clearInterval(id);
  }, [photos.length]);

  const current = photos[i];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-bg">
      <AnimatePresence>
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 5.5, ease: "linear" } }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-bg/40" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="font-display text-[13vw] leading-[0.95] text-ink md:text-[6.5vw]"
        >
          Ashan Perera
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
          className="mt-4 max-w-md text-muted"
        >
          Travel, wildlife, street and macro photography — shot on the ground,
          in the field, and up close.
        </motion.p>
      </div>
    </section>
  );
}
