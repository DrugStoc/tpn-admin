import SidebarAside from '../components/Sidebar/Sidebar'
import AddProductView from '../components/AddProduct/AddProduct'

const AddProduct = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <AddProductView />
    </main>
  )
}

export default AddProduct
