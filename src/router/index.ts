import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import GalleryView from "@/views/GalleryView.vue";
import WorkView from "@/views/WorkView.vue";
import ExhibitionView from "@/views/ExhibitionView.vue";

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
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
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
  // If we want to add an hash in the gallery to scroll to
  // scrollBehavior(to, _from, _savedPosition) {
  //   if (to.hash) {
  //     return new Promise((resolve, _reject) => {
  //       setTimeout(() => {
  //         resolve({ el: to.hash, behavior: "smooth" });
  //       }, 1000);
  //     });
  //   }
  // },
});

export default router;
