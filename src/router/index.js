import Vue from 'vue'
import VueRouter from 'vue-router'

import { _isMobile } from '@/assets/js/utils'


Vue.use(VueRouter)

const redirtectPath = _isMobile() ? 'wap' : 'web'

const routes = [
  {
    path: '/web',
    name: 'web',
    component: ()=>import('@/views/web'),
    meta:{type: 'web'}
  },
  {
    path: '/wap',
    name: 'wap',
    component: ()=>import('@/views/wap/'),
    meta:{type: 'wap'}
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

/**
 * 路由守卫-请求前拦截
 */
router.beforeEach((to, from, next)=>{
  console.log('to', to)
  if(_isMobile() && to.meta.type !== 'wap'){
    next('/wap')
  }

  if(!_isMobile() && to.meta.type !== 'web'){
    next('/web')
  }

  next();
})


export default router
