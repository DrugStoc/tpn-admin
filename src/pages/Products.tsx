import ProductsView from '../components/Products/Products'
import SidebarAside from '../components/Sidebar/Sidebar'

const Products = (): JSX.Element => {
  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SidebarAside />
      <ProductsView />
    </main>
  )
}

export default Products
