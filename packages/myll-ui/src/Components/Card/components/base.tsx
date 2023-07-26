import { Children, cloneElement, HTMLAttributes, MouseEvent, MouseEventHandler, ReactNode, useId } from 'react'
import { CompoundProvider } from 'shared'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => {
  const { children, ...rest } = props

  return (
    <CompoundProvider>
      <div {...rest}>{children}</div>
    </CompoundProvider>
  )
}

Card.propTypes = {}

export default Card
