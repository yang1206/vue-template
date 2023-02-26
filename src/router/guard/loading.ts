import type { Router } from 'vue-router'
import NProgress from 'nprogress'
export function createPageLoadingGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()
  })

  router.afterEach(() => {
    NProgress.start()
  })

  router.onError(() => {
    NProgress.done()
  })
}
