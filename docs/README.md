# Vite 学习实验项目

这是一个学习 Vite 从基础使用到插件开发再到原理解析的实验项目。

---

## 一、基础认知

### 1.1 Vite 介绍

Vite（法语意为 "快"，发音 /vit/）是一个新一代前端构建工具，由 Vue.js 作者尤雨溪开发。它利用浏览器原生 ES 模块支持，提供了极快的冷启动和热更新速度。

### 1.2 Vite 的主要优点

- **极速的冷启动** - 无需打包，直接通过浏览器原生 ES 模块加载
- **即时的热模块替换 (HMR)** - 无论应用大小，HMR 始终保持快速
- **丰富的功能** - 开箱即用支持 TypeScript、JSX、CSS 预处理器等
- **优化的构建** - 使用 Rollup 进行预配置的生产构建
- **通用的插件接口** - 与 Rollup 插件兼容的插件系统
- **完善的类型支持** - 完整的 TypeScript 类型定义

### 1.3 Vite 与 Webpack 的差异

| 特性 | Vite | Webpack |
|------|------|---------|
| 开发模式 | 基于原生 ES Modules，无需打包 | 基于 Bundle，需要先打包 |
| 冷启动速度 | 极快（毫秒级） | 较慢（随着项目增大而变慢） |
| HMR 速度 | 与模块数量无关，始终快速 | 随着项目增大而变慢 |
| 构建工具 | 使用 Rollup | 内置构建系统 |
| 学习曲线 | 相对简单，配置简洁 | 较复杂，配置繁琐 |
| 生态系统 | 快速发展中 | 成熟完善 |

### 1.4 环境准备

#### Node.js 环境要求

Vite 8 需要 Node.js 版本 18+ 或 20+。

检查 Node.js 版本：

```bash
node -v
```

如果版本不满足要求，请访问 [Node.js 官网](https://nodejs.org/) 下载并安装最新的 LTS 版本。

#### 包管理器

本项目使用 npm 作为包管理器，你也可以选择使用 yarn 或 pnpm：

```bash
# npm（已随 Node.js 一起安装）
npm --version

# yarn（如需安装）
npm install -g yarn

# pnpm（如需安装）
npm install -g pnpm
```

---

## 二、项目初始化

### 2.1 项目创建过程

使用 Vite 官方脚手架创建项目的命令：

```bash
# 使用 npm create
npm create vite@latest . -- --template react-ts

# 或使用 pnpm create
pnpm create vite@latest . -- --template react-ts

# 或使用 yarn create
yarn create vite@latest . -- --template react-ts
```

参数说明：
- `.` - 在当前目录创建项目
- `--template react-ts` - 使用 React + TypeScript 模板

### 2.2 安装依赖

```bash
npm install
```

### 2.3 启动项目

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 运行 ESLint 检查
npm run lint
```

---

## 三、项目结构

```
viteSpeedRun/
├── docs/                    # 学习文档目录
│   ├── examples/            # Vite 基础使用示例
│   ├── plugins/             # Vite 插件开发
│   └── internals/           # Vite 原理解析
├── public/                  # 静态资源目录（不经 Vite 处理直接复制）
│   ├── favicon.svg          # 网站图标
│   └── icons.svg            # 图标资源
├── src/                     # 源代码目录
│   ├── assets/              # 资源文件（会被 Vite 处理）
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css              # App 组件样式
│   ├── App.tsx              # App 主组件
│   ├── index.css            # 全局样式
│   └── main.tsx             # 应用入口文件
├── .gitignore               # Git 忽略文件配置
├── index.html               # HTML 入口文件
├── package.json             # 项目依赖和脚本配置
├── package-lock.json        # npm 依赖锁文件
├── tsconfig.json            # TypeScript 配置（根配置）
├── tsconfig.app.json        # TypeScript 配置（应用代码）
├── tsconfig.node.json       # TypeScript 配置（Node.js 环境）
├── vite.config.ts           # Vite 配置文件
└── README.md                # 项目说明文档
```

### 3.1 关键文件说明

#### `index.html` - HTML 入口文件

Vite 将 `index.html` 视为源码和模块图的一部分。它解析 `<script type="module" src="...">`，这指向你的 JavaScript 源码。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vitespeedrun</title>
  </head>
  <body>
    <!-- React 应用挂载点 -->
    <div id="root"></div>
    <!-- 引入主入口文件 -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### `src/main.tsx` - 应用入口文件

React 应用的主入口文件，负责渲染根组件。

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 获取 DOM 节点并创建 React 根
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

#### `src/App.tsx` - 主组件

React 应用的根组件，包含了示例代码。

---

## 四、基本配置

### 4.1 vite.config.ts - Vite 配置文件

Vite 的配置文件，使用 TypeScript 编写，提供完整的类型支持。

```typescript
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

```

### 4.2 package.json - 项目依赖与脚本配置

```json
{
  "name": "vitespeedrun",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",              // 启动开发服务器
    "build": "tsc -b && vite build", // 类型检查 + 构建
    "lint": "eslint .",          // 运行 ESLint
    "preview": "vite preview"    // 预览构建结果
  },
  "dependencies": {
    "react": "^19.2.4",          // React 核心库
    "react-dom": "^19.2.4"       // React DOM 渲染器
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",  // React 类型定义
    "@types/react-dom": "^19.2.3", // React DOM 类型定义
    "@vitejs/plugin-react": "^6.0.1", // Vite React 插件
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "typescript": "~6.0.2",      // TypeScript 编译器
    "typescript-eslint": "^8.58.0",
    "vite": "^8.0.4"             // Vite 构建工具
  }
}
```

---

## 五、更多信息

- [Vite 官方文档](https://vite.dev/)
- [React 官方文档](https://react.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
