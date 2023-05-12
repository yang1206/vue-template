import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import unplugins from './unplugin'

export function setupVitePlugins(viteEnv?: ViteEnv, isBuild?: boolean): PluginOption[] {
  const plugins = [
    ...unplugins,
    VueDevTools(),
    vue(),
    unocss(),

  ]
  return plugins
}
