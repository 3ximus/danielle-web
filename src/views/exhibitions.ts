export interface Exhibition {
  name: string;
  slug: string;
  url?: string;
  description: string;
  images: string[];
}

export const exhibitions: Exhibition[] = [
  {
    name: "Milk Moon",
    slug: "milk-moon",
    url: "https://milk-moon.web.app/",
    description: "My exhibition",
    images: [],
  },
  {
    name: "Other",
    slug: "other",
    url: "https://milk-moon.web.app/",
    description: "My other exhibition",
    images: [],
  },
];
