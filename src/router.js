/* global Vue */
import Router from 'vue-router'


Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'frame',
      component: () => import('@/pages/common/frame'),
    }
  ]
})
