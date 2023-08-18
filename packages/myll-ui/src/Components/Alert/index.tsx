import { Alert as AntdAlert, Space, Switch } from 'antd'
import { useState } from 'react'

interface AlertProps {
  /**
   * The style of alert box.
   *
   * - `'success'`: Used to show a successful action or a positive message.
   * - `'info'`: Used for informational messages.
   * - `'warning'`: Indicates a warning that might need attention.
   * - `'error'`: Indicates a failed action or a negative message.
   */
  type?: 'success' | 'info' | 'warning' | 'error'

  /**
    Determines whether the alert is visible or not.
  */
  isVisible: boolean

  /**
    The content of the alert message to be displayed
  */
  message: string

  /**
    Callback function that is invoked when the visibility of the alert changes.
  */
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
