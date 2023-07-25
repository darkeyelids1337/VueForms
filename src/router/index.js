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
      meta:{layout:'no-login'}
    },
    {
      path: "/info-table",
      component: require("@/views/InfoTable").default,
      meta:{layout:'no-login'}
    },
    {
      path:'/login-info-table',
      component: require('@/views/LoginInfoTable').default,
      meta:{layout:'user'},
    },
    {
      path:'/contacts',
      component: require('@/views/ContactPage').default,
      meta:{layout:'user'},
    },
    {
      path:'/news',
      component: require('@/views/NewsPage').default,
      meta:{layout:'user'},
    },
    {
      path:'/news/:id',
      component: require('@/components/CurrentNewsPage').default,
      meta:{layout:'user'},
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
