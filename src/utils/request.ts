// HTTP 请求工具文件
// 基于 axios 封装，包含请求/响应拦截器和统一错误处理

import axios from 'axios'
import { API_BASE_URL, TIMEOUT, REQUEST_WITH_CREDENTIALS, isDevelopment } from './env'

// 创建 axios 实例
const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  withCredentials: REQUEST_WITH_CREDENTIALS
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem('token')
    // 如果有 token，则添加到请求头
    if (token && config.headers) {
      config.headers.Authorization = 'Bearer ' + token
    }

    // 设置统一的 Content-Type
    config.headers['Content-Type'] = 'application/json'

    // 开发环境打印请求日志
    if (isDevelopment) {
      console.log('[开发环境] 请求发送:', {
        url: config.url,
        method: config.method,
        data: config.data,
        params: config.params
      })
    }

    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 开发环境打印响应日志
    if (isDevelopment) {
      console.log('[开发环境] 响应接收:', {
        url: response.config.url,
        status: response.status,
        data: response.data
      })
    }

    // 直接返回响应数据
    return response.data
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      const { status, data } = error.response

      // 根据状态码处理不同错误
      switch (status) {
        case 400:
          console.error('请求参数错误:', data.message || '请求参数错误')
          break
        case 401:
          console.error('未授权，请重新登录')
          // 清除 token 并跳转到登录页
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          console.error('拒绝访问')
          break
        case 404:
          console.error('请求资源不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error('请求失败: ' + status)
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      console.error('网络错误，请检查网络连接')
    } else {
      // 请求配置出错
      console.error('请求配置错误:', error.message)
    }

    return Promise.reject(error)
  }
)

export default instance

