import { useMemo, useState } from 'react'

import { useCardContainerHook, useCheckCardList } from './hook'
import { CardContainerProps } from './type'

const CardContainer = ({ cardType, data }: CardContainerProps) => {
  const { Card } = useCardContainerHook({ cardType })
  const { checkList, ToggleCardStatusByClick } = useCheckCardList()

  return (
    <div>
      {data.map(({ id, subTitle, mainTitle, url, alt }) => {
        return (
          <Card key={id} isSelected={checkList.has(id)} onClick={() => ToggleCardStatusByClick(id)}>
            <Card.CardImage alt={alt} src={url} />
            <Card.Description subTitle={subTitle} mainTitle={mainTitle} />
          </Card>
        )
      })}
    </div>
  )
}

export default CardContainer
