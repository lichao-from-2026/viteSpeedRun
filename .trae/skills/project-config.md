# 项目配置 SKILL

> 用途：项目配置相关操作指南

---

## TypeScript 配置

### tsconfig.json 结构
项目使用 TypeScript 项目引用：
- `tsconfig.json` - 根配置文件
- `tsconfig.app.json` - 应用代码配置
- `tsconfig.node.json` - Node 环境配置（用于 Vite 配置）

### 常用 TypeScript 配置
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

---

## ESLint 配置

### 配置文件
`eslint.config.js` - ESLint 配置文件

### 运行 ESLint
```bash
npm run lint
```

---

## package.json 脚本

### 默认脚本
```json
{
  "dev": "vite",              // 启动开发服务器
  "build": "tsc -b && vite build", // 类型检查 + 构建
  "lint": "eslint .",          // 运行 ESLint
  "preview": "vite preview"    // 预览构建结果
}
```

### 添加自定义脚本
可以在 `scripts` 字段中添加自定义命令。

---

## 依赖管理

### 安装依赖
```bash
# 生产依赖
npm install <package-name>

# 开发依赖
npm install -D <package-name>
```

### 卸载依赖
```bash
npm uninstall <package-name>
```

### 更新依赖
```bash
npm update
```

---

## 静态资源处理

### public 目录
- 放在 `public/` 目录的资源不会被 Vite 处理
- 直接复制到输出目录根目录
- 使用绝对路径引用：`/favicon.svg`

### src/assets 目录
- 放在 `src/assets/` 的资源会被 Vite 处理
- 可以获得哈希文件名、优化等好处
- 使用导入方式引用：`import logo from './assets/logo.svg'`
