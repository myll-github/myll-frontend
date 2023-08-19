import { useEffect, useState } from 'react'

export type OnToggleStatusType<T extends { id: number }> = (checkList: Map<number, T>) => void

export interface useCheckListProps<T extends { id: number }> {
  onChange: OnToggleStatusType<T>
}

export const useCheckList = <T extends { id: number }>({ onChange }: useCheckListProps<T>) => {
  const [checkMap, setCheckMap] = useState(new Map<number, T>())

  const ToggleCardStatusByClick = (card: T) => {
    setCheckMap((prevCheckMap) => {
      const newCheckMap = new Map(prevCheckMap)
      if (newCheckMap.has(card.id)) {
        newCheckMap.delete(card.id)
      } else {
        newCheckMap.set(card.id, card)
      }

      return newCheckMap
    })
  }

  useEffect(() => {
    onChange(checkMap)
  }, [checkMap, onChange])

  return { checkMap, ToggleCardStatusByClick }
}
