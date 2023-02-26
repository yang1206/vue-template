import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'

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

export const router = createRouter({
  history: import.meta.env.VITE_USE_HASH ? createWebHashHistory('/') : createWebHashHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 500 }),
})

export async function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}

export default router
