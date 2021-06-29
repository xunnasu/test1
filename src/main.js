/*
 * @Author: dafengxiang
 * @Date: 2021-03-25 16:35:45
 * @LastEditTime: 2021-03-26 08:33:20
 * @LastEditors: dafengxiang
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/reset.less'


//初始化样式
import 'normalize.css'

//引入element组件库
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

//引入路由文件
import router from "./router";
// import vuex from "./vuex";

const appObj = createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')

export default appObj