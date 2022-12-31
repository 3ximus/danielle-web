import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/views/GalleryView.vue"),
    },
    {
      path: "/gallery/:slug",
      name: "work",
      components: {
        default: () => import("@/views/GalleryView.vue"),
        secondaryView: () => import("@/views/WorkView.vue"),
      },
    },
    {
      path: "/work/:slug",
      name: "work-home",
      components: {
        default: () => import("@/views/HomeView.vue"),
        secondaryView: () => import("@/views/WorkView.vue"),
      },
    },
    {
      path: "/exhibition/:slug",
      name: "exhibition",
      components: {
        default: () => import("@/views/AboutView.vue"),
        secondaryView: () => import("@/views/ExhibitionView.vue"),
      },
    },
  ],
});

export default router;
