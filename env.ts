import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'VITE',
  server: {
  },
  client: {
    VITE_APP_TITLE: z.string(),
    VITE_APP_GLOB_BASE_API: z.string(),
    VITE_USE_HASH: z.boolean(),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: import.meta.env,
})
