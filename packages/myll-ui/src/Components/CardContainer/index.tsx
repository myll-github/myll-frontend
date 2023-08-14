import { useMemo, useState } from 'react'

import useCardContainerHook from './hook'
import { CardContainerProps } from './type'

const CardContainer = ({ cardType, data }: CardContainerProps) => {
  const [checkList, setCheckList] = useState(new Set())
  const { Card } = useCardContainerHook({ cardType })

  const HandleCardClick = (cardId: number) => {
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

  return (
    <div>
      {data.map(({ id, subTitle, mainTitle, url, alt }) => {
        return (
          <Card key={id} isSelected={checkList.has(id)} onClick={() => HandleCardClick(id)}>
            <Card.CardImage alt={alt} src={url} />
            <Card.Description subTitle={subTitle} mainTitle={mainTitle} />
          </Card>
        )
      })}
    </div>
  )
}

export default CardContainer
