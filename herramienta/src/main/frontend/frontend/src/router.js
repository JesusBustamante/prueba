// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './views/mainScreen.vue'
import AdminView from './views/AdminView.vue'

const routes = [
  { path: '/', component: MainScreen },
  { path: '/admin', component: AdminView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router