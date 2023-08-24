import { useMemo, useState } from 'react'
import { noop, useCheckList } from 'shared'

import { useCardContainerHook } from './hook'
import { CardContainerProps } from './type'

const CardContainer = ({ cardType, data, className, onChange = noop }: CardContainerProps) => {
  const { Card } = useCardContainerHook({ cardType })
  const { checkMap, ToggleCardStatusByClick } = useCheckList({ onChange })

  return (
    <div className={`select-none ${className}`}>
      {data.map((cardData) => {
        const { id, subTitle, mainTitle, url, alt } = cardData

        return (
          <Card key={id} isSelected={checkMap.has(id)} onClick={() => ToggleCardStatusByClick(cardData)}>
            <Card.CardImage alt={alt} src={url ?? ''} />
            <Card.Description subTitle={subTitle} mainTitle={mainTitle} isSelected={checkMap.has(id)} />
          </Card>
        )
      })}
    </div>
  )
}

export default CardContainer
