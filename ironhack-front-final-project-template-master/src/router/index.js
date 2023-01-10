import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue"

const routes = [
  { path: '/auth', component: Login },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
