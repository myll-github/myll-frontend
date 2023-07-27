import { ButtonColor, ButtonVariant } from './type'

interface ButtonVariantProps {
  width: string
  height: string
  padding: string
  font: string
  borderRadius: string
  disabled: string
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
    disabled: 'disabled:text-DISABLED disabled:bg-[#EBF0F8]',
  },
  regular: {
    width: 'w-120pxr',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-10pxr',
    disabled: 'disabled:text-DISABLED disabled:bg-[#EBF0F8]',
  },
  medium: {
    width: 'w-80pxr',
    height: 'h-40pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'rounded-8pxr',
    disabled: 'disabled:text-DISABLED disabled:bg-[#EBF0F8]',
  },
  small: {
    width: 'w-50pxr',
    height: 'h-26pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-SMALL',
    borderRadius: 'rounded-6pxr',
    disabled: 'disabled:text-DISABLED disabled:bg-[#EBF0F8]',
  },
  link: {
    width: 'w-60pxr',
    height: 'h-30pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'border-0',
    disabled: 'disabled:text-GRAY_30 disabled:bg-WHITE',
  },
}

export const buttonColorMap: { [key in ButtonColor]: ButtonColorProps } = {
  primary: {
    backgroundColor: `bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 disabled:from-slate-100 disabled:to-slate-100 `,
    color: 'text-WHITE hover:text-WHITE focus-within:text-WHITE focus:text-WHITE',
  },

  secondary: {
    backgroundColor: `bg-SUB_BLUE_2 hover:bg-[#BCD9FF]`,
    color: 'text-PRIMARY_BLUE',
  },

  outlined: {
    backgroundColor: 'bg-WHITE',
    hover: 'hover:bg-GRAY_20',
    color: 'text-GRAY_70',
    border: 'border border-GRAY_30',
  },

  link: {
    backgroundColor: ``,
    color: 'text-GRAY_70',
  },
}

export const applyClassName = (obj: ButtonVariantProps | ButtonColorProps) => {
  return Object.values(obj).reduce((total, value) => `${total} ${value}`, '')
}

export default buttonVariantMap
