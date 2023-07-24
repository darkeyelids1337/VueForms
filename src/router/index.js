import { createRouter, createWebHistory } from "vue-router";
export default new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: require('@/views/LoginPage').default,
    },
    {
      path: "/no-login",
      component: require("../views/InputForm").default,
    },
    {
      path: "/info-table",
      component: require("@/views/InfoTable").default,
    },
    {
      path:'/login-info-table',
      component: require('@/views/LoginInfoTable').default
    },
    {
      path: "/404",

      component: require("@/views/ErrorPage").default,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});
