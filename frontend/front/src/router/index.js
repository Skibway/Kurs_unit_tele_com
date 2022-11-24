import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/StartView.vue'
import Ringing from '../views/RingingView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/ringing',
    name: 'ringing',
    component: Ringing,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router