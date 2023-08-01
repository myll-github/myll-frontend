import { ButtonProps as AntdButtonProps } from 'antd'

/**
 * This type defines the size of the button.
 */
export type ButtonVariant = 'block' | 'large' | 'medium' | 'small' | 'mini'

/**
 * This type defines the color of the button.
 */
export type ButtonColor = 'primary' | 'secondary' | 'outlined' | 'text' | 'gradient' | 'warning'

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
  /**
   * Defines the type of the button.
   */
  type: 'button' | 'submit' | 'reset'

  /**
   * Determines the size of the button.
   */
  variant: ButtonVariant

  /**
   * Determines the text displayed on the button.
   */
  children: string

  /**
   * Determines the color of the button. default is 'primary'
   */
  color?: ButtonColor

  /**
   * Determines the enable/disable state of the button. default is 'false'
   */
  disabled?: boolean
}
