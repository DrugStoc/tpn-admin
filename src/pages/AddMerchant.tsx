import SidebarAside from '../components/Sidebar/Sidebar'
import AddMerchantView from '../components/AddMerchant/AddMerchant'

const AddMerchant = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <AddMerchantView />
    </main>
  )
}

export default AddMerchant
