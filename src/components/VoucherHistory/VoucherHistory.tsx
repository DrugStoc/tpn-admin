import React from 'react'
import Table from '../Table/Table'
import {
  VoucherHistoryTableData,
  VoucherHistoryTableHeadingData,
} from './VoucherHistoryTableData'
import Motion from '../shared/Motion'

const VoucherHistory = (): JSX.Element => {
  return (
    <Motion>
      <Table
        width="100%"
        columnData={VoucherHistoryTableHeadingData}
        TableData={VoucherHistoryTableData}
      />
    </Motion>
  )
}

export default VoucherHistory
