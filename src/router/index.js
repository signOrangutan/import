import Vue from 'vue'
import VueRouter from 'vue-router'

import { Web } from './web'
import { Wap } from './wap'

import { _isMobile } from '@/assets/js/utils'

Vue.use(VueRouter)

const redirtectPath = _isMobile() ? 'wap' : 'web'

const routes = [
  {
    path: '/web',
    component: () => import('@/views/web/'),
    meta: { type: 'web' },
    children: Web
  },
  {
    path: '/wap',
    component: () => import('@/views/wap/'),
    meta: { type: 'wap' },
    children: Wap
  },
  {
    path: '/',
    redirect: redirtectPath
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 重复路由 异常捕获
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


/**
 * 路由守卫-请求前拦截
 */
router.beforeEach((to, from, next) => {
  if (_isMobile() && to.meta.type !== 'wap') {
    next('/wap')
  }

  if (!_isMobile() && to.meta.type !== 'web') {
    next('/web')
  }

  next()
})

export default router
