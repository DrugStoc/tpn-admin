import SidebarAside from '../components/Sidebar/Sidebar'
import AddShippingView from '../components/AddShipping/AddShipping'

const AddShipping = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <AddShippingView />
    </main>
  )
}

export default AddShipping
