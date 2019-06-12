import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import App from '@/App'
// import List from '@/components/List'
import Home from '@/components/Home'
import Game from '@/components/Game'
// import GirlResume from '@/components/GirlResume'
// import BoyResume from '@/components/BoyResume'
import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: Home,
      component: Home,
      children: [
        // {
        //   path: 'Photos',
        //   component: Photos,
        // },
        // {
        //   path: 'List',
        //   component: List
        // },
        // {
        //   path: 'home',
        //   component: Home,
        // },
        //  {
        //   path: 'GirlResume',
        //   component: GirlResume
        // }, {
        //   path: 'BoyResume',
        //   component: BoyResume
        // },
        // {
        //   path: 'game',
        //   component: Game,
        // },
      ],
    },
    {
      path: '/photos',
      component: Photos,
    },
    {
      path: '/game',
      component: Game,
    },
  ],
})
