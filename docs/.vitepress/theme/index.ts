import DefaultTheme from 'vitepress/theme'
import '../../../packages/theme/src/index.scss'
import AwwUI from '../../../packages/components/index'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  setup() {
    const switchBtn = document.querySelector('.VPSwitchAppearance')
    console.log(switchBtn)
  },
  enhanceApp({ app }) {
    app.use(AwwUI)
    useComponents(app)
  }
}
