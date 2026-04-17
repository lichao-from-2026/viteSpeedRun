import { defineConfig } from 'vitepress'

// VitePress 配置文件
// 参考文档：https://vitepress.dev/reference/site-config
// 根据 CONTEXT.md 中的学习路径自动配置导航和侧边栏

export default defineConfig({
  // 站点标题
  title: 'Vite 学习速通',
  // 站点描述
  description: '从零开始学习 Vite，从基础使用到插件开发再到原理解析',
  
  // 主题配置
  themeConfig: {
    // 导航栏 Logo
    logo: '/vite.svg',
    
    // 侧边栏菜单开关
    // 控制顶部导航栏的侧边栏切换按钮
    sidebarMenuLabel: '菜单',
    
    // 返回顶部按钮
    // 页面滚动时显示返回顶部按钮
    returnToTopLabel: '返回顶部',
    
    // 右侧导航栏（大纲）配置
    // 控制页面右侧显示的标题层级
    // 注意：VitePress 的 outline 会自动支持折叠，只要有多层级标题就会显示折叠箭头
    outline: {
      // 显示的标题层级：从 h2 到 h4
      // 可以设置为数字（最深层级）或数组 [min, max]
      // 例如：2 → 只显示 h2；[2, 3] → 显示 h2 和 h3；[2, 4] → 显示 h2、h3、h4
      level: [2, 4],
      
      // 大纲标题文字
      label: '页面导航',
      
      // 是否默认折叠（可选）
      // collapsed: false,
    },
    
    // 导航栏链接 - 根据学习路径配置
    nav: [
      { text: '入门篇', link: '/README' },
      { text: '实操篇', link: '/examples/1. 环境变量配置' },
      { text: '插件篇', link: '/plugins/' },
      { text: '原理篇', link: '/internals/' },
    ],
    
    // 侧边栏配置 - 根据文档目录结构配置
    sidebar: {
      // 入门篇侧边栏
      '/': [
        {
          text: '入门篇',
          // 默认展开状态
          collapsed: false,
          items: [
            { text: 'README', link: '/README' },
          ]
        },
      ],
      
      // 实操篇侧边栏
      '/examples/': [
        {
          text: '实操篇',
          // 默认展开状态
          collapsed: false,
          items: [
            { text: '1. 环境变量配置', link: '/examples/1. 环境变量配置' },
            { text: '2. 核心配置', link: '/examples/2. 核心配置' },
            { text: '3. 进阶配置', link: '/examples/3. 进阶配置' },
          ]
        },
      ],
      
      // 插件篇侧边栏
      '/plugins/': [
        {
          text: '插件篇',
          // 默认展开状态
          collapsed: false,
          items: [
            { text: '概述', link: '/plugins/' },
          ]
        },
      ],
      
      // 原理篇侧边栏
      '/internals/': [
        {
          text: '原理篇',
          // 默认展开状态
          collapsed: false,
          items: [
            { text: '概述', link: '/internals/' },
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
    
    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
  
  // Markdown 配置
  markdown: {
    // 代码高亮主题
    // 可选主题列表：
    // - 'material-theme-palenight' (当前，深色)
    // - 'material-theme-darker' (深色)
    // - 'material-theme-ocean' (深色)
    // - 'material-theme-lighter' (浅色)
    // - 'github-dark' (GitHub 深色)
    // - 'github-light' (GitHub 浅色)
    // - 'one-dark-pro' (One Dark Pro)
    // - 'dracula' (Dracula)
    // - 'nord' (Nord)
    // - 'min-dark' (Min 深色)
    // - 'min-light' (Min 浅色)
    theme: 'one-dark-pro',
    
    // 显示行号
    lineNumbers: true,
    
    // 代码块包装器
    // 可以自定义代码块的样式
    codeTransformers: [
      // 可以在这里添加自定义代码转换逻辑
    ],
  },
  
  // 部署基础路径（如果部署到子路径，需要修改）
  base: '/',
  
  // 输出目录
  outDir: '../.vitepress-dist',
  
  // 清除死链接
  ignoreDeadLinks: true,
})
