// 应用入口文件
// 负责渲染 React 应用到 DOM 中

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { testFunction } from './test-copyright-plugin.ts'

// 测试版权插件功能
console.log(testFunction())

// 获取根 DOM 元素并渲染 React 应用
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
