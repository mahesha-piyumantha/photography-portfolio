import Link from "next/link";
import Image from "next/image";
import { categories, getPhotosByCategory } from "@/lib/photos";

const accent: Record<
  string,
  {
    border: string;
    glow: string;
    text: string;
  }
> = {
  travel: {
    border: "group-hover:border-travel/70",
    glow: "group-hover:bg-travel/10",
    text: "text-travel",
  },
  wildlife: {
    border: "group-hover:border-wildlife/70",
    glow: "group-hover:bg-wildlife/10",
    text: "text-wildlife",
  },
  street: {
    border: "group-hover:border-street/70",
    glow: "group-hover:bg-street/10",
    text: "text-street",
  },
  macro: {
    border: "group-hover:border-macro/70",
    glow: "group-hover:bg-macro/10",
    text: "text-macro",
  },
};

export default function CategoryShowcase() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-36">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-muted">
            Explore the collection
          </p>

          <h2 className="font-display text-4xl leading-none text-ink md:text-6xl">
            Four ways of looking
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
          Travel, wildlife, street and macro -
          different subjects, different ways of seeing.
        </p>
      </div>

      {/* Balanced Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {categories.map((category, index) => {
          const cover =
            getPhotosByCategory(category.key)[0];

          const colors =
            accent[category.key] ?? accent.travel;

          return (
            <Link
              key={category.key}
              href={`/${category.key}`}
              className={`
                group relative block
                overflow-hidden
                rounded-sm
                border border-line
                bg-bg-elevated
                transition-all duration-700
                ${colors.border}
              `}
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                {cover && (
                  <Image
                    src={cover.src}
                    alt={category.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-1400
                      ease-out
                      group-hover:scale-110
                    "
                  />
                )}

                {/* Base gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/85
                    via-black/25
                    to-black/5
                  "
                />

                {/* Accent color */}
                <div
                  className={`
                    absolute inset-0
                    opacity-0
                    transition-opacity
                    duration-700
                    ${colors.glow}
                  `}
                />

                {/* Top information */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`
                        text-[10px]
                        font-medium
                        tracking-[0.3em]
                        text-white/60
                        ${colors.text}
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-7 bg-white/30 transition-all duration-500 group-hover:w-12" />
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-white/30
                      bg-black/10
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-white
                      group-hover:bg-white
                    "
                  >
                    <span className="text-sm text-white transition-colors duration-500 group-hover:text-black">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="transition-transform duration-700 group-hover:-translate-y-1">
                    <h3 className="font-display text-3xl leading-none text-white md:text-4xl">
                      {category.label}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65 transition-colors duration-500 group-hover:text-white/90">
                      {category.blurb}
                    </p>
                  </div>

                  {/* Explore indicator */}
                  <div
                    className="
                      mt-5
                      flex items-center gap-3
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-white/50
                      opacity-0
                      translate-y-3
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <span>Explore</span>

                    <span className="h-px w-8 bg-white/40 transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className={`
                  absolute bottom-0 left-0 h-0.5
                  w-0
                  transition-all
                  duration-700
                  group-hover:w-full
                  ${colors.text.replace(
                    "text-",
                    "bg-"
                  )}
                `}
              />
            </Link>
          );
        })}
      </div>

      {/* Footer detail */}
      <div className="mt-14 flex items-center gap-4">
        <span className="h-px w-10 bg-line" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-muted">
          Choose a perspective
        </span>

        <span className="h-px flex-1 bg-line" />
      </div>
    </section>
  );
}