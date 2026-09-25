import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32 px-6 md:px-10 pb-24 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-bg-elevated">
        <Image
          src="/images/travel/himalayan-dawn.jpg"
          alt="Ashan Perera"
          fill
          sizes="(max-width: 1024px) 100vw, 380px"
          className="object-cover"
        />
      </div>
      <div className="max-w-xl">
        <h1 className="font-display text-4xl md:text-5xl text-ink">About</h1>
        <p className="mt-6 leading-relaxed text-ink/90">
          I&apos;m Ashan, a photographer based in Colombo. I split my time between
          long trips chasing light in new places, early mornings waiting on
          birds that rarely show up, wandering cities for the moments nobody
          poses for, and the quiet, slower work of getting close to very
          small things.
        </p>
        <p className="mt-4 leading-relaxed text-ink/90">
          This site is a running collection of that work — four ways of
          paying attention, more or less.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Gear</h2>
        <ul className="mt-3 space-y-1 text-muted text-sm">
          <li>Sony A7 IV, Sony A9 III</li>
          <li>24-70mm f/2.8, 35mm f/1.4, 90mm f/2.8 Macro, 600mm f/4</li>
        </ul>
      </div>
    </div>
  );
}
