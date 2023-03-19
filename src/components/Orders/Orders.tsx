/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import { OrdersTableData, OrderTableHeadingData } from './OrdersTableData'
import Motion from '../shared/Motion'

const Orders = (): JSX.Element => {
  return (
    <Motion>
      <div className="orderSection">
        <Navbar arrow="" text="Orders" nav={undefined} />
        <Filter
          linkText="orders"
          text="Place Orders"
          buttonText
          column={OrderTableHeadingData}
        />
        <section className="tableSection">
          <Table
            columnData={OrderTableHeadingData}
            TableData={OrdersTableData}
          />
        </section>
      </div>
    </Motion>
  )
}

export default Orders
