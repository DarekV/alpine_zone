import { createRouter, createWebHistory } from "vue-router";
import home from "./view/home.vue";
import everest from "./view/everest.vue";
import k2 from "./view/k2.vue";
import kangchenjunga from "./view/kangchenjunga.vue";
import lhotse from "./view/lhotse.vue";
import makalu from "./view/makalu.vue";

const routes = [
  { path: "/home", component: home, name: "home" },
  { path: "/everest", component: everest, name: "everest" },
  { path: "/k2", component: k2, name: "k2" },
  { path: "/kangchenjunga", component: kangchenjunga, name: "kangchenjunga" },
  { path: "/lhotse", component: lhotse, name: "lhotse" },
  { path: "/makalu", component: makalu, name: "makalu" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
