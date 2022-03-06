import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Products = () => import("../pages/Products.vue");
const Categories = () => import("../pages/Categories.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
