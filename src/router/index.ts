import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import InspirationsView from '../views/InspirationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/inspirations',
      name: 'inspirations',
      component: InspirationsView
    }
  ]
})

export default router
