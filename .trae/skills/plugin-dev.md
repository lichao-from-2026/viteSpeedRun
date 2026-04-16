# 插件开发 SKILL

> 用途：Vite 插件开发指南

---

## 插件基本结构

### 最简单的插件
```typescript
// my-plugin.ts
export default function myPlugin() {
  return {
    name: 'my-plugin', // 插件名称（必须）
    // 插件钩子...
  }
}
```

### 在 Vite 配置中使用
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import myPlugin from './my-plugin'

export default defineConfig({
  plugins: [myPlugin()]
})
```

---

## 常用插件钩子

### 配置相关钩子
```typescript
export default function myPlugin() {
  return {
    name: 'my-plugin',
    
    // 修改 Vite 配置
    config(config, env) {
      // 返回部分配置会被合并
      return {
        resolve: {
          alias: {
            '@': '/src'
          }
        }
      }
    },
    
    // 配置最终确认后调用
    configResolved(config) {
      // 读取最终配置
    }
  }
}
```

### 开发服务器钩子
```typescript
export default function myPlugin() {
  return {
    name: 'my-plugin',
    
    // 配置开发服务器
    configureServer(server) {
      // 添加自定义中间件
      server.middlewares.use((req, res, next) => {
        // 自定义处理
        next()
      })
    }
  }
}
```

### 转换钩子
```typescript
export default function myPlugin() {
  return {
    name: 'my-plugin',
    
    // 转换代码
    transform(code, id) {
      if (id.endsWith('.txt')) {
        return `export default ${JSON.stringify(code)}`
      }
    }
  }
}
```

---

## 插件执行顺序

### 钩子调用顺序
1. `options`
2. `buildStart`
3. `resolveId` (对每个导入调用)
4. `load` (对每个文件调用)
5. `transform` (对每个文件调用)
6. `buildEnd`
7. `closeBundle`

---

## 插件分类

### 前置插件
```typescript
export default function myPlugin() {
  return {
    name: 'my-plugin',
    enforce: 'pre', // 前置执行
    // ...
  }
}
```

### 后置插件
```typescript
export default function myPlugin() {
  return {
    name: 'my-plugin',
    enforce: 'post', // 后置执行
    // ...
  }
}
```

---

## 虚拟模块

### 创建虚拟模块
```typescript
export default function myPlugin() {
  return {
    name: 'my-plugin',
    
    resolveId(id) {
      if (id === 'virtual:my-module') {
        // 用 \0 前缀标记为虚拟模块
        return '\0virtual:my-module'
      }
    },
    
    load(id) {
      if (id === '\0virtual:my-module') {
        return 'export default "Hello from virtual module!"'
      }
    }
  }
}
```

### 使用虚拟模块
```typescript
import msg from 'virtual:my-module'
console.log(msg)
```

---

## 常用插件示例

### 环境变量注入
```typescript
export default function envPlugin(env: Record<string, string>) {
  return {
    name: 'env-plugin',
    config() {
      return {
        define: {
          'process.env': JSON.stringify(env)
        }
      }
    }
  }
}
```

### 自定义文件加载器
```typescript
export default function yamlPlugin() {
  return {
    name: 'yaml-plugin',
    transform(code, id) {
      if (id.endsWith('.yaml') || id.endsWith('.yml')) {
        // 解析 YAML 并返回 JavaScript
        const data = parseYAML(code)
        return `export default ${JSON.stringify(data)}`
      }
    }
  }
}
```

---

## 调试插件

### 打印调试信息
```typescript
export default function debugPlugin() {
  return {
    name: 'debug-plugin',
    transform(code, id) {
      console.log('Transforming:', id)
      return code
    }
  }
}
```

---

## 参考资料

- [Vite 插件 API](https://vite.dev/guide/api-plugin.html)
- [Rollup 插件文档](https://rollupjs.org/guide/en/#plugin-development)
- [Vite 插件列表](https://github.com/vitejs/awesome-vite#plugins)
