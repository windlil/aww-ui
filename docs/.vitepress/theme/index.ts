import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import AwwUI from '../../../packages/components/index'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(AwwUI)
    useComponents(app)
  }
}
