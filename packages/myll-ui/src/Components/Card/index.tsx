import { HTMLAttributes } from 'react'
import { CompoundProvider } from 'shared'

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, ...rest } = props

  return (
    <CompoundProvider>
      <div {...rest}>{children}</div>
    </CompoundProvider>
  )
}

Card.propTypes = {}

export default Card
