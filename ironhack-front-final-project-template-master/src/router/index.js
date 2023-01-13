import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
