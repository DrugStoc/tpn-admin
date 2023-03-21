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
          </Routes>
        </main>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
