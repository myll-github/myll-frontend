import { Alert as AntdAlert, Space, Switch } from 'antd'
import { useState } from 'react'

interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error'
  isVisible: boolean
  message: string
  onVisibleChange: (flag: boolean) => void
}

const Alert = ({ type, isVisible, message, onVisibleChange }: AlertProps) => {
  const handleClose = () => {
    onVisibleChange(false)
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {isVisible && <AntdAlert showIcon message={message} type={type} closable afterClose={handleClose} />}
    </Space>
  )
}

Alert.defaultProps = {
  type: 'success' as 'success' | 'info' | 'warning' | 'error',
}

export default Alert
