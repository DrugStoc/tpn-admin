/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import Filter from '../Filter/Filter'
import Nav from '../Navbar/Navbar'
// import orderSection from './Orders.module.css'
import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Table from '../Table/Table'
import { OrdersTableData, OrderTableHeadingData } from './OrdersTableData'
import Motion from '../shared/Motion'

const Orders = (): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`

  return (
    <Motion>
      <div className='orderSection'>
        <Nav text="Orders" dayTimed={dayTimer} dayTimer={dayTime} />
        <Filter column={OrderTableHeadingData} />
        <section style={{ position: 'absolute', top: 54 }}>
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
