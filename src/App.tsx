import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Sidebar from './pages/Sidebar'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <main style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin/overview" element={<Sidebar />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
