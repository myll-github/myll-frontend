import { Button as AntdButton } from 'antd'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const Button = () => {
  return <AntdButton className="w-[500px] h-[500px] bg-slate-500">123</AntdButton>
}

export default Button
