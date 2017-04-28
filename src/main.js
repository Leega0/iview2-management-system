// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios';
// 路由配置文件
import routeConfig from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import $ from 'jquery'
// sotre数据
import store from './store'

// 加载路由中间件
Vue.use(VueRouter)
Vue.use(iView)

// 定义路由
const router = new VueRouter({
  routes:routeConfig
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el:"#app",
  render: h => h(App)
})
