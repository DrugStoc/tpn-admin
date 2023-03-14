import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Overview from './pages/Overview'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Merchants from './pages/Merchants'
import Products from './pages/Products'
import Shippings from './pages/Shippings'
import Error from './pages/Error'
import AddCustomer from './pages/AddCustomer'
import AddMerchant from './pages/AddMerchant'
import AddProduct from './pages/AddProduct'
import AddShipping from './pages/AddShipping'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/Orders" element={<Orders />} />
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/merchants" element={<Merchants />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/shippings" element={<Shippings />} />
          <Route path="/customers/new" element={<AddCustomer />} />
          <Route path="/merchants/new" element={<AddMerchant />} />
          <Route path="/products/new" element={<AddProduct />} />
          <Route path="/shippings/new" element={<AddShipping />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
