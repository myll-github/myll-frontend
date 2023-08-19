import { useEffect, useMemo, useState } from 'react'

import { BasicCard, HorizontalCard, RoundCard } from '../Card'
import { CardType } from './type'

export interface useCardContainerProps {
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
