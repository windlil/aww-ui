import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import '../../../packages/theme/src/index.scss'
import AwwUI from '../../../packages/components/index'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './global.css'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      const html = document.documentElement
      const toggle = () => {
        if (html.classList.contains('dark')) html.setAttribute('data-theme', 'dark')
        else html.setAttribute('data-theme', 'light')
      }
      toggle()
      const tpggleBtn = document.querySelector('.VPSwitchAppearance')
      tpggleBtn?.addEventListener('click', () => {
        toggle()
      })
    })
  },
  enhanceApp({ app }) {
    app.use(AwwUI)
    useComponents(app)
  }
}
