import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store'
// import '@unocss/reset/tailwind.css'
import 'uno.css'
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
