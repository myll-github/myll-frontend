import { Button as AntdButton } from 'antd'

import { ButtonProps } from './type'
import buttonVariantMap, { applyClassName, buttonColorMap } from './util'

const Button = ({ variant, color = 'Primary', ...rest }: ButtonProps) => {
  const variantJSON = buttonVariantMap[variant]
  const convertedColor = variant === 'Link' ? color : 'Link'

  const colorJSON = buttonColorMap[convertedColor]

  return (
    <AntdButton
      className={`flex justify-center items-center ${applyClassName(colorJSON)} ${applyClassName(variantJSON)}`}
      {...rest}
    />
  )
}

export default Button
