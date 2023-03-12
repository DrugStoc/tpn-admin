import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Overview from './pages/Overview'
import Orders from './pages/Orders'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/Orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
