export interface Exhibition {
  name: string;
  slug: string;
  description: string;
  images: string[];
}

export const exhibitions: Exhibition[] = [
  {
    name: "Billboard Art Project, Lisbon, PT (November 2023-December 2023)",
    slug: "billboard_arts",
    description: "My exhibition",
    images: [
     ,
    ],
  },{
    name: "Cafe Orr, Montreal, CA (September 2023-October 2023)",
    slug: "cafe-orr",
    description: "My exhibition",
    images: [
      "/cafe_orr/poster.webp",
      "/cafe_orr/IMG-9882.jpg",
      "/cafe_orr/IMG-9883.jpg",
      "/cafe_orr/IMG-9884.jpg",
      "/cafe_orr/IMG-9888.jpg",
      "/cafe_orr/IMG-9889.jpg",
      "/cafe_orr/IMG-9891.jpg",
      "/cafe_orr/IMG-9893.jpg",
      "/cafe_orr/IMG-9895.jpg",
    ],
  },
  {
    name: "Cafe Faro (October 2022-February 2023)",
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
    name: "Milk Moon, Montreal, CA (May 2022)",
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
    name: "Queer Love, Montreal, CA (February 2022)",
    slug: "queer-love",
    description: "My other exhibition",
    images: ["queer_love/1.webp"],
  },
];
