# Vite 基础操作 SKILL

> 用途：Vite 常用命令和基础操作指南

---

## 常用命令

### 开发服务器
```bash
# 启动开发服务器
npm run dev

# 可用的快捷键（在终端中）
# h - 显示帮助
# o - 打开浏览器
# c - 清除控制台
# q - 退出
```

### 构建命令
```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 代码检查
```bash
# 运行 ESLint
npm run lint
```

---

## Vite 配置快速参考

### 修改开发服务器端口
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: 3000,        // 修改端口
    open: true,         // 自动打开浏览器
    host: true          // 监听所有地址
  }
})
```

### 配置路径别名
```typescript
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### 配置构建选项
```typescript
export default defineConfig({
  build: {
    outDir: 'dist',     // 输出目录
    sourcemap: true,    // 生成 source map
    minify: 'terser'    // 压缩工具
  }
})
```

---

## 环境变量

### 创建环境变量文件
```bash
# .env                # 所有环境
# .env.local          # 所有环境（本地，git 忽略）
# .env.development    # 开发环境
# .env.production     # 生产环境
```

### 使用环境变量
```typescript
// 变量必须以 VITE_ 开头
console.log(import.meta.env.VITE_API_URL)
```

---

## 常见问题

### 端口被占用
Vite 会自动尝试下一个可用端口，或手动指定端口。

### 模块导入路径问题
使用路径别名配置简化导入路径。
