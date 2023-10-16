import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import { FC, HTMLAttributes } from 'react'

/**
 * 주요 AntdInput props
 * allowClear : 텍스트 입력 시 X 버튼이 인풋 우측에 표현 됩니다.
 * addonBefore : 인풋 앞에 표현될 UI 입니다.
 */

export interface InputProps extends AntdInputProps {
  /**
   * label above the input field.
   */
  label?: string
  /**
   * error message below the input field.
   */
  errorMessage?: string
  /**
   * input field type (default, password), It is unrelated to inputMode.
   */
  inputType?: 'default' | 'password'
  theme?: 'default' | 'bottom-border'
  /**
   * input field value validation handler function.
   * @param text input value
   * @returns is valid value (boolean)
   */
  onValidation?: (text?: string) => boolean
}

const Input: FC<InputProps> = (props) => {
  const { value, label, errorMessage, inputType = 'default', theme = 'default', onValidation, ...inputProps } = props

  return (
    <div className="w-full flex flex-col gap-[8px]">
      <div className="INPUT-LABEL2">{label}</div>
      {inputType === 'default' ? (
        <AntdInput
          style={theme === 'bottom-border' ? { borderRadius: 0, borderRight: 0, borderLeft: 0, borderTop: 0 } : {}}
          className={`INPUT-FIELD h-40pxr ${theme === 'bottom-border' && 'pl-0 pb-10pxr focus:ring-0'} ${
            inputProps.className
          }`}
          status={errorMessage && errorMessage.length > 0 ? 'error' : undefined}
          value={value}
          {...inputProps}
        />
      ) : (
        <AntdInput.Password
          style={theme === 'bottom-border' ? { borderRadius: 0, borderRight: 0, borderLeft: 0, borderTop: 0 } : {}}
          className={`INPUT-FIELD h-40pxr ${theme === 'bottom-border' && 'pl-0 pb-10pxr focus:ring-0'} ${
            inputProps.className
          }`}
          value={value}
          status={errorMessage && errorMessage.length > 0 ? 'error' : undefined}
          {...inputProps}
        />
      )}
      <div className="min-h-24 flex items-center text-ERROR justify-start SUBTITLE-T8">
        {errorMessage && errorMessage.length > 0 && errorMessage}
      </div>
    </div>
  )
}

export default Input
