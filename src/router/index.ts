import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupRouterGuard } from './guard'

const isHash = import.meta.env.VITE_USE_HASH === 'true'

export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes: setupLayouts(routes),
  scrollBehavior: () => ({ left: 0, top: 500 }),
})

export async function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}

export default router
