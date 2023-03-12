import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Overview from './pages/Overview'
import Orders from './pages/Orders'
import Customers from './pages/Customers'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/Orders" element={<Orders />} />
          <Route path="/dashboard/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
