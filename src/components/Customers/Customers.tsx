import React from 'react'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import {
  CustomersTableData,
  CustomersTableHeadingData,
} from './CustomersTableData'
import Pagination from '../Pagination/Pagination'
import Motion from '../shared/Motion'

const Customers = (): JSX.Element => {
  return (
    <Motion>
      <div className="mainSection">
        <Navbar arrow="" nav="Customers" />
        <Filter
          linkText="customers"
          text="Add Customers"
          buttonText
          column={CustomersTableHeadingData}
        />
        <Table
          columnData={CustomersTableHeadingData}
          TableData={CustomersTableData}
        />
        <Pagination />
      </div>
    </Motion>
  )
}

export default Customers
