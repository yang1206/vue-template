import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { getRootPath, getSrcPath } from '../utils'
export default [
  AutoImport({
    imports: ['vue', 'vue-router', '@vueuse/core'],
    dirs: [resolve(getSrcPath(), 'composables')],
    vueTemplate: true,
    dts: resolve(getRootPath(), 'typings/auto-import.d.ts'),
  }),
  Components({
    dts: resolve(getRootPath(), 'typings/components.d.ts'),
  }),
]
