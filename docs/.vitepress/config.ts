import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import { defineConfig } from 'vitepress'
import { zhNav, enNav } from './configs/navs'
import { enSidebar, zhSidebar } from './configs/sidebars'
import { setRewrites } from './utils/setRewrites'

export default defineConfig({
  rewrites: setRewrites(),
  title: 'AwwUI',
  lang: 'en-US',
  base: '/aww-ui/',
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
      link: '/doc/en-US/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      link: '/doc/zh-CN/',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar
      }
    }
  },
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
  description: 'Vue3 组件库',
})
