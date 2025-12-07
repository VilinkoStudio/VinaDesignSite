import { defineConfig } from 'vitepress'
import ImageViewer from '@miletorix/vitepress-image-viewer'
import DemoEditor from 'vitepress-demo-editor'
import vitepressThemeDemoblock from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  plugins: [
    ImageViewer(),
    DemoEditor
  ],
  markdown: {
    config: (md) => {
      vitepressThemeDemoblock(md)
    }
  },
  title: "Vina Design",
  base: "/VinaDesignSite/",
  description: "Vina 设计规范",
  head: [
    ['link', { rel: 'icon', href: '/source/ph/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/source/ph/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '价值观', link: '/docs/design/values' },
      { text: '设计', link: '/docs/design/color' },
      { text: '实践', link: '/docs/practice/' },
      { text: '关于', link: '/docs/about/' },
    ],

    search: {
      provider: "local",
      options: {
        enablePhraseSearch: true,
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索"
          },
          modal: {
            noResultsText: "未找到结果",
            resetButtonTitle: "重置",
            footer: {
              selectLabel: "选择",
              navigateUpKey: "↑",
              navigateDownKey: "↓",
              closeKey: "Esc",
              submitKey: "Enter"
            },
          },
        },
      },
    },

    sidebar: [
      {
        text: 'Vina Design',
        items: [
          { text: '价值观', link: '/docs/design/values' }
        ]
      },
      {
        text: '设计',
        items: [
          { text: 'Color 色彩', link: '/docs/design/color' },
          { text: 'Controls 控件', link: '/docs/design/controls' },
          { text: 'Layout 布局', link: '/docs/design/layout' },
          { text: 'Motion 动效', link: '/docs/design/motion' },
          { text: 'Dark Mode 深色模式', link: '/docs/design/dark-mode' },
        ]
      },
      {
        text: '实践',
        items: [
        ]
      },
    ],

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    docFooter: { prev: '上一篇', next: '下一篇' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VilinkoStudio' }
    ],

    footer: {
      copyright: 'Copyright © 2019 - 2025 Vilinko Studio. All Rights Reserved.',
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">粤ICP备2025454076号</a>'
    },
  }
})
