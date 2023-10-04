import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import { getRootPath, getSrcPath } from '../utils'

export default [
  AutoImport({
    imports: ['vue', 'pinia', '@vueuse/core', VueRouterAutoImports],
    dirs: [resolve(getSrcPath(), 'composables')],
    vueTemplate: true,
    dts: resolve(getRootPath(), 'typings/auto-import.d.ts'),
  }),
  Components({
    dts: resolve(getRootPath(), 'typings/components.d.ts'),
  }),
  VueMacros({
    plugins: {
      vue: vue({
        script: {
          defineModel: true,
        },
      }),
    },
  }),
  VueRouter({
    dataFetching: true,
    extensions: ['.page.vue', '.vue'],
    dts: resolve(getRootPath(), 'typings/typed-router.d.ts'),
  }),
]
