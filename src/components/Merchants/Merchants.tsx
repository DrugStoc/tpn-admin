import React from 'react'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import {
  MerchantsTableData,
  MerchantTableHeadingData,
} from './MerchantsTableData'
import Pagination from '../Pagination/Pagination'
import Motion from '../shared/Motion'

const Merchants = (): JSX.Element => {
  return (
    <Motion>
      <div className="mainSection">
        <Navbar arrow="" nav="Merchants" />
        <Filter
          linkText="merchants"
          text="Add Merchants"
          buttonText
          column={MerchantTableHeadingData}
        />
        <Table
          columnData={MerchantTableHeadingData}
          TableData={MerchantsTableData}
        />
        <Pagination />
      </div>
    </Motion>
  )
}

export default Merchants
