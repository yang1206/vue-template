import type { Router } from 'vue-router'
import NProgress from 'nprogress'

export function createPageLoadingGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      NProgress.done()
    }, 200)
  })

  router.onError(() => {
    NProgress.done()
  })
}
