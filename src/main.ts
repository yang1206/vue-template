import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import 'nprogress/nprogress.css'
import '@/styles/reset.css'
import '@/styles/index.css'

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
}
async function setupApp() {
  const app = createApp(App)
  await setupStore(app)
  await setupRouter(app)
  app.use(VueQueryPlugin, vueQueryPluginOptions).mount('#app')
}
setupApp()
