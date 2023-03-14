import SidebarAside from '../components/Sidebar/Sidebar'
import CustomerDetailsView from '../components/CustomerDetails/CustomerDetails'

const CustomerDetails = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <CustomerDetailsView />
    </main>
  )
}

export default CustomerDetails
