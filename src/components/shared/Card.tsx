import React, { forwardRef } from 'react'
import { CardInterface } from './CardInterface'

const Card = forwardRef<HTMLDivElement, CardInterface>((props, ref) => {
  const { children, className } = props

  return (
    <div className={`card ${className ?? ''}`} ref={ref}>
      {children}
    </div>
  )
})
Card.displayName = 'Card'

export default Card
