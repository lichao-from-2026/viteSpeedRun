import { defineConfig } from 'vitepress'

// VitePress 配置文件
// 参考文档：https://vitepress.dev/reference/site-config

export default defineConfig({
  // 站点标题
  title: 'Vite 学习速通',
  // 站点描述
  description: '从零开始学习 Vite，从基础使用到插件开发再到原理解析',
  
  // 主题配置
  themeConfig: {
    // 导航栏 Logo
    logo: '/vite.svg',
    
    // 导航栏链接
    nav: [
      { text: '入门篇', link: '/README' },
      { text: '实操篇', link: '/examples/1. 环境变量配置' },
    ],
    
    // 侧边栏配置
    sidebar: {
      // 入门篇侧边栏
      '/': [
        {
          text: '入门篇',
          items: [
            { text: 'README', link: '/README' },
          ]
        },
      ],
      
      // 实操篇侧边栏
      '/examples/': [
        {
          text: '实操篇',
          items: [
            { text: '1. 环境变量配置', link: '/examples/1. 环境变量配置' },
            { text: '2. 核心配置', link: '/examples/2. 核心配置' },
            { text: '3. 进阶配置', link: '/examples/3. 进阶配置' },
          ]
        },
      ],
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
    ],
    
    // 编辑链接（可选）
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026-present'
    },
  },
  
  // Markdown 配置
  markdown: {
    // 代码高亮主题
    theme: 'material-theme-palenight',
    // 显示行号
    lineNumbers: true,
  },
  
  // 部署基础路径（如果部署到子路径，需要修改）
  base: '/',
  
  // 输出目录
  outDir: '../.vitepress-dist',
})
