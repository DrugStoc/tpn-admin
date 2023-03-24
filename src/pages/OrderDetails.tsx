import React from 'react'
import OrderDetailsAside from '../components/OrderDetails/OrderDetails'
import SidebarAside from '../components/Sidebar/Sidebar'

const OrderDetails = (): JSX.Element => {
  return (
    <>
      <SidebarAside />
      <OrderDetailsAside />
    </>
  )
}

export default OrderDetails
