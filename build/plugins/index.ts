import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import unplugins from './unplugin'
export function setupVitePlugins(viteEnv?: ViteEnv, isBuild?: boolean): PluginOption[] {
  const plugins = [
    ...unplugins,
    vue(),
    unocss(),

  ]
  return plugins
}
