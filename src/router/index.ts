import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import GalleryView from "@/views/GalleryView.vue";
import WorkView from "@/views/WorkView.vue";
import ExhibitionView from "@/views/ExhibitionView.vue";
import { gallery } from "@/config/gallery";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
        description:
          "Welcome to the portfolio of Danielle Romaine, a contemporary fine artist.",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About",
        description:
          "Learn more about Danielle Romaine, her background, and her artistic vision.",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact",
        description:
          "Get in touch with Danielle Romaine for inquiries, commissions, or collaborations.",
      },
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
      meta: {
        title: "Gallery",
        description:
          "Browse the full collection of Danielle Romaine's artwork, including paintings on road signs and canvas.",
      },
    },
    {
      path: "/gallery/:slug",
      name: "work",
      components: {
        default: GalleryView,
        secondaryView: WorkView,
      },
    },
    {
      path: "/work/:slug",
      name: "work-home",
      components: {
        default: HomeView,
        secondaryView: WorkView,
      },
    },
    {
      path: "/exhibition/:slug",
      name: "exhibition",
      components: {
        default: AboutView,
        secondaryView: ExhibitionView,
      },
    },
  ],
});

router.afterEach((to) => {
  let title = "Danielle Romaine";
  let description =
    "Portfolio of Danielle Romaine, a fine artist specializing in contemporary visual arts.";

  if (to.params.slug) {
    const slug = to.params.slug as string;
    const work = gallery.flatMap((c) => c.works).find((w) => w.slug === slug);
    if (work) {
      title = `${work.name} | Danielle Romaine`;
      if (work.statements && work.statements.length > 0) {
        description = work.statements[0].substring(0, 160);
      } else {
        description = `View ${work.name}, an artwork by Danielle Romaine created in ${work.year}. ${work.medium || ""}`;
      }
    }
  } else if (to.meta.title) {
    title = `${to.meta.title} | Danielle Romaine`;
    description = (to.meta.description as string) || description;
  }

  document.title = title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDescription = document.querySelector(
    'meta[property="og:description"]',
  );
  if (ogDescription) ogDescription.setAttribute("content", description);
});

export default router;
