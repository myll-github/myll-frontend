import { ButtonProps as AntdButtonProps } from 'antd'

export type ButtonVariant = 'Large' | 'Regular' | 'Medium' | 'Small' | 'Link'
export type ButtonColor = 'Primary' | 'Secondary' | 'Outlined' | 'Link'

export interface ButtonProps extends AntdButtonProps {
  variant: ButtonVariant
  children: string

  color?: ButtonColor
  disabled?: boolean
}
