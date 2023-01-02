export interface Exhibition {
  name: string;
  slug: string;
  url?: string;
  description: string;
  images: string[];
}

export const exhibitions: Exhibition[] = [
  {
    name: "Cafe Faro (October 2022-)",
    slug: "cafe-faro",
    url: "",
    description: "My exhibition",
    images: [],
  },
  {
    name: "Milk Moon (May 2022)",
    slug: "milk-moon",
    url: "",
    description: "My other exhibition",
    images: [],
  },
  {
    name: "Queer Love (February 2022)",
    slug: "queer-love",
    url: "",
    description: "My other exhibition",
    images: [],
  },
];
