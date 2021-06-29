/*
 * @Author: dafengxiang
 * @Date: 2021-03-26 08:43:38
 * @LastEditTime: 2021-03-26 11:02:48
 * @LastEditors: dafengxiang
 * @Description: 主页子路由
 */
export default [
  {
    path: '/rolemanagement',
    name: 'RoleManagement',
    component: () => import(/* webpackChunkName: "RoleManagement" */ '@/pages/RoleManagement/index.vue')
  },
  {
    path: '/usermanagement',
    name: 'UserManagement',
    component: () => import(/* webpackChunkName: "UserManagement" */ '@/pages/UserManagement/index.vue')
  },
  {
    path: '/channelmanagement',
    name: 'ChannelManagement',
    component: () => import(/* webpackChunkName: "ChannelManagement" */ '@/pages/ChannelManagement/index.vue')
  },
  {
    path: '/policymanagement',
    name: 'PolicyManagement',
    component: () => import(/* webpackChunkName: "PolicyManagement" */ '@/pages/PolicyManagement/index.vue')
  },
  {
    path: '/settlementmanagement',
    name: 'SettlementManagement',
    component: () => import(/* webpackChunkName: "SettlementManagement" */ '@/pages/SettlementManagement/index.vue')
  },
  {
    path: '/productmanagement',
    name: 'ProductManagement',
    component: () => import(/* webpackChunkName: "ProductManagement" */ '@/pages/ProductManagement/index.vue')
  },
]
