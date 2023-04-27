import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginVue from '@/views/login-register/login.vue'
import registerVue from '@/views/login-register/register.vue'
import newsInfoVue from '@/views/other-service/news-info.vue'
import newsVue from '@/views/other-service/news.vue'
import shopInfoVue from '@/views/other-service/shop-info.vue'
import shopVue from '@/views/other-service/shop.vue'
import badmintonPayVue from '@/views/stadium/badminton-pay.vue'
import badmintonVue from '@/views/stadium/badminton.vue'
import footballPayVue from '@/views/stadium/football-pay.vue'
import footballVue from '@/views/stadium/football.vue'
import ticketVue from '@/views/stadium/ticket.vue'
import myprofile from '@/views/userprofile/myprofile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    component: myprofile
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: ticketVue
  },
  {
    path: '/football',
    name: 'football',
    component: footballVue
  },
  {
    path: '/footballpay',
    name: 'footballpay',
    component: footballPayVue
  },
  {
    path: '/badminton',
    name: 'badminton',
    component: badmintonVue
  },
  {
    path: '/badmintonpay',
    name: 'badmintonpay',
    component: badmintonPayVue
  },
  {
    path: '/news',
    name: 'news',
    component: newsVue
  },
  {
    path: '/shop',
    name: 'shop',
    component: shopVue
  },
  {
    path: '/shopinfo',
    name: 'shopinfo',
    component: shopInfoVue
  },
  {
    path: '/newsinfo',
    name: 'newsinfo',
    component: newsInfoVue
  },
  {
    path: '/login',
    name: 'login',
    component: loginVue
  },
  {
    path: '/register',
    name: 'register',
    component: registerVue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
