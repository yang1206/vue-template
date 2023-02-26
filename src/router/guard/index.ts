import type { Router } from 'vue-router'
import { createPageLoadingGuard } from './loading'
import { createPageTitleGuard } from './title'
export function setupRouterGuard(router: Router) {
  createPageLoadingGuard(router)
  createPageTitleGuard(router)
}
