import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Overview from './pages/Overview'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Merchants from './pages/Merchants'

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
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
