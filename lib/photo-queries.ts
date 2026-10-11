import { client } from "./sanity";
import type { Category, Photo } from "./photos";

const QUERY = `*[_type == "photo" && defined(image.asset)] | order(_createdAt desc){
  "slug": slug.current,
  title, category, location, story, camera, lens, settings, featured,
  "src": image.asset->url,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height
}`;

export async function getAllPhotos(): Promise<Photo[]> {
  return client.fetch(QUERY, {}, { next: { revalidate: 60 } });
}

export async function getPhotosByCategory(category: Category) {
  const all = await getAllPhotos();
  return all.filter((p) => p.category === category);
}

export async function getFeatured() {
  const all = await getAllPhotos();
  return all.filter((p) => p.featured);
}

export async function getPhotoBySlug(slug: string) {
  const all = await getAllPhotos();
  return all.find((p) => p.slug === slug);
}