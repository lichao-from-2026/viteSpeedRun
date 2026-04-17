# 代码主题选择指南

本文档介绍如何在 VitePress 中更换代码块的显示风格。

---

## 🎨 如何更换代码主题

### 方法一：修改配置文件（推荐）

编辑 `docs/.vitepress/config.ts` 文件，找到 `markdown.theme` 配置项：

```typescript
export default defineConfig({
  // ... 其他配置
  
  markdown: {
    // 修改这里的主题名称
    theme: 'one-dark-pro',
    lineNumbers: true,
  },
})
```

修改后保存，VitePress 会自动热更新，浏览器会自动刷新显示新主题！

---

## 📋 可用主题列表

### 深色主题

| 主题名称 | 说明 | 推荐场景 |
|---------|------|---------|
| `material-theme-palenight` | Material Palenight | 平衡、护眼 |
| `material-theme-darker` | Material Darker | 对比度高 |
| `material-theme-ocean` | Material Ocean | 海洋蓝调 |
| `github-dark` | GitHub Dark | GitHub 深色主题 |
| `one-dark-pro` | One Dark Pro | Atom 经典深色 |
| `dracula` | Dracula | 紫色调，受欢迎 |
| `nord` | Nord | 北欧冷色调 |
| `min-dark` | Min Dark | 简约深色 |

### 浅色主题

| 主题名称 | 说明 | 推荐场景 |
|---------|------|---------|
| `material-theme-lighter` | Material Lighter | Material 浅色 |
| `github-light` | GitHub Light | GitHub 浅色主题 |
| `min-light` | Min Light | 简约浅色 |

---

## 🎯 主题推荐

### 程序员最爱
- **`one-dark-pro`** - Atom 编辑器的经典主题，非常受欢迎
- **`dracula`** - 紫色调，在程序员中非常流行
- **`nord`** - 北欧风格，护眼舒适

### GitHub 风格
- **`github-dark`** - GitHub 深色模式
- **`github-light`** - GitHub 浅色模式

### Material 风格
- **`material-theme-palenight`** - Material Design 风格
- **`material-theme-darker`** - 更深的 Material 风格

---

## ⚙️ 其他代码块配置

### 显示/隐藏行号

```typescript
markdown: {
  // true 显示行号，false 隐藏行号
  lineNumbers: true,
}
```

### 配置语言别名

```typescript
markdown: {
  languages: {
    // 将 vue 文件识别为 html
    'vue': 'html',
    // 添加自定义语言
    'my-lang': 'javascript'
  }
}
```

---

## 💡 小贴士

1. **快速切换** - 修改配置后保存，VitePress 会自动刷新
2. **对比选择** - 可以逐个尝试不同主题，找到最喜欢的
3. **浅色/深色** - 根据你的系统主题偏好选择对应的代码主题
4. **护眼考虑** - 长时间阅读建议选择对比度适中的主题

---

## 📚 更多资源

- [Shiki 主题列表](https://github.com/shikijs/shiki/blob/main/docs/themes.md) - VitePress 使用 Shiki 进行语法高亮
- [VitePress Markdown 配置](https://vitepress.dev/reference/site-config#markdown) - 官方文档

---

## 🎉 当前使用的主题

当前配置使用的主题是：**`one-dark-pro`**

想要更换吗？编辑 `docs/.vitepress/config.ts` 中的 `theme` 配置项即可！
