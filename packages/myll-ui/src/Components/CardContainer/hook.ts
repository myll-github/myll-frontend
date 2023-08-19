import { useEffect, useMemo, useState } from 'react'

import { BasicCard, HorizontalCard, RoundCard } from '../Card'
import { CardDataProps, CardType, OnToggleCardStatusType } from './type'

interface useCardContainerProps {
  cardType: CardType
}

export const useCardContainerHook = ({ cardType }: useCardContainerProps) => {
  const Card = useMemo(() => {
    switch (cardType) {
      case 'horizontal':
        return HorizontalCard
      case 'round':
        return RoundCard
      case 'basic':
      default:
        return BasicCard
    }
  }, [cardType])

  return { Card }
}

export interface useCheckListProps<T extends { id: number }> {
  onChange: OnToggleCardStatusType<T>
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
