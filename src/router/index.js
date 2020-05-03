import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/portfolio/legoar',
    name: 'LEGOAR',
    component: () => import('../views/projects/LEGOAR.vue')
  },
  {
    path: '/portfolio/mobilestudy',
    name: 'MobileStudy',
    component: () => import('../views/projects/MobileStudy.vue')
  },
  {
    path: '/portfolio/psulink',
    name: 'PSULink',
    component: () => import('../views/projects/PSULink.vue')
  },
  {
    path: '/portfolio/resthub',
    name: 'RestHUB',
    component: () => import('../views/projects/RestHUB.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
