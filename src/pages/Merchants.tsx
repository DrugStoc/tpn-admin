/* eslint-disable react/react-in-jsx-scope */
import MerchantsAside from '../components/Merchants/Merchants'
import SidebarAside from '../components/Sidebar/Sidebar'

const Merchants = (): JSX.Element => {
  return (
    <>
      <SidebarAside />
      <MerchantsAside />
    </>
  )
}

export default Merchants
