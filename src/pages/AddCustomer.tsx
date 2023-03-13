/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import SidebarAside from '../components/Sidebar/Sidebar'
import AddCustomerView from '../components/AddCustomer/AddCustomer'

const AddCustomer = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <AddCustomerView />
    </main>
  )
}

export default AddCustomer
