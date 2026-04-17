// API 接口定义文件
// 统一管理项目中的所有 API 接口

import request from './request'

// 用户数据类型定义
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// API 统一响应格式
export interface ApiResponse {
  code: number
  message: string
  data: any
}

// 用户相关 API
export const userApi = {
  // 获取用户列表
  getUserList: (params?: { page?: number; size?: number }) => {
    return request.get('/users', { params })
  },

  // 获取用户详情
  getUserDetail: (id: number) => {
    return request.get('/users/' + id)
  },

  // 创建用户
  createUser: (data: Omit<User, 'id'>) => {
    return request.post('/users', data)
  },

  // 更新用户
  updateUser: (id: number, data: Partial<User>) => {
    return request.put('/users/' + id, data)
  },

  // 删除用户
  deleteUser: (id: number) => {
    return request.delete('/users/' + id)
  }
}

// 通用 API
export const commonApi = {
  // 健康检查接口
  getHealthCheck: () => {
    return request.get('/health')
  }
}

