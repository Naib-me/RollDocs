import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/RollDocs/',
  title: "Roll",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '加入QQ群', link: '/加入QQ群.md' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Hello world!', link: '/快速开始/Hello_world!.md' },
          { text: '变量', link: '/快速开始/变量.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Naib-me' }
    ]
  }
})
