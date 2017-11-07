// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import Tab from './components/testTab'
import Car from './components/buyCar'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import index from './pages/index'

Vue.use(VueRouter);
Vue.use(VueResource);
const router =new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:index
    },
    {
      path:'/tab',
      component:Tab
    },
    {
      path:'/car',
      component:Car
    },
    
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
