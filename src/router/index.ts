import { createRouter, createWebHistory } from "@ionic/vue-router";

import HomePage from "@/views/HomePage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import LoginPage from "@/views/LoginPage.vue";

import { isLoggedIn } from "@/state";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ],
});

router.beforeEach((to) => {
  if (isLoggedIn.value && to.name === "login") {
    return { name: "home" };
  }

  if (!isLoggedIn.value && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
