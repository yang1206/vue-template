import type { PluginOption } from 'vite'
import unocss from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

import Layouts from 'vite-plugin-vue-layouts'
import unplugins from './unplugin'

export function setupVitePlugins(viteEnv?: ImportMetaEnv, isBuild?: boolean): PluginOption[] {
  const plugins = [
    ...unplugins,
    unocss(),
    VueDevTools(),

    Layouts({
      defaultLayout: 'default',
    }),
  ]
  return plugins
}
