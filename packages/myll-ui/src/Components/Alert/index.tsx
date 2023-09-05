import { Alert as AntdAlert, Space } from 'antd'

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
   * Determines whether the close button is visible or not.
   */
  closable?: boolean

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

const Alert = ({ type, isVisible, closable, message, onVisibleChange }: AlertProps) => {
  const handleClose = () => {
    onVisibleChange(false)
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {isVisible && (
        <AntdAlert
          className="flex justify-center SUBTITLE-T8 text-GRAY_100 border-0"
          showIcon
          message={message}
          type={type}
          closable={closable}
          afterClose={handleClose}
        />
      )}
    </Space>
  )
}

Alert.defaultProps = {
  type: 'success' as 'success' | 'info' | 'warning' | 'error',
  closable: true,
}

export default Alert
