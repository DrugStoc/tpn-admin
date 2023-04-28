import { Outlet, Navigate } from 'react-router-dom'
import LoginContext from '../context/LoginContext'
import React, { useContext, useEffect, useState } from 'react'

const PrivateRoutes = (): JSX.Element => {
  const { loggedIn } = useContext(LoginContext)
  
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const checkLoggedIn = async (): Promise<void> => {
      setLoading(false)
    }
    void checkLoggedIn()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return loggedIn === true ? <Outlet /> : <Navigate to="login" />
}

export default PrivateRoutes
