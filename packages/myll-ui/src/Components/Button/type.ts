import { ButtonProps as AntdButtonProps } from 'antd'

export type ButtonVariant = 'block' | 'large' | 'medium' | 'small' | 'mini'
export type ButtonColor = 'primary' | 'secondary' | 'outlined' | 'text' | 'gradient' | 'warning'

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
  type: 'button' | 'submit' | 'reset'
  variant: ButtonVariant
  children: string

  color?: ButtonColor
  disabled?: boolean
}
