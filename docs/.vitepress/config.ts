import { defineConfig } from 'vitepress'
import { sidebars } from './configs/sidebars'
import { navs } from './configs/nav'

export default defineConfig({
  title: 'AwwUI',
  description: 'Vue3 组件库',
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    },
    nav: navs,
    sidebar: sidebars,
  }
})
