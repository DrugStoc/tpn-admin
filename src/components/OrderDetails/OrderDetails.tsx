import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Motion from '../shared/Motion'
import OrderIdentity from './OrderIdentity'
import OrderList from './OrderList'
import { OrdersTableData } from '../Orders/OrdersTableData'

const OrderDetails = ({ arrow }: any): JSX.Element => {
  const { id }: any = useParams()
  const findId: any = OrdersTableData.find((item: any) => {
    return item.id === +id
  })

  const pharmacist = findId.row[4]['column 6']
  const orderId = findId.row[0]['column 2']
  const orderQty = findId.row[5]['column 7']
  const customerName = findId.row[1]['column 3']
  const customerPhoneNumber = findId.row[3]['column 5']
  const customerEmail = findId.row[2]['column 4']
  const purchaseTime = findId.row[6]['column 8']
  const timer = purchaseTime.split(',')
  let time: string = timer[timer.length - 1]
  const splitTime = time.split(':')
  const converter = +splitTime[0].trim()
  const converterRest = +splitTime[1].trim()

  if (converter > 12 && converter < 24) {
    if (`${converter - 12}`.length > 1) {
      time = `${converter - 12}:${converterRest} PM`
    } else {
      time = `0${converter - 12}:${converterRest} PM`
    }
  } else {
    if (`${converter - 12}`.length > 1) {
      time = `${time} AM`
    } else {
      time = `0${time} AM`
    }
  }

  return (
    <Motion>
      <div className="addCustomer">
        <Navbar nav="Orders" arrow={arrow} text="Order Details" />
        <section className="addCustomer-section">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <OrderList
              pharmacist={pharmacist}
              orderId={orderId}
              orderQty={orderQty}
            />
            <OrderIdentity
              customerName={customerName}
              customerPhoneNumber={customerPhoneNumber}
              customerEmail={customerEmail}
              time={time}
            />
          </div>
        </section>
      </div>
    </Motion>
  )
}

export default OrderDetails
