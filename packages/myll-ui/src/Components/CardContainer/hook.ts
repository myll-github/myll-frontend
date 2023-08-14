import { useMemo, useState } from 'react'

import { BasicCard, HorizontalCard, RoundCard } from '../Card'
import { CardType } from './type'

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

export const useCheckCardList = () => {
  const [checkList, setCheckList] = useState(new Set())

  const ToggleCardStatusByClick = (cardId: number) => {
    setCheckList((prevCheckList) => {
      const newCheckList = new Set(prevCheckList)
      if (newCheckList.has(cardId)) {
        newCheckList.delete(cardId)
      } else {
        newCheckList.add(cardId)
      }

      return newCheckList
    })
  }

  return { checkList, ToggleCardStatusByClick }
}
