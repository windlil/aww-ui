import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(elementPlus)
    useComponents(app)
  }
}
