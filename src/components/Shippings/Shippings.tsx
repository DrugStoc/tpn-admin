import React from 'react'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import {
  ShippingsTableData,
  ShippingTableHeadingData,
} from './ShippingsTableData'
import Pagination from '../Pagination/Pagination'
import Motion from '../shared/Motion'

const Shippings = (): JSX.Element => {
  return (
    <Motion>
      <div className="mainSection">
        <Navbar arrow="" nav="Shippings" />
        <Filter
          linkText="shippings"
          text="Add Shippings"
          buttonText
          column={ShippingTableHeadingData}
        />
        <Table
          columnData={ShippingTableHeadingData}
          TableData={ShippingsTableData}
        />
        <Pagination />
      </div>
    </Motion>
  )
}

export default Shippings
