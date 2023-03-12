/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import Filter from '../Filter/Filter'
import Nav from '../Navbar/Navbar'
// import merchantSection from './Merchants.module.css'
import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Table from '../Table/Table'
import {
  MerchantsTableData,
  MerchantTableHeadingData,
} from './MerchantsTableData'
import Motion from '../shared/Motion'

const Merchants = (): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`

  return (
    <Motion>
      <div className={'merchantSection'}>
        <Nav text="Merchants" dayTimed={dayTimer} dayTimer={dayTime} />
        <Filter
          linkText="merchants"
          column={MerchantTableHeadingData}
          buttonText
          text="Add Merchant"
        />
        {/* gen */}
        <section className={'merchantTable'}>
          <Table
            columnData={MerchantTableHeadingData}
            TableData={MerchantsTableData}
          />
        </section>
      </div>
    </Motion>
  )
}

export default Merchants
