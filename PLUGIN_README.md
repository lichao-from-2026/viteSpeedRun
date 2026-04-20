# Vite 版权插件使用说明

## 插件简介

这是一个简单的 Vite 插件，用于自动为项目中的 JavaScript/TypeScript 文件添加版权注释。

## 插件特性

- 🚀 自动为 JS/TS/JSX/TSX 文件添加版权注释
- 🎯 跳过 node_modules 文件
- 🛡️ 检测已有的版权注释，避免重复添加
- ⚙️ 可配置的版权信息
- 📝 TypeScript 支持

## 安装

插件位于 `plugins/vite-plugin-copyright.ts`，无需额外安装。

## 使用方法

1. 在 `vite.config.ts` 中导入并配置插件：

```typescript
import { defineConfig } from 'vite'
import copyrightPlugin from './plugins/vite-plugin-copyright'

export default defineConfig({
  plugins: [
    copyrightPlugin({
      author: 'Your Name',          // 作者名称
      year: '2024',                 // 年份
      company: 'Your Company',      // 公司名称
      license: 'MIT'                // 许可证类型
    })
  ]
})
```

2. 运行开发或构建命令：

```bash
npm run dev    # 开发模式
npm run build  # 生产构建
```

## 版权注释格式

插件会自动在文件顶部添加如下格式的版权注释：

```javascript
/**
 * Copyright © 2024 Your Company
 * @author Your Name
 * @license MIT
 */

[原文件内容]
```

## 工作原理

插件使用 Vite 的 `transform` 钩子：

1. 检测文件类型（JS/TS/JSX/TSX）
2. 跳过 node_modules 文件
3. 检查是否已有版权注释
4. 如无版权注释，则添加到文件顶部
5. 返回转换后的代码

## 配置选项

| 选项 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `author` | string | ❌ | 'Your Name' | 作者名称 |
| `year` | string | ❌ | 当前年份 | 版权年份 |
| `company` | string | ❌ | 'Your Company' | 公司名称 |
| `license` | string | ❌ | 'MIT' | 许可证类型 |

## 项目中的配置

当前项目中插件已配置在 `vite.config.ts` 中：

```typescript
plugins: [
  react(),
  copyrightPlugin({
    author: 'Your Name',
    year: new Date().getFullYear().toString(),
    company: 'Your Company',
    license: 'MIT'
  })
]
```

## 验证效果

1. 运行 `npm run dev` 或 `npm run build`
2. 查看终端输出，会有插件处理文件的日志：

```
[vite-plugin-copyright] 处理文件: /path/to/file.ts
[vite-plugin-copyright] 添加版权注释: /path/to/file.ts
```

3. 构建产物中的文件会自动包含版权注释

## 示例

处理前的文件：

```javascript
export function hello() {
  return 'Hello World';
}
```

处理后的文件：

```javascript
/**
 * Copyright © 2024 Your Company
 * @author Your Name
 * @license MIT
 */

export function hello() {
  return 'Hello World';
}
```

## 注意事项

- 插件只在转换阶段添加版权注释
- 不会修改源文件，只修改构建/开发环境的转换结果
- 已有版权注释的文件会被跳过
