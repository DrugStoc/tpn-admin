/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import Motion from '../shared/Motion'
import Navbar from '../Navbar/Navbar'

const Overview = (): JSX.Element => {
  return (
    <Motion>
      <div className="section">
        <Navbar arrow={''} nav={undefined} />
      </div>
    </Motion>
  )
}

export default Overview
