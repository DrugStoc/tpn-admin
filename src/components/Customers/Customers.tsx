/* eslint-disable react/react-in-jsx-scope */
import Filter from '../Filter/Filter'
import Nav from '../Navbar/Navbar'
import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Table from '../Table/Table'
import {
  CustomersTableData,
  CustomersTableHeadingData,
} from './CustomersTableData'
import Motion from '../shared/Motion'

const Customers = (): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`
  return (
    <Motion>
      <div className='customerSection'>
        <Nav text="Customers" dayTimed={dayTimer} dayTimer={dayTime} />
        <Filter
          linkText="customers"
          buttonText
          column={CustomersTableHeadingData}
          text="Create Customer"
        />
        {/* gen */}
        <section className='customersTable'>
          <Table
            minWidth="1140px"
            columnData={CustomersTableHeadingData}
            TableData={CustomersTableData}
          />
        </section>
      </div>
    </Motion>
  )
}

export default Customers
