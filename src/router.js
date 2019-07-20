import Vue from 'vue'
import Router from 'vue-router'

// import List from '@/components/List'
// import GirlResume from '@/components/GirlResume'
// import BoyResume from '@/components/BoyResume'
// import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index'),
    },
    {
      path: '/boy-resume',
      name: 'boyResume',
      component: () => import('@/views/home/BoyResume'),
    },
    {
      path: '/girl-resume',
      name: 'girlResume',
      component: () => import('@/views/home/GirlResume')
    },
    {
      path: '/our',
      name: 'our',
      component: () => import('@/views/home/our')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('@/views/life/index'),
    },
    {
      path: '/canvas-01',
      name: 'canvas01',
      component: ()=> import('@/views/canvas/index')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game/index'),
    },
  ]
})
