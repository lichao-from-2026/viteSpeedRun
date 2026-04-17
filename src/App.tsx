// 主应用组件
// 包含环境变量展示、请求案例演示等功能

import { useState, useEffect } from 'react'
import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import heroImg from '@assets/hero.png'
import '@styles/App.css'
import { Button } from '@components/Button'
import { formatDate, formatNumber } from '@utils/format'
import { userApi, commonApi, type User } from '@utils/api'

function App() {
  // 计数器状态
  const [count, setCount] = useState(0)
  // 加载状态
  const [loading, setLoading] = useState(false)
  // 用户列表数据
  const [userList, setUserList] = useState<User[]>([])
  // 健康检查状态
  const [healthStatus, setHealthStatus] = useState('')
  
  // 从环境变量中读取配置
  const appName = import.meta.env.VITE_APP_NAME
  const appVersion = import.meta.env.VITE_APP_VERSION
  const apiUrl = import.meta.env.VITE_API_URL
  const isDebug = import.meta.env.VITE_DEBUG === 'true'
  const featureFlag = import.meta.env.VITE_FEATURE_FLAG === 'true'
  const isDevelopment = import.meta.env.DEV

  // 调用健康检查接口
  const fetchHealthCheck = async () => {
    try {
      setLoading(true)
      const response = await commonApi.getHealthCheck()
      setHealthStatus(response.data.status + ' - ' + response.data.timestamp)
    } catch (error) {
      console.error('健康检查失败:', error)
      setHealthStatus('检查失败')
    } finally {
      setLoading(false)
    }
  }

  // 调用获取用户列表接口
  const fetchUserList = async () => {
    try {
      setLoading(true)
      const response = await userApi.getUserList({ page: 1, size: 10 })
      setUserList(response.data.list)
    } catch (error) {
      console.error('获取用户列表失败:', error)
    } finally {
      setLoading(false)
    }
  }

  // 组件挂载时自动调用健康检查接口
  useEffect(() => {
    fetchHealthCheck()
  }, [])

  return (
    <>
      <section id="center">
        {/* Hero 区域，展示项目 Logo */}
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        {/* 环境信息展示区域 */}
        <div>
          <h1>{appName}</h1>
          <p>
            版本: {appVersion} | 环境: {isDevelopment ? '开发环境' : '生产环境'}
          </p>
          <p>
            API 地址: {apiUrl}
          </p>
          <p>
            调试模式: {isDebug ? '开启' : '关闭'} | 特性开关: {featureFlag ? '开启' : '关闭'}
          </p>
          <p>
            当前日期: {formatDate(new Date())}
          </p>
          <p>
            格式化数字: {formatNumber(1234567890)}
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
          
          {/* 请求案例演示区域 */}
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '10px' }}>请求案例演示</h3>
            
            {/* 健康检查接口演示 */}
            <div style={{ marginBottom: '15px' }}>
              <h4>健康检查接口：</h4>
              <p>状态: {healthStatus || '加载中...'}</p>
              <Button onClick={fetchHealthCheck} disabled={loading}>
                {loading ? '检查中...' : '刷新健康检查'}
              </Button>
            </div>
            
            {/* 用户列表接口演示 */}
            <div style={{ marginBottom: '15px' }}>
              <h4>用户列表接口：</h4>
              <Button onClick={fetchUserList} disabled={loading} style={{ marginRight: '10px' }}>
                {loading ? '加载中...' : '获取用户列表'}
              </Button>
              {userList.length > 0 && (
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  {userList.map((user) => (
                    <li key={user.id}>
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        {/* 计数器演示按钮 */}
        <Button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
      </section>
    </>
  )
}

export default App

