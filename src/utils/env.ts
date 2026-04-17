// 环境配置文件
// 用于区分生产环境和开发环境的配置

// 是否为生产环境
export const isProduction = import.meta.env.PROD
// 是否为开发环境
export const isDevelopment = import.meta.env.DEV

// API 基础地址
// 生产环境使用真实 API 地址
// 开发环境使用代理前缀 /api（配合 Vite 代理配置）
export const API_BASE_URL = isProduction
  ? 'https://api.example.com'
  : '/api'

// 请求超时时间（毫秒）
export const TIMEOUT = 10000
// 是否携带凭证（Cookie）
export const REQUEST_WITH_CREDENTIALS = true

