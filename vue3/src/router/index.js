import { createRouter, createWebHistory } from "vue-router";
import Count from "../views/Count.vue";
import Index from "../views/Index.vue";

let routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/count",
    name: "count",
    component: Count,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
export const nav_links = routes.map(({ path, name }) => ({ path, name }));