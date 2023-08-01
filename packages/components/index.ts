import type { App } from 'vue'
import * as components from './src'

export * from './src'

export default {
  install: (app: App) => {
    for (const i in components) app.use((components as any)[i])
  }
}
