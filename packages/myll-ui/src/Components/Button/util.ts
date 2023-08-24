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
  border?: string
  transition?: string
}

const buttonVariantMap: { [key in ButtonVariant]: ButtonVariantProps } = {
  block: {
    width: 'w-full max-w-[360px]',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-[8px]',
  },
  large: {
    width: 'min-w-120pxr',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-[10px]',
  },
  medium: {
    width: 'min-w-80pxr',
    height: 'h-40pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'rounded-[8px]',
  },
  small: {
    width: 'min-w-60pxr',
    height: 'h-32pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-SMALL',
    borderRadius: 'rounded-[6px]',
  },
  mini: {
    width: 'min-w-50pxr',
    height: 'h-24pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'rounded-[6px]',
  },
}

export const buttonColorMap: { [key in ButtonColor]: ButtonColorProps } = {
  gradient: {
    backgroundColor: `bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 enabled:active:from-PRIMARY_BLUE enabled:active:to-PRIMARY_BLUE disabled:opacity-40 `,
    color: 'text-WHITE enabled:hover:text-WHITE focus-within:text-WHITE enabled:active:text-WHITE',
    border: 'border-0',
    transition: 'transition-all duration-500',
  },

  primary: {
    backgroundColor: `bg-PRIMARY_BLUE disabled:bg-PRIMARY_BLUE disabled:opacity-40`,
    color: 'text-WHITE disabled:text-WHITE',
  },

  secondary: {
    backgroundColor: `bg-SUB_BLUE_2 enabled:hover:bg-[#BCD9FF] enabled:active:bg-[#D1DCEB] disabled:opacity-40`,
    color: 'text-PRIMARY_BLUE disabled:text-PRIMARY_BLUE',
  },

  outlined: {
    backgroundColor: 'bg-WHITE disabled:opacity-40 enabled:active:bg-GRAY_20',
    color: 'text-GRAY_90',
    border: 'border border-GRAY_30',
  },

  warning: {
    backgroundColor: `bg-[#FFEFF1] enabled:active:bg-WARNING_2 disabled:opacity-40`,
    color: 'text-WARNING_1 enabled:hover:text-WARNING_1 disabled:text-WARNING_1 disabled:bg-[#FFEFF1]',
    border: 'border-0',
  },

  text: {
    backgroundColor: 'disabled:text-GRAY_30 enabled:active:bg-GRAY_20 disabled:opacity-40',
    color: 'text-PRIMARY_BLUE disabled:text-PRIMARY_BLUE disabled:bg-WHITE',
    border: 'border-0',
  },
}

export const applyClassName = (obj: ButtonVariantProps | ButtonColorProps) => {
  return Object.values(obj!).reduce((total, value) => `${total} ${value}`, '')
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
