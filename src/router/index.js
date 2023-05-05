import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Galeria from "../views/Galeria.vue";
import NotFound from  "../views/NotFound.vue";
import Debord from "../views/Debord.vue";
import Tours from "../views/Tours.vue";
import EzPays from "../views/EzPays.vue";
import Trazos from "../views/Trazos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/galeria",
      name: "galeria",
      component: Galeria,
    },
    {
      path: "/:pathMatch(.*)",
      name: "notFound",
      component: NotFound,
    },
    {
      path: "/debord",
      name: "debord",
      component: Debord,
    },
    {
      path: "/tours",
      name: "tours",
      component: Tours,
    },
    {
      path: "/ezpays",
      name: "ezpays",
      component: EzPays,
    },
    {
      path: "/trazos",
      name: "trazos",
      component: Trazos,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "auto",
    };
  },
});

export default router;
