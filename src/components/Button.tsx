// Button 按钮组件
// 支持主按钮和次要按钮两种样式，以及所有原生 button 属性

import React from 'react'

// Button 组件属性接口
// 继承原生 button 的所有属性
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

/**
 * Button 按钮组件
 * @param children 按钮内容
 * @param onClick 点击事件
 * @param variant 按钮样式变体，primary 为主按钮，secondary 为次要按钮
 * @param style 自定义样式
 * @param disabled 是否禁用
 * @param props 其他原生 button 属性
 */
export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  style,
  disabled,
  ...props 
}: ButtonProps) {
  return (
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: disabled ? '#ccc' : (variant === 'primary' ? '#1890ff' : '#f0f0f0'),
        color: variant === 'primary' ? '#fff' : '#333',
        opacity: disabled ? 0.6 : 1,
        ...style
      }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

