import SidebarAside from '../components/Sidebar/Sidebar'
import MerchantsView from '../components/Merchants/Merchants'

const Merchants = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <MerchantsView />
    </main>
  )
}

export default Merchants
