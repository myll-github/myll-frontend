import AntdCard, { CardInterface, CardMetaProps, CardProps } from 'antd/es/card'
import { CompoundProvider } from 'shared'

const Card = (props: CardProps) => {
  return (
    <CompoundProvider>
      <AntdCard {...props} />
    </CompoundProvider>
  )
}

Card.Body = ({ title, description, ...antdProps }: CardMetaProps) => {
  return <AntdCard.Meta title={title} description={description} {...antdProps} />
}

Card.propTypes = {}

export default Card
