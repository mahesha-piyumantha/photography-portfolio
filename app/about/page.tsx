"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const disciplines = [
  {
    number: "01",
    title: "Travel",
    text: "Long roads, unfamiliar places, changing light, and the photographs that happen somewhere between destinations.",
  },
  {
    number: "02",
    title: "Wildlife",
    text: "Early mornings, patience, and waiting for a moment that may only last a second.",
  },
  {
    number: "03",
    title: "Street",
    text: "Unplanned moments, passing expressions, quiet details, and the rhythm of everyday life.",
  },
  {
    number: "04",
    title: "Macro",
    text: "A slower way of looking — finding entire worlds in details most people walk past.",
  },
];

const gear = [
  {
    title: "Camera",
    value: "iPhone 16 Pro",
    detail:
      "A compact camera that is always close enough to capture the moment without getting in the way.",
  },
  {
    title: "13mm",
    value: "ƒ/2.2",
    detail: "Ultra-wide perspective for landscapes, architecture, and immersive travel scenes.",
  },
  {
    title: "24mm",
    value: "ƒ/1.78",
    detail: "The everyday perspective — natural, versatile, and useful when moving through a city.",
  },
  {
    title: "48mm",
    value: "ƒ/2.8",
    detail: "A tighter perspective for portraits, details, and compressed compositions.",
  },
  {
    title: "120mm",
    value: "ƒ/2.8",
    detail: "Long reach for distant subjects, wildlife, and moments that need a little more space.",
  },
];

export default function About() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const [activeGear, setActiveGear] = useState(0);

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      {/* Intro */}
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bg-elevated"
        >
          <Image
            src="/images/travel/RAW_PERSON.jpg"
            alt="Mahesha Piyumantha"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 380px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
              Photographer
            </p>
            <p className="mt-1 text-sm text-white">
              Colombo, Sri Lanka
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-muted"
          >
            Behind the photographs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl leading-[0.95] text-ink md:text-7xl"
          >
            Hello, I&apos;m
            <br />
            Mahesha.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg"
          >
            I photograph the things that make me stop walking.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 max-w-2xl leading-relaxed text-muted"
          >
            Long trips chasing light in new places. Early mornings waiting
            for birds that rarely show up. Wandering cities for moments nobody
            poses for. And the quiet, slower work of getting close to very
            small things.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-4 max-w-2xl leading-relaxed text-muted"
          >
            This site is a running collection of that work — four different
            ways of paying attention.
          </motion.p>

          <motion.a
            href="#my-work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 inline-flex items-center gap-3 text-sm text-ink transition-all hover:gap-5"
          >
            Explore how I see
            <span>↓</span>
          </motion.a>
        </div>
      </section>

      {/* Photography disciplines */}
      <section id="my-work" className="mt-32 scroll-mt-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Four ways of looking
          </p>

          <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
            What I photograph
          </h2>
        </div>

        <div className="grid border-t border-line md:grid-cols-4">
          {disciplines.map((discipline, index) => {
            const active = activeDiscipline === index;

            return (
              <button
                key={discipline.title}
                type="button"
                onClick={() => setActiveDiscipline(index)}
                className={`group border-b border-line p-5 text-left transition-colors md:border-b-0 md:border-r last:md:border-r-0 ${
                  active ? "bg-bg-elevated" : "hover:bg-bg-elevated/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">
                    {discipline.number}
                  </span>

                  <span
                    className={`transition-transform duration-300 ${
                      active ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                <h3 className="mt-12 font-display text-2xl text-ink">
                  {discipline.title}
                </h3>

                <AnimatePresence mode="wait">
                  {active && (
                    <motion.p
                      key={discipline.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm leading-relaxed text-muted"
                    >
                      {discipline.text}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div
                  className={`mt-8 h-px transition-all duration-500 ${
                    active ? "w-full bg-ink" : "w-8 bg-line group-hover:w-16"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Gear */}
      <section className="mt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              The tools
            </p>

            <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
              Gear I carry
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-muted">
              The best camera is usually the one that is already with me.
              Keeping the setup simple lets me concentrate on the scene rather
              than the equipment.
            </p>
          </div>

          <div className="border-t border-line">
            {gear.map((item, index) => {
              const active = activeGear === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveGear(index)}
                  className="w-full border-b border-line py-5 text-left"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <span className="w-8 text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm uppercase tracking-wider text-muted">
                        {item.title}
                      </span>
                    </div>

                    <span className="font-display text-xl text-ink">
                      {item.value}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="ml-[52px] mt-4 max-w-xl text-sm leading-relaxed text-muted">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-32 border-t border-line pt-10"
      >
        <p className="max-w-4xl font-display text-3xl leading-tight text-ink md:text-6xl">
          There&apos;s always something worth stopping for.
        </p>

        <p className="mt-6 text-sm text-muted">
          Thanks for looking.
        </p>
      </motion.section>
    </main>
  );
}
