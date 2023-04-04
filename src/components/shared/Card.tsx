import React, { forwardRef } from 'react'
import { CardInterface } from './CardInterface'

const Card = forwardRef<HTMLDivElement, CardInterface>((props, ref) => {
  const { children, className, onClick } = props

  return (
    <div className={`card ${className ?? ''}`} ref={ref} onClick={onClick}>
      {children}
    </div>
  )
})
Card.displayName = 'Card'

export default Card
