import React from 'react'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import { ProductsTableData, ProductTableHeadingData } from './ProductsTableData'
import Pagination from '../Pagination/Pagination'
import Motion from '../shared/Motion'

const Products = (): JSX.Element => {
  return (
    <Motion>
      <div className="mainSection">
        <Navbar arrow="" nav="Products" />
        <Filter
          linkText="products"
          text="Add Products"
          buttonText
          column={ProductTableHeadingData}
        />
        <Table
          columnData={ProductTableHeadingData}
          TableData={ProductsTableData}
        />
        <Pagination />
      </div>
    </Motion>
  )
}

export default Products
