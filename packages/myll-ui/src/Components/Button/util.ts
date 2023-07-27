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
}

const buttonVariantMap: { [key in ButtonVariant]: ButtonVariantProps } = {
  Large: {
    width: 'w-300pxr',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-8pxr',
  },
  Regular: {
    width: 'w-120pxr',
    height: 'h-54pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-LARGE',
    borderRadius: 'rounded-10pxr',
  },
  Medium: {
    width: 'w-80pxr',
    height: 'h-40pxr',
    padding: 'px-20pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'rounded-8pxr',
  },
  Small: {
    width: 'w-50pxr',
    height: 'h-26pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-SMALL',
    borderRadius: 'rounded-6pxr',
  },
  Link: {
    width: 'w-60pxr',
    height: 'h-30pxr',
    padding: 'px-10pxr',
    font: 'BUTTON-MEDIUM',
    borderRadius: 'border-0',
  },
}

export const buttonColorMap: { [key in ButtonColor]: ButtonColorProps } = {
  Primary: {
    backgroundColor:
      'bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 disabled:bg-gradient-to-l disabled:from-slate-100 disabled:to-slate-100',
    color: 'text-WHITE disabled:text-DISABLED',
  },

  Secondary: {
    backgroundColor:
      'bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 disabled:bg-gradient-to-l disabled:from-slate-100 disabled:to-slate-100',
    color: 'text-WHITE disabled:text-DISABLED',
  },

  Outlined: {
    backgroundColor:
      'bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 disabled:bg-gradient-to-l disabled:from-slate-100 disabled:to-slate-100',
    color: 'text-WHITE disabled:text-DISABLED',
  },

  Link: {
    backgroundColor:
      'bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 disabled:bg-gradient-to-l disabled:from-slate-100 disabled:to-slate-100',
    color: 'text-WHITE disabled:text-DISABLED',
  },
}

export const applyClassName = (obj: ButtonVariantProps | ButtonColorProps) => {
  return Object.values(obj).reduce((total, value) => `${total} ${value}`, '')
}

export default buttonVariantMap
