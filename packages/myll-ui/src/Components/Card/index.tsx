import { ReactNode } from 'react'

import Card from './Card'

interface Props {
  image: ReactNode
  mainTitle: string
  subTitle: string
}

const img = <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />

const RoundCard = ({ image, mainTitle, subTitle }: Props) => {
  return (
    <Card className="w-150tvw h-116tvh" cover={image ?? img}>
      <Card.Body title={mainTitle} description={subTitle} />
    </Card>
  )
}

export { Card, RoundCard }
