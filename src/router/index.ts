import type { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'
import { env } from '~/env'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/count',
    component: () => import('@/views/Count/index.vue'),
  },
]
const isHash = env.VITE_USE_HASH === 'true'

export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 500 }),
})

export async function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}

export default router
