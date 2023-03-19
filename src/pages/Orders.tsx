/* eslint-disable react/react-in-jsx-scope */
import OrdersAside from '../components/Orders/Orders'
import SidebarAside from '../components/Sidebar/Sidebar'

const Orders = (): JSX.Element => {
  return (
    <>
      <SidebarAside />
      <OrdersAside />
    </>
  )
}

export default Orders
