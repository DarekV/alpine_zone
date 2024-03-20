import { createRouter, createWebHistory } from "vue-router";
import home from "./view/home.vue";
import everest from "./view/everest.vue";
import k2 from "./view/k2.vue";
import kangchenjunga from "./view/kangchenjunga.vue";
import lhotse from "./view/lhotse.vue";
import makalu from "./view/makalu.vue";
import search from "./view/search.vue";
import zone from "./view/zone.vue";
import save from "./view/save.vue";
import top from "./view/top.vue";
import start from "./view/start.vue";
import stuff from "./view/stuff.vue";
import galerie from "./view/galerie.vue";

const routes = [
  { path: "/home", component: home, name: "home" },
  { path: "/everest", component: everest, name: "everest" },
  { path: "/k2", component: k2, name: "k2" },
  { path: "/kangchenjunga", component: kangchenjunga, name: "kangchenjunga" },
  { path: "/lhotse", component: lhotse, name: "lhotse" },
  { path: "/makalu", component: makalu, name: "makalu" },
  { path: "/search", component: search, name: "search" },
  { path: "/zone", component: zone, name: "zone" },
  { path: "/save", component: save, name: "save" },
  { path: "/top", component: top, name: "top" },
  { path: "/start", component: start, name: "start" },
  { path: "/stuff", component: stuff, name: "stuff" },
  { path: "/galerie", component: galerie, name: "galerie" },
  { path: "/", redirect: "/home" },
  { path: "/:pathMatch(.*)*", redirect: "/home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
