import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { LoginProvider } from './context/LoginContext'

function App(): JSX.Element {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
