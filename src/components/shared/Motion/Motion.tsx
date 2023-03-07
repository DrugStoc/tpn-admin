import React, { useState, useEffect } from 'react'

const Motion = ({ children, className }: any): JSX.Element => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(1)
  }, [])

  return (
    <div
      style={{
        opacity,
        transition: 'opacity 1s ease-in-out',
      }}
      className={className}>
      {children}
    </div>
  )
}

export default Motion
