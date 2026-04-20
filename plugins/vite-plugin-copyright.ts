import type { Plugin } from 'vite'

export interface CopyrightPluginOptions {
  author?: string
  year?: string
  company?: string
  license?: string
}

export default function copyrightPlugin(options: CopyrightPluginOptions = {}): Plugin {
  const {
    author = 'Your Name',
    year = new Date().getFullYear().toString(),
    company = 'Your Company',
    license = 'MIT'
  } = options

  const copyrightComment = `/**
 * Copyright © ${year} ${company}
 * @author ${author}
 * @license ${license}
 */

`

  return {
    name: 'vite-plugin-copyright',
    
    // 确保插件在最后执行
    enforce: 'post',
    
    configResolved() {
      console.log('[vite-plugin-copyright] 插件已加载')
    },
    
    buildStart() {
      console.log('[vite-plugin-copyright] 开始构建')
    },
    
    // 只在最终的 generateBundle 阶段添加版权注释
    generateBundle(_options, bundle) {
      console.log('[vite-plugin-copyright] generateBundle 添加版权注释')
      
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === 'chunk' && fileName.endsWith('.js')) {
          console.log(`[vite-plugin-copyright] 为 ${fileName} 添加版权注释`)
          chunk.code = copyrightComment + chunk.code
        }
      }
    }
  }
}
