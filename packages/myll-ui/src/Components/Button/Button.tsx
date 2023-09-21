import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd'

import { ButtonColor, ButtonProps, ButtonVariant } from './type'
import buttonVariantMap, { applyClassName, buttonColorMap, getAntdButtonType } from './util'

const Button = ({ variant = 'medium', type = 'button', color = 'primary', className = '', ...rest }: ButtonProps) => {
  const variantJSON = buttonVariantMap[variant]
  const colorJSON = buttonColorMap[color]

  return (
    <AntdButton
      {...getAntdButtonType(variant, color)}
      htmlType={type}
      className={`flex justify-center items-center disabled:cursor-not-allowed ${applyClassName(
        colorJSON,
      )} ${applyClassName(variantJSON)} ${className}`}
      {...rest}
    />
  )
}

export default Button
