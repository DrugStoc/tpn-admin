import React from 'react'
import Navbar from '../Navbar/Navbar'
import Motion from '../shared/Motion'
import Card from '../shared/Card'

const Error = (): JSX.Element => {
  return (
    <Motion>
      <div className="mainSection">
        <Navbar arrow="" nav="Oh Snap!" />
        <Card className="error">
          <h1>Opps...</h1>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1678666116/404_lsr5ja.jpg"
            alt="404 error image"
            height="60vh"
            width="100%"
          />
          <h2>
            Page not found, <span>Try Again</span>
          </h2>
        </Card>
      </div>
    </Motion>
  )
}

export default Error
