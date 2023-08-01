import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd'

import { ButtonColor, ButtonProps, ButtonVariant } from './type'
import buttonVariantMap, { applyClassName, buttonColorMap, getAntdButtonType } from './util'

const Button = ({ variant, type = 'button', color = 'primary', ...rest }: ButtonProps) => {
  const variantJSON = buttonVariantMap[variant]
  const colorJSON = buttonColorMap[color]

  return (
    <AntdButton
      {...getAntdButtonType(variant, color)}
      htmlType={type}
      className={`flex justify-center items-center disabled:cursor-not-allowed ${applyClassName(
        colorJSON,
      )} ${applyClassName(variantJSON)}`}
      {...rest}
    />
  )
}

export default Button
