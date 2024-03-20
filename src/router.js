import { createRouter, createWebHistory } from "vue-router";
import home from "/src/view/home.vue";
import everest from "/src/view/everest.vue";
import k2 from "/src/view/k2.vue";
import kangchenjunga from "/src/view/kangchenjunga.vue";
import lhotse from "/src/view/lhotse.vue";
import makalu from "/src/view/makalu.vue";
import search from "/src/view/search.vue";
import zone from "/src/view/zone.vue";
import save from "/src/view/save.vue";
import top from "/src/view/top.vue";
import start from "/src/view/start.vue";
import stuff from "/src/view/stuff.vue";
import galerie from "/src/view/galerie.vue";

const routes = [
  { path: "/", redirect: "/home" },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
