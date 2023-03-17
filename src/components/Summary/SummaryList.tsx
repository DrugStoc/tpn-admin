import React from 'react'
import Card from '../shared/Card'
import { summaryInterface } from './SummaryInterface'

const SummaryList = ({
  data: { title, icon, trend, trendIcon, value, linkIcon },
}: summaryInterface): JSX.Element => {
  return (
    <Card className="positionVertical">
      <div className="title">
        <img src={icon} alt={`${title} icon`} />
        <span>{title}</span>
      </div>
      <div>
        <div className="positionHorizontal">
          <div className="data">
            <div className={'trends'}>
              <span>{trend}</span>
              <img src={trendIcon} width={20} height={20} alt="trending up" />
            </div>
            <h2>{value}</h2>
          </div>
          <div className="view">
            <span>View All</span>
            <img alt={`${title.toLowerCase()} link icon`} src={linkIcon} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SummaryList
