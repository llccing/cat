import Vue from 'vue'
import Router from 'vue-router'
import canvasRoute from './canvas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),
    },
    {
      path: '/boy-resume',
      name: 'boyResume',
      component: () => import('@/views/home/BoyResume'),
    },
    {
      path: '/girl-resume',
      name: 'girlResume',
      component: () => import('@/views/home/GirlResume'),
    },
    {
      path: '/our',
      name: 'our',
      component: () => import('@/views/home/our'),
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('@/views/life'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game'),
    },
    ...canvasRoute,
  ],
})
