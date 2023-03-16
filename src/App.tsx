import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'
import Home from './pages/Home/Overview'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <main style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
