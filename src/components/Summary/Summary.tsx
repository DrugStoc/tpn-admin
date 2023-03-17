import React from 'react'
import Card from '../shared/Card'
import summaryData from './SummaryData'

const Summary = (): JSX.Element => {
  return (
    <div className="chatSearchProducts">
      {summaryData.map((data, index: number) => (
        <Card key={index} className="positionVertical">
          <div className="title">
            <img src={data.icon} alt={`${data.title}  icon`} />
            <span>{data.title}</span>
          </div>
          <div>
            <div className="positionHorizontal">
              <div className="data">
                <div className={'trends'}>
                  <span>{data.trend}</span>
                  <img
                    src={data.trendIcon}
                    width={20}
                    height={20}
                    alt="trending up"
                  />
                </div>
                <h2>{data.value}</h2>
              </div>
              <div className="view">
                <span>View All</span>
                <img
                  alt={`${data.title.toLowerCase()} link icon`}
                  src={data.linkIcon}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Summary
