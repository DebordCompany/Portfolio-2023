import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Galeria from'../views/Galeria.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: Galeria
    },
    
  ]
})

export default router
