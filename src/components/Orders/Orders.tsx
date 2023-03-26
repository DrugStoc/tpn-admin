import React from 'react'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import {
  OrderFilterData,
  OrdersTableData,
  OrderTableHeadingData,
} from './OrdersTableData'
import Motion from '../shared/Motion'
import Pagination from '../Pagination/Pagination'

const Orders = (): JSX.Element => {
  return (
    <Motion>
      <div className="mainSection">
        <Navbar arrow="" nav="Orders" />
        <Filter
          linkText="orders"
          text="Place Orders"
          buttonText
          column={OrderFilterData}
        />
        <Table columnData={OrderTableHeadingData} TableData={OrdersTableData} />
        <Pagination />
      </div>
    </Motion>
  )
}

export default Orders
