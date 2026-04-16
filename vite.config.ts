import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 项目基础路径，默认为 '/'
  // 用于部署到子路径时使用，例如：'/vite-app/'
  base: '/',

  // 开发服务器配置
  server: {
    // 开发服务器端口，默认为 5173
    port: 5174,
    
    // 启动时自动打开浏览器
    open: true
  },

  // 插件配置
  plugins: [react()],
})
