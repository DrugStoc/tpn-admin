import SidebarAside from '../components/Sidebar/Sidebar'
import ErrorView from '../components/Error/Error'

const Error = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <ErrorView />
    </main>
  )
}

export default Error
