import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transitions from "./pages/transactions.vue";
import TransactionDetails from "./pages/transaction-details.vue";
import NotFound from "./pages/404.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/transactions",
    component: Transitions,
  },
  {
    path: "/transactions/:id",
    component: TransactionDetails,
  },
  {
    path: "/ts",
    redirect: Transitions,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
