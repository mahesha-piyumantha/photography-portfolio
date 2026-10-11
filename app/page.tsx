import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { getAllPhotos, getFeatured } from "@/lib/photo-queries";
import PageLoader from "@/components/home/PageLoader";

export default async function Home() {
  const [all, featured] = await Promise.all([getAllPhotos(), getFeatured()]);

  return (
    <PageLoader>
      <Hero photos={featured.length ? featured : all.slice(0, 4)} />

      <section id="explore">
        <CategoryShowcase />
      </section>

      <section className="px-6 pt-4 md:px-10">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Recent work</h2>
      </section>

      <div className="mt-10">
        <MasonryGrid photos={all.slice(0, 9)} />
      </div>
    </PageLoader>
  );
}