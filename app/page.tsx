import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { getFeatured, photos } from "@/lib/photos";

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      <Hero photos={featured.length ? featured : photos.slice(0, 4)} />
      <CategoryShowcase />
      <section className="px-6 pt-4 md:px-10">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Recent work</h2>
      </section>
      <div className="mt-10">
        <MasonryGrid photos={photos.slice(0, 9)} />
      </div>
    </>
  );
}
