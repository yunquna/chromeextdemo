import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "数字叉车",
  description: "赋予仓储物流从业者自动化武器的 Chrome 插件打造指南",
  base: '/chromeextdemo/', // 为适配 GitHub Pages 子目录需与仓库名一致
  ignoreDeadLinks: true, // 忽略因为跨越 docs 目录指向上层源码目录带来的路由死链接检测报错
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '万能 Prompt 模板', link: '/tech_prompt' },
      { text: '实操全过程演示', link: '/operation-records/README' }
    ],

    sidebar: [
      {
        text: '第一步：理念与指引',
        items: [
          { text: 'AI 指令兵器库 (Tech Prompt)', link: '/tech_prompt' }
        ]
      },
      {
        text: '第二步：实地操作',
        items: [
          { text: '开发与应用实录 (1:1演示)', link: '/operation-records/README' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunquna/chromeextdemo' }
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    outlineTitle: '本页目录',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深浅模式切换'
  }
})
