import { createRouter, createWebHistory } from "vue-router";
import home from "./view/home.vue";
import everest from "./view/everest.vue";

const routes = [
  { path: "/home", component: home, name: "home" },
  { path: "/everest", component: everest, name: "everest" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
