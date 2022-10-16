import { createRouter, createWebHistory } from 'vue-router'
import MapView from "@/views/MapView";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
