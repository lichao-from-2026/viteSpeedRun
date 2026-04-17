import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite 配置文件
// 参考文档：https://vite.dev/config/
export default defineConfig({
  // 项目基础路径，默认为 '/'
  // 用于部署到子路径时使用，例如：'/vite-app/'
  base: '/',

  // 插件配置
  // 使用 React 插件，提供 React 热更新等功能
  plugins: [react()],

  // 模块解析配置
  resolve: {
    // 路径别名配置
    // 简化导入路径，避免使用相对路径
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets')
    },
    // 可以省略的文件扩展名
    // 导入这些类型的文件时可以省略扩展名
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },

  // 开发服务器配置
  server: {
    // 开发服务器端口，默认为 5173
    port: 5174,
    // 指定服务器主机地址
    // 设置为 '0.0.0.0' 可以从外部访问
    host: '0.0.0.0',
    // 启动时自动打开浏览器
    open: true,
    // 端口被占用时是否直接退出
    // 设置为 false 时，会尝试下一个可用端口
    strictPort: false,
    // 配置 CORS（跨域资源共享）
    cors: true,
    // 代理配置
    // 开发环境中代理 API 请求，解决跨域问题
    proxy: {
      // 将 /api 开头的请求代理到后端服务器
      '/api': {
        // 目标服务器地址
        target: 'http://localhost:3000',
        // 修改请求头中的 origin 为目标地址
        changeOrigin: true,
        // 路径重写
        // 将 /api 前缀替换为空字符串
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  // 构建配置
  build: {
    // 输出目录，默认为 'dist'
    outDir: 'dist',
    // 静态资源目录，默认为 'assets'
    assetsDir: 'assets',
    // 是否生成 sourcemap
    // 用于调试生产环境代码
    sourcemap: true,
    // 代码压缩工具
    // 可选值：'esbuild' | 'terser' | false
    minify: 'esbuild',
    // 目标浏览器兼容性
    target: ['es2020', 'chrome87', 'firefox78', 'safari14'],
    // 资源内联限制（字节）
    // 小于此大小的资源会被内联为 base64
    assetsInlineLimit: 4096
  },

  // CSS 配置
  css: {
    // CSS Modules 配置
    modules: {
      // CSS 类名转换方式
      // 'camelCase' 表示将 kebab-case 转换为 camelCase
      localsConvention: 'camelCase',
      // 作用域行为
      // 'local' 表示默认启用 CSS Modules
      scopeBehaviour: 'local'
    }
  },

  // 公共资源目录
  // 该目录下的文件会被原样复制到输出目录根路径
  publicDir: 'public'
})
