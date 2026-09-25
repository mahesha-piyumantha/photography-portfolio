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
    blurb: "Places, light, and the in between moments of getting there.",
  },
  {
    key: "wildlife",
    label: "Wildlife",
    blurb: "Birds and animals, watched patiently and photographed quietly.",
  },
  {
    key: "street",
    label: "Street",
    blurb: "Unposed life in cities - gesture, geometry, chance.",
  },
  {
    key: "macro",
    label: "Macro",
    blurb: "The small world, close enough to lose scale.",
  },
];

// Replace src/width/height with your real files in /public/images/<category>/...
// width & height should match the actual export so layout never shifts.

/**
 *  width: 1600,
    height: 1067,

    width: 1600,
    height: 2000,
 */ 


export const photos: Photo[] = [

    //-----------------------Travel--------------------------------

  {
    slug: "blue_lotus_tower",
    src: "/images/travel/blue_lotus_tower.JPG",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Night Lotus",
    location: "Colombo, Sri Lanka",
    featured: false,
  },
  {
    slug: "idalgassinna",
    src: "/images/travel/idalgassinna.JPG",
    width: 1600,
    height: 1067,
    category: "travel",
    title: "Winding Trails",
    location: "Idalgashinna, Sri Lanka",
    featured: false,
  },
  {
    slug: "sea",
    src: "/images/travel/sea.JPG",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Tropical Shoreline",
    location: "Galle, Sri Lanka",
    featured: false,
  },
    {
    slug: "mountain_mist",
    src: "/images/travel/mountain_mist.JPG",
    width: 1600,
    height: 1067,
    category: "travel",
    title: "Misty Valley",
    location: "Kandy, Sri Lanka",
    featured: true,
  },
  {
    slug: "beach",
    src: "/images/travel/beach.JPG",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Golden Horizon",
    location: "Galle Face, Sri Lanka",
    featured: false,
  },
  {
    slug: "temple_of_tooth_relic",
    src: "/images/travel/temple_of_tooth_relic.JPG",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Sacred Sanctuary",
    location: "Kandy, Sri Lanka",
    featured: false,
  },
    {
    slug: "monk",
    src: "/images/travel/monk.JPG",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Sacred Alms",
    location: "Pahanthudawa, Sri Lanka",
    featured: false,
  },
  {
    slug: "bambarakanda_waterfall",
    src: "/images/travel/bambarakanda_waterfall.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Bambarakanda Falls",
    location: "Kalupahana, Sri Lanka",
    featured: false,
  },
  {
    slug: "lotus_tower",
    src: "/images/travel/lotus_tower.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Luminous Bloom",
    location: "Colombo, Sri Lanka",
    featured: true,
  },
  {
    slug: "sigiriya",
    src: "/images/travel/sigiriya.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Sigiriya Rock Fortress ",
    location: "Sigiriya, Sri Lanka",
    featured: false,
  },
  {
    slug: "blue_sea",
    src: "/images/travel/blue_sea.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Whispers of the Tide",
    location: "Galle Face, Sri Lanka",
    featured: false,
  },
  {
    slug: "maligawa",
    src: "/images/travel/maligawa.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Temple Moat",
    location: "Kandy, Sri Lanka",
    featured: false,
  },
  {
    slug: "lotus",
    src: "/images/travel/lotus.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Petals of Serenity",
    location: "Colombo, Sri Lanka",
    featured: false,
  },
  {
    slug: "moon_stairs",
    src: "/images/travel/moon_stairs.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Stairway to the Heaven",
    location: "Hatton, Sri Lanka",
    featured: false,
  },
  {
    slug: "river_and_stones",
    src: "/images/travel/river_and_stones.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Flow of the Wild",
    location: "Hatton, Sri Lanka",
    featured: false,
  },
  {
    slug: "ruwanweliseya",
    src: "/images/travel/ruwanweliseya_1.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Ruwanweliseya Seya",
    location: "Anuradhapura, Sri Lanka",
    featured: false,
  },
  {
    slug: "sandahiruseya",
    src: "/images/travel/sandahiruseya.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Sandahiru Seya",
    location: "Anuradhapura, Sri Lanka",
    featured: false,
  },
  {
    slug: "belihuloya",
    src: "/images/travel/belihuloya.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Shaded Stream",
    location: "Belihuloya, Sri Lanka",
    featured: false,
  },
  {
    slug: "lakegala",
    src: "/images/travel/lakegala.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Highland Terraces",
    location: "Meemure, Sri Lanka",
    featured: false,
  },
  {
    slug: "painus_forest",
    src: "/images/travel/painus_forest.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Pine Grove Trail",
    location: "Kalupahana, Sri Lanka",
    featured: false,
  },
  {
    slug: "lotustower",
    src: "/images/travel/lotustower.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Sunset near lotus tower",
    location: "Colombo, Sri Lanka",
    featured: false,
  },
  {
    slug: "lake",
    src: "/images/travel/lake.jpg",
    width: 1600,
    height: 1067,
    category: "travel",
    title: "Colombo After Dark",
    location: "Beira Lake, Sri Lanka",
    featured: false,
  },
  {
    slug: "queens",
    src: "/images/travel/queens.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Historic Queen's Hotel",
    location: "Kandy, Sri Lanka",
    featured: false,
  },
  {
    slug: "lake_and_trees",
    src: "/images/travel/lake_and_trees.jpg",
    width: 1600,
    height: 2000,
    category: "travel",
    title: "Lakeside Tea Slopes",
    location: "Kande Ela Reservoir, Sri Lanka",
    featured: false,
  },
  //-----------------------Street--------------------------------

  {
    slug: "child_near_toy_stall",
    src: "/images/street/child_near_toy_stall.JPG",
    width: 1600,
    height: 1067,
    category: "street",
    title: "Spheres of Wonder",
    location: "Galle Face, Colombo",
    featured: false,
  },
  {
    slug: "kite_with_bubbles",
    src: "/images/street/kite_with_bubbles.jpg",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Paper Wings and Soap Bubbles",
    location: "Galle face, Colombo",
    camera: "iPhone 16 pro",
    lens: "600mm f/4",
    settings: "f/5.6 · 1/3200s · ISO 800",
    featured: false,
  },
  {
    slug: "toy_stall",
    src: "/images/street/toy_stall.JPG",
    width: 1600,
    height: 1067,
    category: "street",
    title: "Floating Above the Concrete: Iridescent Magic in the City",
    location: "Galle face, Colombo",
    featured: false,
  },
  {
    slug: "tower",
    src: "/images/street/tower.jpg",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Bridging the Sky",
    location: "Galle face, Colombo",
    featured: false,
  },
  {
    slug: "family",
    src: "/images/street/family.jpg",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Anchored by Love",
    location: "Galle face, Colombo",
    featured: false,
  },
  {
    slug: "small_stall",
    src: "/images/street/small_stall.jpg",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Midnight Bites",
    location: "Colombo, Sri Lanka",
    featured: true,
  },
  {
    slug: "street_drawing",
    src: "/images/street/street_drawing.jpg",
    width: 1600,
    height: 1067,
    category: "street",
    title: "Street Side Sketch",
    location: "Galle Face, Colombo",
    featured: false,
  },
  {
    slug: "playing_child",
    src: "/images/street/playing_child.JPG",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Pure Joy",
    location: "Galle Face, Colombo",
    featured: false,
  },
  {
    slug: "man_cart",
    src: "/images/street/man_cart.jpg",
    width: 1600,
    height: 1067,
    category: "street",
    title: "Night Beach Snacks",
    location: "Galle Face, Colombo",
    camera: "Sony A7 IV",
    lens: "90mm f/2.8 Macro",
    settings: "f/11 · 1/160s · ISO 640",
    featured: false,
  },
  {
    slug: "men_near_stall",
    src: "/images/street/men_near_stall.jpg",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Late Night Hangout",
    location: "Galle Face, Colombo",
    featured: false,
  },
  {
    slug: "building",
    src: "/images/street/building.JPG",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Monochrome Heights",
    location: "Galle Face, Colombo",
    featured: false,
  },
    {
    slug: "street_lamps",
    src: "/images/street/street_lamps.JPG",
    width: 1600,
    height: 2000,
    category: "street",
    title: "Guiding Light",
    location: "Galle Face, Colombo",
    featured: false,
  },

  //-----------------------Wildlife--------------------------------

  {
    slug: "white_bird",
    src: "/images/wildlife/white_bird.jpg",
    width: 1600,
    height: 2000,
    category: "wildlife",
    title: "Wading Egret",
    location: "Katharagama, Sri Lanka",
    featured: true,
  },

  {
    slug: "elephant",
    src: "/images/wildlife/elephant.JPG",
    width: 1600,
    height: 2000,
    category: "wildlife",
    title: "Gentle Giant",
    location: "Kaudulla, Sri Lanka",
    featured: true,
  },
  {
    slug: "crab",
    src: "/images/wildlife/crab.jpg",
    width: 1600,
    height: 2000,
    category: "wildlife",
    title: "Sand Crab",
    location: "Panadura, Sri Lanka",
    featured: false,
  },


  //-----------------------Macro--------------------------------

      {
    slug: "small_flower",
    src: "/images/macro/small_flower.JPG",
    width: 1600,
    height: 2000,
    category: "macro",
    title: "Pink Promises",
    location: "Colombo, Sri Lanka",
    featured: false,
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
