"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { getFeatured, photos } from "@/lib/photos";

const SEGMENTS = 48;
const LOADER_DURATION = 1000;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const featured = getFeatured();

  useEffect(() => {
    const start = performance.now();

    let animationFrame: number;

    const updateProgress = (now: number) => {
      const elapsed = now - start;

      const value = Math.min(
        Math.round(
          (elapsed / LOADER_DURATION) * 100
        ),
        100
      );

      setProgress(value);

      if (value < 100) {
        animationFrame =
          requestAnimationFrame(updateProgress);
      }
    };

    animationFrame =
      requestAnimationFrame(updateProgress);

    const timer = window.setTimeout(() => {
      setProgress(100);

      window.setTimeout(() => {
        setLoading(false);
      }, 150);
    }, LOADER_DURATION);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={!loading}
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg transition-opacity duration-1000 ${
          loading
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`relative flex h-[320px] w-[320px] items-center justify-center transition-transform duration-1000 md:h-[420px] md:w-[420px] ${
            loading
              ? "scale-100"
              : "scale-90"
          }`}
        >

          <SegmentedProgress
            progress={progress}
          />

          <div className="absolute h-64 w-64 rounded-full border border-ink/5 md:h-80 md:w-80" />

          <div className="absolute h-56 w-56 animate-[spin_8s_linear_infinite] rounded-full border border-ink/20 md:h-72 md:w-72">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-ink" />
          </div>


          <div className="absolute h-48 w-48 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-ink/10 md:h-64 md:w-64">
            <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ink/50" />
          </div>


          <div
            className="relative z-10 flex h-36 w-36 items-center justify-center md:h-44 md:w-44"
            style={{
              animation:
                "logoPulse 2s ease-in-out infinite",
            }}
          >
            <Image
              src="/images/brand/photo-logo-removebg-3.png"
              alt="Mahesha Piyumantha Photography"
              width={220}
              height={220}
              priority
              className="h-auto w-32 object-contain md:w-40"
            />
          </div>

          <div className="absolute h-[285px] w-[285px] animate-[spin_5s_linear_infinite] md:h-[385px] md:w-[385px]">
            <span className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-ink/40" />
          </div>
        </div>

        <div className="absolute bottom-9 left-0 right-0 flex flex-col items-center">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl leading-none tabular-nums text-ink">
              {progress}
            </span>

            <span className="text-xs text-muted">
              %
            </span>
          </div>

          <p className="mt-3 text-[9px] uppercase tracking-[0.45em] text-muted">
            {progress >= 100
              ? "Welcome"
              : "Loading"}
          </p>

          <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-muted/50">
            Mahesha Piyumantha Photography
          </p>
        </div>

        <style jsx>{`
          @keyframes logoPulse {
            0%,
            100% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.035);
            }
          }
        `}</style>
      </div>

      <main
        className={`transition-opacity duration-1000 ${
          loading
            ? "opacity-0"
            : "opacity-100"
        }`}
      >
        <Hero
          photos={
            featured.length
              ? featured
              : photos.slice(0, 4)
          }
        />

        <section id="explore">
          <CategoryShowcase />
        </section>

        <section className="px-6 pt-4 md:px-10">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Recent work
          </h2>
        </section>

        <div className="mt-10">
          <MasonryGrid
            photos={photos.slice(0, 9)}
          />
        </div>
      </main>
    </>
  );
}

function SegmentedProgress({
  progress,
}: {
  progress: number;
}) {
  const radius = 175;
  const center = 210;

  const activeSegments = Math.floor(
    (progress / 100) * SEGMENTS
  );

  return (
    <svg
      viewBox="0 0 420 420"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {Array.from({
        length: SEGMENTS,
      }).map((_, index) => {
        const angle =
          (index / SEGMENTS) * 360 - 90;

        const radians =
          (angle * Math.PI) / 180;

        const x1 = Number(
          (
            center +
            Math.cos(radians) * radius
          ).toFixed(4)
        );

        const y1 = Number(
          (
            center +
            Math.sin(radians) * radius
          ).toFixed(4)
        );

        const x2 = Number(
          (
            center +
            Math.cos(radians) *
              (radius - 12)
          ).toFixed(4)
        );

        const y2 = Number(
          (
            center +
            Math.sin(radians) *
              (radius - 12)
          ).toFixed(4)
        );

        const active =
          index < activeSegments;

        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className={
              active
                ? "text-ink"
                : "text-ink/10"
            }
          />
        );
      })}
    </svg>
  );
}