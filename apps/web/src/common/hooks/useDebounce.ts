import { useEffect, useState } from 'react'

const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // 입력 값이 변경될 때마다 타이머를 재설정
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // useEffect의 cleanup 함수에서 타이머를 해제하여 메모리 누수를 방지
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
