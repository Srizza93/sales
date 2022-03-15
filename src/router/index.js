import { createWebHistory, createRouter } from "vue-router";

const routeOptions = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/products",
    name: "Products",
  },
  {
    path: "/categories",
    name: "Categories",
  },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${route.name}.vue`),
  };
});

const router = createRouter({
  history: createWebHistory("/sales/"),
  base: "/",
  routes,
});

export default router;
