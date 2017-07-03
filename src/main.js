// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Home from '@/components/Home'
import Game from '@/components/Game'
import GirlResume from '@/components/GirlResume'
import BoyResume from '@/components/BoyResume'
import Photos from '@/components/Photos'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(Vuex)

// store 要注册到Vue实例中！
let store = new Vuex.Store({
  count: 0
})

store.registerModule('vux', {
  vux: {
    state: {
      isLoading: false
    },
    mutations: {
      updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
      }
    }
  }
})

const routes = [{
  path: '/',
  component: App,
  children: [
    {
      path: 'Hello',
      component: Hello
    }, {
      path: 'Photos',
      component: Photos
    }, {
      path: 'List',
      component: List
    }, {
      path: 'Home',
      component: Home
    }, {
      path: 'GirlResume',
      component: GirlResume
    }, {
      path: 'BoyResume',
      component: BoyResume
    }, {
      path: 'Game',
      component: Game
    }
  ]
}]

const router = new VueRouter({
  routes
})

sync(store, router)

FastClick.attach(document.body)

Vue.config.productionTip = false

const history = window.sessionStorage
history.clear()
// let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
  // store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  // const fromIndex = history.getItem(from.path)

  if (toIndex) {

  } else {

  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(to => {
  // store.commit('updateLoadingStatus', {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.push('Home')
