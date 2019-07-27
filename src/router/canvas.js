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
  {
    path: '/path-stroke-fill',
    name: 'path_stroke_fill',
    component: () => import('@/views/canvas/pathStrokeFill/index.vue'),
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import('@/views/canvas/clock/index.vue'),
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('@/views/canvas/line/index.vue'),
  },
]
export default routes
