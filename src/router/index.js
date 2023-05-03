import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Galeria from "../views/Galeria.vue";
import NotFound from  "../views/NotFound.vue";
import Debord from "../views/Debord.vue";

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
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "auto",
    };
  },
});

export default router;
