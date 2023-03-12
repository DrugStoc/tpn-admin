/* eslint-disable react/react-in-jsx-scope */
import Overview from '../components/Overview/Overview'
import SidebarAside from '../components/Sidebar/Sidebar'

const Sidebar = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <Overview />
    </main>
  )
}

export default Sidebar
