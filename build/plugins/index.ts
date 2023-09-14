import { resolve } from 'node:path'
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import unocss from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { getRootPath } from '../utils'
import unplugins from './unplugin'

export function setupVitePlugins(viteEnv?: ImportMetaEnv, isBuild?: boolean): PluginOption[] {
  const plugins = [
    ...unplugins,
    unocss(),
    VueDevTools(),
    VueMacros({
      plugins: {
        vue: vue({
          script: {
            defineModel: true,
          },
        }),
      },
    }),
    Layouts({
      defaultLayout: 'default',
    }),
    VueRouter({
      dataFetching: true,
      extensions: ['.page.vue', '.vue'],
      dts: resolve(getRootPath(), 'typings/typed-router.d.ts'),
    }),

  ]
  return plugins
}
