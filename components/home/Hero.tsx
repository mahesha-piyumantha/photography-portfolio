"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Photo } from "@/lib/photos";

export default function Hero({ photos }: { photos: Photo[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;

    const id = setInterval(() => {
      setI((v) => (v + 1) % photos.length);
    }, 5500);

    return () => clearInterval(id);
  }, [photos.length]);

  if (!photos.length) return null;

  const current = photos[i];

  const nextPhoto = () => {
    setI((v) => (v + 1) % photos.length);
  };

  const previousPhoto = () => {
    setI((v) => (v - 1 + photos.length) % photos.length);
  };

  return (
    <section className="group relative h-[100svh] w-full overflow-hidden bg-bg">
      {/* Background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 5.5, ease: "linear" },
          }}
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

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/30" />

      {/* Top information */}
      <div className="absolute left-6 right-6 top-24 z-10 flex items-start justify-between md:left-10 md:right-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.25em] text-ink/70"
        >
          Photography / Sri Lanka
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-widest text-ink/70"
        >
          {String(i + 1).padStart(2, "0")} /{" "}
          {String(photos.length).padStart(2, "0")}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 md:px-10 md:pb-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <motion.p
              key={`eyebrow-${current.slug}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-3 text-xs uppercase tracking-[0.3em] text-ink/60"
            >
              See the world differently
            </motion.p>

            <motion.h1
              key={`title-${current.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="font-display text-[14vw] leading-[0.82] text-ink md:text-[8vw]"
            >
              {current.title}
            </motion.h1>

            <motion.p
              key={`description-${current.slug}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base"
            >
              Moments from the road, the wild, the streets, and the smallest
              details hiding in plain sight.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
            <a
              href="#explore"
              className="group/button inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-bg transition-transform duration-300 hover:scale-105"
            >
              Explore the gallery
              <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </a>

              <button
                type="button"
                onClick={nextPhoto}
                className="rounded-full border border-ink/30 px-6 py-3 text-sm text-ink backdrop-blur-sm transition-colors duration-300 hover:border-ink hover:bg-ink/10"
              >
                Next story
              </button>
            </motion.div>
          </div>

          {/* Current image information + controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-end gap-5"
          >
            <div className="hidden text-right md:block">
              <p className="text-xs uppercase tracking-widest text-ink/50">
                Now viewing
              </p>

              <p className="mt-1 text-sm text-ink">{current.title}</p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousPhoto}
                aria-label="Previous photograph"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-lg text-ink backdrop-blur-sm transition-all duration-300 hover:bg-ink hover:text-bg"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next photograph"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-lg text-ink backdrop-blur-sm transition-all duration-300 hover:bg-ink hover:text-bg"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex items-center gap-2">
          {photos.map((photo, index) => (
            <button
              key={photo.slug}
              type="button"
              onClick={() => setI(index)}
              aria-label={`View ${photo.title}`}
              className="group/dot h-6"
            >
              <span
                className={`block h-[2px] transition-all duration-500 ${
                  index === i
                    ? "w-12 bg-ink"
                    : "w-5 bg-ink/30 group-hover/dot:w-8 group-hover/dot:bg-ink/60"
                }`}
              />
            </button>
          ))}

          <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-ink/50">
            Explore
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-ink/50">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-ink/60"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
