import { ButtonProps as AntdButtonProps } from 'antd'

export type ButtonVariant = 'large' | 'regular' | 'medium' | 'small' | 'link'
export type ButtonColor = 'primary' | 'secondary' | 'outlined' | 'link'

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
  type: 'button' | 'submit' | 'reset'
  variant: ButtonVariant
  children: string

  color?: ButtonColor
  disabled?: boolean
}
