import type { ConfigEnv } from 'vite'
import process from 'node:process'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import { setupVitePlugins } from './configs/plugins'
import { createViteProxy } from './configs/proxy'
import { convertEnv, getRootPath, getSrcPath } from './configs/utils'

export default defineConfig((configEnv: ConfigEnv): any => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()
  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))
  const { VITE_PORT, VITE_USE_PROXY, VITE_PROXY_TYPE } = viteEnv
  return {
    plugins: setupVitePlugins(),
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: createViteProxy(VITE_USE_PROXY, VITE_PROXY_TYPE!),
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
      commonjsOptions: {
        ignoreTryCatch: false,
      },

    },
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    test: {
      environment: 'jsdom',
    },
  }
})
