import React from 'react'
import summaryData from './SummaryData'
import SummaryList from './SummaryList'

const Summary = (): JSX.Element => {
  return (
    <div className="chatSearchProducts">
      {summaryData.map((data, index: number) => (
        <SummaryList data={data} key={index} />
      ))}
    </div>
  )
}

export default Summary
