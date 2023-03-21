import React from 'react'
import ProductsAside from '../components/Products/Products'
import SidebarAside from '../components/Sidebar/Sidebar'

const Products = (): JSX.Element => {
  return (
    <>
      <SidebarAside />
      <ProductsAside />
    </>
  )
}

export default Products
