import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index'
import member from '@/views/member'
import mine from '@/views/mine'
import order from '@/views/order'

import login from '@/views/login'
import register from '@/views/register'

Vue.use(VueRouter)
const routes = [
  // tab_bar底部栏路由
  { path: '/', redirect: '/index' },
  { path: '/index', component: index },

  // 除index页外全部加上导航守卫!
  { path: '/member', component: member },
  { path: '/mine', component: mine },
  { path: '/order', component: order },

  // 登录 注册路由
  { path: '/login', component: login },
  { path: '/register', component: register }
]

const router = new VueRouter({
  routes
})

export default router
