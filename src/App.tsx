import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Home from './pages/Home/Overview'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Merchants from './pages/Merchants'
import Products from './pages/Products'
import Shippings from './pages/Shippings'
import AddCustomer from './pages/AddCustomer'
import AddMerchant from './pages/AddMerchant'
import AddProduct from './pages/AddProduct'
import AddShipping from './pages/AddShipping'
import CustomerDetails from './pages/CustomerDetail'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <main style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shippings" element={<Shippings />} />
            <Route path="/customers/new" element={<AddCustomer />} />
            <Route path="/merchants/new" element={<AddMerchant />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/shippings/new" element={<AddShipping />} />
            <Route path="/customer/:id" element={<CustomerDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
