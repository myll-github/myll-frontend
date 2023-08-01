import { ButtonType } from 'antd/es/button'

import { ButtonColor, ButtonVariant } from './type'

interface ButtonVariantProps {
  width: string
  height: string
  padding: string
  font: string
  borderRadius: string
}

interface ButtonColorProps {
  color: string
  backgroundColor: string
  hover?: string
  border?: string
}

const buttonVariantMap: { [key in ButtonVariant]: ButtonVariantProps } = {
  large: {
    width: 'w-300pxr',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-8pxr',
  },
  regular: {
    width: 'w-120pxr',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-10pxr',
  },
  medium: {
    width: 'w-80pxr',
    height: 'h-40pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'rounded-8pxr',
  },
  small: {
    width: 'min-w-50pxr',
    height: 'h-26pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-SMALL',
    borderRadius: 'rounded-6pxr',
  },
  mini: {
    width: 'w-60pxr',
    height: 'h-30pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'border-0',
  },
}

export const buttonColorMap: { [key in ButtonColor]: ButtonColorProps } = {
  gradient: {
    backgroundColor: `bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 active:from-PRIMARY_BLUE active:to-PRIMARY_BLUE disabled:opacity-40 `,
    color: 'text-WHITE hover:text-WHITE focus-within:text-WHITE active:text-WHITE',
    border: 'border-0',
  },

  primary: {
    backgroundColor: `bg-PRIMARY_BLUE disabled:bg-PRIMARY_BLUE disabled:opacity-40`,
    color: 'text-WHITE disabled:text-WHITE',
  },

  secondary: {
    backgroundColor: `bg-SUB_BLUE_2 hover:bg-[#BCD9FF] active:bg-[#D1DCEB] disabled:opacity-40`,
    color: 'text-PRIMARY_BLUE disabled:text-PRIMARY_BLUE',
  },

  outlined: {
    backgroundColor: 'bg-WHITE disabled:opacity-40 active:bg-GRAY_20',
    color: 'text-GRAY_90',
    border: 'border border-GRAY_30',
  },

  warning: {
    backgroundColor: `bg-[#FFEFF1] active:bg-WARNING_2 disabled:opacity-40`,
    color: 'text-WARNING_1 hover:text-WARNING_1 disabled:text-WARNING_1 disabled:bg-[#FFEFF1]',
    border: 'border-0',
  },

  text: {
    backgroundColor: 'disabled:text-GRAY_30 active:bg-GRAY_20 disabled:opacity-40',
    color: 'text-PRIMARY_BLUE disabled:text-PRIMARY_BLUE disabled:bg-WHITE',
    border: 'border-0',
  },
}

export const applyClassName = (obj: ButtonVariantProps | ButtonColorProps) => {
  return Object.values(obj).reduce((total, value) => `${total} ${value}`, '')
}

export const getAntdButtonType = (varinant: ButtonVariant, color: ButtonColor) => {
  switch (varinant) {
    default:
      break
  }

  switch (color) {
    case 'primary':
      return { type: 'primary', danger: false }
    default:
      break
  }

  return { type: '' as any, danger: false }
}

export default buttonVariantMap
