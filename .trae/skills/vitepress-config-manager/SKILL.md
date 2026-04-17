---
name: "vitepress-config-manager"
description: "根据 CONTEXT.md 中的学习路径和 docs 目录下的实际文档，自动管理和更新 VitePress 配置，包括导航栏、侧边栏等文档访问规则。"
---

# VitePress 配置管理器

## 功能说明

此技能用于自动管理 VitePress 文档站点的配置，根据项目学习进度和实际文档结构，智能更新：
- 导航栏链接
- 侧边栏配置
- 文档访问规则
- 学习进度展示

## 使用时机

**必须在以下情况调用此技能：**
- 添加新的学习文档后
- 完成某个学习阶段后
- 更新了 CONTEXT.md 中的学习路径后
- 需要调整 VitePress 配置时

## 操作步骤

### 1. 读取学习路径

读取 `.trae/CONTEXT.md` 文件，获取：
- 当前学习进度
- 已完成的学习项
- 各篇章的文档位置

### 2. 扫描文档目录

扫描 `docs/` 目录，获取：
- 实际存在的 Markdown 文件
- 文档目录结构
- 文档命名规范

### 3. 更新 VitePress 配置

修改 `docs/.vitepress/config.ts` 文件，更新：
- 导航栏（nav）- 根据学习篇章
- 侧边栏（sidebar）- 根据文档结构
- 其他相关配置

### 4. 验证配置

检查配置是否正确，确保：
- 所有链接都指向存在的文件
- 侧边栏结构清晰
- 学习进度正确显示

## 核心配置项

### 导航栏配置

```typescript
themeConfig: {
  nav: [
    { text: '入门篇', link: '/README' },
    { text: '实操篇', link: '/examples/1. 环境变量配置' },
    { text: '插件篇', link: '/plugins/' },
    { text: '原理篇', link: '/internals/' },
  ]
}
```

### 侧边栏配置

```typescript
themeConfig: {
  sidebar: {
    '/': [
      {
        text: '入门篇',
        items: [
          { text: 'README', link: '/README' }
        ]
      }
    ],
    '/examples/': [
      {
        text: '实操篇',
        items: [
          { text: '1. 环境变量配置', link: '/examples/1. 环境变量配置' },
          { text: '2. 核心配置', link: '/examples/2. 核心配置' },
          { text: '3. 进阶配置', link: '/examples/3. 进阶配置' }
        ]
      }
    ],
    '/plugins/': [
      // 插件篇配置
    ],
    '/internals/': [
      // 原理篇配置
    ]
  }
}
```

## 文档命名规范

文档文件应遵循以下命名规范：

```
{序号}. {文档名称}.md
```

例如：
- `1. 环境变量配置.md`
- `2. 核心配置.md`
- `3. 进阶配置.md`

## 学习进度标记

在 CONTEXT.md 中，已完成的学习项用 `[x]` 标记，未完成的用 `[ ]` 标记。

技能会根据这些标记：
- 在侧边栏中区分已完成和未完成的文档
- 高亮显示当前学习重点
- 提供学习进度概览

## 注意事项

1. **保持配置同步** - 每次添加新文档后都要运行此技能
2. **备份配置** - 修改前可以备份当前的 config.ts
3. **验证链接** - 确保所有文档链接都正确
4. **热更新** - VitePress 会自动热更新配置更改

## 相关文件

| 文件 | 说明 |
|------|------|
| `.trae/CONTEXT.md` | 学习路径记录 |
| `docs/.vitepress/config.ts` | VitePress 配置文件 |
| `docs/` | 文档根目录 |
| `docs/examples/` | 实操篇文档 |
| `docs/plugins/` | 插件篇文档 |
| `docs/internals/` | 原理篇文档 |
