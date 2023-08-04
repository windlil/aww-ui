import { enComponents, zhComponents } from './components'

export const enSidebar = {
  '/doc/en-US/guide': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Installation',
          link: '/doc/en-US/guide/installation'
        },
        {
          text: 'Quick Start',
          link: '/doc/en-US/guide/quickstart'
        }
      ]
    }
  ],
  '/doc/en-US/components': enComponents
}

export const zhSidebar = {
  '/doc/zh-CN/guide': [
    {
      text: '基础',
      items: [
        {
          text: '安装',
          link: '/doc/zh-CN/guide/installation'
        },
        {
          text: '快速开始',
          link: '/doc/zh-CN/guide/quickstart'
        },
      ]
    }
  ],
  '/doc/zh-CN/components': zhComponents
}
