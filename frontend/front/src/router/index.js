import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/StartView.vue'
const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router