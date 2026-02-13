import { createRouter, createWebHistory } from 'vue-router'

const GreetingView = () => import('../views/GreetingView.vue')
const AuthView = () => import('../views/AuthView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegistrationView = () => import('../views/RegistrationView.vue')
const HomepageView = () => import('../views/HomepageView.vue')

const routes = [
  { path: '/', component: GreetingView },
  {
    path: '/auth',
    component: AuthView,
    children: [
      { path: 'login', component: LoginView },
      { path: 'registration', component: RegistrationView },
    ],
  },
  { path: '/map', component: HomepageView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
