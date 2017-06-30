import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Home from '@/components/HelloFromVux'
import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Photos
  }, {
    path: '/Hello',
    name: 'Hello',
    component: Hello
  }, {
    path: '/list',
    name: 'list',
    component: List
  }]
})
