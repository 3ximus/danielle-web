export interface Exhibition {
  name: string;
  slug: string;
  description: string;
  images: string[];
}

export const exhibitions: Exhibition[] = [
  {
    name: "Cafe Faro (October 2022-)",
    slug: "cafe-faro",
    description: "My exhibition",
    images: [
      "/cafe_faro/IMG_5981.webp",
      "/cafe_faro/IMG_5983.webp",
      "/cafe_faro/IMG_5984.webp",
      "/cafe_faro/IMG_5986.webp",
    ],
  },
  {
    name: "Milk Moon (May 2022)",
    slug: "milk-moon",
    description: "My other exhibition",
    images: [
      "milk_moon/1.webp",
      "milk_moon/2.webp",
      "milk_moon/3.webp",
      "milk_moon/4.webp",
      "milk_moon/5.webp",
      "milk_moon/6.webp",
      "milk_moon/7.webp",
      "milk_moon/8.webp",
      "milk_moon/9.webp",
      "milk_moon/10.webp",
      "milk_moon/11.webp",
    ],
  },
  {
    name: "Queer Love (February 2022)",
    slug: "queer-love",
    description: "My other exhibition",
    images: ["1.webp"],
  },
];
