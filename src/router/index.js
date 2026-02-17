import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/api/authService'

const GreetingView = () => import('../views/GreetingView.vue')
const AuthView = () => import('../views/AuthView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegistrationView = () => import('../views/RegistrationView.vue')
const HomepageView = () => import('../views/HomepageView.vue')

const routes = [
  { path: '/', component: GreetingView, name: 'greeting' },
  {
    path: '/auth',
    component: AuthView,
    children: [
      { path: 'login', component: LoginView, name: 'login' },
      { path: 'registration', component: RegistrationView, name: 'registration' },
    ],
  },
  { path: '/map', component: HomepageView, name: 'homepage' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration']
  const { name } = to

  if (authService.isLoggedIn() && authRoutes.includes(name)) {
    next({ name: 'homepage' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})
