/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Motion from '../shared/Motion'
import Navbar from '../Navbar/Navbar'
import Filter from '../Filter/Filter'
import Summary from '../Summary/Summary'

const Overview = (): JSX.Element => {
  return (
    <Motion>
      <div className="section">
        <Navbar arrow={''} nav={undefined} />
        <Filter />
        <section className="fillSearch">
          <Summary />
          <div></div>
        </section>
      </div>
    </Motion>
  )
}

export default Overview
