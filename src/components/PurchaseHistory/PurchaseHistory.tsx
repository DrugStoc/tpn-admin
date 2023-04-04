import React from 'react'
import Motion from '../shared/Motion'
import Table from '../Table/Table'
import {
  PurchaseHistoryTableData,
  PurchaseHistoryTableHeadingData,
} from './PurchaseHistoryTableData'

const PurchaseHistory = (): JSX.Element => {
  return (
    <Motion>
      <Table
        width="100%"
        columnData={PurchaseHistoryTableHeadingData}
        TableData={PurchaseHistoryTableData}
      />
    </Motion>
  )
}

export default PurchaseHistory
