import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import { defineConfig } from 'vitepress'
import { sidebars } from './configs/sidebars'
import { navs } from './configs/nav'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  },
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
