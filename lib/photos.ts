export type Category = "travel" | "wildlife" | "street" | "macro";

export type Photo = {
  slug: string;
  src: string;
  width: number;
  height: number;
  category: Category;
  title: string;
  location?: string;
  story?: string;
  camera?: string;
  lens?: string;
  settings?: string;
  featured?: boolean;
};

export const categories: { key: Category; label: string; blurb: string }[] = [
  {
    key: "travel",
    label: "Travel",
    blurb: "Places, light, and the in-between moments of getting there.",
  },
  {
    key: "wildlife",
    label: "Wildlife",
    blurb: "Birds and animals, watched patiently and photographed quietly.",
  },
  {
    key: "street",
    label: "Street",
    blurb: "Unposed life in cities — gesture, geometry, chance.",
  },
  {
    key: "macro",
    label: "Macro",
    blurb: "The small world, close enough to lose scale.",
  },
];

// Replace src/width/height with your real files in /public/images/<category>/...
// width & height should match the actual export so layout never shifts.
export const photos: Photo[] = [
  {
    slug: "himalayan-dawn",
    src: "/images/travel/himalayan-dawn.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Himalayan Dawn",
    location: "Ladakh, India",
    story: "First light on the ridgeline after a night at 4,200m.",
    camera: "Sony A7 IV",
    lens: "24-70mm f/2.8",
    settings: "f/8 · 1/125s · ISO 200",
    featured: true,
  },
  {
    slug: "market-alley",
    src: "/images/travel/market-alley.jpg",
    width: 1600,
    height: 1067,
    category: "travel",
    title: "Market Alley",
    location: "Hoi An, Vietnam",
    camera: "Sony A7 IV",
    lens: "35mm f/1.4",
    settings: "f/2.8 · 1/250s · ISO 400",
  },
  {
    slug: "coastal-road",
    src: "/images/travel/coastal-road.jpg",
    width: 1600,
    height: 1067,
    category: "travel",
    title: "Coastal Road",
    location: "Amalfi Coast, Italy",
  },
  {
    slug: "kingfisher-strike",
    src: "/images/wildlife/kingfisher-strike.jpg",
    width: 1600,
    height: 1067,
    category: "wildlife",
    title: "Kingfisher Strike",
    location: "Bundala National Park, Sri Lanka",
    story: "Forty minutes on one perch for a half-second dive.",
    camera: "Sony A9 III",
    lens: "600mm f/4",
    settings: "f/5.6 · 1/3200s · ISO 800",
    featured: true,
  },
  {
    slug: "owl-at-dusk",
    src: "/images/wildlife/owl-at-dusk.jpg",
    width: 1600,
    height: 2000,
    category: "wildlife",
    title: "Owl at Dusk",
    location: "Sinharaja Forest Reserve",
  },
  {
    slug: "flamingo-formation",
    src: "/images/wildlife/flamingo-formation.jpg",
    width: 1600,
    height: 1067,
    category: "wildlife",
    title: "Flamingo Formation",
    location: "Bundala National Park",
  },
  {
    slug: "crossing-signal",
    src: "/images/street/crossing-signal.jpg",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Crossing Signal",
    location: "Colombo, Sri Lanka",
    story: "Rain, one umbrella, and a red light nobody obeyed.",
    featured: true,
  },
  {
    slug: "tea-stall",
    src: "/images/street/tea-stall.jpg",
    width: 1600,
    height: 1067,
    category: "street",
    title: "Tea Stall",
    location: "Pettah, Colombo",
  },
  {
    slug: "stairwell-light",
    src: "/images/street/stairwell-light.jpg",
    width: 1600,
    height: 1200,
    category: "street",
    title: "Stairwell Light",
    location: "Galle Fort",
  },
  {
    slug: "dew-on-web",
    src: "/images/macro/dew-on-web.jpg",
    width: 1600,
    height: 1600,
    category: "macro",
    title: "Dew on Web",
    story: "Shot handheld at f/11, minutes before the sun burned it off.",
    camera: "Sony A7 IV",
    lens: "90mm f/2.8 Macro",
    settings: "f/11 · 1/160s · ISO 640",
    featured: true,
  },
  {
    slug: "mantis-portrait",
    src: "/images/macro/mantis-portrait.jpg",
    width: 1600,
    height: 2000,
    category: "macro",
    title: "Mantis Portrait",
  },
  {
    slug: "petal-vein",
    src: "/images/macro/petal-vein.jpg",
    width: 1600,
    height: 1067,
    category: "macro",
    title: "Petal Vein",
  },
];

export function getPhotosByCategory(category: Category) {
  return photos.filter((p) => p.category === category);
}

export function getFeatured() {
  return photos.filter((p) => p.featured);
}

export function getPhotoBySlug(slug: string) {
  return photos.find((p) => p.slug === slug);
}
