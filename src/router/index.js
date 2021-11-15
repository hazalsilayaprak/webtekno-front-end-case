import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home';
import Detail from '../components/pages/PostDetail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/haber',
    name: 'Haber',
    component: Home
  },
  {
    path: '/video',
    name: 'Video',
    component: Home
  },
  {
    path: '/oyun',
    name: 'Oyun',
    component: Home
  },
  {
    path: '/kripto-para',
    name: 'KriptoPara',
    component: Home
  },
  {
    path: '/gundem',
    name: 'Gundem',
    component: Home
  },
  {
    path: '/mobil',
    name: 'Mobil',
    component: Home
  },
  {
    path: '/detail',
    name: 'PostDetail',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
