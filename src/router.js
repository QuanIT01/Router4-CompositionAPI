import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transitions from "./pages/transactions.vue";
import TransactionDetails from "./pages/transaction-details.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
