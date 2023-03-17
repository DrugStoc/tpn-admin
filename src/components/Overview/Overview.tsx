/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Motion from '../shared/Motion'
import Navbar from '../Navbar/Navbar'
import Filter from '../Filter/Filter'

const Overview = (): JSX.Element => {
  return (
    <Motion>
      <div className="section">
        <Navbar arrow={''} nav={undefined} />
        <Filter />
      </div>
    </Motion>
  )
}

export default Overview
