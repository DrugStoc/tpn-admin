/* eslint-disable react/react-in-jsx-scope */
import CustomersAside from '../components/Customers/Customers'
import SidebarAside from '../components/Sidebar/Sidebar'

const Customers = (): JSX.Element => {
  return (
    <>
      <SidebarAside />
      <CustomersAside />
    </>
  )
}

export default Customers
