import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd'

import { ButtonProps } from './type'
import buttonVariantMap, { applyClassName, buttonColorMap } from './util'

const Button = ({ variant, type = 'button', color = 'primary', ...rest }: ButtonProps) => {
  const variantJSON = buttonVariantMap[variant]

  const convertedColor = variant === 'link' ? 'link' : color
  const colorJSON = buttonColorMap[convertedColor]

  console.log(variant, variantJSON, colorJSON)

  return (
    <AntdButton
      type={variant === 'link' ? 'link' : ('' as any)}
      htmlType={type}
      className={`flex justify-center items-center ${applyClassName(colorJSON)} ${applyClassName(variantJSON)}`}
      {...rest}
    />
  )
}

export default Button
