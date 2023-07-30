import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import { FC, useEffect, useState } from 'react'

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
   * label below the input field.
   */
  helperText?: string
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
  const { value, label, helperText, inputType = 'default', onValidation, ...inputProps } = props

  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    if (value === '' || !value) setIsError(false)
    else if (value && onValidation) {
      setIsError(!onValidation(String(value)))
    }
  }, [onValidation, value])

  return (
    <div className="flex flex-col gap-[8px]">
      <div className="INPUT-LABEL2">{label}</div>
      {inputType === 'default' ? (
        <AntdInput status={isError ? 'error' : undefined} {...inputProps} />
      ) : (
        <AntdInput.Password status={isError ? 'error' : undefined} {...inputProps} />
      )}
      <div className="min-h-24 flex items-center justify-start SUBTITLE-T8">{isError && helperText}</div>
    </div>
  )
}

export default Input
