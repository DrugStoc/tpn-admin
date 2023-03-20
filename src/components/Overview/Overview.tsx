import React from 'react'
import Motion from '../shared/Motion'
import Navbar from '../Navbar/Navbar'
import Filter from '../Filter/Filter'
import Summary from '../Summary/Summary'
import MostSearched from '../MostSearched/MostSearched'
import Chart from '../Chart/Chart'

const Overview = (): JSX.Element => {
  return (
    <Motion>
      <div className="section">
        <Navbar arrow={''} nav={undefined} />
        <Filter />
        <section className="fillSearch">
          <Summary />
          <MostSearched />
        </section>
        <Chart />
      </div>
    </Motion>
  )
}

export default Overview
