import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/reports', component: () => import('../pages/ReportsPage.vue') },
  { path: '/tasks', component: () => import('../pages/TasksPage.vue') },
  { path: '/users', component: () => import('../pages/UsersPage.vue') },
  { path: '/orders', component: () => import('../pages/OrdersPage.vue') },
  { path: '/news', component: () => import('../pages/NewsPage.vue') },
  { path: '/training', component: () => import('../pages/TrainingPage.vue') },
  { path: '/analytics', component: () => import('../pages/AnalyticsPage.vue') },
  { path: '/sku', component: () => import('../pages/SkuPage.vue') },
  { path: '/faq', component: () => import('../pages/FaqPage.vue') },
  { path: '/newsletter', component: () => import('../pages/NewsLetterPage.vue') },
  { path: '/feedback', component: () => import('../pages/FeedbackPage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
