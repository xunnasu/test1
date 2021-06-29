/*
 * @Author: dafengxiang
 * @Date: 2021-03-25 18:37:26
 * @LastEditTime: 2021-03-26 11:03:38
 * @LastEditors: dafengxiang
 * @Description: 路由配置文件
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import ChildrenRoutes from "./routes";

const router = createRouter({
  history: createWebHashHistory(), // 路由的history模式
  routes: [   // 导入路由的配置， 和vue2里面的路由一样
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
      children: [
        ...ChildrenRoutes
      ]
    },
    {
      path: '/login',
      name:'LoginPage',
      component: () => import(/* webpackChunkName: "LoginPage" */ '@/pages/LoginPage.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFoundPage',
      component: () => import(/* webpackChunkName: "notFoundPage" */ '@/pages/NotFoundPage.vue')
    }
  ],
})
export default router;