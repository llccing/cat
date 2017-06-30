// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Photos from '@/components/Photos'
import Main from '@/components/Main'
// import Router from './router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Main,
  children: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/Photos',
      name: 'Photos',
      component: Photos
    }, {
      path: '/List',
      name: 'List',
      component: List
    }
  ]
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
