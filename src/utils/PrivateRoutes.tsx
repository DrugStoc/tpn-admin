import { Outlet, Navigate } from 'react-router-dom'
import LoginContext from '../context/LoginContext'
import React, { useContext } from 'react'

const PrivateRoutes = (): JSX.Element => {
  const { loggedIn } = useContext(LoginContext)
  return loggedIn === true ? <Outlet /> : <Navigate to="login" />
}

export default PrivateRoutes
