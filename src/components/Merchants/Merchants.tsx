/* eslint-disable react/react-in-jsx-scope */
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
        <section className="tableSection">
          <Table
            columnData={MerchantTableHeadingData}
            TableData={MerchantsTableData}
          />
        </section>
        <Pagination />
      </div>
    </Motion>
  )
}

export default Merchants
