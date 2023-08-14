import { useMemo } from 'react'

import { BasicCard, HorizontalCard, RoundCard } from '../Card'
import { CardType } from './type'

interface useCardContainerProps {
  cardType: CardType
}

const useCardContainerHook = ({ cardType }: useCardContainerProps) => {
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

export default useCardContainerHook
