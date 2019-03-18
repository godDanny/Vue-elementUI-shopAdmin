import Vue from 'vue';
import App from './App.vue';

// 第一步：引入element-ui
import iview from 'iview';

import axios from 'axios';
//第二步：引入elemet-ui样式
import 'iview/dist/styles/iview.css';

//引入vue-router
import VueRouter from 'vue-router';

import Login from "./pages/Login.vue";
import Admin from "./pages/Admin.vue";



// 第三步：全局注册组件
Vue.use(iview);
Vue.use(VueRouter);

// 给每次axios 请求自动添加一个域名
axios.defaults.baseURL = 'https://localhost:8899';
// 把 axios 绑定到vue实例的属性$axios
Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

// 配置路由
const routes = [{
  path: "/",
  redirect: '/admin'
},
 {
  path: "/login",
  component: Login,
  meta: '登录页'
}, 
{
  path: "/admin",
  component: Admin,
  meta: '首页'
}]

// 创建路由对象
const router = new VueRouter({
  routes
});

new Vue({
  //挂载路由
  router,
  render: h => h(App),
}).$mount('#app')

// 写法二
// new Vue({
//   el:"#app"
//   render: h => h(App),
// })