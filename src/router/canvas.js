const routes = [
  {
    path: '/canvas-01',
    name: 'canvas01',
    component: () => import('@/views/canvas'),
  },
  {
    path: '/canvas-02',
    name: 'canvas02',
    component: () => import('@/views/canvas/drawRect/index.vue'),
  },
]
export default routes
