# VitePress 文档站点设置指南

本项目已配置好 VitePress，用于在浏览器中美观地查看 Markdown 文档。

## 📦 安装步骤

### 1. 安装 VitePress 依赖

```bash
npm install -D vitepress
```

### 2. 在 package.json 中添加脚本（已预配置）

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 🚀 使用方法

### 开发模式（预览文档）

```bash
npm run docs:dev
```

这会启动一个本地开发服务器，通常在 `http://localhost:5173` 打开，你可以在浏览器中实时预览文档。

### 构建生产版本

```bash
npm run docs:build
```

这会将文档构建为静态 HTML 文件，输出到 `.vitepress-dist` 目录。

### 预览生产构建

```bash
npm run docs:preview
```

这会预览构建好的静态站点。

## 📁 目录结构

```
viteSpeedRun/
├── docs/
│   ├── .vitepress/
│   │   └── config.ts          # VitePress 配置文件
│   ├── index.md                # 文档首页
│   ├── README.md               # 入门篇（链接到根目录的 README）
│   ├── examples/               # 实操篇文档
│   │   ├── 1. 环境变量配置.md
│   │   ├── 2. 核心配置.md
│   │   └── 3. 进阶配置.md
│   ├── plugins/                # 插件篇文档（待创建）
│   └── internals/              # 原理篇文档（待创建）
├── README.md                   # 原始入门篇文档
└── package.json
```

## 🎨 自定义配置

### 修改站点配置

编辑 `docs/.vitepress/config.ts` 文件来自定义：
- 站点标题和描述
- 导航栏
- 侧边栏
- 主题颜色
- 更多配置请参考：https://vitepress.dev/reference/site-config

### 添加新文档

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.ts` 的 `sidebar` 配置中添加新文档的链接
3. 刷新浏览器即可看到新文档

## 💡 其他方案对比

### 方案二：vite-plugin-markdown-preview

如果你只需要简单的 Markdown 预览，可以使用这个轻量级插件：

```bash
npm install -D vite-plugin-markdown-preview
```

### 方案三：使用 VS Code 插件

- **Markdown Preview Enhanced** - 功能强大的 Markdown 预览插件
- **Markdown All in One** - Markdown 增强工具
- **Auto-Open Markdown Preview** - 自动打开 Markdown 预览

### 方案四：使用在线工具

- **GitHub** - 直接在 GitHub 上查看 Markdown
- **GitLab** - 同样支持 Markdown 预览
- **Dillinger** - 在线 Markdown 编辑器

## 📚 更多资源

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress 主题配置](https://vitepress.dev/reference/default-theme-config)
- [Markdown 语法指南](https://www.markdownguide.org/)
