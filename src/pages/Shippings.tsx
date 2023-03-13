import ShippingsView from '../components/Shippings/Shippings'
import SidebarAside from '../components/Sidebar/Sidebar'

const Shippings = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <ShippingsView />
    </main>
  )
}

export default Shippings
