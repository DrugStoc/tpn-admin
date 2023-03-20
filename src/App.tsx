/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Home from './pages/Home/Overview'
import Orders from './pages/Orders'
import Customers from './pages/Customers'

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
          </Routes>
        </main>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
