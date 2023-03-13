import Filter from '../Filter/Filter'
import Nav from '../Navbar/Navbar'
import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Table from '../Table/Table'
import {
  ShippingsTableData,
  ShippingTableHeadingData,
} from './ShippingsTableData'
import Motion from '../shared/Motion'

const Shippings = (): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`

  return (
    <Motion>
      <div className="shippingSection">
        <Nav text="Shippings" dayTimed={dayTimer} dayTimer={dayTime} />
        <Filter
          linkText="shippings"
          column={ShippingTableHeadingData}
          buttonText
          text="Add Shipping Location"
        />
        <section className="shippingTable">
          <Table
            columnData={ShippingTableHeadingData}
            TableData={ShippingsTableData}
          />
        </section>
      </div>
    </Motion>
  )
}

export default Shippings
