import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home";
import Transitions from "./pages/transactions";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/transactions",
    component: Transitions,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
